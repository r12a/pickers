function localInitialise () {

	}



var _h = {
'1B83': ['1B86', '1B89'],

end: {}
}


function toggleVertical (id) {
	// toggles text and selection area glyphs by changing CSS
	if (document.getElementById('verticalToggle').textContent == '') document.getElementById('verticalToggle').textContent = '.c, #output { -webkit-writing-mode: vertical-lr; writing-mode: vertical-lr; }'
	else document.getElementById('verticalToggle').textContent = ''
}




// forms with various positions
var isolinitmedifina = new Set(['\u1860', '\u1863'])

var initmedifina = new Set(['\u1861', '\u1865',, '\u1868', '\u1869', '\u1889', '\u186A', '\u186B', '\u186D', '\u1841',
						   '\u182A', '\u182B', '\u182E', '\u182F', '\u1830', '\u1831', '\u1834', '\u1837', '\u1839', '\u183A', '\u183C', '\u183D'])

var isolonly = new Set(['\u1880'])

var isolfina = new Set(['\u1866'])

var initmedi = new Set(['\u1864'])

var medifina = new Set(['\u1867', '\u186C', '\u1854'])

var initonly = new Set(['\u183F', '\u1842'])


function event_mouseoverChar ()  {
	// overrides the function in shared20/code.js to add shaping forms for all syriac styles
	
	// add cursive forms to table
	var ncr = this.id.replace(/200D/g,'')
	var ncr = ncr.replace(/200C/g,'')
	ncr = String.fromCodePoint('0x'+ncr)
	//var ncr = String.fromCodePoint('0x'+this.id)
	if (isolinitmedifina.has(ncr)) ncr = ncr+' '+ncr+'\u200D \u200D'+ncr+'\u200D \u200D'+ncr
	else if (initmedifina.has(ncr)) ncr = ncr+'\u200D \u200D'+ncr+'\u200D \u200D'+ncr
	else if (isolfina.has(ncr)) ncr = ncr+' • • \u200D'+ncr
	else if (initmedi.has(ncr)) ncr = ncr+'\u200D \u200D'+ncr+'\u200D •'
	else if (medifina.has(ncr)) ncr = '• \u200D'+ncr+'\u200D \u200D'+ncr
	else if (initonly.has(ncr)) ncr = ncr+'\u200D • •'
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
	this.style.backgroundColor = 'rgb(244,99,11)'
	this.style.color = 'rgb(221,221,221)'
	
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

function event_clickOnChar () {
	clearHighlights()
	add(this.textContent.replace(/\u200D/g,''))
	}


function toggleShift (node, LC, UC) {
	if (node.className =='unshifted') {
		document.getElementById(LC).style.display = 'none'
		document.getElementById(UC).style.display = 'block'
		node.className = 'shifted'
		} 
	else {
		document.getElementById(LC).style.display = 'block'
		document.getElementById(UC).style.display = 'none'
		node.className = 'unshifted'
		}
	}



var keyboarddef = [
"᠑|᠒|᠓|᠔|᠕|᠖|᠗|᠘|᠙|᠐",
"᠁,ᠴ|ᠸ,ᠣ|ᠧ,ᠡ|ᠿ,ᠷ|ᠲ|ᠶ|ᠦ|ᠢ|ᠥ|ᠫ",
"ᡠ,ᢀ|ᠰ|ᠳ|ᠹ|ᠭ|ᠾ,ᠬ|ᠵ|ᠻ,ᠺ|ᡀ,ᠯ|《,》",
"ᡁ,ᠽ|ᠱ|ᡂ,ᠼ|ᠤ|ᠪ|ᠩ,ᠨ|ᠮ|᠂|᠃"
]

var keyboardguide = [
"1,2,3,4,5,6,7,8,9,0,-,=",
"q,w,e,r,t,y,u,i,o,p,[,],",
"a,s,d,f,g,h,j,k,l,;,',\\",
"z,x,c,v,b,n,m,,.,/,"
]

var keyboardRowOffset = ['5px','20px','30px','50px']
