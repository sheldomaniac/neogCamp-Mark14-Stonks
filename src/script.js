var buyPrice = document.querySelector("#buy-price");
var buyQty = document.querySelector("#buy-qty");
var sellPrice = document.querySelector("#sell-price");
var checkButton = document.querySelector("#check-profit");
var finalOP = document.querySelector("#final-result")

var message = "Enter the following values above.";

function displayMessage(msg){
    finalOP.innerHTML = msg;
}

function calculatePL(bp, bq, sp){
    if(!(bp) && !(bq) && !(sp)) alert("Input all values");
    if(bp > 0){
        if(bq > 0){
            if(sp > 0){
                bp = Number(bp);
                bq = Number(bq);
                sp = Number(sp);

                var gainAmount = (sp-bp)*bq;
                var gainAmountPercent = (sp-bp)/bp*bq;
                gainAmount = (Math.round(gainAmount * 100) / 100).toFixed(2);
                gainAmountPercent = (Math.round(gainAmountPercent * 100) / 100).toFixed(2);
                if(sp>bp){
                    message = "You gained ₹"+gainAmount+" and your gain percentage is "+gainAmountPercent+"%.";
                    document.documentElement.style.setProperty('--color2', '#4F8A10');
                    document.documentElement.style.setProperty('--color3', '#4F8A10');
                    displayMessage(message);
                }else if(sp < bp){
                    document.documentElement.style.setProperty('--color2', '#FFBABA');
                    document.documentElement.style.setProperty('--color3', '#D8000C');
                    message = "You lost ₹"+(-gainAmount)+" and your loss percentage is "+(-gainAmountPercent)+"%.";
                    displayMessage(message);
                }else{
                    document.documentElement.style.setProperty('--color2', '#BDE5F8');
                    document.documentElement.style.setProperty('--color3', '#00529B');
                    message = "You gained ₹"+(gainAmount)+" and your gain percentage is "+(gainAmountPercent)+"%.";
                    displayMessage(message);
                }
                

            }else{
                message = "Invalid Selling Price";
                displayMessage(message);
            }
        }else{
            message = "Invalid Quantity."; 
            displayMessage(message);
        }
    }else{
        message = "Invalid Buying Price.";
        displayMessage(message);
    }
}

checkButton.addEventListener("click", function profitOrLoss(){
    calculatePL(buyPrice.value, buyQty .value,sellPrice .value);
});