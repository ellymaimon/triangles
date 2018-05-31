function isTriangle(s1, s2, s3) {
  if(s1 + s2 <= s3 || s2 + s3 <= s1 || s1 + s3 <= s2) {
    return false;
  } else {
    return true;
  }
}

$(function(){
  $("form#sideForm").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if(isTriangle(side1, side2, side3)) {
      if(side1 === side2 || side2 === side3) {
        if(side1 === side3) {
          $(".outcomes").text("Triangle is an equilateral");
        } else {
          $(".outcomes").text("Triangle is an isosceles");
        }
      }
      else {
        $(".outcomes").text("Triangle is a scalene");
      }
    } else {
      $(".outcomes").text("Shape is not a triangle");
    }
  });

});
