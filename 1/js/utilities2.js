function getInputInnerText(id){
    const balance = document.getElementById(id).innerText;
    const balanceNum = parseFloat(balance);
    return balanceNum;
}
function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNum = parseFloat(inputValue)
    return inputValueNum;
}
function getShowSection(id){
    const addMoneyForm = document.getElementById("add-money-form");
    addMoneyForm.classList.add("hidden")
    const transectionSection = document.querySelector(".transection-section");
    transectionSection.classList.add("hidden")
    const cashoutForm = document.getElementById("cashout-form")
    cashoutForm.classList.add("hidden")

    document.getElementById(id).classList.remove("hidden")
}