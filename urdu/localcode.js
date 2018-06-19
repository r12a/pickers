globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showTranslit =  ''

function localInitialise () {

	}


var keyboarddef = [
"§|1 ۱|2 ۲|3 ۳|4 ۴|5 ۵|6 ۶|7 ۷ ۖ|8 ۸ ۙ|9 ۹|0 ۰|-|=",
"q ط ظ|w ص ض ً|e ھ ذ َ|r د ڈ ٌ|t ٹ ث|y پ ّ|u ت ۃ|i ب ـ|o  ُج چ|p ح خ ِ|[ ] } َ|] [ { ْ",
"a م ژ ۢ|s و ز|d ر ڑ|f ن ں|g ل ۂ|h ہ ء أ|j ا آ إ|k ک گ|l ی ي|; ؛|' |\\",
"`|z ق|x ف|c ے ۓ|v س|b ش ؤ|n غ ئ|m ع|. ، >|, ۔ <|/ ؟ "
]





_h = {
'627': ['6F1', '622', '623'],
'6F1': ['622', '623', '627'],
'622': ['623', '627', '6F1'],
'623': ['622', '627', '6F1'],
'628': ['67E', '62A', '679', '62B', '600', '601'],
'67E': ['62A', '679', '62B', '628', '600', '601'],
'62A': ['679', '62B', '628', '67E', '600', '601'],
'679': ['62B', '628', '67E', '62A', '600', '601'],
'62B': ['628', '67E', '62A', '679', '600', '601'],
'62C': ['686', '62D', '62E'],
'686': ['62D', '62E', '62C'],
'62D': ['62E', '62C', '686'],
'62E': ['62C', '686', '62D'],
'62F': ['688', '630', '631', '691', '632', '698', '648', '624'],
'688': ['630', '631', '691', '632', '698', '648', '624', '62F'],
'630': ['631', '691', '632', '698', '648', '624', '62F', '688'],
'631': ['691', '632', '698', '648', '624', '62F', '688', '630'],
'691': ['632', '698', '648', '624', '62F', '688', '630', '631'],
'632': ['698', '648', '624', '62F', '688', '630', '631', '691'],
'698': ['648', '624', '62F', '688', '630', '631', '691', '632'],
'648': ['624', '62F', '688', '630', '631', '691', '632', '698'],
'624': ['62F', '688', '630', '631', '691', '632', '698', '648'],
'633': ['634', '635', '636', '6A9', '646', '6BA'],
'634': ['635', '636', '6A9', '646', '6BA', '633'],
'635': ['636', '6A9', '646', '6BA', '633', '634'],
'636': ['6A9', '646', '6BA', '633', '634', '635'],
'6A9': ['646', '6BA', '633', '634', '635', '636', '6AF', '644'],
'646': ['6BA', '633', '634', '635', '636', '6A9'],
'6BA': ['633', '634', '635', '636', '6A9', '646'],
'637': ['638'],
'638': ['637'],
'639': ['63A', '60F'],
'63A': ['639', '60F'],
'60F': ['639', '63A'],
'641': ['642'],
'642': ['641'],
'6AF': ['6A9', '633', '634', '644'],
'644': ['6A9', '6AF', '633', '646', '6BA'],
'6C1': ['6C2', '6C3', '647'],
'6C2': ['6C3', '647', '6C1'],
'6C0': ['6C3', '647', '6C1', '6C2'],
'6C3': ['647', '6C1', '6C2'],
'647': ['6C1', '6C2', '6C3'],
'6CC': ['626'],
'626': ['6CC'],
'6D2': ['6D3'],
'6D3': ['6D2'],
'602': ['60E'],
'60E': ['602'],
'601': ['600'],
'600': ['601'],

end: {}
}


var rightOnly = new Set(['ا', 'و', 'د', 'دھ', 'ڈ', 'ڈھ', 'ذ', 'ر', 'رھ', 'ڑ', 'ڑھ', 'ز', 'ژ', 'ے', 'آ', 'أ', 'ء', 'ؤ', 'ۓ'])

var bothJoin = new Set(['ب', 'بھ', 'پ', 'پھ', 'ت', 'تھ', 'ٹ', 'ٹھ', 'ث', 'ن', 'ج', 'جھ', 'چ', 'چھ', 'ح', 'خ', 'ک', 'کھ', 'گ', 'گھ', 'ل', 'م', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ہ', 'ی', 'ئ', 'ۂ', 'ۃ', 'ں', 'ھ', 'ه'])


function event_mouseoverChar ()  {
	// overrides the function in shared20/code.js to add shaping forms for all arabic styles
	
	// add cursive forms to table
    if (this.id) { 
        var cursive = ''
        var ncr = ''
        ncr = this.textContent
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



