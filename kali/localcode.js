globals.showTranslit =  ''
globals.typeAssist = ''
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


var _h = {
"A90B": ["A915", "A924", "A90B"],
"A915": ["A924", "A90B", "A90B"],
"A924": ["A90B", "A90B", "A915"],
"A919": ["A91A", "A906", "A912", "A90A", "A919"],
"A91A": ["A906", "A912", "A90A", "A919", "A919"],
"A906": ["A912", "A90A", "A919", "A919", "A91A"],
"A912": ["A90A", "A919", "A919", "A91A", "A906"],
"A90A": ["A919", "A919", "A91A", "A906", "A912"],
"A918": ["A903", "A918"],
"A903": ["A918", "A918"],
"A913": ["A91D", "A907", "A909", "A917", "A913"],
"A91D": ["A907", "A909", "A917", "A913", "A913"],
"A907": ["A909", "A917", "A913", "A913", "A91D"],
"A909": ["A917", "A913", "A913", "A91D", "A907"],
"A917": ["A913", "A913", "A91D", "A907", "A909"],
"A921": ["A90F", "A921"],
"A90F": ["A921", "A921"],
"A91E": ["A911", "A91E"],
"A911": ["A91E", "A91E"],
"A91B": ["A91C", "A91B"],
"A91C": ["A91B", "A91B"],
end: {}
}


var keyboarddef = [
"§|1 ꤁ !|2 ꤂ ꤮|3 ꤃ #|4 ꤄ :|5 ꤅ %|6 ꤆ “|7 ꤇ ”|8 ꤈ *|9 ꤉ (|0 ꤀ )|- - _|== +",
"q ꤠ|w ꤎ|e ꤙ|r ꤚ|t ꤣ|y ꤤ|u ꤥ|i ꤞ|o ꤓ|p ꤑ|[ ꤘ|]",
"a ꤊ|s ꤔ|d ꤛ|f ꤢ ꤢꤦ|g ꤬ ꤢꤧ|h ꤭ ꤢꤨ|j ꤒ ꤢꤩ|k ꤟ ꤢꤪ|l ꤕ|; ꤜ|' ꤍ|\\ \\",
"`|z ꤡ|x ꤌ|c ꤏ|v ꤋ|b ꤗ|n ꤖ|m ꤝ|, ꤐ|. ,|/ ꤯"
]

// source: http://www.karennirefugees.com/uploads/3/0/1/9/3019325/karenni_uni_keyboard.pdf








