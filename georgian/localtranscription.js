function localtranscribe (direction, str) {
	console.log(direction)
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toNational') { return toNational(str) }
	}
		



function transliterate (str) {

str += ' '

str = str.replace(/Ⴀ/g, "A̱")
str = str.replace(/Ⴁ/g, "Ḇ")
str = str.replace(/Ⴂ/g, "G̱")
str = str.replace(/Ⴃ/g, "Ḏ")
str = str.replace(/Ⴄ/g, "Ɛ̱")
str = str.replace(/Ⴅ/g, "V̱")
str = str.replace(/Ⴆ/g, "Ẕ")
str = str.replace(/Ⴇ/g, "Ṯ")
str = str.replace(/Ⴈ/g, "I̱")
str = str.replace(/Ⴉ/g, "Ḵ̇")
str = str.replace(/Ⴊ/g, "Ḻ")
str = str.replace(/Ⴋ/g, "M̱")
str = str.replace(/Ⴌ/g, "Ṉ")
str = str.replace(/Ⴍ/g, "Ɔ̱")
str = str.replace(/Ⴎ/g, "Ṗ̱")
str = str.replace(/Ⴏ/g, "Ʒ̱")
str = str.replace(/Ⴐ/g, "Ṟ")
str = str.replace(/Ⴑ/g, "S̱")
str = str.replace(/Ⴒ/g, "Ṯ̇")
str = str.replace(/Ⴓ/g, "U̱")
str = str.replace(/Ⴔ/g, "P̱ʰ")
str = str.replace(/Ⴕ/g, "Ḵʰ")
str = str.replace(/Ⴖ/g, "Ɣ̱")
str = str.replace(/Ⴗ/g, "Q̱̇")
str = str.replace(/Ⴘ/g, "Ʃ̱")
str = str.replace(/Ⴙ/g, "Č̱ʰ")
str = str.replace(/Ⴚ/g, "C̱ʰ")
str = str.replace(/Ⴛ/g, "Ǳ̱")
str = str.replace(/Ⴜ/g, "Ċ̱")
str = str.replace(/Ⴝ/g, "Č̱̇")
str = str.replace(/Ⴞ/g, "Χ̱")
str = str.replace(/Ⴟ/g, "Ǆ̱")
str = str.replace(/Ⴠ/g, "H̱")
str = str.replace(/Ⴡ/g, "E̱")
str = str.replace(/Ⴢ/g, "J̱")
str = str.replace(/Ⴣ/g, "W̱")
str = str.replace(/Ⴤ/g, "Q̱ʰ")
str = str.replace(/Ⴥ/g, "O̱")
str = str.replace(/Ⴧ/g, "Ə̱")
str = str.replace(/Ⴭ/g, "Ə̱̇")
str = str.replace(/ა/g, "a")
str = str.replace(/ბ/g, "b")
str = str.replace(/გ/g, "g")
str = str.replace(/დ/g, "d")
str = str.replace(/ე/g, "ɛ")
str = str.replace(/ვ/g, "v")
str = str.replace(/ზ/g, "z")
str = str.replace(/თ/g, "t")
str = str.replace(/ი/g, "i")
str = str.replace(/კ/g, "k̇")
str = str.replace(/ლ/g, "l")
str = str.replace(/მ/g, "m")
str = str.replace(/ნ/g, "n")
str = str.replace(/ო/g, "ɔ")
str = str.replace(/პ/g, "ṗ")
str = str.replace(/ჟ/g, "ʒ")
str = str.replace(/რ/g, "r")
str = str.replace(/ს/g, "s")
str = str.replace(/ტ/g, "ṫ")
str = str.replace(/უ/g, "u")
str = str.replace(/ფ/g, "pʰ")
str = str.replace(/ქ/g, "kʰ")
str = str.replace(/ღ/g, "ɣ")
str = str.replace(/ყ/g, "q̇")
str = str.replace(/შ/g, "ʃ")
str = str.replace(/ჩ/g, "čʰ")
str = str.replace(/ც/g, "cʰ")
str = str.replace(/ძ/g, "ʣ")
str = str.replace(/წ/g, "ċ")
str = str.replace(/ჭ/g, "č̇")
str = str.replace(/ხ/g, "χ")
str = str.replace(/ჯ/g, "ʤ")
str = str.replace(/ჰ/g, "h")
str = str.replace(/ჱ/g, "e")
str = str.replace(/ჲ/g, "j")
str = str.replace(/ჳ/g, "w")
str = str.replace(/ჴ/g, "qʰ")
str = str.replace(/ჵ/g, "o")
str = str.replace(/ჶ/g, "f")
str = str.replace(/ჷ/g, "ə")
str = str.replace(/ჸ/g, "ʔ")
str = str.replace(/ჹ/g, "ɢ")
str = str.replace(/ჺ/g, "ʕ")
str = str.replace(/ჼ/g, "ᴺ")
str = str.replace(/ჽ/g, "ə̇")
str = str.replace(/ჾ/g, "ᴸ")
str = str.replace(/ჿ/g, "ʷ")
str = str.replace(/Ა/g, "A")
str = str.replace(/Ბ/g, "B")
str = str.replace(/Გ/g, "G")
str = str.replace(/Დ/g, "D")
str = str.replace(/Ე/g, "Ɛ")
str = str.replace(/Ვ/g, "V")
str = str.replace(/Ზ/g, "Z")
str = str.replace(/Თ/g, "T")
str = str.replace(/Ი/g, "I")
str = str.replace(/Კ/g, "K̇")
str = str.replace(/Ლ/g, "L")
str = str.replace(/Მ/g, "M")
str = str.replace(/Ნ/g, "N")
str = str.replace(/Ო/g, "Ɔ")
str = str.replace(/Პ/g, "Ṗ")
str = str.replace(/Ჟ/g, "Ʒ")
str = str.replace(/Რ/g, "R")
str = str.replace(/Ს/g, "S")
str = str.replace(/Ტ/g, "Ṫ")
str = str.replace(/Უ/g, "U")
str = str.replace(/Ფ/g, "Pʰ")
str = str.replace(/Ქ/g, "Kʰ")
str = str.replace(/Ღ/g, "Ɣ")
str = str.replace(/Ყ/g, "Q̇")
str = str.replace(/Შ/g, "Ʃ")
str = str.replace(/Ჩ/g, "Čʰ")
str = str.replace(/Ც/g, "Cʰ")
str = str.replace(/Ძ/g, "Ǳ")
str = str.replace(/Წ/g, "Ċ")
str = str.replace(/Ჭ/g, "Č̇")
str = str.replace(/Ხ/g, "Χ")
str = str.replace(/Ჯ/g, "Ǆ")
str = str.replace(/Ჰ/g, "H")
str = str.replace(/Ჱ/g, "E")
str = str.replace(/Ჲ/g, "J")
str = str.replace(/Ჳ/g, "W")
str = str.replace(/Ჴ/g, "Qʰ")
str = str.replace(/Ჷ/g, "Ə")
str = str.replace(/Ჸ/g, "ʔ")
str = str.replace(/ⴀ/g, "a̱")
str = str.replace(/ⴁ/g, "ḇ")
str = str.replace(/ⴂ/g, "g̱")
str = str.replace(/ⴃ/g, "ḏ")
str = str.replace(/ⴄ/g, "ɛ̱")
str = str.replace(/ⴅ/g, "v̱")
str = str.replace(/ⴆ/g, "ẕ")
str = str.replace(/ⴇ/g, "ṯ")
str = str.replace(/ⴈ/g, "i̱")
str = str.replace(/ⴉ/g, "ḵ̇")
str = str.replace(/ⴊ/g, "ḻ")
str = str.replace(/ⴋ/g, "m̱")
str = str.replace(/ⴌ/g, "ṉ")
str = str.replace(/ⴍ/g, "ɔ̱")
str = str.replace(/ⴎ/g, "ṗ̱")
str = str.replace(/ⴏ/g, "ʒ̱")
str = str.replace(/ⴐ/g, "ṟ")
str = str.replace(/ⴑ/g, "s̱")
str = str.replace(/ⴒ/g, "ṯ̇")
str = str.replace(/ⴓ/g, "u̱")
str = str.replace(/ⴔ/g, "p̱ʰ")
str = str.replace(/ⴕ/g, "ḵʰ")
str = str.replace(/ⴖ/g, "ɣ̱")
str = str.replace(/ⴗ/g, "q̱̇")
str = str.replace(/ⴘ/g, "ʃ̱")
str = str.replace(/ⴙ/g, "č̱ʰ")
str = str.replace(/ⴚ/g, "c̱ʰ")
str = str.replace(/ⴛ/g, "ʣ̱")
str = str.replace(/ⴜ/g, "ċ̱")
str = str.replace(/ⴝ/g, "č̱̇")
str = str.replace(/ⴞ/g, "χ̱")
str = str.replace(/ⴟ/g, "ʤ̱")
str = str.replace(/ⴠ/g, "ẖ")
str = str.replace(/ⴡ/g, "e̱")
str = str.replace(/ⴢ/g, "j̱")
str = str.replace(/ⴣ/g, "w̱")
str = str.replace(/ⴤ/g, "q̱ʰ")
str = str.replace(/ⴥ/g, "o̱")
str = str.replace(/ⴧ/g, "ə̱")
str = str.replace(/ⴭ/g, "ə̱̇")

return str.trim()
}



function toNational (str) {

str += '  '

str = str.replace(/Ⴀ/g, "a")
str = str.replace(/Ⴁ/g, "b")
str = str.replace(/Ⴂ/g, "g")
str = str.replace(/Ⴃ/g, "d")
str = str.replace(/Ⴄ/g, "e")
str = str.replace(/Ⴅ/g, "v")
str = str.replace(/Ⴆ/g, "z")
str = str.replace(/Ⴇ/g, "t")
str = str.replace(/Ⴈ/g, "i")
str = str.replace(/Ⴉ/g, "k'")
str = str.replace(/Ⴊ/g, "l")
str = str.replace(/Ⴋ/g, "m")
str = str.replace(/Ⴌ/g, "n")
str = str.replace(/Ⴍ/g, "o")
str = str.replace(/Ⴎ/g, "p'")
str = str.replace(/Ⴏ/g, "zh")
str = str.replace(/Ⴐ/g, "r")
str = str.replace(/Ⴑ/g, "s")
str = str.replace(/Ⴒ/g, "t'")
str = str.replace(/Ⴓ/g, "u")
str = str.replace(/Ⴔ/g, "p")
str = str.replace(/Ⴕ/g, "k")
str = str.replace(/Ⴖ/g, "gh")
str = str.replace(/Ⴗ/g, "q'")
str = str.replace(/Ⴘ/g, "sh")
str = str.replace(/Ⴙ/g, "ch")
str = str.replace(/Ⴚ/g, "ts")
str = str.replace(/Ⴛ/g, "dz")
str = str.replace(/Ⴜ/g, "ts'")
str = str.replace(/Ⴝ/g, "ch'")
str = str.replace(/Ⴞ/g, "kh")
str = str.replace(/Ⴟ/g, "j")
str = str.replace(/Ⴠ/g, "h")
str = str.replace(/Ⴡ/g, "—")
str = str.replace(/Ⴢ/g, "—")
str = str.replace(/Ⴣ/g, "—")
str = str.replace(/Ⴤ/g, "—")
str = str.replace(/Ⴥ/g, "—")
str = str.replace(/Ⴧ/g, "—")
str = str.replace(/Ⴭ/g, "—")
str = str.replace(/ა/g, "a")
str = str.replace(/ბ/g, "b")
str = str.replace(/გ/g, "g")
str = str.replace(/დ/g, "d")
str = str.replace(/ე/g, "e")
str = str.replace(/ვ/g, "v")
str = str.replace(/ზ/g, "z")
str = str.replace(/თ/g, "t")
str = str.replace(/ი/g, "i")
str = str.replace(/კ/g, "k'")
str = str.replace(/ლ/g, "l")
str = str.replace(/მ/g, "m")
str = str.replace(/ნ/g, "n")
str = str.replace(/ო/g, "o")
str = str.replace(/პ/g, "p'")
str = str.replace(/ჟ/g, "zh")
str = str.replace(/რ/g, "r")
str = str.replace(/ს/g, "s")
str = str.replace(/ტ/g, "t'")
str = str.replace(/უ/g, "u")
str = str.replace(/ფ/g, "p")
str = str.replace(/ქ/g, "k")
str = str.replace(/ღ/g, "gh")
str = str.replace(/ყ/g, "q'")
str = str.replace(/შ/g, "sh")
str = str.replace(/ჩ/g, "ch")
str = str.replace(/ც/g, "ts")
str = str.replace(/ძ/g, "dz")
str = str.replace(/წ/g, "ts'")
str = str.replace(/ჭ/g, "ch'")
str = str.replace(/ხ/g, "kh")
str = str.replace(/ჯ/g, "j")
str = str.replace(/ჰ/g, "h")
str = str.replace(/ჱ/g, "—")
str = str.replace(/ჲ/g, "—")
str = str.replace(/ჳ/g, "—")
str = str.replace(/ჴ/g, "—")
str = str.replace(/ჵ/g, "—")
str = str.replace(/ჶ/g, "—")
str = str.replace(/ჷ/g, "—")
str = str.replace(/ჸ/g, "—")
str = str.replace(/ჹ/g, "—")
str = str.replace(/ჺ/g, "—")
str = str.replace(/ჼ/g, "—")
str = str.replace(/ჽ/g, "—")
str = str.replace(/ჾ/g, "—")
str = str.replace(/ჿ/g, "—")
str = str.replace(/Ა/g, "a")
str = str.replace(/Ბ/g, "b")
str = str.replace(/Გ/g, "g")
str = str.replace(/Დ/g, "d")
str = str.replace(/Ე/g, "e")
str = str.replace(/Ვ/g, "v")
str = str.replace(/Ზ/g, "z")
str = str.replace(/Თ/g, "t")
str = str.replace(/Ი/g, "i")
str = str.replace(/Კ/g, "k'")
str = str.replace(/Ლ/g, "l")
str = str.replace(/Მ/g, "m")
str = str.replace(/Ნ/g, "n")
str = str.replace(/Ო/g, "o")
str = str.replace(/Პ/g, "p'")
str = str.replace(/Ჟ/g, "zh")
str = str.replace(/Რ/g, "r")
str = str.replace(/Ს/g, "s")
str = str.replace(/Ტ/g, "t'")
str = str.replace(/Უ/g, "u")
str = str.replace(/Ფ/g, "p")
str = str.replace(/Ქ/g, "k")
str = str.replace(/Ღ/g, "gh")
str = str.replace(/Ყ/g, "q'")
str = str.replace(/Შ/g, "sh")
str = str.replace(/Ჩ/g, "ch")
str = str.replace(/Ც/g, "ts")
str = str.replace(/Ძ/g, "dz")
str = str.replace(/Წ/g, "ts'")
str = str.replace(/Ჭ/g, "ch'")
str = str.replace(/Ხ/g, "kh")
str = str.replace(/Ჯ/g, "j")
str = str.replace(/Ჰ/g, "h")
str = str.replace(/Ჱ/g, "—")
str = str.replace(/Ჲ/g, "—")
str = str.replace(/Ჳ/g, "—")
str = str.replace(/Ჴ/g, "—")
str = str.replace(/Ჷ/g, "—")
str = str.replace(/Ჸ/g, "—")
str = str.replace(/ⴀ/g, "a")
str = str.replace(/ⴁ/g, "b")
str = str.replace(/ⴂ/g, "g")
str = str.replace(/ⴃ/g, "d")
str = str.replace(/ⴄ/g, "e")
str = str.replace(/ⴅ/g, "v")
str = str.replace(/ⴆ/g, "z")
str = str.replace(/ⴇ/g, "t")
str = str.replace(/ⴈ/g, "i")
str = str.replace(/ⴉ/g, "k'")
str = str.replace(/ⴊ/g, "l")
str = str.replace(/ⴋ/g, "m")
str = str.replace(/ⴌ/g, "n")
str = str.replace(/ⴍ/g, "o")
str = str.replace(/ⴎ/g, "p'")
str = str.replace(/ⴏ/g, "zh")
str = str.replace(/ⴐ/g, "r")
str = str.replace(/ⴑ/g, "s")
str = str.replace(/ⴒ/g, "t'")
str = str.replace(/ⴓ/g, "u")
str = str.replace(/ⴔ/g, "p")
str = str.replace(/ⴕ/g, "k")
str = str.replace(/ⴖ/g, "gh")
str = str.replace(/ⴗ/g, "q'")
str = str.replace(/ⴘ/g, "sh")
str = str.replace(/ⴙ/g, "ch")
str = str.replace(/ⴚ/g, "ts")
str = str.replace(/ⴛ/g, "dz")
str = str.replace(/ⴜ/g, "ts'")
str = str.replace(/ⴝ/g, "ch'")
str = str.replace(/ⴞ/g, "kh")
str = str.replace(/ⴟ/g, "j")
str = str.replace(/ⴠ/g, "h")
str = str.replace(/ⴡ/g, "—")
str = str.replace(/ⴢ/g, "—")
str = str.replace(/ⴣ/g, "—")
str = str.replace(/ⴤ/g, "—")
str = str.replace(/ⴥ/g, "—")
str = str.replace(/ⴧ/g, "—")
str = str.replace(/ⴭ/g, "—")


return str
}