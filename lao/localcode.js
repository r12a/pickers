globals.showSimTrans = ''
globals.showTranslit =  ''



function localInitialise () {
	}
	

var _h = {
'E81': ['E96', 'ED7'],
'E82': ['E8A'],
'E84': ['E94'],
'E87': ['EC6'],
'EAA': ['EA5'],
'E8A': ['E82'],
'E8D': ['EA2'],
'E94': ['E95', 'E84'],
'E95': ['ED8', 'E94'],
'E96': ['ED7', 'E81'],
'E97': ['EAB', 'EDC', 'EDD'],
'E99': ['EA1', 'E9A'],
'E9A': ['E9B', 'E99'],
'E9B': ['E9A', 'E99'],
'E9C': ['E9D', 'E9E', 'E9F', 'ED6'],
'E9E': ['E9D', 'E9C', 'E9F', 'ED6'],
'E9D': ['E9C', 'E9E', 'E9F', 'ED6'],
'EA1': ['E99', 'E9A'],
'EA2': ['E8D'],
'EA5': ['EAA'],
'EAB': ['EDC', 'EDD', 'E97'],
'EAE': ['EA3'],
'EDC': ['EDD', 'EAB', 'E97'],
'EDD': ['EDC', 'EAB', 'E97'],
'EA3': ['EAE'],
'EB3': ['EB2'],
'EB2': ['EB3'],
'EC6': ['EC6EA5EC6'],
'EC6EA5EC6': ['EC6'],
'ED7': ['E96', 'E81'],
'ED8': ['E95'],
'ED9': ['E97'],
'ED6': ['E9D', 'E9F', 'E9C', 'E9E'],
'ED2': ['ED5', 'ED4'],

end: {}
}




var keyboarddef = [
"§|1 ຢ ໑|2 ຟ ໒|3 ໂ ໓|4 ຖ ໔|5 ຸ ໌|6 ູ ຼ|7 ຄ ໕|8 ຕ ໖|9 ຈ ໗|0 ຂ ໘|- ຊ ໙|= ໍ ໍ່",
"q ົ ົ້|w ໄ ໐|e ຳ ຳ້|r ພ _|t ະ +|y ິ ິ້|u ີ ີ້|i ຮ ຣ|o ນ ໜ|p ຍ ຽ|[ ບ -|] ລ ຫຼ",
"a ັ ັ້|s ຫ ;|d ກ .|f ດ ,|g ເ :|h ້ ໊|j ່ ໋|k າ !|l ສ ?|; ວ %|' ງ =|\\ “ ”",
"` * /|z ຜ ₭|x ປ (|c ແ ຯ|v ອ x|b ຶ ຶ້|n ື ື້|m ທ ໆ|, ມ ໝ|. ໃ $|/ ຝ )"
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

