function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toIPA') { return transcribetoIPA(str) }
	if (direction == 'toISO') { return toISO(str) }
	if (direction == 'reverse') { return reverse(str) }
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



function transcribetoIPA (str) {

str = transliterate(str).toLowerCase()

str = str.replace(/aⁱ̃/g, "aɪ̃")
str = str.replace(/aᶦ/g, "aɪ")
str = str.replace(/eⁱ̃/g, "eɪ̃")
str = str.replace(/oⁱ̃/g, "oɪ̃")

str = str.replace(/pᶣ/g, "ʰp")
str = str.replace(/tᶣ/g, "ʰt")
str = str.replace(/kᶣ/g, "ʰk")
str = str.replace(/ʦᶣ/g, "ʰt͡s")
str = str.replace(/ʧʰ/g, "ʰt͡ʃ")
str = str.replace(/bʳ/g, "bɹ")

str = str.replace(/ʦ/g, "t͡s")
str = str.replace(/ʧ/g, "t͡ʃ")
str = str.replace(/a/g, "ɑ")

str = str.replace(/˝˜/g, "̃́ː")

str = str.replace(/˜/g, "̃")
str = str.replace(/´/g, "́")
str = str.replace(/˝/g, "́ː")



return str.trim()

}







function toISO (str) {
str += ' '

str = str.replace(/,/g, ",")
str = str.replace(/«/g, "“")
str = str.replace(/»/g, "”")
str = str.replace(/Ա/g, "A")
str = str.replace(/Բ/g, "B")
str = str.replace(/Գ/g, "G")
str = str.replace(/Դ/g, "D")
str = str.replace(/Ե/g, "E")
str = str.replace(/Զ/g, "Z")
str = str.replace(/Է/g, "Ē")
str = str.replace(/Ը/g, "Ë")
str = str.replace(/Թ/g, "T’")
str = str.replace(/Ժ/g, "Ž")
str = str.replace(/Ի/g, "I")
str = str.replace(/Լ/g, "L")
str = str.replace(/Խ/g, "X")
str = str.replace(/Ծ/g, "Ts’")
str = str.replace(/Կ/g, "K")
str = str.replace(/Հ/g, "H")
str = str.replace(/Ձ/g, "Dz")
str = str.replace(/Ղ/g, "Ṙ")
str = str.replace(/Ճ/g, "Tš")
str = str.replace(/Մ/g, "M")
str = str.replace(/Յ/g, "J")
str = str.replace(/Ն/g, "N")
str = str.replace(/Շ/g, "Š")
str = str.replace(/Ո/g, "O")
str = str.replace(/Չ/g, "Tš’")
str = str.replace(/Պ/g, "P")
str = str.replace(/Ջ/g, "Dž")
str = str.replace(/Ռ/g, "R")
str = str.replace(/Ս/g, "S")
str = str.replace(/Վ/g, "V")
str = str.replace(/Տ/g, "T")
str = str.replace(/Ր/g, "R’")
str = str.replace(/Ց/g, "Ts’")
str = str.replace(/Ւ/g, "W")
str = str.replace(/Փ/g, "P’")
str = str.replace(/Ք/g, "K’")
str = str.replace(/Օ/g, "O")
str = str.replace(/Ֆ/g, "F")
str = str.replace(/՛/g, "!")
str = str.replace(/՜/g, "!")
str = str.replace(/՝/g, ";")
str = str.replace(/՞/g, "?")
str = str.replace(/ա/g, "a")
str = str.replace(/բ/g, "b")
str = str.replace(/գ/g, "g")
str = str.replace(/դ/g, "d")
str = str.replace(/ե/g, "e")
str = str.replace(/զ/g, "z")
str = str.replace(/է/g, "ē")
str = str.replace(/ը/g, "ë")
str = str.replace(/թ/g, "t’")
str = str.replace(/ժ/g, "ž")
str = str.replace(/ի/g, "i")
str = str.replace(/լ/g, "l")
str = str.replace(/խ/g, "x")
str = str.replace(/ծ/g, "ts")
str = str.replace(/կ/g, "k")
str = str.replace(/հ/g, "h")
str = str.replace(/ձ/g, "dz")
str = str.replace(/ղ/g, "ṙ")
str = str.replace(/ճ/g, "tš")
str = str.replace(/մ/g, "m")
str = str.replace(/յ/g, "j")
str = str.replace(/ն/g, "n")
str = str.replace(/շ/g, "š")
str = str.replace(/ո/g, "o")
str = str.replace(/չ/g, "tš’")
str = str.replace(/պ/g, "p")
str = str.replace(/ջ/g, "dž")
str = str.replace(/ռ/g, "r")
str = str.replace(/ս/g, "s")
str = str.replace(/վ/g, "v")
str = str.replace(/տ/g, "t")
str = str.replace(/ր/g, "r’")
str = str.replace(/ց/g, "ts’")
str = str.replace(/ւ/g, "w")
str = str.replace(/փ/g, "p’")
str = str.replace(/ք/g, "k’")
str = str.replace(/օ/g, "o")
str = str.replace(/ֆ/g, "f")
str = str.replace(/և/g, "ew")
str = str.replace(/։/g, ".")
str = str.replace(/֊/g, "-")
str = str.replace(/․/g, ":")
str = str.replace(/ﬓ/g, "mn")
str = str.replace(/ﬔ/g, "me")
str = str.replace(/ﬕ/g, "mi")
str = str.replace(/ﬖ/g, "vn")
str = str.replace(/ﬗ/g, "mx")

return str.trim()
}






function reverse (str) {
str += '  '

str = str.replace(/a/g, "ա")
str = str.replace(/ew/g, "և")
str = str.replace(/e/g, "ե")
str = str.replace(/ë/g, "ը")
str = str.replace(/ɛ/g, "է")
str = str.replace(/i/g, "ի")
str = str.replace(/ò/g, "օ")
str = str.replace(/o/g, "ո")

str = str.replace(/A/g, "Ա")
str = str.replace(/Ë/g, "Ը")
str = str.replace(/E/g, "Ե")
str = str.replace(/Ɛ/g, "Է")
str = str.replace(/I/g, "Ի")
str = str.replace(/O/g, "Ո")
str = str.replace(/Ò/g, "Օ")


str = str.replace(/b/g, "բ")
str = str.replace(/ç/g, "ծ")
str = str.replace(/č̣/g, "ճ")
str = str.replace(/č/g, "չ")
str = str.replace(/c’/g, "ց")
str = str.replace(/d/g, "դ")
str = str.replace(/f/g, "ֆ")
str = str.replace(/ġ/g, "ղ")
str = str.replace(/g/g, "գ")
str = str.replace(/h/g, "հ")
str = str.replace(/ǰ/g, "ջ")
str = str.replace(/j/g, "ձ")
str = str.replace(/k’/g, "ք")
str = str.replace(/k/g, "կ")
str = str.replace(/l/g, "լ")
str = str.replace(/m/g, "մ")
str = str.replace(/n/g, "ն")
str = str.replace(/p’/g, "փ")
str = str.replace(/p/g, "պ")
str = str.replace(/ṙ/g, "ռ")
str = str.replace(/r/g, "ր")
str = str.replace(/š/g, "շ")
str = str.replace(/s/g, "ս")
str = str.replace(/t’/g, "թ")
str = str.replace(/t/g, "տ")
str = str.replace(/v/g, "վ")
str = str.replace(/w/g, "ւ")
str = str.replace(/x/g, "խ")
str = str.replace(/y/g, "յ")
str = str.replace(/ž/g, "ժ")
str = str.replace(/z/g, "զ")

str = str.replace(/B/g, "Բ")
str = str.replace(/Ç/g, "Ծ")
str = str.replace(/Č̣/g, "Ճ")
str = str.replace(/Č/g, "Չ")
str = str.replace(/C’/g, "Ց")
str = str.replace(/D/g, "Դ")
str = str.replace(/F/g, "Ֆ")
str = str.replace(/Ġ/g, "Ղ")
str = str.replace(/G/g, "Գ")
str = str.replace(/H/g, "Հ")
str = str.replace(/ǰ/g, "Ջ")
str = str.replace(/J/g, "Ձ")
str = str.replace(/K’/g, "Ք")
str = str.replace(/K/g, "Կ")
str = str.replace(/L/g, "Լ")
str = str.replace(/M/g, "Մ")
str = str.replace(/N/g, "Ն")
str = str.replace(/P’/g, "Փ")
str = str.replace(/P/g, "Պ")
str = str.replace(/R/g, "Ր")
str = str.replace(/Ṙ/g, "Ռ")
str = str.replace(/S/g, "Ս")
str = str.replace(/Š/g, "Շ")
str = str.replace(/T’/g, "Թ")
str = str.replace(/T/g, "Տ")
str = str.replace(/V/g, "Վ")
str = str.replace(/W/g, "Ւ")
str = str.replace(/X/g, "Խ")
str = str.replace(/Y/g, "Յ")
str = str.replace(/Z/g, "Զ")
str = str.replace(/Ž/g, "Ժ")

str = str.replace(/;/g, "․")
str = str.replace(/:/g, "՝")
str = str.replace(/\./g, "։")
str = str.replace(/“/g, "«")
str = str.replace(/”/g, "»")
str = str.replace(/\?/g, "՞")
str = str.replace(/!/g, "՜")
str = str.replace(/!/g, "՛")


return str.trim()
}


