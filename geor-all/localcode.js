globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false





// list of fonts to add to the standard selection
window.fontsuggestions =  
``


function localInitialise () {
	}






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


function toggleShift (node) {
    var chars = document.querySelectorAll('.c')

	if (! node.classList.contains('shifted')) {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.uc) chars[i].textContent = chars[i].dataset.uc
            else chars[i].textContent = chars[i].textContent.toUpperCase()
            }
		} 
	else {
        for (let i=0;i<chars.length;i++) {
            if (chars[i].dataset.lc) chars[i].textContent = chars[i].dataset.lc
            else chars[i].textContent = chars[i].textContent.toLowerCase()
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
