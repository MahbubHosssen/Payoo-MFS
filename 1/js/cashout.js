document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountBalance = getInputInnerText("account-balance");

    const cashoutInput = getInputValue("cash-out-input");
    
    const pin = document.getElementById("cash-out-pin").value;

    if(pin === "" && cashoutInput === ""){
        alert("please write your amount and pin number");
    }else if(pin == ""){
        alert("please enter your pin")
    }else if(cashoutInput == ""){
        alert("please enter your amount")
    }
    else if(isNaN(cashoutInput)){
        alert("please enter valid amount")
    }else if(pin === "22"){
        if(accountBalance < cashoutInput){
            alert("dosent have enoght money");
            return
        }
        else{
            const newBalance = accountBalance - cashoutInput;
            document.getElementById("account-balance").innerText = newBalance;
            const transectionContainer = document.querySelector(".transection-container");
            const li = document.createElement("li")
            li.innerText = `Cashout ${cashoutInput} Tk.. New Balance ${newBalance}`
            transectionContainer.appendChild(li)
        }
    }else{
        alert("Enter valid pin")
    }

    
})