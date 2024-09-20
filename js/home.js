document.getElementById("log-out-btn").addEventListener("click", function(){
    window.location.href = "/index.html"
})

document.getElementById("add-money-btn").addEventListener("click", function(){
    const homeInputContainer = document.getElementById("add-money-container");
    homeInputContainer.classList.remove("hidden")
})

document.getElementById("cash-out-btn").addEventListener("click", function(){
    console.log("clicked")
})