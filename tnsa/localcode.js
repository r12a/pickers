globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false





window.charCheckerList = [
//{ wrong:"", right:"" },
]





function localInitialise () {
	}
	




var _h = {
"16AB0": ["16ABB", "16AA5", "16A87", "16A70", "16AC7", "16AAA"],
"16ABB": ["16AA5", "16A87", "16A70", "16AC7", "16AAA", "16AB0"],
"16AA5": ["16A87", "16A70", "16AC7", "16AAA", "16AB0", "16ABB"],
"16A87": ["16A70", "16AC7", "16AAA", "16AB0", "16ABB", "16AA5"],
"16A70": ["16AC7", "16AAA", "16AB0", "16ABB", "16AA5", "16A87"],
"16AC7": ["16AAA", "16AB0", "16ABB", "16AA5", "16A87", "16A70"],
"16AAA": ["16AB0", "16ABB", "16AA5", "16A87", "16A70", "16AC7"],
"16AAE": ["16AB3"],
"16AB3": ["16AAE"],
"16AB9": ["16AB8", "16A9D", "16AA7", "16ABA"],
"16AB8": ["16A9D", "16AA7", "16ABA", "16AB9"],
"16A9D": ["16AA7", "16ABA", "16AB9", "16AB8"],
"16AA7": ["16ABA", "16AB9", "16AB8", "16A9D"],
"16ABA": ["16AB9", "16AB8", "16A9D", "16AA7"],
"16A7F": ["16A86"],
"16A86": ["16A7F"],
"16A78": ["16AC8", "16A74"],
"16AC8": ["16A74", "16A78"],
"16A74": ["16A78", "16AC8"],
"16ABC": ["16A94", "16A97", "16A95", "16A96", "16A94", "16A97", "16A95", "16A96", "16AB1"],
"16A94": ["16A97", "16A95", "16A96", "16A94", "16AB1", "16ABC"],
"16A97": ["16A95", "16A96", "16A94", "16A97", "16AB1", "16ABC"],
"16A95": ["16A96", "16A94", "16A97", "16A95", "16AB1", "16ABC"],
"16A96": ["16A94", "16A97", "16A95", "16A96", "16AB1", "16ABC"],
"16AB1": ["16ABC", "16A94", "16A97", "16A95", "16A96", "16A94", "16A97", "16A95", "16A96"],
"16ABE": ["16AA2", "16A73", "16A9E", "16AAF", "16AA8", "16AA9"],
"16AA2": ["16A73", "16A9E", "16AAF", "16AA8", "16AA9", "16ABE"],
"16A73": ["16A9E", "16AAF", "16AA8", "16AA9", "16ABE", "16AA2",  "16A8A", "16AC5", "16A8C"],
"16A9E": ["16AAF", "16AA8", "16AA9", "16ABE", "16AA2", "16A73"],
"16AAF": ["16AA8", "16AA9", "16ABE", "16AA2", "16A73", "16A9E"],
"16AA8": ["16AA9", "16ABE", "16AA2", "16A73", "16A9E", "16AAF"],
"16AA9": ["16ABE", "16AA2", "16A73", "16A9E", "16AAF", "16AA8"],
"16AA1": ["16A85", "16A8D", "16A84"],
"16A85": ["16A8D", "16A84", "16AA1"],
"16A8D": ["16A84", "16AA1", "16A85"],
"16A84": ["16AA1", "16A85", "16A8D"],
"16AB6": ["16AC2", "16AAC"],
"16AC2": ["16AAC", "16AB6"],
"16AAC": ["16AB6", "16AC2"],
"16ABD": ["16A79", "16A75", "16AB5"],
"16A79": ["16A75", "16AB5", "16ABD"],
"16A75": ["16AB5", "16ABD", "16A79"],
"16AB5": ["16ABD", "16A79", "16A75"],
"16AB4": ["16A71", "16AA4"],
"16A71": ["16AA4", "16AB4",  "16A90", "16AAB", "16AB2", "16A80", "16A83", "16A81"],
"16AA4": ["16AB4", "16A71"],
"16AC9": ["16AC1"],
"16AC1": ["16AC9"],
"16A7C": ["16A7D", "16A89", "16AC3", "16AAD"],
"16A7D": ["16A89", "16AC3", "16AAD", "16A7C"],
"16A89": ["16AC3", "16AAD", "16A7C", "16A7D"],
"16AC3": ["16AAD", "16A7C", "16A7D", "16A89"],
"16AAD": ["16A7C", "16A7D", "16A89", "16AC3"],
"16AAB": ["16AB2", "16A80", "16A83", "16A81", "16A82", "16A71", "16A90"],
"16AB2": ["16A80", "16A83", "16A81", "16A82", "16A71", "16A90", "16AAB"],
"16A80": ["16A83", "16A81", "16A82", "16A71", "16A90", "16AAB", "16AB2"],
"16A83": ["16A81", "16A82", "16A71", "16A90", "16AAB", "16AB2", "16A80"],
"16A81": ["16A82", "16A71", "16A90", "16AAB", "16AB2", "16A80", "16A83"],
"16A82": ["16A71", "16A90", "16AAB", "16AB2", "16A80", "16A83", "16A81"],
"16A90": ["16AAB", "16AB2", "16A80", "16A83", "16A81", "16A82", "16A71"],
"16A7E": ["16A73", "16A8A", "16AC5", "16A8C"],
"16A8A": ["16AC5", "16A8C", "16A7E", "16A73"],
"16AC5": ["16A8C", "16A7E", "16A73", "16A8A"],
"16A8C": ["16A7E", "16A73", "16A8A", "16AC5"],
"16A8F": ["16A72", "16A88", "16A8B", "16A99", "16A9B", "16AA0", "16AB7", "16A9A", "16AA6", "16A98"],
"16A72": ["16A88", "16A8B", "16A99", "16A9B", "16AA0", "16AB7", "16A9A", "16AA6", "16A98", "16A8F"],
"16A88": ["16A8B", "16A99", "16A9B", "16AA0", "16AB7", "16A9A", "16AA6", "16A98", "16A8F", "16A72"],
"16A8B": ["16A99", "16A9B", "16AA0", "16AB7", "16A9A", "16AA6", "16A98", "16A8F", "16A72", "16A88"],
"16A99": ["16A9B", "16AA0", "16AB7", "16A9A", "16AA6", "16A98", "16A8F", "16A72", "16A88", "16A8B"],
"16A9B": ["16AA0", "16AB7", "16A9A", "16AA6", "16A98", "16A8F", "16A72", "16A88", "16A8B", "16A99"],
"16AA0": ["16AB7", "16A9A", "16AA6", "16A98", "16A8F", "16A72", "16A88", "16A8B", "16A99", "16A9B"],
"16AB7": ["16A9A", "16AA6", "16A98", "16A8F", "16A72", "16A88", "16A8B", "16A99", "16A9B", "16AA0"],
"16A9A": ["16AA6", "16A98", "16A8F", "16A72", "16A88", "16A8B", "16A99", "16A9B", "16AA0", "16AB7"],
"16AA6": ["16A98", "16A8F", "16A72", "16A88", "16A8B", "16A99", "16A9B", "16AA0", "16AB7", "16A9A"],
"16A98": ["16A8F", "16A72", "16A88", "16A8B", "16A99", "16A9B", "16AA0", "16AB7", "16A9A", "16AA6"],
"16A77": ["16A7B", "16AA3", "16A9C"],
"16A7B": ["16AA3", "16A9C", "16A77"],
"16AA3": ["16A9C", "16A77", "16A7B"],
"16A9C": ["16A77", "16A7B", "16AA3"],
"16A7A": ["16A76"],
"16A76": ["16A7A"],
"16AC4": ["16AC6", "16A9F"],
"16AC6": ["16A9F", "16AC4"],
"16A9F": ["16AC4", "16AC6"],
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







