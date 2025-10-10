globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false





window.charCheckerList = [
//{ wrong:"", right:"" },
]





function localInitialise () {
	}
	




var _h = {
"11D62": ["11D63", "11D62"],
"11D63": ["11D62", "11D62"],
"11D64": ["11D65", "11D74", "11D6F", "11D81", "11D64"],
"11D65": ["11D74", "11D6F", "11D81", "11D64",  "11D80", "11D77"],
"11D74": ["11D6F", "11D81", "11D6F", "11D64", "11D64", "11D65"],
"11D6F": ["11D81", "11D6F", "11D64", "11D65", "11D74"],
"11D81": ["11D6F", "11D64", "11D65", "11D74",  "11D89", "11D87", "11D7A", "11D84", "11D88", "11D75", "11D85", "11D73"],
"11D67": ["11D6A", "11D67",  "11D68", "11D6B", "11D60"],
"11D6A": ["11D67",  "11D68", "11D6B", "11D60"],
"11D60": ["11D61", "11D67", "11D6A", "11D68", "11D6B", "11D60"],
"11D61": ["11D67", "11D6A", "11D68", "11D6B", "11D60", "11D60"],
"11D68": ["11D6B", "11D60", "11D60", "11D61", "11D67", "11D6A"],
"11D6B": ["11D60", "11D60", "11D61", "11D67", "11D6A", "11D68"],
"11D7D": ["11D7E", "11D79", "11D83", "11D70", "11D7D"],
"11D7E": ["11D79", "11D83", "11D79", "11D83", "11D70", "11D7D", "11D7D"],
"11D79": ["11D83", "11D79", "11D70", "11D7D", "11D7E"],
"11D83": ["11D79", "11D83", "11D70", "11D7D", "11D7E"],
"11D70": ["11D7D", "11D7D", "11D7E", "11D79", "11D83", "11D79", "11D83"],
"11D86": ["11D7C", "11D85", "11D86"],
"11D7C": ["11D85", "11D86", "11D86"],
"11D85": ["11D86", "11D7C",  "11D73", "11D82", "11D81", "11D7A", "11D84", "11D88"],
"11D78": ["11D72", "11D78"],
"11D72": ["11D78", "11D78"],
"11D6E": ["11D6D", "11D87", "11D6E"],
"11D6D": ["11D87", "11D6E", "11D6E"],
"11D87": ["11D6E", "11D6D",  "11D81"],
"11D80": ["11D77", "11D71", "11D65", "11D80"],
"11D77": ["11D77", "11D71", "11D65", "11D80"],
"11D71": ["11D65", "11D80", "11D80", "11D77", "11D77"],
"11D76": ["11D7F", "11D6C", "11D7B", "11D7F"],
"11D7F": ["11D6C", "11D7B", "11D7F", "11D76"],
"11D6C": ["11D7B", "11D7F", "11D76", "11D7F"],
"11D7B": ["11D7F", "11D76", "11D7F", "11D6C"],
"11D89": ["11D87", "11D81", "11D89"],
"11D73": ["11D82", "11D81", "11D7A", "11D84", "11D88", "11D75", "11D85"],
"11D82": ["11D81", "11D7A", "11D84", "11D88", "11D75", "11D85", "11D73"],
"11D7A": ["11D84", "11D88", "11D75", "11D85", "11D73", "11D82", "11D81"],
"11D84": ["11D88", "11D75", "11D85", "11D73", "11D82", "11D81", "11D7A"],
"11D88": ["11D75", "11D85", "11D73", "11D82", "11D81", "11D7A", "11D84"],
"11D75": ["11D85", "11D73", "11D82", "11D81", "11D7A", "11D84", "11D88"],
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


function toggleSubjoined (node) {
	if (node.classList.contains('shifted')) {
		document.getElementById('consonantGrid').style.display = 'flex'
		document.getElementById('subjoinedGrid').style.display = 'none'
		}
    else {
		document.getElementById('consonantGrid').style.display = 'none'
		document.getElementById('subjoinedGrid').style.display = 'flex'
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







