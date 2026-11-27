document.addEventListener("DOMContentLoaded", () => {

    //on va cibler la zone où on va vouloir mettre la vidéo et les boutons
	const zoneVideo = document.getElementById("video");

	//cible le formulaire
    const formulaireInscription = document.querySelector(".inscription-formulaire");

	// Crée un bouton permettant de découvrir l'événement
	const boutonDecouvrir = document.createElement("button");
	boutonDecouvrir.type = "button";
	boutonDecouvrir.textContent = "Découvrez notre prochain événement en forêt";
	boutonDecouvrir.className = "bouton-video";

	//insere l'objet bouton créé avec les paramettres dans la zone voulue.
	zoneVideo.appendChild(boutonDecouvrir); 

	// Lors du clic sur le bouton Découvrir :
	boutonDecouvrir.addEventListener("click", () => {

		// Masque le bouton Découvrir
		boutonDecouvrir.hidden = true;

		// Crée un bouton permettant de s'inscrire à l'événement
		const boutonInscription = document.createElement("button");
		boutonInscription.type = "button";
		boutonInscription.textContent = "M’inscrire";
		boutonInscription.className = "bouton-video";

		// Lors du clic sur le bouton d'inscription
		boutonInscription.addEventListener("click", () => {

			// Arrête la lecture et supprime la vidéo du DOM
			videoForet.pause();
			videoForet.remove();
			
			// Supprime le bouton d'inscription
			boutonInscription.remove();

			// Réaffiche le bouton Découvrir
			boutonDecouvrir.hidden = false;

			// Fait défiler la page jusqu'au formulaire
			formulaireInscription.scrollIntoView({
				behavior: "smooth",			//le scroll a un effet "smooth" moins aggressif
				block: "start"				// le scroll va défiler jusqu'en haut du formulaire
			});
		});

		//créer une balise <video> avec les parametres de notre vidéo
		const videoForet = document.createElement("video");
		videoForet.src = "vid/foret.mp4";
		videoForet.controls = true;				//affiche lecture, pause, volume, etc.
		videoForet.preload = "metadata";		//évite de charger inutilement toute la vidéo au départ
		videoForet.playsInline = true;			//permet la lecture dans la page sur mobile
		videoForet.autoplay = true;			//la vidéo se lance automatiquement dès qu'on clique sur le bouton

		zoneVideo.appendChild(videoForet);		//insere l'objet vidéo créé avec les paramettres dans la zone voulue.

		//insere l'objet bouton créé avec les paramettres dans la zone voulue.
		zoneVideo.appendChild(boutonInscription);

		// fait défiler lors du clic pour bien voir la vidéo si on est mal positionné
		document.getElementById("inscription-evenements").scrollIntoView({
			behavior: "smooth",			//le scroll a un effet "smooth" moins aggressif
			block: "start"				// le scroll va défiler jusqu'en haut du formulaire
		});

	});
});