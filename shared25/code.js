// GLOBAL VARIABLES

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



function addReplacement (ch) { 
	// ch: string, the text to be added
	if (debug) console.log('addReplacement(',ch,')')
	
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
        var substitutionMade = false
		
        // get whatever is highlighted, or if no highlight the previous character
        var consonant
        if (startPos === endPos) startPos = startPos-1
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
	var converter = window.open('/app-conversion/?q='+	encodeURIComponent(chars), 'converter') 
	output.focus()
	converter.focus()
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

function makeExample (lang, dir) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').contentEditable = true
	document.getElementById('transcription').textContent = getExample(chars, lang, dir)
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





function toggleSideBarOption (node, fullTitle, variable, id) {
	if (globals[variable]) {
		globals[variable] = ''
		node.textContent = fullTitle
		node.style.color='white'
		if (id != '') document.getElementById(id).style.display = 'none'
		if (id != '') window.kbdEventList = {}
        document.getElementById('output').focus()
		} 
	else {
		globals[variable] = ' ✓'
		node.textContent=fullTitle+globals[variable]
		node.style.color='orange'
		if (id != '' && variable != 'typeAssist') document.getElementById(id).style.display = 'block'
        document.getElementById('output').focus()
		} 
	return false
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


function closeSidebarPalettes (node) {
	menuitems = node.parentNode.querySelectorAll('div'); 
    for (i=0;i<menuitems.length-1;i++) {
        if (menuitems[i].classList.contains('palette')) {
            menuitems[i].textContent = menuitems[i].dataset.shorttitle
            menuitems[i].style.color='white'
            toggleSideBarOption(menuitems[i], menuitems[i].title, menuitems[i].dataset.var, menuitems[i].dataset.locn)
            globals[menuitems[i].dataset.var] = ''
            menuitems[i].textContent = menuitems[i].dataset.shorttitle
            menuitems[i].style.color='white'
            if (menuitems[i].dataset.locn != '') document.getElementById(menuitems[i].dataset.locn).style.display = 'none'
            }
        }
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


function paste () {
	document.execCommand('paste')
	}


function getExample (str, lang, dir) {
	parts = str.split('/')
	var out = '<span class="charExample" translate="no">'
	out += '<span class="ex" lang="'+lang+'"'
	if (dir==='rtl') { out += ' dir="rtl"' }
	out += '>'+parts[0]+'</span> '
	if (parts[1]) {
		out += '<span class="trans">'+parts[1]+'</span> '
		}
	if (parts[2]) {
		out += '<span class="ipa">'+parts[2]+'</span> '
		}
	if (parts[3]) {
		out += '<span class="meaning">'+parts[3]+'</span> '
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

	

	
	
function selectFont ( newFont ) {
	// sets a font-family for text area, and panel title
	if (newFont.match('"') || newFont.match(',')) { alert('Use a single font with no quotes.'); return }
	document.getElementById( 'output' ).style.fontFamily = "'"+newFont+"', 'Doulos SIL WF'"
	document.querySelector('#panel #title').style.fontFamily ="'"+newFont+"', 'Doulos SIL WF'"
	document.querySelector('#transcription').style.fontFamily ="'Doulos SIL WF', '"+newFont+"', 'Gentium Plus', 'Charis Sil', Gentium, serif"
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
	document.getElementById( 'output' ).style.height = (newSize*100)+'px'

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
	document.querySelector('#transcriptionChoice').style.fontFamily = "\'Doulos SIL WF\', \''+font+'\'"
	
	defaults.uifont = font
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}
	
		

function setUIFont (font) {
	document.querySelector('#alphabet').style.fontFamily = '"'+font+'"'
    document.querySelector('#extrashapes').style.fontFamily = '"'+font+'"'
    document.querySelector('#shapelist').style.fontFamily = '"'+font+'"'
	document.querySelector('#transcriptionChoice').style.fontFamily = "'Doulos SIL WF', '"+font+"'"
	
	defaults.uifont = font
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)
	}
	
		

function setUIFontSize (size) {
	document.querySelector('#alphabet').style.fontSize = size+'px';
    document.querySelector('#shapelist').style.fontSize = size+'px';
	document.querySelector('#extrashapes').style.fontSize = size+'px';
    
    document.getElementById('uiFontSize').value = size
		
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
		chstring = chstring.replace(/</g,'&lt;')
		chstring = chstring.replace(/>/g,'&gt;')
		//chstring = chstring.replace(/\[/g,'&#x5B;')
		//chstring = chstring.replace(/\]/g,'&#x5D;')
		chstring = chstring.replace(/\{/g,'&#x7B;')

		transcription = localtranscribe(direction, chstring)
		}

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
	}

	

// INITIALISATION

function getTitle (textcontent) { //console.log(textcontent)
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

function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboarddef, keyboardUCGuide)
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
                normalkey.style.cursor = 'auto'
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
                normalkey.style.cursor = 'auto'
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
                normalkey.style.cursor = 'auto'
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
	for (var i=0;i<kbds.length;i++) document.getElementById(kbds[i]).className = 'unshifted'
	}


function event_mouseoverChar ()  {
	// display character information
	span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	
	// add transliteration symbol and key binding
	var trans_key = ''
	var content = this.textContent.replace(defaults.ccbase,'')
	if (window.spreadsheetRows[content]) {
		if (window.spreadsheetRows[content][cols.transLoc]) trans_key += '\u00A0\u00A0\u00A0ᵗ\u00A0' + window.spreadsheetRows[content][cols.transLoc]+'\u00A0'
		if (window.spreadsheetRows[content][cols.key]) trans_key += '\u00A0\u00A0\u00A0ᵏ\u00A0' + window.spreadsheetRows[content][cols.key]+'\u00A0'
		if (window.spreadsheetRows[content][cols.ipaLoc]) trans_key += '\u00A0\u00A0\u00A0ᵖ\u00A0' + window.spreadsheetRows[content][cols.ipaLoc]+'\u00A0'
		charinfo = document.createTextNode( this.title + trans_key )
		}
	
	span.appendChild(charinfo);
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
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

function event_mouseoverChar ()  {
	// display character information
	var out = '<span id="charname">'+this.title
	var content = this.textContent.replace(defaults.ccbase,'')
	if (window.spreadsheetRows[content]) {
		if (window.spreadsheetRows[content][cols.transLoc]) out += '<span class="hint">ᵗ</span>' + window.spreadsheetRows[content][cols.transLoc]
		if (window.spreadsheetRows[content][cols.key]) out += '<span class="hint">ᵏ</span>' + window.spreadsheetRows[content][cols.key]
		if (window.spreadsheetRows[content][cols.ipaLoc]) out += '<span class="hint">ᵖ</span>' + window.spreadsheetRows[content][cols.ipaLoc]
		}
	out += '</span>'
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
	var out = "<p>You can change the contrast for this app by clicking on the 🌓 icon in the top right corner of the page.<br/>"
	if (dir === 'rtl') out += "The selection area for this picker is ordered RTL by default, but can be set to LTR at <samp>more controls/table direction</samp>.<br/>"
	out += "Find characters by shape, transliteration, or by selecting from the panel. Explore and transform text using the controls above the large box. Use the controls at the bottom of the page to change other settings, and <samp>more controls/reset</samp> to return to the default setup. Familiarise yourself with <a href='help/'>the help page</a> before use.<br/>Click one of the following buttons to remove this message. Click <samp>Ok to store</samp> if you want this and other pickers to remember your settings between sessions. Settings are stored locally on the computer/device you are using.<br/><button onClick='savePreferences(this)'>Ok to store</button> <button onClick='dontStore(this)'>Don't store</button></p>"
	return out
	}


function resetDefaults () {
	defaults = factoryDefaults
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(factoryDefaults)
	
	setUIFont(factoryDefaults.uifont)
	setUIFontSize(factoryDefaults.uisize)
	//selectCCBase(factoryDefaults.ccbase)
	selectFont(factoryDefaults.font)
	changeFontSize(factoryDefaults.size)
	changeBoxHeight(factoryDefaults.rows)
	changeLineHeight(factoryDefaults.lineheight)
	defaults.language = factoryDefaults.language
	changeSelectionDirection(factoryDefaults.uidir)
	if (defaults.hints) setGridHints(defaults.hints)
	}



function setGridHints (type) {
	// switch the hints alongside characters between key indicators and transliterations
	
	if (document.getElementById('keyHintType')) { // this if statement is for backwards compatibility
		document.getElementById('keyHintType').style.textDecoration = 'none'
		document.getElementById('translitHintType').style.textDecoration = 'none'
		document.getElementById('ipaHintType').style.textDecoration = 'none'
		document.getElementById('noneHintType').style.textDecoration = 'none'
		document.getElementById(type+'HintType').style.textDecoration = 'underline'
		}

	defaults.hints = type
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)

	var lastNode = null
	var nodes = document.querySelectorAll( '.c, .v' )

	if (type === 'key') {
		globals.keyHints = 'key'
		for (let n=0; n<nodes.length; n++ ) { 
			var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'').replace(/-/g,'')
			nodes[n].parentNode.firstChild.textContent = ''
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.key] && nodes[n].parentNode.className === 'g') {
				nodes[n].parentNode.firstChild.textContent = ''
				var keyContent = window.spreadsheetRows[content][cols.key] ? window.spreadsheetRows[content][cols.key].replace(/¶/,'\u0331') : ''
				nodes[n].parentNode.firstChild.textContent = keyContent
				}
			}
		}

	else if (type === 'ipa') {
		globals.keyHints = 'ipa'
		for (let n=0; n<nodes.length; n++ ) { 
			var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'')
			nodes[n].parentNode.firstChild.textContent = ''
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.ipaLoc] && nodes[n].parentNode.className === 'g') {
				var keyContent = window.spreadsheetRows[content][cols.ipaLoc] ? window.spreadsheetRows[content][cols.ipaLoc] : ''
				nodes[n].parentNode.firstChild.textContent = keyContent
				}
			}
		}

	else if (type === 'translit') {
		globals.keyHints = 'translit'
		for (let n=0; n<nodes.length; n++ ) { 
			var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'')
			nodes[n].parentNode.firstChild.textContent = ''
			if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.transLoc] && nodes[n].parentNode.className === 'g') {
				var keyContent = window.spreadsheetRows[content][cols.transLoc] ? window.spreadsheetRows[content][cols.transLoc] : ''
				nodes[n].parentNode.firstChild.textContent = keyContent
				}
			}
		}

	else {
		for (let n = 0; n < nodes.length; n++ ) { 
			var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'')
			if (window.spreadsheetRows[content] && nodes[n].parentNode.className === 'g') {
					nodes[n].parentNode.firstChild.textContent = ''
				}
			}
		globals.keyHints = 'none'
		}
	}



function setGridHints (type) {
	// switch the hints alongside characters between key indicators and transliterations
	
	if (document.getElementById('keyHintType')) { // this if statement is for backwards compatibility
		document.getElementById('keyHintType').style.textDecoration = 'none'
		document.getElementById('translitHintType').style.textDecoration = 'none'
		document.getElementById('ipaHintType').style.textDecoration = 'none'
		document.getElementById('noneHintType').style.textDecoration = 'none'
		document.getElementById(type+'HintType').style.textDecoration = 'underline'
		}

	defaults.hints = type
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)

	var lastNode = null
	var nodes = document.querySelectorAll( '.c, .v' )

	if (type === 'key') {
		globals.keyHints = 'key'
		for (let n=0; n<nodes.length; n++ ) {
			if (nodes[n].parentNode.classList && nodes[n].parentNode.classList.contains('g')) {
				var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'').replace(/-/g,'')
				nodes[n].parentNode.firstChild.textContent = ''
				if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.key]) {
					nodes[n].parentNode.firstChild.textContent = ''
					var keyContent = window.spreadsheetRows[content][cols.key] ? window.spreadsheetRows[content][cols.key].replace(/¶/,'\u0331') : ''
					nodes[n].parentNode.firstChild.textContent = keyContent
					}
				}
			}
		}

	else if (type === 'ipa') {
		globals.keyHints = 'ipa'
		for (let n=0; n<nodes.length; n++ ) { 
			if (nodes[n].parentNode.classList && nodes[n].parentNode.classList.contains('g')) {
				var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'')
				nodes[n].parentNode.firstChild.textContent = ''
				if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.ipaLoc]) {
					var keyContent = window.spreadsheetRows[content][cols.ipaLoc] ? window.spreadsheetRows[content][cols.ipaLoc] : ''
					nodes[n].parentNode.firstChild.textContent = keyContent
					}
				}
			}
		}

	else if (type === 'translit') {
		globals.keyHints = 'translit'
		for (let n=0; n<nodes.length; n++ ) { 
			if (nodes[n].parentNode.classList && nodes[n].parentNode.classList.contains('g')) {
				var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'')
				nodes[n].parentNode.firstChild.textContent = ''
				if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.transLoc]) {
					var keyContent = window.spreadsheetRows[content][cols.transLoc] ? window.spreadsheetRows[content][cols.transLoc] : ''
					nodes[n].parentNode.firstChild.textContent = keyContent
					}
				}
			}
		}

	else {
		for (let n = 0; n < nodes.length; n++ ) { 
			if (nodes[n].parentNode.classList && nodes[n].parentNode.classList.contains('g')) {
				var content = nodes[n].textContent.replace(factoryDefaults.ccbase,'')
				if (window.spreadsheetRows[content]) {
						nodes[n].parentNode.firstChild.textContent = ''
					}
				}
			}
		globals.keyHints = 'none'
		}
	}



function toggleGridHints () {
	// switch the hints alongside characters between key indicators and transliterations
	
	var lastNode = null
	var nodes = document.querySelectorAll( '.c, .v' )
	//console.log(nodes)
	
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
	
	
	console.log(defaults)	
	var lastNode = null
	
	// set up the grid hint controls
	if (document.getElementById('hintType')) document.getElementById('hintType').innerHTML = `
		<span id="keyHintType" onClick="setGridHints('key')" title="Show keypress.">K</span>
		<span id="translitHintType" onClick="setGridHints('translit')" title="Show transliteration.">T</span>
		<span id="ipaHintType" onClick="setGridHints('ipa')" title="Show IPA.">P</span>
		<span id="noneHintType" onClick="setGridHints('none')" title="Show no hints.">0</span>
		`
	if (defaults.hints) setGridHints(defaults.hints)
	//else if (! defaults.hints == '') setGridHints('key')


	// set ids to codepoint values of character sequence (with no leading zeros)
	node = document.querySelectorAll( '.c, .v' )
	for (var n = 0; n < node.length; n++ ) { 
		content = node[n].textContent
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
		if (document.getElementById('showRevTransSwitch')) document.getElementById('showRevTransSwitch').style.color = 'orange'
		
		// set title
		if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.ucsName]) node[n].title = window.spreadsheetRows[content][cols.ucsName]
		else if (content !== '') { console.log(content)
			hex = content.codePointAt(0).toString(16).toUpperCase()
			while (hex.length < 4) hex = '0'+hex
			node[n].title = 'U+'+hex+': '+charData[content]
			}
		
		// set mouseover/out
		node[n].onmouseover = event_mouseoverChar
		node[n].onmouseout = event_mouseoutChar
		
		// set onclicks
		if(! node[n].classList.contains(/noOnclick/) && ! node[n].classList.contains('v')) { 
			node[n].onclick = event_clickOnChar
			}

		// add defaults.ccbase to combining characters
		if (window.spreadsheetRows[content] && window.spreadsheetRows[content][cols.ucsName] && window.spreadsheetRows[content][cols.ucsName].includes('\u200B')) node[n].textContent = defaults.ccbase+node[n].textContent
		
		// FIX the above - doesn't seem that ucsName contains zws
		}
	

		
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
	makeTranslitCharacterMap()
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
		document.getElementById( 'uiFont' ).value = defaults.uifont;  
		setUIFont(defaults.uifont);
		}
	if (defaults.uisize) { 
		document.getElementById( 'uiFontSize' ).value = defaults.uisize;  
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
		document.getElementById( 'rows' ).value = defaults.rows; 
		document.getElementById( 'output' ).style.height = (defaults.rows*100)+'px';
		}
	if (defaults.language) { 
		document.getElementById('langtag').value = defaults.language
		}
	if (defaults.contrast) { 
		if (defaults.contrast === 'high') document.querySelector('body').classList.add('contrast')
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
		}
		
	// activate type assist/ime input
	if (document.getElementById('showRevTransSwitch')) {
		makePalette(typeAssistMap)
		makeKbdEventList(typeAssistMap)
		}


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





function makeCharacterLink (cp, block, lang, direction) { 
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




function displayDBInfo (cp, block, lang, direction, showAll) { 
	// displays information about cp from db
	// cp: a unicode character, or sequence of unicode characters
	// block: 
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
	// showAll: boolean, if true shows all db entries for every character; otherwise, shows only entries that start with the character

	//var chars = []
	//convertStr2DecArray(cp, chars)
	var chars = [...cp]

	var out = '<span style="display:flex; flex-direction:column;">'
	//console.log(spreadsheetRows)
	
	for (let i=0;i<chars.length;i++) {
		//out += buildDBInfoLine(chars[i], true)
		out += buildDBInfoLine(chars[i], true, cp, i, showAll)
		}
	
	out += '</span>'


	return out.trim()
	}


function buildDBInfoLine (char, toplevel, originStr, ptr, showAll) {
		
		hex = char.codePointAt(0).toString(16).toUpperCase()
		while (hex.length < 4) hex = '0'+hex
		
		out = '<span class="dbCharContainer"'
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

			// get transliteration
			if (spreadsheetRows[char][cols.transLoc] && spreadsheetRows[char][cols.transLoc] !== char) {
				out += '<span>'
				//out += '<span><em>tl</em> '
				if (spreadsheetRows[char][cols.transLoc]) out += ' <span class="ipa">'+spreadsheetRows[char][cols.transLoc]+'</span>'
				else out += '-'
				out += '</span>'
				}

			// get ipa info
			if (cols.ipaLoc) {
				out += '<span><em>ipa</em> '
				if (spreadsheetRows[char][cols.ipaLoc]) out += ' <span class="ipa">'+spreadsheetRows[char][cols.ipaLoc]+'</span>'
				else out += '-'
				out += '</span>'
				}

			// get type
			out += '<span><em>type</em> '
			if (spreadsheetRows[char][cols.typeLoc]) out += ' <span class="ipa">'+spreadsheetRows[char][cols.typeLoc]+'</span>'
			else out += '-'
			out += '</span>'

			// get status
			if (spreadsheetRows[char][cols.statusLoc] && cols.statusLoc > 0) {
				out += '<span><em>usage</em> '
				out += ' <span style="color:black; font-weight: bold;">'+spreadsheetRows[char][cols.statusLoc]+'</span>'
				out += '</span>'
				}

			// get transcription
			if (cols.othertranscriptions) {
				for (let t=0;t<cols.othertranscriptions.length;t++) {
					out += '<span><em style="font-size: 80%;">'+cols.othertranscriptions[t][1]+'</em> '
					if (spreadsheetRows[char][cols.othertranscriptions[t][0]]) out += ' <span class="ipa">'+spreadsheetRows[char][cols.othertranscriptions[t][0]]+'</span>'
					else out += ' -'
					out += '</span>'
					}
				}

			// get name
			if (spreadsheetRows[char][cols.nameLoc] && cols.nameLoc > 0) {
				out += '<span><em>name</em> '
				out += ' <span>'+spreadsheetRows[char][cols.nameLoc]
				if (spreadsheetRows[char][cols.nnameLoc] && cols.nnameLoc > 0) out += ' ('+spreadsheetRows[char][cols.nnameLoc]+')'
				out += '</span></span>'
				}

			// add link to notes page
			var blockfile = getScriptGroup(parseInt(hex,16), true)
			//console.log(blockfile)
			if (blockfile) {
				out += '<a title="Right-click to open notes file." href="/scripts/'+blockfile+'/block#char'+hex+'" target="_blank">details</a>'
				}
			out += '</span><span class="dbCharName">'	

			// add unicode name
			if (spreadsheetRows[char][cols.ucsName]) out += spreadsheetRows[char][cols.ucsName]
			else {
				for (let i=0;i<char.length;i++) {
					if (i>0) out += ', '
					out += 'U+'+hex+': '+charData[char[i]]
					}
				}
			out += '</span>'	
			}
		
		else {
			// if class is x, just display ucs name
			out += '<span class="dbCharInfo">'
			out += '</span><span class="dbCharName">'	
			
			// add unicode name
			var blockfile = getScriptGroup(parseInt(hex,16), true)
			if (blockfile) {
				for (let i=0;i<char.length;i++) {
					if (i>0) out += ', '
					out += 'U+'+hex+': '+charData[char[i]]
					}
				}
			out += '</span>'	
			}

		out += '</span> '
		out += '</span> '
		
		
		// find related items
		if (toplevel) {
			if (showAll) {
				for (item in spreadsheetRows) { 
					if (((item.length > 1 && item.includes(char)) || (cols.equiv && spreadsheetRows[item][cols.equiv].includes(char))) && spreadsheetRows[item][cols.class] !== '-') out += buildDBInfoLine(item, false, originStr, ptr, showAll)
					}
				}
			else {
				for (item in spreadsheetRows) { 
					var matchStr = item.replace(/-/g,'.')
					var  regex = new RegExp(matchStr)
					itemArray = [... item] // to handle surrogates
					if (((itemArray.length > 1 && itemArray[0] === char) || (cols.equiv && spreadsheetRows[item][cols.equiv].includes(item))) && spreadsheetRows[item][cols.class] !== '-' && originStr.substr(ptr,item.length).match(regex)) out += buildDBInfoLine(item, false, originStr, ptr, showAll)
					}
				}
			}
		
		return out
}

//function buildDBInfoLine (char, toplevel, originStr, ptr, showAll) {




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


function removeCharacter (char,replacement) {
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





function setUpTypeAssist (latin, palette, map) {
	// called from defaults.js, sets up type-in modes with any panels required
	
	window.latinTypeAssist=latin
	makePalette(palette)
	makeKbdEventList(map)
	}




// draw a selection panel for a type-assist keypress
function drawCharSelectionPanel (key) {
	out = ''

	// omit the first item, since we want that at the end
	for (let i=0;i<kbdEventList[key].length;i++) {
		if (i > 9) {
			out += ' &nbsp; <span style="font-size:80%;">See panel for '+eval(kbdEventList[key].length-10)+' more.</span>'
			break
			}
		if (! window.latinTypeAssist) out += ' <sup>'+ kbdEventList[key][i][0] +'</sup>'
		else out += ' <sup></sup>'
		out += '<sub>'+ ((i+1) % 10)+'</sub> '
		out += '<bdi onclick="'
		out += 'addReplacement'
		out += '(\''+kbdEventList[key][i][1]+'\'); document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+kbdEventList[key][i][1]+'</bdi>'
		}

	document.getElementById("charChoice").innerHTML = out
    }

	


	
// decipher key down codes
function showDown (evt) {
	evt = (evt) ? evt : ((event) ? event : null)
	if (evt) {
        if (debug) console.log(evt.key, evt.code)
		
		// skip if this is Cmd+C, Ctrl+C, etc
        if (evt.metaKey || evt.ctrlKey || evt.altKey) { if (debug) console.log( evt.key,' pressed.')}
		
		// capture special keys
        else if (evt.key==='§') { // transliterate & move second text area contents to main text area
			doTranscription('transliterate')
   			document.getElementById('transcription').textContent = '/'+document.getElementById('transcription').textContent+'/'
            moveTranscription()
            evt.preventDefault()
            }
        else if (evt.key==='~') { // switch to Latin palette
            var latinSwitch = document.getElementById('showLatinTransSwitch')
            if (globals[latinSwitch.dataset.var]==''){
                closeSidebarPalettes(latinSwitch)
                window.latinTypeAssist=true
                makePalette(latinTypeAssistMap)
                makeKbdEventList(latinTypeAssistMap)
                }
            toggleSideBarOption(latinSwitch, latinSwitch.title, latinSwitch.dataset.var, latinSwitch.dataset.locn)
            latinSwitch.textContent=latinSwitch.dataset.shorttitle
            evt.preventDefault()
            }
        else if (evt.key==='`') { // switch to Reverse translit palette
            var revSwitch = document.getElementById('showRevTransSwitch')
            if (globals[revSwitch.dataset.var]==''){
                closeSidebarPalettes(revSwitch)
                window.latinTypeAssist=false
                //makePalette(typeAssistMap)
                makeKbdEventList(typeAssistMap)
                }
            toggleSideBarOption(revSwitch, revSwitch.title, revSwitch.dataset.var, revSwitch.dataset.locn)
            revSwitch.textContent=revSwitch.dataset.shorttitle
            evt.preventDefault()
            }
			
		
		// Type-assist selector showing, and a number key was hit
		else if (charChoiceKeys.has(evt.key) && document.getElementById('charChoice').textContent !== '') {
            if (debug) console.log('Type-assist selector showing, and a number key '+evt.key+' was hit')

			num = parseInt(evt.key)-1
			if (num === -1) num = 9
			choices =  document.getElementById('charChoice').querySelectorAll('bdi')

            // add the chosen character
			if (num < 0 || num > choices.length-1) console.log('Number ',num+1, 'is out of range.')
			else addReplacement(choices[num].textContent)
			
            //if (num < choices.length+1) {
			//	if (--num === 0) num = 10
			//	addReplacement(choices[num].textContent)
			//	}
			//else console.log('Number ',num, 'is out of range.')
			
            // tidy up
            evt.preventDefault()
            document.getElementById("charChoice").innerHTML = ''
			}
		

		// Not a number key, and character typed has a panel
        else if (kbdEventList[evt.key]) {
            if (debug) console.log(evt.key,'triggers',kbdEventList[evt.key][0][1])
			
			// if this is not Latin type-assist, or a Latin-based picker, display the first item in the keyEventList
			//if (! window.latinTypeAssist  && template.scriptcode !== 'Latn') {
			if (! window.latinTypeAssist) {
				add(kbdEventList[evt.key][0][1])
				}
			else add(evt.key)
			
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
        { cp:"\u202B", abbr:"ʳˡᵉ"},
        { cp:"\u2066", abbr:"ˡʳᵉ"},
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
	


function makeLatinTypeAssistMap () {
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
		if (spreadsheetRows[item][cols.transLoc]) collector.push(spreadsheetRows[item][cols.transLoc])
		if (cols.transcKey && spreadsheetRows[item][cols.transcKey]) collector.push(spreadsheetRows[item][cols.transcKey])
		if (cols.ipaLoc && spreadsheetRows[item][cols.ipaLoc]) {
			var items = spreadsheetRows[item][cols.ipaLoc].split(' ')
			for (let i=0;i<items.length;i++) collector.push(items[i])
			}
		}
	
	// remove duplicates from collector
	const uniqueSet = new Set(collector)
	collector = [...uniqueSet]
	
	outObj = {}
	for (let i=0;i<collector.length;i++) {
		var asciiOnly = true
		for (let c=0;c<collector[i].length;c++) {
			if (collector[i].codePointAt(c) > 127) asciiOnly = false
			continue
			}
		if (asciiOnly) continue
		//if (collector[i].length === 1 && collector[i].codePointAt(0) < 127) continue
		if (latinRegister[collector[i][0]]) { 
			if (outObj[latinRegister[collector[i][0]]]) outObj[latinRegister[collector[i][0]]] +=  ' '+collector[i]
			else outObj[latinRegister[collector[i][0]]] = latinRegister[collector[i][0]] + ' ' +collector[i]
			}
		else console.log('Register didn\'t have:', collector[i])
		}
	
	var outArray = Object.values(outObj)
	outArray.sort()
	
	window.latinTypeAssistMap = ''
	for (i=0;i<outArray.length;i++) window.latinTypeAssistMap += outArray[i] + '\n'
	
	console.log('latinTypeAssistMap done')
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
