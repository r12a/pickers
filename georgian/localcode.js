globals.showTranslit =  ''


function localInitialise () {
	}



var justLatinMap = `
A A̱ 
B Ḇ 
D Ḏ Ǆ Ǆ̱ Ǳ Ǳ̱
E E̱ Ə Ə̇ Ə̱ Ə̱̇ Ɛ Ɛ̱ Ʃ Ʃ̱
G G̱ 
H H̱
I I̱
J J̱
K K̇ Ḵ Ḵ̇ 
L Ḻ 
M M̱
N Ṉ
O O̱ Ɔ Ɔ̱
P Ṗ P̱ Ṗ̱
Q Q̇ Q̱ Q̱̇
R Ṟ
S S̱
T Ṫ Ṯ Ṯ̇
U U̱
V V̱
W W̱
X Χ Χ̱
Y Ɣ Ɣ̱
Z Ẕ Ʒ Ʒ̱
a a̱ æ ɑ
b ḇ
c č ç ç̌ c̄̇ ċ c̱̄̇ ċ̱ č̄̇ č̇ č̱̄̇ č̱̇
d ḏ ʣ ʤ
e eː ē e̱ ə ə̇ ə̱ ə̱̇ ɛ ɛ̱
g ḡ ğ g̱ ɡ ɢ
h ẖ ʰ
i i̱ ɪ
j ǰ j̱
k k̇ ǩ ḵ ḵ̇
l ḻ ᴸ ᴸ̄
m m̱
n ṉ ᴺ
o oː ō o̱ œ ɔ ɔ̱
p ṗ ṗ̱
q q̇ q̱̇
r ṟ
s š ş s̱ ʃ ʃ̱
t tʃ ṫ ť ṯ ṯ̇
u u̱
v v̱
w w̱ ʷ ʷ̄ ̃
x χ χ̱
y ɣ ɣ̱
z ž ẕ ʒ ʒ̱
} ʔ
{ ʕ
' ’
`



var translitCharacterMap = `
a a̱ ⴀ a ა
A A̱ Ⴀ A Ა
b ḇ ⴁ b ბ
B Ḇ Ⴁ B Ბ
c č̱ʰ ⴙ c̱ʰ ⴚ ċ̱ ⴜ č̱̇ ⴝ čʰ ჩ cʰ ც ċ წ č̇ ჭ
C Č̱ʰ Ⴙ C̱ʰ Ⴚ Ċ̱ Ⴜ Č̱̇ Ⴝ Čʰ Ჩ Cʰ Ც Ċ Წ Č̇ Ჭ
d ḏ ⴃ ʣ̱ ⴛ ʤ̱ ⴟ d დ ʣ ძ ʤ ჯ
D Ḏ Ⴃ Ǳ̱ Ⴛ Ǆ̱ Ⴟ D Დ Ǳ Ძ Ǆ Ჯ
e ɛ̱ ⴄ e̱ ⴡ ə̱ ⴧ ə̱̇ ⴭ ɛ ე e ჱ ə ჷ ə̇ ჽ
E Ɛ̱ Ⴄ E̱ Ⴡ Ə̱ Ⴧ Ə̱̇ Ⴭ Ɛ Ე E Ჱ Ə Ჷ Ə̇ Ჽ
f f ჶ
F F Ჶ
g g̱ ⴂ q̱̇ ⴗ q̱ʰ ⴤ g გ ɢ ჹ
G G̱ Ⴂ G Გ ɢ Ჹ
h ẖ ⴠ h ჰ
H H̱ Ⴠ H Ჰ
i i ი
I I̱ Ⴈ I Ი
j i̱ ⴈ j̱ ⴢ j ჲ
J J̱ Ⴢ J Ჲ
k ḵ̇ ⴉ ḵʰ ⴕ k̇ კ kʰ ქ
K Ḵ̇ Ⴉ Ḵʰ Ⴕ K̇ Კ Kʰ Ქ
l ḻ ⴊ l ლ ᴸ ჾ
L Ḻ Ⴊ L Ლ ᴸ̄ Ჾ
m m̱ ⴋ m მ
M M̱ Ⴋ M Მ
n ṉ ⴌ n ნ ᴺ ჼ
N Ṉ Ⴌ N Ნ
o ɔ̱ ⴍ o̱ ⴥ ɔ ო o ჵ
O Ɔ̱ Ⴍ O̱ Ⴥ Ɔ Ო O Ჵ
p ṗ̱ ⴎ p̱ʰ ⴔ ṗ პ pʰ ფ
P Ṗ̱ Ⴎ P̱ʰ Ⴔ Ṗ Პ Pʰ Ფ
q q̇ ყ qʰ ჴ
Q Q̱̇ Ⴗ Q̱ʰ Ⴤ Q̇ Ყ Qʰ Ჴ
r ṟ ⴐ r რ
R Ṟ Ⴐ R Რ
s s̱ ⴑ ʃ̱ ⴘ s ს ʃ შ
S S̱ Ⴑ Ʃ̱ Ⴘ S Ს Ʃ Შ
t ṯ ⴇ ṯ̇ ⴒ t თ ṫ ტ
T Ṯ Ⴇ Ṯ̇ Ⴒ T Თ Ṫ Ტ
u w̱ ⴣ w ჳ
U W̱ Ⴣ W Ჳ
v v̱ ⴅ v ვ
V V̱ Ⴅ V Ვ
w ʷ ჿ
W ʷ̄ Ჿ
x χ̱ ⴞ χ ხ
X Χ̱ Ⴞ Χ Ხ
y u̱ ⴓ ɣ̱ ⴖ u უ ɣ ღ
Y U̱ Ⴓ Ɣ̱ Ⴖ U Უ Ɣ Ღ
z ẕ ⴆ ʒ̱ ⴏ z ზ ʒ ჟ
Z Ẕ Ⴆ Ʒ̱ Ⴏ Z Ზ Ʒ Ჟ
{ ʕ ჺ ʕ Ჺ
} ʔ ჸ ʔ Ჸ
{ ʕ ჺ ʕ Ჺ
} ʔ ჸ ʔ Ჸ
`

globals.showNationalTrans = ''

var nationalCharacterMap = `
a a ⴀ a ა
A a Ⴀ a Ა
b b ⴁ b ბ
B b Ⴁ b Ბ
c ch ⴙ ch' ⴝ ch ჩ ch' ჭ
C ch Ⴙ ch' Ⴝ ch Ჩ ch' Ჭ
d d ⴃ dz ⴛ d დ dz ძ
D d Ⴃ dz Ⴛ d Დ dz Ძ
e e ⴄ e ე
E e Ე
g g ⴂ gh ⴖ g გ gh ღ
G g Ⴂ gh Ⴖ g Გ gh Ღ
h h ⴠ h ჰ
H h Ⴠ h Ჰ
i i ⴈ i ი
I i Ⴈ i Ი
j j ⴟ j ჯ
J j Ⴟ j Ჯ
k k' ⴉ k ⴕ kh ⴞ k' კ k ქ kh ხ
K k' Ⴉ k Ⴕ kh Ⴞ k' Კ k Ქ kh Ხ
l l ⴊ l ლ
L l Ⴊ l Ლ
m m ⴋ m მ
M m Ⴋ m Მ
n n ⴌ n ნ
N n Ⴌ n Ნ
o o ⴍ p ⴔ o ო
O o Ⴍ o Ო
p p' ⴎ p' პ p ფ
P p' Ⴎ p Ⴔ p' Პ p Ფ
q q' ⴗ q' ყ
Q q' Ⴗ q' Ყ
r r ⴐ r რ
R e Ⴄ r Ⴐ r Რ
s s ⴑ sh ⴘ s ს sh შ
S s Ⴑ sh Ⴘ s Ს sh Შ
t t ⴇ t' ⴒ ts ⴚ ts' ⴜ t თ t' ტ ts ც ts' წ
T t Ⴇ t' Ⴒ ts Ⴚ ts' Ⴜ t Თ t' Ტ ts Ც ts' Წ
u u ⴓ u უ
U u Ⴓ u Უ
v v ⴅ v ვ
V v Ⴅ v Ვ
z z ⴆ zh ⴏ z ზ zh ჟ
Z z Ⴆ zh Ⴏ z Ზ zh Ჟ
`



var _h = {
'E81': ['E96', 'ED7'],

end: {}
}




var keyboarddef = [
"§ „  “|1 !|2 ?|3 №|4 §|5 %|6 :|7 .|8 ;|9 ,|0 /|-|=",
"q ღ|w ჯ|e უ|r კ|t ე ჱ|y ნ|u გ|i შ|o წ|p ზ|[ ხ ჴ|] ც",
"a ფ ჶ|s ძ|d ვ ჳ|f თ|g ა|h პ|j რ|k ო|l ლ|; დ|' ჟ|\\",
"`|z ჭ|x ჩ|c ყ|v ს|b მ|n ი ჲ|m ტ|, ქ|. ბ|/ ჰ ჵ"
]


/*  FOR KEYBOARDS WITH DIFFERENT CHARS ON SHIFT LEVEL
var keyboardUC = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t උ|y|u|i|o|p|[|]",
"a ඒ ඌ ඖ|s|d ො ඎ ෲ|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]


function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }
*/


function toggleShift (node, LC, UC) {
    var chars = document.querySelectorAll('.c')

    if (node.className =='unshifted') {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toLowerCase()
            }
		node.className = 'shifted'
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            chars[i].textContent = chars[i].textContent.toUpperCase()
            }
		node.className = 'unshifted'
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

