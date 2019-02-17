function createBox(dim){
   //* let pencil = document.querySelector('#pencil')
    //*let eraser = document.querySelector('#eraser') 
    let box = document.querySelector(".box");
    let rows,cols;
    for(i = 1;i <= dim;i++){
        rows = document.createElement('div');
        rows.classList.add('row');
        for(j = 1;j <= dim;j++){
            cols = document.createElement('div');
            cols.style.backgroundColor = 'rgb(255, 255, 255)';
            cols.style.width = 500/dim + 'px';
            cols.style.height = 500/dim + 'px';
            cols.addEventListener('mouseover',function(draw){
                if (draw.buttons == 1) {
                    draw.target.style.background = 'rgb(0, 0, 0)';}
            })
            cols.addEventListener('mousedown',function(draw){
                if (draw.buttons == 1) {
                    draw.target.style.background = 'rgb(0, 0, 0)';
                }
            })
            cols.addEventListener('mouseover', function(erase){
                if (erase.buttons == 2){
                    erase.target.style.background = 'rgb(255, 255, 255)';
                }
            })
            cols.addEventListener('mousedown',function(eraser){
                if (eraser.buttons == 2) {
                    eraser.target.style.background = 'rgb(255, 255, 255)';
                }
            })
            rows.appendChild(cols);
        }
        box.appendChild(rows);

    }
}
createBox(50);