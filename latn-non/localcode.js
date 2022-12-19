globals.showLOCTrans = ''
globals.showCaseEndings = ''
globals.showLatinTrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
``


function localInitialise () {

	}



var _h = {

end: {}
}



var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9 ‹|0 ›|- «|= »",
"q æ|w|e é|r ʀ|t þ|y ý|u ú|i í|o ǫ ó|p|[ ø|] œ",
"a á|s|d ð|f|g|h|j|k|l|;|' ʼ|\\",
"z|x|c|v|b|n|m|,|.|/ \u0361"
]

var keyboardUC = [
"§|1|2|3|4|5|6|7|8|9 ‹|0 ›|- «|= »",
"Q Æ|W|E É|R Ʀ|T Þ|Y Ý|U Ú|I Í|O Ǫ Ó|P|[ Ø|] Œ",
"A Á|S|D Ð|F|G|H|J|K|L|;|' ʼ|\\",
"Z|X|C|V|B|N|M|,|.|/ \u0361"
]


globals.showTypeIn = ''

var typeinCharacterMap = `
; ‹ › « » ͡
a á æ
d ð
e é
i í
o œ ǫ ó ø
p þ
r ʀ
u ú
y ý
A Á Æ
D Ð
E É
I Í
O Œ Ǫ Ó Ø
P Þ
R Ʀ
U Ú
Y Ý
`


/*
var ipaCharacterMap = `
a aː æ
e eː
i iː
o oː ø œː ɔ
u uː
b bː
d dː ð
f fː
g gː
k kː
l lː
m mː
n nː ŋ
p pː
r rː
s sː
t tː ʦ
y yː ɣ
O θ
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