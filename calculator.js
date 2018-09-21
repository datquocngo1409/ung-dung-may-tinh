function add() {
  var first=document.getElementById("first");
  var last=document.getElementById("last");
  var valueFirst=first.value;
  var valueLast=last.value;
  alert("Kết quả: "+(parseFloat(valueFirst)+parseFloat(valueLast)));
}

function sub() {
  var first=document.getElementById("first");
  var last=document.getElementById("last");
  var valueFirst=first.value;
  var valueLast=last.value;
  alert("Kết quả: "+(parseFloat(valueFirst)-parseFloat(valueLast)));
}

function mul() {
  var first=document.getElementById("first");
  var last=document.getElementById("last");
  var valueFirst=first.value;
  var valueLast=last.value;
  alert("Kết quả: "+(parseFloat(valueFirst)*parseFloat(valueLast)));
}

function div() {
  var first=document.getElementById("first");
  var last=document.getElementById("last");
  var valueFirst=first.value;
  var valueLast=last.value;
  if(valueLast==0) alert("Không thể chia cho 0!"); else
  alert("Kết quả: "+(parseFloat(valueFirst)/parseFloat(valueLast)));
}
