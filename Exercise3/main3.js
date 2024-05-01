const images =
    ['images/1_of_clubs.png', 'images/2_of_clubs.png', 'images/3_of_clubs.png', 'images/4_of_clubs.png', 'images/5_of_clubs.png', 'images/6_of_clubs.png', 'images/7_of_clubs.png', 'images/8_of_clubs.png', 'images/9_of_clubs.png', 'images/10_of_clubs.png', 'images/11_of_clubs.png', 'images/12_of_clubs.png', 'images/13_of_clubs.png',
        'images/1_of_diamonds.png', 'images/2_of_diamonds.png', 'images/3_of_diamonds.png', 'images/4_of_diamonds.png', 'images/5_of_diamonds.png', 'images/6_of_diamonds.png', 'images/7_of_diamonds.png', 'images/8_of_diamonds.png', 'images/9_of_diamonds.png', 'images/10_of_diamonds.png', 'images/11_of_diamonds.png', 'images/12_of_diamonds.png', 'images/13_of_diamonds.png',
        'images/1_of_hearts.png', 'images/2_of_hearts.png', 'images/3_of_hearts.png', 'images/4_of_hearts.png', 'images/5_of_hearts.png', 'images/6_of_hearts.png', 'images/7_of_hearts.png', 'images/8_of_hearts.png', 'images/9_of_hearts.png', 'images/10_of_hearts.png', 'images/11_of_hearts.png', 'images/12_of_hearts.png', 'images/13_of_hearts.png',
        'images/1_of_spades.png', 'images/2_of_spades.png', 'images/3_of_spades.png', 'images/4_of_spades.png', 'images/5_of_spades.png', 'images/6_of_spades.png', 'images/7_of_spades.png', 'images/8_of_spades.png', 'images/9_of_spades.png', 'images/10_of_spades.png', 'images/11_of_spades.png', 'images/12_of_spades.png', 'images/13_of_spades.png']

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

// Display the cards
function display() {
    const container = document.getElementById("imageContainer");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }



    for (let i = 0; i < images.length; i++) {
        const imgGenerate = document.createElement('img');
        imgGenerate.src = images[i];
        imgGenerate.width = 110;
        container.appendChild(imgGenerate);
    }
}

display();

// Shuffle the cards
const shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", shuffled);


function shuffled(event) {
    event.preventDefault();
    for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    display();
}

// Sort by value
const value = document.getElementById("value");
value.addEventListener("click", sortByValueDisplay);


function sortByValueDisplay() {
    const container = document.getElementById("imageContainer");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    const image1 = images.filter((image)=> image.startsWith("images/1_of_"));
    const image2 = images.filter((image)=> image.startsWith("images/2_of_"));
    const image3 = images.filter((image)=> image.startsWith("images/3_of_"));
    const image4 = images.filter((image)=> image.startsWith("images/4_of_"));
    const image5 = images.filter((image)=> image.startsWith("images/5_of_"));
    const image6 = images.filter((image)=> image.startsWith("images/6_of_"));
    const image7 = images.filter((image)=> image.startsWith("images/7_of_"));
    const image8 = images.filter((image)=> image.startsWith("images/8_of_"));
    const image9 = images.filter((image)=> image.startsWith("images/9_of_"));
    const image10 = images.filter((image)=> image.startsWith("images/10_of_"));
    const image11 = images.filter((image)=> image.startsWith("images/11_of_"));
    const image12 = images.filter((image)=> image.startsWith("images/12_of_"));
    const image13 = images.filter((image)=> image.startsWith("images/13_of_"));

    const newArray = image1.concat(image2).concat(image3).concat(image4).concat(image5).concat(image6).concat(image7).concat(image8).concat(image9).concat(image10).concat(image11).concat(image12).concat(image13);

    console.log(newArray);

     for (let i = 0; i < newArray.length; i++) {
        const imgSortByValue = document.createElement('img');
        imgSortByValue.src = newArray[i];
        imgSortByValue.width = 110;
        container.appendChild(imgSortByValue);
    }

}

// Sort by suit

const suit = document.getElementById("suit");
suit.addEventListener("click", sortBySuitDisplay);

function extractNumber(str) { 
    const arr = str.split("/");
    const fileNameArray = arr[1].split("_")
    return Number(fileNameArray[0]);
}
function sortByNumber(a,b){
console.log(a,b);
    let number1 = extractNumber(a);
    let number2 = extractNumber(b);

    if(number1<number2){
        return -1;
    }

    if(number1>number2){
        return 1;
    }

    return 0;
}

function sortBySuitDisplay(){
    const container = document.getElementById("imageContainer");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    const clubs = images.filter((image)=> image.endsWith("clubs.png")).sort(sortByNumber);
    const diamonds = images.filter((image)=> image.endsWith("diamonds.png")).sort(sortByNumber);
    const hearts = images.filter((image)=> image.endsWith("hearts.png")).sort(sortByNumber);
    const spades = images.filter((image)=> image.endsWith("spades.png")).sort(sortByNumber);



    const suitArray = clubs.concat(diamonds).concat(hearts).concat(spades);




    // console.log(suitArray);


    for (let i = 0; i < suitArray.length; i++) {
        const imgSortBySuit = document.createElement('img');
        imgSortBySuit.src = suitArray[i];
        imgSortBySuit.width = 110;
        container.appendChild(imgSortBySuit);
    }

    console.log("sort by suit is called");
}







   

//     newArray.sort(compareNumbers);


// sortByValue();

// function filterItems(arr, query) {
//     return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }

// function compareNumbers(a, b) {
//     return a - b;
// }











