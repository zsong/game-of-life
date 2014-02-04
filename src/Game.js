function getLiveDeadCellsNumbers(config, row, col){
    var numLiveCells = 0;
    var numAllNeighbors = 0;

    //above
    if (row - 1 >= 0){
    	if (col - 1 >= 0 ){
    		numLiveCells += config.board[row-1][col-1];
    		numAllNeighbors += 1;
    	}

    	numLiveCells += config.board[row-1][col];
    	numAllNeighbors += 1;

    	if (col + 1 < config.w){
    		numLiveCells += config.board[row-1][col+1];
    		numAllNeighbors += 1;
    	}
    }

    //current
    if (col - 1 >= 0 ){
		numLiveCells += config.board[row][col-1];
		numAllNeighbors += 1;
	}

	if (col + 1 < config.w){
		numLiveCells += config.board[row][col+1];
		numAllNeighbors += 1;
	}

	//below
    if (row + 1 < config.h){
    	if (col - 1 >= 0 ){
    		numLiveCells += config.board[row+1][col-1];
    		numAllNeighbors += 1;
    	}

    	numLiveCells += config.board[row+1][col];
    	numAllNeighbors += 1;

    	if (col + 1 < config.w){
    		numLiveCells += config.board[row+1][col+1];
    		numAllNeighbors += 1;
    	}
    }
      
    return [numLiveCells, numAllNeighbors - numLiveCells];
}


function checkDieOrLiveForNextPeriod(config, row, col){
	var live_die = getLiveDeadCellsNumbers(config, row, col);
	var numLiveCells = live_die[0];
	var numDeadCells = live_die[1];
	var value = config.board[row][col];

	if (value == 1){
		if (numLiveCells < 2) return 0;
		if (numLiveCells >=2 && numLiveCells < 4) return 1;
		if (numLiveCells >= 4) return 0;
	}

	if (value == 0){
		if( numLiveCells == 3) return 1;
		return 0;
	}
}

function getNextPeriod(config){
	var row = 0,
		col = 0;
	var result = [];
	for(row = 0; row < config.h; row ++){
		newRow = [];
		for(col = 0; col < config.w; col ++){
			var newState = checkDieOrLiveForNextPeriod(config, row, col);
			newRow.push(newState);
		}
		result.push(newRow);
	}

	var configNew = {
        w : config.w,
        h : config.h,
        board : result
    }

	return configNew;
}