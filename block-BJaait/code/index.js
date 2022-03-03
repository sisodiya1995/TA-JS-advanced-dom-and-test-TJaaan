let title = document.querySelector("#title");
// let catageory = document.querySelector("#catageory")
let form = document.querySelector("form");

let userData = {};

function handleSubmit (event){
    event.preventDefault();
    userData.title = form.elements.title.value;
 //   userData.catageory =form.elements.catageory.value;
    createUI();
    form.elements.title.value = "";
  //  form.elements.catageory.value = "";
   console.log(userData);

  
 }

function handleEdit (event , info) {
    let elm = event.target;
    let input = document.createElement("input");
    input.value = info;
    input.addEventListener("keyup" ,(e)=>{
     if(e.keyCode === 13){
         let updateValue = e.target.value;
         userData.title = updateValue;
        

        createUI();
     }
    })
    let parent = event.target.parentElement;
    parent.replaceChild(input,elm)


}

function createUI() {

    let userData1 = document.querySelector('.userdata');
    let div1 = document.createElement('div');
    let small = document.createElement('small');
    small.innerText = "Drag me"
    small.style.color = "blue"
    div1.classList.add("user");
    let title = document.createElement('p');
    title.style.color = "blue";
    title.addEventListener("dblclick" ,(event) => handleEdit(event , userData.title));
    title.innerText =  ` ${userData.title}`
    console.log(title );

  // let catageory  = document.createElement('p');
  // catageory.innerText = ` Email : ${userData.catageory}`
   div1.append(title ,small);
   userData1.append(div1);

}

form.addEventListener('submit' ,handleSubmit);