globals.showTranslit =  ''
globals.typeAssist = ''
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]


function localInitialise () {

	}


_characterSet = 
"क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह ् क़ ख़ ग़ ऩ ड़ ढ़ ऱ य़ ळ ऴ फ़ ज़ ऄ अ आ इ ई उ ऊ ऋ ऍ ऎ ए ऐ ऑ ऒ ओ औ ा ि ी ु ू ृ ॅ ॆ े ै ॉ ॊ ो ौ ँ ं ः ़ ॑ ॒ ॓ ॔ ० १ २ ३ ४ ५ ६ ७ ८ ९ ₹ । ॥ ॰ ॐ ऽ ॻ ॼ ॽ ॾ ॿ ॠ ऌ ॡ ॄ ॢ ॣ"


var _h = {
'900': ['901','902'],
'901': ['945','902'],
'902': ['901','900','971'],
'904': ['905','946','947','912','913','914','94A'],
'905': ['904','906','972','973','976','977'],
'906': ['905','911','912','913','914','974','975'],
'907': ['91D','908'],
'908': ['91D','907'],
'909': ['90A'],
'90A': ['909'],
'90B': ['960','943'],
'90C': ['962','961','932'],
'90D': ['90E','90F','910','945'],
'90E': ['90D','90F','910','946'],
'90F': ['90D','90E','910'],
'910': ['90D','90F','90E','947'],
'911': ['906','945'],
'912': ['906','946','94A'],
'913': ['906','947','94B'],
'914': ['906','948','94C'],
'915': ['91593C','92B','958'],
'91593C': ['915','92B','958'],
'916': ['91693C','959'],
'91693C': ['916','959'],
'917': ['91793C','95A','97B'],
'91793C': ['917','95A','97B'],
'918': ['927','91B','96C'],
'919': ['92193C','95C','921'],
'91A': ['91C','91E','935'],
'91B': ['927'],
'91C': ['91A','91E','935','97C','95B','91C93C','979'],
'91C93C': ['97C','95B','91C','979'],
'91D': ['907','908'],
'91E': ['91C','91A','935'],
'91F': ['922','926'],
'921': ['92193C','97E','95C','919'],
'92193C': ['919','95C','921','97E'],
'922': ['92293C','95D','91F','926'],
'92293C': ['922','95D','926'],
'923': ['92A'],
'924': ['928'],
'925': ['92D'],
'926': ['922','91F'],
'927': ['91B','96C'],
'928': ['929'],
'929': ['928'],
'92A': ['92F','92E','923','92B'],
'92B': ['92B93C','95E','915','92A'],
'92B93C': ['92B','95E'],
'92C': ['97F','937','935'],
'92D': ['92E','925'],
'92E': ['92A','92D','938'],
'92F': ['92F93C','95F','92A','97A'],
'92F93C': ['92F','95F'],
'930': ['931','938'],
'931': ['930'],
'932': ['90C','961'],
'933': ['934'],
'934': ['933'],
'935': ['91C','91E','91A'],
'936': ['967'],
'937': ['92F','97A'],
'938': ['92E','930'],
'93A': ['951','93B','973','974'],
'93B': ['93E','93A','973','974'],
'93E': ['905','906','917','936','923','949','93B'],
'940': ['94B','94A'],
'943': ['90B'],
'944': ['960'],
'945': ['949','90D','911','901','955'],
'946': ['94A','90E','912','904'],
'947': ['94B','910','913'],
'948': ['94C','914'],
'949': ['945','911'],
'94A': ['946','904','912'],
'94B': ['947','913'],
'94C': ['948','914'],
'94E': ['93E'],
'94F': ['975'],
'952': ['97B','97C','97E','97F'],
'955': ['945','949'],
'956': ['976'],
'957': ['977'],
'958': ['91593C','915'],
'959': ['91693C','916'],
'95A': ['91793C','917','97B'],
'95B': ['97C','91C93C','91C'],
'95C': ['919','92193C','921','97E'],
'95D': ['922','92293C','926'],
'95E': ['92B','92B93C'],
'95F': ['92F','92F93C'],
'960': ['944','90B'],
'961': ['90C','932','963'],
'962': ['90C'],
'963': ['961'],
'967': ['936'],
'971': ['902','900','901'],
'972': ['945','905','911'],
'973': ['93A','905','974'],
'974': ['93B','906','973'],
'975': ['94F','906'],
'976': ['956','905'],
'977': ['957','905'],
'979': ['91C93C','91C'],
'97A': ['92F','937'],
'97B': ['91793C','95A','917','952'],
'97C': ['91C93C','95B','91C','952'],
'97E': ['92193C','921','95C','952'],
'97F': ['92C','952'],

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
e e ॆ ē े ê ॅ
E e ऎ ē ए ê ऍ
f f \u095E f फ़
g g ग ġ \u095A ġ ग़
G gh घ
h h ह ḥ ः
i i ि ī ी
I i इ ī ई
j j ज
J jh झ
k k क k͟h ख़
K kh ख k͟h \u0959
l l ल ḷ ळ ḻ \u0934 ḻ ऴ
L l̥ ॢ l̥ ऌ
m m म ṁ ं
n n न ñ ञ ṇ ण ṉ \u0929 ṉ ऩ
N ṅ ङ
o o ॊ ō ो ô ॉ
O o ऒ ō ओ ô ऑ
p p प
P ph फ
q q \u0958 q क़
r r र ṟ \u0931 ṛ \u095C ṛh \u095D ṟ ऱ ṛ ड़ ṛh ढ़
R r̥ ृ r̥ ऋ r̥̄ ॠ
s s स ś श ṣ ष
t t त ṭ ट
T th थ ṭh ठ
u u ु ū ू
U u उ ū ऊ
v v व
y y य ẏ \u095F ẏ य़
z z \u095B z ज़
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
[ ¶ ॥
. . ।
* ͓ ्
`






