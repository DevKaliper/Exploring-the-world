const closeMenu = document.getElementById("close")
const menu = document.getElementById("menu")
const openMenu = document.getElementById("menuOptions")

menu.addEventListener("click", e =>{
    openMenu.classList.toggle("invisible")
    closeMenu.classList.toggle("hidden")

})

closeMenu.addEventListener("click", e=>{
    openMenu.classList.toggle("invisible")
    closeMenu.classList.toggle("hidden")


})