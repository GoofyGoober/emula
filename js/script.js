function str2num(mystr) {
  var mystr = mystr.toUpperCase();
  var conv = [];
  var l = mystr.length;
  for (var i=0; i<l; i++){
    conv[i] = mystr[i].charCodeAt();
  }
  return conv;
} 

function str2binary(mystr) {
  var unicode = str2num(mystr)
  for (var i = 0; i < unicode.length; i++) {
    unicode[i] = unicode[i].toString(2)
  };
  return unicode
} 

function binaryToStr(bin) {
  return parseInt(bin,2)
}

$(document).ready(function(){
  $('#output').hide()
  $('form').submit(function(e){
    e.preventDefault()
    var testo = $('#text-input').val()
    if (testo.length > 0){
      var unicode = str2num(testo);

      $('#output').text(unicode+"")
      $('#output').fadeIn()
      $('#output-binary').text(str2binary(testo)+"")
      
    } else {
      $('#text-input').focus()
      $('#output').fadeOut()
    }
  })
})


