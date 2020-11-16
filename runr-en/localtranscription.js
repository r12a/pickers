function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'translitPlus') { return translitPlus(str) }
	if (direction == 'toRunic') { return toRunic(str) }
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
	// transliterates Hobbit runes into Latin
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')

	str = transliterate(str)
	
	str = str.replace(/wyrm/g,'') 
	str = str.replace(/smᚪug/g,'') 
	str = str.replace(/þ⃞/g,'Thorin') 
	
	str = str.replace(/oᵒ/g,'oo') 
	str = str.replace(/eᵃ/g,'ea') 
	str = str.replace(/eᵉ/g,'ee') 
	str = str.replace(/eᵒ/g,'eo') 
	str = str.replace(/sᵗ/g,'st') 
	str = str.replace(/þ/g,'th') 
	str = str.replace(/ʃ/g,'sh') 
	str = str.replace(/ŋ/g,'ng')
	
	str = str.replace(/᛫/g,' ') 
	
	str = str.trim()

	return str
	}






function toRunic (str) {
	// transliterates Latin text into Hobbit runes
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/Wyrm/g,'ᚹᚣᚱᛗ') 
	str = str.replace(/Smaug/g,'ᛋᛗᚪᚢᚷ') 
	str = str.replace(/þ⃞/g,'Thorin') 
	
	str = str.replace(/oo/g,'oᵒ') 
	str = str.replace(/ea/g,'eᵃ') 
	str = str.replace(/ee/g,'eᵉ') 
	str = str.replace(/eo/g,'eᵒ') 
	str = str.replace(/st/g,'sᵗ') 
	str = str.replace(/th/g,'þ') 
	str = str.replace(/sh/g,'ʃ') 
	str = str.replace(/ng/g,'ŋ')

	str = str.replace(/v/g,'u')
	str = str.replace(/j/g,'i')

	
	str = transliterate(str)

	str = reverseTransliterate(str)
	
	
	str = str.replace(/ /g,'᛫')
	str = str.trim()

	return str
	}


