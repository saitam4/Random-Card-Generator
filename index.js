
window.onload = function(){
    
    document.querySelector(".numero").innerHTML= genRandomNumber();
    document.querySelector(".numero").classList.add(genRandomSuit());
    
};

let genRandomNumber = function(){
    let number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
    let indexNumber = Math.floor(Math.random()*number.length);
    return number[indexNumber];
}

let genRandomSuit = function(){
    let suit = ["espada","trebol","corazon","diamante",];
    let indexSuit = Math.floor(Math.random()*suit.length);
    return suit[indexSuit];
}