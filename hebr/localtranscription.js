/* jshint strict: false */
/* globals cl, langs */


function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transcription') { return transcription(str) }
	}
		


function transliterate (str) {

str = ' '+str

var strArray = [...str]
var exclusions = new Set(['(',')','[',']','.',' '])

for (i=0;i<strArray.length;i++) {
	if (exclusions.has(strArray[i])) continue
	if (! autoTranslitArray[strArray[i]]) continue
	re = new RegExp(strArray[i],'g')
	str = str.replace(re, autoTranslitArray[strArray[i]])
	}


return str.trim()
}




function removeVowels (str) {
// removes the nikkud etc from the text in the text area

//var vowels = ['ִ','ֻ','ְ','ֱ','ֵ','ֶ','ֳ','ֹ','ֺ','ֲ','ַ','ָ','\u05C1','\u05C2']

var vowels =  ['ִ','ֻ','ְ','ֱ','ֵ','ֶ','ֳ','ֹ','ֺ','ֲ','ַ','ָ']

for (var i=0;i<vowels.length;i++) {
	re = new RegExp(vowels[i],'g')
	str = str.replace(re,'')
	}

return str
}



/*
function transliterate (str) {

str += ' '

str = str.replace(/\u061C/g, "ᵃˡᵐ")
str = str.replace(/\u200C/g, "ₓ")
str = str.replace(/\u200D/g, "₊")
str = str.replace(/\u200E/g, "ˡʳᵐ")
str = str.replace(/\u200F/g, "ʳˡᵐ")
str = str.replace(/\u202A/g, "ˡʳᵉ")
str = str.replace(/\u202B/g, "ʳˡᵉ")
str = str.replace(/\u202C/g, "ᵖᵈᶠ")
str = str.replace(/\u2066/g, "ˡʳⁱ")
str = str.replace(/\u2067/g, "ʳˡⁱ")
str = str.replace(/\u2069/g, "ᵖᵈⁱ")
str = str.replace(/ְ/g, "͓")
str = str.replace(/ֱ/g, "ĕ")
str = str.replace(/ֲ/g, "ă")
str = str.replace(/ֳ/g, "ŏ")
str = str.replace(/ִ/g, "i")
str = str.replace(/ֵ/g, "e")
str = str.replace(/ֶ/g, "ɛ")
str = str.replace(/ַ/g, "a")
str = str.replace(/ָ/g, "ɑ")
str = str.replace(/ֹ/g, "o")
str = str.replace(/ֻ/g, "u")
str = str.replace(/ּ/g, "̣")
str = str.replace(/ֽ/g, "ː")
str = str.replace(/־/g, "-")
str = str.replace(/ׁ/g, "̎")
str = str.replace(/ׂ/g, "̍")
str = str.replace(/א/g, "ʔ")
str = str.replace(/ב/g, "v")
str = str.replace(/ג/g, "g")
str = str.replace(/ד/g, "d")
str = str.replace(/ה/g, "h")
str = str.replace(/ו/g, "v̇")
str = str.replace(/ז/g, "z")
str = str.replace(/ח/g, "x")
str = str.replace(/ט/g, "t")
str = str.replace(/י/g, "y")
str = str.replace(/ך/g, "x̽")
str = str.replace(/כ/g, "ẋ")
str = str.replace(/ל/g, "l")
str = str.replace(/ם/g, "m̽")
str = str.replace(/מ/g, "m")
str = str.replace(/ן/g, "n̽")
str = str.replace(/נ/g, "n")
str = str.replace(/ס/g, "s")
str = str.replace(/ע/g, "ʔ̇")
str = str.replace(/ף/g, "f̽")
str = str.replace(/פ/g, "f")
str = str.replace(/ץ/g, "ʦ̽")
str = str.replace(/צ/g, "ʦ")
str = str.replace(/ק/g, "k")
str = str.replace(/ר/g, "ʁ")
str = str.replace(/ש/g, "ṡ")
str = str.replace(/ת/g, "ṫ")
str = str.replace(/װ/g, "w")
str = str.replace(/׳/g, "´")
str = str.replace(/״/g, "¨")
str = str.replace(/₪/g, "¤")


return str.trim()
}
*/





function transcription (str) {

str = str.normalize('NFC')+' '

// put geresh, dagesh & shin/sin dots next to consonant
var ptr=0
var newstr = ''
var cchars = new Set(['ּ', 'ׁ', 'ׂ', 'ִ', 'ֵ', 'ֶ', 'ַ', 'ָ', 'ֹ', 'ֻ', 'ְ', 'ֱ', 'ֲ', 'ֳ', '׳'])
for (let i=0;i<str.length;i++) {
    if (cchars.has(str[i+1])) {
        ptr = i+1
        while (cchars.has(str[ptr])) ptr++
        var grapheme = str.substring(i,ptr)
        //console.log('ptr',ptr,'grapheme',grapheme)
        if (grapheme.includes('\u05BC')) { // dagesh
            grapheme = grapheme.replace(/\u05BC/,'')
            newstr += grapheme[0]+'\u05BC'+grapheme.substr(1)
            //console.log('dagesh found. new grapheme is ', grapheme[0]+'\u05BC'+grapheme.substr(1))
            //console.log('newstr is ', newstr)
            }
        else if (grapheme.includes('\u05F3')) { // geresh
            grapheme = grapheme.replace(/\u05F3/,'')
            newstr += grapheme[0]+'\u05F3'+grapheme.substr(1)
            //console.log('geresh found. new grapheme is ', grapheme[0]+'\u05F3'+grapheme.substr(1))
            //console.log('newstr is ', newstr)
            }
        else if (grapheme.includes('\u05C1')) { // shin dot
            grapheme = grapheme.replace(/\u05C1/,'')
            newstr += grapheme[0]+'\u05C1'+grapheme.substr(1)
            //console.log('shin dot found. new grapheme is ', grapheme[0]+'\u05C1'+grapheme.substr(1))
            //console.log('newstr is ', newstr)
            }
        else if (grapheme.includes('\u05C2')) { // sin dot
            grapheme = grapheme.replace(/\u05C2/,'')
            newstr += grapheme[0]+'\u05C2'+grapheme.substr(1)
            //console.log('sin dot found. new grapheme is ', grapheme[0]+'\u05C2'+grapheme.substr(1))
            //console.log('newstr is ', newstr)
            }
        else newstr += grapheme
        i = ptr-1
        }
    else newstr += str[i]
    }
if (newstr !== '') str = newstr


str = str.replace(/בּ/g, "b̰")
str = str.replace(/ג׳/g, "ʤ̰")
str = str.replace(/ד׳/g, "ð̰")
str = str.replace(/וו/g, "ẇ̰")
str = str.replace(/ו׳/g, "w̰")
str = str.replace(/ז׳/g, "ʒ̰")
str = str.replace(/ח׳/g, "χ̰")
str = str.replace(/ךּ/g, "k̰̇")
str = str.replace(/כּ/g, "k̰")
str = str.replace(/ע׳/g, "ʁ̰̇")
str = str.replace(/פּ/g, "p̰")
str = str.replace(/צ׳/g, "ʧ̰")
str = str.replace(/ר׳/g, "ʁ̰")
str = str.replace(/שׁ/g, "ʃ̰")
str = str.replace(/שׂ/g, "s̰")
str = str.replace(/תּ/g, "t̰")
str = str.replace(/ת׳/g, "θ̰")

str = transliterate(str)

return str.trim()

}




