document.getElementById("login-btn").addEventListener("click", function (event){
    event.preventDefault()
    const inputPhoneNumber = document.getElementById("phone-number").value;
    const inputPinNumber = document.getElementById("pin-number").value;
    if(inputPhoneNumber === "016" && inputPinNumber === "5555"){
        window.location.href = "/home.html"
    }else{
        alert("Your Number and password doesnt match")
    }
})

