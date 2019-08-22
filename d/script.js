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
	database.ref("share").once(snapshot=>{
		const val=snapshot.val();
		if(val!=null){
			Object.keys(val).forEach(currentValue=>{
				const li=document.createElement("li");
				const a=document.createElement("a");
				a.download=currentValue.name;
				a.href=currentValue.url;
				a.textContent=currentValue.name;
				li.appendChild(a);
				list.appendChild(li);
			});
		}
	});
})();
