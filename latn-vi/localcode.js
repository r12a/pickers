var _showMesherTrans =  ''
var _showISOTrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


function localInitialise () {
	}
	

var _h = {
end: {}
}



var keyboarddef = [
"§ ¤ ±|1|2 ₫|3|4|5 ̀|6 ̉|7 ̃|8 ́|9 ̣|0|-|=",
"q|w|e ê|r|t|y|u ư|i|o ô ơ|p|[|]",
"a ă â|s|d đ|f|g|h|j|k|l|;|'|\\|",
"`|z|x|c|v|b|n|m|,|.|/"
]


var keyboardUC = [
"§ ¤ ±|1|2 ₫|3|4|5 ̀|6 ̉|7 ̃|8 ́|9 ̣|0|-|=",
"q|w|e Ê|r|t|y|u Ư|i|o Ô Ơ|p|[|]",
"a Ă Â|s|d Đ|f|g|h|j|k|l|;|'|\\|",
"`|z|x|c|v|b|n|m|,|.|/"
]


function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }





function toggleShift (node, LC, UC) {
	if (node.className =='unshifted') {
		document.getElementById(LC).style.display = 'none'
		document.getElementById(UC).style.display = 'table'
		node.className = 'shifted'
		} 
	else {
		document.getElementById(LC).style.display = 'table'
		document.getElementById(UC).style.display = 'none'
		node.className = 'unshifted'
		}
	}

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
