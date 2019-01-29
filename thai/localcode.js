globals.showBeckerTrans =  ''
globals.showISO2Trans = ''
globals.showTranslit =  ''

function localInitialise () {

	}



var _h = {
'E01': ['E20', 'E24', 'E20'],
'E02': ['E0A', 'E0B', 'E03'],
'E04': ['E14', 'E28', 'E15', 'E05'],
'E06': ['E11', 'E21'],
'E08': ['E27', 'E25'],
'E0A': ['E02', 'E0B', 'E03'],
'E0C': ['E13', 'E0D'],
'E15': ['E05', 'E04', 'E14'],
'E0F': ['E0E'],
'E10': ['E23', 'E18'],
'E11': ['E06'],
'E16': ['E24', 'E20', 'E01', 'E26'],
'E17': ['E11'],
'E18': ['E23', 'E10'],
'E1B': ['E1A', 'E29'],
'E1C': ['E1E', 'E1D', 'E1F', 'E2C'],
'E1E': ['E1C', 'E1D', 'E1F', 'E2C'],
'E20': ['E16', 'E24', 'E01', 'E26'],
'E1A': ['E1B', 'E29'],
'E0E': ['E0F', 'E24', 'E26'],
'E14': ['E04', 'E28', 'E15'],
'E0B': ['E0A', 'E02', 'E03'],
'E28': ['E04', 'E14', 'E15'],
'E29': ['E1A'],
'E2A': ['E25', 'E09'],
'E1F': ['E1D', 'E1C', 'E1E', 'E2C'],
'E1D': ['E1F', 'E1C', 'E1E', 'E2C'],
'E2B': ['E17', 'E19'],
'E2E': ['E2D'],
'E25': ['E2A', 'E2FE25E2F'],
'E2C': ['E1D', 'E1F', 'E1C', 'E1E'],
'E23': ['E18', 'E10'],
'E0D': ['E13', 'E0C'],
'E27': ['E08', 'E07'],
'E2D': ['E2E'],
'E19': ['E21', 'E2B'],
'E13': ['E0C', 'E0D'],
'E21': ['E19', 'E17', 'E2B'],
'E07': ['E27'],
'E24': ['E26', 'E20', 'E16', 'E01'],
'E2F': ['E5A'],
'E5A': ['E2F'],
'E32': ['E45', 'E33'],
'E45': ['E32', 'E33'],
'E33': ['E32', 'E45', 'E4D'],
'E4D': ['E33'],
'E2FE25E2F': ['E2A', 'E25'],
'E05': ['E15'],
'E03': ['E02', 'E0B', 'E0A'],
'E26': ['E24', 'E20', 'E01', 'E16'],

end: {}
}


/*
ก ภ ฤ ภ
ข ช ซ ฃ
ค ด ศ ต ฅ
ฆ ฑ ม
จ ว ล
ช ข ซ ฃ
ฌ ณ ญ
ต ฅ ค ด
ฏ ฎ
ฐ ร ธ
ฑ ฆ
ถ ฤ ภ ก ฦ
ท ฑ
ธ ร ฐ
ป บ ษ
ผ พ ฝ ฟ ฬ
พ ผ ฝ ฟ ฬ
ภ ถ ฤ ก ฦ
บ ป ษ
ฎ ฏ ฤ ฦ
ด ค ศ ต
ซ ช ข ฃ
ศ ค ด ต
ษ บ
ส ล ฉ
ฟ ฝ ผ พ ฬ
ฝ ฟ ผ พ ฬ
ห ท น
ฮ อ
ล ส ฯลฯ
ฬ ฝ ฟ ผ พ
ร ธ ฐ
ญ ณ ฌ
ว จ ง
อ ฮ
น ม ห
ณ ฌ ญ
ม น ท ห
ง ว
ฤ ฦ ภ ถ ก
ฯ ๚
๚ ฯ
า ๅ ำ
ๅ า ำ
ำ า ๅ ํ
ํ ำ

*/

var keyboarddef = [
"§|1 ๅ +|2 / ๑|3 _ ๒|4 ภ ๓|5 ถ ๔|6 ุ ู|7 ึ ฿|8 ค ๕|9 ต ๖|0 จ ๗|- ข ๘|= ช ๙",
"q ๆ ๐|w ไ \"|e ำ ฎ|r พ ฑ|t ะ ธ|y ั ํ|u ี ๊|i ร ณ|o น ฯ|p ย ญ|[ บ ฐ|] ล ,",
"a ฟ ฤ|s ห ฆ|d ก ฏ|f ด โ|g เ ฌ|h ้ ็|j ่ ๋|k า ษ|l ส ศ|; ว ซ|' ง .|\\ ฃ ฅ",
"` - %|z ผ ฆ|x ป )|c แ ฉ|v อ ฮ|b ิ ฺ|n ื ์|m ท ?|, ม ฒ|. ใ ฬ|/ ฝ ฦ"
]



function condense (str) {
	// removes spaces and hyphens from a string

	// if text isn't highlighted, highlight whole thing (to avoid duplication)
	var node = document.getElementById('output')
	//IE support
	if (document.selection) { 
	    chstring = document.selection.createRange()
		}
	// Mozilla and Safari support
	else if (node.selectionStart || node.selectionStart == '0') {
		chstring = node.value.substring(node.selectionStart, node.selectionEnd)
		}
	if (chstring == '') { chstring = node.select() }

	// do the replacement
	str = str.replace(/ /g, '')
	str = str.replace(/-/g, '')

	return str
	}


function showInvisibles () { 
    output = document.getElementById('output')
    output.value = output.value.replace(/\u200B/g,'ᶻˢ')
   output.value = output.value.replace(/\u2060/g,'ʷʲ')
    }

function hideInvisibles () {
    output = document.getElementById('output')
    output.value = output.value.replace(/ᶻˢ/g,'\u200B')
    output.value = output.value.replace(/ʷʲ/g,'\u2060')
    }


function sendVowelLeft (str) {
	lv = str.match(/เ|แ|ไ|โ|ใ/)
	if (lv == null) return
	
	return lv+str.substr(0,lv.index)+str.substr(lv.index+1)
	}

function addVowel (ch) { 
	// ch: string, the text to be added
	
	if (document.getElementById('output').style.display == 'none') { return; }
	var outputNode = document.getElementById( 'output' ); // points to the output textarea

	
	//IE support
	if (document.selection) { 
		outputNode.focus()
	    range = document.selection.createRange()
		
        // merge the base and the vowels
        ch = ch.replace('-',range.text)
        
		range.text = ch; 
	    range.select(); 
		if (globals.refocus) outputNode.focus() 
		}
	// Mozilla and Safari support
	else if (outputNode.selectionStart || outputNode.selectionStart == '0') {
		var startPos = outputNode.selectionStart
		var endPos = outputNode.selectionEnd
		var cursorPos = startPos
		var scrollTop = outputNode.scrollTop
		var baselength = 0
		
        // get whatever is highlighted, or if no highlight the previous character
        var consonant
        if (startPos === endPos) startPos = startPos-1
        consonant = outputNode.value.substring(startPos,endPos)
        console.log(consonant)
        
        // merge the base and the vowels
        ch = ch.replace('-',consonant)
        
		outputNode.value = outputNode.value.substring(0, startPos)
              + ch
              + outputNode.value.substring(endPos, outputNode.value.length)
		cursorPos += ch.length

		if (globals.refocus) outputNode.focus()
		outputNode.selectionStart = cursorPos
		outputNode.selectionEnd = cursorPos
		if (! globals.refocus) outputNode.blur()
		}
	else {
		outputNode.value += ch
		if (globals.refocus) outputNode.focus()
		}
		
	// normalize
	if (globals.n11n=='nfc') { outputNode.value = outputNode.value.normalize('NFC') }
	else if (globals.n11n=='nfd') { outputNode.value = outputNode.value.normalize('NFD') }
	}






var justLatinMap = `
a ä ā aː aj aʲ äʲ aᵐ
e eː ɛ ɛː
i ī iː
o oː ɔː
u ū uː ɯ ɯ ɯ̄ ɯ̃ ɯː
b b̯
c c̯ cʰ c̱ʰ ċ̱ʰ
d d̯ ḍ̯
f f̱ ḟ̱
h ẖ
k k̯ kʰ k̈ʰ ḵʰ ḵ̇ʰ ḵ̈ʰ
l ḻ ḻ̇ l̥
m m̱
n ṉ ṇ̱
N ŋ̱ ŋ̱
p p̯ pʰ p̱ʰ ṗ̱ʰ
r ṟ r̥
s ś ṣ ṡ̱ s
t t̯ tʰ ṯʰ tʰ tɕ tɕʰ
T ṭ̯ ṭʰ ṯ̇ʰ ṭ̲ʰ ṭ̲̇ʰ
w w̱
y y̱ ẏ̱
? ʔ
; ¹ ² ³ ⁴ ˟ ˘
`



var translitCharacterMap = `
a äʲ ใ aʲ ไ a ะ ä ั ā า aᵐ ำ
b b̯ บ
c c̯ จ cʰ ฉ c̱ʰ ช ċ̱ʰ ฌ
d ḍ̯ ฎ d̯ ด
e e เ ɛ แ
f f̱ ฝ ḟ̱ ฟ
h h ห ẖ ฮ
i i ิ ī ี
k k̯ ก kʰ ข k̈ʰ ฃ ḵʰ ค ḵ̇ʰ ฆ ḵ̈ʰ ฅ
l ḻ ล ḻ̇ ฬ l̥ ฦ
m m̱ ม
n ŋ̱ ง ṇ̱ ณ ṉ น
o o โ
p p̯ ป pʰ ผ p̱ʰ พ ṗ̱ʰ ภ
r ṟ ร r̥ ฤ
s s ส ś ศ ṣ ษ ṡ̱ ซ
t ṭ̯ ฏ ṭʰ ฐ ṭ̲ʰ ฑ ṭ̲̇ʰ ฒ t̯ ต tʰ ถ ṯʰ ท ṯ̇ʰ ธ
u ɯ ึ ɯ̄ ื u ุ ū ู ɯ̃ ๅ
w w̱ ว
y y̱ ย ẏ̱ ญ
} ʔ อ
0 0 ໐
1 1 ໑
2 2 ໒
3 3 ໓
4 4 ໔
5 5 ໕
6 6 ໖
7 7 ໗
8 8 ໘
9 9 ໙
[ ˘ ็
. ⋯ ฯ
* ˟ ์
& ˖ ๆ
| ¶ ๚ | ๛
± ¤ ฿
^ ¹ ่ ² ้ ³ ๊ ⁴ ๋
- • ๏
`

var beckerCharacterMap = `
b b บ bp ป
c ch ฉ ch ช ch ฌ
d d ฎ d ด dt ฏ dt ต
f f ฝ f ฟ
g g ก
h h ห h ฮ
j j จ
k k ข k ค k ฆ k ก
l l ล l ฬ
m m ม
n n น n ณ ng ง
p p ผ p พ p ภ p บ
r r ร rʉ ฤ rʉʉ ฤๅ
s s ศ s ษ s ส s ซ s ซ s ทร
t t ฐ t ถ t ฑ t ฒ t ท t ธ
w w ว
y y ย y ญ
a a ะ a ั a รร aa า ai ไ- ai ใ- ai ัย aai าย ao เ-า ao เ-ัว
A am ำ aao าว an รร
e e เ-ะ e เ-็ ee เ- eo เ-็ว eeo เ-ว ə เ-อะ əə เ-อ əə เ-ิ əəi เ-ย
E ɛ แ-ะ ɛ แ-็ ɛɛ แ- ɛɛo แ-ว
i i ย ii ี ia เ-ีย ia เ-ียะ iao เ-ียว iu ิว
o o โ-ะ oo โ- ooi โ-ย ɔ เ-าะ ɔ ็อ ɔɔ อ ɔɔi อย
u u ุ ua ัวะ ua ัว ua ว uai วย ui ุย uu ู ʉ ึ ʉʉ ือ ʉʉ ื
U ʉa เ-ือะ ʉa เ-ือ ʉai เ-ือย
§ 0 ໐ 1 ໑ 2 ໒ 3 ໓ 4 ໔ 5 ໕ 6 ໖ 7 ໗ 8 ໘ 9 ໙
B B ฿
`


var isoCharacterMap = `
c c จ ch ฉ ch ช ch ฌ
d d ฎ d ด
f f ฝ f ฟ
h h ห h ฮ
k k ก kh ข kh ฃ kh ค kh ฅ kh ฆ
l l ล l ฬ
m m ม
n n น n ณ ng ง
p p ป ph ผ ph พ ph ภ
r r ร
s s ซ s ศ s ษ s ส
t t ฏ t ต th ฐ th ถ th ฑ th ฒ th ท th ธ
w w ว
y y ย y ญ

a a ะ a ั a า a แ-ว aeo แ-ว ai าย ai ไ- ai ใ- ai ไ-ย ai ัย
A ao าว ao เ-า
e e เ-ะ e เ- eo เ-ว eo เ-็ว
i i ิ i ี ia เ-ีย ia เ-ียะ iao เ-ียว io ิว
o o โ-ะ o โ- o เ-าะ o อ oe เ-อะ oe เ-อ oei เ-ย oi อย oi โ-ย
u u ุ u ู ua ัว ua ัวะ uai วย ue ึ ue ื uea เ-ืย uea เ-ืยะ ueai เ-ือย
U ui ูย ui ุก

§ 0 ໐ 1 ໑ 2 ໒ 3 ໓ 4 ໔ 5 ໕ 6 ໖ 7 ໗ 8 ໘ 9 ໙
B B ฿

' ¹ ่ ² ้ ³ ๊ ⁴ ๋ ˟  ์
`








