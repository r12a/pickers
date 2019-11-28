globals.showTranslitTrans = ''
globals.showIPATrans = ''
globals.showCaseEndings = ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false



function localInitialise () {

	}




var _h = {

end: {}
}





var keyboarddef = [
"1|2|3|4|5|6|7|8|9 ‹|0 ›|- «|= »",
"q ᚦ|w|e ᛧ ᛦ|r ᚱ|t ᛐ ᛏ|y|u ᚢ|i ᛁ|o|p|[|]",
"a ᛆ ᛅ|s ᛌ ᛋ|d|f ᚠ|g|h ᚽ ᚼ|j|k ᚴ|l ᛚ|; ᚭ ᚬ|'|\\",
"`|z|x|c|v|b ᛓ ᛒ|n ᚿ ᚾ|m ᛙ ᛘ|, ᛫\u200B ᛬\u200B|. ?|/ ]  ["
]

var medievalkbd = [
"1|2|3|4|5|6|7|8|‹,9|›,0|«,»",
"q ᚧ,ᚦ|w|e|r ᚱ|t ᛑ ᛐ|y ᛣ|u ᚤ ᚢ|i ᛂ ᛁ|o ᚯ ᚮ|p ᛕ|[|]",
"a ᛆ|s ᛌ|d|f ᚡ ᚠ|g|h ᚼ|j|k ᚵ ᚴ|l ᛚ|; ᛅ|\\",
"`|z ᛋ|x|c ᛍ|v|b ᛔ ᛒ|n ᚿ|m ᛘ|, ᛫\u200B ᛬\u200B|. ?|/ ]  ["
]

var elderkbd = [
"1|2|3|4|5|6|7|8|9 ‹|0 ›|- «|= »",
"q ᚦ|w ᚹ|e ᛖ|r ᚱ|t ᛏ|y ᛣ|u ᚢ|i ᛁ|o ᛟ|p ᛈ|[|]",
"a ᚫ|s ᛊ|d ᛞ|f ᚠ|g ᚷ|h ᚺ|j ᛃ|k ᚲ|l ᛚ|; ᛇ|'",
"`|z ᛉ|x|c ᛍ|v|b ᛒ|n ᛜ ᚾ|m ᛗ|, ᛫\u200B ᛬\u200B|. ?|/ ]  ["
]

var anglosaxonkbd = [
"1|2|3|4|5|6|7|8|9 ‹|0 ›|- «|= »",
"q ᚦ|w ᚹ|e ᛠ ᛖ|r ᚱ|t ᛏ|y ᚣ|u ᚢ|i ᛇ ᛁ|o ᛟ ᚩ|p ᛈ|[|]",
"a ᚫ ᚪ|s ᛋ|d ᛞ|f ᚠ|g ᚸ ᚷ|h ᚻ|j ᛡ|k ᛤ ᛣ|l ᛚ​|; ᛇ|'|\\",
"`|z ᛉ|x|c ᚳ|v|b ᛒ|n ᛝ ᚾ|m ᛗ|, ᛫\u200B ᛬\u200B|. ?|/ ] ["
]


var latinkbd = [
"1|2|3|4|5|6|7|8|9 ‹|0 ›|- « »|= ‘",
"q þ̈ þ|w|e é e|r r ʀ|t t ẗ|y y ý|u u ü ú|i i ï í|o o ø|p p|[ ą ǫ ó|]",
"a a ã á|s s|d d ð|f f f̈|g g g̈|h h|j j|k k k̈|l l|; ’|' e͡a æ œ|\\",
"`|z z|x x|c c|v v|b b b̈|n n ŋ|m m|; ;|. . :|/ ᛫​ ᛬​"
]




globals.showIPAChars = ''

var ipaCharMap = `
a aː ɑ ɑː æ æː
e eː ə̯
i iː
o oː ø œː ɔ
u uː
y yː ɣ
b bː
d ʤ dː ð
f fː
g gː
k kː
l lː l̥
m mː
n nː n̥ ŋ
p pː
r rː r̥
s sː ʃ
t tː ʧ ʦ
w ʍ
O θ
`








function highlightEndings (caseList) {
	// makes the cells in the table of case endings light up
	// caseList: space-separated list of cell ids
	
	var cells = caseList.split(' ')
	for (var c=0;c<cells.length;c++) {
		var currentCell = document.getElementById(cells[c])
		if (currentCell.className == 'plural') currentCell.style.backgroundColor = 'green'
		else currentCell.style.backgroundColor = 'red'
		}
	}

function blankEndings () {
	var cells = document.getElementById('caseEndings').querySelectorAll('td')
	for (var c=0;c<cells.length;c++) cells[c].style.backgroundColor = 'white'
	}