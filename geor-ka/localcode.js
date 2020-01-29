globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


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
"1C91": ["10D2", "1C92", "10D6", "1C96", "10D1"],
"10D2": ["1C92", "10D6", "1C96", "10D1", "1C91"],
"1C92": ["10D6", "1C96", "10D1", "1C91", "10D2"],
"10D6": ["1C96", "10D1", "1C91", "10D2", "1C92"],
"1C96": ["10D1", "1C91", "10D2", "1C92", "10D6"],
"10D1": ["1C91", "10D2", "1C92", "10D6", "1C96"],
"10D3": ["10D8", "1C93", "1C97", "1C98", "10D7"],
"10D8": ["1C93", "1C97", "1C98", "10D7", "10D3"],
"1C93": ["1C97", "1C98", "10D7", "10D3", "10D8"],
"1C97": ["1C98", "10D7", "10D3", "10D8", "1C93"],
"1C98": ["10D7", "10D3", "10D8", "1C93", "1C97"],
"10D7": ["10D3", "10D8", "1C93", "1C97", "1C98"],
"10E8": ["10DB", "1CAB", "1CA8", "1C9B", "10EB"],
"10DB": ["1CAB", "1CA8", "1C9B", "10EB", "10E8"],
"1CAB": ["1CA8", "1C9B", "10EB", "10E8", "10DB"],
"1CA8": ["1C9B", "10EB", "10E8", "10DB", "1CAB"],
"1C9B": ["10EB", "10E8", "10DB", "1CAB", "1CA8"],
"10EB": ["10E8", "10DB", "1CAB", "1CA8", "1C9B"],
"10D9": ["10E4", "10EA", "10D5", "10F0", "1C9E", "1C99", "1CA4", "1CAA", "1C95", "1CB0", "10DE"],
"10E4": ["10EA", "10D5", "10F0", "1C9E", "1C99", "1CA4", "1CAA", "1C95", "1CB0", "10DE", "10D9",  "10EF", "1CA2", "1CAC", "1CAD", "1CA7", "1CAF", "10E2", "10EC", "10ED"],
"10EA": ["10D5", "10F0", "1C9E", "1C99", "1CA4", "1CAA", "1C95", "1CB0", "10DE", "10D9", "10E4"],
"10D5": ["10F0", "1C9E", "1C99", "1CA4", "1CAA", "1C95", "1CB0", "10DE", "10D9", "10E4", "10EA"],
"10F0": ["1C9E", "1C99", "1CA4", "1CAA", "1C95", "1CB0", "10DE", "10D9", "10E4", "10EA", "10D5"],
"1C9E": ["1C99", "1CA4", "1CAA", "1C95", "1CB0", "10DE", "10D9", "10E4", "10EA", "10D5", "10F0"],
"1C99": ["1CA4", "1CAA", "1C95", "1CB0", "10DE", "10D9", "10E4", "10EA", "10D5", "10F0", "1C9E"],
"1CA4": ["1CAA", "1C95", "1CB0", "10DE", "10D9", "10E4", "10EA", "10D5", "10F0", "1C9E", "1C99",  "1CAF", "10E2", "10EC", "10ED", "10E7", "10EF", "1CA2", "1CAC", "1CAD"],
"1CAA": ["1C95", "1CB0", "10DE", "10D9", "10E4", "10EA", "10D5", "10F0", "1C9E", "1C99", "1CA4"],
"1C95": ["1CB0", "10DE", "10D9", "10E4", "10EA", "10D5", "10F0", "1C9E", "1C99", "1CA4", "1CAA"],
"1CB0": ["10DE", "10D9", "10E4", "10EA", "10D5", "10F0", "1C9E", "1C99", "1CA4", "1CAA", "1C95"],
"10DE": ["10D9", "10E4", "10EA", "10D5", "10F0", "1C9E", "1C99", "1CA4", "1CAA", "1C95", "1CB0"],
"10E9": ["10DC", "10E1", "1CA9", "1CAE", "1C9C", "1CA1", "10EE"],
"10DC": ["10E1", "1CA9", "1CAE", "1C9C", "1CA1", "10EE", "10E9"],
"10E1": ["1CA9", "1CAE", "1C9C", "1CA1", "10EE", "10E9", "10DC"],
"1CA9": ["1CAE", "1C9C", "1CA1", "10EE", "10E9", "10DC", "10E1"],
"1CAE": ["1C9C", "1CA1", "10EE", "10E9", "10DC", "10E1", "1CA9"],
"1C9C": ["1CA1", "10EE", "10E9", "10DC", "10E1", "1CA9", "1CAE"],
"1CA1": ["10EE", "10E9", "10DC", "10E1", "1CA9", "1CAE", "1C9C"],
"10EE": ["10E9", "10DC", "10E1", "1CA9", "1CAE", "1C9C", "1CA1"],
"10E5": ["10DF", "10E3", "1CA5", "1C9F", "1CA3", "1C94", "10D4"],
"10DF": ["10E3", "1CA5", "1C9F", "1CA3", "1C94", "10D4", "10E5"],
"10E3": ["1CA5", "1C9F", "1CA3", "1C94", "10D4", "10E5", "10DF"],
"1CA5": ["1C9F", "1CA3", "1C94", "10D4", "10E5", "10DF", "10E3"],
"1C9F": ["1CA3", "1C94", "10D4", "10E5", "10DF", "10E3", "1CA5"],
"1CA3": ["1C94", "10D4", "10E5", "10DF", "10E3", "1CA5", "1C9F",  "10DD", "10E6", "10E0", "10DA", "1CA6", "1CA0", "1C9A"],
"1C94": ["10D4", "10E5", "10DF", "10E3", "1CA5", "1C9F", "1CA3"],
"10D4": ["10E5", "10DF", "10E3", "1CA5", "1C9F", "1CA3", "1C94"],
"10E6": ["10E0", "10DA", "1CA6", "1CA0", "1C9A", "1C9D", "1CA3", "10DD"],
"10E0": ["10DA", "1CA6", "1CA0", "1C9A", "1C9D", "1CA3", "10DD", "10E6"],
"10DA": ["1CA6", "1CA0", "1C9A", "1C9D", "1CA3", "10DD", "10E6", "10E0"],
"1CA6": ["1CA0", "1C9A", "1C9D", "1CA3", "10DD", "10E6", "10E0", "10DA"],
"1CA0": ["1C9A", "1C9D", "1CA3", "10DD", "10E6", "10E0", "10DA", "1CA6"],
"1C9A": ["1C9D", "1CA3", "10DD", "10E6", "10E0", "10DA", "1CA6", "1CA0"],
"1C9D": ["1CA3", "10DD", "10E6", "10E0", "10DA", "1CA6", "1CA0", "1C9A"],
"10DD": ["10E6", "10E0", "10DA", "1CA6", "1CA0", "1C9A", "1C9D", "1CA3"],
"10EC": ["10ED", "10E7", "10E4", "10EF", "1CA2", "1CAC", "1CAD", "1CA7", "1CA4", "1CAF", "10E2"],
"10ED": ["10E7", "10E4", "10EF", "1CA2", "1CAC", "1CAD", "1CA7", "1CA4", "1CAF", "10E2", "10EC"],
"10E7": ["10E4", "10EF", "1CA2", "1CAC", "1CAD", "1CA7", "1CA4", "1CAF", "10E2", "10EC", "10ED"],
"10EF": ["1CA2", "1CAC", "1CAD", "1CA7", "1CA4", "1CAF", "10E2", "10EC", "10ED", "10E7", "10E4"],
"1CA2": ["1CAC", "1CAD", "1CA7", "1CA4", "1CAF", "10E2", "10EC", "10ED", "10E7", "10E4", "10EF"],
"1CAC": ["1CAD", "1CA7", "1CA4", "1CAF", "10E2", "10EC", "10ED", "10E7", "10E4", "10EF", "1CA2"],
"1CAD": ["1CA7", "1CA4", "1CAF", "10E2", "10EC", "10ED", "10E7", "10E4", "10EF", "1CA2", "1CAC"],
"1CA7": ["1CA4", "1CAF", "10E2", "10EC", "10ED", "10E7", "10E4", "10EF", "1CA2", "1CAC", "1CAD"],
"1CAF": ["10E2", "10EC", "10ED", "10E7", "10E4", "10EF", "1CA2", "1CAC", "1CAD", "1CA7", "1CA4"],
"10E2": ["10EC", "10ED", "10E7", "10E4", "10EF", "1CA2", "1CAC", "1CAD", "1CA7", "1CA4", "1CAF"],

end: {}
}


/*

ბ Ბ გ Გ ზ Ზ
თ დ ი Დ Თ Ი
ძ შ მ Ძ Შ Მ
პ კ ფ ც ვ ჰ Პ Კ Ფ Ც Ვ Ჰ
ხ ჩ ნ ს Ჩ Ხ Ნ Ს
ე ქ ჟ უ Ქ Ჟ Უ Ე
ო ღ რ ლ Ღ Რ Ლ Ო Უ
ტ წ ჭ ყ ფ ჯ Ტ Წ Ჭ Ყ Ფ Ჯ

*/






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

