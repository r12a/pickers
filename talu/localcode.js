globals.showTranslit =  ''
globals.typeAssist = ' ✓'
globals.showKeysTranslitToggle = false



function localInitialise () {

	}



var _h = {
"1980": ["1991", "19A4", "1981", "198B", "1983", "19B7", "19C6", "19A1"],
"1981": ["198B", "1983", "19B7", "19C6", "19A1", "1980", "1991", "19A4"],
"1982": ["1997", "19A6", "199D", "19C5", "19D5", "19D7"],
"1983": ["19B7", "19C6", "19A1", "1980", "1991", "19A4", "1981", "198B"],
"1984": ["199B", "199C", "199F", "19A0", "1996", "1990"],
"1985": ["19A8", "198B", "19B5", "19B52D19B2", "19B52D19C0", "19B6"],
"1986": ["19A9", "19AB", "198C"],
"1987": ["1993", "19C3", "19C2", "19B3", "19B4", "19BC", "19B8", "19BE", "19DE", "19DF", "19D8"],
"1988": ["199A", "198A", "1995", "198F"],
"1989": ["19AA", "19D1", "19D3", "19A7", "19B1", "19BB", "1998"],
"1990": ["1984", "199B", "199C", "199F", "19A0", "1996"],
"1991": ["19A4", "1981", "198B", "1983", "19B7", "19C6", "19A1", "1980"],
"1992": ["198D"],
"1993": ["19DA", "19D4", "19C3", "19BA",  "19C2", "19B3", "19B4", "19BC", "19B8", "19BE", "19DE", "19DF", "19D8"],
"1994": ["19A2", "19A5", "1999", "19C7", "19C4"],
"1995": ["198F", "1988", "199A", "198A"],
"1996": ["1990", "1984", "199B", "199C", "199F", "19A0"],
"1997": ["19A6", "199D", "19C5", "19D5", "19D7", "1982"],
"1998": ["1989", "19AA", "19D1", "19D3", "19A7", "19B1", "19BB"],
"1999": ["19C7", "19C4", "1994", "19A2", "19A5"],
"19A5": ["1999", "19C7", "19C4", "1994", "19A2"],
"19C7": ["19C4", "1994", "19A2", "19A5", "1999"],
"19C4": ["1994", "19A2", "19A5", "1999", "19C7"],
"19A2": ["19A5", "1999", "19C7", "19C4", "1994"],
"19C1": ["1A80", "198E", "19BD", "199E"],
"1A80": ["198E", "19BD", "199E", "19C1"],
"198E": ["19BD", "199E", "19C1", "1A80"],
"19BD": ["199E", "19C1", "1A80", "198E"],
"199E": ["19C1", "1A80", "198E", "19BD"],
"19A8": ["198B", "19B5", "19B52D19B2", "19B52D19C0", "19B6", "1985"],
"198B": ["19B5", "19B52D19B2", "19B52D19C0", "19B6", "1985", "19A8",  "1983", "19B7", "19C6", "19A1", "1980", "1991", "19A4"],
"19B5": ["19B52D19B2", "19B52D19C0", "19B6", "1985", "19A8", "198B"],
"19B52D19B2": ["19B52D19C0", "19B6", "1985", "19A8", "198B", "19B5",  "19B2", "19C0", "19B9"],
"19B52D19C0": ["19B6", "1985", "19A8", "198B", "19B5", "19B52D19B2",  "19B2", "19C0", "19B9"],
"19B6": ["1985", "19A8", "198B", "19B5", "19B52D19B2", "19B52D19C0"],
"19BB": ["1998", "1989", "19AA", "19D1", "19D3", "19A7", "19B1"],
"19AA": ["19D1", "19D3", "19A7", "19B1", "19BB", "1998", "1989"],
"19D1": ["19D3", "19A7", "19B1", "19BB", "1998", "1989", "19AA"],
"19D3": ["19A7", "19B1", "19BB", "1998", "1989", "19AA", "19D1"],
"19A7": ["19B1", "19BB", "1998", "1989", "19AA", "19D1", "19D3"],
"19B1": ["19BB", "1998", "1989", "19AA", "19D1", "19D3", "19A7"],
"19D4": ["19C3", "19BA", "1993", "19DA"],
"19C3": ["19BA", "1993", "19DA", "19D4",  "19C2", "19B3", "19B4", "19BC", "19B8", "19BE", "19DE", "19DF", "19D8"],
"19BA": ["1993", "19DA", "19D4", "19C3"],
"19DA": ["19D4", "19C3", "19BA", "1993"],
"19A4": ["1981", "198B", "1983", "19B7", "19C6", "19A1", "1980", "1991"],
"19B7": ["19C6", "19A1", "1980", "1991", "19A4", "1981", "198B", "1983"],
"19C6": ["19A1", "1980", "1991", "19A4", "1981", "198B", "1983", "19B7"],
"19A1": ["1980", "1991", "19A4", "1981", "198B", "1983", "19B7", "19C6"],
"198F": ["1988", "199A", "198A", "1995"],
"199A": ["198A", "1995", "198F", "1988"],
"198A": ["1995", "198F", "1988", "199A"],
"19A6": ["199D", "19C5", "19D5", "19D7", "1982", "1997"],
"199D": ["19C5", "19D5", "19D7", "1982", "1997", "19A6"],
"19C5": ["19D5", "19D7", "1982", "1997", "19A6", "199D"],
"19D5": ["19D7", "1982", "1997", "19A6", "199D", "19C5"],
"19D7": ["1982", "1997", "19A6", "199D", "19C5", "19D5"],
"198D": ["1992"],
"19A9": ["19AB", "198C", "1986"],
"19AB": ["198C", "1986", "19A9"],
"198C": ["1986", "19A9", "19AB"],
"199B": ["199C", "199F", "19A0", "1996", "1990", "1984"],
"199C": ["199F", "19A0", "1996", "1990", "1984", "199B"],
"199F": ["19A0", "1996", "1990", "1984", "199B", "199C"],
"19A0": ["1996", "1990", "1984", "199B", "199C", "199F"],
"19C0": ["19B9", "19BF", "19B52D19B2", "19B52D19C0", "19B2"],
"19B9": ["19BF", "19B52D19B2", "19B52D19C0", "19B2", "19C0"],
"19BF": ["19B52D19B2", "19B52D19C0", "19B2", "19C0", "19B9"],
"19B2": ["19C0", "19B9", "19BF", "19B52D19B2", "19B52D19C0"],
"19C9": ["19D9", "19C8"],
"19D9": ["19C8", "19C9"],
"19C8": ["19C9", "19D9"],
"19C2": ["19B3", "19B4", "19BC", "19B8", "19BE", "19DE", "19DF", "19D8", "1987", "1993", "19C3"],
"19B3": ["19B4", "19BC", "19B8", "19BE", "19DE", "19DF", "19D8", "1987", "1993", "19C3", "19C2"],
"19B4": ["19BC", "19B8", "19BE", "19DE", "19DF", "19D8", "1987", "1993", "19C3", "19C2", "19B3"],
"19BC": ["19B8", "19BE", "19DE", "19DF", "19D8", "1987", "1993", "19C3", "19C2", "19B3", "19B4"],
"19B8": ["19BE", "19DE", "19DF", "19D8", "1987", "1993", "19C3", "19C2", "19B3", "19B4", "19BC"],
"19BE": ["19DE", "19DF", "19D8", "1987", "1993", "19C3", "19C2", "19B3", "19B4", "19BC", "19B8"],
"19DE": ["19DF", "19D8", "1987", "1993", "19C3", "19C2", "19B3", "19B4", "19BC", "19B8", "19BE"],
"19DF": ["19D8", "1987", "1993", "19C3", "19C2", "19B3", "19B4", "19BC", "19B8", "19BE", "19DE"],
"19D8": ["1987", "1993", "19C3", "19C2", "19B3", "19B4", "19BC", "19B8", "19BE", "19DE", "19DF"],

end: {}
}



var keyboarddef = [
"§ ᧚|1 ᧑ !|2 ᧒|3 ᧓|4 ᧔|5 ᧕|6 ᧖|7 ᧗|8 ᧘|9 ᧙ （|0 ᪀ ）|-|=",
"q ᦀ ᦁ|w ᧈ ᧉ|e ᦵ ᦶ ᦹ|r ᦏ ᦒ ᦾ|t ᦎ ᦑ|y ᦊ ᦍ ᦼ|u ᦳ ᦴ ᦼ|i ᦲ ᧀ ᦿ|o ᦷ ᦸ ᦽ|pᦔ ᦗ|[|]",
"a ᦰ ᦱ ᦫ|s ᦉ ᦌ ᦪ|d ᦡ ᦤ ᧆ|f ᦚ ᦝ|g ᦄ ᦇ ᧂ|h ᦠ ᦣ ᦦ|j ᦕ ᦘ ᦨ|k ᦂ ᦅ ᧅ|l ᦜ ᦟ ᦺ|;|'|\\ 、",
"`|z ᧞ ᧟|x ᦃ ᦆ ᦧ|c ᦈ ᦋ ᦩ|v ᦛ ᦞ ᧁ|b ᦢ ᦥ ᧇ|n ᦐ ᦓ ᧃ|m ᦖ ᦙ ᧄ|, ， 《|. 。 》|/ ？"
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
a ā ai̯ aʲ aːi̯ ạ ạ̱ á a᷇ a͕ʲ
d ḏ
e eː ɛ ĕ əi̯ əʲ e͕ ɛ͕
f f̱
h ẖ
k kʷ ḵ k̽
l ḻ lˀ lʷ
m m̱
n ṉ n̽ ŋ ŋ̱ ŋ̽
o oi̯ oʲ oː ɔ ɔi̯ ɔʲ o͕
p pʰ p̱ p̱ʰ p̽
s sʷ s̱ s̱ʷ
t ʦ ʦ̱ ṯ ṯʰ t̽
u ui̯ uʔ uʲ ū u̯ ɯ ɯi̯ ɯʲ
w w̱ w̽
x xʷ x̱ x̱ʷ
y y̱
} ʔ
' ’
^ ¹ ²
1 1̣
`


/*
var translitCharacterMap = `
a ā ᦱ ạ ᦀ ạ̱ ᦁ a͕ʲ ᦺ aʲ ᦻ
b b ᦢ ḇ ᦥ
d d ᦡ ḏ ᦤ
e e͕ ᦵ ɛ͕ ᦶ əʲ ᧀ e? ᦵ-ᦰ ɛ? ᦶ-ᦰ əʔ ᦵ-ᦲᦰ əː ᦵ-ᦲ
f f ᦚ f̱ ᦝ
h h ᦠ ẖ ᦣ
i i ᦲ i? -ᦲᦰ
k k ᦂ ḵ ᦅ kʷ ᦦ ḵʷ ᦨ
K k̽ ᧅ
l l ᦜ ḻ ᦟ
L lˀ ᧞ lʷ ᧟
m m ᦖ m̱ ᦙ
M m̽ ᧄ
n ŋ ᦄ ŋ̱ ᦇ n ᦐ ṉ ᦓ
N ŋ̽ ᧂ n̽ ᧃ
o o͕ ᦷ ɔ ᦸ oʲ ᦽ ɔʲ ᦾ o? ᦷ-ᦰ ɔʔ -ᦸᦰ
p p ᦔ p̱ ᦗ pʰ ᦕ p̱ʰ ᦘ
P p̽ ᧇ
s s ᦉ s̱ ᦌ sʷ ᦪ s̱ʷ ᦫ
t ʦ ᦈ ʦ̱ ᦋ t ᦎ ṯ ᦑ tʰ ᦏ ṯʰ ᦒ
T t̽ ᧆ
u ɯ ᦹ u ᦳ ū ᦴ ɯʲ ᦿ uʲ ᦼ ɯ -ᦹᦰ
w w ᦛ w̱ ᦞ
W w̽ ᧁ
x x ᦃ x̱ ᦆ xʷ ᦧ x̱ʷ ᦩ
y y ᦊ y̱ ᦍ
} ʔ ᦰ
0 0 ᧐
1 1 ᧑ 1̣ ᧚
2 2 ᧒
3 3 ᧓
4 4 ᧔
5 5 ᧕
6 6 ᧖
7 7 ᧗
8 8 ᧘
9 9 ᧙
, , 、 , ，
. . 。 . ．
; ; ；
: : ：
? ? ？
! ! ！
^ ¹ ᧈ ² ᧉ
( < 〈 { 《 ( （
) > 〉 } 》 ) ）
} ʔ ᦰ
, , 、 , ，
`
*/





