
function expand (id){
  if (document.getElementById (id).style.display == 'none') {
    document.getElementById (id).style.display = '';
  }
  else {
    document.getElementById (id).style.display = 'none';
  }
}

function changeCol (id){
   if (document.getElementById (id).style.color == 'black') {
    document.getElementById (id).style.color = 'pink';
  }
  else {
    document.getElementById (id).style.color = 'black';
  }
}
