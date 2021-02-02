const openButton = document.querySelector("#openOverlay");
const body = document.body;
const seccessModal = createModal("The message has been send!")

openButton.addEventListener("click", e=> {
  body.appendChild(seccessModal);
})

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay"); 

  const template = document.querySelector("#overlayTemplate");

  overlayElement.innerHTML = template.innerHTML;
  overlayElement.addEventListener("click", e=>{
    if(e.target== overlayElement){
      closerElement.click();
    }
  })

  const closerElement = overlayElement.querySelector(".close");
  closerElement.addEventListener("click", e =>{
    e.preventDefault();
    body.removeChild(overlayElement);
  })

  const contentElement = overlayElement.querySelector(".content")
  contentElement.innerHTML = content;

  return overlayElement;
}