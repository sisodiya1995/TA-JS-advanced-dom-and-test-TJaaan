let title = document.querySelector("#title");
 let catageory = document.querySelector("#catageory")
let form = document.querySelector("form");

let userData = {};

function handleSubmit (event){
    event.preventDefault();
    userData.title = form.elements.title.value;
    userData.catageory =form.elements.catageory.value;
    createUI();
    form.elements.title.value = "";
    form.elements.catageory.value = "";
   console.log(userData);

  
 }



function createUI() {

    let userData1 = document.querySelector('.userdata');
    let div1 = document.createElement('div');
    div1.classList.add("user");
    let title = document.createElement('p');
    title.innerText =  `Hello : ${userData.title}`
    console.log(title);

   let catageory  = document.createElement('p');
   catageory.innerText = ` Email : ${userData.catageory}`
   div1.append(title , catageory);
   userData1.append(div1);

}

form.addEventListener('submit' ,handleSubmit);