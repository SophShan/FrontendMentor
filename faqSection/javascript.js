
function expand (id){
  if (document.getElementById (id).style.display == 'none') {
    document.getElementById (id).style.display = '';
  }
  else {
    document.getElementById (id).style.display = 'none';
  }
}

function changeCol (id){
   if (document.getElementById (id).style."background-color" == 'black') {
    document.getElementById (id).style."background-color" = 'purple';
  }
  else {
    document.getElementById (id).style."background-color" = 'black';
  }
}
