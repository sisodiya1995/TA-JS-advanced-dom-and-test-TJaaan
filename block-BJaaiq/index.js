let div1 = document.querySelector(".quotes")


function createUI () {

    quotes.forEach((elm) => {
    
    let div= document.createElement("div");
    let cite = document.createElement("cite");
       cite.innerText =elm.quoteAuthor
    let li = document.createElement("li")
      li.innerText =elm.quoteText;
      
    div.append(li, cite);

    div1.append(div);

    });
   
  
   
}

createUI();

function populate() {
  while(true) {
    // document bottom
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

    // if the user hasn't scrolled far enough (>100px to the end)
    if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;

    // let's add more data
    document.body.insertAdjacentHTML("beforeend", createUI());
  }
}
window.addEventListener("scroll" ,populate);
document.addEventListener("DOMContentLoaded"  ,message);

function message() {
  alert `The content of DOM id loaded `
}
