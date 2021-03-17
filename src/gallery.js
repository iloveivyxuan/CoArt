import { firebase, database } from './js/database_init';
import './css/browse.css';

document.addEventListener("DOMContentLoaded", function() {
	var galleryRef = firebase.database().ref('gallery');
	galleryRef.on('value', (snapshot) => {
		const data = snapshot.val();
		var keys = Object.keys(data);
		for (var key of keys) {
			// var image = new Image();
			// image.src = data[key].imageData;
			var name = data[key].author;
			var item = `
			<li class="item">
				<div class="shot">
					<img src=${data[key].imageData}>
				</div>
        <div class="info">
          <div class="user-info">
            <span class="name">${name}</span>
          </div>
        </div>
			</li>`
			document.querySelector('.grid').innerHTML += item;
		}
	});
});
