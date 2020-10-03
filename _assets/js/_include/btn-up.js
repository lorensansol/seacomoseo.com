// TOGGLE BUTTON UP
function btnUp(){
 	document.querySelector('.btn-up').classList.toggle('btn-up-hide');
}
scrollShot(
	'0px',
	'0px',
	'.btn-up-aux',
	() => { btnUp(); },
	() => { if(scrollY <= document.querySelector('.btn-up-aux').scrollHeight - 50){ btnUp(); } },
	() => { btnUp(); }
);