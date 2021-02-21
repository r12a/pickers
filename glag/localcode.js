globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false


function localInitialise () {

	}

function toggleExtended (node) {
    var chars = document.querySelectorAll('.x')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display = 'none'
            }
		document.getElementById('translitvowels').style.display = 'none'
		}
    else {
        for (let i=0;i<chars.length;i++) {
            chars[i].style.display = 'inline-block'
            }
		document.getElementById('translitvowels').style.display = 'block'
		} 
	}


function toggleSubjoined (node) {
	if (node.classList.contains('shifted')) {
		document.getElementById('consonantGrid').style.display = 'flex'
		document.getElementById('subjoinedGrid').style.display = 'none'
		}
    else {
		document.getElementById('consonantGrid').style.display = 'none'
		document.getElementById('subjoinedGrid').style.display = 'flex'
		} 
	}


function toggleShift (node) {
    var chars = document.querySelectorAll('.c')

	if (node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.lc) chars[i].textContent = chars[i].dataset.lc
            else chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.uc) chars[i].textContent = chars[i].dataset.uc
            else chars[i].textContent = chars[i].textContent.toUpperCase()
            }
		}
	// reinitialise ids to codepoint values of character sequence (with no leading zeros)
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		content = node[n].textContent
		id=''
		for (i=0;i<content.length;i++) {
			id += convertChar2CP(content[i])
			}
		node[n].id = id
        node[n].dataset.c = 'c'+id
        dec = parseInt(id, 16)
        while (id.length<4) id = '0'+id
        node[n].title = 'U+'+id+': '+charData[content]
		}
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






