(function(){
	"use strict";
	const list=document.querySelector("#list");
	firebase.initializeApp({
		apiKey: "AIzaSyD5wEyPHtuScsz_09cCUpscuWwm3W0LzLo",
		authDomain: "thumb-gen.firebaseapp.com",
		databaseURL: "https://thumb-gen.firebaseio.com",
		messagingSenderId: "812938749873",
		projectId: "thumb-gen",
		storageBucket: "thumb-gen.appspot.com"
	});
	const database=firebase.database();
	database.ref("share").once("value",snapshot=>{
		const val=snapshot.val();
		if(val!=null){
			Object.keys(val).forEach(key=>{
				const data=val[key];
				const li=document.createElement("li");
				const a=document.createElement("a");
				a.download=data.name;
				a.href=data.url;
				a.textContent=data.name;
				li.appendChild(a);
				list.appendChild(li);
			});
		}
	});
})();
