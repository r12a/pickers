globals.showTranslit =  ''



function localInitialise () {
	}



var _h = {

end: {}
}





var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t|y|u|i|o|p|[|]",
"a|s|d|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]


/*  FOR KEYBOARDS WITH DIFFERENT CHARS ON SHIFT LEVEL
var keyboardUC = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t උ|y|u|i|o|p|[|]",
"a ඒ ඌ ඖ|s|d ො ඎ ෲ|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]


function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }
*/


function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

    if (node.className =='unshifted') {
        document.getElementById(LC).style.display = 'none'
        document.getElementById(UC).style.display = 'block'
		node.className = 'shifted'
		} 
	else {
        document.getElementById(LC).style.display = 'flex'
        document.getElementById(UC).style.display = 'none'
		node.className = 'unshifted'
		}
	}

