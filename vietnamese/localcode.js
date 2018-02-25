var _showMesherTrans =  ''
var _showISOTrans = ''


function localInitialise () {
	}
	

var _h = {

end: {}
}



var keyboarddef = [
"§ ¤ ±|1 ă Ă|2 â Â|3 ê Ê|4 ô Ô|5 ̀ `|6 ̉|7 ̃ ~|8 ́ ´|9 ̣|0 đ Đ|-|= ₫ +",
"q q Q|w w W|e e E|r r R|t t T|y y Y|u u U|i i I|o o O|p p P|[ ư Ư|] ơ Ơ",
"a a A|s s S|d d D|f f F|g g G|h h H|j j J|k k K|l l L|; ; :|' ' \"|\\ \\ \|",
"` ` ~|z z Z|x x X|c c C|v v V|b b B|n n N|m m M|, , <|. . >|/ / ?"
]




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
