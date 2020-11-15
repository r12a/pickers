function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'transliterateASRunes') { return transliterateASRunes(str) }
	if (direction == 'toASF') { return toASF(str) }
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







function transliterateASRunes (str) {
	// transliterates Anglo-Saxon/Frisian runes into latin
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')

	str = str.replace(/ᚠ/g,'f') 
	str = str.replace(/ᚢ/g,'u') 
	str = str.replace(/ᚦ/g,'þ')
	str = str.replace(/ᚩ/g,'o') 
	str = str.replace(/ᚱ/g,'r') 
	str = str.replace(/ᚳ/g,'c') 
	str = str.replace(/ᚷ/g,'g') 
	str = str.replace(/ᚹ/g,'w') 
	str = str.replace(/ᚻ/g,'h') 
	str = str.replace(/ᚾ/g,'n') 
	str = str.replace(/ᛁ/g,'i') 
	str = str.replace(/ᛡ/g,'j') 
	str = str.replace(/ᛇ/g,'ɨ') 
	str = str.replace(/ᛈ/g,'p') 
	str = str.replace(/ᛉ/g,'x') 
	str = str.replace(/[ᛋ]/g,'s') 
	str = str.replace(/ᛏ/g,'t') 
	str = str.replace(/ᛒ/g,'b') 
	str = str.replace(/ᛖ/g,'e') 
	str = str.replace(/ᛗ/g,'m') 
	str = str.replace(/ᛚ/g,'l') 
	str = str.replace(/ᛝ/g,'ŋ') 
	str = str.replace(/ᛟ/g,'œ') 
	str = str.replace(/ᛞ/g,'d') 
	str = str.replace(/ᚪ/g,'a') 
	str = str.replace(/ᚫ/g,'æ') 
	str = str.replace(/ᚣ/g,'y') 
	str = str.replace(/ᛠ/g,'e͡a') 
	str = str.replace(/ᚸ/g,'g̈') 
	str = str.replace(/ᛣ/g,'k') 
	str = str.replace(/ᛤ/g,'k̈') 


	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.trim()

	return str
	}



function toASF (str) {
	// converts Latin transliterations into an Anglo-Saxon/Frisian runic transcription
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/f/g,'ᚠ') 
	str = str.replace(/u/g,'ᚢ') 
	str = str.replace(/þ/g,'ᚦ') 
	str = str.replace(/o/g,'ᚩ') 
	str = str.replace(/r/g,'ᚱ') 
	str = str.replace(/c/g,'ᚳ') 
	str = str.replace(/g/g,'ᚷ') 
	str = str.replace(/w/g,'ᚹ') 
	str = str.replace(/h/g,'ᚻ') 
	str = str.replace(/n/g,'ᚾ') 
	str = str.replace(/i/g,'ᛁ') 
	str = str.replace(/j/g,'ᛡ') 
	str = str.replace(/ɨ/g,'ᛇ') 
	str = str.replace(/p/g,'ᛈ') 
	str = str.replace(/x/g,'ᛉ') 
	str = str.replace(/s/g,'ᛋ') 
	str = str.replace(/t/g,'ᛏ') 
	str = str.replace(/b/g,'ᛒ') 
	str = str.replace(/e͡a/g,'ᛠ') 
	str = str.replace(/e/g,'ᛖ') 
	str = str.replace(/m/g,'ᛗ') 
	str = str.replace(/l/g,'ᛚ') 
	str = str.replace(/ŋ/g,'ᛝ') 
	str = str.replace(/d/g,'ᛞ') 
	str = str.replace(/œ/g,'ᛟ') 
	str = str.replace(/a/g,'ᚪ') 
	str = str.replace(/æ/g,'ᚫ') 
	str = str.replace(/y/g,'ᚣ') 
	str = str.replace(/g̈/g,'ᚸ') 
	str = str.replace(/k̈/g,'ᛤ') 
	str = str.replace(/k/g,'ᛣ') 
	str = str.replace(/᛬​/g,' ') 

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.trim()

	return str
	}

