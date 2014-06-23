function str2num(mystr) {
  mystr = mystr.toUpperCase();
  var conv = [];
  var l = mystr.length;
  for (var i=0; i<l; i++){
    conv[i] = mystr.charCodeAt(i);
  }
  return conv;
}

$(document).ready(function(){
  $('form').submit(function(){
    var testo = $('#text-input').val()
    var unicode = str2num(testo)
    $('#output').text(unicode)
  })
})


