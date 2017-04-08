t1.onclick = function() {
  document.getElementById('table1').classList.remove('hide');
  document.getElementById('table2').classList.add('hide');
}

t2.onclick = function() {
  document.getElementById('table2').classList.remove('hide');
  document.getElementById('table1').classList.add('hide');
}
