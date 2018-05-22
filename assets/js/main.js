// Insert your actual API request URL below
fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getImages&access_token=d81ee6dde90f523fb2d24d8a5dbe2410&object_id=18636689')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
        render(jsonData);
    });

function render(data) {
	document.querySelector('.img1').src = data.images[0].b.url
}

var img1 = document.querySelector('.img1');
var post1 = document.querySelector('.eames');

post1.addEventListener('mouseover', function(){
img1.style.display = "block";
})

post1.addEventListener('mouseout', function() {
img1.style.display="none";
})
