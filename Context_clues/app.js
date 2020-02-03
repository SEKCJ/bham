$(document).ready(function () {
    var friends = ['Jake', 'Ray', 'Rob', 'Garrett', 'Ryan']
    var locations = ['Living Room', 'Fratter', 'Bedroom', 'Restroom', 'Dorm', 'Club', 'Party', 'Church', 'Classroom', 'Stairs']
    var weapons = ['bludgeon', 'bat', 'knife', 'gun', 'rifle', 'sniper rifle', 'sword', 'feather', 'stapler', 'bottle', 'flask', 'liter',
        'glasses', 'charger', 'paper', 'solo cup', 'shampoo', 'trash can', 'chair', 'rock']

    for (var i = 1; i <= 100; i++) {
        $('body').append(`<h3 class="${i}">Accusation ${i}</h3>`);
        $(`.${i}`).click(accusation(i))
    }

    function accusation(i) {
        var friend = friends[(i - 1) % 5]
        var location = locations[(i - 1) % 10]
        var weapon = weapons[(i - 1) % 20]

        function alert() {
            console.log(`Accusation ${i}: I Accuse ${friend}, with the ${weapon} in the ${location}!`);
        }

        return alert;
    }

})