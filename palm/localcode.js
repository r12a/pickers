globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


function localInitialise () {

	}



var _h = {
"10861": ["10871", "1086A", "1086E"],
"10863": ["1086A", "1086F", "10870", "1087D", "10874"],
"10865": ["1086B", "10866", "1086D"],
"10866": ["1086D", "10865", "1086B"],
"10867": ["10872"],
"10870": ["1087D", "10874", "10863", "1086A", "1086F"],
"10871": ["1086A", "1086E", "10861"],
"10872": ["10867"],
"10873": ["1086C", "10876"],
"10874": ["10863", "1086A", "1086F", "10870", "1087D"],
"10876": ["10873", "1086C"],
"1086A": ["1086E", "10861", "10871",  "1086F", "10870", "1087D", "10874"],
"1086E": ["10861", "10871", "1086A"],
"1086F": ["10870", "1087D", "10874", "10863", "1086A"],
"1087D": ["10874", "10863", "1086A", "1086F", "10870"],
"1086C": ["10876", "10873"],
"1086D": ["10865", "1086B", "10866"],
"1086B": ["10866", "1086D", "10865"],
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






