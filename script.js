function main(){

    const container = document.getElementById('container');
    const colorChangeButtons = document.querySelectorAll('.colorChange');
    const resetButton = document.getElementById('reset');
    const changeSizeButton = document.getElementById('new');
    boxes = createGrid(50)

    setColor(boxes, 'black')

    colorChangeButtons.forEach(button => button.addEventListener('click', ()=>{
        changeColor(button, boxes)
    }));
    
    let slider = document.getElementById('myRange')
    let sizeValue = document.getElementById('sizeValue')
    slider.oninput = function(){
        sizeValue.innerText = slider.value
    }

    resetButton.addEventListener('click', ()=>{
        resetGrid(boxes)
    });

    changeSizeButton.addEventListener('click', ()=> {
        let size = output.innerText
        slider.oninput = function(){
            output.innerText = slider.value
        };
        boxes = newGrid(parseInt(size));
    });
}

function createGrid (num){
    container.style.setProperty('--grid-rows', num)
    container.style.setProperty('--grid-cols', num)
    for (i = 0; i < (num**2); i++){
        let div = document.createElement('div');
        container.appendChild(div).className = 'box'
    }
    const boxes = document.querySelectorAll('.box');
    return boxes
};

function resetGrid(boxes){
    boxes.forEach(box => box.style.backgroundColor = 'white')
};

function setColor(boxes, color){
    boxes.forEach(box => box.addEventListener('mouseover', ()=>{
        box.style.backgroundColor = color;
    }));
}

function changeColor(e, boxes){
    let color = e.id;
    switch (color){
        case 'black':
            color = 'black';
            console.log(color);
            break;
        case 'grey':
            color = 'grey';
            console.log(color);
            break;
        case 'blue':
            color = 'blue';
            console.log(color);
            break;
        case 'green':
            color = 'green';
            console.log(color);
            break;
        case 'random':
            color = `#${(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)}`;
            console.log(color);
            break;

    }
    setColor(boxes, color)
}

function newGrid(size){

    while(container.hasChildNodes()){
        container.removeChild(container.lastChild)
    }
    boxes = createGrid(size)
    boxes.forEach(box => box.addEventListener('mouseover', ()=>{
        box.style.backgroundColor = 'black'
    }));
    return boxes
}


main()