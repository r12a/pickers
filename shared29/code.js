﻿// GLOBAL VARIABLES

var debug=false
var kbdEventList = {}

var globals = {}
globals.view = 'alphabet';
globals.n11n = 'nfc';
globals.refocus = true;
globals.showShapeHints = ''   // indicates whether or not to show shape hinting
globals.showShapeLookup = ''   // indicates whether or not to show shape images for lookup
globals.showLatinTrans = ''
globals.showTranslit =  ''
globals.showKeyboard = ''
globals.keyHints = 'key'
var _output
var marks = new Set()




function replaceSlash (str, replacement) {
// does .replace(/\//g,str), since that doesn't seem to work
	
	var strArray = [...str]
	for (i=0;i<strArray.length;i++) if (strArray[i]==='/') strArray[i]=replacement
	return strArray.join('')
	}

function addReplacement (ch, autoInsertedFromPalette='') {
    // this version assumes that no selection ranges are involved, because it's only replacing a character 
    // that has just been typed while the insertion panel opened
    // autoInsertFromPalette: the character that was automatically inserted by the keypress 
    // – may be set to '' if nothing was produced by the previous keypress, eg for ALT
	// ch: string, the text to be added
	if (debug) console.log('addReplacement(',ch,',',autoInsertedFromPalette,')')
	
	if (document.getElementById('output').style.display == 'none') { return; }
	var outputNode = document.getElementById( 'output' ); // points to the output textarea

	
	if (outputNode.selectionStart || outputNode.selectionStart == '0') {
        var firstBit = [...outputNode.value.substring(0,outputNode.selectionStart)]
        var secondBit = [...outputNode.value.substring(outputNode.selectionStart)]
        var autoInsertLength = [...autoInsertedFromPalette].length
                                       if (debug) console.log('firstBit',firstBit)
                                       if (debug) console.log('secondBit',secondBit)
                                       if (debug) console.log('autoInsert',autoInsertLength)
        
        // remove the previously inserted item
        for (var i=0;i<autoInsertLength;i++) var garbage = firstBit.pop()
        if (firstBit.length > 0) var lastCharacter = firstBit.pop()
        else lastCharacter = ''
        
                                       if (debug) console.log('firstBit',firstBit)
                                       if (debug) console.log('lastCharacter',lastCharacter)
        
        // if ch has a hyphen, replace it with the last character
        if (ch.includes('-')) {
            ch = ch.replace('-',lastCharacter)
            lastCharacter = ''
            }
        // if ch has a dotted circle, replace it with the last character
        if (ch.includes('◌')) {
            ch = ch.replace('◌',lastCharacter)
            lastCharacter = ''
            }
        
        outputNode.value = firstBit.join('')+lastCharacter+ch+secondBit.join('')
		outputNode.selectionStart = firstBit.join('').length+lastCharacter.length+ch.length
		outputNode.selectionEnd = firstBit.join('').length+lastCharacter.length+ch.length
        
 		if (globals.refocus) outputNode.focus()
 		if (! globals.refocus) outputNode.blur()
      
        }

	// normalize
	if (globals.n11n=='nfc') { outputNode.value = outputNode.value.normalize('NFC') }
	else if (globals.n11n=='nfd') { outputNode.value = outputNode.value.normalize('NFD') }
	}



function addReplacementOLDISH (ch, autoInsertedFromPalette='') { 
	// ch: string, the text to be added
	if (debug) console.log('addReplacement(',ch,')')
	
	if (document.getElementById('output').style.display == 'none') { return; }
	var outputNode = document.getElementById( 'output' ); // points to the output textarea

	
	if (outputNode.selectionStart || outputNode.selectionStart == '0') {
		var startPos = outputNode.selectionStart
		var endPos = outputNode.selectionEnd
		var cursorPos = startPos
		var scrollTop = outputNode.scrollTop
        var substitutionMade = false
		
        // get whatever is highlighted, or if no highlight the previous character
        var consonant
        //if (startPos === endPos) startPos = startPos-1
        if (debug) console.log('autoInsertedFromPalette length is:', autoInsertedFromPalette.length)
        if (startPos === endPos) startPos = startPos-autoInsertedFromPalette.length
        consonant = outputNode.value.substring(startPos-1,endPos-1)
		if (consonant.codePointAt(0) > 0xD800 && consonant.codePointAt(0) < 0xDFFF) startPos--
        if (debug) console.log('Consonant',consonant)
        
        // merge the base and the vowels
        if (ch.includes('-')) {
            ch = ch.replace('-',consonant)
            startPos--
            substitutionMade = true
            }
        
		outputNode.value = outputNode.value.substring(0, startPos)
              + ch
              + outputNode.value.substring(endPos, outputNode.value.length)
		if (substitutionMade) cursorPos += ch.length-2
        else cursorPos += ch.length-1

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



// LOCALSTORAGE ROUTINES

function savePreferences (node) {
	// if you click Ok to Store, this sets localStorage up
	localStorage.pickersStore = 'yes'
	node.parentNode.style.display = 'none'
	}

function dontStore (node) {
	// you come here if you request no localStorage
	// node is the button clicked
	node.parentNode.style.display = 'none'
	}

function toggleContrast () {
	// toggle the contrast for the UI, and record in localStorage
	document.querySelector('body').classList.toggle('contrast')
	if (document.querySelector('body').classList.contains('contrast')) defaults.contrast = 'high'
	else defaults.contrast = 'low'
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}

function storeDirection () {
	// record selection area direction choice in localStorage
	if (localStorage.pickersStore) {
		if (document.querySelector('body').classList.contains('contrast')) localStorage.pickersContrast = 'high'
		else localStorage.pickersContrast = 'low'
		}
	}




// ACTION ROUTINES

function selectAll () {
	var output = document.getElementById('output')
	output.focus()
	output.select()
	}


function copyToClipboard () {
	// this doesn't work on older versions of Safari because S didn't support execCommand('copy')
	var output = document.getElementById('output')
	var copybuffer = document.getElementById('copybuffer')
	copybuffer.style.display = 'block'
	document.getElementById('output').focus()
	copybuffer.value = getHighlightedText(output)
	copybuffer.focus()
	copybuffer.select()
	document.execCommand('copy')
	output.focus()
	copybuffer.style.display = 'none'
	}
	
function deleteAll () {
	var output = document.getElementById('output')
	output.value = ''
	output.focus()
	}

function del () {
	document.getElementById('output').value = document.getElementById('output').value.slice(0, -1)
	}

function changeSelectionDirection (dir) {
	if (dir === 'rtl') document.getElementById('tables').dir = 'rtl'
	else {document.getElementById('tables').dir = 'ltr'}

	defaults.uidir = dir
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}
	
function showCodepoints () {
	var output = document.getElementById('output')
	showNameDetails(getHighlightedText(output), defaults.language, template.blocklocation, 'c', document.getElementById('panel') )
	document.querySelector('#panel #title').style.fontFamily = output.style.fontFamily
	output.focus()
	}

function openEscapeWindow () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var converter = window.open('../../app-conversion/index.html?q='+	encodeURIComponent(chars), 'converter') 
	output.focus()
	converter.focus()
	}

function openUniViewWindow () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var uniview = window.open('../../uniview/index.html?charlist='+	encodeURIComponent(chars), 'uniview') 
	output.focus()
	uniview.focus()
	}

function openUniViewUniqueWindow () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
    // reduce characters to one of each
    filtered = [...chars]
    const uniqueSet = new Set(filtered)
    const backToArray = [...uniqueSet]
    chars = backToArray.join('')
	var uniview = window.open('../../uniview/index.html?charlist='+	encodeURIComponent(chars), 'uniview') 
	output.focus()
	uniview.focus()
	}

function openAnalyseWindow () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var analyse = window.open('../../app-analysestring/index.html?chars='+	encodeURIComponent(chars), 'analyse') 
	output.focus()
	analyse.focus()
	}

function openListWindow () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var listchar = window.open('../../app-listcharacters/index.html?chars='+	encodeURIComponent(chars), 'listchar') 
	output.focus()
	listchar.focus()
	}

function openUsageWindow () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
    // reduce characters to one of each
    filtered = [...chars]
    const uniqueSet = new Set(filtered)
    const backToArray = [...uniqueSet]
    chars = backToArray.join('')
	var usage = window.open('../../app-charuse/index.html?charlist='+	encodeURIComponent(chars), 'usage') 
	output.focus()
	usage.focus()
	}

function openFontlistWindow (scriptName) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var fontlist = window.open('../../scripts/fontlist/index.html?script='+scriptName+'&text='+	encodeURIComponent(chars), 'fontlist') 
	output.focus()
	fontlist.focus()
	}

function openListbidiWindow (scriptName) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var listbidi = window.open('../../scripts/apps/listbidi/index.html?chars='+	encodeURIComponent(chars), 'listbidi') 
	output.focus()
	listbidi.focus()
	}

function openListcatsWindow (scriptName) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var listcats = window.open('../../scripts/apps/listcategories/index.html?chars='+	encodeURIComponent(chars), 'listcats') 
	output.focus()
	listcats.focus()
	}

function openListlinebreakWindow (scriptName) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var listlines = window.open('../../scripts/apps/listlinebreak/index.html?chars='+	encodeURIComponent(chars), 'listlines') 
	output.focus()
	listlines.focus()
	}

function openListindicWindow (scriptName) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var listindic = window.open('../../scripts/apps/listindic/index.html?chars='+	encodeURIComponent(chars), 'listindic') 
	output.focus()
	listindic.focus()
	}

function openScriptPageWindow () {
    if (template.noteslocation === '') return
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
    chars = [...chars]
	var scriptdesc = window.open('../../scripts/'+template.noteslocation+'.html?showIndex#index'+encodeURIComponent(chars[0]), 'scriptdesc') 
	output.focus()
	scriptdesc.focus()
	}

function openBlockPageWindow () {
    if (template.blocklocation === '') return
	var output = document.getElementById('output')
	var char = getHighlightedText(output).codePointAt(0).toString(16).toUpperCase()
    while (char.length < 4) char = '0'+char
    //var blockLocation = template.blocklocation.replace(/\/scripts\//,'').replace(/\/block/,'')
    var blockLocation = '../../scripts/'+template.blocklocation+'/block.html'
	var blockdesc = window.open(blockLocation+'#char'+char, 'blockdesc') 
	output.focus()
	blockdesc.focus()
	}









function openVocabWindow (filename) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var vocab = window.open('../../scripts/'+filename+'.html?q='+	encodeURIComponent(chars), 'vocab') 
	output.focus()
	vocab.focus()
	}

function doTranscription (type) {
	transcribe(getHighlightedText(_output), type)
	_output.focus()
	}

function makeSharingLink () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = window.location.protocol+'//'+window.location.hostname+window.location.pathname+'?text='+encodeURIComponent(chars)
	output.focus()
	}

function vocab2ExampleOLD (input) {
	// converts a sequence of vocab data, ie. str|ipa|meaning|... to example code
	items=input.split('|')
	console.log(items)
	str=items[0]+'/'+transliterate(items[0])+'/'+items[2]+'/'+items[1]
	console.log(str)
	makeExample(defaults.language,template.direction,str)
	}


function vocab2Example (input) {
	// converts a sequence of vocab data, ie. str|ipa|meaning|... to example code that can be automatically expanded
	items=input.split('|')
	console.log(items)
	var str = '<span class="eg" lang="'+defaults.language+'"'
	if (typeof template.direction !== 'undefined') str += ' dir="'+template.direction+'"'
	str += '>'+items[0]+'</span>'
	
	document.getElementById('transcription').textContent = str
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcriptionWrapper').style.display = 'block'
	document.getElementById('output').focus
	}


function vocab2ExampleXX (input) {
	// converts a sequence of vocab data, ie. str|ipa|latin|meaning|notes to example code
	items=input.split('|')
	console.log(items)
	var native, meaning, ipa, latin, notes
	native = items[0]
	meaning = items[1]
	ipa = items[2]
	if (ipa.includes('(')) {
		ipaSplit = ipa.split('(')
		ipa = ipaSplit[0].trim()
		latin = ipaSplit[1].replace(')','').trim()
		}
	else latin = ''
	str=items[0]+'/'+transliterate(items[0])+'/'+items[2]+'/'+items[1]
	console.log(str)
	makeExample(defaults.language,template.direction,str)
	}

function vocab2Markup (input) {
	// converts a sequence of vocab data, ie. str|ipa|meaning|... to example code that can be inserted directly (normally called from pull down menu)
	items=input.split('|')
	console.log(items)
	var str = '<span class="charExample" translate="no">'
	str += '<bdi class="ex" lang="'+defaults.language+'"'
	if (typeof template.direction !== 'undefined') str += ' dir="'+template.direction+'"'
	str += '>'+items[0]+'</bdi>'
	
	str += ' <bdi class="trans">'+transliterate(items[0])+'</bdi>'
	
	if (items[3]) str += ' (<bdi lang="'+defaults.language+'">'+items[3]+'</bdi>)'
	
	if (items[2]) str += ' <bdi class="ipa">'+items[2]+'</bdi>'
	
	if (items[1]) str += ' <bdi class="meaning">'+items[1]+'</bdi>'
	
	str += '</span>'
	
	document.getElementById('transcription').textContent = str
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcriptionWrapper').style.display = 'block'
	document.getElementById('output').focus
	}



function makeExampleX (lang, dir, str) {
	// str is populated when we're generating from a vocab string
	var output = document.getElementById('output')
	if (str) chars = str
	else var chars = getHighlightedText(output)
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcription').textContent = getExample(chars, lang, dir)
	output.focus()
	}

function makeExample (lang, dir, str) {
	// str is populated when we're generating from a vocab string
	var output = document.getElementById('output')
	if (str) chars = str
	else var chars = getHighlightedText(output)
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcription').textContent = getExample(chars, lang, dir)
	output.focus()
	}




function makeRuby (lang, dir) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var segments = chars.split('/')
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').contentEditable = true
	var out = '<ruby>'
	for (var i=0;i<segments.length-1;i++) {
		out += '<rb>'+segments[i]+'</rb><rt>'+segments[i+1]+'</rt>'
		i++
		}
	out += '</ruby>'
	document.getElementById('transcription').textContent = out.trim()
	output.focus()
	}

function makeCharLink (script, lang, dir) {
	var output = document.getElementById('output')
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcription').textContent = makeCharacterLink(getHighlightedText(output), script, lang, dir)
	}


function getDBInfo (script, lang, dir, showAll) {
	var output = document.getElementById('output')
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').innerHTML = displayDBInfo(getHighlightedText(output), script, lang, dir, showAll)
	document.getElementById('transcription').contentEditable = false
	output.focus()
	}


function switchAutofocus (desiredState) {
	if (desiredState == 'on') {
		document.getElementById('afon').className='on' 
		document.getElementById('afoff').className='off'
		globals.refocus=true
		}
	else {
		document.getElementById('afon').className='off' 
		document.getElementById('afoff').className='on'
		globals.refocus=false;
		}
	document.getElementById( 'output' ).focus()
	}


function toggleAutofocus () {
	var widget = document.getElementById('autofocusState')
	if (widget.textContent === 'Off') {
		widget.textContent = 'On' 
		globals.refocus=true
		}
	else {
		widget.textContent = 'Off'
		globals.refocus=false;
		}
	document.getElementById( 'output' ).focus()
	}




function toggleKbdShift (node) {
	if (node.className =='unshifted') {
		makeKbdUpperCase()
		node.className = 'shifted'
		} 
	else {
		makeKbdLowerCase()
		node.className = 'unshifted'
		}
	}

function setSidebarDefaults (node) {
	menuitems = node.parentNode.querySelectorAll('div'); 
    for (i=0;i<menuitems.length-1;i++) { 
		if (menuitems[i].dataset.locn) {
			document.getElementById(menuitems[i].dataset.locn).style.display = 'none'
			window.kbdEventList = {}
			document.getElementById('output').focus()
			}
		if (globals[menuitems[i].dataset.var]) globals[menuitems[i].dataset.var] = ''
		menuitems[i].textContent = menuitems[i].dataset.shorttitle
		menuitems[i].style.color='white'
        }
	}



// this is probably redundant now
function toggleSideBarOption (node, fullTitle, variable, locn) {
	if (debug) console.log(locn,variable,node.className)
	if (globals[variable]) {
		globals[variable] = false
		//node.style.color='white'
		//if (locn != '') document.getElementById(locn).style.display = 'none'
        document.getElementById('output').focus()
		} 
	else {
		globals[variable] = true
		//node.style.color='orange'
		//if (locn != '' && variable != 'typeAssist') document.getElementById(locn).style.display = 'block'
        document.getElementById('output').focus()
		} 
	return false
	}





function closeSidebarPalettes (node) {
	menuitems = node.parentNode.querySelectorAll('span'); 
    for (i=0;i<menuitems.length;i++) {
        if (menuitems[i].classList.contains('palette')) {
            //menuitems[i].style.color='white'
            //globals[menuitems[i].dataset.var] = false
            menuitems[i].classList.remove('on')
            menuitems[i].classList.add('off')
			window.kbdEventList = {}
            //if (menuitems[i].dataset.locn != '') document.getElementById(menuitems[i].dataset.locn).style.display = 'none'
            }
        }
    document.getElementById('keyboard').style.display='none';
	document.getElementById('output').focus()
	}




function closeSidebarPalettesX (node) {
	menuitems = node.parentNode.querySelectorAll('div'); 
    for (i=0;i<menuitems.length;i++) {
        if (menuitems[i].classList.contains('palette')) {
            //menuitems[i].style.color='white'
            //globals[menuitems[i].dataset.var] = false
            menuitems[i].classList.remove('on')
            menuitems[i].classList.add('off')
			window.kbdEventList = {}
            //if (menuitems[i].dataset.locn != '') document.getElementById(menuitems[i].dataset.locn).style.display = 'none'
            }
        }
    document.getElementById('keyboard').style.display='none';
	document.getElementById('output').focus()
	}






// REGULAR FUNCTIONS

function getSelectionText() {
	// can't get this to work - thought it might be an alternative to getHighlightedText
    var text = "";
    if (window.getSelection) {
		var selObj = window.getSelection()
        text = selObj.toString();
    } else if (window.selection && window.selection.type != "Control") {
        text = window.selection.createRange().text;
    }
    return text;
}

function getHighlightedText (node) {
	// returns the highlighted text, or returns all the text, if no highlight
	var chstring
	
	//older IE support
	if (document.selection) chstring = document.selection.createRange()

	// modern browser support
	else if (node.selectionStart || node.selectionStart == '0') {
		chstring = node.value.substring(node.selectionStart, node.selectionEnd)
		}
	if (chstring == '') { chstring = node.value }
	return chstring
	}


function hasHighlight (node) {
// checks whether some text is highlighted in the node (output)
	if (node.value.substring(node.selectionStart, node.selectionEnd) == '') return false
	else return true
	}


function paste () {
	document.execCommand('paste')
	}


function getExampleX (str, lang, dir) {
	parts = str.split('/')
	var out = '<span class="charExample" translate="no">'
	out += '<span class="ex" lang="'+lang+'"'
	if (dir==='rtl') { out += ' dir="rtl"' }
	out += '>'+parts[0]+'</span> '
	if (parts[1]) {
		out += '<span class="trans">'+parts[1]+'</span> '
		}
	if (parts[2]) {
		if (parts[2].startsWith(':')) out += '(<span class="trans">'+parts[2].substr(1)+'</span>) '
		else out += '<span class="ipa">'+parts[2]+'</span> '
		}
	if (parts[3]) {
		out += '<span class="meaning">'+parts[3]+'</span> '
		}
	return out.trim()+'</span>'
	}




function getExampleXX (str, lang, dir) {
	parts = str.split('/')
	var out = '<span class="charExample" translate="no">'
	out += '<span class="ex" lang="'+lang+'"'
	if (dir==='rtl') { out += ' dir="rtl"' }
	out += '>'+parts[0]+'</span> '
	if (parts[1]) {
		out += '<span class="trans">'+parts[1]+'</span> '
		}
	if (parts[2]) {
		if (parts[2].startsWith(':')) out += '(<span class="trans">'+parts[2].substr(1)+'</span>) '
		else if (parts[2].includes('(')) {
			ipaSplit = parts[2].split('(')
			out += ' (<span class="trans">'+ipaSplit[1].replace(')','').trim()+'</span>) '
			out += '<span class="ipa">'+ipaSplit[0].trim()+'</span> '
			}
		else out += '<span class="ipa">'+parts[2]+'</span> '
		}
	if (parts[3]) {
		out += '<span class="meaning">'+parts[3]+'</span> '
		}
	return out.trim()+'</span>'
	}





function getExample (str, lang, dir) {
    // the new approach uses | as a delimiter, and orders per the termbase
    // native|meaning|IPA¹|transcription|notes|wiktionary²
    if (str.includes('|')) {
        parts = str.split('|')
        var out = '<span class="charExample" translate="no">'
        out += '<span class="ex" lang="'+lang+'"'
        if (dir==='rtl') { out += ' dir="rtl"' }
        out += '>'+parts[0]+'</span> '
        if (parts[2]) {
            if (parts[2].startsWith(':')) out += '(<span class="trans">'+parts[2].substr(1)+'</span>) '
            else if (parts[2].includes('(')) {
                ipaSplit = parts[2].split('(')
                out += ' (<span class="trans">'+ipaSplit[1].replace(')','').trim()+'</span>) '
                out += '<span class="ipa">'+ipaSplit[0].trim()+'</span> '
                }
            else out += '<span class="ipa">'+parts[2]+'</span> '
            }
        if (parts[3]) {
            out += '<span class="transc">'+parts[3]+'</span> '
            }
        if (parts[1]) {
            out += '<span class="meaning">'+parts[1]+'</span> '
            }
        }


    else { // this is the old way of doing it
        parts = str.split('/')
        var out = '<span class="charExample" translate="no">'
        out += '<span class="ex" lang="'+lang+'"'
        if (dir==='rtl') { out += ' dir="rtl"' }
        out += '>'+parts[0]+'</span> '
        if (parts[1]) {
            out += '<span class="trans">'+parts[1]+'</span> '
            }
        if (parts[2]) {
            if (parts[2].startsWith(':')) out += '(<span class="trans">'+parts[2].substr(1)+'</span>) '
            else if (parts[2].includes('(')) {
                ipaSplit = parts[2].split('(')
                out += ' (<span class="trans">'+ipaSplit[1].replace(')','').trim()+'</span>) '
                out += '<span class="ipa">'+ipaSplit[0].trim()+'</span> '
                }
            else out += '<span class="ipa">'+parts[2]+'</span> '
            }
        if (parts[3]) {
            out += '<span class="meaning">'+parts[3]+'</span> '
            }
        }
	return out.trim()+'</span>'
	}





function toggleExtraControls () {
	var divs = document.getElementById('extracontrols').querySelectorAll('.control')
	var toggle = document.getElementById('showMoreControls')
	for (var i=0;i<divs.length;i++) {
		if (divs[i].style.display == 'none') {
			divs[i].style.display = 'block'
			toggle.innerHTML = '<span class="optionTrigger">\u00A0 << hide</span>'
			}
		else {
			divs[i].style.display = 'none'
			toggle.innerHTML = '<span class="optionTrigger">more controls</span>'
			}	
		}
	}


function toggleNotes () {
	var notes = document.getElementById('detailednotes')
	var showNotes = document.getElementById('showNotes')
	if (notes.style.display=='block') {
		notes.style.display='none' 
		showNotes.innerHTML = '<span class="optionTrigger">show notes</span>'
		} 
	else {
		notes.style.display='block'
		showNotes.innerHTML = '<span class="optionTrigger">hide notes</span>'
		} 
	}



function add (ch) { 
	// ch: string, the text to be added
	// _cluster: boolean, global variable, set if this is a consonant cluster (used for vowels that surround base)
	// globals.view: string, indicates which view is showing - this is important, since non-intelligent ordering is needed in the default view

	//if (typeof ch === 'undefined') return
	//console.log(ch)
	
	// remove leading base characters if this is a combining character
	if (ch.length > 1) {
		while (ch.charAt(0) == defaults.ccbase) {
			ch = ch.substr(1)
			}
		ch = ch.replace(/\u25CC/g,'')
		// remove leading zwj (used esp for arabic vowels)
		//ch = ch.replace(/\u200D/g,'').replace(/\u0640/g,'')
        // removed above because it affects other scripts like Sundanese
		}
	if (document.getElementById('output').style.display == 'none') { return; }

    document.getElementById("charChoice").innerHTML = '' // clear any left over selection panel
	
	var outputNode = document.getElementById( 'output' ); // points to the output textarea

	
	//IE support
	if (document.selection) { 
		outputNode.focus();
	    range = document.selection.createRange();
		
		range.text = ch; 
	    range.select(); 
		if (globals.refocus) { outputNode.focus(); }
		}
	// Mozilla and Safari support
	else if (outputNode.selectionStart || outputNode.selectionStart == '0') {
		var startPos = outputNode.selectionStart;
		var endPos = outputNode.selectionEnd;
		var cursorPos = startPos;
		var scrollTop = outputNode.scrollTop;
		var baselength = 0;
		
		outputNode.value = outputNode.value.substring(0, startPos)
              + ch
              + outputNode.value.substring(endPos, outputNode.value.length);
		cursorPos += ch.length;

		if (globals.refocus) { outputNode.focus();  }
		outputNode.selectionStart = cursorPos;
		outputNode.selectionEnd = cursorPos;
		//outputNode.scrollTop = scrollTop;
		if (! globals.refocus) { outputNode.blur();  }
		}
	else {
		outputNode.value += ch;
		if (globals.refocus) { outputNode.focus(); }
		}
		
	// normalize
	//if (globals.n11n=='nfc') { outputNode.value = nfc(outputNode.value);  }
	if (globals.n11n=='nfc') { outputNode.value = outputNode.value.normalize('NFC') }
	//else if (globals.n11n=='nfd') { outputNode.value = nfd(outputNode.value);}
	else if (globals.n11n=='nfd') { outputNode.value = outputNode.value.normalize('NFD') }
	}




function setFallback (first, second) {
	// set the temporary fallback font
	// first is the main font set, second is the fallback
	
	document.getElementById( 'output' ).style.fontFamily = '"'+first+'", "'+second+'"'
	}

	
	
function selectFont ( newFont ) {
	// sets a font-family for text area, and panel title
	if (newFont.match('"') || newFont.match(',')) { alert('Use a single font with no quotes.'); return }
	document.getElementById( 'output' ).style.fontFamily = "'"+newFont+"', 'ExtendedLatinWF'"
	document.querySelector('#panel #title').style.fontFamily ="'"+newFont+"', 'ExtendedLatinWF'"
	document.querySelector('#transcription').style.fontFamily ="'ExtendedLatinWF', '"+newFont+"', 'Gentium Plus', 'Charis Sil', Gentium, serif"
	document.getElementById( 'cursive' ).style.fontFamily = "'"+newFont+"'"
	//document.getElementById('fontName').value="";

	defaults.font = newFont
    console.log("Default font set to ",defaults.font)
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
    document.getElementById('fontList').value = defaults.font
	}

	

function customFont ( newFont ) { 
	if (newFont.match('"') || newFont.match(',')) { alert('Use a single font with no quotes.'); return }
	addFontToLists(newFont, 'fontList,uiFont')
	selectFont(newFont)
	}

function manageUserFonts (flist) {
    // clean the list and create an array
    flist = flist.replace(/[ ]+/g,' ')
    flistArray = flist.split('\n')
    for (let i=0;i<flistArray.length;i++) flistArray[i] = flistArray[i].trim()
    
    removeUserFonts('fontList,uiFont')
    defaults.userfonts = flistArray.join()
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)

    for (let i=0;i<flistArray.length;i++) {
        addFontToLists(flistArray[i], 'fontList,uiFont', false)
        }
    
    console.log(flistArray)

    alert('User fonts updated in selection lists.')
    }


function changeFontSize ( newSize ) {
	document.getElementById( 'output' ).style.fontSize = newSize + 'px';

	defaults.size = newSize
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
    document.getElementById('fontSizeSlider').value = newSize
    document.getElementById('sizeIndicator').textContent = newSize
    document.getElementById('fontSize').value = newSize
	}

function changeBoxHeight ( newSize ) {
	//document.getElementById( 'output' ).style.height = (newSize*100)+'px'
	document.getElementById( 'output' ).style.height = newSize+'px'

	document.getElementById('rows').textContent=defaults.rows
	document.getElementById('boxHeightSlider').value=defaults.rows

	defaults.rows = newSize
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}


function changeLineHeight ( newSize ) {
	document.getElementById( 'output' ).style.lineHeight = newSize

	defaults.lineheight = newSize
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}


function setUIFont (font) {
	chars = document.querySelectorAll('.c,.k1,.k2,.k3,.shapeSelect,#shapelist,#cursive')
	for (i=0;i<chars.length;i++) {
		chars[i].style.fontFamily = '"'+font+'"'
		}
	document.querySelector('#extrashapes').style.fontFamily = '"'+font+'"'
	document.querySelector('#transcriptionChoice').style.fontFamily = "\'ExtendedLatinWF\', \''+font+'\'"
	
	defaults.uifont = font
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}
	
		

function setUIFont (font) {
	document.querySelector('#alphabet').style.fontFamily = '"'+font+'"'
    document.querySelector('#extrashapes').style.fontFamily = '"'+font+'"'
    document.querySelector('#shapelist').style.fontFamily = '"'+font+'"'
	document.querySelector('#transcriptionChoice').style.fontFamily = "'ExtendedLatinWF', '"+font+"'"
    
    document.getElementById('uiFont').value = font
	
	defaults.uifont = font
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}
	
		

function setUIFontSize (size) {
	document.querySelector('#alphabet').style.fontSize = size+'px';
    document.querySelector('#shapelist').style.fontSize = size+'px';
	document.querySelector('#extrashapes').style.fontSize = size+'px';
    
    document.getElementById('uiFontSizeValue').textContent = size
    document.getElementById('uiFontSizeSlider').value = size
		
	defaults.uisize = size
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}
	




function searchFor ( str, scriptname ) { 

	str = str.replace( /\:/g, '\\b' );
	var re = new RegExp(str, "i"); 
	var characters = [] 
	
	borderwidth = '1px';
	characters = document.querySelectorAll( '.c, .f' )
	for (var i = 0; i < characters.length; i++ ) {
			characters[i].style.border = '0';
			titletext = characters[i].title.toLowerCase();
			titletext = titletext.replace(scriptname, '');
			if (titletext.search(re, 0) > -1 ) {
				characters[i].style.border = borderwidth+' solid red';
				}
		}

	return false;
	}
	




function convertCP2Char ( textString ) { 
  var outputString = '';
  textString = textString.replace(/[^a-fA-F0-9]/g, ' ');
  textString = textString.replace(/^\s+/, '');
  textString = textString.replace(/\s+$/, '');
  if (textString.length == 0) { return ""; }
        textString = textString.replace(/\s+/g, ' ');
  var listArray = textString.split(' ');
  for ( var i = 0; i < listArray.length; i++ ) {
    var n = parseInt(listArray[i], 16);
    if (n <= 0xFFFF) {
		outputString += String.fromCharCode(n);
		} 
	else if (n <= 0x10FFFF) {
		n -= 0x10000
		outputString += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
		} 
	else {
		outputString += 'convertCP2Char error: Code point out of range: '+textString;
		}
	}
  return( outputString );
  }
	

function dec2hex ( textString ) {
	return (textString+0).toString(16).toUpperCase();
	}


function convertChar2CP ( textString ) { 
	var haut = 0;
	var n = 0;
	var CPstring = '';
	for (var i = 0; i < textString.length; i++) {
		var b = textString.charCodeAt(i); 
		if (b < 0 || b > 0xFFFF) {
			CPstring += 'Error in convertChar2CP: byte out of range ' + dec2hex(b) + '!';
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				CPstring += dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)) + ' ';
				haut = 0;
				continue;
				}
			else {
				CPstring += 'Error in convertChar2CP: surrogate out of range ' + dec2hex(haut) + '!';
				haut = 0;
				}
			}
		if (0xD800 <= b && b <= 0xDBFF) {
			haut = b;
			}
		else {
			CPstring += dec2hex(b) + ' ';
			}
		}
	return CPstring.substring(0, CPstring.length-1);
	}

	

	
function switchView (toView) {
	// toView: string, id of the div surrounding the content to be viewed
	// globals.view: string, stores the name of the div id so that addchar() can act in a view sensitive way
	
	globals.view = toView;
	
	// hide all views 
	var views = document.getElementById('tables').childNodes;
	for (var i=0; i<views.length; i++) {
		if (views[i].nodeName == 'DIV') { views[i].style.display = 'none'; }
		}
	
	if (toView == 'shape') {
		document.getElementById('alphabet').style.display = 'block'
		document.getElementById('shapelist').style.display = 'block'
		}
	else { document.getElementById(toView).style.display = 'block'; }
	}
	



function findShape (shapelist, extrashapes, show) { 
	// highlights characters that contain a given shape
	// shapelist: string, comma-separated list of ids
	// extrashapes: string, space-separated list of characters to display below 
	//						typically multiples, characters not in chart, or lookups for ethiopic, latin, etc
	// status: boolean, indicates whether to highlight or remove highlighting

	var shapelistarray = shapelist.split(',')
	var extrashapesarray = extrashapes.split(',')

	clearHighlights()

	if (shapelist != '') {
		if (show) {
			for (let i=0;i<shapelistarray.length;i++) { 
                ids = document.querySelectorAll('[data-c=c'+shapelistarray[i]+']')
                for (let x=0;x<ids.length;x++) {
                    ids[x].classList.add('highlightedChar')
                    }
				}
			}
		else {
			for (let i=0;i<shapelistarray.length;i++) {
				document.getElementById(shapelistarray[i]).classList.remove('highlightedChar')
				}
			}
		}
	
	if (extrashapesarray.length > 0 && extrashapesarray[0] != '') {
		document.getElementById('extrashapes').textContent = ''
		for (let i=0;i<extrashapesarray.length;i++) {
            // break the line at •
            if (extrashapesarray[i] === '•') {
                br = document.createElement('br')
 			    document.getElementById('extrashapes').appendChild(br)
                continue
                }
            
            // otherwise create hot spans
			span = document.createElement('span')
			span.className = 'c'
			
			prop = extrashapesarray[i]
			var chars = []
			convertStr2DecArray(prop, chars)
			var codepoint = ''
				for (c=0; c<chars.length; c++) { 
					cp = chars[c].toString(16).toUpperCase()
					while (cp.length < 4) cp = '0'+cp
					cp = 'U+'+cp
					if (c < prop.length-1) cp += ' '
					codepoint += cp
					}
			
			if (charData[prop]) span.title = codepoint+': '+charData[prop]
			else span.title = codepoint
				
			span.onmouseover = event_mouseoverChar
			span.onmouseout = event_mouseoutChar
			span.onclick = event_clickOnChar
			if (charData[extrashapesarray[i]] && charData[extrashapesarray[i]].match('\u200B')) span.textContent  = defaults.ccbase + extrashapesarray[i]
			else span.textContent = extrashapesarray[i]
			document.getElementById('extrashapes').appendChild(span)
			document.getElementById('extrashapes').appendChild(document.createTextNode(' '))
			}
		}
	}







function choose () {
	var replacement = this.textContent
	if (replacement.charAt(0) == '\u00A0') { replacement = replacement.substr(1) }
	//document.createTextNode(replacement)
	replacement = replacement.replace(/∅/,'')
	this.parentNode.innerHTML = replacement
	}

function closeTranscription () {
	document.getElementById('transcriptionWrapper').style.display = 'none'
	document.getElementById('transcription').contentEditable = true
	}



function transcribe (chstring, direction) {
	// node: the output element
	// direction: a string that the local routine will recognise to do the right transcription
	if (chstring=='') { return }

	var transcription

	if (direction === 'revTransliterate') transcription =  reverseTransliterate(chstring)

	else {
		// for security, remove angle brackets
		chstring = chstring.replace(/</g,'\u2800')
		chstring = chstring.replace(/>/g,'\u2801')
		//chstring = chstring.replace(/\[/g,'&#x5B;')
		//chstring = chstring.replace(/\]/g,'&#x5D;')
		chstring = chstring.replace(/\{/g,'\u2802')
		chstring = chstring.replace(/\\/g,'\u2803')
		chstring = chstring.replace(/\|/g,'\u2804')

		transcription = localtranscribe(direction, chstring)
		
		transcription = transcription.replace(/\u2800/g,'&lt;')
		transcription = transcription.replace(/\u2801/g,'&gt;')
		transcription = transcription.replace(/\u2802/g,'{')
		transcription = transcription.replace(/\u2803/g,'\\')
		transcription = transcription.replace(/\u2804/g,'|')
		}

	/* else {
		// for security, remove angle brackets
		chstring = chstring.replace(/</g,'&lt;')
		chstring = chstring.replace(/>/g,'&gt;')
		//chstring = chstring.replace(/\[/g,'&#x5B;')
		//chstring = chstring.replace(/\]/g,'&#x5D;')
		chstring = chstring.replace(/\{/g,'&#x7B;')

		transcription = localtranscribe(direction, chstring)
		} */

	document.getElementById('transcription').innerHTML = transcription
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcriptionWrapper').style.display = 'block' 
	alts = document.querySelectorAll('.altfirst, .altlast, .alt')
	for (i=0;i<alts.length;i++) {
		alts[i].onclick = choose
		}
	return transcription
	}



function clearHighlights () {
	// called when a character is clicked on - removes any highlighting added by shape
	
	nodelist = document.querySelectorAll('.c, .v')
	for (var i=0;i<nodelist.length;i++) {
		//nodelist[i].style.backgroundColor = 'transparent'
		nodelist[i].classList.remove('highlightedChar')
		}
	}
	


function setLanguage (value) {
	// sets the defaults.language value, which is used for generating examples
	
	defaults.language = value
	document.getElementById('output').lang = value
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
    document.getElementById('clang').textContent = value
	}

	

// INITIALISATION

function getTitle (textcontent) {
		if (charData[textcontent]) { 
            var cp = textcontent.codePointAt(0).toString(16).toUpperCase()
            while (cp.length < 4) cp = '0'+cp
			return 'U+'+cp+': '+charData[textcontent]
			}
        else return ''
	}
	

function getTitleX (textcontent) { //console.log(textcontent)
		if (charData[textcontent]) { 
			var codepoint = ''
			for (c=0; c<textcontent.length; c++) { 
				cp = parseInt(textcontent.charCodeAt(c),10)
				cp = cp.toString(16).toUpperCase()
				while (cp.length < 4) cp = '0'+cp
				cp = 'U+'+cp
				if (c < textcontent.length-1) cp += ' '
				codepoint += cp
				}
			return codepoint+': '+charData[textcontent]
			}
	}
	


var keyboardLCGuide = [
"§ 1 2 3 4 5 6 7 8 9 0 - = \u00A0",
"q w e r t y u i o p [ ] \u00A0",
"a s d f g h j k l ; ' \\ \u00A0",
"` z x c v b n m , . / \u00A0"
]

var keyboardUCGuide = [
"± ! @ # $ % ^ & * ( ) _ + \u00A0",
"Q W E R T Y U I O P { } \u00A0",
"A S D F G H J K L : \" | \u00A0",
"~ Z X C V B N M < > ? \u00A0"
]

var keyboardRowOffset = ['0','1.5em','.5em','1.5em']

function event_toggleKbdShiftOLD () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboarddef, keyboardUCGuide)
    }

function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else {
        if (typeof keyboardUC === 'undefined') makeKeyboard(keyboarddef, keyboardUCGuide)
        else makeKeyboard(keyboardUC, keyboardUCGuide)
        }
    }

function makeKeyboard (chosenKbd, guideArray) { 

	if (typeof keyboarddef === 'undefined' || document.getElementById('keyboard') == null) 
		{ return }
		
	var theKeyboard = document.getElementById('keyboard')
	theKeyboard.innerHTML = ''
	
	for (kr=0;kr<chosenKbd.length;kr++) {
		keyrownode = document.createElement('div')
		keyrownode.className = 'keyboardrow'
		keyrownode.style.paddingLeft = keyboardRowOffset[kr]
			
		var keyrow = chosenKbd[kr].split('|')
		var guiderow = guideArray[kr].split(' ')

       // add tab key
       if (kr===2) {
          div = document.createElement('div')
          div.className = 'key'
          div.onclick = function () { add('\t') }
          div.style.color = 'orange'
          div.style.cursor = 'pointer'
          div.appendChild(document.createTextNode('⇥'))
          keyrownode.appendChild(div)
          }

        for (key=0;key<keyrow.length;key++) {
            var guidekey = normalkey = shiftkey = thirdkey = ''
			chars = keyrow[key].split(' ')
			guide = guiderow[key].split(' ')
			keynode = document.createElement('div')
			keynode.className = 'key'
			            			
            guidekey = document.createElement('span')
            guidekey.className = 'gkey'
            guidekey.onmouseover = event_mouseoverChar
            guidekey.onmouseout = event_mouseoutChar
            guidekey.onclick = event_clickOnSpanChar
            guidekey.appendChild(document.createTextNode(guide[0]))

            if (chars[1]) {
                normalkey = document.createElement('span')
                normalkey.className = 'nkey'
                normalkey.onmouseover = event_mouseoverChar
                normalkey.onmouseout = event_mouseoutChar
                normalkey.onclick = event_clickOnSpanChar
                normalkey.title = getTitle(chars[1])
                normalkey.appendChild(document.createTextNode(chars[1]))
                }
             else {
                normalkey = document.createElement('span')
                normalkey.className = 'nkey blank'
                normalkey.style.cursor = 'pointer'
                normalkey.appendChild(document.createTextNode('\u00A0'))
                }

            if (chars[2]) {
                shiftkey = document.createElement('span')
                shiftkey.className = 'skey'
                shiftkey.onmouseover = event_mouseoverChar
                shiftkey.onmouseout = event_mouseoutChar
                shiftkey.onclick = event_clickOnSpanChar
                shiftkey.title = getTitle(chars[2])
                shiftkey.appendChild(document.createTextNode(chars[2]))
                }
             else {
                shiftkey = document.createElement('span')
                shiftkey.className = 'skey blank'
                normalkey.style.cursor = 'pointer'
                shiftkey.appendChild(document.createTextNode('\u00A0'))
                }
           
            if (chars[3]) {
                thirdkey = document.createElement('span')
                thirdkey.className = 'okey'
                thirdkey.onmouseover = event_mouseoverChar
                thirdkey.onmouseout = event_mouseoutChar
                thirdkey.onclick = event_clickOnSpanChar
                thirdkey.title = getTitle(chars[3])
                thirdkey.appendChild(document.createTextNode(chars[3]))
                }
            else {
                thirdkey = document.createElement('span')
                thirdkey.className = 'okey blank'
                normalkey.style.cursor = 'pointer'
                thirdkey.appendChild(document.createTextNode('\u00A0'))
                }

            // order of chars in array is guide,lc,uc,other
            // reorder to uc,lc,guide,other
            keynode.appendChild(guidekey)
            keynode.appendChild(thirdkey)
            keynode.appendChild(shiftkey) 
            keynode.appendChild(normalkey)

			keyrownode.appendChild(keynode)
			}
            
       // add return key
       if (kr===1) {
          div = document.createElement('div')
          div.className = 'key'
          div.onclick = function () { add('\n') }
          div.style.color = 'orange'
          div.style.cursor = 'pointer'
          div.appendChild(document.createTextNode('⏎'))
          keyrownode.appendChild(div)
          }
            
       // add shift key
       if (kr===3) {
          div = document.createElement('div')
          if (guideArray[0][0] === '§') div.className = 'key shiftKeyOff'
          else div.className = 'key shiftKeyOn'
          div.onclick = event_toggleKbdShift
          div.appendChild(document.createTextNode('Shift'))
          keyrownode.appendChild(div)
          }
		theKeyboard.appendChild(keyrownode)
		}
	// add base for combining characters
	node = theKeyboard.querySelectorAll( '.skey, .nkey, .okey' ); 
	for (var n = 0; n < node.length; n++ ) { 
		prop = node[n].textContent
		if (charData[prop] && charData[prop].match('\u200B')) { 
			node[n].textContent = defaults.ccbase+node[n].textContent
			}
		}
	}
	

function makeKbdUpperCase () {
	var theKeyboard = document.getElementById('keyboard')
	node = theKeyboard.querySelectorAll( '.k1, .k2, .k3' ); 
	for (var n = 0; n < node.length; n++ ) { 
		node[n].textContent = node[n].textContent.toUpperCase()
		}
	}
	
function makeKbdLowerCase () {
	var theKeyboard = document.getElementById('keyboard')
	node = theKeyboard.querySelectorAll( '.k1, .k2, .k3' ); 
	for (var n = 0; n < node.length; n++ ) { 
		node[n].textContent = node[n].textContent.toLowerCase()
		}
	}
	
function unshiftAll (kbdList) {
	// puts keyboard buttons into off state
	// kbdList: space separated list of keyboard buttons
	var kbds = kbdList.split(' ')
	//for (var i=0;i<kbds.length;i++) document.getElementById(kbds[i]).className = 'unshifted'
	for (var i=0;i<kbds.length;i++) document.getElementById(kbds[i]).classList.remove('shifted')
	}



function event_mouseoverChar ()  {
    var parameter
	// display character information
	var out = '<span id="charname">'+this.title
	/*var content = this.textContent.replace(defaults.ccbase,'')
	if (window.spreadsheetRows[content]) {
		if (window.spreadsheetRows[content][cols.transLoc]) out += '<span class="hint">ᵗ</span>' + window.spreadsheetRows[content][cols.transLoc]
		if (window.spreadsheetRows[content][cols.key]) out += '<span class="hint">ᵏ</span>' + window.spreadsheetRows[content][cols.key]
		if (window.spreadsheetRows[content][cols.ipaLoc]) out += '<span class="hint">ᵖ</span>' + window.spreadsheetRows[content][cols.ipaLoc]
		}*/
	var out = '<span id="charname">'
	var content = this.textContent.replace(defaults.ccbase,'')
    out += '<span class="ssheetDetails">'
	if (window.spreadsheetRows[content]) {
		if (window.spreadsheetRows[content][cols.ipaLoc]) out += '<bdi class="ipa">' + window.spreadsheetRows[content][cols.ipaLoc].toLowerCase() + '</bdi>'
		if (window.spreadsheetRows[content][cols.transcription]) out += '<bdi class="transc">' + window.spreadsheetRows[content][cols.transcription].toLowerCase() + '</bdi>'
		if (window.spreadsheetRows[content][cols.key]) out += '<bdi>⌨ ' + window.spreadsheetRows[content][cols.key] + '</bdi>'
		}
    out += '</span>'
	out += this.title + '</span>'
	document.getElementById('chardata').innerHTML = out
    
	
	
	// add cursive forms to table
	if (template.cursive) {
		document.getElementById('cursive').innerHTML = ''
		var char = this.textContent
		if (spreadsheetRows[char] && spreadsheetRows[char][cols.shape]) {
			document.getElementById('cursive').innerHTML = spreadsheetRows[char][cols.shape].replace(/ /g,'&nbsp;&nbsp;').replace(/ـ/g,'\u200D')
			}
		}

	// highlight similar characters
	if (this.dataset.c) {
		ptr = this.dataset.c.replace('c','')
		if (globals.showShapeHints && _h[ptr]) {
			clearHighlights()
			for (let i=0;i<_h[ptr].length;i++) { 
				ids = document.querySelectorAll('[data-c=c'+_h[ptr][i]+']')
				for (let x=0;x<ids.length;x++) {
					ids[x].classList.add('highlightedChar')
					}
				}
			}
		}
	}

function event_mouseoutChar ()  {
	// unhighlight this character
	//this.style.backgroundColor = 'transparent'
	if (this.classList.contains('gkey')) this.style.color = 'orange'
	else if (this.classList.contains('sj')) this.style.color = 'chocolate'
    //else this.style.color = '#666'
	
	// unhighlight similar characters
	//clearHighlights()
	
	// unhighlight similar characters
	/*if (_h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			if(document.getElementById(_h[ptr][i]) === null) console.log('Couldn\'t find _h[',_h[ptr][i],']')
			//else document.getElementById(_h[ptr][i]).style.backgroundColor = 'transparent'
			else document.getElementById(_h[ptr][i]).classList.remove('highlightedChar')
			}
		}*/
	}

function event_clickOnChar () {
	clearHighlights()
	add(this.textContent)
	}
function event_clickOnTranscriptionChar () {
	str = this.textContent.replace(/\u00A0/g, '')
	add(str);
	}
function event_clickOnSpanChar () {
	add(this.firstChild.nodeValue);
	}
	
function titleSort (a, b) {
	return parseInt(a.title, 16)-parseInt(b.title, 16);
	}


function getWelcome (dir) {
	// creates the welcome message for new users
	// rtl indicates whether or not to include UI direction msg
	var out = "<p>You can change the contrast and font size for this app by clicking on <img src='../shared27/images/access.png' alt='Accessibility Settings' style='vertical-align:bottom; height:26px;'> in the top right corner of the page.<br/>"
	if (dir === 'rtl') out += "The selection area for this picker is ordered RTL by default, but can be set to LTR at <samp>more controls/table direction</samp>.<br/>"
	out += "Find characters by shape, transliteration, or by selecting from the panel. Explore and transform text using the controls above the large box. Use the controls at the bottom of the page to change other settings, and <samp>more controls/reset</samp> to return to the default setup. Familiarise yourself with <a href='help/'>the help page</a> before use.<br/>Click one of the following buttons to remove this message. Click <samp>Ok to store</samp> if you want this and other pickers to remember your settings between sessions. Settings are stored locally on the computer/device you are using.<br/><button onClick='savePreferences(this)'>Ok to store</button> <button onClick='dontStore(this)'>Don't store</button></p>"
	return out
	}


function resetDefaults () {
	defaults = factoryDefaults
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(factoryDefaults)
	
	setUIFont(factoryDefaults.uifont)
	setUIFontSize(factoryDefaults.uisize)
	selectCCBase(factoryDefaults.ccbase)
	selectFont(factoryDefaults.font)
	changeFontSize(factoryDefaults.size)
	changeBoxHeight(factoryDefaults.rows)
	changeLineHeight(factoryDefaults.lineheight)
	defaults.language = factoryDefaults.language
	changeSelectionDirection(factoryDefaults.uidir)
	if (template.hints) setGridHints(defaults.hints)
	}










function setGridHints (type) {
	// switch the hints alongside characters between key indicators, transliterations & IPA
	document.getElementById('keyHintType').style.color = 'white'
	document.getElementById('translitHintType').style.color = 'white'
	document.getElementById('ipaHintType').style.color = 'white'
	if (type !== 'none') document.getElementById(type+'HintType').style.color = 'brown'

	defaults.hints = type
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)

	var lastNode = null
	var nodes = document.querySelectorAll( '.g' )
	var charNode, hintNode, strToLookUp, keyContent

	if (type === 'key') {
		globals.keyHints = 'key'
		for (let n=0; n<nodes.length; n++ ) {
			charNode = nodes[n].querySelector('.c, .v')
			hintNode = nodes[n].querySelector('.hint')
            strToLookUp = charNode.textContent
            if (defaults.ccbase && strToLookUp.startsWith(defaults.ccbase)) strToLookUp = strToLookUp.substr(1)
			strToLookUp = strToLookUp.replace(/\u200D/g,'').replace(/\u0640/g,'')
			hintNode.textContent = ''
			if (window.spreadsheetRows[strToLookUp] && window.spreadsheetRows[strToLookUp][cols.key]) {
				keyContent = window.spreadsheetRows[strToLookUp][cols.key] ? window.spreadsheetRows[strToLookUp][cols.key].replace(/¶/,'\u0331') : ''
				hintNode.textContent = keyContent
				}
			}
		}

	else if (type === 'ipa') {
		globals.keyHints = 'ipa'
		for (let n=0; n<nodes.length; n++ ) {
			charNode = nodes[n].querySelector('.c, .v')
			hintNode = nodes[n].querySelector('.hint')
            strToLookUp = charNode.textContent
            if (defaults.ccbase && strToLookUp.startsWith(defaults.ccbase)) strToLookUp = strToLookUp.substr(1)
			strToLookUp = strToLookUp.replace(/\u200D/g,'').replace(/\u0640/g,'')
			hintNode.textContent = ''
			if (window.spreadsheetRows[strToLookUp] && window.spreadsheetRows[strToLookUp][cols.ipaLoc]) {
				keyContent = window.spreadsheetRows[strToLookUp][cols.ipaLoc] ? window.spreadsheetRows[strToLookUp][cols.ipaLoc].toLowerCase() : ''
				hintNode.textContent = keyContent
				}
			}
		}

    else if (type === 'translit') {
		globals.keyHints = 'translit'
		for (let n=0; n<nodes.length; n++ ) { 
			charNode = nodes[n].querySelector('.c, .v')
			hintNode = nodes[n].querySelector('.hint')
            strToLookUp = charNode.textContent
            if (defaults.ccbase && strToLookUp.startsWith(defaults.ccbase)) strToLookUp = strToLookUp.substr(1)
			strToLookUp = strToLookUp.replace(/\u200D/g,'').replace(/\u0640/g,'')
			hintNode.textContent = ''
			if (window.spreadsheetRows[strToLookUp] && window.spreadsheetRows[strToLookUp][cols.transLoc]) {
				keyContent = window.spreadsheetRows[strToLookUp][cols.transLoc] ? window.spreadsheetRows[strToLookUp][cols.transLoc] : ''
				hintNode.textContent = keyContent
				}
			}
		}

	else {
		for (let n = 0; n < nodes.length; n++ ) { 
			hintNode = nodes[n].querySelector('.hint')
			if (hintNode) hintNode.textContent = ''
			}
		globals.keyHints = 'none'
		}
	}












function setGridHintsX (type) {
	// switch the hints alongside characters between key indicators and transliterations
	document.getElementById('keyHintType').style.color = 'white'
	document.getElementById('translitHintType').style.color = 'white'
	document.getElementById('ipaHintType').style.color = 'white'
	if (type !== 'none') document.getElementById(type+'HintType').style.color = 'brown'

	defaults.hints = type
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)

	var lastNode = null
	var nodes = document.querySelectorAll( '.g' )
	var charNode, hintNode, content, keyContent

	if (type === 'key') {
		globals.keyHints = 'key'
		for (let n=0; n<nodes.length; n++ ) {
			charNode = nodes[n].querySelector('.c, .v')
			hintNode = nodes[n].querySelector('.hint')
			content = //charNode.textContent.replace(factoryDefaults.ccbase,'').replace(/-/g,'').replace(/\u200D/g,'').replace(/\u0640/g,'')
			content = charNode.textContent.replace(factoryDefaults.ccbase,'').replace(/\u200D/g,'').replace(/\u0640/g,'')
			hintNode.textContent = ''
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.key]) {
				keyContent = window.spreadsheetRows[content][cols.key] ? window.spreadsheetRows[content][cols.key].replace(/¶/,'\u0331') : ''
				hintNode.textContent = keyContent
				}
			}
		}

	else if (type === 'ipa') {
		globals.keyHints = 'ipa'
		for (let n=0; n<nodes.length; n++ ) {
			charNode = nodes[n].querySelector('.c, .v')
			hintNode = nodes[n].querySelector('.hint')
            if (charNode.textContent.startsWith(factoryDefaults.ccbase)) charNode.textContent = charNode.textContent.substr(1)
			content = charNode.textContent.replace(/\u200D/g,'').replace(/\u0640/g,'')
			hintNode.textContent = ''
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.ipaLoc]) {
				keyContent = window.spreadsheetRows[content][cols.ipaLoc] ? window.spreadsheetRows[content][cols.ipaLoc].toLowerCase() : ''
				hintNode.textContent = keyContent
				}
			}
		}
/*
	else if (type === 'ipa') {
		globals.keyHints = 'ipa'
		for (let n=0; n<nodes.length; n++ ) {
			charNode = nodes[n].querySelector('.c, .v')
			hintNode = nodes[n].querySelector('.hint')
			//content = charNode.textContent.replace(factoryDefaults.ccbase,'').replace(/-/g,'').replace(/\u200D/g,'').replace(/\u0640/g,'')
			content = charNode.textContent.replace(factoryDefaults.ccbase,'').replace(/\u200D/g,'').replace(/\u0640/g,'')
			hintNode.textContent = ''
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.ipaLoc]) {
				keyContent = window.spreadsheetRows[content][cols.ipaLoc] ? window.spreadsheetRows[content][cols.ipaLoc].toLowerCase() : ''
				hintNode.textContent = keyContent
				}
			}
		}
*/
	else if (type === 'translit') {
		globals.keyHints = 'translit'
		for (let n=0; n<nodes.length; n++ ) { 
			charNode = nodes[n].querySelector('.c, .v')
			//console.log(charNode.textContent, charNode.parentNode.querySelector('.hint').textContent)
			hintNode = nodes[n].querySelector('.hint')
			content = //charNode.textContent.replace(factoryDefaults.ccbase,'').replace(/-/g,'').replace(/\u200D/g,'').replace(/\u0640/g,'')
			content = charNode.textContent.replace(factoryDefaults.ccbase,'').replace(/\u200D/g,'').replace(/\u0640/g,'')
			hintNode.textContent = ''
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.transLoc]) {
				keyContent = window.spreadsheetRows[content][cols.transLoc] ? window.spreadsheetRows[content][cols.transLoc] : ''
				hintNode.textContent = keyContent
				}
			}
		}

	else {
		for (let n = 0; n < nodes.length; n++ ) { 
			hintNode = nodes[n].querySelector('.hint')
			if (hintNode) hintNode.textContent = ''
			}
		globals.keyHints = 'none'
		}
	}



function toggleGridHints () {
	// switch the hints alongside characters between key indicators and transliterations
	
	var lastNode = null
	var nodes = document.querySelectorAll( '.c, .v' )
	
	if (globals.keyHints === 'key') {
		for (let n = 0; n < nodes.length; n++ ) { 
			var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'')
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.transLoc] && nodes[n].parentNode.className === 'g') {
				//if (nodes[n].parentNode !== lastNode) {
					
					// change twice so that items without ipa show translit
					var keyContent = window.spreadsheetRows[content][cols.transLoc] ? window.spreadsheetRows[content][cols.transLoc] : ''
					if (window.spreadsheetRows[content][cols.ipaLoc]) keyContent = window.spreadsheetRows[content][cols.ipaLoc]
					
					
					nodes[n].parentNode.firstChild.textContent = keyContent
					//console.log(n,'Spreadsheet row',window.spreadsheetRows[content], 'content',content, 'transloc',window.spreadsheetRows[content][cols.transLoc], 'keyContent', keyContent, 'firstchild', nodes[n].parentNode.firstChild.textContent)
					//lastNode = nodes[n].parentNode
					//}
				}
			}
		globals.keyHints = 'translit'
		}

	else {
		for (let n = 0; n < nodes.length; n++ ) { 
			var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'')
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.key] && nodes[n].parentNode.className === 'g') {
				//if (nodes[n].parentNode !== lastNode) {
					var keyContent = window.spreadsheetRows[content][cols.key] ? window.spreadsheetRows[content][cols.key].replace(/¶/,'\u0331') : ''
					nodes[n].parentNode.firstChild.textContent = keyContent
					//console.log(n,'Spreadsheet row',window.spreadsheetRows[content], 'content',content, 'transloc',window.spreadsheetRows[content][cols.transLoc], 'keyContent', keyContent, 'firstchild', nodes[n].parentNode.firstChild.textContent)
					//lastNode = nodes[n].parentNode
					//}
				}
			}
		globals.keyHints = 'key'
		}
	}






function initialise() { 

	// stop IE changing the focus when clicking on an img
	//if (document.all && document.getElementById('alphabet')) {  
	//	document.getElementById('alphabet').onselectstart = function () { return false };
	//	}
	
	
	// show cookie message if no storage
	var dir = 'ltr'
	if (document.getElementById('tables') && document.getElementById('tables').dir === 'rtl') dir = 'rtl'
	if (! localStorage.pickersStore && document.getElementById('welcome')) document.getElementById('welcome').innerHTML = getWelcome(dir)
	
	
	var lastNode = null
	
	// set up the grid hint controls
	if (template.hints === true && typeof defaults.hints === 'undefined') defaults.hints = factoryDefaults.hints
	if (template.hints === true && defaults.hints) setGridHints(defaults.hints)
	//else if (! defaults.hints == '') setGridHints('key')


	// set ids to codepoint values of character sequence (with no leading zeros)
	node = document.querySelectorAll( '.c, .v' )
	var notInSpreadsheet = ''
	for (var n = 0; n < node.length; n++ ) { 
		//content = node[n].textContent.replace(/\u200D/g,'').replace(/\u0640/g,'')
		content = node[n].textContent.replace(/\u0640/g,'')
		codepoints = [... node[n].textContent]
		
		// set id and dataset.c
		id=''
		for (i=0;i<codepoints.length;i++) {
			id += convertChar2CP(codepoints[i])
			}
		//node[n].id = id
        node[n].dataset.c = 'c'+id

		// set hints
		/*if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.transLoc] && node[n].parentNode.className === 'g') {
			if (node[n].parentNode !== lastNode) {
				//node[n].parentNode.firstChild.textContent = window.spreadsheetRows[content][cols.transLoc]
				//console.log('keys',node[n].textContent, window.spreadsheetRows[content][cols.key])
				var keyContent = window.spreadsheetRows[content][cols.key] ? window.spreadsheetRows[content][cols.key].replace(/¶/,'\u0331') : ''
				node[n].parentNode.firstChild.textContent = keyContent
				lastNode = node[n].parentNode
				}
			}*/
		//if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.transLoc]) console.log(window.spreadsheetRows[content][cols.transLoc])

		// set type-assist highlight to on
		if (document.getElementById('showRevTransSwitch')) {
            document.getElementById('showRevTransSwitch').classList.add('on')
            document.getElementById('showRevTransSwitch').classList.remove('off')
            }
		
		// set title
		if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.ucsName]) node[n].title = window.spreadsheetRows[content][cols.ucsName]
		else if (content !== '') {
			hex = content.codePointAt(0).toString(16).toUpperCase()
			while (hex.length < 4) hex = '0'+hex
			node[n].title = 'U+'+hex+': '+charData[content]
			notInSpreadsheet += content + '  '
			}
		
		// set mouseover/out
		node[n].onmouseover = event_mouseoverChar
		node[n].onmouseout = event_mouseoutChar
		
		// set onclicks
		if(! node[n].classList.contains(/noOnclick/) && ! node[n].classList.contains('v')) { 
			node[n].onclick = event_clickOnChar
			}

		// add defaults.ccbase to combining characters
		//if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.ucsName] && window.spreadsheetRows[content][cols.ucsName].includes('\u200B')) node[n].textContent = defaults.ccbase+node[n].textContent
		// FIX the above - doesn't seem that ucsName contains zws

		if (window.spreadsheetRows[content[0]] && window.spreadsheetRows[content[0]][cols.class] && window.spreadsheetRows[content[0]][cols.class].startsWith('M')) {
            node[n].textContent = defaults.ccbase+node[n].textContent
            document.getElementById('ccBase').value = defaults.ccbase
            }
		}
	console.log('Not in spreadsheet: ',notInSpreadsheet)


		
	// set onclicks for transcription characters	
	if (document.getElementById('phonemelist')) {
		var transcriptnodes = document.getElementById('phonemelist').querySelectorAll('span.p'); 
		for (var n = 0; n < transcriptnodes.length; n++ ) {
			transcriptnodes[n].onclick = event_clickOnTranscriptionChar; 
			} 
		}
	

	if (typeof keyboarddef !== 'undefined' && document.getElementById('keyboard') != null) 
		makeKeyboard(keyboarddef, keyboardLCGuide)
	}



function setUpValues () {
//window.onload = function() { 
	parseSpreadsheet()
	initialise(); 
	localInitialise()
	//makeTranslitCharacterMap()
    makeTypeAssistMap(cols.key)
	makeLatinTypeAssistMap()
	makeAutoTranslitArray()
	if (defaults.userfonts) {
        var flistArray = defaults.userfonts.split(',')
        for (let i=0;i<flistArray.length;i++) {
            addFontToLists(flistArray[i], 'fontList,uiFont', false)
            document.getElementById('fontManagementList').value += flistArray[i]+'\n'
            }
		}
    else (defaults.userfonts = '')
    if (defaults.font) { 
        var fonts = document.getElementById('fontList').querySelectorAll('option')
        var found = false
        for (let i=0;i<fonts.length;i++) if (fonts[i].value === defaults.font) { found = true }
        if (! found) addFontToLists(defaults.font, 'fontList,uiFont')
        selectFont( defaults.font )
		}
	if (defaults.size) { 
		document.getElementById( 'fontSize' ).value = defaults.size;  
		document.getElementById( 'output' ).style.fontSize = defaults.size+'px';
		}
	if (defaults.uifont) { 
		//document.getElementById( 'uiFont' ).value = defaults.uifont;  
		setUIFont(defaults.uifont);
		}
	if (defaults.uisize) { 
		//document.getElementById( 'uiFontSize' ).value = defaults.uisize;  
		setUIFontSize(defaults.uisize);
		}
	if (defaults.lineheight) { 
		document.getElementById( 'lineHeight' ).value = defaults.lineheight;  
		document.getElementById( 'output' ).style.lineHeight = defaults.lineheight;
		}
	if (defaults.lineHeight) { 
		document.getElementById( 'lineHeight' ).value = defaults.lineHeight;  
		document.getElementById( 'output' ).style.lineHeight = defaults.lineHeight;
		}
	if (defaults.rows) {
		// add a check for pre v26 settings
		if (defaults.rows < 10) defaults.rows = factoryDefaults.rows
		document.getElementById( 'rows' ).value = defaults.rows; 
		//document.getElementById( 'output' ).style.height = (defaults.rows*100)+'px';
		document.getElementById( 'output' ).style.height = defaults.rows+'px';
		}
	if (defaults.language) { 
		document.getElementById('langtag').value = defaults.language
		document.getElementById('clang').textContent = defaults.language
		}
	if (defaults.contrast) { 
		if (defaults.contrast === 'high') document.querySelector('body').classList.add('contrast')
		else if (defaults.contrast === 'dark') document.querySelector('body').classList.add('dark')
		}
	if (defaults.uidir && document.getElementById('tables')) { 
		if (defaults.uidir === 'rtl') document.getElementById('tables').dir = 'rtl'
		else document.getElementById('tables').dir = 'ltr'
		}
	if (defaults.view) { switchView(defaults.view); }

	// create an element to serve as a buffer from which to copy selections to the clipboard
	// assumes existence of element with id tables
	buffer = document.createElement('textarea')
	buffer.id = 'copybuffer'
	buffer.style.display = 'none'
	buffer.style.position = 'absolute'
	buffer.textContent = ''
	document.getElementById('tables').appendChild(buffer)
	

	_output = document.getElementById('output')

	// check for parameters and take appropriate action
	parameters = location.search.split('&');
	parameters[0] = parameters[0].substring(1);
	for (var p=0;p<parameters.length;p++) {  
		pairs = parameters[p].split('=');
		if (pairs[0] === 'text') { 
			if (pairs[1]) document.getElementById('output').value = decodeURIComponent(pairs[1])
			}
		if (pairs[0] === 'showFonts') { 
			document.getElementById('fontPicker').innerHTML = createFontPicker()
			}
		}
		
	// activate type assist/ime input
	if (document.getElementById('showRevTransSwitch')) {
		makePalette(typeAssistMap)
		makeKbdEventList(typeAssistMap)
		}

    // make a set of combining marks for use in the panel
    setMarks()

    document.getElementById('output').focus()
	}



function closeTranscriptionChoice () {
	document.getElementById('transcriptionChoice').style.display = 'none'
	}
	
function moveTranscription () {
	add(document.getElementById('transcription').textContent)
	}
	
function copyTranscription () {
	var output = document.getElementById('transcription')
	//output.contentEditable = true
	output.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
	//output.contentEditable = false
	}



function dotrans (altlist) { 
	var inserts = altlist.split(',')
	if (inserts.length == 1 && inserts == '--') add('-')
	else if (inserts.length == 1 && inserts != '-') add(altlist)
	else {
		var insert = ''
		for (i=0;i<inserts.length;i++) {
			if (inserts[i] == '+' || inserts[i] == '-') insert += '<bdi style="color:red">'+inserts[i]+'</bdi>'
			else { 
				//if (charData[inserts[i][0]].m) { inserts[i] = defaults.ccbase+inserts[i] }
				// check for full thing (for supp chars)
				if (charData[inserts[i]] && charData[inserts[i]].match('\u200B')) inserts[i] = defaults.ccbase+inserts[i]
				insert += "<bdi class=c onclick='add(\""+inserts[i]+"\"); closeTranscriptionChoice();'>"+inserts[i]+"</bdi> "
				}
			}
		insert += "<bdi style='font-size: 28px;color: #ccc;cursor:pointer;' onclick='closeTranscriptionChoice()'>X</bdi>"
		document.getElementById('transcriptionChoice').innerHTML = insert
		document.getElementById('transcriptionChoice').style.display = 'block'
		
		}
	}



function showtrans (altlist) { 
    document.getElementById('transcriptionChoice').innerHTML = altlist
    document.getElementById('transcriptionChoice').style.display = 'block'
	}

function hidetrans () {
    document.getElementById('transcriptionChoice').style.display = 'none'
    }



function selectCCBase (base) {
	if (base === '0') return
	//console.log(base)
	
	// add defaults.ccbase to combining characters
	nodes = document.querySelectorAll( '.c' )
	for (var n = 0; n < nodes.length; n++ ) { 
		// remove leading base characters if this is a combining character
		if (nodes[n].textContent.length > 1 && defaults.ccbase != '') {
			while (nodes[n].textContent.charAt(0) === defaults.ccbase) {
				nodes[n].textContent = nodes[n].textContent.substr(1)
				}
			}
		// look for M... in spreadsheet class (which indicates cchar)
		// if found, add base before other content
        if (spreadsheetRows[nodes[n].textContent] && spreadsheetRows[nodes[n].textContent][cols.class].startsWith('M')) nodes[n].textContent = base + nodes[n].textContent
		}
	defaults.ccbase = base
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}





function selectCCBaseX (base) {
	if (base === '0') return
	//console.log(base)
	
	// add defaults.ccbase to combining characters
	nodes = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < nodes.length; n++ ) { 
		// remove leading base characters if this is a combining character
		if (nodes[n].textContent.length > 1 && defaults.ccbase != '') {
			while (nodes[n].textContent.charAt(0) === defaults.ccbase) {
				nodes[n].textContent = nodes[n].textContent.substr(1)
				}
			}
		// look for ZWSP in charData name (which indicates cchar)
		// if found, add base before other content
		//console.log(n,nodes[n].textContent,charData[nodes[n].textContent])
		if (charData[nodes[n].textContent].match('\u200B') && base != '') nodes[n].textContent = base + nodes[n].textContent
		}
	defaults.ccbase = base
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}





function makeCharacterLinkX (cp, block, lang, direction) { 
	// returns markup with information about cp
	// only wraps in a link if not on r12a.github.io
	// cp: a unicode character, or sequence of unicode characters
	// block: default directory for scripts block file
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
	//var chars = cp.split('')
	var chars = []
	convertStr2DecArray(cp, chars)
	

	var out = '<span class="codepoint" translate="no">'
	var charstr = ''
	for (let i=0;i<chars.length;i++) {
        if (i>0) out += ' + '
		charstr = String.fromCodePoint(chars[i])
		var mark = false
		var cbase = ''
		var dir = ''
		
		if (charData[charstr]) {
			var hex = chars[i].toString(16).toUpperCase()
			while (hex.length < 4) hex = '0'+hex 
			
			if (charData[charstr].match('\u200B')) mark = true
			if (mark && defaults.ccbase != '') cbase = '&#x'+convertChar2CP(defaults.ccbase)+';'
			if (direction === 'rtl') dir = ' dir="rtl"'
			}
		else return 'Character not found in database.'
		out += '<span lang="'+lang+'"'+dir+'>'+cbase+'&#x'+hex+';</span> '
        }
	
	for (let i=0;i<chars.length;i++) {
        if (i===0) out += '['
        if (i>0 && i<chars.length) out += ' + '
        
		charstr = String.fromCodePoint(chars[i])
        var hex = chars[i].toString(16).toUpperCase()
		while (hex.length < 4) hex = '0'+hex 
		var name = charData[charstr]


		if (! window.location.href.match('r12a.github.io')) {
			var char = String.fromCodePoint(chars[i])
			if (spreadsheetRows[char] && spreadsheetRows[char][cols.block]) block = '/scripts/'+spreadsheetRows[char][cols.block]+'/block'
			console.log(spreadsheetRows)
			out +=  '<a href="'+block+'#char'+hex+'">'
			}
		out +=  '<span class="uname">U+'+hex+' '+name+'</span>'
		if (! window.location.href.match('r12a.github.io')) out +=  '</a>'
		if (i===chars.length-1) out += ']'
		}
    out += '</span> '
	
	return out.trim()
	}





function makeCharacterLinkXX (cp, block, lang, direction) { 
	// returns markup with information about cp
	// only wraps in a link if not on r12a.github.io
	// cp: a unicode character, or sequence of unicode characters
	// block: default directory for scripts block file
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
	//var chars = cp.split('')
	var chars = []
	convertStr2DecArray(cp, chars)
	if (direction==='rtl') direction = ' dir="rtl"'
	else direction = ''
	var shortForm = false
	if (cp.startsWith(':')) {
		shortForm = true
		var colon = chars.shift()
		}
	
	var out = '<span class="codepoint" translate="no">'
	var charstr = ''
	if (shortForm) {
		out += '<span lang="'+lang+'"'+direction+'>'
		for (let i=0;i<chars.length;i++) {
			charstr = String.fromCodePoint(chars[i])
			var mark = false
			var cbase = ''
			var dir = ''

			if (charData[charstr]) {
				var hex = chars[i].toString(16).toUpperCase()
				while (hex.length < 4) hex = '0'+hex 
				}
			else return 'Character not found in database.'
			out += cbase+'&#x'+hex+';'
			}
		out += '</span> '
		}
	
	else {
		for (let i=0;i<chars.length;i++) {
			if (i>0) out += ' + '
			charstr = String.fromCodePoint(chars[i])
			var mark = false
			var cbase = ''
			var dir = ''

			if (charData[charstr]) {
				var hex = chars[i].toString(16).toUpperCase()
				while (hex.length < 4) hex = '0'+hex 

				if (charData[charstr].match('\u200B')) mark = true
				if (mark && defaults.ccbase != '') cbase = '&#x'+convertChar2CP(defaults.ccbase)+';'
				if (direction === 'rtl') dir = ' dir="rtl"'
				}
			else return 'Character not found in database.'
			out += '<span lang="'+lang+'"'+dir+'>'+cbase+'&#x'+hex+';</span> '
			}
		}


	for (let i=0;i<chars.length;i++) {
        if (i===0) out += '['
        if (i>0 && i<chars.length) out += ' + '
        
		charstr = String.fromCodePoint(chars[i])
        var hex = chars[i].toString(16).toUpperCase()
		while (hex.length < 4) hex = '0'+hex 
		var name = charData[charstr]


		if (! window.location.href.match('r12a.github.io')) {
			var char = String.fromCodePoint(chars[i])
			if (spreadsheetRows[char] && spreadsheetRows[char][cols.block]) block = '/scripts/'+spreadsheetRows[char][cols.block]+'/block'
			console.log(spreadsheetRows)
			out +=  '<a href="'+block+'#char'+hex+'">'
			}
		out +=  '<span class="uname">U+'+hex+' '+name+'</span>'
		if (! window.location.href.match('r12a.github.io')) out +=  '</a>'
		if (i===chars.length-1) out += ']'
		}
    out += '</span> '
	
	return out.trim()
	}





function makeCharacterLink (cp, block, lang, direction) { 
	// returns markup with information about cp
	// only wraps in a link if not on r12a.github.io or block !== ''
	// cp: a unicode character, or sequence of unicode characters
	// block: default directory for scripts block file
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
	//var chars = cp.split('')
	var chars = []
	convertStr2DecArray(cp, chars)
	if (direction==='rtl') direction = ' dir="rtl"'
	else direction = ''
	var shortForm = true
	if (cp.startsWith(':')) {
		shortForm = false
		var colon = chars.shift()
		}
	
	var out = '<span class="codepoint" translate="no">'
	var charstr = ''
	if (shortForm) {
		out += '<bdi lang="'+lang+'"'+direction+'>'
		for (let i=0;i<chars.length;i++) {
			charstr = String.fromCodePoint(chars[i])
			var mark = false
			var cbase = ''
			var dir = ''

			if (charData[charstr]) {
				var hex = chars[i].toString(16).toUpperCase()
				while (hex.length < 4) hex = '0'+hex 
				}
			else return 'Character not found in database.'
			out += cbase+'&#x'+hex+';'
			}
		out += '</bdi> '
		}
	
	else {
		for (let i=0;i<chars.length;i++) {
			if (i>0) out += ' + '
			charstr = String.fromCodePoint(chars[i])
			var mark = false
			var cbase = ''
			var dir = ''

			if (charData[charstr]) {
				var hex = chars[i].toString(16).toUpperCase()
				while (hex.length < 4) hex = '0'+hex 

				if (charData[charstr].match('\u200B')) mark = true
				if (mark && defaults.ccbase != '') cbase = '&#x'+convertChar2CP(defaults.ccbase)+';'
				if (direction === 'rtl') dir = ' dir="rtl"'
				}
			else return 'Character not found in database.'
			out += '<bdi lang="'+lang+'"'+dir+'>'+cbase+'&#x'+hex+';</bdi> '
			}
		}


	for (let i=0;i<chars.length;i++) {
        if (i===0) out += ''
        if (i>0 && i<chars.length) out += ' + '
        
		charstr = String.fromCodePoint(chars[i])
        var hex = chars[i].toString(16).toUpperCase()
		while (hex.length < 4) hex = '0'+hex 
		var name = charData[charstr]


        if (! window.location.href.match('r12a.github.io') && block !== '') {
			var char = String.fromCodePoint(chars[i])
			//if (spreadsheetRows[char] && spreadsheetRows[char][cols.block]) block = '/scripts/'+spreadsheetRows[char][cols.block]+'/block'
			//console.log(spreadsheetRows)
            block = block.replace(/\/scripts\//,'')  // these 2 lines for backward compat
            block = block.replace(/\/block/,'')
			out +=  '<a href="../../scripts/'+block+'/block.html#char'+hex+'">'
			}
		out +=  '<span class="uname">U+'+hex+' '+name+'</span>'
		if (! window.location.href.match('r12a.github.io') && block !== '') out +=  '</a>'
		if (i===chars.length-1) out += ''
		}
    out += '</span> '
	
	return out.trim()
	}




function displayDBInfo (cp, block, lang, direction, showAll) { 
	// displays information about cp from db
	// cp: a unicode character, or sequence of unicode characters
	// block: 
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
	// showAll: boolean, if true shows all db entries for every character; otherwise, shows only entries that start with the character

	//var chars = []
	//convertStr2DecArray(cp, chars)
    
    
    // add inherent vowels
    if (typeof addInherent === 'function') cp = addInherent(cp)
    
	var chars = [...cp]
    var out = ''
    
    out += '<div style="text-align:center; margin-block-end: .5em;">'
    //out += '<button onclick="sieveFor(\'analysisIPA\')">Show IPA</button> '
    out += '<button onclick="sieveForIPA()">Show IPA</button> '
    out += '<button onclick="sieveFor(\'analysisTransc\')">Show Transcription</button> '
    //out += '<button onclick="sieveFor(\'dbCharName\')">List Codepoints</button>'
    out += '</div>'
	
	out += '<span id="textAnalysis" style="display:flex; flex-direction:column;">'
	//console.log(spreadsheetRows)

	for (let i=0;i<chars.length;i++) {
		//out += buildDBInfoLine(chars[i], true)
		out += buildDBInfoLine(chars[i], true, cp, i, showAll)
		}
	
	out += '</span>'


	return out.trim()
	}









function statusExpander (status) {
    // takes a single letter status value and expands to a word for display
    
    out = ''
    switch (status) {
        case 'i': out += 'infrequent '; break
        case 'r': out += 'rare '; break
        case 'a': out += 'archaic '; break
        case 'd': out += 'deprecated '; break
        case 'u': out += 'unused '; break
        case 'o': out += 'obsolete '; break
        case 'l': out += 'loan words or foreign sounds '; break
        }
    return out
    }





function buildDBInfoLine (char, toplevel, originStr, ptr, showAll) {
		
		hex = char.codePointAt(0).toString(16).toUpperCase()
		while (hex.length < 4) hex = '0'+hex
		
		out = '<div class="dbCharContainer"'
		if (!toplevel) out += ' style="margin-left: 3em;"'
		if (toplevel) out += '><span class="dbCharItem">'+char+'</span> '
		else if (! showAll) out += '><span class="dbCharItem">'+char+'</span> '
		else out += '><span class="dbCharItemLevel2">'+char+'</span> '
		
		// skip items with an x in the class column unless this is the top level
		// ie. characters in the text will be reported, but not linked to - options
		var ignorable = false
		if (! toplevel && spreadsheetRows[char] && spreadsheetRows[char][cols.class] && spreadsheetRows[char][cols.class].includes('-')) ignorable = true
		
		
		out += '<span class="dbCharSubContainer" style="display:flex;flex-direction:column;">'

		if (spreadsheetRows[char] && ignorable === false) {
					
			out += '<span class="dbCharInfo">'

			// get ipa info
			if (cols.ipaLoc) {
				//out += '<bdi class="analysisIPA" onclick="sieveFor(\'analysisIPA\')" onmouseover="showMenuText(\'Make a list of IPA values.\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer"><em>ipa</em> '
				//out += '<bdi class="analysisIPA" onclick="sieveFor(\'analysisIPA\')" onmouseover="showMenuText(\'IPA: Click to make a list of values.\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer">'
				out += '<bdi class="analysisIPA" onmouseover="showMenuText(\'Typical phonemic/phonetic value(s).\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer">'
				if (spreadsheetRows[char][cols.ipaLoc]) out += ' <span class="ipa" style="display:inline-block; min-width:1.5em;">'+spreadsheetRows[char][cols.ipaLoc].toLowerCase()+'</span>'
				else out += '<span class="ipa" style="display:inline-block; min-width:1.5em;">-</span>'
				out += '</bdi>'
				}

            // get any ipaPlus info
			if (cols.ipaPlus && spreadsheetRows[char][cols.ipaPlus]) {
				out += `<bdi class="analysisIPAplus" onmouseover="showMenuText('Inherent vowels associated with this letter.','tan')" onmouseout="hideMenuText()" style="cursor:pointer">`
				out +=  `<span class="ipa" style="display:inline-block; min-width:1.5em;">${ spreadsheetRows[char][cols.ipaPlus].toLowerCase() }</span>`
				out += '</bdi>'
				}

            // get any ipaOther info
			if (cols.ipaOther && spreadsheetRows[char][cols.ipaOther]) {
				out += `<bdi class="analysisIPAother" onmouseover="showMenuText('Additional sounds that may be associated with this letter.','tan')" onmouseout="hideMenuText()" style="cursor:pointer">`
				out +=  `<span class="ipa" style="display:inline-block; min-width:1.5em;">${ spreadsheetRows[char][cols.ipaOther].toLowerCase() }</span>`
				out += '</bdi>'
				}

			// get transcription
			if (cols.othertranscriptions) {
				for (let t=0;t<cols.othertranscriptions.length;t++) {
					//out += '<bdi class="analysisTransc" onclick="sieveFor(\'analysisTransc\')" onmouseover="showMenuText(\''+cols.othertranscriptions[t][1]+' transcription. (Click to extract a list.)\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer"><em style="font-size: 80%;">'+cols.othertranscriptions[t][1]+'</em> '
					out += '<bdi class="analysisTransc" onmouseover="showMenuText(\''+cols.othertranscriptions[t][1]+' transcription.\',\'tan\')" onmouseout="hideMenuText()"><em style="font-size: 80%;">'+cols.othertranscriptions[t][1]+'</em> '
					if (spreadsheetRows[char][cols.othertranscriptions[t][0]]) out += ' <span class="transc">'+spreadsheetRows[char][cols.othertranscriptions[t][0]]+'</span>'
					else out += '<span>-</span>'
					out += '</bdi>'
					}
				}


			// get type
			out += '<bdi class="analysisType">'
			//out += '<em>type</em> '
			if (spreadsheetRows[char][cols.typeLoc]) out += ' <span class="" onmouseover="showMenuText(\'Type of character.\',\'tan\')" onmouseout="hideMenuText()">'+spreadsheetRows[char][cols.typeLoc]+'</span>'
			else out += '<span class="ipa">-</span>'
			out += '</bdi>'



			// get usage
			if (spreadsheetRows[char][cols.statusLoc] && cols.statusLoc > 0) {
				out += '<bdi class="analysisStatus">'
				//out += '<em>usage</em> '
				out += '<span onmouseover="showMenuText(\'Usage notes.\',\'tan\')" onmouseout="hideMenuText()">('+spreadsheetRows[char][cols.statusLoc]+')</span>'
				out += '</bdi>'
				}

			// get status
			if (spreadsheetRows[char][cols.status] && cols.status > 0) {
				out += '<bdi class="analysisStatus">'
				//out += '<em>usage</em> '
				out += ' <span style="color:black; font-weight: bold;" onmouseover="showMenuText(\'Status notes.\',\'tan\')" onmouseout="hideMenuText()">'+statusExpander(spreadsheetRows[char][cols.status])+'</span>'
				out += '</bdi>'
				}

			// get class (ie. general category)
			if (spreadsheetRows[char][cols.class] && cols.class > 0) {
				out += '<bdi class="">'
				out += ' <span style="font-size: 80%; font-style:italic;" onmouseover="showMenuText(\'General category.\',\'tan\')" onmouseout="hideMenuText()">'+spreadsheetRows[char][cols.class]+'</span>'
				out += '</bdi>'
				}

			// get transliteration
			//if (spreadsheetRows[char][cols.transLoc] && spreadsheetRows[char][cols.transLoc] !== char) {
			if (spreadsheetRows[char][cols.transLoc] && cols.transLoc > 0) {
				out += '<bdi class="analysisTranslit" onmouseover="showMenuText(\'Transliteration produced by this app.\',\'tan\')" onmouseout="hideMenuText()">'
				out += '<span><em>translit</em> '
				if (spreadsheetRows[char][cols.transLoc]) out += ' <span class="">'+spreadsheetRows[char][cols.transLoc]+'</span>'
				else out += '<span>–</span>'
				out += '</bdi>'
				}


			// get name
			if (spreadsheetRows[char][cols.nameLoc] && cols.nameLoc > 0) {
				out += '<bdi class="analysisName" onmouseover="showMenuText(\'Name.\',\'tan\')" onmouseout="hideMenuText()"><em>name</em> '
				out += ' <span>'+spreadsheetRows[char][cols.nameLoc]
				if (spreadsheetRows[char][cols.nnameLoc] && cols.nnameLoc > 0) out += ' ('+spreadsheetRows[char][cols.nnameLoc]+')'
				out += '</span></bdi>'
				}

			// add link to notes page (using the block column)
			if (spreadsheetRows[char][cols.block] && cols.block > 0) {
				//out += '<bdi onmouseover="showMenuText(\'Show details in character notes page.\',\'tan\')" onmouseout="hideMenuText()"><a href="/scripts/'+spreadsheetRows[char][cols.block]+'/block#char'+hex+'" target="_blank">details</a></bdi>'
                //var blockloc = template.blocklocation.replace('/scripts/','').replace('/block','') // deal with legacy
				out += '<bdi onmouseover="showMenuText(\'Show details in character notes page.\',\'tan\')" onmouseout="hideMenuText()"><a href="../../scripts/'+template.blocklocation+'/block.html#char'+hex+'" target="details">notes</a></bdi> • '
				out += '<bdi onmouseover="showMenuText(\'Open a page to show character properties.\',\'tan\')" onmouseout="hideMenuText()"><a href="https://util.unicode.org/UnicodeJsps/character.jsp?a='+hex+'" target="details">properties</a></bdi>'
                console.log('template.blocklocation',template.blocklocation)
				}

/*			// add link to notes page
			var blockfile = getScriptGroup(parseInt(hex,16), true)
			//console.log(blockfile)
			if (blockfile) {
				out += '<bdi onmouseover="showMenuText(\'Show details in character notes page.\',\'tan\')" onmouseout="hideMenuText()"><a href="/scripts/'+blockfile+'/block#char'+hex+'" target="_blank">details</a></bdi>'
				}
*/
			out += '</span>'	

			// add unicode name
			//out += '<bdi class="dbCharName" onclick="sieveFor(\'dbCharName\')" onmouseover="showMenuText(\'Make a list of Unicode names.\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer">'
			out += '<bdi class="dbCharName" onmouseover="showMenuText(\'Unicode name.\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer">'
			if (spreadsheetRows[char][cols.ucsName]) out += spreadsheetRows[char][cols.ucsName]
			else {
				for (let i=0;i<char.length;i++) {
					if (i>0) out += ', '
					out += 'U+'+hex+': '+charData[char[i]]
					}
				}
			out += '</bdi>'	
			}
		
		else {
			// if class is x, just display ucs name
			out += '<span class="dbCharInfo">'
			out += '</span><bdi class="dbCharName">'	
			
			// add unicode name
			var blockfile = getScriptGroup(parseInt(hex,16), true)
			if (blockfile) {
				for (let i=0;i<char.length;i++) {
					if (i>0) out += ', '
					out += 'U+'+hex+': '+charData[char[i]]
					}
				}
			out += '</bdi>'	
			}

		out += '</span> '
		out += '</div> '
		
		
		// find related items
		if (toplevel) {
			if (showAll) {
				for (item in spreadsheetRows) { 
					if (((item.length > 1 && item.includes(char)) || (cols.equiv && spreadsheetRows[item][cols.equiv].includes(char))) && spreadsheetRows[item][cols.class] !== '-') out += buildDBInfoLine(item, false, originStr, ptr, showAll)
					}
				}
			else {
				for (item in spreadsheetRows) { 
					var matchStr = item.replace(/-/g,'.').replace(/◌/g,'.')
					if (matchStr == '?' || matchStr == '(' || matchStr == ')' || matchStr == '[' || matchStr == ']' || matchStr == '*' || matchStr == '\\') matchStr = 'xx'
					//console.log('matchstr',matchStr)
					var  regex = new RegExp(matchStr)
					itemArray = [... item] // to handle surrogates
					if (((itemArray.length > 1 && itemArray[0] === char) || (cols.equiv && spreadsheetRows[item][cols.equiv].includes(item))) && spreadsheetRows[item][cols.class] !== '-' && originStr.substr(ptr,item.length).match(regex)) out += buildDBInfoLine(item, false, originStr, ptr, showAll)
					}
				}
			}
		
		return out
}





function buildDBInfoLineX (char, toplevel, originStr, ptr, showAll) {
		
		hex = char.codePointAt(0).toString(16).toUpperCase()
		while (hex.length < 4) hex = '0'+hex
		
		out = '<div class="dbCharContainer"'
		if (!toplevel) out += ' style="margin-left: 3em;"'
		if (toplevel) out += '><span class="dbCharItem">'+char+'</span> '
		else if (! showAll) out += '><span class="dbCharItem">'+char+'</span> '
		else out += '><span class="dbCharItemLevel2">'+char+'</span> '
		
		// skip items with an x in the class column unless this is the top level
		// ie. characters in the text will be reported, but not linked to - options
		var ignorable = false
		if (! toplevel && spreadsheetRows[char] && spreadsheetRows[char][cols.class] && spreadsheetRows[char][cols.class].includes('-')) ignorable = true
		
		
		out += '<span class="dbCharSubContainer" style="display:flex;flex-direction:column;">'

		if (spreadsheetRows[char] && ignorable === false) {
					
			out += '<span class="dbCharInfo">'

			// get ipa info
			if (cols.ipaLoc) {
				//out += '<bdi class="analysisIPA" onclick="sieveFor(\'analysisIPA\')" onmouseover="showMenuText(\'Make a list of IPA values.\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer"><em>ipa</em> '
				//out += '<bdi class="analysisIPA" onclick="sieveFor(\'analysisIPA\')" onmouseover="showMenuText(\'IPA: Click to make a list of values.\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer">'
				out += '<bdi class="analysisIPA" onmouseover="showMenuText(\'Typical phonemic/phonetic value(s).\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer">'
				if (spreadsheetRows[char][cols.ipaLoc]) out += ' <span class="ipa" style="display:inline-block; min-width:1.5em;">'+spreadsheetRows[char][cols.ipaLoc].toLowerCase()+'</span>'
				else out += '<span class="ipa" style="display:inline-block; min-width:1.5em;">-</span>'
				out += '</bdi>'
				}

            // get any ipaPlus info
			if (cols.ipaPlus && spreadsheetRows[char][cols.ipaPlus]) {
				out += `<bdi class="analysisIPAplus" onmouseover="showMenuText('Additional sounds that may be associated with this letter.','tan')" onmouseout="hideMenuText()" style="cursor:pointer">`
				out +=  `<span class="ipa" style="display:inline-block; min-width:1.5em;">${ spreadsheetRows[char][cols.ipaPlus].toLowerCase() }</span>`
				out += '</bdi>'
				}

			// get transcription
			if (cols.othertranscriptions) {
				for (let t=0;t<cols.othertranscriptions.length;t++) {
					//out += '<bdi class="analysisTransc" onclick="sieveFor(\'analysisTransc\')" onmouseover="showMenuText(\''+cols.othertranscriptions[t][1]+' transcription. (Click to extract a list.)\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer"><em style="font-size: 80%;">'+cols.othertranscriptions[t][1]+'</em> '
					out += '<bdi class="analysisTransc" onmouseover="showMenuText(\''+cols.othertranscriptions[t][1]+' transcription.\',\'tan\')" onmouseout="hideMenuText()"><em style="font-size: 80%;">'+cols.othertranscriptions[t][1]+'</em> '
					if (spreadsheetRows[char][cols.othertranscriptions[t][0]]) out += ' <span class="transc">'+spreadsheetRows[char][cols.othertranscriptions[t][0]]+'</span>'
					else out += '<span>-</span>'
					out += '</bdi>'
					}
				}


			// get type
			out += '<bdi class="analysisType">'
			//out += '<em>type</em> '
			if (spreadsheetRows[char][cols.typeLoc]) out += ' <span class="" onmouseover="showMenuText(\'Type of character.\',\'tan\')" onmouseout="hideMenuText()">'+spreadsheetRows[char][cols.typeLoc]+'</span>'
			else out += '<span class="ipa">-</span>'
			out += '</bdi>'



			// get usage
			if (spreadsheetRows[char][cols.statusLoc] && cols.statusLoc > 0) {
				out += '<bdi class="analysisStatus">'
				//out += '<em>usage</em> '
				out += '<span onmouseover="showMenuText(\'Usage notes.\',\'tan\')" onmouseout="hideMenuText()">('+spreadsheetRows[char][cols.statusLoc]+')</span>'
				out += '</bdi>'
				}

			// get status
			if (spreadsheetRows[char][cols.status] && cols.status > 0) {
				out += '<bdi class="analysisStatus">'
				//out += '<em>usage</em> '
				out += ' <span style="color:black; font-weight: bold;" onmouseover="showMenuText(\'Status notes.\',\'tan\')" onmouseout="hideMenuText()">'+statusExpander(spreadsheetRows[char][cols.status])+'</span>'
				out += '</bdi>'
				}

			// get class (ie. general category)
			if (spreadsheetRows[char][cols.class] && cols.class > 0) {
				out += '<bdi class="">'
				out += ' <span style="font-size: 80%; font-style:italic;" onmouseover="showMenuText(\'General category.\',\'tan\')" onmouseout="hideMenuText()">'+spreadsheetRows[char][cols.class]+'</span>'
				out += '</bdi>'
				}

			// get transliteration
			//if (spreadsheetRows[char][cols.transLoc] && spreadsheetRows[char][cols.transLoc] !== char) {
			if (spreadsheetRows[char][cols.transLoc] && cols.transLoc > 0) {
				out += '<bdi class="analysisTranslit" onmouseover="showMenuText(\'Transliteration produced by this app.\',\'tan\')" onmouseout="hideMenuText()">'
				out += '<span><em>translit</em> '
				if (spreadsheetRows[char][cols.transLoc]) out += ' <span class="">'+spreadsheetRows[char][cols.transLoc]+'</span>'
				else out += '<span>–</span>'
				out += '</bdi>'
				}


			// get name
			if (spreadsheetRows[char][cols.nameLoc] && cols.nameLoc > 0) {
				out += '<bdi class="analysisName" onmouseover="showMenuText(\'Name.\',\'tan\')" onmouseout="hideMenuText()"><em>name</em> '
				out += ' <span>'+spreadsheetRows[char][cols.nameLoc]
				if (spreadsheetRows[char][cols.nnameLoc] && cols.nnameLoc > 0) out += ' ('+spreadsheetRows[char][cols.nnameLoc]+')'
				out += '</span></bdi>'
				}

			// add link to notes page (using the block column)
			if (spreadsheetRows[char][cols.block] && cols.block > 0) {
				//out += '<bdi onmouseover="showMenuText(\'Show details in character notes page.\',\'tan\')" onmouseout="hideMenuText()"><a href="/scripts/'+spreadsheetRows[char][cols.block]+'/block#char'+hex+'" target="_blank">details</a></bdi>'
                //var blockloc = template.blocklocation.replace('/scripts/','').replace('/block','') // deal with legacy
				out += '<bdi onmouseover="showMenuText(\'Show details in character notes page.\',\'tan\')" onmouseout="hideMenuText()"><a href="../../scripts/'+template.blocklocation+'/block.html#char'+hex+'" target="details">notes</a></bdi> • '
				out += '<bdi onmouseover="showMenuText(\'Open a page to show character properties.\',\'tan\')" onmouseout="hideMenuText()"><a href="https://util.unicode.org/UnicodeJsps/character.jsp?a='+hex+'" target="details">properties</a></bdi>'
                console.log('template.blocklocation',template.blocklocation)
				}

/*			// add link to notes page
			var blockfile = getScriptGroup(parseInt(hex,16), true)
			//console.log(blockfile)
			if (blockfile) {
				out += '<bdi onmouseover="showMenuText(\'Show details in character notes page.\',\'tan\')" onmouseout="hideMenuText()"><a href="/scripts/'+blockfile+'/block#char'+hex+'" target="_blank">details</a></bdi>'
				}
*/
			out += '</span>'	

			// add unicode name
			//out += '<bdi class="dbCharName" onclick="sieveFor(\'dbCharName\')" onmouseover="showMenuText(\'Make a list of Unicode names.\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer">'
			out += '<bdi class="dbCharName" onmouseover="showMenuText(\'Unicode name.\',\'tan\')" onmouseout="hideMenuText()" style="cursor:pointer">'
			if (spreadsheetRows[char][cols.ucsName]) out += spreadsheetRows[char][cols.ucsName]
			else {
				for (let i=0;i<char.length;i++) {
					if (i>0) out += ', '
					out += 'U+'+hex+': '+charData[char[i]]
					}
				}
			out += '</bdi>'	
			}
		
		else {
			// if class is x, just display ucs name
			out += '<span class="dbCharInfo">'
			out += '</span><bdi class="dbCharName">'	
			
			// add unicode name
			var blockfile = getScriptGroup(parseInt(hex,16), true)
			if (blockfile) {
				for (let i=0;i<char.length;i++) {
					if (i>0) out += ', '
					out += 'U+'+hex+': '+charData[char[i]]
					}
				}
			out += '</bdi>'	
			}

		out += '</span> '
		out += '</div> '
		
		
		// find related items
		if (toplevel) {
			if (showAll) {
				for (item in spreadsheetRows) { 
					if (((item.length > 1 && item.includes(char)) || (cols.equiv && spreadsheetRows[item][cols.equiv].includes(char))) && spreadsheetRows[item][cols.class] !== '-') out += buildDBInfoLine(item, false, originStr, ptr, showAll)
					}
				}
			else {
				for (item in spreadsheetRows) { 
					var matchStr = item.replace(/-/g,'.').replace(/◌/g,'.')
					if (matchStr == '?' || matchStr == '(' || matchStr == ')' || matchStr == '[' || matchStr == ']' || matchStr == '*' || matchStr == '\\') matchStr = 'xx'
					//console.log('matchstr',matchStr)
					var  regex = new RegExp(matchStr)
					itemArray = [... item] // to handle surrogates
					if (((itemArray.length > 1 && itemArray[0] === char) || (cols.equiv && spreadsheetRows[item][cols.equiv].includes(item))) && spreadsheetRows[item][cols.class] !== '-' && originStr.substr(ptr,item.length).match(regex)) out += buildDBInfoLine(item, false, originStr, ptr, showAll)
					}
				}
			}
		
		return out
}



function sieveForOLDER (type) {
	// hide the labels
	var ems = document.getElementById('textAnalysis').querySelectorAll('em')
	for (var i=0;i<ems.length;i++) ems[i].style.display = 'none'
	var hlist = ''
	
	// hide all bdi elements except the one we want (type)
	var bdis = document.getElementById('textAnalysis').querySelectorAll('bdi')
	for (var i=0;i<bdis.length;i++) {
		if (bdis[i].className !== type) bdis[i].style.display = 'none'
		else if (bdis[i].querySelector('span')) { hlist += bdis[i].querySelector('span').textContent + '⸱'}
		// stop the name being on a separate line
		if (type === 'dbCharName') bdis[i].parentNode.style.display = 'block'
		}
	console.log(hlist)
	}




function sieveForOLD (type) {
	// hide the labels
	var hlist = ''
	var vlist = ''
	
	// find the character and/or the value we want (type)
	var lines = document.getElementById('textAnalysis').querySelectorAll('.dbCharContainer')
	for (var i=0;i<lines.length;i++) {
		vlist += lines[i].querySelector('.dbCharItem').textContent
		valueNode = lines[i].querySelector('.'+type)
		valueText = ''
		if (valueNode && valueNode.lastChild.textContent !== '-') {
			valueText = valueNode.lastChild.textContent
			vlist += ' '+valueText+'\n'
			hlist += valueText
			if (i<lines.length-1) hlist += '⸱'
			}
		else {
			vlist += '\n'
			hlist += lines[i].querySelector('.dbCharItem').textContent+'⸱'
			}
		}
	
	// display the result
	document.getElementById('listOutput').style.display = 'block'
	document.getElementById('listOutputHorizontal').textContent = hlist
	document.getElementById('listOutputVertical').textContent = vlist
	}







function displayIPAorTranscriptionData (charStr, type) {
	// shows a panel with characters alongside their transcription or IPA equivalents in the db
    // THIS IS NOW REDUNDANT, SINCE WE NOW ANALYSE TEXT AND GENERATE FROM THERE
	var hlist = ''
    var items
    
    var charArray = [...charStr]

    // find the character and/or the value we want (type)
    for (var i=0;i<charArray.length;i++) {
        hlist += '<span class="xitem">'
        hlist += `<span class="xitemSrc">${ charArray[i] }</span>`
        hlist += '<span class="xitemResults">'
        if ( spreadsheetRows[charArray[i]] && spreadsheetRows[charArray[i]][cols[type]] ) items = spreadsheetRows[charArray[i]][cols[type]].split(' ')
        else items = [' ']
        for (j=0;j<items.length;j++) hlist += '<span class="xitemRes" onclick="toggleXItem(this)">'+items[j].toLowerCase()+'</span>'
        hlist += '</span>'
        hlist += '</span>\n'
        }
	
	// display the result
	document.getElementById('listOutput').style.display = 'block'
	document.getElementById('listOutputHorizontal').innerHTML = hlist
	}




function sieveFor (type) {
	// hide the labels
	var hlist = ''
	var vlist = ''
    var items
    
    
    if (type === 'dbCharName') {
    // i think this code is no longer used, since lists of names are created by List Characters, so sieveFor is no longer called using the dbCharName type
        var lines = document.getElementById('textAnalysis').querySelectorAll('.dbCharContainer')
        for (var i=0;i<lines.length;i++) {
            vlist += lines[i].querySelector('.dbCharItem').textContent
            valueNode = lines[i].querySelector('.'+type)
            valueText = ''
            if (valueNode && valueNode.lastChild.textContent !== '-') {
                valueText = valueNode.lastChild.textContent
                vlist += ' '+valueText+'\n'
                }
           }
        }
    
    else {
        // find the character and/or the value we want (type)
        var lines = document.getElementById('textAnalysis').querySelectorAll('.dbCharContainer')
        for (var i=0;i<lines.length;i++) {
            hlist += '<span class="xitem">'
            hlist += '<span class="xitemSrc">'+lines[i].querySelector('.dbCharItem').textContent+'</span>'
            hlist += '<span class="xitemResults">'
            valueNode = lines[i].querySelector('.'+type)
            if (valueNode === null) items = ' '
            else items = valueNode.lastChild.textContent.split(' ')
            //for (j=0;j<items.length;j++) hlist += '<span class="xitemRes" onclick="this.classList.toggle(\'xitemHide\')">'+items[j].toLowerCase()+'</span>'
            for (j=0;j<items.length;j++) hlist += '<span class="xitemRes" onclick="toggleXItem(this)">'+items[j].toLowerCase()+'</span>'
            hlist += '</span>'
            hlist += '</span>\n'
            }
		}
	
	// display the result
	document.getElementById('listOutput').style.display = 'block'
	document.getElementById('listOutputHorizontal').innerHTML = hlist
	document.getElementById('listOutputVertical').textContent = vlist
	}










function sieveForIPA () {
	// hide the labels
	var hlist = ''
	var vlist = ''
    var ipaItems, ipaPlusItems
    
    // find the IPA data
    var lines = document.getElementById('textAnalysis').querySelectorAll('.dbCharContainer')
    for (var i=0;i<lines.length;i++) {
        hlist += '<span class="xitem">'
        hlist += '<span class="xitemSrc">'+lines[i].querySelector('.dbCharItem').textContent+'</span>'
        hlist += '<span class="xitemResults">'
        valueNode = lines[i].querySelector('.analysisIPA')
        if (valueNode === null) ipaItems = ' '
        else ipaItems = valueNode.lastChild.textContent.split(' ')
        //console.log('ipa',ipaItems)
        ipaPlusNode = lines[i].querySelector('.analysisIPAplus')
        if (ipaPlusNode) ipaPlusItems = ipaPlusNode.lastChild.textContent.split(' ')
        else ipaPlusItems = ''
        ipaOtherNode = lines[i].querySelector('.analysisIPAother')
        if (ipaOtherNode) ipaOtherItems = ipaOtherNode.lastChild.textContent.split(' ')
        else ipaOtherItems = ''
        //console.log('ipa+',ipaPlusItems)
        //for (j=0;j<items.length;j++) hlist += '<span class="xitemRes" onclick="this.classList.toggle(\'xitemHide\')">'+items[j].toLowerCase()+'</span>'
        for (j=0;j<ipaItems.length;j++) hlist += '<span class="xitemRes" onclick="toggleXItem(this)">'+ipaItems[j].toLowerCase()+'</span>'
        for (j=0;j<ipaPlusItems.length;j++) hlist += '<span class="xitemHide" onclick="toggleXItem(this)">'+ipaPlusItems[j].toLowerCase()+'</span>'
        for (j=0;j<ipaOtherItems.length;j++) hlist += '<span class="xitemHide" onclick="toggleXItem(this)">'+ipaOtherItems[j].toLowerCase()+'</span>'
        hlist += '</span>'
        hlist += '</span>\n'
        }
	
	// display the result
	document.getElementById('listOutput').style.display = 'block'
	document.getElementById('listOutputHorizontal').innerHTML = hlist
	document.getElementById('listOutputVertical').textContent = vlist
	}


function sieveForIPAX () {
	// hide the labels
	var hlist = ''
	var vlist = ''
    var ipaItems, ipaPlusItems
    
    // find the IPA data
    var lines = document.getElementById('textAnalysis').querySelectorAll('.dbCharContainer')
    for (var i=0;i<lines.length;i++) {
        hlist += '<span class="xitem">'
        hlist += '<span class="xitemSrc">'+lines[i].querySelector('.dbCharItem').textContent+'</span>'
        hlist += '<span class="xitemResults">'
        valueNode = lines[i].querySelector('.analysisIPA')
        if (valueNode === null) ipaItems = ' '
        else ipaItems = valueNode.lastChild.textContent.split(' ')
        //console.log('ipa',ipaItems)
        ipaPlusNode = lines[i].querySelector('.analysisIPAplus')
        if (ipaPlusNode) ipaPlusItems = ipaPlusNode.lastChild.textContent.split(' ')
        else ipaPlusItems = ''
        //console.log('ipa+',ipaPlusItems)
        //for (j=0;j<items.length;j++) hlist += '<span class="xitemRes" onclick="this.classList.toggle(\'xitemHide\')">'+items[j].toLowerCase()+'</span>'
        for (j=0;j<ipaItems.length;j++) hlist += '<span class="xitemRes" onclick="toggleXItem(this)">'+ipaItems[j].toLowerCase()+'</span>'
        for (j=0;j<ipaPlusItems.length;j++) hlist += '<span class="xitemHide" onclick="toggleXItem(this)">'+ipaPlusItems[j].toLowerCase()+'</span>'
        hlist += '</span>'
        hlist += '</span>\n'
        }
	
	// display the result
	document.getElementById('listOutput').style.display = 'block'
	document.getElementById('listOutputHorizontal').innerHTML = hlist
	document.getElementById('listOutputVertical').textContent = vlist
	}


function addXitems () {
    // sends the result of sieveFor to the text area
    items = document.querySelectorAll('.xitemRes')
    console.log('Items length',items.length)
    var out = ''
    for (i=0;i<items.length;i++) {
        if (! items[i].classList.contains('xitemHide')) out += items[i].textContent.replace(/-/g,'')
        }
    add( out )
    }


function toggleXItem (node) {
    // click on an IPA item in the analysis list and its siblings, if any, will be greyed out
    parentNode = node.parentNode
    siblings = parentNode.querySelectorAll('span')
    xitemsRes = parentNode.querySelectorAll('.xitemRes')
    console.log(siblings.length,'siblings')
    console.log(xitemsRes.length,'xitemsRes')
    
    if (xitemsRes.length === 1 || siblings.length === 1) {
        if (node.classList.contains('xitemRes')) {
            node.classList.remove('xitemRes')
            node.classList.add('xitemHide')
            }
        else {
            node.classList.add('xitemRes')
            node.classList.remove('xitemHide')
            }
        return
        }

    for (i=0;i<siblings.length;i++) {
        if (siblings[i] !== node) { console.log('sibling != node', siblings[i].textContent)
            siblings[i].classList.remove('xitemRes')
            siblings[i].classList.add('xitemHide')
            }
        else { console.log('sibling == node', siblings[i].textContent)
            siblings[i].classList.add('xitemRes')
            siblings[i].classList.remove('xitemHide')
            }
        }
    }


function getData (script) {
    // adds link data to 'related links' expander
    // script: string, iso code for script
    
    script = script.toLowerCase()
	if (! linkDB[script]) return '<p>No data found.</p>'
    else record = linkDB[script]
    
	//script = linkDB[i].script
	var lc = script.toLowerCase()
	var norm = script.toLowerCase().replace(/ /g,'_')
	
	out = '<table id="linkstable"><tbody>'
	if (record.info) {
		out += '<tr><th>General info:</th><td>'
		out += '<p><a href="http://scriptsource.org/scr/'+record.code+'" >Scriptsource</a></p>'
		if (record.info.wikipedia) out += '<p><a href="http://en.wikipedia.org/wiki/'+record.info.wikipedia+'" >Wikipedia</a></p>'
		if (record.info.omniglot) {
			if ( record.info.omniglot.match('http') ) out += '<p><a href="'+record.info.omniglot+'" >Omniglot</a></p>'
			else out += '<p><a href="http://www.omniglot.com/writing/'+record.info.omniglot+'.htm" >Omniglot</a></p>'
			}
		for (var r=2;r<record.local.length;r++) temp += '<p><a href="'+record.info[r].url+'" >'+record.info[r].name+'</a></p>'
		out += '</td></tr>'
		}
	/*if ((record.local && record.local.length) > 0 | scriptNotesSet.has(lc) | charNotesList[lc] | compChartSet.has(lc)) {
		var temp = ''
		temp += '<tr><th>This site:</th><td>'
		if (scriptNotesSet.has(lc)) temp += '<p><a href="/scripts/'+lc+'" >Script summary</a></p>'
		if (charNotesList.has(lc)) temp += '<p><a href="/scripts/'+lc+'/block" >Character notes</a></p>'
		if (compChartSet.has(lc)) temp += '<p><a href="/scripts/featurelist/" >Comparison chart</a></p>'
		for (var r=0;r<record.local.length;r++) temp += '<p><a href="'+record.local[r].url+'" >'+record.local[r].name+'</a></p>'
		//if (scriptSummarySet.has(lc)) temp += '<p><a href="/scripts/tutorial/summaries/'+lc+'" >Tutorial notes</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>This site:</th><td></td></tr>') out += temp
		}*/
	if ((record.local && record.local.length > 0) || scriptNotes[lc] || charNotesList[lc] || compChartSet.has(lc)) {
		var temp = ''
		temp += '<tr><th>r12a.github.io:</th><td>'
		if (scriptNotes[lc]) {
            for (let n=0;n<scriptNotes[lc].length;n++) temp += '<p><a href="/scripts/'+scriptNotes[lc][n][1]+'" >'+scriptNotes[lc][n][0]+'</a></p>'
            }
		if (charNotesList[lc]) temp += '<p><a href="/scripts/'+charNotesList[lc]+'" >Character notes</a></p>'
		if (compChartSet.has(lc)) temp += '<p><a href="/scripts/featurelist/" >Comparison chart</a></p>'
		for (var r=0;r<record.local.length;r++) temp += '<p><a href="'+record.local[r].url+'" >'+record.local[r].name+'</a></p>'
		//if (scriptSummarySet.has(lc)) temp += '<p><a href="/scripts/tutorial/summaries/'+lc+'" >Tutorial notes</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>This site:</th><td></td></tr>') out += temp
		}
    if (record.unicode) {
		out += '<tr><th>Unicode info:</th><td>'
		out += '<p><a href="http://www.unicode.org/versions/latest/ch'+chapters[norm]+'.pdf" >Core text</a></p>'
		out += '<p><a href="http://scriptsource.org/entry/'+ssHistory[norm]+'" >Historical</a></p>'
		out += '</td></tr>'
		}
	if (record.charts) {
		out += '<tr><th>Charts:</th><td><table><tbody>'
		for (var r=0;r<record.charts.length;r++) out += '<tr><td>'+record.charts[r]+'</td><td><a href="/uniview/?block='+record.charts[r].toLowerCase().replace(/ /g,'_')+'" >UniView</a></td><td><a href="http://www.unicode.org/charts/PDF/U'+blockStart[record.charts[r].toLowerCase().replace(/ /g,'_')]+'.pdf" >Unicode</a></td></tr>'
		out += '</tbody></table></td></tr>'
		}
	if (record.pickers) {
		var temp = ''
		temp += '<tr><th>Pickers:</th><td>'
		for (var r=0;r<record.pickers.length;r++) temp += '<p><a href="/pickers/'+record.pickers[r].url+'/" >'+record.pickers[r].name+'</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Pickers:</th><td></td></tr>') out += temp
		}
	if (record.fontkey) {
		var temp = ''
		temp += '<tr><th>Fonts &amp; keyboards:</th><td>'
		temp += '<p><a href="http://scriptsource.org/scr/'+record.code+'/font" >Scriptsource</a></p>'
		if (googleFontSet.has(norm)) temp += '<p><a href="https://www.google.com/get/noto/" >Google Noto</a></p>'
		if (googleEASet.has(norm)) temp += '<p><a href="http://www.google.com/fonts/earlyaccess" >Google Early Access</a></p>'
		if (gouFonts[norm]) temp += '<p><a href="http://www.wazu.jp/gallery/Fonts_'+gouFonts[norm]+'.html" >Gallery of Unicode Fonts</a></p>'
		for (var r=0;r<record.fontkey.length;r++) temp += '<p><a href="'+record.fontkey[r].url+'" >'+record.fontkey[r].name+'</a></p>'
		if (OSDefaultFontsSet.has(norm)) temp += '<p><a href="/scripts/fontlist/#'+norm+'" >OS default fonts</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Fonts &amp; keyboards:</th><td></td></tr>') out += temp
		}
	if (record.layout) {
		var temp = ''
		temp += '<tr><th>Layout &amp; typography:</th><td>'
		for (var r=0;r<record.layout.length;r++) temp += '<p><a href="'+record.layout[r].url+'" >'+record.layout[r].name+'</a></p>'
		if (typographyDocSet.has(norm)) temp += '<p><a href="http://w3c.github.io/typography/" >International text layout and typography index</a></p>'
		if (w3cTypographySet.has(norm)) temp += '<p><a href="https://github.com/w3c/i18n-activity/issues?q=is%3Aissue+is%3Aopen+label%3A'+lc+'" >w3c/typography</a></p>'
		if (w3cTypeSampleSet.has(norm)) temp += '<p><a href="https://w3c.github.io/type-samples/" >w3c/type-samples</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Layout &amp; typography:</th><td></td></tr>') out += temp
		}
	if (record.other && record.other.length > 0) {
		var temp = ''
		temp += '<tr><th>Other:</td><th>'
		for (var r=0;r<record.other.length;r++) temp += '<p><a href="'+record.other[r].url+'" >'+record.other[r].name+'</a></p>'
		temp += '</td></tr>'
		if (temp !== '<tr><th>Other:</td><td></th></tr>') out += temp
		}
	out += '</table></tbody>'
	return out
	}


function addSpacesToPicker (type) {
    var charArray = [...document.getElementById('output').value]
    out = ''
    for (var i=0;i<charArray.length-1;i++) out += charArray[i]+type
	out += charArray[charArray.length-1]
    document.getElementById('output').value = out
    }

function removeCharacterOLD (char) {
    var problemChars = new Set (['.','*','[',']','(',')','?','^'])
    if (char === '') return
    if (char.length === 1) {
        if (problemChars.has(char)) ch = '\\'+char
        else ch = char
        }
    else {
        var hex = new Set(['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','a','b','c','d','e','f'])
        error = false
        if (char.length > 6) error = true
        for (let i=0;i<char.length;i++) if (! hex.has(char[i])) error = true
        if (error) {
            alert('Input either a single character or hex code point value.')
            return
            }
        var dec = parseInt(char, 16)
        var ch = String.fromCodePoint(dec)
        }
    console.log(ch)
    var re = new RegExp(ch, "g"); 
    document.getElementById('output').value = document.getElementById('output').value.replace(re,'')
    }


function removeCharacterLESSOLD (char,replacement) {
    var problemChars = new Set (['.','*','[',']','(',')','?','^'])
    if (char === '') return
    if (char.length === 1) {
        if (problemChars.has(char)) ch = '\\'+char
        else ch = char
        }
    else {
        var hex = new Set(['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','a','b','c','d','e','f'])
        error = false
        if (char.length > 6) error = true
        for (let i=0;i<char.length;i++) if (! hex.has(char[i])) error = true
        if (error) {
            alert('Input either a single character or hex code point value.')
            return
            }
        var dec = parseInt(char, 16)
        var ch = String.fromCodePoint(dec)
        }
    console.log(ch)
    var re = new RegExp(ch, "g"); 
    document.getElementById('output').value = document.getElementById('output').value.replace(re,replacement)
    }


function removeCharacter (char,replacement) {
    // makes the replace control work
    if (trace) console.log('removeCharacter(',char,',',replacement,')')
    var re = new RegExp(char, "g")
    console.log(re)
    document.getElementById('output').value = document.getElementById('output').value.replace(re,replacement)
    }


function showCSHelp () {
    // make context-sensitive help buttons visible
    var buttons = document.querySelectorAll('.interactiveHelpButton')
    for (let i=0;i<buttons.length;i++) {
        buttons[i].style.display = 'inline-block'
        }
    document.getElementById('helpBanner').style.display = 'block'
    document.getElementById('helpcontrol').style.display = 'none'
    }

function hideCSHelp () {
    // make context-sensitive help buttons invisible
    var buttons = document.querySelectorAll('.interactiveHelpButton')
    for (let i=0;i<buttons.length;i++) {
        buttons[i].style.display = 'none'
        }
    document.getElementById('helpBanner').style.display = 'none'
    document.getElementById('helpcontrol').style.display = 'block'
    }




// KEY EVENT INITIALISATION

function addEvent(elem, evtType, func, capture) {
   capture = (capture) ? capture : false;
   if (elem.addEventListener) {
      elem.addEventListener(evtType, func, capture);
   } else if (elem.attachEvent) {
      elem.attachEvent("on" + evtType, func);
   } else {
      // for IE/Mac, NN4, and older
      elem["on" + evtType] = func;
   }
}

function removeEvent(elem, evtType, func, capture) {
   capture = (capture) ? capture : false;
   if (elem.removeEventListener) {
      elem.removeEventListener(evtType, func, capture);
   } else if (elem.attachEvent) {
      elem.detachEvent("on" + evtType, func);
   } else {
      // for IE/Mac, NN4, and older
      elem["on" + evtType] = null;
   }
}

function addOnLoadEvent(func) {
    if (window.addEventListener || window.attachEvent) {
        addEvent(window,"load", func, false);
    } else {
        var oldQueue = (window.onload) ? window.onload : function( ) {};
        window.onload = function( ) {
            oldQueue( );
            func( );
        }
    }
}

// bind events to text box
function setKeyboardEvents( ) {
    addEvent(document.getElementById('output'), "keydown", showDown, false)
    addEvent(document.getElementById('output'), "keyup", showUp, false)
	document.getElementById('output').focus()
	}
	
// do event binding now that elements exist
addOnLoadEvent(setKeyboardEvents)


// KEY EVENT ROUTINES

var typeAssistBuffer = ''
//var awaitingInput = ''
var latinTypeAssist = false
var charChoiceKeys = new Set(['0','1','2','3','4','5','6','7','8','9'])





function setUpTypeAssistx (latin, palette, map) {
	// called from defaults.js, sets up type-in modes with any panels required
	
	window.latinTypeAssist=latin
	makePalette(palette)
	makeKbdEventList(map)
    
    // set the border colour for the top of the textarea
    var selection = document.getElementById('vertical-menu').querySelector('.on')
    if (selection.id === 'textAssistDefault') window.output.style.borderTop = '4px solid orange'
    else if (selection.id === 'textAssistLatin') window.output.style.borderTop = '4px solid tan'
    else window.output.style.borderTop = '4px solid gray'
	}





function setUpTypeAssist (latin, palette, map) {
	// called from defaults.js, sets up type-in modes with any panels required
	
	window.latinTypeAssist=latin
	makePalette(palette)
	makeKbdEventList(map)
	}




// draw a selection panel for a type-assist keypress
function drawCharSelectionPanelSAVED (key) {
	out = ''

	// omit the first item, since we want that at the end
	for (let i=0;i<kbdEventList[key].length;i++) {
		if (i > 9) {
			out += ' &nbsp; <span style="font-size:50%;">See panel for '+eval(kbdEventList[key].length-10)+' more.</span>'
			break
			}
		if (! window.latinTypeAssist) out += ' <sup>'+ kbdEventList[key][i][0] +'</sup>'
		else out += ' <sup></sup>'
		out += '<sub>'+ ((i+1) % 10)+'</sub> '
		out += '<bdi style="font-family:\''+defaults.uifont+'\', \'ExtendedLatinWF\';" onclick="'
		out += 'addReplacement'
		out += '(\''+kbdEventList[key][i][1]+'\'); document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+kbdEventList[key][i][1]+'</bdi>'
		}

	document.getElementById("charChoice").innerHTML = out
    }

	

	
// draw a selection panel for a type-assist keypress
function drawCharSelectionPanel (key) {
	out = ''

	// omit the first item, since we want that at the end
	for (let i=0;i<kbdEventList[key].length;i++) {
		if (i > 9) {
			out += ' &nbsp; <span style="font-size:50%;">See panel for '+eval(kbdEventList[key].length-10)+' more.</span>'
			break
			}
		
		if (! window.latinTypeAssist) {
			//console.log('ipa',spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc])
			// if there is an ipa transcription, use that as a superscript hint
			// otherwise, use the transliteration
			if (spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc]) hint = spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc]
			else hint = kbdEventList[key][i][0]
			out += ' <sup>'+ hint +'</sup>'
			}
		else out += ' <sup></sup>'
		out += '<sub>'+ ((i+1) % 10)+'</sub> '
		out += '<bdi style="font-family:\''+defaults.uifont+'\', \'ExtendedLatinWF\';" onclick="'
		out += 'addReplacement'
		out += '(\''+kbdEventList[key][i][1]+'\'); document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+kbdEventList[key][i][1]+'</bdi>'
		}

	document.getElementById("charChoice").innerHTML = out
    }

	

	
// draw a selection panel for a type-assist keypress
// new version doesn't just put IPA in grey
function drawCharSelectionPanel (key) {
	out = ''

	// omit the first item, since we want that at the end
	for (let i=0;i<kbdEventList[key].length;i++) {
		if (i > 9) {
			out += '<br><span style="font-size:50%; margin-inline-start:3em;"><a href="#" onclick="palette=document.getElementById(\'transcriptionPalette\'); palette.style.display=\'block\'; toggle=document.getElementById(\'togglePalette\'); if (toggle.classList.contains(\'off\')) {toggle.classList.remove(\'off\'); toggle.classList.add(\'on\');} return false;">Open the panel</a> for '+eval(kbdEventList[key].length-10)+' more.</span>'
			break
			}
		
		if (! window.latinTypeAssist) {
			//console.log('ipa',spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc])
			// if there is an ipa transcription, use that as a superscript hint
			// otherwise, use the transliteration
			//if (spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc]) hint = spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc]
			//else hint = kbdEventList[key][i][0]
			hint = kbdEventList[key][i][0]
			out += ' <sup>'+ hint.toLowerCase() +'</sup>'
			}
		else out += ' <sup></sup>'
		out += '<sub>'+ ((i+1) % 10)+'</sub> '
		out += '<bdi style="font-family:\''+defaults.uifont+'\', \'ExtendedLatinWF\';" onclick="'
		out += 'addReplacement'
		out += '(\''+kbdEventList[key][i][1]+'\'); document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+kbdEventList[key][i][1]+'</bdi>'
		}

	document.getElementById("charChoice").innerHTML = out
    }

	

	
// draw a selection panel for a type-assist keypress
// new version doesn't just put IPA in grey
function drawCharSelectionPanel (key) {
	out = ''

	// omit the first item, since we want that at the end
	for (let i=0;i<kbdEventList[key].length;i++) {
        out += '\u200B<span>'
		if (i > 9) {
			out += '<br><span style="font-size:50%; margin-inline-start:3em;"><a href="#" onclick="palette=document.getElementById(\'transcriptionPalette\'); palette.style.display=\'block\'; toggle=document.getElementById(\'togglePalette\'); if (toggle.classList.contains(\'off\')) {toggle.classList.remove(\'off\'); toggle.classList.add(\'on\');} return false;">Open the panel</a> for '+eval(kbdEventList[key].length-10)+' more.</span>'
			break
			}
		
		if (! window.latinTypeAssist) {
			//console.log('ipa',spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc])
			// if there is an ipa transcription, use that as a superscript hint
			// otherwise, use the transliteration
			if (spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc]) hint = spreadsheetRows[kbdEventList[key][i][1]][cols.ipaLoc]
			else hint = kbdEventList[key][i][0]
			//hint = kbdEventList[key][i][0]
			out += '<sup>'+ hint.toLowerCase() +'</sup>'
			}
		else out += ' <sup></sup>'
		out += '<sub>'+ ((i+1) % 10)+'</sub>'
		out += '<bdi style="font-family:\''+defaults.uifont+'\', \'ExtendedLatinWF\';" onclick="'
		out += 'addReplacement'
		out += '(\''+kbdEventList[key][i][1]+'\', window.autoInsertedFromPalette); document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+kbdEventList[key][i][1]+'</bdi>'
        out += '</span>'
		}

	document.getElementById("charChoice").innerHTML = out
    }


  

window.autoInsertedFromPalette = ''


// decipher key down codes
function showDown (evt) {
	evt = (evt) ? evt : ((event) ? event : null)
	if (evt) {
        if (debug) console.log(evt.key, evt.code)
		
		// skip if this is Cmd+C, Ctrl+C, etc
        if (evt.metaKey || evt.ctrlKey || evt.altKey) { if (debug) console.log( evt.key,' pressed.')}
		
        else if (evt.key==='~') { // switch to Latin palette
            var clickEvent = new MouseEvent("click", {"view": window,"bubbles": true,"cancelable": false})
            document.getElementById('togglePalette').dispatchEvent(clickEvent)
            evt.preventDefault()
            }
        else if (evt.key==='`') { // switch to Reverse translit palette
            // find all the input palettes
            inputAidsList = document.getElementById('inputAidMenu').querySelectorAll('.palette')
            // find out where we currently are
            ptr = 0
            for (i=0;i<inputAidsList.length;i++) {
                if (inputAidsList[i].classList.contains('on')) {
                    ptr = i
                    //break
                    }
                // identify the T and L items
                if (inputAidsList[i].id === 'showRevTransSwitch') Tptr = i
                if (inputAidsList[i].id === 'showLatinTransSwitch') Lptr = i
                }
            closeSidebarPalettes(inputAidsList[ptr])
            // point to the next item
            
            // the following 2 lines just move to the next in the list
            //if (ptr === inputAidsList.length-1) ptr = 0 // wrap around
            //else ptr++
            
            // this new code only toggles between T and L
            if (ptr === Lptr) ptr = Tptr
            else ptr = Lptr
            
            var clickEvent = new MouseEvent("click", {"view": window,"bubbles": true,"cancelable": false})
            inputAidsList[ptr].dispatchEvent(clickEvent)
            
            evt.preventDefault()
            }
        else if (evt.key === ' ' && template.spaces && ! window.latinTypeAssist) { // space bar
            if (debug) {
                console.log('Entered Spaces')
                console.log('template.defaultSpace',template.defaultInvisible)
                }
            add(template.defaultSpace)
            window.autoInsertedFromPalette = template.defaultSpace
            out = ''
            for (i=0;i<template.spaces.length;i++) {
                out += '<span>'
                out += `<sup>`+template.spaces[i][0]+`</sup>` +
                `<sub>`+eval(i+1)+`</sub> ` +
                `<bdi class="space" onclick="addReplacement('`+template.spaces[i][1]+`',' ');
                document.getElementById('charChoice').innerHTML = ''; ">`+template.spaces[i][1]+`</bdi>`
                out += '</span>'
                }
            document.getElementById('charChoice').innerHTML = out
            evt.preventDefault()
            }
        else if (evt.key==='§' && template.invisibles && ! window.latinTypeAssist) { // § key for invisibles, as defined in defaults.js
            if (debug) {
                console.log('Entered Invisibles')
                console.log('template.defaultInvisible',template.defaultInvisible)
                }
            if (typeof template.defaultInvisible === 'undefined' || template.defaultInvisible === '' || template.defaultInvisible === ' ') template.defaultInvisible = '§'
            add(template.defaultInvisible)
            window.autoInsertedFromPalette = template.defaultInvisible
            out = ''
            for (i=0;i<template.invisibles.length;i++) {
                out += '<span>'
                out += `<sup>`+template.invisibles[i][0]+`</sup>` +
                `<sub>`+eval(i+1)+`</sub> ` +
                `<bdi class="space" onclick="add('`+template.invisibles[i][1]+`');
                document.getElementById('charChoice').innerHTML = ''; ">`+template.invisibles[i][1]+`</bdi>`
                out += '</span>&#x200B;'
                }
            document.getElementById('charChoice').innerHTML = out
            evt.preventDefault()
            }
         else if (evt.key==='€' && template.moreKeys && ! window.latinTypeAssist) { // € key for directional controls, as defined in defaults.js
            if (debug) console.log('Entered Eurozone')
            out = ''
            for (i=0;i<template.moreKeys.length;i++) {
                out += '<span>'
                out += `<sup>`+template.moreKeys[i][0]+`</sup>` +
                `<sub>`+eval(i+1)+`</sub> ` +
                `<bdi class="space" onclick="addReplacement('`+template.moreKeys[i][1]+`',' ');
                document.getElementById('charChoice').innerHTML = ''; ">`+template.moreKeys[i][1]+`</bdi>`
                out += '</span>&#x200B;'
                }
            document.getElementById('charChoice').innerHTML = out
            window.autoInsertedFromPalette = ''
            evt.preventDefault()
            }
		
		// Type-assist selector showing, and a number key was hit
		else if (charChoiceKeys.has(evt.key) && document.getElementById('charChoice').textContent !== '') {
            if (debug) console.log('Type-assist selector showing.')
            if (debug) console.log('Number key '+evt.key+' was hit')

			num = parseInt(evt.key)-1
			if (num === -1) num = 9
			choices =  document.getElementById('charChoice').querySelectorAll('bdi')

            // add the chosen character
			if (num < 0 || num > choices.length-1) console.log('Number ',num+1, 'is out of range.')
			else addReplacement(choices[num].textContent, window.autoInsertedFromPalette)
			
            // tidy up
            evt.preventDefault()
            document.getElementById("charChoice").innerHTML = ''
			}
		

		// Not a number key, and character typed has a panel
        else if (kbdEventList[evt.key]) {
            if (debug) console.log(evt.key,'triggers',kbdEventList[evt.key][0][1])
			
			// if this is not Latin type-assist, or a Latin-based picker, display the first item in the keyEventList
            // window.autoInsertedFromPalette keeps track of automatic insertions when a palette is shown; then if a different 
            // choice is picked from the palette, the addReplacement function knows how many characters to delete
            // that is useful when a palette choice inserts a selection that is more than a single character
			if (! window.latinTypeAssist) {
                if (debug) console.log('Not latinTypeAssist.')
                if (debug) console.log('Adding ',kbdEventList[evt.key][0][1])
				add(kbdEventList[evt.key][0][1])
                window.autoInsertedFromPalette = kbdEventList[evt.key][0][1]
                if (debug) console.log('autoInsertedFromPalette is',autoInsertedFromPalette)
				}
			else {
                if (debug) console.log('LatinTypeAssist.\nAdding ',evt.key,'\nautoInsertedFromPalette is ', evt.key)
                add(evt.key)
                window.autoInsertedFromPalette = evt.key
                }
			
			// display the selection list
			drawCharSelectionPanel(evt.key)
			evt.preventDefault()
			}
			
		// No type-assist buffer, and unrecognised character
        else {
            if (debug) console.log('Unrecognised character.')
            document.getElementById("charChoice").innerHTML = ''
            }
		}
	}
	
	
// decipher key up codes
function showUp (evt) {
    evt.key = ''
	}


function addVowel (ch) {
    // this is a dummy function for scripts that don't need to rearrange vowels
    // script that do (eg. Thai) define their own addVowel function
    }


function makePaletteX (mappingTable) {
    var output = ''
	var fulllist = mappingTable.split('\n')
	for (let i=0;i<fulllist.length;i++) {
        list = fulllist[i]
        //list = list.trim('') // can't be used because it removes NNBSP
        list = list.replace(/^[ \t\uFEFF]+|[\ \t\uFEFF]+$/g, '')
        list = list.replace(/ +/g,' ')
        list = list.replace(/\u0008/g,'')
        if (list==='') continue
		
        out = ''
        var charArray = list.split('\u0020')
        var theKey = charArray.shift()
        out = '<b>'+theKey+'</b>\n'
        for (let j=0;j<charArray.length;j++) {
            if (window.latinTypeAssist) {
                out += '<span class="t" onclick="add(\''+charArray[j]+'\')">'+charArray[j]+'</span>\n'
                }
            else {
                out += '<span class="t" onmouseover="showtrans(\''+charArray[j+1]+'\')" onmouseout="hidetrans()" onclick="add'
                if (charArray[j+1] && charArray[j+1].includes('-')) out += 'Vowel'
                out += '(\''+charArray[j+1]+'\')">'+charArray[j]+'</span>\n'
                j++
                }
            }
        output += out
        }
	document.getElementById('transcriptionPalette').innerHTML = output
	}


// new version to remove the mouseover and replace the transliteration with the character itself
function makePalette (mappingTable) {
    var output = ''
	var fulllist = mappingTable.split('\n')
	for (let i=0;i<fulllist.length;i++) {
        list = fulllist[i]
        //list = list.trim('') // can't be used because it removes NNBSP
        list = list.replace(/^[ \t\uFEFF]+|[\ \t\uFEFF]+$/g, '')
        list = list.replace(/ +/g,' ')
        list = list.replace(/\u0008/g,'')
        if (list==='') continue
		
        out = ''
        var charArray = list.split('\u0020')
        var theKey = charArray.shift()
        out = '<b>'+theKey+'</b>\n'
        for (let j=0;j<charArray.length;j++) {
            if (window.latinTypeAssist) {
                out += '<span class="t" onclick="add(\''+charArray[j]+'\')">'+charArray[j]+'</span>\n'
                }
            else {
                out += `<span class="t" `
                out += `onmouseover="showtrans(\''+charArray[j]+'\')" onmouseout="hidetrans()"`
                out += ` onclick="add`
                if (charArray[j+1] && charArray[j+1].includes('-')) out += 'Vowel'
                out += '(\''+charArray[j+1]+'\')">'+charArray[j+1]+'</span>\n'
                j++
                }
            }
        output += out
        }
	document.getElementById('transcriptionPalette').innerHTML = output
	}



function makeKbdEventList (mappingTable) {
    // populates window.kbdEventList object from a map of transcription characters (either typeAssistMap or latinTypeAssistMap)
    window.kbdEventList = {}
	
	// convert the mapping list from a long string with spaces and line-breaks to an object
    mappingTable = mappingTable.replace(/\u0008/g,'')
	var fulllist = mappingTable.split('\n')
	for (let i=0;i<fulllist.length;i++) {
        list = fulllist[i]
        list = list.trim()
        list = list.replace(/\s+/g,' ')
        if (list==='') continue

        var charArray = list.split(' ')
        var theKey = charArray.shift()

		window.kbdEventList[theKey] = []
        
        for (let j=0;j<charArray.length;j++) {
            if (window.latinTypeAssist) {
                newItem = [charArray[j], charArray[j]]
                window.kbdEventList[theKey].push(newItem)
                }
            else {
                newItem = [charArray[j], charArray[j+1]]
                window.kbdEventList[theKey].push(newItem)
                j++
                }
            }
        }
	}




function toggleInvisibles () {
    // toggle between showing invisible characters or visible mnemonics in the text area
    
    var str = document.getElementById('output').value
    // in the following list put the longest abbreviations at the top, to avoid clashes
    var invisibles = [
        { cp:"\u202F", abbr:"ⁿⁿᵇˢᵖ"},
        { cp:"\u200C", abbr:"ᶻʷⁿʲ"},
        { cp:"\u200B", abbr:"ᶻʷˢᵖ"},
        { cp:"\u00A0", abbr:"ⁿᵇˢᵖ"},
        { cp:"\u180B", abbr:"ᶠᵛˢ¹"},
        { cp:"\u180C", abbr:"ᶠᵛˢ²"},
        { cp:"\u180D", abbr:"ᶠᵛˢ³"},
        { cp:"\u200D", abbr:"ᶻʷʲ"},
        { cp:"\u2067", abbr:"ʳˡⁱ"},
        { cp:"\u2066", abbr:"ˡʳⁱ"},
        { cp:"\u202B", abbr:"ʳˡᵉ"},
        { cp:"\u202A", abbr:"ˡʳᵉ"},
        { cp:"\u2069", abbr:"ᵖᵈⁱ"},
        { cp:"\u202C", abbr:"ᵖᵈᶠ"},
        { cp:"\u200F", abbr:"ʳˡᵐ"},
        { cp:"\u200E", abbr:"ˡʳᵐ"},
        { cp:"\u061C", abbr:"ᵃˡᵐ"},
        { cp:"\u202D", abbr:"ˡʳᵒ"},
        { cp:"\u202E", abbr:"ʳˡᵒ"},
        { cp:"\u180E", abbr:"ᵐᵛˢ"},
        { cp:"\u00AD", abbr:"ˢʰʸ"},
        { cp:"\u034F", abbr:"ᶜᵍʲ"},
        { cp:"\u070F", abbr:"ˢᵃᵐ"},
        { cp:"\u0F0C", abbr:"ⁿᵇ"},
        { cp:"\u2060", abbr:"ʷʲ"},

        { cp:"\u2002", abbr:"ᵉⁿˢᵖ"},
        { cp:"\u2003", abbr:"ᵉᵐˢᵖ"},
        { cp:"\u2009", abbr:"ᵗʰˢᵖ"},
        { cp:"\u2007", abbr:"ᶠˢᵖ"},
        //{ cp:"\u0020", abbr:"⁺"},
		
		// miao tones
        { cp:"\u{16F90}", abbr:"ᵐᵗᵗʳ"},
        { cp:"\u{16FF8}", abbr:"ᵐᵗʳ"},
        { cp:"\u{16F91}", abbr:"ᵐᵗᵃ"},
        { cp:"\u{16F92}", abbr:"ᵐᵗᵇ"},
        ]
    
    // ascertain which way to switch
    var show = false
    for (let i=0;i<invisibles.length;i++) {
        if (str.match(invisibles[i].cp)) {
            show = true
            break
            }
        }
    
    // make the substitutions
    var re
    if (show) {
        for (let i=0;i<invisibles.length;i++) {
            re = new RegExp(invisibles[i].cp, 'g')
            str = str.replace(re, invisibles[i].abbr)
            }
        }
    else {
        for (let i=0;i<invisibles.length;i++) {
            re = new RegExp(invisibles[i].abbr, 'g')
            str = str.replace(re, invisibles[i].cp)
            }
        }

    document.getElementById('output').value = str
    }



function parseSpreadsheet () {
    // create an object called spreadsheetRows from the Google spreadsheet data
	// newStyleSpreadsheet is defined in the db.js file - if set, the character column is one higher
	// it should eventually become the only pattern

    if (typeof window.spreadsheet == 'undefined') {
		alert("Spreadsheet not loaded !")
		return
		}
    
    if (typeof window.newStyleSpreadsheet == 'undefined') {
		// make an object from the spreadsheet
		var temp = window.spreadsheet.split('\n')
		window.spreadsheetRows = {}
		for (var x=0; x<temp.length; x++) {
			if (temp[x].trim() == '') continue
			var items = temp[x].split('\t')
			if (items[0] === '') continue

			window.spreadsheetRows[items[0]] = ['0']
			for (let i=1;i<items.length;i++) window.spreadsheetRows[items[0]].push(items[i])
			}
		}
	else {
		// make an object from the spreadsheet
		var temp = window.spreadsheet.split('\n')
		window.spreadsheetRows = {}
		for (var x=0; x<temp.length; x++) {
			if (temp[x].trim() == '') continue
			var items = temp[x].split('\t')
			if (items[1] === '') continue

			window.spreadsheetRows[items[1]] = ['0']
			for (let i=1;i<items.length;i++) window.spreadsheetRows[items[1]].push(items[i])
			}
	}
	}
	


function makeLatinTypeAssistMapOLD () {
	// create a data object for the Latin only palette
	// uses latinRegister from shared24/latinregister
	
	// quit if the spreadsheet hasn't been updated
	if (typeof cols.class === 'undefined') {
		console.log("latinTypeAssistMap exists. Quitting.")
		return
		}
	
	// get the data
	var collector = []
	for (item in spreadsheetRows) {
		if (spreadsheetRows[item][cols.latin]) {
			var items = spreadsheetRows[item][cols.latin].split(' ')
			for (let i=0;i<items.length;i++) collector.push(items[i])
			}
		else if (typeof cols.latin === 'undefined') {
			if (spreadsheetRows[item][cols.transLoc]) collector.push(spreadsheetRows[item][cols.transLoc])
			//if (cols.transcKey && spreadsheetRows[item][cols.transcKey]) collector.push(spreadsheetRows[item][cols.transcKey])
			if (cols.transcription && spreadsheetRows[item][cols.transcription]) {
				var items = spreadsheetRows[item][cols.transcription].split(' ')
				for (let i=0;i<items.length;i++) collector.push(items[i])
				}
			if (cols.ipaLoc && spreadsheetRows[item][cols.ipaLoc]) {
				items = spreadsheetRows[item][cols.ipaLoc].split(' ')
				for (let i=0;i<items.length;i++) collector.push(items[i])
				}
			}
		}
	
	// remove duplicates from collector
	const uniqueSet = new Set(collector)
	collector = [...uniqueSet]
	
	outObj = {}
	notInRegister = ''
	for (let i=0;i<collector.length;i++) {
		var asciiOnly = true
		for (let c=0;c<collector[i].length;c++) {
			if (collector[i].codePointAt(c) > 127) asciiOnly = false
			continue
			}
		if (asciiOnly) continue


        lookup = collector[i].normalize('NFD')[0]

        if (latinRegister[lookup]) { 
			if (outObj[latinRegister[lookup]]) outObj[latinRegister[lookup]] +=  ' '+collector[i]
			else outObj[latinRegister[lookup]] = latinRegister[lookup] + ' ' +collector[i]
			}
		else notInRegister += collector[i] + '  '
       /* if (latinRegister[collector[i][0]]) { 
			if (outObj[latinRegister[collector[i][0]]]) outObj[latinRegister[collector[i][0]]] +=  ' '+collector[i]
			else outObj[latinRegister[collector[i][0]]] = latinRegister[collector[i][0]] + ' ' +collector[i]
			}
		else notInRegister += collector[i] + '  '*/
		}
	
	var outArray = Object.values(outObj)
	outArray.sort()
	
	window.latinTypeAssistMap = ''
	for (i=0;i<outArray.length;i++) window.latinTypeAssistMap += outArray[i] + '\n'
	
	console.log('latinTypeAssistMap done')
	console.log('Register didn\'t have:', notInRegister)
	}


function reverseTransliterate (str) {
// uses array created in setup.js to convert Latin back to native

str = ' '+str
// exclusions list deals with characters problematic for regex
var exclusions = new Set(['(',')','[',']','.',' ','|','+','*','?'])
var exclusionList = []

for (i=0;i<revTranslitArray.length;i++) {
	if (exclusions.has(revTranslitArray[i][0])) { exclusionList.push(i); continue }
	re = new RegExp(revTranslitArray[i][0],'g')
	//console.log(re)
	str = str.replace(re, revTranslitArray[i][1])
	}

// replace any exclusions
for (x=0;x<exclusionList.length;x++) {
	xre = new RegExp('\\'+revTranslitArray[exclusionList[x]][0],'g')
	str = str.replace(xre, revTranslitArray[exclusionList[x]][1])
	}
return str.trim()
}




function makeLatinTypeAssistMap () {
	// create a data object for the Latin only palette
	// uses latinRegister from shared24/latinregister
    // this new version look for latinPanel in the scriptdb file and uses that if available
	
	// quit if the spreadsheet hasn't been updated
	if (typeof cols.class === 'undefined') {
		console.log("latinTypeAssistMap exists. Quitting.")
		return
		}
	
	// get the data
    if (typeof latinPanel === 'undefined') {
	var collector = []
        for (item in spreadsheetRows) {
            if (spreadsheetRows[item][cols.latin]) {
                var items = spreadsheetRows[item][cols.latin].split(' ')
                for (let i=0;i<items.length;i++) collector.push(items[i])
                }
            else if (typeof cols.latin === 'undefined') {
                if (spreadsheetRows[item][cols.transLoc]) collector.push(spreadsheetRows[item][cols.transLoc])
                //if (cols.transcKey && spreadsheetRows[item][cols.transcKey]) collector.push(spreadsheetRows[item][cols.transcKey])
                if (cols.transcription && spreadsheetRows[item][cols.transcription]) {
                    var items = spreadsheetRows[item][cols.transcription].split(' ')
                    for (let i=0;i<items.length;i++) collector.push(items[i])
                    }
                if (cols.ipaLoc && spreadsheetRows[item][cols.ipaLoc]) {
                    items = spreadsheetRows[item][cols.ipaLoc].split(' ')
                    for (let i=0;i<items.length;i++) collector.push(items[i])
                    }
                }
            }

        // remove duplicates from collector
        const uniqueSet = new Set(collector)
        collector = [...uniqueSet]
        }
    else {
        collector = latinPanel.split(' ')
        }
	
	outObj = {}
	notInRegister = ''
	for (let i=0;i<collector.length;i++) {
		var asciiOnly = true
		for (let c=0;c<collector[i].length;c++) {
			if (collector[i].codePointAt(c) > 127) asciiOnly = false
			continue
			}
		if (asciiOnly) continue


        lookup = collector[i].normalize('NFD')[0]

        if (latinRegister[lookup]) { 
			if (outObj[latinRegister[lookup]]) outObj[latinRegister[lookup]] +=  ' '+collector[i]
			else outObj[latinRegister[lookup]] = latinRegister[lookup] + ' ' +collector[i]
			}
		else notInRegister += collector[i] + '  '
       /* if (latinRegister[collector[i][0]]) { 
			if (outObj[latinRegister[collector[i][0]]]) outObj[latinRegister[collector[i][0]]] +=  ' '+collector[i]
			else outObj[latinRegister[collector[i][0]]] = latinRegister[collector[i][0]] + ' ' +collector[i]
			}
		else notInRegister += collector[i] + '  '*/
		}
	
	var outArray = Object.values(outObj)
	outArray.sort()
	
	window.latinTypeAssistMap = ''
	for (i=0;i<outArray.length;i++) window.latinTypeAssistMap += outArray[i] + '\n'
	
	console.log('latinTypeAssistMap done')
	console.log('Register didn\'t have:', notInRegister)
	}







function getVocabOLD (str) {
// converts a string of native text to native_text||ipa_transcription
	var parts = str.split('|')
	if (parts.length===1) parts[1] = ''
	var ipa=toLatin(parts[0])
	ipa = ipa.replace(/altfirst|altlast|alts|alt|syllable/g,'')
	ipa = ipa.replace(/"/g,'')
	ipa = ipa.replace(/span|class/g,'')
	ipa = ipa.replace(/=|<|>/g,'')
	ipa = ipa.replace(/\//g,'')
	ipa = ipa.replace(/\s+/g,' ').trim()
	//ipa = ipa.replace(/\<span class=syllable\>/g,'').replace(/<span class=alt>/,'').replace(/span\>/g,'').replace(regex,'')
	out = condense(parts[0])+'|'+parts[1]+'|'+ipa
	
	return out
	}



function getVocab (foreign, meaning, notes, transcription) {
// converts a string of native text to native_text||transcription_transcription
	if ( typeof meaning == 'undefined' ) meaning = ''
	if ( typeof notes == 'undefined' ) notes = ''
	if ( typeof transcription == 'undefined' ) transcription = ''

	transcription = cleanTranscription(transcription)
	out = foreign+'|'+meaning+'|'+transcription
	if (notes) out += '|'+notes
	
	return out
	}




function getVocabWithAlt (term, meaning, transcription, notes, alt) {
// converts a string of native text to native_text||transcription_transcription
	if ( typeof meaning == 'undefined' ) meaning = ''
	if ( typeof notes == 'undefined' ) notes = ''
	if ( typeof transcription == 'undefined' ) transcription = ''
	if ( typeof alt == 'undefined' ) notes = ''

	transcription = cleanTranscription(transcription)
	out = term+'|'+meaning
	if (transcription) out += '|'+transcription
	if (notes || alt) out += '|'+alt
	if (notes) out += '|'+notes
	
	return out
	}




function cleanTranscription (str) {
// removes markup from the result of a conversion to transcription
	str = str.replace(/altfirst|altlast|alts|alt|syllable/g,'')
	str = str.replace(/"/g,'')
	str = str.replace(/span|class/g,'')
	str = str.replace(/=|<|>/g,'')
	str = str.replace(/\//g,'')
	str = str.replace(/\s+/g,' ').trim()
	
	return str
	}




function casefold (str) {

var casefoldPairs = {
"µ":"μ",
"ß":"ss",
"ŉ":"ʼn",
"ſ":"s",
"ǰ":"ǰ",
"ͅ":"ι",
"ΐ":"ΐ",
"ΰ":"ΰ",
"ς":"σ",
"ϐ":"β",
"ϑ":"θ",
"ϕ":"φ",
"ϖ":"π",
"ϰ":"κ",
"ϱ":"ρ",
"ϵ":"ε",
"և":"եւ",
"ᏸ":"Ᏸ",
"ᏹ":"Ᏹ",
"ᏺ":"Ᏺ",
"ᏻ":"Ᏻ",
"ᏼ":"Ᏼ",
"ᏽ":"Ᏽ",
"ᲀ":"в",
"ᲁ":"д",
"ᲂ":"о",
"ᲃ":"с",
"ᲄ":"т",
"ᲅ":"т",
"ᲆ":"ъ",
"ᲇ":"ѣ",
"ᲈ":"ꙋ",
"ẖ":"ẖ",
"ẗ":"ẗ",
"ẘ":"ẘ",
"ẙ":"ẙ",
"ẚ":"aʾ",
"ẛ":"ṡ",
"ẞ":"ss",
"ὐ":"ὐ",
"ὒ":"ὒ",
"ὔ":"ὔ",
"ὖ":"ὖ",
"ᾀ":"ἀι",
"ᾁ":"ἁι",
"ᾂ":"ἂι",
"ᾃ":"ἃι",
"ᾄ":"ἄι",
"ᾅ":"ἅι",
"ᾆ":"ἆι",
"ᾇ":"ἇι",
"ᾈ":"ἀι",
"ᾉ":"ἁι",
"ᾊ":"ἂι",
"ᾋ":"ἃι",
"ᾌ":"ἄι",
"ᾍ":"ἅι",
"ᾎ":"ἆι",
"ᾏ":"ἇι",
"ᾐ":"ἠι",
"ᾑ":"ἡι",
"ᾒ":"ἢι",
"ᾓ":"ἣι",
"ᾔ":"ἤι",
"ᾕ":"ἥι",
"ᾖ":"ἦι",
"ᾗ":"ἧι",
"ᾘ":"ἠι",
"ᾙ":"ἡι",
"ᾚ":"ἢι",
"ᾛ":"ἣι",
"ᾜ":"ἤι",
"ᾝ":"ἥι",
"ᾞ":"ἦι",
"ᾟ":"ἧι",
"ᾠ":"ὠι",
"ᾡ":"ὡι",
"ᾢ":"ὢι",
"ᾣ":"ὣι",
"ᾤ":"ὤι",
"ᾥ":"ὥι",
"ᾦ":"ὦι",
"ᾧ":"ὧι",
"ᾨ":"ὠι",
"ᾩ":"ὡι",
"ᾪ":"ὢι",
"ᾫ":"ὣι",
"ᾬ":"ὤι",
"ᾭ":"ὥι",
"ᾮ":"ὦι",
"ᾯ":"ὧι",
"ᾲ":"ὰι",
"ᾳ":"αι",
"ᾴ":"άι",
"ᾶ":"ᾶ",
"ᾷ":"ᾶι",
"ᾼ":"αι",
"ι":"ι",
"ῂ":"ὴι",
"ῃ":"ηι",
"ῄ":"ήι",
"ῆ":"ῆ",
"ῇ":"ῆι",
"ῌ":"ηι",
"ῒ":"ῒ",
"ΐ":"ΐ",
"ῖ":"ῖ",
"ῗ":"ῗ",
"ῢ":"ῢ",
"ΰ":"ΰ",
"ῤ":"ῤ",
"ῦ":"ῦ",
"ῧ":"ῧ",
"ῲ":"ὼι",
"ῳ":"ωι",
"ῴ":"ώι",
"ῶ":"ῶ",
"ῷ":"ῶι",
"ῼ":"ωι",
"ꭰ":"Ꭰ",
"ꭱ":"Ꭱ",
"ꭲ":"Ꭲ",
"ꭳ":"Ꭳ",
"ꭴ":"Ꭴ",
"ꭵ":"Ꭵ",
"ꭶ":"Ꭶ",
"ꭷ":"Ꭷ",
"ꭸ":"Ꭸ",
"ꭹ":"Ꭹ",
"ꭺ":"Ꭺ",
"ꭻ":"Ꭻ",
"ꭼ":"Ꭼ",
"ꭽ":"Ꭽ",
"ꭾ":"Ꭾ",
"ꭿ":"Ꭿ",
"ꮀ":"Ꮀ",
"ꮁ":"Ꮁ",
"ꮂ":"Ꮂ",
"ꮃ":"Ꮃ",
"ꮄ":"Ꮄ",
"ꮅ":"Ꮅ",
"ꮆ":"Ꮆ",
"ꮇ":"Ꮇ",
"ꮈ":"Ꮈ",
"ꮉ":"Ꮉ",
"ꮊ":"Ꮊ",
"ꮋ":"Ꮋ",
"ꮌ":"Ꮌ",
"ꮍ":"Ꮍ",
"ꮎ":"Ꮎ",
"ꮏ":"Ꮏ",
"ꮐ":"Ꮐ",
"ꮑ":"Ꮑ",
"ꮒ":"Ꮒ",
"ꮓ":"Ꮓ",
"ꮔ":"Ꮔ",
"ꮕ":"Ꮕ",
"ꮖ":"Ꮖ",
"ꮗ":"Ꮗ",
"ꮘ":"Ꮘ",
"ꮙ":"Ꮙ",
"ꮚ":"Ꮚ",
"ꮛ":"Ꮛ",
"ꮜ":"Ꮜ",
"ꮝ":"Ꮝ",
"ꮞ":"Ꮞ",
"ꮟ":"Ꮟ",
"ꮠ":"Ꮠ",
"ꮡ":"Ꮡ",
"ꮢ":"Ꮢ",
"ꮣ":"Ꮣ",
"ꮤ":"Ꮤ",
"ꮥ":"Ꮥ",
"ꮦ":"Ꮦ",
"ꮧ":"Ꮧ",
"ꮨ":"Ꮨ",
"ꮩ":"Ꮩ",
"ꮪ":"Ꮪ",
"ꮫ":"Ꮫ",
"ꮬ":"Ꮬ",
"ꮭ":"Ꮭ",
"ꮮ":"Ꮮ",
"ꮯ":"Ꮯ",
"ꮰ":"Ꮰ",
"ꮱ":"Ꮱ",
"ꮲ":"Ꮲ",
"ꮳ":"Ꮳ",
"ꮴ":"Ꮴ",
"ꮵ":"Ꮵ",
"ꮶ":"Ꮶ",
"ꮷ":"Ꮷ",
"ꮸ":"Ꮸ",
"ꮹ":"Ꮹ",
"ꮺ":"Ꮺ",
"ꮻ":"Ꮻ",
"ꮼ":"Ꮼ",
"ꮽ":"Ꮽ",
"ꮾ":"Ꮾ",
"ꮿ":"Ꮿ",
"ﬀ":"ff",
"ﬁ":"fi",
"ﬂ":"fl",
"ﬃ":"ffi",
"ﬄ":"ffl",
"ﬅ":"st",
"ﬆ":"st",
"ﬓ":"մն",
"ﬔ":"մե",
"ﬕ":"մի",
"ﬖ":"վն",
"ﬗ":"մխ",
}


var chars=[...str]
for (i=0;i<chars.length;i++) {
	if (casefoldPairs[chars[i]]) chars[i] = casefoldPairs[chars[i]]
	else chars[i] = chars[i].toLowerCase()
	}

return chars.join('')
}




function sortOutput (text, unique=false) {
    // sorts all the characters in the output field by Unicode code point order
    // unique indicates whether or not to reduce to one instance of each character
    
    if (unique) {
        var charSet = new Set([...text])
        console.log(charSet)
        charList = [...charSet]
        }
    else charList=[...text]
    console.log(charList)
    sorted=charList.sort()
    return sorted.join(' ')
    }




function sortOutput (text, unique=false, word=false) {
    // sorts all the characters in the output field by Unicode code point order
    // unique indicates whether or not to reduce to one instance of each character
    // word indicates to segment on spaces, rather than individual characters
    
    text = text.replace(/s+/g,' ')
    
    if (unique) {
        var charSet = new Set([...text])
        console.log(charSet)
        charList = [...charSet]
        }
    else if (word) {
        charList = text.split(' ')
        }
    else charList=[...text]
    console.log('charList',charList)
    sorted=charList.sort()
    return sorted.join(' ')
    }








function charCheckerOLD () {
	// scan the text in the text area for unexpected characters/sequences and report
    // window.charCheckerList is set in localcode.js
	
	var text = getHighlightedText(_output)
    var out = ''
    var counter = 0
    
    // check whether any of the items in charCheckerList appear
    for (var i=0;i<window.charCheckerList.length;i++) {
        var wrong = new RegExp(charCheckerList[i].wrong,"g")
        var matchListWrong = text.match(wrong)
        if (matchListWrong === null) matchListWrong = []
        var right = new RegExp(charCheckerList[i].right,"g")
        var matchListRight = text.match(right)
        if (matchListRight === null) matchListRight = []
        //console.log(matchList)
        //if (matchList && matchList.length > 0) console.log('Found ',charCheckerList[i].wrong,matchList.length,'times.')
        
        if (matchListWrong.length > 0) {
            counter++
            out += `<tr>`
            out += `<td class="cCheckCount`
            if (matchListWrong.length > 0)  out += ` cCheckHighlight`
            out += `">${ matchListWrong.length }</td>
            <td class="cCheckWrong">${ makeCharacterLink(charCheckerList[i].wrong,'', 'ks', 'rtl') }</td>
            <td class="cCheckCount">${ matchListRight.length }</td>
            <td class="cCheckRight">${ makeCharacterLink(charCheckerList[i].right,'', 'ks', 'rtl') }</td>
            `

            console.log('matchListWrong.length', matchListWrong.length)
            if (matchListWrong.length === 0)  out += `<td class="cCheckFix" style="color:lightgreen; font-size: 1.5rem; font-weight: bold; font-style: italic; padding-inline: 1rem;">OK</td>`
            else out += `<td class="cCheckFix" style="padding-inline: 1rem;"><button onclick="_output.value = _output.value.replace(/${ charCheckerList[i].wrong }/g,'${ charCheckerList[i].right }'); charChecker();">Fix</button></td>
            </tr>`
            }
        }

    if (out !== '') {
        var table = '<table class="charChecker"><thead>'
        table += '<tr><th>&nbsp;</th><th>NOT recommended</th><th>&nbsp;</th><th>Recommended</th></tr>'
        table += '</thead><tbody>'
        table += out
        out += '</tbody></table>'
        }
    else table = `<p>No issues found.</p>`
    
    document.getElementById('transcription').innerHTML = table
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcriptionWrapper').style.display = 'block' 
	}


function charCheckerX () {
	// scan the text in the text area for unexpected characters/sequences and report
    // window.charCheckerList is set in localcode.js
	
	var text = getHighlightedText(_output)
    var out = ''
    var counter = 0
    
    // check whether any of the items in charCheckerList appear
    for (var i=0;i<window.charCheckerList.length;i++) {
        var wrong = new RegExp(charCheckerList[i].wrong,"g")
        var matchListWrong = text.match(wrong)
        if (matchListWrong === null) matchListWrong = []
        var right = new RegExp(charCheckerList[i].right,"g")
        var matchListRight = text.match(right)
        if (matchListRight === null) matchListRight = []
        
        if (matchListWrong.length > 0) {
            counter++
            out += `<tr>`
            out += `<td class="cCheckCount`
            if (matchListWrong.length > 0)  out += ` cCheckHighlight`
            out += `">${ matchListWrong.length }</td>
            <td class="cCheckWrong">${ makeCharacterLink(charCheckerList[i].wrong,'', 'ks', 'rtl') }</td>
            <td class="cCheckCount">${ matchListRight.length }</td>
            <td class="cCheckRight">${ makeCharacterLink(charCheckerList[i].right,'', 'ks', 'rtl') }</td>
            `

            if (matchListWrong.length === 0)  out += `<td class="cCheckFix" style="color:lightgreen; font-size: 1.5rem; font-weight: bold; font-style: italic; padding-inline: 1rem;">OK</td>`
            else out += `<td class="cCheckFix" style="padding-inline: 1rem;"><button onclick="_output.value = _output.value.replace(/${ charCheckerList[i].wrong }/g,'${ charCheckerList[i].right }'); charChecker();">Fix</button></td>
            </tr>`
            }
        }
    
    // check for unrecognised characters
    var chars = [...text]
    unrecognised = []
    for (i=0;i<chars.length;i++) {
        //if (typeof spreadsheetRows[chars[i]] === 'undefined' && chars[i] !== ' ' && chars[i] !== '\u000A') {
        if (typeof spreadsheetRows[chars[i]] === 'undefined' && chars[i].codePointAt(0) > 128) {
            unrecognised.push(chars[i])
            }
        }
    const uniqueSet = new Set(unrecognised)
    unrecognised = [...uniqueSet]
    unknown = ''
    if (unrecognised.length > 0) {
        for (i=0;i<unrecognised.length;i++) {
             unknown += `<tr><td class="cCheckWrong">${ makeCharacterLink(unrecognised[i],'', 'ks', 'ltr') }</td></tr>`
            }
        }

    var table = ''
    if (out !== '') {
        table += '<table class="charChecker"><thead>'
        table += '<tr><th>&nbsp;</th><th>NOT recommended</th><th>&nbsp;</th><th>Recommended</th></tr>'
        table += '</thead><tbody>'
        table += out
        out += '</tbody></table>'
        }
    
    if (unknown !== '') {
        table += '<table class="charChecker" style="margin-block-start:2rem; width: 30%; margin: auto;"><thead>'
        table += '<tr><th>NOT recognised</th></tr>'
        table += '</thead><tbody>'
        table += unknown
        out += '</tbody></table>'
        }
    
    if (out === '' && unknown === '') table = `<p>No issues found.</p>`
    
    document.getElementById('transcription').innerHTML = table
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcriptionWrapper').style.display = 'block' 
	}





function charChecker () {
	// scan the text in the text area for unexpected characters/sequences and report
    // window.charCheckerList is set in localcode.js
	
	var text = getHighlightedText(_output)
    var out = ''
    var counter = 0
    
    // check whether any of the items in charCheckerList appear
    for (var i=0;i<window.charCheckerList.length;i++) {
        var wrong = new RegExp(charCheckerList[i].wrong,"g")
        var matchListWrong = text.match(wrong)
        if (matchListWrong === null) matchListWrong = []
        var right = new RegExp(charCheckerList[i].right,"g")
        var matchListRight = text.match(right)
        if (matchListRight === null) matchListRight = []
        
        if (matchListWrong.length > 0) {
            counter++
            out += `<tr>`
            out += `<td class="cCheckCount`
            if (matchListWrong.length > 0)  out += ` cCheckHighlight`
            out += `">${ matchListWrong.length }</td>
            <td class="cCheckWrong">${ makeCharacterLink(charCheckerList[i].wrong,'', 'ks', 'rtl') }</td>
            <td class="cCheckCount">${ matchListRight.length }</td>
            <td class="cCheckRight">${ makeCharacterLink(charCheckerList[i].right,'', 'ks', 'rtl') }</td>
            `

            if (matchListWrong.length === 0)  out += `<td class="cCheckFix" style="color:lightgreen; font-size: 1.5rem; font-weight: bold; font-style: italic; padding-inline: 1rem;">OK</td>`
            else out += `<td class="cCheckFix" style="padding-inline: 1rem;"><button onclick="_output.value = _output.value.replace(/${ charCheckerList[i].wrong }/g,'${ charCheckerList[i].right }'); charChecker();">Fix</button></td>
            </tr>`
            }
        }




    // check for incorrect order of combining marks
    if (typeof checkOrder !== 'undefined') {
        order = checkOrder(text)
        console.log('ORDER', order)
        }
    else order = ''




    // check for unrecognised characters
    var chars = [...text]
    unrecognised = []
    for (i=0;i<chars.length;i++) {
        //if (typeof spreadsheetRows[chars[i]] === 'undefined' && chars[i] !== ' ' && chars[i] !== '\u000A') {
        if (typeof spreadsheetRows[chars[i]] === 'undefined' && chars[i].codePointAt(0) > 128) {
            unrecognised.push(chars[i])
            }
        }
    const uniqueSet = new Set(unrecognised)
    unrecognised = [...uniqueSet]
    unknown = ''
    if (unrecognised.length > 0) {
        for (i=0;i<unrecognised.length;i++) {
             unknown += `<tr><td class="cCheckWrong">${ makeCharacterLink(unrecognised[i],'', 'ks', 'ltr') }</td></tr>`
            }
        }





    var table = ''
    if (out !== '') {
        table += '<table class="charChecker"><thead>'
        table += '<tr><th>&nbsp;</th><th>NOT recommended</th><th>&nbsp;</th><th>Recommended</th></tr>'
        table += '</thead><tbody>'
        table += out
        out += '</tbody></table>'
        }
    
    
    if (order) { console.log('hello')
        table += '<table class="charChecker" style="padding-block-start:4rem; width: 70%; margin: auto;"><thead>'
        table += '<tr><th>Ordering problems</th></tr>'
        table += '</thead><tbody>'
        table += order
        table += '</tbody></table>'
        }


    if (unknown !== '') {
        table += '<table class="charChecker" style="padding-block-start:4rem; width: 30%; margin: auto;"><thead>'
        table += '<tr><th>NOT recognised</th></tr>'
        table += '</thead><tbody>'
        table += unknown
        out += '</tbody></table>'
        }
    
    if (out === '' && order === '' && unknown === '') table = `<p>No issues found.</p>`
    
    document.getElementById('transcription').innerHTML = table
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcriptionWrapper').style.display = 'block' 
	}




function setMarks () {
    // sets the global variable marks as a set containing all combining marks in the spreadsheet
    for (var char in spreadsheetRows) {
        //console.log(char,spreadsheetRows[char][cols['class']])
        if (spreadsheetRows[char][cols['class']].startsWith('M')) window.marks.add(char)
        }
    return
    }




function addVariantLigatures ( type ) {
    // add font variants to the output
    // type is the value to add or remove
    
    var values = _output.style.fontVariantLigatures
    
    if (values.includes(type)) values = values.replace(type, '')
    else values += ' '+type
    
    _output.style.fontVariantLigatures = values
    }



function applyFontPosition (setting) {
    // sets the value of font-variant-position
    
    _output.style.fontVariantPosition = setting
    }



function applyFontKerning (setting) {
    // sets the value of font-kerning
    
    _output.style.fontKerning = setting
    }


function applyFontVariantCaps (setting) {
    // sets the value of font-variant-caps
    
    _output.style.fontVariantCaps = setting
    }



function applyVariantNumericOLD ( type ) {
    // add font variants to the output
    // type is the value to add or remove
    console.log('Change to', type)
    var values = _output.style.fontVariantNumeric
    
    if (type === 'normal') {
        _output.style.fontVariantNumeric = 'normal'
        document.getElementById('liningNums').checked = true
        document.getElementById('proportionalNums').checked = true
        document.getElementById('diagonalFractions').checked = true
        document.getElementById('ordinalVariant').checked = false
        document.getElementById('slashedZeroVariant').checked = false
        return
        }
    else values = values.replace(/normal/,'')
    
    if (type === 'lining-nums' && values.includes('oldstyle-nums')) {
        values = values.replace(/oldstyle-nums/, 'lining-nums')
        document.getElementById('variantNumericNormal').checked = false
        }
    
    else if (type === 'oldstyle-nums' && values.includes('lining-nums')) {
        values = values.replace(/lining-nums/, 'oldstyle-nums')
         document.getElementById('variantNumericNormal').checked = false
        }
   
    else if (type === 'proportional-nums' && values.includes('tabular-nums')) {
        values = values.replace(/tabular-nums/, 'proportional-nums')
        document.getElementById('variantNumericNormal').checked = false
        }
    
    else if (type === 'tabular-nums' && values.includes('proportional-nums')) {
        values = values.replace(/proportional-nums/, 'tabular-nums')
         document.getElementById('variantNumericNormal').checked = false
        }
   
    else if (type === 'diagonal-fractions' && values.includes('stacked-fractions')) {
        values = values.replace(/stacked-fractions/, 'diagonal-fractions')
        document.getElementById('variantNumericNormal').checked = false
        }
    
    else if (type === 'stacked-fractions' && values.includes('diagonal-fractions')) {
        values = values.replace(/diagonal-fractions/, 'stacked-fractions')
         document.getElementById('variantNumericNormal').checked = false
        }
   
    else { console.log('in final else')
        if (values.includes(type)) values = values.replace(type, '')
        else values += ' '+type
        document.getElementById('variantNumericNormal').checked = false
        }
    
    _output.style.fontVariantNumeric = values
    console.log('Result', _output.style.fontVariantNumeric)
    }




function applyVariantNumericLESS ( type ) {
    // add font variants to the output
    // type is the value to add or remove
    console.log('Change to', type)
    var values = _output.style.fontVariantNumeric
    
    if (type === 'normal') {
        _output.style.fontVariantNumeric = 'normal'
        document.getElementById('liningNums').checked = false
        document.getElementById('oldstyleNums').checked = false
        document.getElementById('proportionalNums').checked = false
        document.getElementById('tabularNums').checked = false
        document.getElementById('diagonalFractions').checked = false
        document.getElementById('ordinalVariant').checked = false
        document.getElementById('slashedZeroVariant').checked = false
        return
        }
    else values = values.replace(/normal/,'')
    
    if (type === 'lining-nums') {
        if (values.includes('oldstyle-nums')) values = values.replace(/oldstyle-nums/, 'lining-nums')
        else values += ' '+type
        document.getElementById('oldstyleNums').checked = false
        document.getElementById('variantNumericNormal').checked = false
        }
    
    if (type === 'oldstyle-nums') {
        if (values.includes('lining-nums')) values = values.replace(/lining-nums/, 'oldstyle-nums')
        else values += ' '+type
        document.getElementById('liningNums').checked = false
        document.getElementById('variantNumericNormal').checked = false
        }
   
    if (type === 'proportional-nums') {
        if (values.includes('tabular-nums')) values = values.replace(/tabular-nums/, 'proportional-nums')
        else values += ' '+type
        document.getElementById('tabular-nums').checked = false
        document.getElementById('variantNumericNormal').checked = false
        }
       
    if (type === 'tabular-nums') {
        if (values.includes('proportional-nums')) values = values.replace(/proportional-nums/, 'tabular-nums')
        else values += ' '+type
        document.getElementById('proportional-nums').checked = false
        document.getElementById('variantNumericNormal').checked = false
        }
       
    
    _output.style.fontVariantNumeric = values
    console.log('Result', _output.style.fontVariantNumeric)
    }





function applyVariantNumeric ( type ) {
    // add font variants to the output
    // type is the value to add or remove
    console.log('Change', type)
    var values = ''
    
    if (document.getElementById('variantNumericNormal').checked) {
        _output.style.fontVariantNumeric = 'normal'
        return
        }
    
    if (document.getElementById('liningNums').checked) values += ' lining-nums'
    if (document.getElementById('oldstyleNums').checked) values += ' oldstyle-nums'
   
    if (document.getElementById('proportionalNums').checked) values += ' proportional-nums'  
    if (document.getElementById('tabularNums').checked) values += ' tabular-nums'  
       
    if (document.getElementById('diagonalFractions').checked) values += ' diagonal-fractions'  
    if (document.getElementById('stackedFractions').checked) values += ' stacked-fractions'  
       
    if (document.getElementById('ordinalVariant').checked) values += ' ordinal'  
       
    if (document.getElementById('slashedZeroVariant').checked) values += ' slashed-zero'  
       
    
    _output.style.fontVariantNumeric = values.trim()
    console.log('Result', _output.style.fontVariantNumeric)
    }




function applyVariantEastAsian () {
    // add font variants to the output
    var values = ''
    
    if (document.getElementById('variantEastAsianNormal').checked) {
        _output.style.fontVariantEastAsian = 'normal'
        console.log('Result', _output.style.fontVariantEastAsian)
        return
        }
    
    if (document.getElementById('fullwidthVariant').checked) values += ' full-width'
    if (document.getElementById('proportionalwidthVariant').checked) values += ' proportional-width'
   
    if (document.getElementById('jis78Variant').checked) values += ' jis78'  
    if (document.getElementById('jis83Variant').checked) values += ' jis83'
    if (document.getElementById('jis90Variant').checked) values += ' jis90'  

    if (document.getElementById('simplifiedVariant').checked) values += ' simplified'   
    if (document.getElementById('traditionalVariant').checked) values += ' traditional'  
       
    
    _output.style.fontVariantEastAsian = values.trim()
    console.log('Result', _output.style.fontVariantEastAsian)
    }





function showLocationInText (needle) {
    // indicate location of a regular expression value in the text area

    var out = ''
    
    // clear any existing indicators
    _output.value = _output.value.replace(/✅/g,'')
    var haystack = _output.value
    
    // bail if no new search specified
    if (needle === '') return
    
    // otherwise search for the regex
    
    
    // fold in the sets
    if (typeof collections !== 'undefined') {
        for (var set=0;set<collections.length;set++) {
            findme = new RegExp(collections[set].symbol, 'g')
            needle = needle.replace(findme, collections[set].chars)
            }
        }
    
    let re = new RegExp(needle, 'g')
    out = haystack.replace(re, '$&' + '✅')
    _output.value = out

    var listOfMatches = out.match(re)
    if (listOfMatches) count = listOfMatches.length
    else count = 0
    document.getElementById('find_report').textContent = 'Found: '+count
	}











function sortByIPA (str) {
    // take a list of space-separated items from the text area and reorder them by IPA articulatory position
    
    var ipaOrder = {
    "p":{}, "b":{}, "t":{}, "d":{}, "ʈ":{}, "ɖ":{}, "c":{}, "ɟ":{}, "k":{}, "ɡ":{}, "q":{}, "ɢ":{}, "ʡ":{}, "ʔ":{}, "ɓ":{}, "ɗ":{}, "ʄ":{}, "ɠ":{}, "ʛ":{}, "t͡s":{}, "d͡z":{}, "t͡ʃ":{}, "d͡ʒ":{}, "ʈ͡ʂ":{}, "ɖ͡ʐ":{}, "t͡ɕ":{}, "d͡ʑ":{}, "t͡l":{}, "t͡ɬ":{}, "d͡l":{}, "d͡ɮ":{}, "ɸ":{}, "β":{}, "f":{}, "v":{}, "θ":{}, "ð":{}, "s":{}, "z":{}, "ʃ":{}, "ʒ":{}, "ʂ":{}, "ʐ":{}, "ɕ":{}, "ʑ":{}, "ç":{}, "ʝ":{}, "x":{}, "ɣ":{}, "χ":{}, "ʁ":{}, "ħ":{}, "ʕ":{}, "h":{}, "ɦ":{}, "m":{}, "ɱ":{}, "n":{}, "ɳ":{}, "ɲ":{}, "ŋ":{}, "ɴ":{}, "ʍ":{}, "w":{}, "ʋ":{}, "ɹ":{}, "l":{}, "ɫ":{}, "ɻ":{}, "j":{}, "ɰ":{}, "ʙ":{}, "ⱱ":{}, "r":{}, "ɾ":{}, "ɽ":{}, "ʀ":{}, "ʜ":{}, "ʢ":{}, "ɬ":{}, "ɮ":{}, "ɺ":{}, "ɭ":{}, "ʎ":{}, "ʟ":{}, "ʘ":{}, "ǀ":{}, "ǃ":{}, "ǁ":{}, "ǂ":{}, "ɥ":{}, "t͡p":{}, "d͡b":{}, "k͡p":{}, "ɡ͡b":{}, "ɧ":{},

    "i":{}, "y":{}, "ɨ":{}, "ʉ":{}, "ɯ":{}, "u":{}, "ɪ":{}, "ʏ":{}, "ʊ":{}, "e":{}, "ø":{}, "ɘ":{}, "ɵ":{}, "ɤ":{}, "o":{}, "ə":{}, "ɛ":{}, "œ":{}, "ɜ":{}, "ɞ":{}, "ʌ":{}, "ɔ":{}, "æ":{}, "ɐ":{}, "a":{}, "ɶ":{}, "ɑ":{}, "ɒ":{}
    }

    // make sure all items are separated by a single space
    str = str.replace(/\s+/g,' ')
    
    var items = str.split(' ')
    var unidentified = ''
    
    for (i=0;i<items.length;i++) {
        // get the ipa value of items.i from the spreadsheet, if there is one
        // only take the initial phone if there are more than one
        if (spreadsheetRows[items[i]] && spreadsheetRows[items[i]][cols.ipaLoc]) 
        var ipa = spreadsheetRows[items[i]][cols.ipaLoc].split(' ')[0]
        
        if (ipaOrder[ipa]) {
            if (ipaOrder[ipa].found) ipaOrder[ipa].found += items[i]+' '
            else ipaOrder[ipa].found = items[i]+' '
            }
        else unidentified += items[i]+' '
        }
    
    // try to put unidentified items in likely position, based on first character
    var undefArray = unidentified.split(' ')
    unidentified = ''
    console.log(undefArray)
    for (j=0;j<undefArray.length;j++) {
        if (spreadsheetRows[undefArray[j]] && spreadsheetRows[undefArray[j]][cols.ipaLoc]) 
        ipa = spreadsheetRows[undefArray[j]][cols.ipaLoc].split(' ')[0]
        var first = ipa[0]
        
        if (ipaOrder[first]) {
            if (ipaOrder[first].found) ipaOrder[first].found += undefArray[j]+' '
            else ipaOrder[first].found = undefArray[j]+' '
            }
        else unidentified += undefArray[j]+' '
        }
    
    out = ''
    for (x in ipaOrder) {
        if (ipaOrder[x].found) out += ipaOrder[x].found+' '
        }
    if (unidentified) out += ' + '+unidentified

    out = out.replace(/\s+/g,' ').trim()

    return out
    }

































