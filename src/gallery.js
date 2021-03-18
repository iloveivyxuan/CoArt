import { firebase, database } from './js/database_init';
import './css/browse.css';

document.addEventListener("DOMContentLoaded", function() {
	var galleryRef = firebase.database().ref('gallery');
	galleryRef.on('value', (snapshot) => {
		const data = snapshot.val();
		var keys = Object.keys(data);
		for (var key of keys) {
			var name = data[key].author;
			var id = key;
			var item = `
			<li class="item">
				<a class="shot" href='/artwork.html?id=${id}' target="_blank">
					<img src=${data[key].imageData}>
				</a>
			</li>`
			document.querySelector('.grid').innerHTML += item;
		}
	});
});

// User info currently hide
// <div class="info">
//   <div class="user-info">
//     <span class="name">${name}</span>
//   </div>
// </div>
