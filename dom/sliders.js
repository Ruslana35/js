const left= document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) =>{
  e.preventDefault();

  if(direction == "right") {
    itemsList.appendChild(itemsList.firstElementChild)
  }else{
    itemsList.insertBefore (itemsList.lastElementChild, items.firstElementChild)
  }
}

right.addEventListener("click", (e) => {
  loop ("right", e)
})
left.addEventListener("click", (e) => {
  loop("left", e)
})
// const computedStyle = getComputedStyle (items);


// rightBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   let currentRight = parseInt(computedStyle.right)

 
//   if (currentRight < 500) {
//   items.style.right = `${currentRight+100}px`;}

// })

// leftBtn.addEventListener("click", (e)=>{
//   e.preventDefault();

//   let currentRight = parseInt(computedStyle.right)

//   if (currentRight > 0) {
//     items.style.right = `${currentRight-100}px`;}

// })