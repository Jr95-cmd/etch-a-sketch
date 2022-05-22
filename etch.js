const container = document.getElementById("container");


function createGrid(x){
    x=16;
    for (let row=0;row<x;row++){
       
       for(let column=0;column<x;column++){
           let rows=document.createElement('div');
           container.appendChild(rows);
            rows.setAttribute('style','border:5px solid black; height:30px; width:30px;');
         
       }
       
       
        
    }
    
}

document.getElementById("container").addEventListener("load",createGrid);