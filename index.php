<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>projects</title>
    <link rel="stylesheet" href="/style.css">
    <link rel="shortcut icon" href="/icon/list.svg" type="image/svg+xml">
</head>
<body>
    <?php 
    foreach(glob("./*", GLOB_ONLYDIR) as $categoryLink) {
        $categoryName = ucwords(substr($categoryLink, 4));
        echo "
            <h2>".$categoryName."</h2>
            <div class=\"projectContainer\">";

            foreach(glob("./".$categoryLink."/*", GLOB_ONLYDIR) as $projectLink) {
                $projectName = substr($projectLink, strlen($categoryLink)+3);
                echo "
                    <div class=\"projectWrapper\">
                    <a href=\"" . $projectLink ."\">" . $projectName . "</a>";
            }; 
            ?>
        </div>
    <?php
    };
    ?>
</body>
</html>