globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showCaseEndings = ''

function localInitialise () {

	}



var _h = {

end: {}
}



var keyboarddef = [
"§|1 1|2 2|3 3|4 4|5 5|6 6|7 7|8 8|9 9 ‹|0 0 ›|- «|= »",
"q q œ|w w|e e é|r r ʀ|t t þ|y y ý|u u ú|i i í|o o ǫ ó|p p p|[ ø|]",
"a a á|s s|d d ð|f f|g g|h h|j j|k k|l l|; ’|' æ|\\",
"z z|x x|c c|v v|b b|n n|m m|, , ;|. . :|/ \u0361"
]

var keyboardUC = [
"§|1 1|2 2|3 3|4 4|5 5|6 6|7 7|8 8|9 9 ‹|0 0 ›|- «|= »",
"Q Q Œ|W W|E E É|R R Ʀ|T T Þ|Y Y Ý|U U Ú|I I Í|O O Ǫ Ó|P P P|[ Ø|]",
"A A Á|S S|D D Ð|F F|G G|H H|J J|K K|L L|; ’|' Æ|\\",
"Z Z|X X|C C|V V|B B|N N|M M|, , ;|. . :|/ \U0361"
]


function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }




function highlightEndings (caseList) {
	// makes the cells in the table of case endings light up
	// caseList: space-separated list of cell ids
	
	var cells = caseList.split(' ')
	for (var c=0;c<cells.length;c++) {
		var currentCell = document.getElementById(cells[c])
		if (currentCell.className == 'plural') currentCell.style.backgroundColor = 'green'
		else currentCell.style.backgroundColor = 'red'
		}
	}

function blankEndings () {
	var cells = document.getElementById('caseEndings').querySelectorAll('td')
	for (var c=0;c<cells.length;c++) cells[c].style.backgroundColor = 'white'
	}