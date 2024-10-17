var str = document.getElementsByTagName('div')[0].innerHTML.toString();
var i = 0;

function typeWriter() {
  if (i < str.length) {
    document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
    i++;
    setTimeout(typeWriter, 10);
  } else {
    document.getElementsByTagName('div')[0].innerHTML = str;
  }
}

typeWriter();
