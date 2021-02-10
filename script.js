console.log("Loading..");

    var runCode = closure();

    runCode();

    function closure() {
        function returnTo() {
            for (var i = 100; i > 0; i--) {
                var accusation = accuse(i);
                accusation;
            }
        }
        return returnTo;
    }

    function accuse(index) {
        var friends = ['Mario', 'Link', 'Kirby', 'Fox McCloud', 'Samus Aran'];
        var locations = ['Saffron City', 'Hyrule Castle', 'Dream Land', 'Sector Z', 'Planet Zebes', 'Mushroom Kingdom', 'Congo Jungle', 'Final Destination', 'Battlefield', 'Meta Crystal'];
        var weapons = ['Beam Sword', 'Home-Run Bat', 'Hammer', 'Motion-Sensor Bomb', 'Bob-omb', 'Bumper', 'Green Shell', 'Red Shell', 'Poke Ball', 'Ray Gun', 'Fire Flower', 'Star Rod', 'Fan', 'Star', 'Mr. Saturn', 'Super Scope', 'Freezie', 'Super Hammer', 'Smart Bomb', 'Blue Shell'];
        $('#container').prepend(`<h3 id="${index}">Accusation ${index}</h3>`);
        $(`#${index}`).click(function () {
            alert("I accuse: " + friends[index % friends.length] + " on " + locations[index % locations.length] + " using the " + weapons[index % weapons.length] + ", taking their opponent's stock! ");
        });
    }

    console.log("Loaded.");