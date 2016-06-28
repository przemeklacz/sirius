

var wrapper = $('#wrapper');


//Tablica z psami
var dogArray = [
 carlos = {
        name: 'Carlos'
        , image: 'img/galeria/Carlito/Carlito_Icon.jpg'
}
 
    , saba = {
        name: 'Saba'
        , image: 'img/galeria/Saba/Saba_Icon.png'
}

    
    , fly = {
        name: 'Fly'
        , image: 'img/galeria/Fly/Fly_Icon.png'
}

    
    , cleo = {
        name: 'Cleo'
        , image: 'img/galeria/Cleo/Cleo_Icon.jpg'
}

    
    , pyza = {
        name: 'Pyza'
        , image: 'img/galeria/Pyza/Pyza_Icon.png'
}
];


dogArray.sort(function (a, b) {
    var nameA = a.name;
    var nameB = b.name;
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});


//dodanie profili psów do sidebar'a
function addElements() {
    wrapper.prepend('<div id="sidebar-wrapper"> <ul id="sidebar-nav"> </ul> </div>');
    for (var i in dogArray)
        $('#sidebar-nav').append('<li><a href="' + dogArray[i].name + '.html" class="sidebar-menu-item"><img src="' + dogArray[i].image + '" alt="' + dogArray[i].name + '" class="img-circle sidebar-menu-img"> <span class="text-hover">' + dogArray[i].name + '</span></a></li>');
};

$(document).ready(addElements());