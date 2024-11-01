globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false





window.charCheckerList = [
//{ wrong:"", right:"" },
]





function localInitialise () {
	}
	




var _h = {
end: {}
}





var keyboarddef = [
"§|1 ꤁ !|2 ꤂ ꤮|3 ꤃ #|4 ꤄ :|5 ꤅ %|6 ꤆ “|7 ꤇ ”|8 ꤈ *|9 ꤉ (|0 ꤀ )|- - _|== +",
"q ꤠ|w ꤎ|e ꤙ|r ꤚ|t ꤣ|y ꤤ|u ꤥ|i ꤞ|o ꤓ|p ꤑ|[ ꤘ|]",
"a ꤊ|s ꤔ|d ꤛ|f ꤢ ꤢꤦ|g ꤩ ꤢꤧ|h ꤪ ꤢꤨ|j ꤒ ꤢꤩ|k ꤟ ꤢꤪ|l ꤕ|; ꤜ|' ꤍ|\\ \\",
"`|z ꤡ|x ꤌ|c ꤏ|v ꤋ|b ꤗ|n ꤖ|m ꤝ|, ꤐ|. ,|/ ꤯"
]
// source: 






function toggleExtended (node) {
    var chars = document.querySelectorAll('.x')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display = 'none'
            }
		document.getElementById('translitvowels').style.display = 'none'
		}
    else {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display = 'inline-block'
            }
		document.getElementById('translitvowels').style.display = 'block'
		} 
	}


function toggleShift (node) {
    var chars = document.querySelectorAll('.c')

	if (node.classList.contains('shifted')) {
        document.getElementById('consonantGrid2').style.display = 'none'
        document.getElementById('consonantGrid').style.display = 'block'
        document.getElementById('vowelGrid2').style.display = 'none'
        document.getElementById('vowelGrid').style.display = 'block'
		} 
	else {
        document.getElementById('consonantGrid').style.display = 'none'
        document.getElementById('consonantGrid2').style.display = 'block'
        document.getElementById('vowelGrid').style.display = 'none'
        document.getElementById('vowelGrid2').style.display = 'block'
		}
	}







