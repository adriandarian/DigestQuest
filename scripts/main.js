requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    //the left side is the module ID, the right side is the path to the jQuery file, relative to baseUrl. Also, the path should NOT include the '.js' file extension. This example is using jQuery 1.9.0 located at js/lib/jQuery-1.9.0.js, relative to the HTML page.
    jquery: 'jquery-1.9.0'
  }
});

define(['lib/jquery'], function($) {

})

var elm = document.getElementById('image'),
  img = elm.files[0],
  fileName = img.name,
  fileSize = img.size;

var reader = new FileReader(),
  binary, base64;
reader.addEventListener('loadend', function () {
  binary = reader.result;
  base64 = btoa(binary);
}, false);
reader.readAsBinaryString(img);

document.getElementById('image').value;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$(document).ready(function () {
  $("#imgInp").change(function(){
    readURL(this);
  });
});

Tesseract.recognize(blah).then(function(result){
var elem = document.createElement("p")
var text = document.createTextNode(result);
elem.appendChild(text);
document.getElementById("display").appendChild(node);
})
