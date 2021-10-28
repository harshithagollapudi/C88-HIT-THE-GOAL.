var canvas = new fabric.Canvas("myCanvas");

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabri.Image.fromURL("golf-h.png", function(Img){
hole_object = Img;
hole_object.scaleToWidth(50);
hole_object.scaleToHeight(50);
hole_object.set({
	top:hole_y,
	left:hole_x
  });
  canvas.add(hole_object)
});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x == hole_x)&&(ball_y = hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML = "You Have Hit The Goal!!";
		document.getElementById("myCanvas").style.bordercolor="red";
	}
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
