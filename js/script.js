$(document).ready(function() {

  // Will's JS
  var audio = new Audio('audio/chacarron.mp3');

  $('#will-moritz').mouseenter(function() {
    audio.play();
  }).mouseleave(function(){
    audio.pause();
  });
 
 var Fetty = new Audio('audio/Fetty Wap - RGF Island [Audio Only].mp3');

  $('#Johan_Pena').mouseenter(function() {
    Fetty.play();
  }).mouseleave(function(){
    Fetty.pause();
  });
  // Anais Perez's Javascript


  // Austin Yates's Javascript


  // Hernan Rodriguez's Javascript


  // Hilda Ortega's Javascript


  // Jenifer Soriano's Javascript


  // Jessica Valcin's Javascript


  // Joel Colon's Javascript


  // Johan Pena's Javascript


  // Kenia Martinez's Javascript


  // Luis Abreu's Javascript


  // Pierre-Ryan Baptiste's Javascript


  // Prince Warner's Javascript
  $('#prince-warner').mouseenter(function() {
    document.body.style.backgroundColor = "black";
  }) .mouseleave(function(){
     document.body.style.backgroundColor = "white";
  });

  // Roberto Roman's Javascript


  // Sergio Hugo's Javascript


  // Shyanne Jordan's Javascript


  // Tyrese Francis's Javascript
var panda = new Audio('audio/panda.mp3');

  $('#panda').mouseenter(function() {
    panda.play();
  }).mouseleave(function(){
    panda.pause();
  });


});
