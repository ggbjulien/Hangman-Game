(() => {
  function hangmanGame() {
    let wordList = [
      "DOG",
      "CAT",
      "UNICORN",
      "TURTLE",
      "SNAKE",
      "APE",
      "LION",
      "PIG",
      "BIRD"
    ];
    let rand = Math.floor(Math.random() * wordList.length);
    let lifeCount = 6;
    let life = true;
    let word = wordList[rand];
    let soluce = Array(word.length).fill("-");

    document.getElementById("tryAgain").style.display = "none";

    document.getElementById("word").innerText = soluce
      .toString()
      .replace(/,/g, "");

    for (let k = 1; k < 27; k++) {
      document.getElementById(k).addEventListener("click", () => {
        let inputUser = document.getElementById(k).innerText;
        console.log(inputUser);
        for (let i = 0; i < word.length; i++) {
          if (word.charAt(i) == inputUser) {
            soluce[i] = word.charAt(i);
            console.log(soluce.toString().replace(/,/g, ""));

            document.getElementById(
              "word"
            ).innerHTML = soluce.toString().replace(/,/g, "");
            document.getElementById(k).disabled = true;
          } else {
            document.getElementById(k).disabled = true;
          }
        }
        if (word.indexOf(inputUser) > -1) {
          life = true;
        } else {
          life = false;
        }
        if (life == false) {
          lifeCount--;
          let img = document.getElementById("hangmanImg");
          img.src = "assets/img/Hangman-" + lifeCount + ".png";
          document.getElementById("lifeCount").innerText = lifeCount;
        }
        if (lifeCount === 0) {
          document.getElementById("buttons").style.display = "none";
          document.getElementById("word").innerText = word;
          document.getElementById("tryAgain").style.display = "block";
          document.getElementById("lifeCount").style.display = "none";
          document.getElementById("word").style.display = "none";
          document.querySelector("img").src = "assets/img/deadhangman.gif";
          let loose = document.createElement("h2");
          let loosetxt = document.createTextNode("YOU LOOSE !");
          loose.appendChild(loosetxt);
          document
            .getElementById("img")
            .insertAdjacentElement("afterbegin", loose);
          document.querySelector("h2").style.color = "red";
        }
        if (soluce.toString().replace(/,/g, "") == word) {
          document.getElementById("word").innerText = word;
          document.getElementById("buttons").style.display = "none";
          document.getElementById("tryAgain").style.display = "block";
          document.getElementById("lifeCount").style.display = "none";
          document.getElementById("word").style.display = "none";
          document.querySelector("img").src = "assets/img/winhangman.gif";
          let win = document.createElement("h2");
          let wintxt = document.createTextNode("YOU WIN !");
          win.appendChild(wintxt);
          document
            .getElementById("img")
            .insertAdjacentElement("afterbegin", win);
          document.querySelector("h2").style.color = "green";
        }
        document.getElementById("tryAgain").addEventListener("click", () => {
          location.reload();
        });
      });
    }
  }
  hangmanGame();
})();
