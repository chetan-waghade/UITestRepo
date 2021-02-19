// show go to button on scroll
const goto = document.querySelector(".goto");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        goto.style.visibility = "visible";
    }
    else {
        goto.style.visibility = "hidden";
    }
})

// Sidebar menu

const btn = document.querySelector(".hamburger-menu");
const close = document.querySelector("#close");
const sidebar = document.querySelector(".sidebar-menu");
// where main content is
//disable container scrollling if sidebar is open
const container = document.querySelector(".container");

btn.addEventListener("click",showMenu);
close.addEventListener("click",hideMenu);

function showMenu() {
    sidebar.style.visibility = "visible"; //make it visible when menu clicked
    sidebar.style.animation = "toRight 0.3s ease";
    sidebar.style.left = 0;
    container.style.height = "92vh";
    container.style.overflow = "hidden";
}

function hideMenu(){
    sidebar.style.animation = "toLeft 0.3s ease";
    sidebar.style.left = "-15rem";
    container.style.height = "auto";
    container.style.overflow = "scroll";
}

//event to trigger sidemenu close 
//if user tries to touch surface other than 
//sidebar
document.body.addEventListener('touchstart', (e) => {
    if (e.touches[0].screenX > 200) {hideMenu()}
});


// let fpsX = document.querySelector("#fps");

// function fpsMeter()  {
//     let prevTime = Date.now(), frames = 0;

//     requestAnimationFrame(function loop() {
//       const time = Date.now();
//       frames++;
//       if (time > prevTime + 1000) {
//         let fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
//         prevTime = time;
//         frames = 0;

//         console.info('FPS: ', fps);
//         fpsX.innerText = fps;
//       }

//       requestAnimationFrame(loop);
//     });
//   }


//   fpsMeter();


// Highlight selected cuisine item
let cuisineItems = document.querySelectorAll(".cuisine-category-item");
const selectedCuisineCategory = document.querySelector(".cuisine-selected-category-name").querySelector("p");
let previousItem;
cuisineItems.forEach((e)=>{
    e.addEventListener('click',()=>{
        
        if ( previousItem == null){
            previousItem = e;
            e.className = "cuisine-category-item active";
            selectedCuisineCategory.innerText = `Showing list in ${e.querySelector("p").innerText}`;
        }
        else{
            previousItem.className = "cuisine-category-item";
            e.className = "cuisine-category-item active";
            previousItem = e;
            selectedCuisineCategory.innerText = `Showing list in ${e.querySelector("p").innerText}`;

        }
    })
});

// show all menu item 
const seeAll = document.querySelector(".cuisine-title-see-all");
const list = document.querySelector(".list");
seeAll.addEventListener("click",()=>{

    if(seeAll.children[1].innerText === "Hide"){
        list.style.flexWrap = "";
        seeAll.children[1].innerText = "See All";
    }
    else{
        list.style.flexWrap = "wrap";
        seeAll.children[1].innerText = "Hide";
    }
})