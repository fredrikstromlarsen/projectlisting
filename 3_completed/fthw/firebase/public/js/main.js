function themeOnload(){
  themeLS = localStorage.getItem('theme');
  theme = JSON.parse(themeLS);
  if(theme === 'dark'){
    document.documentElement.classList.toggle('fargetema');
    document.querySelectorAll('.inverted').forEach((result) =>{
      result.classList.toggle('invert');
    })
    themeDark = true;
  }else{
    themeDark = false;
  }
  console.log('themeOnload() har kjørt. themeDark = ' + themeDark + ', theme = ' + theme)
}
document.getElementById('themeBtn').onclick = function themeBtn(){
  document.documentElement.classList.toggle('fargetema');
  document.querySelectorAll('.inverted').forEach((result) =>{
    result.classList.toggle('invert');
  })
  if(themeDark === true){
    themeDark = false;
    localStorage.setItem('theme', JSON.stringify('light'))
  }else{
    themeDark = true;
    localStorage.setItem('theme', JSON.stringify('dark'))
  }
  console.log('themeBtn() har kjørt. themeDark = ' + themeDark)
}

function telleNormal(){
  interval1 = window.setInterval(list2infinity, 250);
}
function telleRask(){
  interval2 = window.setInterval(list2infinity, 0);
}
function telleStopp(){
  clearInterval(interval1);
  clearInterval(interval2);
}
function telleReset(){
  location.reload();
}
function list2infinity(){
  document.getElementById('list2infinity').innerHTML += '<li></li>';
}