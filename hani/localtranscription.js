function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return pinyinToHan(str) }
	if (direction == 'pinyinToHan') { return pinyinToHan(str) }
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









function pinyinToHan (str) {
	// search the han list for characters with a reading that matches the pinyin input
	
	out = ''
	
	for (pinyin in han) {
		sound = ' '+han[pinyin].m+' '
		if (sound.includes(' '+str+' ')) out += pinyin
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
