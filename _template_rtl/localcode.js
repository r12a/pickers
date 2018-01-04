globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showCursive = ''

function localInitialise () {

	}


_characterSet = 
"ئا ا ئە ە ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك گ ڭ ل م ن ھ ئو و ئۇ ۇ ئۆ ۆ ئۈ ۈ ۋ ئې ې ئى ىي ي ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ؟ ، ؛"


var _h = {
'627': ['6F1'],
'622': ['6F1'],
'623': ['6F1', '654'],
'625': ['6F1', '655'],
'671': ['6F1'],
'6F1': ['671', '625', '623', '622', '627'],
'639': ['60F'],
'63A': ['60F'],
'60F': ['639', '63A'],
'657': ['64F'],
'620': ['60E'],
'60E': ['602'],
'66B': ['631'],
'631': ['66B'],
'654': ['626', '624', '623'],
'655': ['625'],
'626': ['654'],
'624': ['654'],

end: {}
}





function setLocalButtons () {
	// overrides the function that hides the makeEg and charLink buttons
	
	}


function applyLowerCase () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = chars.toLowerCase()
	output.focus()
	}

var rightOnly = new Set(['\u0715', '\u0717', '\u071E', '\u0718', '\u0719', '\u0728', '\u072A', '\u072C', '\u072F', '\u074D', '\u0716'])

var bothJoin = new Set(['\u0712', '\u0713', '\u071A', '\u071B', '\u071D', '\u071F', '\u0720', '\u0721', '\u0722', '\u0723', '\u0725', '\u0726', '\u0729', '\u072B', '\u0714', '\u071C', '\u072D', '\u072E', '\u074E', '\u074F', '\u0727'])


function event_mouseoverChar ()  {
	// overrides the function in shared20/code.js to add shaping forms for all syriac styles
	
	// add cursive forms to table
	var ncr = String.fromCodePoint('0x'+this.id)
	if (ncr === '\u0710') ncr = 'ܝ'+ncr+' \u0715'+ncr+' '+ncr
	else if (window.rightOnly.has(ncr)) ncr = 'ܝ'+ncr+' '+ncr
	else if (bothJoin.has(ncr)) ncr = ncr+'ܝ'+ncr+'ܝ'+ncr+' '+ncr
	var cursive = '<bdi>'+ncr+'</bdi>'
	document.getElementById('cursive').innerHTML = cursive
	
	
	// display character information
	var span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	var charinfo = document.createTextNode( this.title );
	span.appendChild(charinfo);
	
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	// highlight this character
	this.style.backgroundColor = '#CF9'
	this.style.backgroundColor = '#fc6'
	//this.style.backgroundColor = '#FC0'
	
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#E6FFCD'
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE680'
			}
		}
	}
	
