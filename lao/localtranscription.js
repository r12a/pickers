function localtranscribe (direction, str) {
	
	if (direction == 'toLOC') { return toLOC(str) }
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toSyllables') { return toSyllables(str) }
	}
		


function transliterate (str) {

str += ' '

str = str.replace(/ກ/g, "k̯")
str = str.replace(/ຂ/g, "kʰ")
str = str.replace(/ຄ/g, "ḵʰ")
str = str.replace(/ງ/g, "ŋ̱")
str = str.replace(/ຈ/g, "c")
str = str.replace(/ຊ/g, "s̱")
str = str.replace(/ຍ/g, "ɲ̱")
str = str.replace(/ດ/g, "d̯")
str = str.replace(/ຕ/g, "t̯")
str = str.replace(/ຖ/g, "tʰ")
str = str.replace(/ທ/g, "ṯʰ")
str = str.replace(/ນ/g, "ṉ")
str = str.replace(/ບ/g, "b̯")
str = str.replace(/ປ/g, "p̯")
str = str.replace(/ຜ/g, "pʰ")
str = str.replace(/ຝ/g, "f")
str = str.replace(/ພ/g, "p̱ʰ")
str = str.replace(/ຟ/g, "f̱")
str = str.replace(/ມ/g, "m̱")
str = str.replace(/ຢ/g, "y̯")
str = str.replace(/ຣ/g, "ṟ")
str = str.replace(/ລ/g, "ḻ")
str = str.replace(/ວ/g, "w̱")
str = str.replace(/ສ/g, "s")
str = str.replace(/ຫ/g, "h")
str = str.replace(/ອ/g, "ʔ")
str = str.replace(/ຮ/g, "ẖ")
str = str.replace(/ຯ/g, "...")
str = str.replace(/ະ/g, "a")
str = str.replace(/ັ/g, "ä")
str = str.replace(/າ/g, "ā")
str = str.replace(/ຳ/g, "aᵐ")
str = str.replace(/ິ/g, "i")
str = str.replace(/ີ/g, "ī")
str = str.replace(/ຶ/g, "ɯ")
str = str.replace(/ື/g, "ɯ̄")
str = str.replace(/ຸ/g, "u")
str = str.replace(/ູ/g, "ū")
str = str.replace(/ົ/g, "o")
str = str.replace(/ຼ/g, "l̆")
str = str.replace(/ຽ/g, "iᵊ")
str = str.replace(/ເ/g, "ē")
str = str.replace(/ແ/g, "ɛ̄")
str = str.replace(/ໂ/g, "ō")
str = str.replace(/ໃ/g, "äʲ")
str = str.replace(/ໄ/g, "aʲ")
str = str.replace(/ໆ/g, "˖")
str = str.replace(/່/g, "¹")
str = str.replace(/້/g, "²")
str = str.replace(/໊/g, "³")
str = str.replace(/໋/g, "⁴")
str = str.replace(/໌/g, "̒")
str = str.replace(/ໍ/g, "ɔ̄")
str = str.replace(/໐/g, "0")
str = str.replace(/໑/g, "1")
str = str.replace(/໒/g, "2")
str = str.replace(/໓/g, "3")
str = str.replace(/໔/g, "4")
str = str.replace(/໕/g, "5")
str = str.replace(/໖/g, "6")
str = str.replace(/໗/g, "7")
str = str.replace(/໘/g, "8")
str = str.replace(/໙/g, "9")
str = str.replace(/ໜ/g, "n")
str = str.replace(/ໝ/g, "m")

return str.trim()
}






function toSyllables (str) {
// split the text into syllabic units
str = '  '+str+'  '

// move left-positioned consonants to the right
str = str.replace(/(ເ|ແ|ໂ|ໃ|ໄ)(.)/g, '$2$1')

// also put spaces around punctuation
str = str.replace(/(\.|,|\(|\)|:|;|ໆ|ຯ)/g, ' $1 ')

var debug = false
var chars = [...str]
var out = ''
var consonants = new Set(['ກ', 'ຂ', 'ຄ', 'ງ', 'ຈ', 'ຍ', 'ດ', 'ຕ', 'ຖ', 'ທ', 'ໜ', 'ນ', 'ປ', 'ຜ', 'ພ', 'ບ', 'ໝ', 'ມ', 'ຢ', 'ຣ', 'ລ', 'ຫຼ', 'ສ', 'ຊ', 'ຝ', 'ຟ', 'ຫ', 'ຮ', 'ຼ', 'ວ', 'ອ'])
var vowelSet = new Set(['ເ', 'ແ', 'ໂ', 'ໃ', 'ໄ', 'າ', 'ຳ', 'ະ', 'ັ', 'ິ', 'ີ', 'ຶ', 'ື', 'ຸ', 'ູ', 'ຽ', 'ໍ', 'ົ', 'ອ'])
var leftVowelSet = new Set(['ເ', 'ແ', 'ໂ', 'ໃ', 'ໄ', 'າ', 'ຳ'])
var toneSet = new Set([ '່', '້', '໊', '໋'])
var digraphSet = new Set(['ງ', 'ຍ', 'ນ', 'ມ', 'ຼ', 'ລ', 'ວ'])

for (let i=1; i<chars.length-2; i++) {
    //console.log('i:',i,chars[i])
    out += chars[i]
    if (debug) console.log('NEW BASE:',chars[i])
    if (! consonants.has(chars[i])) continue
    
    // take care of syllable initial h clusters
    if (chars[i] === 'ຫ' && consonants.has(chars[i+1])) {
        out += chars[++i]
        }

    // look ahead to syllable end
    var endFound = false
    var ptr = i+1
    while (! endFound && ptr < chars.length) {
        //console.log('ptr is ', chars[ptr])
        if (vowelSet.has(chars[ptr])) { ptr++; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr-1],        'Vowel found') }
        else if (toneSet.has(chars[ptr])) { ptr++; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr-1],    'Tone found') }
        else if (consonants.has(chars[ptr])) {
            //if (toneSet.has(chars[ptr+1])) { ptr++; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr-1],   'Following char is tone') }
            /*else*/ if (chars[i] === 'ຫ' && digraphSet.has(chars[ptr])) 
                    { ptr++; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr-1],                          'Digraph found') }
            else if (chars[ptr] === 'ວ' && ptr === i+1) 
                    { ptr++; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr-1],                          'ວ found right after initial consonant') }
            else if (chars[ptr] === 'ວ' && consonants.has(chars[ptr+1]) && (consonants.has(chars[ptr+2]) || chars[ptr+2] === ' '))  
                    { ptr++; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr-1],                          'ວ followed by 2 consonants') }
            else if (chars[ptr] === 'ຍ' && (consonants.has(chars[ptr+1]) || chars[ptr+1] === ' ')) 
                    { endFound = true; ptr++; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr-1],         'ຍ followed by consonant/space (END++)') }
            else if (chars[ptr] === 'ຫ' && digraphSet.has(chars[ptr+1])) 
                    { endFound = true; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr],                  'ຫ followed by digraph (END)') }
            else if (consonants.has(chars[ptr+1]) || chars[ptr+1]===' ') 
                    { endFound = true; ptr++; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr-1],         'Next char is consonant/space (END++)') }
            else { endFound = true; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr],                     'Other consonant (END)') }
            }
        else { endFound = true; if (debug) console.log('i:',chars[i],'ptr:',chars[ptr],                         'Something else found (END)')  }
        }
    
    var temp = ''
    for (let c=i+1;c<ptr;c++) temp += chars[c]
    //console.log('ptr:',chars[ptr], 'temp:',temp)
    
    for (let c=i+1;c<ptr;c++) out += chars[c]
    out += ' '
    
    i = ptr-1

    //console.log(out)
    }

// move left-positioned consonants to the left again
out = out.replace(/(.)(ເ|ແ|ໂ|ໃ|ໄ)/g, '$2$1')

return out.trim()
}






function OLDtransliterate (str) { 
    
str = str + '  '
str = str.normalize('NFC')

// move left-positioned consonants to the right
//str = str.replace(/(ເ|ແ|ໂ|ໃ|ໄ)(.)/g, '$2$1')



// tones
str = str.replace(/\u0EC8/g, "¹")
str = str.replace(/\u0EC9/g, "²")
str = str.replace(/\u0ECA/g, "³")
str = str.replace(/\u0ECB/g, "⁴")





// consonants
str = str.replace(/ກ/g, "k̯")
str = str.replace(/ຂ/g, "kʰ")
str = str.replace(/ຄ/g, "ḵʰ")
str = str.replace(/ງ/g, "ŋ̱")
str = str.replace(/ຈ/g, "c")
str = str.replace(/ຍ/g, "ɲ̱")
str = str.replace(/ຕ/g, "t̯")
str = str.replace(/ຖ/g, "tʰ")
str = str.replace(/ທ/g, "ṯʰ")
str = str.replace(/ດ/g, "d̯")
str = str.replace(/ນ/g, "ṉ")
str = str.replace(/ໜ/g, "n")
str = str.replace(/ປ/g, "p̯")
str = str.replace(/ຜ/g, "pʰ")
str = str.replace(/ພ/g, "p̱ʰ")
str = str.replace(/ບ/g, "b̯")
str = str.replace(/ມ/g, "m̱")
str = str.replace(/ໝ/g, "m")
str = str.replace(/ລ/g, "ḻ")
str = str.replace(/ຼ/g, "l̆")
str = str.replace(/ຢ/g, "y̯")
str = str.replace(/ຣ/g, "ṟ")
str = str.replace(/ວ/g, "w̱")
str = str.replace(/ຫ/g, "h")
str = str.replace(/ຮ/g, "ẖ")
str = str.replace(/ສ/g, "s")
str = str.replace(/ຊ/g, "s̱")
str = str.replace(/ຝ/g, "f")
str = str.replace(/ຟ/g, "f̱")
str = str.replace(/ອ/g, "ʔ")



// finals
str = str.replace(/ຳ/g, "aᵐ")


// vowel signs
str = str.replace(/ເ/g, "ē")
str = str.replace(/ແ/g, "ɛ̄")
str = str.replace(/ໂ/g, "ō")
str = str.replace(/ໄ/g, "aʲ")
str = str.replace(/ໃ/g, "äʲ")

str = str.replace(/າ/g, "ā")
str = str.replace(/ະ/g, "a")
str = str.replace(/ັ/g, "ä")
str = str.replace(/ິ/g, "i")
str = str.replace(/ີ/g, "ī")
str = str.replace(/ຶ/g, "ɯ")
str = str.replace(/ື/g, "ɯ̄")
str = str.replace(/ຸ/g, "u")
str = str.replace(/ູ/g, "ū")
str = str.replace(/ຽ/g, "iᵊ")
str = str.replace(/ໍ/g, "ɔ̄")
str = str.replace(/ົ/g, "o")
str = str.replace(/ຳ/g, "aᵐ")



// digits
str = str.replace(/໐/g, "0")
str = str.replace(/໑/g, "1")
str = str.replace(/໒/g, "2")
str = str.replace(/໓/g, "3")
str = str.replace(/໔/g, "4")
str = str.replace(/໕/g, "5")
str = str.replace(/໖/g, "6")
str = str.replace(/໗/g, "7")
str = str.replace(/໘/g, "8")
str = str.replace(/໙/g, "9")


// punctuation
str = str.replace(/ຯ/g, "...")


// diacritics
str = str.replace(/໌/g, "˟")



	return str.trim()


    }



 



function toLOC (str) {
str = toSyllables(str)
str = '  '+str+'  '

var debug = false

// move left-positioned consonants to the right
str = str.replace(/(ເ|ແ|ໂ|ໃ|ໄ)(.)/g, '$2$1')
// make sure any split digraphs are restored
str = str.replace(/ຫ(ເ|ແ|ໂ|ໃ|ໄ)(ງ|ຍ|ນ|ມ|ລ|ວ|\u0EBC)/g, 'ຫ$2$1')

// remove all tone marks, since they aren't rendered in this transcription
str = str.replace(/\u0EC8|\u0EC9|\u0ECA|\u0ECB/g, '')

var consonants = new Set(['ກ', 'ຂ', 'ຄ', 'ງ', 'ຈ', 'ຍ', 'ດ', 'ຕ', 'ຖ', 'ທ', 'ໜ', 'ນ', 'ປ', 'ຜ', 'ພ', 'ບ', 'ໝ', 'ມ', 'ຢ', 'ຣ', 'ລ', 'ຫຼ', 'ສ', 'ຊ', 'ຝ', 'ຟ', 'ຫ', 'ຮ'])
var medialVowels = new Set(['າ', 'ຳ', 'ະ', 'ັ', 'ິ', 'ີ', 'ຶ', 'ື', 'ຸ', 'ູ', 'ຽ', 'ໍ', 'ົ', 'ອ'])
//var vowelsAndTones = new Set(['ເ', 'ແ', 'ໂ', 'ໃ', 'ໄ', 'າ', 'ຳ', 'ະ', 'ັ', 'ິ', 'ີ', 'ຶ', 'ື', 'ຸ', 'ູ', 'ຽ', 'ໍ', 'ົ', 'ອ',   '່', '້', '໊', '໋', 'o','a','i','ū','ā','ū','æ','ī'])

// handle ວ (because it can be a vowel, a medial, part of a vowel, or a consonant when initial)
// this one is definitely a syllable-initial consonant
str = str.replace(/ຫວ/g, "w")
// then change all simple vowel occurrences (only occurs in closed syllables, so detect pattern CVC)
var temp = ''
var chars = [...str]
for (let i=0;i<chars.length-1;i++) {
    if (chars[i] === 'ວ' && consonants.has(chars[i-1]) && consonants.has(chars[i+1])) temp += 'ūa'
    else temp += chars[i]
    }
str = temp+' '
// next convert medials, with pattern CWV
temp = ''
chars = [...str]
for (let i=0;i<chars.length-1;i++) {
    if (chars[i] === 'ວ' && consonants.has(chars[i-1]) && medialVowels.has(chars[i+1])) temp += 'w'
    else temp += chars[i]
    }
str = temp+' '
// then replace all compound vowels that include it
str = str.replace(/ເັຽວ/g, "īeo")
str = str.replace(/ົວະ/g, "ua")
str = str.replace(/ົວ/g, "ūa")
str = str.replace(/າຍ/g, "āi")
str = str.replace(/າວ/g, "āw")
str = str.replace(/ິວ/g, "iu")
str = str.replace(/ີວ/g, "īu")
str = str.replace(/ຽວ/g, "īeo")
str = str.replace(/ວຍ/g, "ūai")
str = str.replace(/ແວ/g, "æw")
// what remains should be syllable-initial consonants, so ok to add spaces now
str = str.replace(/ວ/g, " v")

if (debug) console.log(str)
/*
// add spaces after final consonants
temp = ''
chars = [...str]
for (let i=0;i<chars.length-1;i++) {
    if (consonants.has(chars[i]) && consonants.has(chars[i+1])) temp += chars[i]+' '
    else temp += chars[i]
}
str = temp+' '

// add spaces before consonants with vowels on either side
temp = ''
chars = [...str]
for (let i=0;i<chars.length-1;i++) {
    if (consonants.has(chars[i]) && vowelsAndTones.has(chars[i+1]) && vowelsAndTones.has(chars[i-1])) temp += ' '+chars[i]
    else temp += chars[i]
}
str = temp+' '

console.log('>'+str+'<')
*/

str = str.replace(/ຫງ/g, "ng")
str = str.replace(/ຫຍ/g, "ny")
str = str.replace(/ຫນ/g, "n")
str = str.replace(/ຫມ/g, "m")
str = str.replace(/ຫຼ/g, "l")
str = str.replace(/ຫລ/g, "l")

str = str.replace(/ເາະ/g, "ǫ")
str = str.replace(/ເັຍ/g, "ia")
str = str.replace(/ເົາ/g, "ao")
str = str.replace(/ເະ/g, "e")
str = str.replace(/ເັ/g, "e")
str = str.replace(/ເິ/g, "œ")
str = str.replace(/ເີ/g, "œ̄")
str = str.replace(/ເຶອ/g, "ưa")
str = str.replace(/ເືອ/g, "ư̄a")
str = str.replace(/ເຍ/g, "īa")
str = str.replace(/ແະ/g, "æ")
str = str.replace(/ແັ/g, "æ")
str = str.replace(/ໂະ/g, "o")
str = str.replace(/ັອ/g, "ǫ")
str = str.replace(/ັຍ/g, "ai")
str = str.replace(/ັຽ/g, "ia")


str = str.replace(/ເ/g, "ē")
str = str.replace(/ແ/g, "ǣ")
str = str.replace(/ໂ/g, "ō")
str = str.replace(/ໃ/g, "ai")
str = str.replace(/ໄ/g, "ai")
str = str.replace(/າ/g, "ā")
str = str.replace(/ຳ/g, "am")
str = str.replace(/ະ/g, "a")
str = str.replace(/ັ/g, "a")
str = str.replace(/ິ/g, "i")
str = str.replace(/ີ/g, "ī")
str = str.replace(/ຶ/g, "ư")
str = str.replace(/ື/g, "ư̄")
str = str.replace(/ຸ/g, "u")
str = str.replace(/ູ/g, "ū")
str = str.replace(/ຽ/g, "īa")
str = str.replace(/ໍ/g, "ǭ")
str = str.replace(/ົ/g, "o")
str = str.replace(/ອ/g, "ǭ")




str = str.replace(/ວ/g, "w")



str = str.replace(/ກ/g, "k")
str = str.replace(/ຂ /g, "k ")
str = str.replace(/ຄ /g, "k ")
str = str.replace(/ຂ/g, "kh")
str = str.replace(/ຄ/g, "kh")
str = str.replace(/ງ/g, "ng")
str = str.replace(/ຈ /g, "t ")
str = str.replace(/ຈ/g, "ch")
str = str.replace(/ສ /g, "t ")
str = str.replace(/ຊ /g, "t ")
str = str.replace(/ສ/g, "s")
str = str.replace(/ຊ/g, "s")
str = str.replace(/ຍ /g, "j")
str = str.replace(/ຍ/g, "ny")
str = str.replace(/ດ /g, "t ")
str = str.replace(/ດ/g, "d")
str = str.replace(/ຕ/g, "t")
str = str.replace(/ຖ /g, "t ")
str = str.replace(/ທ /g, "t ")
str = str.replace(/ຖ/g, "th")
str = str.replace(/ທ/g, "th")
str = str.replace(/ນ/g, "n")
str = str.replace(/ບ /g, "p ")
str = str.replace(/ບ/g, "b")
str = str.replace(/ປ/g, "p")
str = str.replace(/ຜ /g, "p ")
str = str.replace(/ພ /g, "p ")
str = str.replace(/ຜ/g, "ph")
str = str.replace(/ພ/g, "ph")
str = str.replace(/ຝ /g, "p ")
str = str.replace(/ຟ /g, "p ")
str = str.replace(/ຝ/g, "f")
str = str.replace(/ຟ/g, "f")
str = str.replace(/ມ/g, "m")
str = str.replace(/ຢ/g, "y")
str = str.replace(/ຣ /g, "n ")
str = str.replace(/ຣ/g, "r")
str = str.replace(/ລ /g, "n ")
str = str.replace(/ລ/g, "l")
str = str.replace(/ຫ/g, "h")
str = str.replace(/ອ/g, "")
str = str.replace(/ຮ/g, "h")
str = str.replace(/ໜ/g, "n")
str = str.replace(/ໝ/g, "m")
str = str.replace(/ຼ/g, "")



str = str.replace(/໐/g, "0")
str = str.replace(/໑/g, "1")
str = str.replace(/໒/g, "2")
str = str.replace(/໓/g, "3")
str = str.replace(/໔/g, "4")
str = str.replace(/໕/g, "5")
str = str.replace(/໖/g, "6")
str = str.replace(/໗/g, "7")
str = str.replace(/໘/g, "8")
str = str.replace(/໙/g, "9")

// tones
str = str.replace(/່/g, "")
str = str.replace(/້/g, "")
str = str.replace(/໊/g, "")
str = str.replace(/໋/g, "")


// replace vowel carrier
str = str.replace(/ǭ([a|ā|æ|ǣ|e|ē|i|ī|o|ǫ|ǭ|ō|œ|œ̄|u|ū|ư|ư̄])/g, "$1")


// add markup for ambiguous cases
str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
str = str.replace(/\|/g,'</span><span class=alt>')
str = str.replace(/\{/g,'</span><span class=altlast>')
str = str.replace(/\]/g,'</span></span>')
str = str.replace(/¶/g,'')


return str.trim()
}




