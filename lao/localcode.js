globals.showSimTrans = ''
globals.showTranslit =  ''



function localInitialise () {
	}
	

var _h = {
'E81': ['E96', 'ED7'],
'E82': ['E8A'],
'E84': ['E94'],
'E87': ['EC6'],
'EAA': ['EA5'],
'E8A': ['E82'],
'E8D': ['EA2'],
'E94': ['E95', 'E84'],
'E95': ['ED8', 'E94'],
'E96': ['ED7', 'E81'],
'E97': ['EAB', 'EDC', 'EDD'],
'E99': ['EA1', 'E9A'],
'E9A': ['E9B', 'E99'],
'E9B': ['E9A', 'E99'],
'E9C': ['E9D', 'E9E', 'E9F', 'ED6'],
'E9E': ['E9D', 'E9C', 'E9F', 'ED6'],
'E9D': ['E9C', 'E9E', 'E9F', 'ED6'],
'EA1': ['E99', 'E9A'],
'EA2': ['E8D'],
'EA5': ['EAA'],
'EAB': ['EDC', 'EDD', 'E97'],
'EAE': ['EA3'],
'EDC': ['EDD', 'EAB', 'E97'],
'EDD': ['EDC', 'EAB', 'E97'],
'EA3': ['EAE'],
'EB3': ['EB2'],
'EB2': ['EB3'],
'EC6': ['EC6EA5EC6'],
'EC6EA5EC6': ['EC6'],
'ED7': ['E96', 'E81'],
'ED8': ['E95'],
'ED9': ['E97'],
'ED6': ['E9D', 'E9F', 'E9C', 'E9E'],
'ED2': ['ED5', 'ED4'],

end: {}
}




var keyboarddef = [
"§|1 ຢ ໑|2 ຟ ໒|3 ໂ ໓|4 ຖ ໔|5 ຸ ໌|6 ູ ຼ|7 ຄ ໕|8 ຕ ໖|9 ຈ ໗|0 ຂ ໘|- ຊ ໙|= ໍ ໍ່",
"q ົ ົ້|w ໄ ໐|e ຳ ຳ້|r ພ _|t ະ +|y ິ ິ້|u ີ ີ້|i ຮ ຣ|o ນ ໜ|p ຍ ຽ|[ ບ -|] ລ ຫຼ",
"a ັ ັ້|s ຫ ;|d ກ .|f ດ ,|g ເ :|h ້ ໊|j ່ ໋|k າ !|l ສ ?|; ວ %|' ງ =|\\ “ ”",
"` * /|z ຜ ₭|x ປ (|c ແ ຯ|v ອ x|b ຶ ຶ້|n ື ື້|m ທ ໆ|, ມ ໝ|. ໃ $|/ ຝ )"
]




function sendVowelRight (str) {
    str = str.replace(/(ເ|ແ|ໂ|ໃ|ໄ)(.)/g, '$2$1')
    console.log(str)
    return str
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
a ā ä äʲ aᵐ
b b̯
d d̯
e ē ɛ ɛ̄ ə ᵊ
f f̱
h ẖ ʰ
i ī
j ʲ
k k̯ ḵʰ
l l̆ ḻ
m m̱ ᵐ
n ṉ ŋ ŋ̱ ɲ ɲ̱ ⁿ
o ō ɔ ɔ̄
p p̯ p̱
r ṟ
s s̱
t tɕ tʰ t̯ ṯ
u ū
v ʋ
w w̱ ɯ ɯ̄
y y̯
[ ² ³ ¹ ⁴ ˖ ̀ ́ ̂ ̌ ̒
: ː
} ʔ
`


/*
var translitCharacterMap = `
a aʲ ໄ äʲ ໃ ā າ a ະ ä ັ aᵐ ຳ
b b̯ ບ
c c ຈ
d d̯ ດ
e ē ເ ɛ̄ ແ
f f ຝ f̱ ຟ
h h ຫ ẖ ຮ
i i ິ ī ີ iᵊ ຽ
k k̯ ກ kʰ ຂ ḵʰ ຄ
l ḻ ລ l̆ ຼ
m m̱ ມ m ໝ
n ṉ ນ ŋ̱ ງ ɲ̱ ຍ n ໜ
o ō ໂ ɔ̄ ໍ o ົ
p p̯ ປ pʰ ຜ p̱ʰ ພ
r ṟ ຣ
s s ສ s̱ ຊ
t t̯ ຕ tʰ ຖ ṯʰ ທ
u u ຸ ū ູ
w w̱ ວ ɯ ຶ ɯ̄ ື
y y̯ ຢ
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
. ... ຯ
* ̒ ໌
& ˖ ໆ
^ ¹ ່ ² ້ ³ ໊ ⁴ ໋
} ʔ ອ
`
*/


var simmalaCharacterMap = `
b b ບ bp ປ
d d ດ dt ຕ
f f ຝ f ຟ
g g ກ
h h ຫ h ຮ
j j ຈ
k k ຂ k ຄ -k ກ
l l ລ l ຫຼ l ຫລ
m m ມ m ໝ m ຫມ
n n ນ n ໜ n ຫນ ng ງ ng ຫງ n ຍy ny ຫຍ
p p ຜ p ພ -p ບ
s s ສ s ຊ
t t ຖ t ທ -t ດ
w w ວ w ຫວ
y y ຢ
O ∅ ອ ∅ ຫ
a a ະ a ັ aa າ aai າຍ aao ເ-ົາ aao າວ ai ໄ- ai ໃ- am ຳ ao ເ-ົາ
e e ເ-ະ e ເ-ັ ee ເ- eeo ເ-ວ ə ເ-ຶ əə ເ-ິ əəi ເ-ີຍ əi ເ-ີຍ ɛ ແ-ະ ɛɛ ແ- ɛo ແ-ວ ɛɛo ແ-ວ
i i ິ ii ີ ia ເ-ັຍ ia ເ-ັຍະ ia ັຽ ia ເ-ຍ ia ເ-ຽ ia ຽ iao ຽວ iu ິວ
o o ໂ-ະ o ວ oo ໂ- ooi ໂ-ຍ ɔ ເ-າະ ɔ ັອ ɔi ອຍ ɔɔ ໍ ɔɔi ອຍ
u ua ົວ ua ົວະ ua ັວ ua ວ uai ວຍ ui ຸຍ uu ູ ʉ ຶ ʉa ເ-ຶອ ʉa ເ-ືອ ʉai ເ-ືອຍ ʉʉ ື
`


