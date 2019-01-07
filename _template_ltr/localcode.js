globals.showTranslit =  ''


function localInitialise () {
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
y y̯
[ ² ³ ¹ ⁴ ˖ ̀ ́ ̂ ̌ ̒
: ː
} ʔ
`



var translitCharacterMap = `
a aʲ ໄ äʲ ໃ ā າ a ະ ä ັ aᵐ ຳ
b b̯ ບ
c c ຈ
d d̯ ດ
e ē ເ ɛ̄ ແ
f f ຝ f̱ ຟ
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

/*
globals.showSimTrans = ''

var simmalaCharacterMap = `
b b ບ bp ປ
d d ດ dt ຕ
f f ຝ f ຟ
g g ກ
h h ຫ h ຮ
j j ຈ
k k ຂ k ຄ -k ກ
O ∅ ອ ∅ ຫ
a a ະ a ັ aa າ aai າຍ aao ເ-ົາ aao າວ ai ໄ- ai ໃ- am ຳ ao ເ-ົາ
e e ເ-ະ e ເ-ັ ee ເ- eeo ເ-ວ ə ເ-ຶ əə ເ-ິ əəi ເ-ີຍ əi ເ-ີຍ ɛ ແ-ະ ɛɛ ແ- ɛo ແ-ວ ɛɛo ແ-ວ
i i ິ ii ີ ia ເ-ັຍ ia ເ-ັຍະ ia ັຽ ia ເ-ຍ ia ເ-ຽ ia ຽ iao ຽວ iu ິວ
o o ໂ-ະ o ວ oo ໂ- ooi ໂ-ຍ ɔ ເ-າະ ɔ ັອ ɔi ອຍ ɔɔ ໍ ɔɔi ອຍ
u ua ົວ ua ົວະ ua ັວ ua ວ uai ວຍ ui ຸຍ uu ູ ʉ ຶ ʉa ເ-ຶອ ʉa ເ-ືອ ʉai ເ-ືອຍ ʉʉ ື
`
*/



var _h = {
'E81': ['E96', 'ED7'],

end: {}
}




var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t|y|u|i|o|p|[|]",
"a|s|d|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
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

