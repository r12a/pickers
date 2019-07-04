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



var keyboarddef = [
"§|1 ၁|2 ၂|3 ၃|4 ၄|5 ၅|6 ၆|7 ၇|8 ၈|9 ၉|0 ၀|- ᥰ|= ᥱ",
"q ᥪ|w ᥩ|e ᥥ|r ᥫ|t ᥗ|y ᥕ|u ᥧ|i ᥤ|o ᥨ|p ᥚ|[ ᥲ|] ᥳ",
"a ᥣ|s ᥔ|d ᥖ|f ᥜ|g ᥐ|h ᥞ|j ᥓ|k ᥑ|l ᥘ|; ᥭ ；|' ᥴ|\\ ．",
"`|z ᥟ|x ᥦ|c ᥬ|v ᥝ|b ᥙ|n ᥒ|m ᥛ|, ᥢ 《 、|. ᥡ 》 。|/ ᥠ"
]




function sendVowelRight (str) {
    str = str.replace(/(ເ|ແ|ໂ|ໃ|ໄ)(.)/g, '$2$1')
    console.log(str)
    return str
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


function switchTones () {
    // figures out whether the text uses tone marks or letters, and switches to the other
    
	var str = getHighlightedText(_output)
    var replaceAll = false
    if (str === _output.value) replaceAll = true
	_output.focus()
    var letterFound = str.match(/ᥰ|ᥱ|ᥲ|ᥳ|ᥴ/)
    if (letterFound) {
        str = str.replace(/ᥰ/g,'\u0308')
        str = str.replace(/ᥱ/g,'\u030C')
        str = str.replace(/ᥲ/g,'\u0300')
        str = str.replace(/ᥳ/g,'\u0307')
        str = str.replace(/ᥴ/g,'\u0301')
        }
    else {
        str = str.replace(/\u0308/g,'ᥰ')
        str = str.replace(/\u030C/g,'ᥱ')
        str = str.replace(/\u0300/g,'ᥲ')
        str = str.replace(/\u0307/g,'ᥳ')
        str = str.replace(/\u0301/g,'ᥴ')
        }
    if (replaceAll) _output.value = str
    else add(str)
    }



