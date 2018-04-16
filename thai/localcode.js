globals.showBeckerTrans =  ''
globals.showISO2Trans = ''
globals.showTranslit =  ''

function localInitialise () {

	}



var _h = {
'E01': ['E20', 'E24', 'E20'],
'E02': ['E0A', 'E0B', 'E03'],
'E04': ['E14', 'E28', 'E15', 'E05'],
'E06': ['E11', 'E21'],
'E08': ['E27', 'E25'],
'E0A': ['E02', 'E0B', 'E03'],
'E0C': ['E13', 'E0D'],
'E15': ['E05', 'E04', 'E14'],
'E0F': ['E0E'],
'E10': ['E23', 'E18'],
'E11': ['E06'],
'E16': ['E24', 'E20', 'E01', 'E26'],
'E17': ['E11'],
'E18': ['E23', 'E10'],
'E1B': ['E1A', 'E29'],
'E1C': ['E1E', 'E1D', 'E1F', 'E2C'],
'E1E': ['E1C', 'E1D', 'E1F', 'E2C'],
'E20': ['E16', 'E24', 'E01', 'E26'],
'E1A': ['E1B', 'E29'],
'E0E': ['E0F', 'E24', 'E26'],
'E14': ['E04', 'E28', 'E15'],
'E0B': ['E0A', 'E02', 'E03'],
'E28': ['E04', 'E14', 'E15'],
'E29': ['E1A'],
'E2A': ['E25', 'E09'],
'E1F': ['E1D', 'E1C', 'E1E', 'E2C'],
'E1D': ['E1F', 'E1C', 'E1E', 'E2C'],
'E2B': ['E17', 'E19'],
'E2E': ['E2D'],
'E25': ['E2A', 'E2FE25E2F'],
'E2C': ['E1D', 'E1F', 'E1C', 'E1E'],
'E23': ['E18', 'E10'],
'E0D': ['E13', 'E0C'],
'E27': ['E08', 'E07'],
'E2D': ['E2E'],
'E19': ['E21', 'E2B'],
'E13': ['E0C', 'E0D'],
'E21': ['E19', 'E17', 'E2B'],
'E07': ['E27'],
'E24': ['E26', 'E20', 'E16', 'E01'],
'E2F': ['E5A'],
'E5A': ['E2F'],
'E32': ['E45', 'E33'],
'E45': ['E32', 'E33'],
'E33': ['E32', 'E45', 'E4D'],
'E4D': ['E33'],
'E2FE25E2F': ['E2A', 'E25'],
'E05': ['E15'],
'E03': ['E02', 'E0B', 'E0A'],
'E26': ['E24', 'E20', 'E01', 'E16'],

end: {}
}


/*
ก ภ ฤ ภ
ข ช ซ ฃ
ค ด ศ ต ฅ
ฆ ฑ ม
จ ว ล
ช ข ซ ฃ
ฌ ณ ญ
ต ฅ ค ด
ฏ ฎ
ฐ ร ธ
ฑ ฆ
ถ ฤ ภ ก ฦ
ท ฑ
ธ ร ฐ
ป บ ษ
ผ พ ฝ ฟ ฬ
พ ผ ฝ ฟ ฬ
ภ ถ ฤ ก ฦ
บ ป ษ
ฎ ฏ ฤ ฦ
ด ค ศ ต
ซ ช ข ฃ
ศ ค ด ต
ษ บ
ส ล ฉ
ฟ ฝ ผ พ ฬ
ฝ ฟ ผ พ ฬ
ห ท น
ฮ อ
ล ส ฯลฯ
ฬ ฝ ฟ ผ พ
ร ธ ฐ
ญ ณ ฌ
ว จ ง
อ ฮ
น ม ห
ณ ฌ ญ
ม น ท ห
ง ว
ฤ ฦ ภ ถ ก
ฯ ๚
๚ ฯ
า ๅ ำ
ๅ า ำ
ำ า ๅ ํ
ํ ำ

*/

var keyboarddef = [
"§|1 ๅ +|2 / ๑|3 _ ๒|4 ภ ๓|5 ถ ๔|6 ุ ู|7 ึ ฿|8 ค ๕|9 ต ๖|0 จ ๗|- ข ๘|= ช ๙",
"q ๆ ๐|w ไ \"|e ำ ฎ|r พ ฑ|t ะ ธ|y ั ํ|u ี ๊|i ร ณ|o น ฯ|p ย ญ|[ บ ฐ|] ล ,",
"a ฟ ฤ|s ห ฆ|d ก ฏ|f ด โ|g เ ฌ|h ้ ็|j ่ ๋|k า ษ|l ส ศ|; ว ซ|' ง .|\\ ฃ ฅ",
"` - %|z ผ ฆ|x ป )|c แ ฉ|v อ ฮ|b ิ ฺ|n ื ์|m ท ?|, ม ฒ|. ใ ฬ|/ ฝ ฦ"
]



function condense (str) {
	// removes spaces and hyphens from a string

	// if text isn't highlighted, highlight whole thing (to avoid duplication)
	var node = document.getElementById('output')
	//IE support
	if (document.selection) { 
	    chstring = document.selection.createRange()
		}
	// Mozilla and Safari support
	else if (node.selectionStart || node.selectionStart == '0') {
		chstring = node.value.substring(node.selectionStart, node.selectionEnd)
		}
	if (chstring == '') { chstring = node.select() }

	// do the replacement
	str = str.replace(/ /g, '')
	str = str.replace(/-/g, '')

	return str
	}



function sendVowelLeft (str) {
	lv = str.match(/เ|แ|ไ|โ|ใ/)
	if (lv == null) return
	
	return lv+str.substr(0,lv.index)+str.substr(lv.index+1)
	}

function addVowel (ch) { 
	// ch: string, the text to be added
	
	if (document.getElementById('output').style.display == 'none') { return; }
	var outputNode = document.getElementById( 'output' ); // points to the output textarea

	
	//IE support
	if (document.selection) { 
		outputNode.focus()
	    range = document.selection.createRange()
		
        // merge the base and the vowels
        ch = ch.replace('-',range.text)
        
		range.text = ch; 
	    range.select(); 
		if (globals.refocus) outputNode.focus() 
		}
	// Mozilla and Safari support
	else if (outputNode.selectionStart || outputNode.selectionStart == '0') {
		var startPos = outputNode.selectionStart
		var endPos = outputNode.selectionEnd
		var cursorPos = startPos
		var scrollTop = outputNode.scrollTop
		var baselength = 0
		
        // get whatever is highlighted, or if no highlight the previous character
        var consonant
        if (startPos === endPos) startPos = startPos-1
        consonant = outputNode.value.substring(startPos,endPos)
        console.log(consonant)
        
        // merge the base and the vowels
        ch = ch.replace('-',consonant)
        
		outputNode.value = outputNode.value.substring(0, startPos)
              + ch
              + outputNode.value.substring(endPos, outputNode.value.length)
		cursorPos += ch.length

		if (globals.refocus) outputNode.focus()
		outputNode.selectionStart = cursorPos
		outputNode.selectionEnd = cursorPos
		if (! globals.refocus) outputNode.blur()
		}
	else {
		outputNode.value += ch
		if (globals.refocus) outputNode.focus()
		}
		
	// normalize
	if (globals.n11n=='nfc') { outputNode.value = outputNode.value.normalize('NFC') }
	else if (globals.n11n=='nfd') { outputNode.value = outputNode.value.normalize('NFD') }
	}

