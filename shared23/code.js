// GLOBAL VARIABLES

var globals = {}
globals.view = 'alphabet';
globals.n11n = 'nfc';
globals.refocus = true;
globals.showShapeHints = ''   // indicates whether or not to show shape hinting
globals.showShapeLookup = ''   // indicates whether or not to show shape images for lookup
globals.showLatinTrans = ''
globals.showTranslit =  ''
globals.showKeyboard = ''
var _output



function addReplacement (ch) { 
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
        var substitutionMade = false
		
        // get whatever is highlighted, or if no highlight the previous character
        var consonant
        if (startPos === endPos) startPos = startPos-1
        consonant = outputNode.value.substring(startPos-1,endPos-1)
        console.log('Consonant',consonant)
        
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
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = window.location.protocol+'//'+window.location.hostname+window.location.pathname+'?text='+encodeURIComponent(chars)
	output.focus()
	}

function makeExample (lang, dir) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = getExample(chars, lang, dir)
	output.focus()
	}

function makeCharLink (script, lang, dir) {
	var output = document.getElementById('output')
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = makeCharacterLink(getHighlightedText(output), script, lang, dir)
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



var latinCharacters = []


function toggleSideBarOption (node, fullTitle, variable, id) {
	if (globals[variable]) {
		globals[variable] = ''
		node.textContent = fullTitle
		node.style.color='white'
		if (id != '') document.getElementById(id).style.display = 'none'
		if (id != '') window.latinCharacters = {}
        document.getElementById('output').focus()
		} 
	else {
		globals[variable] = ' ✓'
		node.textContent=fullTitle+globals[variable]
		node.style.color='orange'
		if (id != '') document.getElementById(id).style.display = 'block'
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
    	menuitems[i].textContent = menuitems[i].dataset.shorttitle
		menuitems[i].style.color='white'
        toggleSideBarOption(menuitems[i], menuitems[i].title, menuitems[i].dataset.var, menuitems[i].dataset.locn)
		globals[menuitems[i].dataset.var] = ''
		menuitems[i].textContent = menuitems[i].dataset.shorttitle
		menuitems[i].style.color='white'
		if (menuitems[i].dataset.locn != '') document.getElementById(menuitems[i].dataset.locn).style.display = 'none'
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
	
	// remove leading base characters if this is a combining character
	if (ch.length > 1) {
		while (ch.charAt(0) == defaults.ccbase) {
			ch = ch.substr(1)
			}
		}
	if (document.getElementById('output').style.display == 'none') { return; }

	
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
                    ids[x].style.backgroundColor = '#FFE6B2'
                    }
				}
			}
		else {
			for (let i=0;i<shapelistarray.length;i++) {
				document.getElementById(shapelistarray[i]).style.backgroundColor = 'transparent'
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
	}


function transcribe (chstring, direction) {
	// node: the output element
	// direction: a string that the local routine will recognise to do the right transcription
	if (chstring=='') { return }

	// for security, remmove angle brackets
	chstring = chstring.replace(/</g,'&lt;')
	chstring = chstring.replace(/>/g,'&gt;')
	chstring = chstring.replace(/\[/g,'&#x5B;')
	chstring = chstring.replace(/\]/g,'&#x5D;')
	chstring = chstring.replace(/\{/g,'&#x7B;')
	
	var transcription = localtranscribe(direction, chstring)
	//var transcription = localtranscribe(direction, chstring)
	document.getElementById('transcription').innerHTML = transcription
	document.getElementById('transcriptionWrapper').style.display = 'block' 
	alts = document.querySelectorAll('.altfirst, .altlast, .alt')
	for (i=0;i<alts.length;i++) {
		alts[i].onclick = choose
		}
	return transcription
	}

function clearHighlights () {
	// called when a character is clicked on - removes any highlighting added by shape
	
	nodelist = document.querySelectorAll('.c')
	for (var i=0;i<nodelist.length;i++) {
		nodelist[i].style.backgroundColor = 'transparent'
		}
	}
	


function setLanguage (value) {
	// sets the defaults.language value, which is used for generating examples
	
	defaults.language = value
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
	charinfo = document.createTextNode( this.title );
	span.appendChild(charinfo);
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	// highlight this character
	this.style.backgroundColor = '#F4630B';
	this.style.color = '#ddd'

	
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			}
		}
	}

function event_mouseoutChar ()  {
	// unhighlight this character
	this.style.backgroundColor = 'transparent'
	if (this.classList.contains('gkey')) this.style.color = 'orange'
	else if (this.classList.contains('sj')) this.style.color = 'chocolate'
    else this.style.color = '#666'
	
	// unhighlight similar characters
	if (_h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = 'transparent'
			}
		}
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
	out += "Use the controls at the bottom of the page to change other settings, and <samp>more controls/reset defaults</samp> to return to the default setup. It is recommended that you familiarise yourself with <a href='help/'>the notes on usage</a> before use.<br/>Click one of the following buttons to remove this message. Click <samp>Ok to store</samp> if you want this and other pickers to remember your settings between sessions. Settings are stored locally on the computer/device you are using.<br/><button onClick='savePreferences(this)'>Ok to store</button> <button onClick='dontStore(this)'>Don't store</button></p>"
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

	// set ids to codepoint values of character sequence (with no leading zeros)
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		content = node[n].textContent
		id=''
		for (i=0;i<content.length;i++) {
			id += convertChar2CP(content[i])
			}
		node[n].id = id
        node[n].dataset.c = 'c'+id
		}
	
		

	//  SET MOUSEOVERS
	// set mouseover/mouseout functions for all imgs in all views except class:ph and class:noMouseover
	var node = document.querySelectorAll( '.c' ); 
	for (var j = 0; j < node.length; j++ ) { 
		prop = node[j].textContent
		var chars = []
		convertStr2DecArray(prop, chars)
		previoustitle = ''
		if (node[j].title) previoustitle = node[j].title // pick up any title information available
		if (charData[prop]) { // temporary while we populate the thing
			var codepoint = ''
			for (c=0; c<chars.length; c++) { 
				cp = chars[c].toString(16).toUpperCase()
				while (cp.length < 4) cp = '0'+cp
				cp = 'U+'+cp
				if (c < prop.length-1) cp += ' '
				codepoint += cp
				}
			node[j].title = codepoint+': '+charData[prop]
			//node[j].title = charData[prop].cp+': '+charData[prop].name
			if (previoustitle) node[j].title += ', '+previoustitle

			
			
			/*
			for (c=0; c<prop.length; c++) { 
				cp = parseInt(prop.charCodeAt(c),10)
				cp = cp.toString(16).toUpperCase()
				while (cp.length < 4) cp = '0'+cp
				cp = 'U+'+cp
				if (c < prop.length-1) cp += ' '
				codepoint += cp
				}
			node[j].title = codepoint+': '+charData[prop].n
			//node[j].title = charData[prop].cp+': '+charData[prop].name
			if (previoustitle) node[j].title += ', '+previoustitle
			*/
			}
		else console.log('failed to find data for codepoint',prop)
		node[j].onmouseover = event_mouseoverChar;
		node[j].onmouseout = event_mouseoutChar;
		}

	// SET ONCLICKS
	var node = document.querySelectorAll( '.c' ); 
	for (var j = 0; j < node.length; j++ ) { 
		prop = node[j].textContent
		if (charData[prop]) { // temporary while we populate the thing
			if(! node[j].className.match(/noOnclick/)) { 
				node[j].onclick = event_clickOnChar;
				}
			}
		}
		
	// set onclicks for transcription characters	
	if (document.getElementById('phonemelist')) {
		var transcriptnodes = document.getElementById('phonemelist').querySelectorAll('span.p'); 
		for (var n = 0; n < transcriptnodes.length; n++ ) {
			transcriptnodes[n].onclick = event_clickOnTranscriptionChar; 
			} 
		}
	

	// add defaults.ccbase to combining characters
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		prop = node[n].textContent
		if (charData[prop].match('\u200B')) { 
			node[n].textContent = defaults.ccbase+node[n].textContent
			}
		}

	if (typeof keyboarddef !== 'undefined' && document.getElementById('keyboard') != null) 
		makeKeyboard(keyboarddef, keyboardLCGuide)
	}



function setUpValues () {
//window.onload = function() { 
	initialise(); 
	localInitialise(); 
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
	// block: 
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
	//var chars = cp.split('')
	var chars = []
	convertStr2DecArray(cp, chars)
	

	var out = ''
	var charstr = ''
	for (var i=0;i<chars.length;i++) {
		charstr = String.fromCodePoint(chars[i])
		out += '<span class="codepoint">'
		var mark = false
		var cbase = ''
		var dir = ''
		
		if (charData[charstr]) {
			var hex = chars[i].toString(16).toUpperCase()
			while (hex.length < 4) hex = '0'+hex 
			
			var name = charData[charstr]
			if (charData[charstr].match('\u200B')) mark = true
			if (mark && defaults.ccbase != '') cbase = '&#x'+convertChar2CP(defaults.ccbase)+';'
			if (direction === 'rtl') dir = ' dir="rtl"'
			}
		else return 'Character not found in database.'
	
		out += '<span lang="'+lang+'"'+dir+'>'+cbase+'&#x'+hex+';</span> '
	
		if (! window.location.href.match('r12a.github.io')) out +=  '<a href="'+block+'#char'+hex+'">'
		out +=  '[<span class="uname">U+'+hex+' '+name+'</span>]'
		if (! window.location.href.match('r12a.github.io')) out +=  '</a>'
		out += '</span> '
		}
	
	return out.trim()
	}


function makeCharacterLink (cp, block, lang, direction) { 
	// returns markup with information about cp
	// only wraps in a link if not on r12a.github.io
	// cp: a unicode character, or sequence of unicode characters
	// block: 
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


       if (! window.location.href.match('r12a.github.io')) out +=  '<a href="'+block+'#char'+hex+'">'
		out +=  '<span class="uname">U+'+hex+' '+name+'</span>'
		if (! window.location.href.match('r12a.github.io')) out +=  '</a>'
        if (i===chars.length-1) out += ']'
		}
    out += '</span> '
	
	return out.trim()
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
    for (var i=0;i<charArray.length;i++) out += charArray[i]+type
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

var panelVisible = ''
//var awaitingInput = ''
var latinOnly = false
var charChoiceKeys = new Set(['0','1','2','3','4','5','6','7','8','9'])


function drawCharSelectionPanelOLD (key) {
        out = ''
        for (let i=1;i<latinCharacters[key].length;i++) {
            if (i > 9) {
                out += ' &nbsp; Warning: More than 10 items.'
                break
                }
            out += ' <sup>'+eval(i % 10)
            if (! window.latinOnly) out += latinCharacters[key][i][0]
            out += '</sup> '
            out += '<bdi onclick="'
            out += 'addReplacement'
            out += '(\''+latinCharacters[key][i][1]+'\'); window.awaitingInput=\'\'; document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+latinCharacters[key][i][1]+'</bdi>'
            }
        out += ' <sup>0'
        if (! window.latinOnly) out += latinCharacters[key][0][0]
        out += '</sup> <bdi onclick="'
        out += 'addReplacement'
        //if (latinCharacters[key][0][1].includes('-')) out += 'addVowel'
        //else out += 'add'
        out += '(\''+latinCharacters[key][0][1]+'\'); window.awaitingInput=\'\'; document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+latinCharacters[key][0][1]+'</bdi>'

        document.getElementById("charChoice").innerHTML = out
    }
	
	
function drawCharSelectionPanelX (key) {
        out = ''
        translitTotal = -1
        if (window.latinOnly) translitTotal = parseInt(latinCharacters[key].pop())
        for (let i=1;i<latinCharacters[key].length;i++) {
            if (i > 9) {
                out += ' &nbsp; Warning: More than 10 items.'
                break
                }
            out += ' <sup'
            if (i<translitTotal) out += ' style="color: orange;"'
            out += '>'+eval(i % 10)
            if (! window.latinOnly) out += latinCharacters[key][i][0]
            out += '</sup> '
            out += '<bdi onclick="'
            out += 'addReplacement'
            out += '(\''+latinCharacters[key][i][1]+'\'); window.awaitingInput=\'\'; document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+latinCharacters[key][i][1]+'</bdi>'
            }
        out += ' <sup'
        if (translitTotal>0) out += ' style="color: orange;"'
        out += '>0'
        if (! window.latinOnly) out += latinCharacters[key][0][0]
        out += '</sup> <bdi onclick="'
        out += 'addReplacement'
        out += '(\''+latinCharacters[key][0][1]+'\'); window.awaitingInput=\'\'; document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+latinCharacters[key][0][1]+'</bdi>'

        document.getElementById("charChoice").innerHTML = out
    }
	
	
function drawCharSelectionPanel (key) {
        out = ''
        //if (window.latinOnly) { // deal with # at end indicating how many translit chars
        //    translitTotal = parseInt(latinCharacters[key][latinCharacters[key].length-1][0])
        //    last = latinCharacters[key].length-1
        //    }
        //else {
         //   last = latinCharacters[key].length
        //    translitTotal = -1
        //    }
        //for (let i=0;i<last;i++) {
        console.log(latinCharacters[key].length, latinCharacters[key])
        for (let i=0;i<latinCharacters[key].length;i++) {
            if (i > 9) {
                out += ' &nbsp; Warning: More than 10 items.'
                break
                }
            out += ' <sup'
            out += '>'
            if (! window.latinOnly) out += latinCharacters[key][i][0]
            out += '</sup><sub'
            //if (i<translitTotal) 
            //out += ' style="color: orange;"'
            out += '>'+eval(i % 10)+'</sub> '
            out += '<bdi onclick="'
            out += 'addReplacement'
            out += '(\''+latinCharacters[key][i][1]+'\'); window.awaitingInput=\'\'; document.getElementById(\'charChoice\').innerHTML = \'\'; ">'+latinCharacters[key][i][1]+'</bdi>'
            }

        document.getElementById("charChoice").innerHTML = out
    }
	
	
// decipher key down codes
function showDown (evt) {
	evt = (evt) ? evt : ((event) ? event : null)
	if (evt) {
        console.log(evt.key, evt.code)
        if (evt.metaKey ) {} // skip if this is Cmd+C 
        else if (evt.key==='`') { // switch to Latin palette
            var latinSwitch = document.getElementById('showLatinTransSwitch')
            if (globals[latinSwitch.dataset.var]==''){
                closeSidebarPalettes(latinSwitch)
                window.latinOnly=true
                makePalette(justLatinMap)
                makeKbdEventList(justLatinMap)
                }
            toggleSideBarOption(latinSwitch, latinSwitch.title, latinSwitch.dataset.var, latinSwitch.dataset.locn)
            latinSwitch.textContent=latinSwitch.dataset.shorttitle
            evt.preventDefault()
            }
        else if (evt.key==='~') { // switch to Reverse translit palette
            var revSwitch = document.getElementById('showRevTransSwitch')
            if (globals[revSwitch.dataset.var]==''){
                closeSidebarPalettes(revSwitch)
                window.latinOnly=false
                makePalette(translitCharacterMap)
                makeKbdEventList(translitCharacterMap)
                }
            toggleSideBarOption(revSwitch, revSwitch.title, revSwitch.dataset.var, revSwitch.dataset.locn)
            revSwitch.textContent=revSwitch.dataset.shorttitle
            evt.preventDefault()
            }
        else if (panelVisible==='' && ! latinCharacters[evt.key]) {
            // no panel up and none for this character
            console.log('no panel up and none for this character')
            }
        else if (panelVisible && charChoiceKeys.has(evt.key)) {
            // there's a panel up and a number key was hit
            console.log('panel up and a number key was hit')
            num = evt.key
        
            // add the chosen character
            addReplacement(latinCharacters[panelVisible][num][1])
            
            // tidy up
            window.panelVisible = ''
            evt.preventDefault()
            document.getElementById("charChoice").innerHTML = ''
            }
        else if (latinCharacters[evt.key]) {
            // character typed has a panel
            console.log('character typed has a panel')
            if (!window.latinOnly && latinCharacters[evt.key].length === 1) {
                if (!window.latinOnly && window.panelVisible) addReplacement(latinCharacters[panelVisible][0][1])
                add(latinCharacters[evt.key][0][1])
                window.panelVisible = ''
                evt.preventDefault()
                }
            else {
                if (!window.latinOnly && window.panelVisible) addReplacement(latinCharacters[panelVisible][0][1])
                drawCharSelectionPanel(evt.key)
                window.panelVisible = evt.key
                evt.preventDefault()
                add(evt.key)
                }
            }
        else {
            // there's a panel but there's no panel for the character typed
            console.log('panel up but no panel for the character typed')
            document.getElementById("charChoice").innerHTML = ''
            if (!window.latinOnly) {
                addReplacement(latinCharacters[panelVisible][0][1])
                window.panelVisible = ''
                }
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
        list = list.trim()
        list = list.replace(/\s+/g,' ')
        list = list.replace(/\u0008/g,'')
        if (list==='') continue
        out = ''
        var charArray = list.split(' ')
        var theKey = charArray.shift()
        out = '<b>'+theKey+'</b>\n'
        //if (window.latinOnly) last = charArray.length-1 // this removes the translit count
        //else last = charArray.length
        //for (let j=0;j<last;j++) {
        for (let j=0;j<charArray.length;j++) {
            if (window.latinOnly) {
                out += '<span class="t" onclick="add(\''+charArray[j]+'\')">'+charArray[j]+'</span>\n'
                }
            else {
                out += '<span class="t" onmouseover="showtrans(\''+charArray[j+1]+'\')" onmouseout="hidetrans()" onclick="add'
                if (charArray[j+1].includes('-')) out += 'Vowel'
                out += '(\''+charArray[j+1]+'\')">'+charArray[j]+'</span>\n'
                j++
                }
            }
        output += out
        }
	document.getElementById('transcriptionPalette').innerHTML = output
	}



function makeKbdEventList (mappingTable) {
    // populates kbdEventList from a map of transcription characters
    window.latinCharacters = {}
    mappingTable = mappingTable.replace(/\u0008/g,'')
	var fulllist = mappingTable.split('\n')
	for (let i=0;i<fulllist.length;i++) {
        list = fulllist[i]
        list = list.trim()
        list = list.replace(/\s+/g,' ')
        if (list==='') continue

        var charArray = list.split(' ')
        var theKey = charArray.shift()
        
        window.latinCharacters[theKey] = []
        
        for (let j=0;j<charArray.length;j++) {
            if (window.latinOnly) {
                temp = []
                temp[0] = charArray[j]
                temp[1] = charArray[j]
                window.latinCharacters[theKey].push(temp)
                }
            else {
                temp = []
                temp[0] = charArray[j]
                temp[1] = charArray[j+1]
                window.latinCharacters[theKey].push(temp)
                j++
                }
            }
        }
	}






