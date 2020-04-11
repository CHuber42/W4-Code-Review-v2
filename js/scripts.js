function pizza(basics, meats, vegetables) {
  this.size = basics[0];
  this.crust = basics[1];
  this.cheese = basics[2];
  this.meats = meats;
  this.vegetables = vegetables;
  this.basePrice = 0;
}

pizza.prototype.calcPrice = function() {
  console.log(this.size)
  var price = 12.00;
  switch (this.size) {
    case 18: price += 3;
    case 16: price += 3;    
  }
  switch (this.crust) {
    case "stuffed": price += 1;
    case "pan": price += 1;    
  }
  switch (this.cheese) {
    case "extra": price += 1;    
  }
  for (var i = 0; i < 4; i++){
    price += (1 * this.meats[i])
  }
  for (var i = 0; i < 8; i++){
    price += (.5 * this.vegetables[i])
  } 
  this.basePrice += price;
 
}


var cart = []

$(document).ready(function() {
  var showMeat = $("#show-meat");
  var showVeg = $("#show-veg");
  var showBase = $("#show-base");
  var imageList = [$("#pepperoni"), $("#italian"), $("#ham"), $("#bacon"), $("#mush"), $("#spinach"), $("#onions"), $("#olives"), $("#bell"), $("#banana"), $("#roma"), $("#jalapeno")];

  $("#new-pizza").submit(function(event) {
    event.preventDefault();   
    var size = parseInt($("input:radio[name=size]:checked").val());
    var crust = $("input:radio[name=crust]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var pepperoni = parseInt($("input:radio[name=pepperoni]:checked").val())
    var italiansausage = parseInt($("input:radio[name=italiansausage]:checked").val());
    var bacon = parseInt($("input:radio[name=bacon]:checked").val());
    var ham = parseInt($("input:radio[name=ham]:checked").val())
    var mushrooms = parseInt($("input:radio[name=mushrooms]:checked").val());
    var spinach = parseInt($("input:radio[name=spinach]:checked").val());
    var onions = parseInt($("input:radio[name=onions]:checked").val());
    var olives = parseInt($("input:radio[name=olives]:checked").val());
    var peppers = parseInt($("input:radio[name=peppers]:checked").val());
    var banana = parseInt($("input:radio[name=banana-peppers]:checked").val());
    var roma =  parseInt($("input:radio[name=roma-tomatoes]:checked").val());
    var jalapeno = parseInt($("input:radio[name=jalapeno]:checked").val());


    var basics = [size, crust, cheese]
    var meats = [pepperoni, italiansausage, bacon, ham]
    var veggies = [mushrooms, spinach, onions, olives, peppers, banana, roma, jalapeno]

    cart.push(new pizza(basics, meats, veggies))
  })

  $("#checkout").click(function() {
    var total = 0;
    event.preventDefault();
    for (var i = 0; i < cart.length; i++){ 
      cart[i].basePrice = 0;    
      cart[i].calcPrice();
      total += (cart[i].basePrice)
    }
    $("#total").text(total.toFixed(2));
  })

  showMeat.click(function(event) {
    $("#basics").hide();
    $("#vegetables").hide();
    $("#meats").show();    
  })
  showVeg.click(function(event) {
    $("#meats").hide();
    $("#basics").hide();
    $("#vegetables").show();    
  })
  showBase.click(function(event) {
    $("#meats").hide();
    $("#vegetables").hide();
    $("#basics").show();    
  })

  
  
  // $("input[type=radio]").on("change", function() {
  //   debugger;
  //   
  
  //     }
  //   }
  // })
  $("input[type=radio]").change(function(){
    var pepperoni = parseInt($("input:radio[name=pepperoni]:checked").val())
    var italiansausage = parseInt($("input:radio[name=italiansausage]:checked").val());
    var bacon = parseInt($("input:radio[name=bacon]:checked").val());
    var ham = parseInt($("input:radio[name=ham]:checked").val())
    var mushrooms = parseInt($("input:radio[name=mushrooms]:checked").val());
    var spinach = parseInt($("input:radio[name=spinach]:checked").val());
    var onions = parseInt($("input:radio[name=onions]:checked").val());
    var olives = parseInt($("input:radio[name=olives]:checked").val());
    var peppers = parseInt($("input:radio[name=peppers]:checked").val());
    var banana = parseInt($("input:radio[name=banana-peppers]:checked").val());
    var roma =  parseInt($("input:radio[name=roma-tomatoes]:checked").val());
    var jalapeno = parseInt($("input:radio[name=jalapeno]:checked").val());
    var valuesList = [pepperoni, italiansausage, ham, bacon, mushrooms, spinach, onions, olives, peppers, banana, roma, jalapeno];

    for (var i = 0; i < 12; i++){
      if (valuesList[i] > 0) {
        imageList[i].show();
      }
      else {
        imageList[i].hide();
      }
    }
})

})  