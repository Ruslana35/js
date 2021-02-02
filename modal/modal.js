const openButton = document.querySelector("#openOverlay");
const body = document.body;
const seccessModal = createModal("The message has been send!My congrats!!!")


openButton.addEventListener("click", e=>{
  body.appendChild(seccessModal);
})

function createModal(content){
  const overlayElement = document.createElement('div');
  overlayElement.classList.add ("overlay");

  const containerElement = document.createElement("div");
  containerElement.classList.add ("modal-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  contentElement.innerHTML = content;

  const closerElement = document.createElement("a");
  closerElement.classList.add("close");
  closerElement.textContent = "x";
  closerElement.href = "#";   

  closerElement.addEventListener("click", e=>{
  e.preventDefault();
  body.removeChild(overlayElement)
  })

  overlayElement.addEventListener ("click", e =>{
    if(e.target == overlayElement){
    closerElement.click();}
  })

  containerElement.appendChild(contentElement);
  containerElement.appendChild(closerElement);
  overlayElement.appendChild(containerElement);
  
  return overlayElement;
}








// openButton.addEventListener ("click", e=>{
//   body.appendChild(seccessModal);
// })

// function createModal (content){
//   const overlayElement = document.createElement("div");
//   overlayElement.classList.add("overlay");

//   overlayElement.addEventListener("click", e=>{

//     if(!e.target.classList.contains("content")){
//       closerElement.click();
//     }

//     // if(e.target == overlayElement){
//     //   closerElement.click()
//     // }
//   })

//   const containerElement = document.createElement("div");
//   containerElement.classList.add("modal-container");

//   const contentElement = document.createElement("div");
//   contentElement.classList.add("content");

//   contentElement.innerHTML = content;

//   const closerElement = document.createElement("a");
//   closerElement.classList.add("close");
//   closerElement.textContent = "x";
//   closerElement.href = "#"
  
//   closerElement.addEventListener("click", e=>{
//     e.preventDefault();

//     body.removeChild(overlayElement);
//   })

//   overlayElement.appendChild(containerElement);
//   containerElement.appendChild(closerElement)
//   containerElement.appendChild(contentElement);
  
  
//   return overlayElement;
// }