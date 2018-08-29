var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

//based on helpful exmaples from w3schools.com

/*var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;

    // change the line height based on the slider value
    var lh = slider.value / 100;
    document.getElementById("words").style.lineHeight = lh ;

  // if the slider value is outside of optimum legibility, make the label red
  if (slider.value < 120) {
    document.getElementById("value").style.color = "#d65836";
    document.getElementById("percent").style.color = "#d65836";
  }
  else if (slider.value > 145) {
   document.getElementById("value").style.color = "#d65836";
  document.getElementById("percent").style.color = "#d65836";
  }

  else {
    document.getElementById("value").style.color = "#33765f";
  document.getElementById("percent").style.color = "#33765f";
  }

}
*/
