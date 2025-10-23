function dots(){
    //get the elements from web-page
const event_container = document.getElementById("event_container");
const container_pos = event_container.getBoundingClientRect().right;
const event1 = document.getElementById("event1");
const event2 = document.getElementById("event2");
const event3 = document.getElementById("event3");
const event4 = document.getElementById("event4");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");


//get the positiion of events and their container

let event1_pos = event1.getBoundingClientRect().right;
let event2_pos = event2.getBoundingClientRect().right;
let event3_pos = event3.getBoundingClientRect().right;
let event4_pos = event4.getBoundingClientRect().right;


//evaluate the distances

let item1 = event1_pos - container_pos;
let item2 = event2_pos - container_pos;
let item3 = event3_pos - container_pos;
let item4 = event4_pos - container_pos;
const teresh =  event1.offsetWidth;

// the process

if(item1 < teresh){
    page1.style.backgroundColor = "black";
    page2.style.backgroundColor = "white";
    page3.style.backgroundColor = "white";
    page4.style.backgroundColor = "white";
}else if(item2 < teresh){
    page1.style.backgroundColor = "white";
    page2.style.backgroundColor = "black";
    page3.style.backgroundColor = "white";
    page4.style.backgroundColor = "white";
}
else if(item3 < teresh){
    page1.style.backgroundColor = "white";
    page2.style.backgroundColor = "white";
    page3.style.backgroundColor = "black";
    page4.style.backgroundColor = "white";
}else if(item4 < teresh){
    page1.style.backgroundColor = "white";
    page2.style.backgroundColor = "white";
    page3.style.backgroundColor = "white";
    page4.style.backgroundColor = "black";
}
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const event_container = document.getElementById("event_container");
const container_pos = event_container.getBoundingClientRect().right;
event_container.addEventListener('scroll',dots);


const container = document.querySelector('.item_container');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; 
    container.scrollLeft = scrollLeft - walk;
});

const sign_in = document.querySelector(".sign-in");
const height = window.innerHeight;

window.addEventListener('scroll',() => {
  let scrollPosition = window.scrollY || window.pageYOffset;
  if(scrollPosition > 0.50 * height){
    sign_in.classList.add("advanced");
  }
  else {
    sign_in.classList.remove("advanced");
  }
  
})

function CopyToClipboard() {
    const clipboard_ = document.querySelector("#clip");
    navigator.clipboard.writeText("@karafariniaut_group")
        .then(() => clipboard_.textContent = "کپی شد!" )
        .then(() => delay(1000))
        .then(() =>  clipboard_.textContent = "کپی");
}
