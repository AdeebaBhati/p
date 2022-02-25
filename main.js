canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
roverwidth=100
roverheight=90
background_image="mars.jpg"
rover_image="rover.png"
rover_x=10
rover_y=10

function add(){
    bg_imagetag= new Image()
    bg_imagetag.onload= uploadbackground
    bg_imagetag.src=background_image
    
    rover_imagetag=new Image()
    rover_imagetag.onload= uploadrover
    rover_imagetag.src=rover_image
}

function uploadbackground(){
    ctx.drawImage(bg_imagetag,0,0,canvas.width,canvas.heigth)
}

function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,roverwidth,roverheight)
}
window.addEventListener("keydown",mykeydown)

function mykeydown(e){
    keyPressed=e.keyCode

    if(keyPressed=="38"){
        
        up()
    }
    if(keyPressed=="40"){
        down()
    }
    if(keyPressed=="37"){
        left()
    }
    if(keyPressed=="39"){
        right()
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10
        
        uploadbackground()
        uploadrover()
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10

        uploadbackground()
        uploadrover()
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10
        
        uploadbackground()
        uploadrover()
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10

        uploadbackground()
        uploadrover()
    }
}