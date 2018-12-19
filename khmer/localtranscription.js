function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toIPA') { return transcribeToIPA(str) }
	if (direction == 'toTrans') { return transliterate(str) }
	if (direction == 'toUNGEGN') { return toUNGEGN(str) }
	}
		


function transliterate ( str ) { 

str += '  '

str = str.replace(/ក/g, "k")
str = str.replace(/ខ/g, "kʰ")
str = str.replace(/គ/g, "ḵ")
str = str.replace(/ឃ/g, "ḵʰ")
str = str.replace(/ង/g, "ŋ")
str = str.replace(/ច/g, "c")
str = str.replace(/ឆ/g, "cʰ")
str = str.replace(/ជ/g, "c̱")
str = str.replace(/ឈ/g, "c̱ʰ")
str = str.replace(/ញ/g, "ɲ")
str = str.replace(/ដ/g, "ɗ")
str = str.replace(/ឋ/g, "ṫʰ")
str = str.replace(/ឌ/g, "ɗ̱")
str = str.replace(/ឍ/g, "ṯ̇ʰ")
str = str.replace(/ណ/g, "n")
str = str.replace(/ត/g, "t")
str = str.replace(/ថ/g, "tʰ")
str = str.replace(/ទ/g, "ṯ")
str = str.replace(/ធ/g, "ṯʰ")
str = str.replace(/ន/g, "ṉ")
str = str.replace(/ប/g, "b")
str = str.replace(/ផ/g, "pʰ")
str = str.replace(/ព/g, "p̄")
str = str.replace(/ភ/g, "p̄ʰ")
str = str.replace(/ម/g, "m̱")
str = str.replace(/យ/g, "ȳ")
str = str.replace(/រ/g, "ṟ")
str = str.replace(/ល/g, "ḻ")
str = str.replace(/វ/g, "v̱")
str = str.replace(/ឝ/g, "ś")
str = str.replace(/ឞ/g, "ṣ")
str = str.replace(/ស/g, "s")
str = str.replace(/ហ/g, "h")
str = str.replace(/ឡ/g, "l")
str = str.replace(/អ/g, "ʔ")
str = str.replace(/ឥ/g, "ị")
str = str.replace(/ឦ/g, "ị̄")
str = str.replace(/ឧ/g, "ụ")
str = str.replace(/ឨ/g, "-")
str = str.replace(/ឩ/g, "ụ̄")
str = str.replace(/ឪ/g, "ɨ̣")
str = str.replace(/ឫ/g, "r̥ₔ")
str = str.replace(/ឬ/g, "r̥̄ₔ")
str = str.replace(/ឭ/g, "l̥ₔ")
str = str.replace(/ឮ/g, "l̥̄ₔ")
str = str.replace(/ឯ/g, "æ̣")
str = str.replace(/ឰ/g, "ạʲ")
str = str.replace(/ឱ/g, "ọ")
str = str.replace(/ឲ/g, "ạᵒ")
str = str.replace(/ឳ/g, "ạʷ")
str = str.replace(/ា/g, "ā")
str = str.replace(/ិ/g, "i")
str = str.replace(/ី/g, "ī")
str = str.replace(/ឹ/g, "ɨ")
str = str.replace(/ឺ/g, "ɨ̄")
str = str.replace(/ុ/g, "u")
str = str.replace(/ូ/g, "ū")
str = str.replace(/ួ/g, "uᵊ")
str = str.replace(/ើ/g, "aᵊ")
str = str.replace(/ឿ/g, "ɨᵊ")
str = str.replace(/ៀ/g, "iᵊ")
str = str.replace(/េ/g, "e")
str = str.replace(/ែ/g, "æ")
str = str.replace(/ៃ/g, "aʲ")
str = str.replace(/ោ/g, "o")
str = str.replace(/ៅ/g, "aʷ")
str = str.replace(/ំ/g, "m̽")
str = str.replace(/ះ/g, "h̽")
str = str.replace(/ៈ/g, "a")
str = str.replace(/៉/g, "″")
str = str.replace(/៊/g, "′")
str = str.replace(/់/g, "˘")
str = str.replace(/៌/g, "ʳ")
str = str.replace(/៍/g, "˟")
str = str.replace(/៎/g, "ⸯ")
str = str.replace(/៏/g, "⁎")
str = str.replace(/័/g, "ă")
str = str.replace(/៑/g, "¯")
str = str.replace(/្/g, "͓")
str = str.replace(/។/g, ".")
str = str.replace(/៕/g, "¶")
str = str.replace(/៖/g, ":")
str = str.replace(/ៗ/g, "")
str = str.replace(/៘/g, "...")
str = str.replace(/៙/g, "")
str = str.replace(/៛/g, "(riel)")
str = str.replace(/៝/g, "ᵊ")
str = str.replace(/០/g, "0")
str = str.replace(/១/g, "1")
str = str.replace(/២/g, "2")
str = str.replace(/៣/g, "3")
str = str.replace(/៤/g, "4")
str = str.replace(/៥/g, "5")
str = str.replace(/៦/g, "6")
str = str.replace(/៧/g, "7")
str = str.replace(/៨/g, "8")
str = str.replace(/៩/g, "9")

return str.trim()
}





function transliterateOLD ( str ) { 

// based on harmonised translit for se asian scripts

str += '  '

str = str.replace(/ក/g, "kᵃ")
str = str.replace(/ខ/g, "kʰᵃ")
str = str.replace(/គ/g, "ḵᵒ")
str = str.replace(/ឃ/g, "ḵʰᵒ")
str = str.replace(/ង/g, "ṅᵒ")
str = str.replace(/ច/g, "cᵃ")
str = str.replace(/ឆ/g, "cʰᵃ")
str = str.replace(/ជ/g, "c̱ᵒ")
str = str.replace(/ឈ/g, "c̱ʰᵒ")
str = str.replace(/ញ/g, "ñᵒ")
str = str.replace(/ដ/g, "ḍ̱ᵃ")
str = str.replace(/ឋ/g, "ṭʰᵃ")
str = str.replace(/ឌ/g, "ḍ̱ᵒ")
str = str.replace(/ឍ/g, "ṭ̱ʰᵒ")
str = str.replace(/ណ/g, "ṇᵃ")
str = str.replace(/ត/g, "tᵃ")
str = str.replace(/ថ/g, "tʰᵃ")
str = str.replace(/ទ/g, "ṯᵒ")
str = str.replace(/ធ/g, "ṯʰᵒ")
str = str.replace(/ន/g, "nᵒ")
str = str.replace(/ប/g, "bᵃ")
str = str.replace(/ផ/g, "pʰᵃ")
str = str.replace(/ព/g, "pᵒ")
str = str.replace(/ភ/g, "p̄ʰᵒ")
str = str.replace(/ម/g, "mᵒ")
str = str.replace(/យ/g, "yᵒ")
str = str.replace(/រ/g, "rᵒ")
str = str.replace(/ឡ/g, "lᵃ")
str = str.replace(/ល/g, "ḷᵒ")
str = str.replace(/វ/g, "vᵒ")
str = str.replace(/ស/g, "sᵃ")
str = str.replace(/ហ/g, "hᵃ")
str = str.replace(/អ/g, "‘ᵃ")
str = str.replace(/ឝ/g, "ś")
str = str.replace(/ឞ/g, "ṣ")


// independent vowels
str = str.replace(/ឥ/g, "ị")
str = str.replace(/ឦ/g, "ị̄")
str = str.replace(/ឪ/g, "ɨ̣")
str = str.replace(/ឧ/g, "ụ")
str = str.replace(/ឩ/g, "ụ̄")
str = str.replace(/ឯ/g, "æ̣")
str = str.replace(/ឰ/g, "ạʲ")
str = str.replace(/ឱ/g, "ọ")
str = str.replace(/ឳ/g, "ạʷ")
str = str.replace(/ឲ/g, "ạᵒ")
str = str.replace(/ឫ/g, "r̥ₔ")
str = str.replace(/ឬ/g, "r̥̄ₔ")
str = str.replace(/ឭ/g, "l̥ₔ")
str = str.replace(/ឮ/g, "l̥̄ₔ")


// vowel signs
str = str.replace(/ៈ/g, "a")
str = str.replace(/ា/g, "ā")
str = str.replace(/ិ/g, "i")
str = str.replace(/ី/g, "ī")
str = str.replace(/ឹ/g, "ɨ")
str = str.replace(/ឺ/g, "ɨ̄")
str = str.replace(/ុ/g, "u")
str = str.replace(/ូ/g, "ū")
str = str.replace(/េ/g, "e")
str = str.replace(/ែ/g, "æ")
str = str.replace(/ៃ/g, "aʲ")
str = str.replace(/ោ/g, "o")
str = str.replace(/ៅ/g, "aʷ")
str = str.replace(/ួ/g, "uᵊ")
str = str.replace(/ើ/g, "aᵊ")
str = str.replace(/ឿ/g, "ɨᵊ")
str = str.replace(/ៀ/g, "iᵊ")

// diacritics
str = str.replace(/៌/g, "ʳ")
str = str.replace(/៍/g, "˟")
str = str.replace(/់/g, "˘")
str = str.replace(/័/g, "ă")
str = str.replace(/៝/g, "ᵊ")
str = str.replace(/៎/g, "ⸯ")
str = str.replace(/៏/g, "⁎")
str = str.replace(/៉/g, "″")
str = str.replace(/៊/g, "′")
str = str.replace(/៑/g, "˙")

// coeng
str = str.replace(/្/g, "͓")

// punctuation
str = str.replace(/៖/g, ":")
str = str.replace(/។/g, ".")
str = str.replace(/៕/g, " –")

// digits
str = str.replace(/០/g, "0")
str = str.replace(/១/g, "1")
str = str.replace(/២/g, "2")
str = str.replace(/៣/g, "3")
str = str.replace(/៤/g, "4")
str = str.replace(/៥/g, "5")
str = str.replace(/៦/g, "6")
str = str.replace(/៧/g, "7")
str = str.replace(/៨/g, "8")
str = str.replace(/៩/g, "9")

// zwj, zwnj
str = str.replace(/\u200D/g, "ǂ")
str = str.replace(/\u200C/g, "ǀ")


// remove inherent vowel where necessary
str = str.replace(/ᵃ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")

str = str.replace(/[ᵃ|ᵒ]ā/g, "ā")
str = str.replace(/[ᵃ|ᵒ]á/g, "á")
str = str.replace(/[ᵃ|ᵒ]a/g, "a")
str = str.replace(/[ᵃ|ᵒ]i/g, "i")
str = str.replace(/[ᵃ|ᵒ]ī/g, "ī")
str = str.replace(/[ᵃ|ᵒ]ɨ/g, "ɨ")
str = str.replace(/[ᵃ|ᵒ]u/g, "u")
str = str.replace(/[ᵃ|ᵒ]ū/g, "ū")
str = str.replace(/[ᵃ|ᵒ]o/g, "o")
str = str.replace(/[ᵃ|ᵒ]e/g, "e")
str = str.replace(/[ᵃ|ᵒ]æ/g, "æ")

str = str.replace(/[ᵃ|ᵒ]′/g, "′")
str = str.replace(/[ᵃ|ᵒ][ ]/g, " ")
str = str.replace(/[ᵃ|ᵒ][\n]/g, "\n")
str = str.replace(/[ᵃ|ᵒ][\t]/g, "\t ")


console.log(str)
return str.trim()
}


		


function transliterateOLD ( str ) { 

// based on UNGEGN, but without the variation in vowel transcription per the inherent vowel system

str += '  '

str = str.replace(/ក/g, "kᵃ")
str = str.replace(/ខ/g, "kʰᵃ")
str = str.replace(/គ/g, "ḵᵒ")
str = str.replace(/ឃ/g, "ḵʰᵒ")
str = str.replace(/ង/g, "ngᵒ")
str = str.replace(/ច/g, "cᵃ")
str = str.replace(/ឆ/g, "cʰᵃ")
str = str.replace(/ជ/g, "c̱ᵒ")
str = str.replace(/ឈ/g, "c̱ʰᵒ")
str = str.replace(/ញ/g, "ñᵒ")
str = str.replace(/ដ/g, "dᵃ")
str = str.replace(/ឋ/g, "ṭʰᵃ")
str = str.replace(/ឌ/g, "ḏᵒ")
str = str.replace(/ឍ/g, "ṱʰᵒ")
str = str.replace(/ណ/g, "nᵃ")
str = str.replace(/ត/g, "tᵃ")
str = str.replace(/ថ/g, "tʰᵃ")
str = str.replace(/ទ/g, "ṯᵒ")
str = str.replace(/ធ/g, "ṯʰᵒ")
str = str.replace(/ន/g, "ṉᵒ")
str = str.replace(/ប/g, "bᵃ")
str = str.replace(/ផ/g, "pʰᵃ")
str = str.replace(/ព/g, "ꝑᵒ")
str = str.replace(/ភ/g, "ꝑʰᵒ")
str = str.replace(/ម/g, "mᵒ")
str = str.replace(/យ/g, "yᵒ")
str = str.replace(/រ/g, "rᵒ")
str = str.replace(/ល/g, "ḻᵒ")
str = str.replace(/វ/g, "vᵒ")
str = str.replace(/ស/g, "sᵃ")
str = str.replace(/ហ/g, "hᵃ")
str = str.replace(/ឡ/g, "lᵃ")
str = str.replace(/អ/g, "’ᵃ")

str = str.replace(/ឝ/g, "ś")
str = str.replace(/ឞ/g, "ṣ")

// independent vowels
str = str.replace(/ឥ/g, "ị")
str = str.replace(/ឦ/g, "ị̄")
str = str.replace(/ឧ/g, "ụ")
str = str.replace(/ឩ/g, "ụ̄")
str = str.replace(/ឪ/g, "ỵ")
str = str.replace(/ឫ/g, "ṛ")
str = str.replace(/ឬ/g, "ṝ")
str = str.replace(/ឭ/g, "ḷ")
str = str.replace(/ឮ/g, "ḹ")
str = str.replace(/ឯ/g, "æ̣")
str = str.replace(/ឰ/g, "ạ͡i")
str = str.replace(/ឱ/g, "ọ")
str = str.replace(/ឳ/g, "ạ͡u")
str = str.replace(/ឲ/g, "ạ̌͡u")

// vowel signs
str = str.replace(/ា/g, "ā")
str = str.replace(/ិ/g, "i")
str = str.replace(/ី/g, "ī")
str = str.replace(/ឹ/g, "ɨ")
str = str.replace(/ឺ/g, "ɨ̄")
str = str.replace(/ុ/g, "u")
str = str.replace(/ូ/g, "ū")
str = str.replace(/ួ/g, "ua")
str = str.replace(/ើ/g, "oe")
str = str.replace(/ឿ/g, "ɨa")
str = str.replace(/ៀ/g, "ia")
str = str.replace(/េ/g, "e")
str = str.replace(/ែ/g, "æ")
str = str.replace(/ៃ/g, "ai")
str = str.replace(/ោ/g, "o")
str = str.replace(/ៅ/g, "au")

str = str.replace(/ំ/g, "ṃ")
str = str.replace(/ះ/g, "ḥ")
str = str.replace(/ៈ/g, "à")
str = str.replace(/់/g, "á")
str = str.replace(/៌/g, "ʳ")
str = str.replace(/៍/g, "˚")
str = str.replace(/៎/g, "’")
str = str.replace(/៏/g, "ʻ")
str = str.replace(/័/g, "ă")
str = str.replace(/៑/g, "˙")
str = str.replace(/៝/g, "ᵊ")
str = str.replace(/៉/g, "″")
str = str.replace(/៊/g, "′")

str = str.replace(/។/g, ".")
str = str.replace(/៖/g, ":")

str = str.replace(/០/g, "0")
str = str.replace(/១/g, "1")
str = str.replace(/២/g, "2")
str = str.replace(/៣/g, "3")
str = str.replace(/៤/g, "4")
str = str.replace(/៥/g, "5")
str = str.replace(/៦/g, "6")
str = str.replace(/៧/g, "7")
str = str.replace(/៨/g, "8")
str = str.replace(/៩/g, "9")

str = str.replace(/្/g, "͓")

// remove inherent vowel where necessary
str = str.replace(/ᵃ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")

str = str.replace(/[ᵃ|ᵒ]ā/g, "ā")
str = str.replace(/[ᵃ|ᵒ]á/g, "á")
str = str.replace(/[ᵃ|ᵒ]i/g, "i")
str = str.replace(/[ᵃ|ᵒ]ī/g, "ī")
str = str.replace(/[ᵃ|ᵒ]ɨ/g, "ɨ")
str = str.replace(/[ᵃ|ᵒ]ɨ̄/g, "ɨ̄")
str = str.replace(/[ᵃ|ᵒ]u/g, "u")
str = str.replace(/[ᵃ|ᵒ]ū/g, "ū")
str = str.replace(/[ᵃ|ᵒ]ua/g, "ua")
str = str.replace(/[ᵃ|ᵒ]oe/g, "oe")
str = str.replace(/[ᵃ|ᵒ]ɨa/g, "ɨa")
str = str.replace(/[ᵃ|ᵒ]ia/g, "ia")
str = str.replace(/[ᵃ|ᵒ]e/g, "e")
str = str.replace(/[ᵃ|ᵒ]æ/g, "æ")
str = str.replace(/[ᵃ|ᵒ]ai/g, "ai")
str = str.replace(/[ᵃ|ᵒ]o/g, "o")
str = str.replace(/[ᵃ|ᵒ]au/g, "au")
str = str.replace(/[ᵃ|ᵒ]à/g, "à")

str = str.replace(/[ᵃ|ᵒ]′/g, "′")
str = str.replace(/[ᵃ|ᵒ][ ]/g, " ")
str = str.replace(/[ᵃ|ᵒ][\n]/g, "\n")
str = str.replace(/[ᵃ|ᵒ][\t]/g, "\t ")


console.log(str)
return str.trim()
}


		


function toUNGEGN ( str ) {

// this version takes us pretty close to a useable transliteration based on UNGEGN
// it provides different, but unique transcriptions for a-system vs o-system vowels
// and multiple such for sequences involving anusvara and visarga
// the problem arises when the last consonant isn't of the right system for the vowel, eg. ស្រៈ
// or when a diacritic is used to change the system of the consonant, etc.
// here the specificity of the transcription, which is normally fairly close to the pronunciation,
// becomes our enemy - doing the right thing to get a UNGEGN transcription takes us away from the
// possibility of reversibility (unless we heavily overburden the transcription process)
// (we could probably continue to develop it as a UNGEGN transcription algorithm)

str += '  '

str = str.replace(/ក/g, "kâ")
str = str.replace(/ខ/g, "kʰâ")
str = str.replace(/គ/g, "ḵô")
str = str.replace(/ឃ/g, "ḵʰô")
str = str.replace(/ង/g, "ngô")
str = str.replace(/ច/g, "câ")
str = str.replace(/ឆ/g, "cʰâ")
str = str.replace(/ជ/g, "c̱ʰô")
str = str.replace(/ឈ/g, "c̱ʰô")
str = str.replace(/ញ/g, "nʰô")
str = str.replace(/ដ/g, "dâ")
str = str.replace(/ឋ/g, "ṭʰâ")
str = str.replace(/ឌ/g, "ḏô")
str = str.replace(/ឍ/g, "ṭʰô")
str = str.replace(/ណ/g, "nâ")
str = str.replace(/ត/g, "tâ")
str = str.replace(/ថ/g, "tʰâ")
str = str.replace(/ទ/g, "ṯô")
str = str.replace(/ធ/g, "ṯʰô")
str = str.replace(/ន/g, "ṉô")
str = str.replace(/ប/g, "bâ")
str = str.replace(/ផ/g, "pʰâ")
str = str.replace(/ព/g, "ꝑô")
str = str.replace(/ភ/g, "ꝑʰô")
str = str.replace(/ម/g, "mô")
str = str.replace(/យ/g, "yô")
str = str.replace(/រ/g, "rô")
str = str.replace(/ល/g, "ḻô")
str = str.replace(/វ/g, "vô")
str = str.replace(/ស/g, "sâ")
str = str.replace(/ហ/g, "hâ")
str = str.replace(/ឡ/g, "lâ")
str = str.replace(/អ/g, "’â")


// change vowel system for vowels following subjoined consonants
str = str.replace(/\u17D2ងô/,"\u17D2ងâ")
str = str.replace(/\u17D2ញô/,"\u17D2ញâ")
str = str.replace(/\u17D2នô/,"\u17D2នâ")
str = str.replace(/\u17D2មô/,"\u17D2មâ")
str = str.replace(/\u17D2យô/,"\u17D2យâ")
str = str.replace(/\u17D2រô/,"\u17D2រâ")
str = str.replace(/\u17D2លô/,"\u17D2លâ")
str = str.replace(/\u17D2វô/,"\u17D2វâ")


str = str.replace(/ឝ/g, "ś")
str = str.replace(/ឞ/g, "ṣ")

str = str.replace(/ឥ/g, "′i")
str = str.replace(/ឦ/g, "′ī")
str = str.replace(/ឧ/g, "′u")
str = str.replace(/ឩ/g, "′ū")
str = str.replace(/ឪ/g, "ýu")
str = str.replace(/ឫ/g, "ṛ")
str = str.replace(/ឬ/g, "ṝ")
str = str.replace(/ឭ/g, "ḷ")
str = str.replace(/ឮ/g, "ḹ")
str = str.replace(/ឯ/g, "′ae")
str = str.replace(/ឰ/g, "′ai")
str = str.replace(/ឱ/g, "′o")
str = str.replace(/ឳ/g, "′au")
str = str.replace(/ឲ/g, "′âu")

str = str.replace(/âាំង/g, "ănᵍ")
str = str.replace(/ôាំង/g, "eânᵍ")
str = str.replace(/âុំ/g, "oṃ")
str = str.replace(/ôុំ/g, "ŭṃ")
str = str.replace(/âាំ/g, "ăṃ")
str = str.replace(/ôាំ/g, "ŏâṃ")
str = str.replace(/âំ/g, "âṃ")
str = str.replace(/ôំ/g, "uṃ")

str = str.replace(/âោះ/g, "aôḥ")
str = str.replace(/ôោះ/g, "ŏăḥ")
str = str.replace(/âុះ/g, "ŏḥ")
str = str.replace(/ôុះ/g, "ŭḥ")
str = str.replace(/âេះ/g, "éḥ")
str = str.replace(/ôេះ/g, "éḥ")
str = str.replace(/âះ/g, "ăḥ")
str = str.replace(/ôះ/g, "eăḥ")

str = str.replace(/âៈ/g, "à′")
str = str.replace(/ôៈ/g, "eă′")

str = str.replace(/âា/g, "a")
str = str.replace(/ôា/g, "éa")
str = str.replace(/âិ/g, "ĕ")
str = str.replace(/ôិ/g, "ĭ")
str = str.replace(/âី/g, "ei")
str = str.replace(/ôី/g, "i")
str = str.replace(/ឹ/g, "œ̆")
str = str.replace(/ឹ/g, "œ̆")
str = str.replace(/âឺ/g, "œ")
str = str.replace(/ôឺ/g, "œ")
str = str.replace(/âុ/g, "ŏ")
str = str.replace(/ôុ/g, "ŭ")
str = str.replace(/âូ/g, "o")
str = str.replace(/ôូ/g, "u")
str = str.replace(/âួ/g, "uŏ")
str = str.replace(/ôួ/g, "uŏ")
str = str.replace(/âើ/g, "aeu")
str = str.replace(/ôើ/g, "eu")
str = str.replace(/âឿ/g, "œă")
str = str.replace(/ôឿ/g, "œă")
str = str.replace(/âៀ/g, "iĕ")
str = str.replace(/ôៀ/g, "iĕ")
str = str.replace(/âេ/g, "é")
str = str.replace(/ôេ/g, "é")
str = str.replace(/âែ/g, "ê")
str = str.replace(/ôែ/g, "ê")
str = str.replace(/âៃ/g, "ai")
str = str.replace(/ôៃ/g, "ey")
str = str.replace(/âោ/g, "aô")
str = str.replace(/ôោ/g, "oŭ")
str = str.replace(/âៅ/g, "au")
str = str.replace(/ôៅ/g, "ŏu")


str = str.replace(/ៈ/g, "à")
str = str.replace(/់/g, "á")
str = str.replace(/៌/g, "ʳ")
str = str.replace(/៍/g, "˚")
str = str.replace(/៎/g, "’")
str = str.replace(/៏/g, "ʻ")
str = str.replace(/័/g, "ă")
str = str.replace(/៑/g, "˙")
str = str.replace(/៝/g, "ᵊ")
str = str.replace(/៉/g, "″")
str = str.replace(/៊/g, "′")

str = str.replace(/។/g, ".")
str = str.replace(/៖/g, ":")

str = str.replace(/០/g, "0")
str = str.replace(/១/g, "1")
str = str.replace(/២/g, "2")
str = str.replace(/៣/g, "3")
str = str.replace(/៤/g, "4")
str = str.replace(/៥/g, "5")
str = str.replace(/៦/g, "6")
str = str.replace(/៧/g, "7")
str = str.replace(/៨/g, "8")
str = str.replace(/៩/g, "9")

str = str.replace(/្/g, "͓")

// remove inherent vowel where necessary
str = str.replace(/â͓/g, "͓")
str = str.replace(/ô͓/g, "͓")
str = str.replace(/ô͓/g, "͓")

str = str.replace(/[â|ô]ā/g, "ā")
str = str.replace(/[â|ô]á/g, "á")
str = str.replace(/[â|ô]i/g, "i")
str = str.replace(/[â|ô]ī/g, "ī")
str = str.replace(/[â|ô]ẏ/g, "ẏ")
str = str.replace(/[â|ô]ȳ/g, "ȳ")
str = str.replace(/[â|ô]u/g, "u")
str = str.replace(/[â|ô]ū/g, "ū")
str = str.replace(/[â|ô]ua/g, "ua")
str = str.replace(/[â|ô]oe/g, "oe")
str = str.replace(/[â|ô]ẏa/g, "ẏa")
str = str.replace(/[â|ô]ia/g, "ia")
str = str.replace(/[â|ô]e/g, "e")
str = str.replace(/[â|ô]ae/g, "ae")
str = str.replace(/[â|ô]ai/g, "ai")
str = str.replace(/[â|ô]o/g, "o")
str = str.replace(/[â|ô]au/g, "au")
str = str.replace(/[â|ô]à/g, "à")

str = str.replace(/[â|ô]′/g, "′")
str = str.replace(/[â|ô][ |\n|\t]/g, " ")


console.log(str)
return str.trim()
}





function toUNGEGNtranslit ( str ) {

// this version takes us pretty close to a useable transliteration based on UNGEGN
// it provides different, but unique transcriptions for a-system vs o-system vowels
// and multiple such for sequences involving anusvara and visarga
// the problem arises when the last consonant isn't of the right system for the vowel, eg. ស្រៈ
// or when a diacritic is used to change the system of the consonant, etc.
// here the specificity of the transcription, which is normally fairly close to the pronunciation,
// becomes our enemy - doing the right thing to get a UNGEGN transcription takes us away from the
// possibility of reversibility (unless we heavily overburden the transcription process)
// (we could probably continue to develop it as a UNGEGN transcription algorithm)

str += '  '

str = str.replace(/ក/g, "kâ")
str = str.replace(/ខ/g, "kʰâ")
str = str.replace(/គ/g, "ḵô")
str = str.replace(/ឃ/g, "ḵʰô")
str = str.replace(/ង/g, "ngô")
str = str.replace(/ច/g, "câ")
str = str.replace(/ឆ/g, "cʰâ")
str = str.replace(/ជ/g, "çʰô")
str = str.replace(/ឈ/g, "çʰô")
str = str.replace(/ញ/g, "nʰô")
str = str.replace(/ដ/g, "dâ")
str = str.replace(/ឋ/g, "ṭʰâ")
str = str.replace(/ឌ/g, "ḏô")
str = str.replace(/ឍ/g, "ṭʰô")
str = str.replace(/ណ/g, "nâ")
str = str.replace(/ត/g, "tâ")
str = str.replace(/ថ/g, "tʰâ")
str = str.replace(/ទ/g, "ṯô")
str = str.replace(/ធ/g, "ṯʰô")
str = str.replace(/ន/g, "ṉô")
str = str.replace(/ប/g, "bâ")
str = str.replace(/ផ/g, "pʰâ")
str = str.replace(/ព/g, "ꝑô")
str = str.replace(/ភ/g, "ꝑʰô")
str = str.replace(/ម/g, "mô")
str = str.replace(/យ/g, "yô")
str = str.replace(/រ/g, "rô")
str = str.replace(/ល/g, "ḻô")
str = str.replace(/វ/g, "vô")
str = str.replace(/ស/g, "sâ")
str = str.replace(/ហ/g, "hâ")
str = str.replace(/ឡ/g, "lâ")
str = str.replace(/អ/g, "’â")



str = str.replace(/ឝ/g, "ś")
str = str.replace(/ឞ/g, "ṣ")

str = str.replace(/ឥ/g, "′i")
str = str.replace(/ឦ/g, "′ī")
str = str.replace(/ឧ/g, "′u")
str = str.replace(/ឩ/g, "′ū")
str = str.replace(/ឪ/g, "ýu")
str = str.replace(/ឫ/g, "ṛ")
str = str.replace(/ឬ/g, "ṝ")
str = str.replace(/ឭ/g, "ḷ")
str = str.replace(/ឮ/g, "ḹ")
str = str.replace(/ឯ/g, "′ae")
str = str.replace(/ឰ/g, "′ai")
str = str.replace(/ឱ/g, "′o")
str = str.replace(/ឳ/g, "′au")
str = str.replace(/ឲ/g, "′âu")

str = str.replace(/âាំង/g, "ănᵍ")
str = str.replace(/ôាំង/g, "eânᵍ")
str = str.replace(/âុំ/g, "oṃ")
str = str.replace(/ôុំ/g, "ŭṃ")
str = str.replace(/âាំ/g, "ăṃ")
str = str.replace(/ôាំ/g, "ŏâṃ")
str = str.replace(/âំ/g, "âṃ")
str = str.replace(/ôំ/g, "uṃ")

str = str.replace(/âោះ/g, "aôḥ")
str = str.replace(/ôោះ/g, "ŏăḥ")
str = str.replace(/âុះ/g, "ŏḥ")
str = str.replace(/ôុះ/g, "ŭḥ")
str = str.replace(/âេះ/g, "éḥ")
str = str.replace(/ôេះ/g, "éḥ")
str = str.replace(/âះ/g, "ăḥ")
str = str.replace(/ôះ/g, "eăḥ")

str = str.replace(/âៈ/g, "à′")
str = str.replace(/ôៈ/g, "eă′")

str = str.replace(/âា/g, "a")
str = str.replace(/ôា/g, "éa")
str = str.replace(/âិ/g, "ĕ")
str = str.replace(/ôិ/g, "ĭ")
str = str.replace(/âី/g, "ei")
str = str.replace(/ôី/g, "i")
str = str.replace(/ឹ/g, "œ̆")
str = str.replace(/ឹ/g, "œ̆")
str = str.replace(/âឺ/g, "œ")
str = str.replace(/ôឺ/g, "œ")
str = str.replace(/âុ/g, "ŏ")
str = str.replace(/ôុ/g, "ŭ")
str = str.replace(/âូ/g, "o")
str = str.replace(/ôូ/g, "u")
str = str.replace(/âួ/g, "uŏ")
str = str.replace(/ôួ/g, "uŏ")
str = str.replace(/âើ/g, "aeu")
str = str.replace(/ôើ/g, "eu")
str = str.replace(/âឿ/g, "œă")
str = str.replace(/ôឿ/g, "œă")
str = str.replace(/âៀ/g, "iĕ")
str = str.replace(/ôៀ/g, "iĕ")
str = str.replace(/âេ/g, "é")
str = str.replace(/ôេ/g, "é")
str = str.replace(/âែ/g, "ê")
str = str.replace(/ôែ/g, "ê")
str = str.replace(/âៃ/g, "ai")
str = str.replace(/ôៃ/g, "ey")
str = str.replace(/âោ/g, "aô")
str = str.replace(/ôោ/g, "oŭ")
str = str.replace(/âៅ/g, "au")
str = str.replace(/ôៅ/g, "ŏu")


str = str.replace(/ៈ/g, "à")
str = str.replace(/់/g, "á")
str = str.replace(/៌/g, "ʳ")
str = str.replace(/៍/g, "˚")
str = str.replace(/៎/g, "’")
str = str.replace(/៏/g, "ʻ")
str = str.replace(/័/g, "ă")
str = str.replace(/៑/g, "˙")
str = str.replace(/៝/g, "ᵊ")
str = str.replace(/៉/g, "″")
str = str.replace(/៊/g, "′")

str = str.replace(/។/g, ".")
str = str.replace(/៖/g, ":")

str = str.replace(/០/g, "0")
str = str.replace(/១/g, "1")
str = str.replace(/២/g, "2")
str = str.replace(/៣/g, "3")
str = str.replace(/៤/g, "4")
str = str.replace(/៥/g, "5")
str = str.replace(/៦/g, "6")
str = str.replace(/៧/g, "7")
str = str.replace(/៨/g, "8")
str = str.replace(/៩/g, "9")

str = str.replace(/្/g, "͓")

// remove inherent vowel where necessary
str = str.replace(/â͓/g, "͓")
str = str.replace(/ô͓/g, "͓")
str = str.replace(/ô͓/g, "͓")

str = str.replace(/[â|ô]ā/g, "ā")
str = str.replace(/[â|ô]á/g, "á")
str = str.replace(/[â|ô]i/g, "i")
str = str.replace(/[â|ô]ī/g, "ī")
str = str.replace(/[â|ô]ẏ/g, "ẏ")
str = str.replace(/[â|ô]ȳ/g, "ȳ")
str = str.replace(/[â|ô]u/g, "u")
str = str.replace(/[â|ô]ū/g, "ū")
str = str.replace(/[â|ô]ua/g, "ua")
str = str.replace(/[â|ô]oe/g, "oe")
str = str.replace(/[â|ô]ẏa/g, "ẏa")
str = str.replace(/[â|ô]ia/g, "ia")
str = str.replace(/[â|ô]e/g, "e")
str = str.replace(/[â|ô]ae/g, "ae")
str = str.replace(/[â|ô]ai/g, "ai")
str = str.replace(/[â|ô]o/g, "o")
str = str.replace(/[â|ô]au/g, "au")
str = str.replace(/[â|ô]à/g, "à")

str = str.replace(/[â|ô]′/g, "′")
str = str.replace(/[â|ô][ |\n|\t]/g, "")


console.log(str)
return str.trim()
}





function transliterateOLD ( str ) {
// this is based on ALA LOC transliteration system, that uses typical indic transliterations
// it diverges widely from the actual pronunciation

str += '  '

str = str.replace(/ក/g, "kᵃ")
str = str.replace(/ខ/g, "kʰᵃ")
str = str.replace(/គ/g, "gᵒ")
str = str.replace(/ឃ/g, "gʰᵒ")
str = str.replace(/ង/g, "ṅᵒ")
str = str.replace(/ច/g, "cᵃ")
str = str.replace(/ឆ/g, "cʰᵃ")
str = str.replace(/ជ/g, "jᵒ")
str = str.replace(/ឈ/g, "jʰᵒ")
str = str.replace(/ញ/g, "ñᵒ")
str = str.replace(/ដ/g, "ṭᵃ")
str = str.replace(/ឋ/g, "ṭʰᵃ")
str = str.replace(/ឌ/g, "ḍᵒ")
str = str.replace(/ឍ/g, "ḍʰᵒ")
str = str.replace(/ណ/g, "ṇᵃ")
str = str.replace(/ត/g, "tᵃ")
str = str.replace(/ថ/g, "tʰᵃ")
str = str.replace(/ទ/g, "dᵒ")
str = str.replace(/ធ/g, "dʰᵒ")
str = str.replace(/ន/g, "nᵒ")
str = str.replace(/ប/g, "pᵃ")
str = str.replace(/ផ/g, "pʰᵃ")
str = str.replace(/ព/g, "bᵒ")
str = str.replace(/ភ/g, "bʰᵒ")
str = str.replace(/ម/g, "mᵒ")
str = str.replace(/យ/g, "yᵒ")
str = str.replace(/រ/g, "rᵒ")
str = str.replace(/ល/g, "lᵒ")
str = str.replace(/វ/g, "vᵒ")
str = str.replace(/ស/g, "sᵃ")
str = str.replace(/ហ/g, "hᵃ")
str = str.replace(/ឡ/g, "ḷᵃ")
str = str.replace(/អ/g, "ʼᵃ")


str = str.replace(/ឝ/g, "ś")
str = str.replace(/ឞ/g, "ṣ")

str = str.replace(/ឥ/g, "′i")
str = str.replace(/ឦ/g, "′ī")
str = str.replace(/ឧ/g, "′u")
str = str.replace(/ឩ/g, "′ū")
str = str.replace(/ឪ/g, "ýu")
str = str.replace(/ឫ/g, "ṛ")
str = str.replace(/ឬ/g, "ṝ")
str = str.replace(/ឭ/g, "ḷ")
str = str.replace(/ឮ/g, "ḹ")
str = str.replace(/ឯ/g, "′ae")
str = str.replace(/ឰ/g, "′ai")
str = str.replace(/ឱ/g, "′o")
str = str.replace(/ឳ/g, "′au")
str = str.replace(/ឲ/g, "′âu")

str = str.replace(/ា/g, "ā")
str = str.replace(/ិ/g, "i")
str = str.replace(/ី/g, "ī")
str = str.replace(/ឹ/g, "ẏ")
str = str.replace(/ឺ/g, "ȳ")
str = str.replace(/ុ/g, "u")
str = str.replace(/ូ/g, "ū")
str = str.replace(/ួ/g, "ua")
str = str.replace(/ើ/g, "oe")
str = str.replace(/ឿ/g, "ẏa")
str = str.replace(/ៀ/g, "ia")
str = str.replace(/េ/g, "e")
str = str.replace(/ែ/g, "ae")
str = str.replace(/ៃ/g, "ai")
str = str.replace(/ោ/g, "o")
str = str.replace(/ៅ/g, "au")

str = str.replace(/ំ/g, "ṃ")
str = str.replace(/ះ/g, "ḥ")
str = str.replace(/ៈ/g, "à")
str = str.replace(/់/g, "á")
str = str.replace(/៌/g, "ʳ")
str = str.replace(/៍/g, "˚")
str = str.replace(/៎/g, "’")
str = str.replace(/៏/g, "ʻ")
str = str.replace(/័/g, "ă")
str = str.replace(/៑/g, "˙")
str = str.replace(/៝/g, "ᵊ")
str = str.replace(/៉/g, "″")
str = str.replace(/៊/g, "′")

str = str.replace(/។/g, ".")
str = str.replace(/៖/g, ":")

str = str.replace(/០/g, "0")
str = str.replace(/១/g, "1")
str = str.replace(/២/g, "2")
str = str.replace(/៣/g, "3")
str = str.replace(/៤/g, "4")
str = str.replace(/៥/g, "5")
str = str.replace(/៦/g, "6")
str = str.replace(/៧/g, "7")
str = str.replace(/៨/g, "8")
str = str.replace(/៩/g, "9")

str = str.replace(/្/g, "͓")

// remove inherent vowel where necessary
str = str.replace(/ᵃ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")
str = str.replace(/ᵒ͓/g, "͓")

str = str.replace(/[ᵃ|ᵒ]ā/g, "ā")
str = str.replace(/[ᵃ|ᵒ]á/g, "á")
str = str.replace(/[ᵃ|ᵒ]i/g, "i")
str = str.replace(/[ᵃ|ᵒ]ī/g, "ī")
str = str.replace(/[ᵃ|ᵒ]ẏ/g, "ẏ")
str = str.replace(/[ᵃ|ᵒ]ȳ/g, "ȳ")
str = str.replace(/[ᵃ|ᵒ]u/g, "u")
str = str.replace(/[ᵃ|ᵒ]ū/g, "ū")
str = str.replace(/[ᵃ|ᵒ]ua/g, "ua")
str = str.replace(/[ᵃ|ᵒ]oe/g, "oe")
str = str.replace(/[ᵃ|ᵒ]ẏa/g, "ẏa")
str = str.replace(/[ᵃ|ᵒ]ia/g, "ia")
str = str.replace(/[ᵃ|ᵒ]e/g, "e")
str = str.replace(/[ᵃ|ᵒ]ae/g, "ae")
str = str.replace(/[ᵃ|ᵒ]ai/g, "ai")
str = str.replace(/[ᵃ|ᵒ]o/g, "o")
str = str.replace(/[ᵃ|ᵒ]au/g, "au")
str = str.replace(/[ᵃ|ᵒ]à/g, "à")

str = str.replace(/[ᵃ|ᵒ]′/g, "′")


console.log(str)
return str.trim()
}




function convertToIPA ( syllable ) {

// kill vowel after final if syllable is longer than 1 character and ends in consonant
if (syllable.length > 1 && consonants.has(syllable[syllable.length-1])) syllable += 'u17D2'

	var outstr = '';
	var series = 1;
	var labials = { '\u1794':'', '\u1795':'', '\u1796':'', '\u1797':'', '\u1798':'' };
	var velars = { '\u1780':'', '\u1781':'', '\u1782':'', '\u1783':'', '\u1784':'' };
	var nasals = {  '\u1798':'', '\u1793':'', '\u1789':'', '\u1784':'', '\u178E':'' };

	if (syllable.robat) { outstr += 'rə'; }
	switch (syllable.initialcons.charAt(0) ) { // Initial consonant
		case 'ក':  // ka
			outstr += 'k'; 
				if (syllable.initialcons.length > 1 && (syllable.initialcons[1] == '\u1793'  || syllable.initialcons[1]  == '\u1798' )) { outstr += 'ʰ'; }
			series = 1;
			break;
		case 'ខ':  // kha
			outstr += 'k'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case 'គ':  // ko
			outstr += 'k'; 
			if (syllable.initialcons.length > 1 && (syllable.initialcons[1] == '\u1793'  || syllable.initialcons[1]  == '\u1798' )) { outstr += 'ʰ'; }
			series = 2;
			break;
		case 'ឃ':  // kho
			outstr += 'k'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 2;
			break;
		case 'ង':  // ngo
			outstr += 'ŋ'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u1785':  // ca
			outstr += 'c'; 
			series = 1;
			break;
		case '\u1786':  // cha
			outstr += 'c'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case '\u1787':  // co
			outstr += 'c'; 
			series = 2;
			break;
		case '\u1788':  // cho
			outstr += 'c'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 2;
			break;
		case '\u1789':  // nyo
			outstr += 'ɲ'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u178a':  // da
			outstr += 'ɗ'; 
			series = 1;
			break;
		case '\u178b':  // tha
			outstr += 't'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case '\u178c':  // do
			outstr += 'ɗ'; 
			series = 2;
			break;
		case '\u178d':  // ttho
			outstr += 'tʰ'; 
			series = 2;
			break;
		case '\u178e':  // nno
			outstr += 'n'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u178f':  // ta
			if (syllable.presyllable && syllable.finalcons[0] in nasals) { outstr += 'ɗ'; }
			else { outstr += 't';  }
			series = 1;
			break;
		case '\u1790':  // tha
			outstr += 't'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case '\u1791':  // to
			outstr += 't'; 
			series = 2;
			break;
		case '\u1792':  // tho
			outstr += 't'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 2;
			break;
		case '\u1793':  // no
			outstr += 'n'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u1794':  // ba
			if (syllable.muusikoatan || syllable.initialcons.length > 1) {
				outstr += 'p';
				}
			else outstr += 'ɓ'; 
			series = 1;
			break;
		case '\u1795':  // pha
			outstr += 'p'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case '\u1796':  // po
			outstr += 'p'; 
			series = 2;
			break;
		case '\u1797':  // pho
			outstr += 'p'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 2;
			break;
		case '\u1798':  // mo
			outstr += 'm'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u1799':  // yo
			outstr += 'j'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u179a':  // ro
			outstr += 'r'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u179b':  // lo
			outstr += 'l'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u179c':  // vo
			outstr += 'ʋ'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u179f':  // sa
			outstr += 's'; 
			series = 1;
			break;
		case '\u17a0':  // ha
			if (syllable.initialcons.length == 1) {
				outstr += 'h'; 
				}
			series = 1;
			break;
		case '\u17a1':  // la
			outstr += 'l'; 
			if (!vowelHarmony) { series = 1; }
			else { series = vowelHarmony; }
			break;
		case '\u17a2':  // qa
			outstr += 'ʔ'; 
			series = 1;
			break;
		outstr += character;
		}

	switch (syllable.initialcons.charAt(1) ) { // Initial subscript consonant
		case 'ក':  // ka
			outstr += 'k'; 
			series = 1;
			break;
		case 'ខ':  // kha
			outstr += 'kʰ'; 
			series = 1;
			break;
		case 'គ':  // ko
			outstr += 'k'; 
			series = 2;
			break;
		case 'ឃ':  // kho
			outstr += 'kʰ'; 
			series = 2;
			break;
		case 'ង':  // ngo
			outstr += 'ŋ'; 
			series = 2;
			break;
		case '\u1785':  // ca
			outstr += 'c'; 
			series = 1;
		case '\u1786':  // cha
			outstr += 'c'; 
			series = 1;
		case '\u1787':  // co
			outstr += 'c'; 
			series = 2;
		case '\u1788':  // cho
			outstr += 'c'; 
			series = 2;
		case '\u1789':  // nyo
			outstr += 'ɲ'; 
			break;
		case '\u178a':  // da
			outstr += 'ɗ'; 
			series = 1;
			break;
		case '\u178b':  // tha
			outstr += 'tʰ'; 
			series = 1;
			break;
		case '\u178c':  // do
			outstr += 'ɗ'; 
			series = 2;
			break;
		case '\u178d':  // ttho
			outstr += 'tʰ'; 
			series = 2;
			break;
		case '\u178e':  // nno
			outstr += 'n'; 
			series = 2;
			break;
		case '\u178f':  // ta
			outstr += 't'; 
			series = 1;
			break;
		case '\u1790':  // tha
			outstr += 'tʰ'; 
			series = 1;
			break;
		case '\u1791':  // to
			outstr += 't'; 
			series = 2;
			break;
		case '\u1792':  // tho
			outstr += 'tʰ'; 
			series = 2;
			break;
		case '\u1793':  // no
			outstr += 'n'; 
			break;
		case '\u1794':  // ba
			if (syllable.muusikoatan) {
				outstr += 'p';
				}
			else outstr += 'ɓ'; 
			series = 1;
			break;
		case '\u1795':  // pha
			outstr += 'pʰ'; 
			series = 1;
			break;
		case '\u1796':  // po
			outstr += 'p'; 
			series = 2;
			break;
		case '\u1797':  // pho
			outstr += 'pʰ'; 
			series = 2;
			break;
		case '\u1798':  // mo
			outstr += 'm'; 
			break;
		case '\u1799':  // yo
			outstr += 'j'; 
			break;
		case '\u179a':  // ro
			outstr += 'r'; 
			break;
		case '\u179b':  // lo
			outstr += 'l'; 
			break;
		case '\u179c':  // vo
			if (syllable.initialcons[0] == '\u17a0') { outstr += 'f'; } // preceded by h
			else { outstr += 'ʋ';  }
			break;
		case '\u179f':  // sa
			outstr += 's'; 
			series = 1;
			break;
		case '\u17a0':  // ha
			if (syllable.initialcons.length == 1) {
				outstr += 'h'; 
				}
			series = 1;
			break;
		case '\u17a1':  // la
			outstr += 'l'; 
			series = 1;
			break;
		case '\u17a2':  // qa
			outstr += 'aʔ'; 
			series = 1;
			break;
		outstr += character;
		}
		

		// ==================================== Triple clusters  ===================================
		// ==================================== Triple clusters  ===================================
		// ==================================== Triple clusters  ===================================

		if (syllable.initialcons[2]) {
					switch (syllable.initialcons[2]) {  // this is either r in sanskrit or sahstraakaa, or l in ankleeh
					case '\u179a':  // ro
						outstr += 'r';
						break;
					case '\u179b': // la
						outstr += 'l';
						break;
					}
			}
		
		
		// ==================================== Vowels ===================================
		// ==================================== Vowels ===================================
		// ==================================== Vowels ===================================

		var shortvowels = { 'i':'', 'e':'', 'ɨ':'ə', 'a':'', 'ɑ':'', 'u':'', 'o':'' };

		if (syllable.muusikoatan) { series = 1; }
		if (syllable.triisap) { series = 2; }
		switch (syllable.vowel) { 
		case '':  // no vowel
			if (syllable.nikahit) { 
				if ( series == 1)  { vowelsound = 'ɑm'; }
				else { vowelsound = 'um'; }
				}
			else if (syllable.reahmuk) { 
				if ( series == 1)  { vowelsound = 'ɑ'; }
				else { vowelsound = 'eə̆'; }
				}
			else if (syllable.bantok) {
				if ( series == 1)  { vowelsound = 'ɑ'; }
				else if (syllable.finalcons && syllable.finalcons[0] in labials) { vowelsound = 'u'; }
				else { vowelsound = 'uə̆'; }
				}
			else if (syllable.yuukaleapintu) {
				if ( series == 1)  { vowelsound = 'aʔ'; }
				else { vowelsound = 'eə̆ʔ'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'ɑː'; }
				else { vowelsound = 'ɔː'; }
				}
			break;
		case '\u17d0':  // samyok sannya
			if (syllable.finalcons && syllable.finalcons[0]  == '\u1799') { // followed by yo
				if ( series == 1)  { vowelsound = 'a'; }
				else { vowelsound = 'ɨ'; }
				}
			else if (syllable.finalcons && syllable.finalcons[0]  == '\u179a') { // followed by ro
				vowelsound = 'ɔə';
				}
			else if (syllable.finalcons && syllable.finalcons[0]  == '\u1784') { // followed by ng
				if ( series == 1)  { vowelsound = 'a'; }
				else { vowelsound = 'eə̆'; }
				}
			else {  
				if ( series == 1)  { vowelsound = 'a'; }
				else { vowelsound = 'oə̆'; }
				}
			break;
		case '\u17b6':  // aa
			if (syllable.nikahit && syllable.finalcons == 'ង') { // nik & ng
				if ( series == 1)  { vowelsound = 'a'; }
				else { vowelsound = 'eə̆'; }
				}
			else if (syllable.nikahit) { // nik 
				if ( series == 1)  { vowelsound = 'am'; }
				else { vowelsound = 'oə̆m'; }
				}
			else if (syllable.bantok) {  
				if ( series == 1)  { vowelsound = 'a'; }
				else if (syllable.finalcons && syllable.finalcons[0] in velars) { vowelsound = 'eə̆'; }
				else { vowelsound = 'oə̆'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'aː'; }
				else { vowelsound = 'iə'; }
				}
			break;
		case '\u17b7':  // i
			if ( series == 1)  { 
				if (syllable.initialcons == '\u17a2') { vowelsound = 'ə'; } // independent vowel
				else { vowelsound = 'e'; }
				}
			else { vowelsound = 'i'; }
			break;
		case '\u17b8':  // ii
			if ( series == 1)  { vowelsound = 'əj'; }
			else { vowelsound = 'iː'; }
			break;
		case '\u17b9':  // y
			if ( series == 1)  { vowelsound = 'ə'; }
			else { vowelsound = 'ɨ'; }
			break;
		case '\u17ba':  // yy
			if ( series == 1)  { vowelsound = 'əɨ'; }
			else { vowelsound = 'ɨː'; }
			break;
		case '\u17bb':  // u
			if (syllable.nikahit) { // with nik 
				if ( series == 1)  { vowelsound = 'om'; }
				else { vowelsound = 'um'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'o'; }
				else { vowelsound = 'u'; }
				}
			break;
		case '\u17bc':  // uu
			if ( series == 1)  { 
				if (syllable.finalcons[0] == '\u179c') { vowelsound = 'ə'; } // followed by vo
				else { vowelsound = 'ou'; }
				}
			else { vowelsound = 'uː'; }
			break;
		case '\u17bd':  // ua
			vowelsound = 'uə'; 
			break;
		case '\u17c1':  // e
			if (syllable.reahmuk) { // with reahmuk 
				if ( series == 1)  { vowelsound = 'e'; }
				else { vowelsound = 'i'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'ei'; }
				else { vowelsound = 'eː'; }
				}
			break;
		case '\u17c2':  // ae
			if (syllable.reahmuk && series == 1) { // with reahmuk 
				vowelsound = 'e';
				}
			else {
				if ( series == 1)  { vowelsound = 'ae'; }
				else { vowelsound = 'ɛː'; }
				}
			break;
		case '\u17c3':  // ai
			if ( series == 1)  { vowelsound = 'aj'; }
			else { vowelsound = 'ɨj'; }
			break;
		case '\u17c4':  // oo
			if (syllable.reahmuk) { // with reahmuk 
				if ( series == 1)  { vowelsound = 'ɑ'; }
				else { vowelsound = 'uə̆'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'ao'; }
				else { vowelsound = 'oː'; }
				}
			break;
		case '\u17c5':  // au
			if ( series == 1)  { 
				if (syllable.initialcons == '\u17a2') { vowelsound = 'aw'; } // independent vowel
				else { vowelsound = 'aə'; }
				}
			else { vowelsound = 'ɨw'; }
			break;
		case '\u17be':  // oe
			if (syllable.reahmuk && series == 1) { // with reahmuk 
				vowelsound = 'ə';
				}
			else if ( series == 1)  { vowelsound = 'aw'; }
			else { vowelsound = 'əː'; }
			break;
		case '\u17bf':  // ya
			vowelsound = 'ɨə'; 
			break;
		case '\u17c0':  // ie
			vowelsound = 'iə'; 
			break;
		vowelsound = character;
		
		// Independent vowels
		
		case '\u17A5':  // qi
			vowelsound = 'ʔə'; 
			break;
		case '\u17A6':  // qii
			vowelsound = 'ʔəj'; 
			break;
		case '\u17A7':  // qu
			vowelsound = 'ʔo'; 
			break;
		case '\u17A9':  // quu
			vowelsound = 'ʔou'; 
			break;
		case '\u17AA':  // quuv
			vowelsound = 'ʔəw'; 
			break;
		case '\u17AF':  // qe
			vowelsound = 'ʔae'; 
			break;
		case '\u17b0':  // qai
			vowelsound = 'ʔaj'; 
			break;
		case '\u17b1':  // qoo
			vowelsound = 'ʔao'; 
			break;
		case '\u17b2':  // qoo type 2
			vowelsound = 'ʔao'; 
			break;
		case '\u17b3':  // qau
			vowelsound = 'ʔaw'; 
			break;
		case '\u17AB':  // ry
			vowelsound = 'rɨ'; 
			break;
		case '\u17Ac':  // ryy
			vowelsound = 'rɨː'; 
			break;
		case '\u17Ad':  // ly
			vowelsound = 'lɨ'; 
			break;
		case '\u17Ae':  // lyy
			vowelsound = 'lɨː'; 
			break;
		
		}
		
	if (syllable.presyllable && !(vowelsound in shortvowels) && !syllable.nikahit && !syllable.reahmuk) {
		if ( series == 1)  { vowelsound = 'ɑ'; }
		else { vowelsound = 'ɔ'; }
		}	
	
	outstr += vowelsound;
	
	
	// =============================== Final consonant =================================
	// =============================== Final consonant =================================
	// =============================== Final consonant =================================
	
	var glottalstopproducers = { 'a':'', 'aː':'', 'ɑ':'', 'ɑː':'', 'eə̆':'', 'uə̆':'', 'iə':'', 'ɨə':'', 'uə':''  };
	
	if (syllable.reahmuk) { outstr += 'h' ; }
	
	if (syllable.finalcons == '' && vowelsound in shortvowels && !syllable.presyllable && !syllable.reahmuk && !syllable.nikahit) { outstr += 'ʔ'; }

	
	switch (syllable.finalcons.charAt(0) ) { 
		case 'ក':  // ka
			if (vowelsound in glottalstopproducers) { outstr += 'ʔ'; }
			else { outstr += 'k'; }
			break;
		case 'ខ':  // kha
			if (vowelsound in glottalstopproducers) { outstr += 'ʔ'; }
			else { outstr += 'k'; }
			break;
		case 'គ':  // ko
			if (vowelsound in glottalstopproducers) { outstr += 'ʔ'; }
			else { outstr += 'k'; }
			break;
		case 'ឃ':  // kho
			if (vowelsound in glottalstopproducers) { outstr += 'ʔ'; }
			else { outstr += 'k'; }
			break;
		case 'ង':  // ngo
			outstr += 'ŋ'; 
			break;
		case '\u1785':  // ca
			outstr += 'c'; 
			break;
		case '\u1787':  // co
			outstr += 'c'; break;
		case '\u1789':  // nyo
			outstr += 'ɲ'; 
			break;
		case '\u178a':  // da
			outstr += 't'; 
			break;
		case '\u178b':  // tha
			outstr += 't'; 
			break;
		case '\u178c':  // do
			outstr += 't'; 
			break;
		case '\u178d':  // ttho
			outstr += 't'; 
			break;
		case '\u178e':  // nno
			outstr += 'n'; 
			break;
		case '\u178f':  // ta
			outstr += 't'; 
			break;
		case '\u1790':  // tha
			outstr += 't'; 
			break;
		case '\u1791':  // to
			outstr += 't'; 
			break;
		case '\u1792':  // tho
			outstr += 't'; 
			break;
		case '\u1793':  // no
			outstr += 'n'; 
			break;
		case '\u1794':  // ba
		 outstr += 'p'; 
			break;
		case '\u1795':  // pha
			outstr += 'p'; 
			break;
		case '\u1796':  // po
			outstr += 'p'; 
 			break;
		case '\u1797':  // pho
			outstr += 'p'; 
 			break;
		case '\u1798':  // mo
			outstr += 'm'; 
			break;
		case '\u1799':  // yo
			outstr += 'j'; 
			break;
		case '\u179a':  // ro
			outstr += ''; 
			break;
		case '\u179b':  // lo
			outstr += 'l'; 
			break;
		case '\u179c':  // vo
			outstr += 'w'; 
			break;
		case '\u179f':  // sa
			outstr += 'h'; 
			break;
		case '\u17a0':  // special rule for brahmin
			if (syllable.finalcons.charAt(1)== '\u1798') { outstr += 'm' }; 
			break;
		outstr += character;
		}
		
	return [outstr, series];
	}
	
	
function transcribeToIPA (temp) {
	temp = temp.replace(/ ¶/, ''); // remove leading and trailing spaces
	temp = temp.replace(/^ */, ''); // remove leading and trailing spaces
	temp = temp.replace(/ *$/, '');
	temp = temp.replace(/\u200B/g, ' '); // convert zwsp to space
	temp = temp.replace(/-/g, '- '); // convert hyphens to hyphen + space
	var syllables = temp.split(' ');
	var outstr = '';
	var vowels = { "\u17B6":'', "\u17B7":'', "\u17B8":'', "\u17B9":'', "\u17BA":'', "\u17BB":'', "\u17BC":'', "\u17BD":'', "\u17C1":'', "\u17C2":'', "\u17C3":'', "\u17C4":'', "\u17C5":'', "\u17BE":'', "\u17BF":'', "\u17C0":'', "\u17d0":''  };
	var independentvowels = { "\u17A5":'', "\u17A6":'', "\u17A7":'', "\u17A9":'', "\u17AA":'', "\u17AF":'', "\u17B0":'', "\u17B1":'', "\u17B2":'', "\u17B3":'', "\u17AB":'', "\u17AC":'', "\u17AD":'', "\u17AE":'' };
	var consonants = { "\u1780":'', "\u1782":'', "\u1781":'', "\u1783":'', "\u1784":'', "\u1785":'', "\u1787":'', "\u1786":'', "\u1788":'', "\u1789":'', "\u178A":'', "\u178C":'', "\u178B":'', "\u178D":'', "\u178E":'', "\u178F":'', "\u1791":'', "\u1790":'', "\u1792":'', "\u1793":'', "\u1794":'', "\u1796":'', "\u1795":'', "\u1797":'', "\u1798":'', "\u1799":'', "\u17A1":'', "\u179B":'', "\u179A":'', "\u179F":'', "\u17A0":'', "\u179C":'', '\u17a2':''};
	var irregularwords = { 'ព្រហ្មណ៍':'prum', 'ព្រាហ្មណ៍':'priəm'  };
	var series = 1;
	var bantok = '\u17cb';
	var robat = '\u17cc';
	var muusikoatan = '\u17c9';
	var triisap = '\u17ca';
	var nikahit = '\u17c6';
	var reahmuk = '\u17c7';
	var coeng = '\u17d2';
	var yuukaleapintu = '\u17c8';
	var virama = '\u17d1';
	var kakabat = '\u17ce';
	var toandakhiat = '\u17cd';
	var ahsda  = '\u17cf';
	vowelHarmony = '';
		
	for (a = 0; a<syllables.length; a++) {
		glyphs = syllables[a];  //alert('>'+glyphs+'<');
		if (glyphs == '') { outstr += ' '; continue; }
	
		// parse syllable constituents
		var vowelposn = 0;
		var infinal = false;
		var syllable = { initialcons: '', vowel:'', vowelposn: 0, robat: false, muusikatoan:false, triisap:false, 
								finalcons:'' , nikahit:false, reahmuk:false , finalcons: '', bantok:false, presyllable:false,
								yuukaleapintu: false, toandakhiat: false  };

		for (var i=0; i<glyphs.length; i++) {
			character = glyphs[i]; //alert(character.charCodeAt(0).toString(16));
			if (character in consonants) {
				//if ( i== 0  || (vowelposn == 0 && coengfound == true)) { syllable.initialcons += character; }
				if ( i== 0  || (infinal == false && glyphs[i-1] == coeng)) { syllable.initialcons += character; }
				else { syllable.finalcons += character; infinal = true; }
				}
			else if (character in vowels) {
				syllable.vowel = character;
				vowelposn = i;
				}
			else if (character in independentvowels) {
				syllable.vowel = character;
				vowelposn = i;
				}
			else if (character == robat) { 
				if (infinal) { syllable.finalcons = ''; }
				else { syllable.robat = true;  }
				}
			else if (character == muusikoatan) { syllable.muusikoatan = true;  }
			else if (character == triisap) { syllable.triisap = true;  }
			else if (character == nikahit) { syllable.nikahit = true;  }
			else if (character == reahmuk) { syllable.reahmuk = true;  }
			else if (character == bantok) { syllable.bantok = true;  }
			else if (character == yuukaleapintu) { syllable.yuukaleapintu = true;  }
			else if (character == toandakhiat) { syllable.toandakhiat = true;  }
			else if (character == '-') { syllable.presyllable = true;  }
			else if (character == coeng) { coengfound = true;   }// alert('coeng found');
			else if (character == virama || character == kakabat || character == toandakhiat || character == ahsda) {  } // do nothing
			else { alert(i+' Unknown character'+character+' '+character.charCodeAt(0).toString(16)); }
			}
		//document.getElementById('latin').value =syllable.initialcons+":"+syllable.finalcons+":"+syllable.vowel;
		//alert(1);
			
		if (!syllable.toandakhiat) { 
			result = convertToIPA(syllable); 
			outstr += result[0]; 
			}
		//alert( 'series'+result[1]);
		
		// record the series for the next syllable if this is the first part of a disyllable
		// this will be used for second syllables starting with liquids to determine the series of that syllable
		// a null string signifies that this is not a presyllable
		if (syllable.presyllable) { vowelHarmony = result[1]; } 
		else { vowelHarmony = ''; }
		// if (! syllable.presyllable) { outstr += ' '; }
		}

	return outstr 
	}
		
	






