//Début jQuerry
$(document).ready(function(){

//Changement de couleurs random pour premier carré
function changeRandomColor(){
  var color = ['blue', 'green', 'red', 'yellow', 'purple'];
  var randFirst = color[Math.floor(Math.random() * color.length)];
  var randSecond = color[Math.floor(Math.random() * color.length)];
    $('.first-carre').css('background-color',randFirst);
    $('.second-carre').css('background-color', randSecond);
}
// Test d'égalité des deux couleurs + Compteur de points
p = 0;
$('.validation').click(function(){
  var color1 = $('.first-carre').css("background-color");
  var color2 = $('.second-carre').css("background-color");
  if (color1 == color2) {
    p = p + 1;
  }else {
    p = p - 1;
  }
  if (p <= -2) {
    $('.space-game').css('display','none');
    $('.loose-window').css('display', 'flex');
  }
  $('.points-texte').html(p);
})


//Intervalle entre le changement de couleurs
function changeRandomColorTimer(){
  var reducTime = 2; //Nbr de points de la réduction de délais
  var timer = 1000; //Délais enntre deux hcangements de couleurs
  setInterval(changeRandomColor, timer);
  console.log(p);
  console.log(reducTime);
  console.log(timer);
  if (p >= reducTime) {
    reducTime = reducTime + 5;  //Augmentation
    timer = 1;
  }
}


$('.start-game').click(function(){
  $('.validation').css('display', 'block');
  changeRandomColorTimer();
});

});
