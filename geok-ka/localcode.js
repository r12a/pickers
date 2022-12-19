globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false


window.charCheckerList = [
//{ wrong:"သြော်", right:"ဪ" },
//{ wrong:"သြ", right:"ဩ" },
]





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
"2D0A": ["2D07", "2D1C", "2D05", "2D10", "2D13", "2D0D", "2D20"],
"2D07": ["2D1C", "2D05", "2D10", "2D13", "2D0D", "2D20", "2D0A"],
"2D1C": ["2D05", "2D10", "2D13", "2D0D", "2D20", "2D0A", "2D07"],
"2D05": ["2D10", "2D13", "2D0D", "2D20", "2D0A", "2D07", "2D1C"],
"2D10": ["2D13", "2D0D", "2D20", "2D0A", "2D07", "2D1C", "2D05"],
"2D13": ["2D0D", "2D20", "2D0A", "2D07", "2D1C", "2D05", "2D10"],
"2D0D": ["2D20", "2D0A", "2D07", "2D1C", "2D05", "2D10", "2D13"],
"2D20": ["2D0A", "2D07", "2D1C", "2D05", "2D10", "2D13", "2D0D",  "2D04", "2D1A", "2D19"],
"2D0E": ["2D11", "2D18", "2D01"],
"2D11": ["2D18", "2D01", "2D0E"],
"2D18": ["2D01", "2D0E", "2D11"],
"2D01": ["2D0E", "2D11", "2D18"],
"2D19": ["2D16", "2D20", "2D04", "2D1A"],
"2D16": ["2D20", "2D04", "2D1A", "2D19"],
"2D04": ["2D1A", "2D19", "2D16", "2D20"],
"2D1A": ["2D19", "2D16", "2D20", "2D04"],
"2D0B": ["2D1B"],
"2D1B": ["2D0B"],
"10BC": ["10B2"],
"10B2": ["10BC"],
"10B7": ["10AF", "10A1"],
"10AF": ["10A1", "10B7"],
"10A1": ["10B7", "10AF"],
"10A6": ["10B1"],
"10B1": ["10A6"],
"10A5": ["10A8", "10A4", "10A2"],
"10A8": ["10A4", "10A2", "10A5"],
"10A4": ["10A2", "10A5", "10A8"],
"10A2": ["10A5", "10A8", "10A4"],
"10B3": ["10AD", "10A3"],
"10AD": ["10A3", "10B3"],
"10A3": ["10B3", "10AD"],

"c2D0A": ["c2D07", "c2D1C", "c2D05", "c2D10", "c2D13", "c2D0D", "c2D20"],
"c2D07": ["c2D1C", "c2D05", "c2D10", "c2D13", "c2D0D", "c2D20", "c2D0A"],
"c2D1C": ["c2D05", "c2D10", "c2D13", "c2D0D", "c2D20", "c2D0A", "c2D07"],
"c2D05": ["c2D10", "c2D13", "c2D0D", "c2D20", "c2D0A", "c2D07", "c2D1C"],
"c2D10": ["c2D13", "c2D0D", "c2D20", "c2D0A", "c2D07", "c2D1C", "c2D05"],
"c2D13": ["c2D0D", "c2D20", "c2D0A", "c2D07", "c2D1C", "c2D05", "c2D10"],
"c2D0D": ["c2D20", "c2D0A", "c2D07", "c2D1C", "c2D05", "c2D10", "c2D13"],
"c2D20": ["c2D0A", "c2D07", "c2D1C", "c2D05", "c2D10", "c2D13", "c2D0D",  "c2D04", "c2D1A", "c2D19"],
"c2D0E": ["c2D11", "c2D18", "c2D01"],
"c2D11": ["c2D18", "c2D01", "c2D0E"],
"c2D18": ["c2D01", "c2D0E", "c2D11"],
"c2D01": ["c2D0E", "c2D11", "c2D18"],
"c2D19": ["c2D16", "c2D20", "c2D04", "c2D1A"],
"c2D16": ["c2D20", "c2D04", "c2D1A", "c2D19"],
"c2D04": ["c2D1A", "c2D19", "c2D16", "c2D20"],
"c2D1A": ["c2D19", "c2D16", "c2D20", "c2D04"],
"c2D0B": ["c2D1B"],
"c2D1B": ["c2D0B"],
"c10BC": ["c10B2"],
"c10B2": ["c10BC"],
"c10B7": ["c10AF", "c10A1"],
"c10AF": ["c10A1", "c10B7"],
"c10A1": ["c10B7", "c10AF"],
"c10A6": ["c10B1"],
"c10B1": ["c10A6"],
"c10A5": ["c10A8", "c10A4", "c10A2"],
"c10A8": ["c10A4", "c10A2", "c10A5"],
"c10A4": ["c10A2", "c10A5", "c10A8"],
"c10A2": ["c10A5", "c10A8", "c10A4"],
"c10B3": ["c10AD", "c10A3"],
"c10AD": ["c10A3", "c10B3"],
"c10A3": ["c10B3", "c10AD"],

end: {}
}




// source: https://en.wikipedia.org/wiki/Georgian_keyboard_layout Standard Keyboard

var keyboarddef = [
"§ „  “|1 !|2 ?|3 №|4 §|5 %|6 :|7 .|8 ;|9 ,|0 /|-|=",
"q ⴖ|w ⴟ|e ⴓ|r ⴉ|t ⴄ ⴡ|y ⴌ|u ⴂ|i ⴘ|o ⴜ|p ⴆ|[ ⴞ ⴤ|] ⴚ",
"a ⴔ|s ⴛ|d ⴅ ⴣ|f ⴇ|g ⴀ|h ⴎ|j ⴐ|k ⴍ|l ⴊ|; ⴃ|' ⴏ|\\",
"`|z ⴝ|x ⴙ|c ⴗ|v ⴑ|b ⴋ|n ⴈ ⴢ|m ⴒ|, ⴕ|. ⴁ|/ ⴠ ⴥ"
]


var keyboardUC = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"Q Ⴖ|W Ⴟ|E Ⴓ|R Ⴉ|T Ⴄ Ⴡ|Y Ⴌ|U Ⴂ|I Ⴘ|O Ⴜ|P Ⴆ|[ Ⴞ Ⴤ|] Ⴚ",
"A Ⴔ|S Ⴛ|D Ⴅ Ⴣ|F Ⴇ|G Ⴀ|H Ⴎ|J Ⴐ|K Ⴍ|L Ⴊ|; Ⴃ|' Ⴏ|\\",
"`|Z Ⴝ|X Ⴙ|C Ⴗ|V Ⴑ|B Ⴋ|N Ⴈ Ⴢ|M Ⴒ|, Ⴕ|. Ⴁ|/ Ⴠ Ⴥ"
]




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

