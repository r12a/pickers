globals.showLOCTrans = ''
globals.showTransliteration = ''
globals.showIPATrans = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
{ wrong:"ٳ", right:"اٟ" },
{ wrong:"ێ", right:"یٚ" },
{ wrong:"ۆ", right:"وٚ" },
{ wrong:"ځ", right:"حٔ" },
{ wrong:"ݬ", right:"رٔ" },
{ wrong:"ࢡ", right:"بٔ" },
{ wrong:"ي", right:"ی" },
{ wrong:"ئ", right:"یٔ" },
{ wrong:"ك", right:"ک" },
{ wrong:"ٛ", right:"ْ" },
{ wrong:"ٮ۪", right:"ؠ" },
{ wrong:"ۅ", right:"ۄ" },
//{ wrong:"", right:"" },
//{ wrong:"", right:"" },
]






function localInitialise () {

	}


var _h = {
'636': ['635'],
'635': ['636'],
'634': ['633'],
'633': ['634'],
'628': ['62A', '628', '679', '67E', '62B'],
'62A': ['628', '679', '67E', '62B', '628'],
'679': ['67E', '62B', '628', '62A', '628'],
'67E': ['62B', '628', '62A', '628', '679'],
'62B': ['628', '62A', '628', '679', '67E'],
'620': ['6CC656', '6CC'],
'6CC656': ['6CC', '620'],
'6CC': ['620', '6CC656'],
'688': ['630', '648', '632', '631', '648', '6C6', '6C4', '6C4622', '648657', '62F'],
'630': ['648', '632', '631', '648', '6C6', '6C4', '6C4622', '648657', '62F', '688'],
'648': ['632', '631', '648', '6C6', '6C4', '6C4622', '648657', '62F', '688', '630'],
'632': ['631', '648', '6C6', '6C4', '6C4622', '648657', '62F', '688', '630', '648'],
'631': ['648', '6C6', '6C4', '6C4622', '648657', '62F', '688', '630', '648', '632'],
'6C6': ['6C4', '6C4622', '648657', '62F', '688', '630', '648', '632', '631', '648'],
'6C4': ['6C4622', '648657', '62F', '688', '630', '648', '632', '631', '648', '6C6'],
'6C4622': ['648657', '62F', '688', '630', '648', '632', '631', '648', '6C6', '6C4'],
'648657': ['62F', '688', '630', '648', '632', '631', '648', '6C6', '6C4', '6C4622'],
'62F': ['688', '630', '648', '632', '631', '648', '6C6', '6C4', '6C4622', '648657'],
'6BE': ['645', '6C1'],
'645': ['6C1', '6BE'],
'6C1': ['6BE', '645'],
'67E6BE': ['62A6BE', '62B6BE', '6796BE', '6866BE', '6A96BE', '6BE'],
'62A6BE': ['62B6BE', '6796BE', '6866BE', '6A96BE', '6BE', '67E6BE'],
'62B6BE': ['6796BE', '6866BE', '6A96BE', '6BE', '67E6BE', '62A6BE'],
'6796BE': ['6866BE', '6A96BE', '6BE', '67E6BE', '62A6BE', '62B6BE'],
'6866BE': ['6A96BE', '6BE', '67E6BE', '62A6BE', '62B6BE', '6796BE'],
'6A96BE': ['6BE', '67E6BE', '62A6BE', '62B6BE', '6796BE', '6866BE'],
'6BE': ['67E6BE', '62A6BE', '62B6BE', '6796BE', '6866BE', '6A96BE'],
'638': ['637'],
'637': ['638'],
'642': ['641'],
'641': ['642'],
'62E': ['62C', '686', '62D'],
'62C': ['686', '62D', '62E'],
'686': ['62D', '62E', '62C'],
'62D': ['62E', '62C', '686'],
'63A': ['639'],
'639': ['63A'],
'6A9': ['6AF', '644'],
'6AF': ['644', '6A9'],
'644': ['6A9', '6AF'],
'622': ['6C4622', '6F1', '672', '627'],
'6C4622': ['6F1', '672', '627', '622'],
'6F1': ['672', '627', '622', '6C4622'],
'672': ['627', '622', '6C4622', '6F1'],
'627': ['622', '6C4622', '6F1', '672'],
'646': ['6BA'],
'6BA': ['646'],
end: {}
}


var keyboarddef = [
]



function setLocalButtons () {
	// overrides the function that hides the makeEg and charLink buttons
	
	}



function event_mouseoverCharXXX ()  {
	// overrides the function in shared20/code.js to add shaping forms for all syriac styles
	
	// add cursive forms to table
	var char = this.textContent
	/*if (spreadsheetRows[char][cols.shape]) {
        var cursive = ''
        if (spreadsheetRows[char][cols.shape].length < 5) cursive = 'ـ'+char+' '+char
        else cursive = char+'ـ'+char+'ـ'+char+' '+char
        document.getElementById('cursive').innerHTML = cursive
		}*/

if (spreadsheetRows[char] && spreadsheetRows[char][cols.shape]) {
		document.getElementById('cursive').innerHTML = spreadsheetRows[char][cols.shape].replace(/ /g,'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;').replace(/ـ/g,'\u200D')
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


/*
hints

 ص ض 
س ش 
 ث ب ت ب  ٹ  پ
 ی ؠ یٖ
 د ڈ ذ و ز ر و ۆ ۄ ۄآ وٗ
 ہ ھ م 
ھ پھ تھ ثھ ٹھ چھ کھ
ط ظ
ف ق
ح خ ج چ
ع غ
ل ک گ
 ا آ ۄآ ۱ ٲ
ں ن

*/

