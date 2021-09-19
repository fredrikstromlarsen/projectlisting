<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>projects</title>
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/fonts.css">
    <!-- <link rel="shortcut icon" href="/icon/list.svg" type="image/svg+xml"> -->
    <script src="/main.js" defer></script>
</head>

<body>
    <div class="wrapper">
        <?php
        foreach (glob("./*", GLOB_ONLYDIR) as $categoryLink) {

            // Checks if folder name starts with \d (a number) followed by a \_ (an underscore)
            if (preg_match('/\.\/\d\_/i', $categoryLink) && glob("$categoryLink/*")) {

                // Remove the first 4 letters of the folder relative path, e.g. ./2_active -> active
                // ucwords() capitalizes the first letter of every word in the string, e.g. active -> Active
                $categoryName = ucwords(substr($categoryLink, 4));
                echo "
                    <div class=\"categoryWrapper\">
                        <h2 class=\"categoryTitle\">" . $categoryName . "</h2>
                        <div class=\"projectContainer\">";

                // Fetch all folders within the category as $projectLink
                foreach (glob("./" . $categoryLink . "/*", GLOB_ONLYDIR) as $projectLink) {

                    // Removes category relative path and "./" from $projectLink, e.g. ./2_active/2fa -> 2fa
                    $projectName = substr($projectLink, strlen($categoryLink) + 3);

                    // Substitutes dashes and underscores with spaces, and capitalizes first letter of all words: very-cool-project -> "Very Cool Project"
                    $projectTitle = ucwords(preg_replace('/_|-/', ' ', $projectName));

                    // Checks wether or not the given project has a description file within its directory
                    if (file_exists($projectLink . '/desc.txt')) {

                        // Opens description in Read mode, and reads its contents
                        $fileDescription = fopen($projectLink . '/desc.txt', 'r');
                        $projectDescription = fgets($fileDescription);
                        fclose($fileDescription);

                        // Checks if there is anything at all within the description file
                        // Otherwise, substitute with default value
                        if ($projectDescription == "") {
                            $projectDescription = "No description found.";
                        }
                    } else {
                        $projectDescription = "No description found.";
                    }

                    echo "
                    <div class=\"projectWrapper\">
                        <h3 class=\"projectTitle\">" . $projectTitle . "</h3>
                        <a href=\"" . $projectLink . "\">/" . $projectName . "</a>
                        <p class=\"projectDescription\">" . $projectDescription . "</p>
                        <div class=\"pButtonContainer\">";

                    // Give projects within a certain category only a specific set of user interactable buttons
                    switch ($categoryName) {
                        case "To-do":
        ?>
                            <button class="projectButton projectButtonB"> </button>
                            <button class="projectButton projectButtonR"> </button>
                        <?php
                            break;
                        case "Active":
                        ?>
                            <button class="projectButton projectButtonG"> </button>
                            <button class="projectButton projectButtonY"> </button>
                        <?php
                            break;
                        case "Completed":
                        ?>
                            <button class="projectButton projectButtonB">ﮮ </button>
                        <?php
                            break;
                        case "Archived":
                        ?>
                            <button class="projectButton projectButtonG">ﭯ </button>
        <?php
                            break;
                    }
                    echo "  </div>
                    </div>";
                };

                echo "
                </div>
            </div>";
            }
        }
        ?>
    </div>
</body>

</html>

<!-- 
        TODO:
        - "New Project" box on To-do.
        - "Import Project" button on Completed.
        - Make description of projects in Active and To-do editable.
        - Max height for descriptions
        - Max width for titles and links

        - Mobile view
        - About me
        - Blog/Documentation
 -->