function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return romajiToHan(str) }
	if (direction == 'romajiToHan') { return romajiToHan(str) }
	if (direction == 'englishToHan') { return englishToHan(str) }
	if (direction == 'lookupHan') { return lookupHan(str) }
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







function lookupHanX (str) {
	// search the han list for a character and provide the information available
	
	out = ''

    if (str.length > 1) {
        alert('Look up one character at a time.')
        return
        }

    if (han[str]) {
        out += str+' '
        if (han[str].def) out += ' '+han[str].def
        if (han[str].jo) out += ' — '+han[str].jo
        if (han[str].jk) out += ' — <i>'+han[str].jk+'</i>'
        }
    
    else out += 'Character not found.'

	
	return out.trim()
	}







function lookupHan (str) {
	// search the han list for a character and provide the information available
	
	out = ''
    chars = [...str]

    for (i=0;i<chars.length;i++) {
        if (han[chars[i]]) {
            out += chars[i]+' '
            if (han[chars[i]].def) out += ' '+han[chars[i]].def
            if (han[chars[i]].jo) out += ' — '+han[chars[i]].jo
            if (han[chars[i]].jk) out += ' — <i>'+han[chars[i]].jk+'</i>'
            }

        else if (spreadsheetRows[chars[i]]) {
            out += chars[i]
            if (spreadsheetRows[chars[i]][cols.ipaLoc]) out += ' ['+spreadsheetRows[chars[i]][cols.ipaLoc]+']'
            if (spreadsheetRows[chars[i]][cols.typeLoc]) out += ', '+spreadsheetRows[chars[i]][cols.typeLoc]
            out += ', '+spreadsheetRows[chars[i]][cols.ucsName]
            }
        
        else out += chars[i]+' Character not found.'
        
        if (i<chars.length) out += '<br>'
        }

	
	return out.trim()
	}




