"use strict";

class ChewysMatch {
    constructor() {
        this.friends = [
           new ChewysFriends ('Luke', '10', '10', '2', '5')
        ];
    }
    add(info) {
        const addFriend = new ChewysFriends(info.friendly, info.fly, info.dejarik, info.afraid)
        this.friends.push(addFriend);
    }

}

class ChewysFriends {
    constructor(name, friendly, fly, dejarik, afraid) {
        this.name = name;
        this.friendly = friendly;
        this.fly = fly;
        this.dejarik = dejarik;
        this.afraid = afraid;
    }
}

const myChewysMatch = new ChewysMatch();
console.log(ChewysMatch);

while (true) {
    let userInput = prompt("Do you believe you are a good match for Chewbacca? yes or no?");
    let userInputLowerCase = userInput.toLowerCase();
    if (userInputLowerCase === 'yes') {
        const info = {
            name: prompt('What is your name young Padawon?'),
            friendly: prompt('On a scale of 1 to 10, 10 being you strongly agree. You are friendly.'),
            fly: prompt('On a scale of 1 to 10, 10 being you strongly agree. You are a Master at flying.'),
            dejarik: prompt('On a scale of 1 to 10, 10 being you strongly agree. You are a master at Dejarik.'),
            afraid: prompt('On a scale of 1 to 10, 10 being you strongly agree. You are not afraid of the Galactic Empire.')
        }
        myChewysMatch.add(info);
    } else if (userInputLowerCase === 'no') {
        alert('You are not worthy!');
        break;
    }
}

