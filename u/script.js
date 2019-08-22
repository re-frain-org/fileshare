(function(){
	"use strict";
	const select=document.querySelector("#select");
	const picker=document.querySelector("#picker");
	const upload=document.querySelector("#upload");
	firebase.initializeApp({
		apiKey: "AIzaSyD5wEyPHtuScsz_09cCUpscuWwm3W0LzLo",
		authDomain: "thumb-gen.firebaseapp.com",
		databaseURL: "https://thumb-gen.firebaseio.com",
		messagingSenderId: "812938749873",
		projectId: "thumb-gen",
		storageBucket: "thumb-gen.appspot.com"
	});
	const database=firebase.database();
	const storage=firebase.storage();
	let SELECTED_FILE=null;
	select.addEventListener("click",event=>picker.click(),false);
	picker.addEventListener("change",event=>SELECTED_FILE=event.target.files,false);
	upload.addEventListener("click",event=>{
		if(SELECTED_FILE!=null){
			[].slice.call(SELECTED_FILE).forEach(file=>{
				const ref=storage.ref("root/share/"+file.name.split(".")[0]);
				ref.put(file).then(snapshot=>ref.getDownloadURL().then(url=>database.ref("share").child(file.name).set({
					name: file.name,
					url: url
				})));
			});
			SELECTED_FILE=null;
		}
	},false);
})();
