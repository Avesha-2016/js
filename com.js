f1.onclick = function() {
  document.getElementById('form1').classList.remove('hide');
  document.getElementById('form2').classList.add('hide');
}

f2.onclick = function() {
  document.getElementById('form2').classList.remove('hide');
  document.getElementById('form1').classList.add('hide');
}
