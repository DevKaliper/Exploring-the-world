const closeMenu = document.getElementById("close")
const menu = document.getElementById("menu")
const openMenu = document.getElementById("menuOptions")
const citiesBanner = document.querySelector(".cities")
const cityhidden= document.getElementById("Just-to-hide-content-on-menu")

const cities = document.querySelectorAll(".cities")

const videosContainer = document.getElementById("slideShow")
const videos = videosContainer.getElementsByTagName("video")
const next = document.getElementById("next")
const prev = document.getElementById("prev")

let countVideos = 0

function nextVideo () {
    videos[countVideos].classList.remove("visible")
    videos[countVideos].classList.add("hidden")
    countVideos = (countVideos + 1) % videos.length 
    videos[countVideos].classList.add("visible")
    videos[countVideos].classList.remove("hidden")
    

}
function prevVideo () {
    videos[countVideos].classList.remove("visible")
    videos[countVideos].classList.add("hidden")
    countVideos = (countVideos - 1 +videos.length) % videos.length 
    videos[countVideos].classList.add("visible")
    videos[countVideos].classList.remove("hidden")
    

}

let countCities =0

function nextCities () {
    cities[countCities].classList.remove("visible")
    cities[countCities].classList.add("hidden")
    
    countCities = (countCities + 1) % cities.length 
    cities[countCities].classList.add("visible")
    cities[countCities].classList.remove("hidden")
    

}
function prevCities () {
    cities[countCities].classList.remove("visible")
    cities[countCities].classList.add("hidden")
    
    countCities = (countCities - 1 +cities.length) % cities.length 
    cities[countCities].classList.add("visible")
    cities[countCities].classList.remove("hidden")
    

}



next.addEventListener("click", nextVideo)
next.addEventListener("click", nextCities)

prev.addEventListener("click", prevVideo)
prev.addEventListener("click", prevCities)

menu.addEventListener("click", e =>{
    openMenu.classList.toggle("invisible")
    closeMenu.classList.toggle("hidden")
    cityhidden.classList.add("hidden")
    
})

closeMenu.addEventListener("click", e=>{
    openMenu.classList.toggle("invisible")
    closeMenu.classList.toggle("hidden")
    cityhidden.classList.remove("hidden")
  


})


setTimeout(() => {
    document.querySelector(".loader").remove();
}, 2000);