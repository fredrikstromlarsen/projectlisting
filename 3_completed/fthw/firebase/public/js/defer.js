themeOnload();
document.getElementById('logo').innerHTML = '<img src="img/logo.png" alt="Logo">';
document.getElementById('themeBtn').innerHTML = '<img src="img/tema.svg" alt="Tema">';

function forside(){
  document.getElementById('img').innerHTML = '<img src="img/interesseProgrammering.jpg" alt="HTML Programmering">';
}
function mitthjemsted(){
  document.getElementById('kart').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8023.674952481428!2d10.812567902468224!3d59.81726980931476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464168867089d89f%3A0x5bb0ebeae43d6d29!2zMTQxMyBUw6VybsOlc2Vu!5e0!3m2!1sen!2sno!4v1600938289111!5m2!1sen!2sno" width="1000" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
}
function ommeg(){
  document.getElementById('video').innerHTML = '<iframe width="900" height="475" src="https://www.youtube-nocookie.com/embed/6lhiLn_clzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; 
  document.getElementById('icon').innerHTML = '<img src="img/email.svg">';
  document.getElementById('icon1').innerHTML = '<img src="img/instagram.svg">';
}
function registrer(){
  document.getElementById('img').innerHTML = '<img src="img/dromtorp-vgs.jpeg" alt="Bilde av Drømtorp VGS"><img src="img/dromtorp-vgs-2.jpeg" alt="Enda et bilde av Drømtorp VGS">';
}