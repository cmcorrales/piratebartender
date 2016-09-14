$(document).ready(function(){
  var drinkIngredients = [];
  var strongIngredients = ["glug of rum", "slug of whiskey", "splash of gin"];
  var nonStrongIngredients = ["sprite", "water", "cranberry juice"]
  var saltyIngredients = ["olive on a stick", "salt-dusted rim", "rasher of bacon"];
  var nonSaltyIngredients = ["muddled mint", "minced basil", "squeeze of lime", "sprig of oregano"]
  var bitterIngredients = ["shake of bitters", "splash of tonic", "twist of lemon peel"];
  var nonBitterIngredients = ["crushed ice", "ginger ale"]
  var sweetIngredients = ["sugar cube", "spoonful of honey", "splash of cola"]
  var nonSweetIngredients = ["trickle of vodka", "fresh sage", "cucumber slice"]
  var fruityIngredients = ["slice of orange", "dash of cassis", "cherry on top"]
  $(".strongyes").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var strongIngredient = strongIngredients[randomIndex];
    drinkIngredients.push(strongIngredient);
    $(this).parent("div").hide();
    $("div.salty").show();
  })
  $(".strongno").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var nonStrongIngredient = nonStrongIngredients[randomIndex];
    drinkIngredients.push(nonStrongIngredient);
    $(this).parent("div").hide();
    $("div.salty").show();
  })
  $(".saltyyes").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var saltyIngredient = saltyIngredients[randomIndex];
    drinkIngredients.push(saltyIngredient);
    $(this).parent("div").hide();
    $("div.bitter").show();
  })
  $(".saltyno").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var nonSaltyIngredient = nonSaltyIngredients[randomIndex];
    drinkIngredients.push(nonSaltyIngredient);
    $(this).parent("div").hide();
    $("div.bitter").show();
  })
  $(".bitteryes").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var bitterIngredient = bitterIngredients[randomIndex];
    drinkIngredients.push(bitterIngredient);
    $(this).parent("div").hide();
    $("div.sweet").show();
  })
  $(".bitterno").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var nonBitterIngredient = nonBitterIngredients[randomIndex];
    drinkIngredients.push(nonBitterIngredient);
    $(this).parent("div").hide();
    $("div.sweet").show();
  })
  $(".sweetyes").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var sweetIngredient = sweetIngredients[randomIndex];
    drinkIngredients.push(sweetIngredient);
    $(this).parent("div").hide();
    $("div.fruity").show();
  })
  $(".sweetno").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var nonSweetIngredient = nonSweetIngredients[randomIndex];
    drinkIngredients.push(nonSweetIngredient);
    $(this).parent("div").hide();
    $("div.fruity").show();
  })
  $(".fruityyes").click(function() {
    var randomIndex = Math.floor(Math.random()*3);
    var fruityIngredient = fruityIngredients[randomIndex];
    drinkIngredients.push(fruityIngredient);
    $(this).parent("div").hide();
    $(".drink").html("<p>Look ye bartender square in the eye, and order this:<br>"+drinkIngredients+"</p>");
    $("div.drink").show();
  })
  $(".fruityno").click(function() {
    $(this).parent("div").hide();
    $(".drink").html("<p>Look ye bartender square in the eye, and order this:<br>"+drinkIngredients+"</p>");
    $("div.drink").show();
  })
});
