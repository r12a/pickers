globals.showTranslit =  ''
globals.showVariantsOnMouseover = ''

function localInitialise () {
	}

function event_clickOnChar () {
	clearHighlights()
	add(this.textContent)
	if (this.dataset.variants && globals.showVariantsOnMouseover != ' ✓') {
		showVariants(this)
		}
	}

function showVariants (node)  {
	// display any variant forms in the dedicated area
		// first, get the character code point
		var codepoint = node.dataset.c.substr(1)
		console.log(codepoint)
		// now generate the img code for the variants
		var variants = node.dataset.variants.split(' ');
		var variantimgs = '<table><tbody>';
		for (var i=0; i<variants.length; i++) {
			if (variants[i] == 's') { variantimgs += '<tr><td class="hint top">Iso</td><td class="hint top"><img src="v/'+codepoint+'s.png" alt="" /></td></tr>';  }
			else if (variants[i] == 'i') { variantimgs += '<tr><td class="hint">Ini</td><td class="hint"><img src="v/'+codepoint+'i.png" alt="" /></td></tr>' }
			else if (variants[i] == 'm') { variantimgs += '<tr><td class="hint">Med</td><td class="hint"><img src="v/'+codepoint+'m.png" alt="" /></td></tr>' }
			else if (variants[i] == 'f') { variantimgs += '<tr><td class="hint">Fin</td><td class="hint"><img src="v/'+codepoint+'f.png" alt="" /></td></tr>' }
			else { 
				variantimgs += '<tr class="glyph"><td>'
				switch (variants[i].charAt(1)) {
					case '1': variantimgs += '<span class="hint">+①</span>'; break
					case '2': variantimgs += '<span class="hint">+②</span>'; break
					case '3': variantimgs += '<span class="hint">+③</span>'; break
					}
				variantimgs += '</td><td onclick="add(\''
				switch (variants[i].charAt(1)) {
					case '1': variantimgs += '&#x180B;'; break
					case '2': variantimgs += '&#x180C;'; break
					case '3': variantimgs += '&#x180D;'; break
					}
				variantimgs += '\')"><img src="v/'+codepoint+variants[i]+'.png" alt="" /></td></tr>'
				}
			}
		//alert( variantimgs );
		document.getElementById('variantshapes').innerHTML = variantimgs;
	}




function event_mouseoverCharXX ()  {
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

	// display any variant forms in the dedicated area
	if (globals.showVariantsOnMouseover) {
	if (this.dataset.variants) { // only do it if there's a class attribute
		// first, get the character code point
		var codepoint = this.id;
		// now generate the img code for the variants
		var variants = this.dataset.variants.split(' ');
		var variantimgs = '<table><tbody>';
		for (var i=0; i<variants.length; i++) {
			if (variants[i] == 's') { variantimgs += '<tr><td class="hint top">Iso</td><td class="hint top"><img src="v/'+codepoint+'s.png" alt="" /></td></tr>';  }
			else if (variants[i] == 'i') { variantimgs += '<tr><td class="hint">Ini</td><td class="hint"><img src="v/'+codepoint+'i.png" alt="" /></td></tr>' }
			else if (variants[i] == 'm') { variantimgs += '<tr><td class="hint">Med</td><td class="hint"><img src="v/'+codepoint+'m.png" alt="" /></td></tr>' }
			else if (variants[i] == 'f') { variantimgs += '<tr><td class="hint">Fin</td><td class="hint"><img src="v/'+codepoint+'f.png" alt="" /></td></tr>' }
			else { 
				variantimgs += '<tr class="glyph"><td>'
				switch (variants[i].charAt(1)) {
					case '1': variantimgs += '<span class="hint">+①</span>'; break
					case '2': variantimgs += '<span class="hint">+②</span>'; break
					case '3': variantimgs += '<span class="hint">+③</span>'; break
					}
				variantimgs += '</td><td onclick="add(\''
				switch (variants[i].charAt(1)) {
					case '1': variantimgs += '&#x180B;'; break
					case '2': variantimgs += '&#x180C;'; break
					case '3': variantimgs += '&#x180D;'; break
					}
				variantimgs += '\')"><img src="v/'+codepoint+variants[i]+'.png" alt="" /></td></tr>'
				}
			}
		//alert( variantimgs );
		document.getElementById('variantshapes').innerHTML = variantimgs;
		}
	else {
		document.getElementById('variantshapes').innerHTML = '<span class="hint"> </span>'
		}
	}
	}



var _h = {
'1828': ['1830', '1831', '182E', '182F'],
'1830': ['1831', '1828'],
'1831': ['182E', '182F', '1828', '1830'],
'182E': ['182F', '1828', '1830', '1831'],
'182F': ['1828', '1830', '1831', '182E'],
'1839': ['182A'],
'182A': ['1839'],
'183B': ['1819'],
'183C': ['183D', '1834'],
'182B': ['182A'],
'183D': ['183C', '1834'],
'182C': ['182D'],
'1834': ['183D', '183C'],
'183E': ['1840', '1841'],
'182D': ['182C'],
'1835': ['1836', '1838'],
'1841': ['183E'],
'1836': ['1835', '1838'],
'1838': ['1836', '1835'],
'1840': ['183E'],
'1800': ['1811'],
'1811': ['1800'],
'1803': ['1804'],
'1804': ['1803'],
'1819': ['183B'],

end: {}
}

var keyboarddef = [
"§|1 ᠑|2 ᠒|3 ᠓|4 ᠔|5 ᠕|6 ᠖|7 ᠗|8 ᠘|9 ᠙|0 ᠐|-|=",
"q ᠁ ᠴ|w ᠸ ᠣ|e ᠧ ᠡ|r ᠿ ᠷ|t ᠲ|y ᠶ|u ᠦ|i ᠢ|o ᠥ|p ᠫ|[|]",
"a ᠠ|s ᠰ|d ᠳ|f ᠹ|g ᠭ|h ᠾ ᠬ|j ᠵ|k ᠻ ᠺ|l ᡀ ᠯ|; 《 》|'|\\",
"`|z ᡁ ᠽ|x ᠱ|c ᡂ ᠼ|v ᠤ|b ᠪ|n ᠩ ᠨ|m ᠮ|, ᠂|. ᠃|/"
]



var justLatinMap = `
e ē ə
o ö ɔ
u ü ʊ
; . , ; ( ) [ ] / ?
c č
d ʣ ʤ
k ḳ
n ṅ ŋ
r ř
s š ʃ
t ʦ ʧ
y γ
`


/*
var translitCharacterMap = `
a a ᠠ
b b ᠪ
c č ᠴ ɕ ᡂ
d d ᠳ ʣ ᠽ
D ʤ ᠵ
e e ᠡ
E ə ᠧ
f f ᠹ
g g ᠭ
h h ᠾ
i i ᠢ
k k̇ ᠺ k̇ ᠻ
l l ᠯ lʰ ᡀ
m m ᠮ
n n ᠨ
N ŋ ᠩ
o ɔ ᠣ
O o ᠥ
p p ᠫ
r r ᠷ
s s ᠰ
S ʃ ᠱ
t t ᠲ ʦ ᠼ
u ʊ ᠤ
U u ᠦ
v v ᠸ
x x ᠬ
y y ᠶ
z ʐ ᠿ ʑ ᡁ
0 0 ᠐
1 1 ᠑
2 2 ᠒
3 3 ᠓
4 4 ᠔
5 5 ᠕
6 6 ᠖
7 7 ᠗
8 8 ᠘
9 9 ᠙
, , ᠂
. … ᠁ \u002E ᠃
: : ᠄
_ _ ᠊
* · \u180E
| ¶ ᠀ # ᠅
^ ¹ \u180B ² \u180C ³ \u180D
( ( (  < 〈 { 《 [ 〔
) ) ) > 〉 } 》 ] 〕
= ˖ \u200D ˣ \u200C
] - \u202F
`
*/


globals.showJSMCharMap = ''

var jsmCharacterMap = `
a a ᠠ
b b ᠪ
c č ᠴ c ᠼ ĉ ᡂ
d d ᠳ
e e ᠡ
E ë ᠧ
f f ᠹ
g g ᠭ
h h ᠾ
i i ᠢ
j ǰ ᠵ
k k ᠺ
l l ᠯ lh ᡀ
m m ᠮ
n n ᠨ ń ᡛ
N ng ᠩ
o o ᠣ
O ö ᠥ
p p ᠫ
q x ᠬ
r r ᠷ ž ᠿ
s s ᠰ š ᠱ
t t ᠲ
u u ᠤ
U ü ᠦ
v w ᠸ
y y ᠶ
z z ᠽ ẑ ᡁ
0 0 ᠐
1 1 ᠑
2 2 ᠒
3 3 ᠓
4 4 ᠔
5 5 ᠕
6 6 ᠖
7 7 ᠗
8 8 ᠘
9 9 ᠙
, , ᠂
. . ᠃
v ¹ \u180B ² \u180C ³ \u180D
= ˖ \u200D ˣ \u200C
: : ᠄
_ – ᠊
[ · \u180E
] - \u202F
`




var cyrlToMong = `
а а ᠠ
є є ᠡ
и и ᠢ
й й [ᠢ{ᠶ]
ы ы ᠢ
ь ь ᠢ
о о ᠣ
у у ᠤ
ө ө ᠥ
ү ү ᠦ
э э ᠧ
н н [ᠨ{ᠩ]
нг нг ᠩ
б б ᠪ
п п ᠫ
х х ᠬ
г г ᠭ
м м ᠮ
л л ᠯ
с с ᠰ
ш ш ᠱ
т т ᠲ
д д ᠳ
ч ч ᠴ
ж ж ᠵ
й й ᠶ
е е ᠶ
ё ё ᠶ
ю ю ᠶ
я я ᠶ
р р ᠷ
в в ᠸ
ф ф ᠹ
к к ᠺ
ц ц ᠴ
з з ᠵ
`

