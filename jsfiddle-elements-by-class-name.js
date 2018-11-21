var names = [];

var myNodeList = document.getElementsByClassName('name');

for (var i = 0; i < myNodeList.length; i++) {
	let j = myNodeList[i];
  names.push(" " + j.innerText);
}

alert(names);