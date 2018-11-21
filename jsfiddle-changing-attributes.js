var elm = document.querySelector('#lhl-logo');

document.querySelector('#lhl-logo').width = '200';

function switchback() {
	document.querySelector('#lhl-logo').width = '400'; }

setTimeout(switchback, 1000);