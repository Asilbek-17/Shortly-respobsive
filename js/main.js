const elBtnOpen = document.querySelector(".burger")
const elMenu = document.querySelector(".menu-list")

elBtnOpen.addEventListener("click", function(){
    elMenu.classList.toggle("menu-list-show")
})