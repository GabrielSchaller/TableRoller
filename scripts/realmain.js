const track = document.getElementById("button-track");

window.onmousedown = e => {
	track.dataset.sliderstartx = e.clientX;
}

window.onmousemove = e => {
   if(track.dataset.sliderstartx == 0){
     return;
   }
   /*console.log(track.dataset.sliderpercent);
	console.log(track.dataset.sliderStartX);*/
	const diff = e.clientX-track.dataset.sliderstartx;
	const max = window.innerWidth / 2;
	const percent = parseFloat(track.dataset.sliderpercent) + diff/max*100;
	const pixels = percent/100*window.innerWidth;
	console.log(track.dataset.sliderpercent);
	track.animate({
	  transform: `translate(${pixels}px, -50%)`
	},{duration:1200, fill:"forwards"});
}

window.onmouseup = e => {
   console.log(track.dataset.sliderpercent);
   const diff = e.clientX-track.dataset.sliderstartx;
	const max = window.innerWidth / 2;
	const percent = parseFloat(track.dataset.sliderpercent) + diff/max*100;
	track.dataset.sliderpercent = parseFloat(percent + track.dataset.sliderpercent);
	track.dataset.sliderstartx = 0;
   console.log(track.dataset.sliderpercent);
}