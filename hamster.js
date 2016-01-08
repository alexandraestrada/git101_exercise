// Dog model
function Hamster (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl; 
}

// Dog Instances
var hamster1 = new Hamster('Frederick', 'siberian', 3, 'eeeek','http://i.livescience.com/images/i/000/000/610/iFF/070521_hamster_02.jpg?1296069204');
var hamster2 = new Hamster('Cousteau','dwarf', 2, 'squeak!','https://s-media-cache-ak0.pinimg.com/736x/57/42/68/574268362da81abd6fcface62f8d57a2.jpg' );


// Dog Array
var hamsterArray = [hamster1, hamster2];

//Output to HTML
for (i=0;i < hamsterArray.length; i++) {
        name = hamsterArray[i].name,
        img = hamsterArray[i].imgUrl,
        breed = hamsterArray[i].breed,
        sound = hamsterArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer'        
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('hamsters');
        sectionContainer.appendChild(animalDiv);
}

