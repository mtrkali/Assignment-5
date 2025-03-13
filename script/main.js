let date = new Date();
let options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
let formattedDate = date.toLocaleDateString('en-US', options);
formattedDate = formattedDate.replace(',', '');
let str = formattedDate.split(' ');
let convertedDate = `${str[0]}, ${str[1]} ${str[2]} ${str[3]}`;
document.getElementById("date").innerText = convertedDate;

let sum = 0;

document.getElementById('btn-1').addEventListener('click',function(event){
    event.preventDefault();
    alert ("board update successfully");
    this.disabled = true;
    this.classList.add("bg-slate-100");
    
    const time = new Date().toLocaleTimeString();
    const heroRight = document.getElementById('hero-right-p');
    const h1 = getInnerTextByID('cardtext1');
    const div = document.createElement('div');
    div.classList.add("bg-slate-200","p-2","rounded-lg","text-sm","mb-2")
    div.innerHTML = `
    <p>You have been completed task ${h1} at ${time}</p>
    `
    heroRight.appendChild(div);

    const taskNo = getInnerTextValueByID('task-no');
    const sub =taskNo-1;
    document.getElementById('task-no').innerText = sub ;

    const navTask = getInnerTextValueByID('nav-task');
    document.getElementById('nav-task').innerText = navTask+1;

    sum = sum+1;
});

document.getElementById('btn-2').addEventListener('click',function(event){
    event.preventDefault();
    alert ("board update successfully");
    this.disabled = true;
    this.classList.add("bg-slate-100");
    
    const time = new Date().toLocaleTimeString();
    const heroRight = document.getElementById('hero-right-p');
    const h1 = getInnerTextByID('cardtext2');
    const div = document.createElement('div');
    div.classList.add("bg-slate-200","p-2","rounded-lg","text-sm","mb-2")
    div.innerHTML = `
    <p>You have been completed task ${h1} at ${time}</p>
    `
    heroRight.appendChild(div);

    const taskNo = getInnerTextValueByID('task-no');
    const sub =taskNo-1;
    document.getElementById('task-no').innerText = sub ;

    const navTask = getInnerTextValueByID('nav-task');
    document.getElementById('nav-task').innerText = navTask+1;

    sum = sum+1;

});

document.getElementById('btn-3').addEventListener('click',function(event){
    event.preventDefault();
    alert ("board update successfully");
    this.disabled = true;
    this.classList.add("bg-slate-100");
    
    const time = new Date().toLocaleTimeString();
    const heroRight = document.getElementById('hero-right-p');
    const h1 = getInnerTextByID('cardtext3');
    const div = document.createElement('div');
    div.classList.add("bg-slate-200","p-2","rounded-lg","text-sm","mb-2")
    div.innerHTML = `
    <p>You have been completed task ${h1} at ${time}</p>
    `
    heroRight.appendChild(div);

    const taskNo = getInnerTextValueByID('task-no');
    const sub =taskNo-1;
    document.getElementById('task-no').innerText = sub ;

    const navTask = getInnerTextValueByID('nav-task');
    document.getElementById('nav-task').innerText = navTask+1;

    sum = sum+1;

});

document.getElementById('btn-4').addEventListener('click',function(event){
    event.preventDefault();
    alert ("board update successfully");
    this.disabled = true;
    this.classList.add("bg-slate-100");
    
    const time = new Date().toLocaleTimeString();
    const heroRight = document.getElementById('hero-right-p');
    const h1 = getInnerTextByID('cardtext4');
    const div = document.createElement('div');
    div.classList.add("bg-slate-200","p-2","rounded-lg","text-sm","mb-2")
    div.innerHTML = `
    <p>You have been completed task ${h1} at ${time}</p>
    `
    heroRight.appendChild(div);

    const taskNo = getInnerTextValueByID('task-no');
    const sub =taskNo-1;
    document.getElementById('task-no').innerText = sub ;

    const navTask = getInnerTextValueByID('nav-task');
    document.getElementById('nav-task').innerText = navTask+1;

    sum = sum+1;

});

document.getElementById('btn-5').addEventListener('click',function(event){
    event.preventDefault();
    alert ("board update successfully");
    this.disabled = true;
    this.classList.add("bg-slate-100");
    
    const time = new Date().toLocaleTimeString();
    const heroRight = document.getElementById('hero-right-p');
    const h1 = getInnerTextByID('cardtext5');
    const div = document.createElement('div');
    div.classList.add("bg-slate-200","p-2","rounded-lg","text-sm","mb-2")
    div.innerHTML = `
    <p>You have been completed task ${h1} at ${time}</p>
    `
    heroRight.appendChild(div);

    const taskNo = getInnerTextValueByID('task-no');
    const sub =taskNo-1;
    document.getElementById('task-no').innerText = sub ;

    const navTask = getInnerTextValueByID('nav-task');
    document.getElementById('nav-task').innerText = navTask+1;

    sum = sum+1;

});

document.getElementById('btn-6').addEventListener('click',function(event){
    event.preventDefault();
    alert ("board update successfully");
    this.disabled = true;
    this.classList.add("bg-slate-100");
    
    const time = new Date().toLocaleTimeString();
    const heroRight = document.getElementById('hero-right-p');
    const h1 = getInnerTextByID('cardtext6');
    const div = document.createElement('div');
    div.classList.add("bg-slate-200","p-2","rounded-lg","text-sm","mb-2")
    div.innerHTML = `
    <p>You have been completed task ${h1} at ${time}</p>
    `
    heroRight.appendChild(div);

    const taskNo = getInnerTextValueByID('task-no');
    const sub =taskNo-1;
    document.getElementById('task-no').innerText = sub ;

    const navTask = getInnerTextValueByID('nav-task');
    document.getElementById('nav-task').innerText = navTask+1;

    sum = sum+1;
    if(sum === 6){
        alert ("congratulation you have completed all task")
    }
    console.log(sum);

});




document.getElementById('theme-btn').addEventListener('click',function(){

    const randomNumber = Math.floor(Math.random()*8)
     let color = ["red","blue","green","violet","yellow","aquamarine","pink","orange"];
     randomColor = color[randomNumber];
     document.body.style.backgroundColor = randomColor;
});

document.getElementById('clear-btn').addEventListener('click',function(event){
    document.getElementById('hero-right-p').innerHTML = '';
})



