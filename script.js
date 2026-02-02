
const openModalBtn = document.querySelector(".openModalBtn");
const container = document.querySelector("#container");
const overlay = document.querySelector(".overlay");
const modalContent = document.querySelector(".modalContent");
const closeBtn = document.querySelector(".closeBtn");


//advanced way of doing the fucntions above

let lastFocusedElement;

//Get all focusable elements inside modal
function getFocusableElements(){
  return modalContent.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
}

//Function to open modal
function openModal(){
lastFocusedElement = document.activeElement;
container.style.display = "block";
closeBtn.focus();
document.body.style.overflow = "hidden";
}

//Function to close modal
function closeModal(){
  container.style.display = "none";
  document.body.style.overflow = "auto";
  if (lastFocusedElement){
    lastFocusedElement.focus();
  }
}

//Open modal
openModalBtn.addEventListener("click", openModal);

//Close modal - X button
closeBtn.addEventListener("click", closeModal);

//Close modal - overlay
overlay.addEventListener("click", closeModal);

//Close modal - Escape key + Focus Trap
document.addEventListener("keydown", function(event){
  //Close on Escape
  if(event.key ==='Escape'&& container.style.display ==='block'){
    closeModal();
    return;
  }

  //Focus trap - only when modal is open
  if(container.style.display ==='block' && event.key ==='Tab'){
    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[FocusableElements.length - 1];

    //Shift +Tab(going backwards)
    if(event.shiftKey){
      if(document.activeElement === firstElement){
        event.preventDefault();
        lastElement.focus();
      }
    }

    //Tab (going forward)
    else{
      if(document.activeElement === lastElement){
        event.preventDefault();
        firstElement.focus();
      }
    }
  


  }
});