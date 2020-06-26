/*Varibles Audio*/
let kick = new Audio('./assets/aud/kick1.mp3');
let clap = new Audio('./assets/aud/clap.mp3');
let tom = new Audio('./assets/aud/tom1.mp3');
/*Variables pour les changements de couleurs des images*/
let SA = document.getElementsByClassName('E')[0];
let QA = document.getElementsByClassName('Q')[0];
let DA = document.getElementsByClassName('D')[0];

/*Detection de la descente des touches*/
document.addEventListener("keydown", function(event) {
	switch (event.keyCode) {
		case 32:
			SA.style.backgroundImage = "url('./assets/img/SV.png')";
			kick.play();
			break;
		case 81:
			clap.play();
			QA.style.backgroundImage = "url('./assets/img/QV.png')";
			break;
		case 68:
			tom.play(); 
			DA.style.backgroundImage = "url('./assets/img/DV.png')";
		break;
	}
});

/*Detection de la remonté des touches*/
document.addEventListener("keyup", function(event) {
	switch (event.keyCode) {
		case 32:
			kick.pause();
			kick.currentTime = 0;
			SA.style.backgroundImage = "url('./assets/img/S.png')";
			break;
		case 81:
			clap.pause();
			clap.currentTime = 0;
			QA.style.backgroundImage = "url('./assets/img/Q.png')";
			break;
		case 68:
			tom.pause();
			tom.currentTime = 0;
			DA.style.backgroundImage = "url('./assets/img/D.png')";
		break;
	}
});
