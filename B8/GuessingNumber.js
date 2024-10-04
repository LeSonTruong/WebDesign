function Game() {
    let randomNumber = Math.floor(Math.random() * 2); 
    let userGuess;

    do {
        userGuess = prompt("Hãy nhập số 0 hoặc 1: ");
    } while (parseInt(userGuess) !== randomNumber);

    alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber + ". Phần thưởng của bạn là 1000 chai dầu trẻ em.");
}

function startGame110() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess;
    let attempts = 3; 

    while (attempts > 0) {
        userGuess = prompt(`Hãy nhập số từ 1 đến 10 (bạn còn ${attempts} lần thử):`);
        if (parseInt(userGuess) === randomNumber) {
   
            alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber + ". Phần thưởng của bạn là 1 bữa tiệc tại nhà rapper Diddy.");
            return; 
        }
        attempts--; 
    }

    alert("Bạn đã thua! Số đúng là " + randomNumber + ". Phần thưởng bù đắp là " + randomNumber + " chai dầu Diddy.");
    startGame110(); 
}
