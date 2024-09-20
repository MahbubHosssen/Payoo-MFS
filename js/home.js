document.getElementById("log-out-btn").addEventListener("click", function(){
    window.location.href = "index.html"
})
// Add Money
document.getElementById("add-money-btn").addEventListener("click", function(){
    const homeInputContainer = document.getElementById("add-money-show-container");
    homeInputContainer.classList.remove("hidden")
    const cashoutMoneyContainer = document.getElementById("cashout-show-container")
    cashoutMoneyContainer.classList.add("hidden")

    
})
document.getElementById("add-money-btn2").addEventListener("click", function(event){
    event.preventDefault()
    const pin = document.getElementById("pin").value;
    const accountBalance = document.getElementById("account-balance").innerText;
    const balance = parseInt(accountBalance);
    const addMoneyAmount = document.getElementById("add-money-amount").value;
    const addMoneyAmountNumber = parseInt(addMoneyAmount);
    console.log(addMoneyAmountNumber)
    
    if(pin === "" && addMoneyAmount === ""){
        alert("please enter valid amount and pin")
    }
    else if(pin === "" || pin !== "5555" ){
        alert("please enter valid pin")
    }else if(addMoneyAmount === "" ){
        alert("please enter valid amount")
    }
    else{
        total = balance + addMoneyAmountNumber
        document.getElementById("account-balance").innerText = total;
    }
})

// Cash Out
document.getElementById("cash-out-btn").addEventListener("click", function(){
    const homeInputContainer = document.getElementById("add-money-show-container");
    homeInputContainer.classList.add("hidden")
    const cashoutMoneyContainer = document.getElementById("cashout-show-container")
    cashoutMoneyContainer.classList.remove("hidden")
})