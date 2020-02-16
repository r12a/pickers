function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return romajiToHan(str) }
	if (direction == 'romajiToHan') { return romajiToHan(str) }
	if (direction == 'englishToHan') { return englishToHan(str) }
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









function romajiToHan (str) {
	// search the kanji list for characters with a reading that matches the romaji input
	
	out = ''
	
	for (romaji in han) {
		sound = ' '+han[romaji].jk+' '+han[romaji].jo+' '
		sound = sound.toLowerCase()
		if (sound.includes(' '+str+' ')) out += romaji
		}
	
	if (out === '') out = 'none'
	
	return out.trim()
	}







function englishToHan (str) {
	// search the han list for characters with a definition that matches the english input
	
	out = ''

	for (term in han) {
		if (han[term].def) {
			definition = ' '+han[term].def+' '
			definition = definition.replace(/;/g,' ').replace(/,/g,' ')
			if (definition.includes(' '+str+' ')) out += term+' ('+han[term].def+') '
			}
		}
	
	if (out === '') out = 'none'
	
	return out.trim()
	}
