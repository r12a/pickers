globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


function localInitialise () {

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
		if (han[chars[i]]) {
			var hex = chars[i].codePointAt(0).toString(16).toUpperCase()
			while (hex.length<0) hex = '0'+hex
			out += '<span class="dbCharContainer"><span class="dbCharItem">'+chars[i]+'</span>'
			out += '<span class="dbCharSubContainer" style="display:flex;flex-direction:column;"><span class="dbCharInfo"><span><em>yomi</em> '+han[chars[i]].jk.toLowerCase()+' '+han[chars[i]].jo+'</span><span><em>def.</em>  <span class="ipa">'+han[chars[i]].def+'</span></span></span><span class="dbCharName">U+'+hex+': IDEOGRAPHIC CHARACTER</span></span></span>'
			}
		
		else out += buildDBInfoLine(chars[i], true, cp, i, showAll)
		}
	
	out += '</span>'


	return out.trim()
	}





function toggleDirectionality () {
	// switch the direction of the input box between vertical and horizontal
	if (document.getElementById('output').style.writingMode === 'vertical-rl') document.getElementById('output').style.writingMode = 'horizontal-tb' 
	else document.getElementById('output').style.writingMode = 'vertical-rl' 
	}






var _h = {
'974': ['973', '93B', '93A', '93E', '93B'],
'973': ['93B', '93A', '93E', '93B', '974'],
'93B': ['93A', '93E', '93B', '974', '973'],
'93A': ['93E', '93B', '974', '973', '93B'],
'93E': ['93B', '974', '973', '93B', '93A'],
'93B': ['974', '973', '93B', '93A', '93E'],
'908': ['919', '939', '907'],
'919': ['939', '907', '908'],
'939': ['907', '908', '919'],
'907': ['908', '919', '939'],
'946': ['947', '94A', '94B', '90E'],
'947': ['94A', '94B', '90E', '946'],
'94A': ['94B', '90E', '946', '947'],
'94B': ['90E', '946', '947', '94A'],
'90E': ['946', '947', '94A', '94B'],
'92B': ['915'],
'915': ['92B'],
'92A': ['925', '92F'],
'925': ['92F', '92A'],
'92F': ['92A', '925'],
'938': ['92E'],
'92E': ['938'],
'92C': ['937', '935'],
'937': ['935', '92C'],
'935': ['92C', '937'],

end: {}
}


var keyboarddef = [
"§ ॊ ऒ|1 १ ऍ|2 २ ॅ ऽ|3 ३ ्र|4 ४ र् ₹|5 ५ ज्ञ|6 ६ त्र|7 ७ क्ष|8 ८ श्र|9 ९ (|0 ० ) ॰|- ः ॢ|= ृ ऋ ॄ",
"q ौ औ|w ै ऐ|e ा आ|r ी ई|t ू ऊ|y ब भ|u ह ङ|i ग घ ग़|o द ध|p ज झ ज़|[ ड ढ ड़|] ़ ञ",
"a ो ओ|s े ए|d ् अ|f ि इ|g ु उ|h प फ|j र ऱ|k क ख क़|l त थ|; च छ|' ट ठ ॑|\\ ॉ ऑ",
"` ॊ ऒ `|z ॆ ऎ|x ं ँ ॐ|c म ण|v न ऩ|b व ऴ|n ल ळ ऌ|m स श|,  ष|. । ॥|/ य य़"
]



globals.showISOCharMap = ''

var isoCharacterMap = `
a ā ा ai ै au ौ
A a अ ā आ ai ऐ au औ
b b ब
B bh भ
c c च
C ch छ
d d द ḍ ड
D dh ध ḍh ढ
e ē े
E ē ए
f f \u095E
g g ग ġ \u095A
G gh घ
h h ह ḥ ः
i i ि ī ी
I i इ ī ई
j j ज
J jh झ
k k क
K kh ख k͟h \u0959
l l ल ḷ ळ
m m म ṁ ं
n n न ñ ञ ṇ ण
N ṅ ङ ̃ ँ
o ō ो
O ō ओ
p p प
P ph फ
q q \u0958
r r र ṛ \u095C ṛh \u095D
R r̥ ृ r̥̄ ॄ r̥ ऋ r̥̄ ॠ
s s स ś श ṣ ष
t t त ṭ ट
T th थ ṭh ठ
u u ु ū ू
U u उ ū ऊ
v v व
y y य
z z \u095B
0 0 ०
1 1 १
2 2 २
3 3 ३
4 4 ४
5 5 ५
6 6 ६
7 7 ७
8 8 ८
9 9 ९
\\ ' ऽ
`






