globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false





window.charCheckerList = [
//{ wrong:"", right:"" },
]





// list of fonts to add to the standard selection
window.fontsuggestions =  
`Namdhinggo SIL`


function localInitialise () {
	}
	




var _h = {
"AA1A": ["AA1C", "AA0F", "AA27", "AA28", "AA47", "AA49", "AA56", "AA57", "AA23"],
"AA1C": ["AA0F", "AA27", "AA28", "AA47", "AA49", "AA56", "AA57", "AA23", "AA1A"],
"AA0F": ["AA27", "AA28", "AA47", "AA49", "AA56", "AA57", "AA23", "AA1A", "AA1C"],
"AA27": ["AA28", "AA47", "AA49", "AA56", "AA57", "AA23", "AA1A", "AA1C", "AA0F"],
"AA28": ["AA47", "AA49", "AA56", "AA57", "AA23", "AA1A", "AA1C", "AA0F", "AA27"],
"AA47": ["AA49", "AA56", "AA57", "AA23", "AA1A", "AA1C", "AA0F", "AA27", "AA28"],
"AA49": ["AA56", "AA57", "AA23", "AA1A", "AA1C", "AA0F", "AA27", "AA28", "AA47"],
"AA56": ["AA57", "AA23", "AA1A", "AA1C", "AA0F", "AA27", "AA28", "AA47", "AA49"],
"AA57": ["AA23", "AA1A", "AA1C", "AA0F", "AA27", "AA28", "AA47", "AA49", "AA56"],
"AA23": ["AA1A", "AA1C", "AA0F", "AA27", "AA28", "AA47", "AA49", "AA56", "AA57"],
"AA1B": ["AA0E", "AA0A", "AA0B", "AA55", "AA15"],
"AA0E": ["AA0A", "AA0B", "AA55", "AA15", "AA1B"],
"AA0A": ["AA0B", "AA55", "AA15", "AA1B", "AA0E"],
"AA0B": ["AA55", "AA15", "AA1B", "AA0E", "AA0A"],
"AA55": ["AA15", "AA1B", "AA0E", "AA0A", "AA0B"],
"AA15": ["AA1B", "AA0E", "AA0A", "AA0B", "AA55"],
"AA13": ["AA10", "AA11", "AA24", "AA12", "AA45", "AA4A", "AA41", "AA53", "AA54", "AA01", "AA04", "AA08"],
"AA10": ["AA11", "AA24", "AA12", "AA45", "AA4A", "AA41", "AA53", "AA54", "AA01", "AA04", "AA08", "AA13"],
"AA11": ["AA24", "AA12", "AA45", "AA4A", "AA41", "AA53", "AA54", "AA01", "AA04", "AA08", "AA13", "AA10"],
"AA24": ["AA12", "AA45", "AA4A", "AA41", "AA53", "AA54", "AA01", "AA04", "AA08", "AA13", "AA10", "AA11"],
"AA12": ["AA45", "AA4A", "AA41", "AA53", "AA54", "AA01", "AA04", "AA08", "AA13", "AA10", "AA11", "AA24"],
"AA45": ["AA4A", "AA41", "AA53", "AA54", "AA01", "AA04", "AA08", "AA13", "AA10", "AA11", "AA24", "AA12"],
"AA4A": ["AA41", "AA53", "AA54", "AA01", "AA04", "AA08", "AA13", "AA10", "AA11", "AA24", "AA12", "AA45"],
"AA41": ["AA53", "AA54", "AA01", "AA04", "AA08", "AA13", "AA10", "AA11", "AA24", "AA12", "AA45", "AA4A"],
"AA53": ["AA54", "AA01", "AA04", "AA08", "AA13", "AA10", "AA11", "AA24", "AA12", "AA45", "AA4A", "AA41"],
"AA54": ["AA01", "AA04", "AA08", "AA13", "AA10", "AA11", "AA24", "AA12", "AA45", "AA4A", "AA41", "AA53"],
"AA01": ["AA04", "AA08", "AA13", "AA10", "AA11", "AA24", "AA12", "AA45", "AA4A", "AA41", "AA53", "AA54"],
"AA04": ["AA08", "AA13", "AA10", "AA11", "AA24", "AA12", "AA45", "AA4A", "AA41", "AA53", "AA54", "AA01"],
"AA08": ["AA13", "AA10", "AA11", "AA24", "AA12", "AA45", "AA4A", "AA41", "AA53", "AA54", "AA01", "AA04"],
"AA19": ["AA0D", "AA17", "AA18", "AA46", "AA44", "AA58", "AA0C"],
"AA0D": ["AA17", "AA18", "AA46", "AA44", "AA58", "AA0C", "AA19"],
"AA17": ["AA18", "AA46", "AA44", "AA58", "AA0C", "AA19", "AA0D"],
"AA18": ["AA46", "AA44", "AA58", "AA0C", "AA19", "AA0D", "AA17"],
"AA46": ["AA44", "AA58", "AA0C", "AA19", "AA0D", "AA17", "AA18"],
"AA44": ["AA58", "AA0C", "AA19", "AA0D", "AA17", "AA18", "AA46"],
"AA58": ["AA0C", "AA19", "AA0D", "AA17", "AA18", "AA46", "AA44"],
"AA0C": ["AA19", "AA0D", "AA17", "AA18", "AA46", "AA44", "AA58"],
"AA07": ["AA40", "AA06"],
"AA40": ["AA06", "AA07"],
"AA06": ["AA07", "AA40"],
"AA21": ["AA14", "AA1E", "AA25", "AA59", "AA1D"],
"AA14": ["AA1E", "AA25", "AA59", "AA1D", "AA21"],
"AA1E": ["AA25", "AA59", "AA1D", "AA21", "AA14"],
"AA25": ["AA59", "AA1D", "AA21", "AA14", "AA1E",  "AA22", "AA48", "AA03", "AA16", "AA09", "AA1F"],
"AA59": ["AA1D", "AA21", "AA14", "AA1E", "AA25"],
"AA1D": ["AA21", "AA14", "AA1E", "AA25", "AA59"],
"AA03": ["AA09", "AA1F", "AA20", "AA25", "AA22", "AA48", "AA03", "AA16"],
"AA09": ["AA1F", "AA20", "AA25", "AA22", "AA48", "AA03", "AA16", "AA03"],
"AA1F": ["AA20", "AA25", "AA22", "AA48", "AA03", "AA16", "AA03", "AA09"],
"AA20": ["AA25", "AA22", "AA48", "AA03", "AA16", "AA03", "AA09", "AA1F"],
"AA22": ["AA48", "AA03", "AA16", "AA03", "AA09", "AA1F", "AA20", "AA25"],
"AA48": ["AA03", "AA16", "AA03", "AA09", "AA1F", "AA20", "AA25", "AA22"],
"AA16": ["AA03", "AA09", "AA1F", "AA20", "AA25", "AA22", "AA48", "AA03"],
"AA4B": ["AA26"],
"AA26": ["AA4B"],
"AA4D": ["AA51"],
"AA51": ["AA4D"],
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







