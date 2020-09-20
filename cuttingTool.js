const image = document.getElementById("image")
const container = document.getElementById("container")
const canvas = document.getElementById("canvas")
const pointTopLeft = document.getElementById("pointTopLeft")
const pointBottomLeft = document.getElementById("pointBottomLeft")
const pointBottomRight = document.getElementById("pointBottomRight")
const pointTopRight = document.getElementById("pointTopRight")
const output = document.getElementById("output")
const topLeftPosition = document.getElementById("topLeftPosition")
const bottomLeftPosition = document.getElementById("bottomLeftPosition")
const bottomRightPosition = document.getElementById("bottomRightPosition")
const topRightPosition = document.getElementById("topRightPosition")
const topValueDiplay = document.getElementById("topExport")
const leftValueDisplay = document.getElementById("leftExport")
const widthValueDiplay = document.getElementById("widthExport")
const heightValueDisplay = document.getElementById("heightExport")
const exportButton = document.getElementById("exportButton")
const ctx = canvas.getContext("2d",{ antialias: false})



container.style.height = `${image.clientHeight}px`
container.style.width = `${image.clientWidth}px`

canvas.height = image.clientHeight
canvas.width = image.clientWidth

pointTopRight.style.left = `${image.clientWidth-30}px`
pointBottomLeft.style.top = `${image.clientHeight-30}px`

pointBottomRight.style.top = `${image.clientHeight-30}px`
pointBottomRight.style.left = `${image.clientWidth-30}px`

const frameSquareWidth = 30
const frameSquareHeight = 30


let isHoldingTopLeft = false;
let isHoldingBottomLeft = false;
let isHoldingBottomRight = false;
let isHoldingTopRight = false;
let topLeftX = (0)
let topLeftY = (0)
let topRightX = (canvas.clientWidth)
let topRightY = (0)
let bottomLeftX = (0) 
let bottomLeftY = (canvas.clientHeight) 
let bottomRightX = (canvas.clientWidth)
let bottomRightY = (canvas.clientHeight)
let rectangle = {};

function getPositions (e) {
    output.innerText = `X: ${e.pageX} Y: ${e.pageY}`
    topLeftPosition.innerText = `top left X: ${pointTopLeft.style.left} Y: ${pointTopLeft.style.top}`
    bottomLeftPosition.innerText = `btm left X: ${pointBottomLeft.style.left} Y: ${pointBottomLeft.style.top}`
    bottomRightPosition.innerText = `btm right X: ${pointBottomRight.style.left} Y: ${pointBottomRight.style.top}`
    topRightPosition.innerText = `top right X: ${pointTopRight.style.left} Y: ${pointTopRight.style.top}`
}


pointTopLeft.addEventListener("mousedown", ()=> {
    isHoldingTopLeft = true;
    
    container.addEventListener("mousemove", moveTopLeft)


   function moveTopLeft(e) {
        
        getPositions(e);

        if(isHoldingTopLeft === true){
            movingFrame(e)
        }
        
        function movingFrame (e) {
            
            topLeftX = e.pageX-15
            topLeftY = e.pageY-15
            bottomLeftX = e.pageX-15
            topRightY = e.pageY-15

            pointTopLeft.style.top = `${e.pageY-15}px`
            pointTopLeft.style.left = `${e.pageX-15}px`
            pointBottomLeft.style.left = `${e.pageX - 15}px`
            pointTopRight.style.top =`${e.pageY - 15}px`

            
            ctx.clearRect(0, 0, image.clientWidth, image.clientHeight)
            ctx.beginPath();
            ctx.moveTo(topLeftX, topLeftY); //start top left
            ctx.lineTo(bottomLeftX, bottomLeftY); //bottom left 
            ctx.lineTo(bottomRightX, bottomRightY); //bottom right
            ctx.lineTo(topRightX, topRightY); //top right
            ctx.lineTo(topLeftX, topLeftY); // top left
            ctx.stroke();


        }
        
    }
    pointTopLeft.addEventListener("mouseup", ()=>{
        isHoldingTopLeft = false;
        pointTopLeft.removeEventListener("mousemove", moveTopLeft)
    })
   
})





pointBottomLeft.addEventListener("mousedown",()=>{
    isHoldingBottomLeft = true;

    container.addEventListener("mousemove", moveBottomLeft)


   function moveBottomLeft(e) {

        getPositions(e);

        if(isHoldingBottomLeft === true){
            movingFrame(e)
        }
        
        function movingFrame (e) {
            

            bottomLeftX = e.pageX-15
            bottomLeftY = e.pageY+15
            topLeftX = e.pageX-15
            bottomRightY =e.pageY + 15

            pointBottomLeft.style.top = `${e.pageY - 15 }px`
            pointBottomLeft.style.left = `${e.pageX - 15}px`
            pointTopLeft.style.left = `${e.pageX - 15}px`
            pointBottomRight.style.top = `${e.pageY -15}px`

            ctx.clearRect(0, 0, image.clientWidth, image.clientHeight)
            ctx.beginPath();
            ctx.moveTo(bottomLeftX, bottomLeftY); //start bottom left
            ctx.lineTo(bottomRightX, bottomRightY); //bottom right 
            ctx.lineTo(topRightX, topRightY); //top right
            ctx.lineTo(topLeftX, topLeftY); //top left
            ctx.lineTo(bottomLeftX, bottomLeftY); // bottom left
            ctx.stroke();
        }
        
    }
    pointBottomLeft.addEventListener("mouseup", ()=>{
        isHoldingBottomLeft = false;
    
        pointBottomLeft.removeEventListener("mousemove", moveBottomLeft)
    
    })
   
})



pointBottomRight.addEventListener("mousedown",()=>{
    isHoldingBottomRight = true;

    container.addEventListener("mousemove", moveBottomRight)


   function moveBottomRight(e) {

        getPositions(e);

        if(isHoldingBottomRight === true){
            movingFrame(e)
        }
        
        function movingFrame (e) {
            

            bottomRightX = e.pageX+15
            bottomRightY = e.pageY+15
            topRightX = e.pageX + 15
            bottomLeftY =e.pageY + 15

            pointBottomRight.style.top = `${e.pageY - 15 }px`
            pointBottomRight.style.left = `${e.pageX - 15}px`
            pointTopRight.style.left = `${e.pageX - 15}px`
            pointBottomLeft.style.top = `${e.pageY -15}px`

            ctx.clearRect(0, 0, image.clientWidth, image.clientHeight)
            ctx.beginPath();
            ctx.moveTo(bottomLeftX, bottomLeftY); //start bottom left
            ctx.lineTo(bottomRightX, bottomRightY); //bottom right 
            ctx.lineTo(topRightX, topRightY); //top right
            ctx.lineTo(topLeftX, topLeftY); //top left
            ctx.lineTo(bottomLeftX, bottomLeftY); // bottom left
            ctx.stroke();
        }
        
    }
    pointBottomRight.addEventListener("mouseup", ()=>{
        isHoldingBottomRight = false;
    
        pointBottomRight.removeEventListener("mousemove", moveBottomRight)
    
    })
   
})
pointTopRight.addEventListener("mousedown",()=>{
    console.log("click")
    isHoldingTopRight = true;

    container.addEventListener("mousemove", moveTopRight)


   function moveTopRight(e) {

        getPositions(e);

        if(isHoldingTopRight === true){
            movingFrame(e)
        }
        
        function movingFrame (e) {
            

            topRightX = e.pageX+15
            topRightY = e.pageY-15
            bottomRightX = e.pageX + 15
            topLeftY =e.pageY - 15

            pointTopRight.style.top = `${e.pageY - 15 }px`
            pointTopRight.style.left = `${e.pageX - 15}px`
            pointBottomRight.style.left = `${e.pageX - 15}px`
            pointTopLeft.style.top = `${e.pageY -15}px`

            ctx.clearRect(0, 0, image.clientWidth, image.clientHeight)
            ctx.beginPath();
            ctx.moveTo(bottomLeftX, bottomLeftY); //start bottom left
            ctx.lineTo(bottomRightX, bottomRightY); //bottom right 
            ctx.lineTo(topRightX, topRightY); //top right
            ctx.lineTo(topLeftX, topLeftY); //top left
            ctx.lineTo(bottomLeftX, bottomLeftY); // bottom left
            ctx.stroke();
        }
        
    }
    pointTopRight.addEventListener("mouseup", ()=>{
        isHoldingTopRight = false;
    
        pointTopRight.removeEventListener("mousemove", moveTopRight)
    
    })
   
})

exportButton.addEventListener("click", ()=>{

    const topExport = topLeftY
    const leftExport = topLeftX
    const widthExport = (topRightX - topLeftX)
    const heightExport = (bottomLeftY - topLeftY)

    topValueDiplay.innerText = `top: ${topExport}`
    leftValueDisplay.innerText = `left: ${leftExport}`
    widthValueDiplay.innerText = `width: ${widthExport}`
    heightValueDisplay.innerText = `height: ${heightExport}`

    // const xhr = new XMLHttpRequest() 
    // xhr.open()
    // xhr.setRequestHeader("Content-Type", "application/json")
    // xhr.send("put", "https://defiance.herokuapp.com/api/")

    // rectangle = { left: topLeftX, top: topLeftY, width: topRightX - topLeftX, height: bottomLeftY - topLeftY}

})
