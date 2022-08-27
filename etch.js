const container = document.getElementById("container");
let x  = 16; 
function createGrid(x){
    let y = x; 
    for (let row=0;row<y;row++){
       
       for(let column=0;column<y;column++){
           const rows=document.createElement('div');
           rows.setAttribute('class','box');
           container.appendChild(rows);
           rows.setAttribute('style','border: 1px; height:100%; width:100%;');
            const square=document.querySelectorAll('.box');
            square.forEach(box =>{
                box.addEventListener("mouseover", function addColor(){
                    box.setAttribute('style','border: 1px; height:100%; width:100%;background-color: black');
                });
            });
        } 
    }
    //dynamically set grid rows and columns 
container.setAttribute('style','grid-template-columns: repeat(' + x +', auto)');

}



// load function when page loads 
onload= createGrid(x);



function gridInput(){
    x = prompt("Please enter the desired number of squares"); 
    while(x>100){
        alert("You have surpassed the limit, please input a value less than 100");
        x = prompt("Please enter the desired number of squares");
    }
    createGrid(x);
    
    
}

function changeGridSize(){
    let num= document.getElementById("container");
    while(num.hasChildNodes()){
        num.removeChild(num.firstChild);
    }
    //delays prompt
    setTimeout(gridInput,10);  
}

//adding eventlistener for button 
document.getElementById("btn").addEventListener("click",changeGridSize);







