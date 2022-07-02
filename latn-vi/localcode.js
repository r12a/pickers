var _showMesherTrans =  ''
var _showISOTrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


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





function toggleShift (node) {
    var chars = document.querySelectorAll('.c')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.lc) chars[i].textContent = chars[i].dataset.lc
            else chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.uc) chars[i].textContent = chars[i].dataset.uc
            else chars[i].textContent = chars[i].textContent.toUpperCase()
            }
		}
	// reinitialise ids to codepoint values of character sequence (with no leading zeros)
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		content = node[n].textContent
		id=''
		for (i=0;i<content.length;i++) {
			id += convertChar2CP(content[i])
			}
		node[n].id = id
        node[n].dataset.c = 'c'+id
        dec = parseInt(id, 16)
        while (id.length<4) id = '0'+id
        node[n].title = 'U+'+id+': '+charData[content]
		}
	}
