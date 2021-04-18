const msg = document.querySelector(".heading");
const game = document.querySelector("input");
const btn = document.querySelector(".btn");
let createdWord = "";
let randWords = "";
let sWords = ['mango', 'cherry', 'indigo', 'blue', 'clock', 'apricot', 'guava', 'violet', 
                'apple', 'black', 'white', 'light', 'mobile', 'laptop', 'books', 'plate'];

let play = false;

const newWords = () => {
    // console.log(sWords[0]);

    let ranWords = Math.floor(Math.random() * sWords.length);
    // console.log(ranWords);
    let jumbled = sWords[ranWords];
    // console.log(jumbled.split(""));
    return jumbled;

}

const scrambledWords = (arr) => {
    for (let i = arr.length-1; i>0; i--) {
        const temp = arr[i];
        // console.log(temp);
        let r = Math.floor(Math.random()*(i+1));
        // console.log(r);
        // console.log(i)

        arr[i] = arr[r];
        arr[r] = temp;
    }

    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        game.classList.toggle("hidden");
        
        createdWord = newWords();
        randWords = scrambledWords(createdWord.split(""));
        // console.log(randWords);
        msg.innerHTML = `Guess the Word : ${randWords}`;

    } else {
        let user = game.value;
        if (user === createdWord) {
            play = false;
            msg.innerHTML = "Yay. It's Correct!";
            btn.innerHTML = "Another Word?";
            game.classList.toggle("hidden");
            game.value = "";
        }
        else{
            msg.innerHTML= `Oops! Try Again... ${randWords}`;
        }
    }
})

