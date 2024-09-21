// Added Money start
document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountBalanceNumber = getInputInnerText("account-balance");
    const addMoneyInputNum = getInputValue("add-money-input");
    const pin = document.getElementById("add-money-pin").value;


    if(pin === "" && addMoneyInputNum === ""){
        alert("please write your amount and pin number");
    }else if(pin == ""){
        alert("please enter your pin")
    }else if(addMoneyInputNum == ""){
        alert("please enter your amount")
    }
    else if(isNaN(addMoneyInputNum)){
        alert("please enter valid amount")
    }else if(pin === "22"){
        const newBalance = accountBalanceNumber + addMoneyInputNum;
        document.getElementById("account-balance").innerText = newBalance
        const transectionContainer = document.querySelector(".transection-container");
        const li = document.createElement("li")
        li.innerText = `Added ${addMoneyInputNum} Tk.. New Balance ${newBalance}`
        transectionContainer.appendChild(li)
    }else{
        alert("Enter valid pin")
    }

    
    
    
})