canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=2

ctx.arc(150,150,50,0,2*Math.PI)
ctx.stroke()



ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=2

ctx.arc(170,300,50,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=2

ctx.arc(190,230,50,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=2

ctx.arc(160,400,50,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="orange"
ctx.lineWidth=2

ctx.arc(250,180,50,0,2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e)
{
mousex=e.clientX-canvas.offsetLeft
mousey=e.clientY-canvas.offsetTop
circle(mousex,mousey)
}
function circle(mousex,mousey)
{
    ctx.beginPath()
    ctx.strokeStyle="blue"
    ctx.lineWidth=2
    
    ctx.arc(mousex, mousey,50,0,2*Math.PI)
    ctx.stroke()



}






