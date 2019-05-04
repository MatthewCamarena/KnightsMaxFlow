// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

function KnightsMaxFlow( )
{

	

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
	rctx.save();
	rctx.beginPath();
	rctx.lineWidth = 5;
	rctx.strokeStyle = 'green';
	rctx.moveTo(75,125);
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
