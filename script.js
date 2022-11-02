const toogler = document.getElementById('toogler-circle')
const tooglerBg = document.getElementById('toogler')
const Theme_Name = document.getElementById("ThemeName")

const body = document.body

tooglerBg.addEventListener("click", () => {
    if(body.classList.contains('dark')){
        body.classList.replace("dark","light")
        toogler.style.transform = "translateX(20px)"
        Theme_Name.textContent = "Light Mode"
        
    } else {
        body.classList.replace("light","dark")
        toogler.style.transform = "translateX(0)"
        Theme_Name.textContent = "Dark Mode"
    }
})