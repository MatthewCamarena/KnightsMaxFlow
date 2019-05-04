// Draw stuff
// Time-stamp: <2019-05-04 11:56:13 Yash Bhambhani>
// ------------------------------------------------------------

function KnightsMaxFlow()
{
	var coordX = 1; //sourceX
	var coordY = 2; //sourceY
	totalFlow = findFlow();
	//window.alert("Max Flow: ", totalFlow);
	var myOptions = findOptions(coordX, coordY);
	coordX = myOptions[0];
	coordY = myOptions[1];
	totalFlow = Math.min(boardValues[coordX][coordY], MAX_SINK, MAX_SOURCE);

}

function findOptions(currX, currY)
{
	var option1 = boardValues[currX+1][currY+2];
	if(!option1) option1 = -1;
	var option2 = boardValues[currX+2][currY+1];
	if(!option2) option2 = -1;
	var option3 = boardValues[currX-1][currY+2];
	if(!option3) option3 = -1;
	var option4 = boardValues[currX-2][currY+1];
	if(!option4) option4 = -1;
	var option5 = boardValues[currX+1][currY-2];
	if(!option5) option5 = -1;
	var option6 = boardValues[currX+2][currY-1];
	if(!option6) option6 = -1;
	var option7 = boardValues[currX-2][currY-1];
	if(!option7) option7 = -1;
	var option8 = boardValues[currX-1][currY-2];
	if(!option8) option8 = -1;

	if (option1 > Math.max(option2, option3, option4, option5, option6, option7, option8)) return [currX+1, currY+2]; 
	if (option2 > Math.max(option1, option3, option4, option5, option6, option7, option8)) return [currX+2, currY+1]; 
	if (option3 > Math.max(option2, option1, option4, option5, option6, option7, option8)) return [currX-1, currY+2]; 
	if (option4 > Math.max(option2, option3, option1, option5, option6, option7, option8)) return [currX-2, currY+1]; 
	if (option5 > Math.max(option2, option3, option4, option1, option6, option7, option8)) return [currX+1, currY-2]; 
	if (option6 > Math.max(option2, option3, option4, option5, option1, option7, option8)) return [currX+2, currY-1]; 
	if (option7 > Math.max(option2, option3, option4, option5, option6, option1, option8)) return [currX-2, currY-1]; 
	if (option8 > Math.max(option2, option3, option4, option5, option6, option7, option1)) return [currX-1, currY-2]; 

	//if(MAX_SOURCE < option1 || MAX_SOURCE < option1)
}

function findFlow()
{
	// 3,3 -> 4,5 -> 6,6 -> 5,8 -> 7, 9 -> 8,7
	// var currentX = 1;
	// var currentY = 2;
	// var options = boardValues[currentX+1][currentY+2];
	var MAX_PATH = Math.min(boardValues[3][3], 
			  boardValues[4][5], 
			  boardValues[6][6], 
			  boardValues[5][8],
			  boardValues[7][9],
			  boardValues[8][7]);
	if(MAX_PATH > MAX_SOURCE)
		MAX_PATH = MAX_SOURCE;
	if(MAX_PATH > MAX_SINK)
		MAX_PATH = MAX_SINK;

	return MAX_PATH;		
}

function randomWholeNum() {
	var rcellFlow = [0]; // 100 Random Whole Even Numbers Between 1 & 30 
	var tempNum;

	for(var i = 0; i < 100; i++){
		tempNum = 1;

		while(tempNum % 2 != 0){	//if Even assign tempNum to rcellFlow if odd keep trying
		tempNum =  Math.floor((Math.random() * 31));
		}
		rcellFlow[i] = tempNum;

	}

	return rcellFlow;
}



// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 1.0 : 1.0;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 1 : 1;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }

    fillBoard();

 //FILL (X,Y) coordinate values
    for(var xTen = 0; xTen < 10; xTen++){
    	for(var yTen = 0; yTen < 10; yTen++){
    		rctx.fillText("O",(xTen*50+20),(yTen)*50 +30);

    		rctx.fillText("(" + xTen + "," + yTen + ")",(xTen*50),(yTen)*50 +10);
    		rctx.fillText( "x " +"/ " + boardValues[xTen][yTen], xTen*50+15, (yTen)*50 +48);
    	}
    }
 //FILL (X,Y) coordinate values  

 //CREATE START AND SINK BOX
 

    rctx.restore();
}




function start_( rctx, rminor, rmajor, rstroke, rfill )
{
	
 	rctx.save();
    rctx.beginPath();
 	rctx.rect(50,100,50,50);
 	rctx.lineWidth = 5;
    rctx.fillStyle = 'blue';
 	rctx.fill();

 	rctx.restore();

}

function drawPath( rctx, rminor, rmajor, rstroke, rfill )
{
//  3,3 -> 4,5 -> 6,6 -> 5,8 -> 7, 9 -> 8,7
	rctx.save();
	rctx.beginPath();
	rctx.lineWidth = 3;
	rctx.strokeStyle = 'green';
	rctx.moveTo(75,125);
	rctx.lineTo((3*50+25), (3*50+25));
	rctx.lineTo((4*50+25), (5*50+25));
	rctx.lineTo((6*50+25), (6*50+25));
	rctx.lineTo((5*50+25), (8*50+25));
	rctx.lineTo((7*50+25), (9*50+25));
	rctx.lineTo(425, 375);
	rctx.stroke();
	rctx.restore();

}


function stop_( rctx, rminor, rmajor, rstroke, rfill )
{


 	rctx.save();
 	rctx.beginPath();
 	rctx.rect(400,350,50,50);
    rctx.fillStyle = 'red';
    rctx.fill();
 	rctx.restore();

}

function fillBoard(){
	var anArray = randomWholeNum();
	var j = 0;
 	for(var xTen = 0; xTen < 10; xTen++){
  	  for(var yTen = 0; yTen < 10; yTen++){
  	  	boardValues[xTen][yTen] = anArray[j];
    	//console.log(j+" "+ boardValues[xTen][yTen]);
    	j++;	
    	}
    }
}
//1,2starting 8,7 sink
