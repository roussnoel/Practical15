class Card {
    value;
    suit;
    path;

    constructor(value, suit, path) {
        this.value = value;
        this.suit = suit;
        this.path = path;
    }
}

function display() {
    const images =
    ['images/1_of_clubs.png', 'images/2_of_clubs.png', 'images/3_of_clubs.png', 'images/4_of_clubs.png', 'images/5_of_clubs.png', 'images/6_of_clubs.png', 'images/7_of_clubs.png', 'images/8_of_clubs.png', 'images/9_of_clubs.png', 'images/10_of_clubs.png', 'images/11_of_clubs.png', 'images/12_of_clubs.png', 'images/13_of_clubs.png',
    'images/1_of_diamonds.png', 'images/2_of_diamonds.png', 'images/3_of_diamonds.png', 'images/4_of_diamonds.png', 'images/5_of_diamonds.png', 'images/6_of_diamonds.png', 'images/7_of_diamonds.png', 'images/8_of_diamonds.png', 'images/9_of_diamonds.png', 'images/10_of_diamonds.png', 'images/11_of_diamonds.png', 'images/12_of_diamonds.png', 'images/13_of_diamonds.png',
    'images/1_of_hearts.png', 'images/2_of_hearts.png', 'images/3_of_hearts.png', 'images/4_of_hearts.png', 'images/5_of_hearts.png', 'images/6_of_hearts.png', 'images/7_of_hearts.png', 'images/8_of_hearts.png', 'images/9_of_hearts.png', 'images/10_of_hearts.png', 'images/11_of_hearts.png', 'images/12_of_hearts.png', 'images/13_of_hearts.png',
    'images/1_of_spades.png', 'images/2_of_spades.png', 'images/3_of_spades.png', 'images/4_of_spades.png', 'images/5_of_spades.png', 'images/6_of_spades.png', 'images/7_of_spades.png', 'images/8_of_spades.png', 'images/9_of_spades.png', 'images/10_of_spades.png', 'images/11_of_spades.png', 'images/12_of_spades.png', 'images/13_of_spades.png']
        // ['images/1_of_clubs.png', 'images/1_of_diamonds.png', 'images/1_of_hearts.png', 'images/1_of_spades.png',
        //     'images/2_of_clubs.png', 'images/2_of_diamonds.png', 'images/2_of_hearts.png', 'images/2_of_spades.png',
        //     '3_of_clubs.png', '3_of_diamonds.png', '3_of_hearts.png', '3_of_spades.png',
        //     '4_of_clubs.png', '4_of_diamonds.png', '4_of_hearts.png', '4_of_spades.png',
        //     '5_of_clubs.png', '5_of_diamonds.png', '5_of_hearts.png', '5_of_spades.png',
        //     '6_of_clubs.png', '6_of_diamonds.png', '6_of_hearts.png', '6_of_spades.png',
        //     '7_of_clubs.png', '7_of_diamonds.png', '7_of_hearts.png', '7_of_spades.png',
        //     '8_of_clubs.png', '8_of_diamonds.png', '8_of_hearts.png', '8_of_spades.png',
        //     '9_of_clubs.png', '9_of_diamonds.png', '9_of_hearts.png', '9_of_spades.png',
        //     '10_of_clubs.png', '10_of_diamonds.png', '10_of_hearts.png', '10_of_spades.png',
        //     '11_of_clubs.png', '11_of_diamonds.png', '11_of_hearts.png', '11_of_spades.png',
        //     '12_of_clubs.png', '12_of_diamonds.png', '12_of_hearts.png', '12_of_spades.png',
        //     '13_of_clubs.png', '13_of_diamonds.png', '13_of_hearts.png', '13_of_spades.png'
        // ];

    const container = document.getElementById("imageContainer");

    for (let i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        img.src = images[i];
        img.width = 110;
        container.appendChild(img);

    }
}

display();
