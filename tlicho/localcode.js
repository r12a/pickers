// GLOBAL VARIABLES

globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showCaseEndings = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false



function localInitialise () {}


var _h = {
end: {}
}




var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9 ‹|0 ›|- « »|=",
"q|w|e|r|t|y|u|i ı|o|p|[ \u0300 “|] \u0328 ”",
"a|s|d|f|g|h|j|k|l|; ł|' ʼ|\\ ‘ ’",
"`|z|x|c|v|b|n|m|, ;|. :|/"
]

var keyboardUC = [
"§|!|@|#|$|%|^|&|*|( ‹|) ›|- « »|=",
"Q|W|E|R|T|Y|U|I|O|P|{ \u0300 “|} \u0328 ”", 
"A|S|D|F|G|H|J|K|L|: Ł|\" ’|\\ ‘ ’", 
"`|Z|X|C|V|B|N|M|< ;|> :|/"
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





function toggleShift (node) {
	if (node.className =='unshifted') {
		lcs = document.querySelectorAll('.lowercase')
		for (let i=0;i<lcs.length;i++) lcs[i].classList.add('hidden')
		ucs = document.querySelectorAll('.uppercase')
		for (let i=0;i<ucs.length;i++) ucs[i].classList.remove('hidden')
		node.className = 'shifted'
		} 
	else {
		lcs = document.querySelectorAll('.lowercase')
		for (let i=0;i<lcs.length;i++) lcs[i].classList.remove('hidden')
		ucs = document.querySelectorAll('.uppercase')
		for (let i=0;i<ucs.length;i++) ucs[i].classList.add('hidden')
		node.className = 'unshifted'
		}
	}

