globals.keyboard = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false



function localInitialise () {
	}
	

var _h = {

end: {}
}



var keyboarddef = [
"§|1 ɨ ǃ ɴ|2 ø ˈ ‖|3 ɜ ɹ ɻ|4 ɾ $ ɽ|5 ɫ ˌ ʟ|6 ɐ ̯ ɓ|7 ɤ ɶ ˠ|8 ɵ * ɞ|9 œ ( ɠ|0 ̥ ) ̊|- - ‿ ͡|= ̩ + ǂ",
"q q ɒ ̝|w w ʍ ʷ|e e ɛ ɘ|r r ʁ ʀ|t t θ ʈ|y y ʏ ̞|u u ʊ ɦ|i i ɪ ̟|o o ɔ ʘ|p p ʋ ɸ|[ [ æ ɗ|] ] ʉ ̪",
"a a ɑ ̠|s s ʃ ʂ|d d ð ɖ|f f ɱ ɟ|g ɡ ɣ ɢ|h h ɥ ʰ|j j ɲ ʝ|k k ɬ ɮ|l l ʎ ɭ|; ; ː ̈|' ʲ ə ɚ|\\ # ̃ ̰",
"`|z z ʒ ʐ|x x χ ħ|c c ç ɕ|v v ʌ ʑ|b b β ʙ|n n ŋ ɳ|m m ɯ ɰ|, , ̆  ʼ|. . → ̤|/ / ʔ ʕ"
]


/*
var keyboarddef = [
"ɨ,ǃ,ɴ|ø,ˈ,‖|ɜ,ɹ,ɻ|ɾ,$,ɽ|ɫ,ˌ,ʟ|ɐ,̯,ɓ|ɤ,ɶ,ˠ|ɵ,*,ɞ|œ,(,ɠ|̥,),̊|-,‿,͡|̩,+,ǂ",
"q,ɒ,̝|w,ʍ,ʷ|e,ɛ,ɘ|r,ʁ,ʀ|t,θ,ʈ|y,ʏ,̞|u,ʊ,ɦ|i,ɪ,̟|o,ɔ,ʘ|p,ʋ,ɸ|[,æ,ɗ|],ʉ,̪",
"a,ɑ,̠|s,ʃ,ʂ|d,ð,ɖ|f,ɱ,ɟ|ɡ,ɣ,ɢ|h,ɥ,ʰ|j,ɲ,ʝ|k,ɬ,ɮ|l,ʎ,ɭ|;,ː,̈|ʲ,ə,ɚ|#,̃,̰",
"z,ʒ,ʐ|x,χ,ħ|c,ç,ɕ|v,ʌ,ʑ|b,β,ʙ|n,ŋ,ɳ|m,ɯ,ɰ|,̆,ʼ|.,→,̤|/,ʔ,ʕ",
]

var keyboardguide = [
"1,2,3,4,5,6,7,8,9,0,-,=,,,",
"q,w,e,r,t,y,u,i,o,p,[,],,,",
"a,s,d,f,g,h,j,k,l,;,',\\,,,",
"z,x,c,v,b,n,m,,.,/,,,,,"
]

var keyboardRowOffset = ['5px','20px','30px','50px']
*/

// overwrite standard function to make background white (for vowels)
function event_mouseoutChar ()  {
	// unhighlight this character
	this.style.backgroundColor = 'white'
		this.style.color = '#666'
	
	// unhighlight similar characters
	if (_h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = 'white'
			}
		}
	}


function clearHighlights () {
	// called when a character is clicked on - removes any highlighting added by shape
	
	nodelist = document.querySelectorAll('.c')
	for (var i=0;i<nodelist.length;i++) {
		nodelist[i].style.backgroundColor = 'white'
		}
	}


// overwrite standard function to display phonetic description

function event_mouseoverCharOLD ()  {
	// display character information
	span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	
	// add transliteration symbol and key binding
	var trans_key = ''
	var content = this.textContent.replace(defaults.ccbase,'')
	if (window.spreadsheetRows[content]) {
		//if (window.spreadsheetRows[content][cols.transLoc]) trans_key += '\u00A0\u00A0\u00A0\u00A0' + window.spreadsheetRows[content][cols.transLoc]+'\u00A0'
		if (window.spreadsheetRows[content][cols.key]) trans_key += '\u00A0\u00A0\u00A0[\u00A0' + window.spreadsheetRows[content][cols.key]+'\u00A0]'
		charinfo = document.createTextNode( this.title + trans_key )
		}


	span.appendChild(charinfo);
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	document.getElementById('phoneticInfo').textContent = spreadsheetRows[this.textContent][cols.typeLoc]
	
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
	
    document.getElementById('phoneticInfo').textContent = spreadsheetRows[this.textContent][cols.typeLoc]

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




var justLatinMap = `
a æ ɐ ɑ ɒ
b ʙ β ɓ
c ç ƈ ɕ
d ɖ ð ɗ ʣ ʤ ʥ
e ə ɛ ɘ ɚ ɜ ɝ ɞ
f ʄ ɸ
g ɢ ɠ ʛ
h ħ ɦ ɥ ʜ ɧ ʰ
i ɨ ɪ
j ɟ ʝ ʲ
k ƙ
l ɬ ɮ ɭ ʟ ɫ ˡ
m ɱ
n ɳ ɲ ŋ ɴ ⁿ
O θ
o ø ɵ œ ɔ ɶ φ σ
p ƥ
q ʠ
r ɾ ɽ ʀ ʁ ɹ ɻ ɺ
s ʃ ʂ
t ʈ ƭ ʦ ʧ ʨ
u ʉ ʊ μ
v ⱱ ʋ ʌ
w ʍ w ɯ ɰ ʷ
x χ ɤ
y ɣ ʎ ʏ ˠ
z ʒ ʐ ʑ
? ʔ ʕ ʢ ʡ ˤ
| ʘ ǀ ǁ ǃ ǂ
[ ̥ ̬ ̤ ̰ ͓ ̼ ̪ ̺ ̻
{ ̹ ̜ ̟ ̠ ̩ ̯ ̮ ̨˞ ̴
} ̙ ̘ ̞ ̝
] ̊ ̈ ̽  ͋ ̃ ͊ ̚ ᵊ ̆ ˑ
= ˭
_ ͡ ͜
: ː
' ʼ
; ˈ ˌ | ‖ . ‿
< ̋ ́ ̄ ̀ ̏ ̌ ̂ ᷄ ᷅ ᷈
> ˥ ˦ ˧ ˨ ˩ ˩˥ ˥˩ ˦˥ ˩˨ ˧˦˧
/ ↓ ↑ ↗ ↘
`

