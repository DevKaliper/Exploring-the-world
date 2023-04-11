const closeMenu = document.getElementById("close")
const menu = document.getElementById("menu")
const openMenu = document.getElementById("menuOptions")
const cities = document.getElementById("cities")


menu.addEventListener("click", e =>{
    openMenu.classList.toggle("invisible")
    closeMenu.classList.toggle("hidden")
    cities.classList.add("hidden")

})

closeMenu.addEventListener("click", e=>{
    openMenu.classList.toggle("invisible")
    closeMenu.classList.toggle("hidden")
    cities.classList.remove("hidden")


})