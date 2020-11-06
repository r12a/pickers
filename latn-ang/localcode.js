// GLOBAL VARIABLES

globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showCaseEndings = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


function localInitialise () {

	}


var _h = {

end: {}
}



var keyboarddef = [
"§|1 1|2 2|3 3|4 4|5 5|6 6|7 7|8 8|9 9 ‹|0 0 ›|- «|= »",
"q q œ|w w|e e ē|r r|t t þ|y y ȳ|u u ū|i i ī|o o ō|p p|[|]",
"a a ā|s s|d d ð|f f|g g ġ|h h|j j|k k|l l|; ’|' ǣ æ|\\",
"z z|x x|c c ċ|v v|b b|n n|m m|, ;|. . :|/ \u0361"
]

var keyboardUC = [
"§|1 1|2 2|3 3|4 4|5 5|6 6|7 7|8 8|9 9 ‹|0 0 ›|- «|= »",
"Q Q Œ|W W|E E Ē|R R|T T Þ|Y Y Ȳ|U U Ū|I I Ī|O O Ō|P P|[|]", 
"A A Ā|S S|D D Ð|F F|G G Ġ|H H|J J|K K|L L|; ’|' Ǣ Æ|\\", 
"Z Z|X X|C C Ċ|V V|B B|N N|M M|, ;|. . :|/ \u0361"
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


/*
globals.showTypeIn = ''

var typeinCharacterMap = `
a ā æ ǣ
c ċ
d ð
e ē
g ġ
i ī
o ō œ
p þ
u ū
y ȳ
; ͡
`

var ipaCharacterMap = `
a aː ɑ ɑː æ æː
e eː ə̯
i iː
o oː ø œː ɔ
u uː 
d ʤ ð 
l l̥ 
n n̥ ŋ
r r̥
s ʃ
t ʧ
w ʍ
y yː ɣ
z θ
`
*/


function toggleShift (node) {
	if (! node.classList.contains('shifted')) {
		lcs = document.querySelectorAll('.lowercase')
		for (let i=0;i<lcs.length;i++) lcs[i].classList.add('hidden')
		ucs = document.querySelectorAll('.uppercase')
		for (let i=0;i<ucs.length;i++) ucs[i].classList.remove('hidden')
		} 
	else {
		lcs = document.querySelectorAll('.lowercase')
		for (let i=0;i<lcs.length;i++) lcs[i].classList.remove('hidden')
		ucs = document.querySelectorAll('.uppercase')
		for (let i=0;i<ucs.length;i++) ucs[i].classList.add('hidden')
		}
	}

