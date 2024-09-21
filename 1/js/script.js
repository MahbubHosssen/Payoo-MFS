
// Login form
document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault()
    const loginInputNumber = document.getElementById("login-input-number").value;
    const loginInputPin = document.getElementById("login-input-pin").value;
    console.log(loginInputNumber, loginInputPin)
    if(loginInputPin == "22" && loginInputNumber === "016") {
        window.location.href = 'home.html'
        console.log("success")
    }else{
        alert("Doesnt Match Your Number and Pin")
    }
});







