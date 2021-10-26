var canvas = new fabric.Canvas('mycanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(Img)
{
    blockimageobject=Img;
    blockimageobject.scaleToWidth(700);
    blockimageobject.scaleToWidth(500);
    blockimageobject.set({ top:0, left:0 });
    canvas.add(blockimageobject);
});	
	
}

function playSound(){
x.play();	
}
