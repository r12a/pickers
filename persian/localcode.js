globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showTransliteration = ''

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
'6F1': ['625', '623', '622', '627'],
'60F': ['639', '63A'],
'657': ['64F'],
'620': ['60E'],
'60E': ['602'],
'66B': ['631'],
'654': ['626', '624', '623'],
'655': ['625'],
'626': ['654'],
'624': ['654'],

end: {}
}



var keyboarddef = [
"§ ÷|1 ۱ !|2 ۲ ٬|3 ۳ ٫|4 ۴ ﷼|5 ۵ ٪|6 ۶ ×|7 ۷ ،|8 ۸ *|9 ۹ )|0 ۰ (|-|=",
"q ض ْ|w ص ٌ|e ث ٍ|r ق ً|t ف ُ|y غ ِ|u ع َ|i ه ّ|o خ ]|p ح [|[ ج }|] چ {",
"a ش  ؤ|s س ئ|d ی ي|f ب إ|g ل أ|h ا آ|j ت ة|k ن «|l م »|; ک :|' گ ؛|\\",
"`|z ظ ك|x ط ٓ|c ز ژ|v ر ٰ|b ذ|n د ٔ|m پ ء|, و|. . |/ ؟"
]


var rightOnly = new Set(['ا', 'آ', 'أ', 'إ', 'ٱ', 'ة', 'و', 'ؤ', 'ر', 'ز', 'د', 'ذ', 'ۀ', 'ژ'])

var bothJoin = new Set(['ل', 'ك', 'ع', 'غ', 'ح', 'خ', 'ج', 'ف', 'ق', 'ط', 'ظ', 'ه', 'ي', 'ئ', 'ى', 'م', 'ب', 'ت', 'ث', 'ن', 'ص', 'ض', 'س', 'ش', 'گ', 'ک', 'چ', 'ی', 'پ'])


function event_mouseoverChar ()  {
	// overrides the function in shared20/code.js to add shaping forms for all arabic styles
	
	// add cursive forms to table
    if (this.id) {
        var cursive = ''
        var ncr = ''
        if (this.id.length < 5) ncr = String.fromCodePoint('0x'+this.id)
        if (window.rightOnly.has(ncr)) cursive = 'ـ'+ncr+' '+ncr
        else if (bothJoin.has(ncr)) cursive = ncr+'ـ'+ncr+'ـ'+ncr+' '+ncr
        document.getElementById('cursive').innerHTML = cursive
        }
	
	
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
		this.style.backgroundColor = '#F4630B';
		this.style.color = '#eee'
	
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			}
		}
	}
