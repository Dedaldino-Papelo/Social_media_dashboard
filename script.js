const toogler = document.getElementById('toogler-circle')
const tooglerBg = document.getElementById('toogler')

const body = document.body

tooglerBg.addEventListener("click", () => {
    if(body.classList.contains('dark')){
        body.classList.replace("dark","light")
        toogler.style.transform = "translateX(20px)"
        
    } else {
        body.classList.replace("light","dark")
        toogler.style.transform = "translateX(0)"
    }
})