const track = document.getElementById("button-track");

window.onmousedown = e => {
	//console.log(e.clientX);
	track.dataset.sliderstartx = e.clientX;
}

window.onmousemove = e => {
   if(track.dataset.sliderstartx == 0){
     return;
   }
   //console.log(track.dataset.sliderpercent);
	//console.log(track.dataset.sliderstartx);
	const diff = e.clientX-track.dataset.sliderstartx;
	const max = window.innerWidth / 2;
	const percent = parseFloat(track.dataset.sliderpercent) + diff/max*100;
	const pixels = percent/100*window.innerWidth;
	track.animate({
	  transform: `translate(${pixels}px)`
	},{duration:1200, fill:"forwards"});
}

window.onmouseup = e => {
   const diff = e.clientX-track.dataset.sliderstartx;
	const max = window.innerWidth / 2;
	const percent = parseFloat(track.dataset.sliderpercent) + diff/max*100;
	track.dataset.sliderpercent = parseFloat(percent + track.dataset.sliderpercent);
	//console.log(track.dataset.sliderpercent);
	track.dataset.sliderstartx = 0;
}