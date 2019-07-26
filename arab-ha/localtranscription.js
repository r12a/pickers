function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'translitPlus') { return translitPlus(str) }
	if (direction == 'toISO') { return transcribetoISO(str) }
	if (direction == 'toLOC') { return transcribetoLOC(str) }
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






function translitPlus (str) {

var consonants = new Set(['ٻ', 'ݑ', 'پ', 'ط', 'ڟ', 'ق', 'ࢼ', 'ب', 'ت', 'د', 'ث', 'ك', 'ک', 'غ', 'ع', 'ف', 'ࢻ', 'پ', 'س', 'ص', 'ز', 'ذ', 'ظ', 'ش', 'ج', 'ه', 'ح', 'م', 'ن', 'ࢽ', 'و', 'ل', 'ض', 'ر', 'ی', 'ۑ', 'ؿ', 'ݣ', 'ࣃ', 'ࣄ' ])
//var indvowels = new Set(['ं', 'ः', 'इ', 'ई', 'ॶ', 'ॷ', 'उ', 'ऊ', 'ऎ', 'ए', 'ॳ', 'ॴ', 'ऒ', 'ओ', 'अ', 'आ', 'ॵ', 'ऐ', 'औ' ])
//var vowels = new Set(['ि', 'ी', 'ॖ', 'ॗ', 'ु', 'ू', 'ॆ', 'े', 'ऺ', 'ऻ', 'ॊ', 'ो', 'ा', 'ॏ', 'ै', 'ौ', ])

str = ' '+str.normalize('NFC')+'        '

// deal with shadda
strArray = [...str].reverse()
var shaddaFound = false
for (let i=0;i<strArray.length;i++) {
	if (strArray[i] === '\u0651') {
		shaddaFound = true
		strArray[i] = ''
		}
	else {
		if (shaddaFound && consonants.has(strArray[i])) {
			strArray[i] += strArray[i]
			shaddaFound = false
			}
		}
	}
str = [...strArray].reverse().join('')

// stop viramas being treated as combining characters
// (otherwise they're difficult to extract from cchar sequences later)
//str = str.replace(/\u094D/g,'V')


// add inherent vowels
//var withInherents = ''
//for (let i=0; i<str.length-1; i++) {
//console.log(str[i])
//    if (consonants.has(str[i]) && consonants.has(str[i+1]) && vowels.has(str[i+2]) && str[i+3] === ' ') { console.log('hey');withInherents += str[i] } // penultimate syllable
//	else if (consonants.has(str[i]) && (consonants.has(str[i+1]) || indvowels.has(str[i+1])))  withInherents += str[i]+'ʘ'
//    else if (consonants.has(str[i]) && str[i+1] === '\u093C' && ((consonants.has(str[i+2]) || indvowels.has(str[i+2])))) { // nukta
//        withInherents += str[i]+str[i+1]+'ʘ'
//        i++
//        }
//	else  withInherents += str[i]
//	}
//str=withInherents


str = ' '+transliterate(str)+'  '



// convert translit letters to ipa letters
// convert these to uppercase first, then lowercase all later, so there's no interference
// nuktas
str = str.replace(/waɑ/g, "WĀ")

str = str.replace(/uwɑ͓/g, "ō")
str = str.replace(/ıi˓/g, "ī")
str = str.replace(/ıˈe/g, "ē")
str = str.replace(/ˈeı/g, "ē")
str = str.replace(/ɑ͑a/g, "a")
str = str.replace(/ɑ̜i/g, "i")
str = str.replace(/aɑ/g, "ā")
str = str.replace(/uw/g, "ū")
str = str.replace(/iı/g, "ī")
str = str.replace(/ˈe/g, "ē")


// remove sukun
str = str.replace(/͓/g, "")

// replace 0 for inherent vowel
//str = str.replace(/ʘ/g, "ə")



// add markup for ambiguous cases
str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
str = str.replace(/\|/g,'</span><span class=alt>')
str = str.replace(/\{/g,'</span><span class=altlast>')
str = str.replace(/\]/g,'</span></span>')

return str.trim().toLowerCase()
}


