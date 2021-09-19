import reactive from '@maggieliu/reactive'
import React from 'react'

const Reactive = () => {
	React.useEffect(() => {
		reactive.install({
			firebaseConfig: {
				apiKey: "AIzaSyANmgT68gyCqkBWl54DXIcwdvmKnAL-Vks",
				authDomain: "my-blog-1d9d8.firebaseapp.com",
				databaseURL: "https://my-blog-1d9d8-default-rtdb.firebaseio.com",
				projectId: "my-blog-1d9d8",
				storageBucket: "my-blog-1d9d8.appspot.com",
				messagingSenderId: "366283477156",
				appId: "1:366283477156:web:ce06bab7e529aaf27cd631",
				measurementId: "G-XJN9XMTW72",
			}, 
			reactions: [],
			reactionText: "",
		});
	});

	return <div id="reactive_widget" />;
};

export default Reactive;

