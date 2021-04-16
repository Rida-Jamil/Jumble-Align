const msg = document.querySelector(".heading");
        const game = document.querySelector("input");
        const btn = document.querySelector(".btn");
        let sWords = ['mango', 'cherry', 'rust', 'javascript', 'clock', 'picture', 'python', 'reactjs', 'apple', 'black', 'html'];

        let play = false;

        const newWords = () => {
            // console.log(sWords[0]);

            let ranWords = Math.floor(Math.random() * sWords.length);
            // console.log(ranWords);

            /*             let jumble = ;
             */
        }

        btn.addEventListener('click', function () {
            if (!play) {
                play = true;
                btn.innerHTML = "Guess";
                game.classList.toggle("hidden");
                msg.innerHTML = "Guess the Word : ";

                newWords();

            } else {

            }
        })
