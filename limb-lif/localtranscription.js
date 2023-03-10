function localtranscribe (direction, str) {
	
	if (direction == 'toLOC') { return toLOC(str) }
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toSyllables') { return toSyllables(str) }
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







