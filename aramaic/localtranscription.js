function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toUN') { return transcribetoUN(str) }
	}





function transliterate (str) {
	// transcribes syriac text into a Latin transcription
	
    
    var punctuation = new Set([' ', '،', '؛', '.', '؟', '܀', '܁', '܂', '܃', '܄', '܅', '܆', '܇', '܈', '܉'])
    
	
	// add initial space so that beginning of word rules work
	str = ' '+str+' '

    // a-vowel or i-vowel + alaph at end of word
    str = str.replace(/\u0735\u0710([ ،؛.؟܀܁܂܃܄܅܆܇܈܉]+)/g, "â$1")
    str = str.replace(/\u0732\u0710([ ،؛.؟܀܁܂܃܄܅܆܇܈܉]+)/g, "ȃ$1")
    str = str.replace(/\u0738\u0710([ ،؛.؟܀܁܂܃܄܅܆܇܈܉]+)/g, "ȋ$1")


    // rukkakha
    str = str.replace(/ܒ݂/g, "ḇ")
    str = str.replace(/ܓ݂/g, "ḡ")
    str = str.replace(/ܕ݂/g, "ḏ")
    str = str.replace(/ܟ݂/g, "ḵ")
    str = str.replace(/ܦ݂/g, "p̄")
    str = str.replace(/ܬ݂/g, "ṯ")
    
    // maǧliyana
    str = str.replace(/ܓ̰/g, "ǧ")
    str = str.replace(/ܙ̃/g, "ž")
    str = str.replace(/ܙ̰/g, "ž")
    str = str.replace(/ܫ̰/g, "ẑ")
  

    // hbasa 
    str = str.replace(/ܝܼ/g, "î")
    str = str.replace(/ܘܼ/g, "û")
  
    // rwiha 
    str = str.replace(/ܘܿ/g, "ô")
  
    
    str = str.replace(/\u0710/g, "\u02BE")
    str = str.replace(/\u0712/g, "b")
    str = str.replace(/\u0713/g, "g")
    str = str.replace(/\u0715/g, "d")
    str = str.replace(/\u0717/g, "h")
    str = str.replace(/\u0718/g, "w")
    str = str.replace(/\u0719/g, "z")
    str = str.replace(/\u071A/g, "\u1E25")
    str = str.replace(/\u071B/g, "\u1E6D")
    str = str.replace(/\u071D/g, "y")
    str = str.replace(/\u071F/g, "k")
    str = str.replace(/\u0720/g, "l")
    str = str.replace(/\u0721/g, "m")
    str = str.replace(/\u0722/g, "n")
    str = str.replace(/\u0723/g, "s")
    str = str.replace(/\u0725/g, "\u02BF")
    str = str.replace(/\u0726/g, "p")
    str = str.replace(/\u0728/g, "\u1E63")
    str = str.replace(/\u0729/g, "q")
    str = str.replace(/\u072A/g, "r")
    str = str.replace(/\u072B/g, "\u0161")
    str = str.replace(/\u072C/g, "t")

    
    // dotted vowels
    str = str.replace(/\u0732/g, "a")
    str = str.replace(/\u0735/g, "\u0101")
    str = str.replace(/\u0738/g, "e")
    str = str.replace(/\u0739/g, "\u0113")
    str = str.replace(/\u073C/g, "i")
    str = str.replace(/\u073F/g, "o")
 
 
    // greek vowels
    str = str.replace(/\u0730/g, "\u0227")
    str = str.replace(/\u0731/g, "\u1EA1")
    str = str.replace(/\u0733/g, "\u00E5")
    str = str.replace(/\u0734/g, "\u1E01")
    str = str.replace(/\u0736/g, "\u0117")
    str = str.replace(/\u0737/g, "\u1EB9")
    str = str.replace(/\u073A/g, "\u00EF")
    str = str.replace(/\u073B/g, "\u1ECB")
    str = str.replace(/\u073D/g, "\u016F")
    str = str.replace(/\u073E/g, "\u1EE5")
    str = str.replace(/\u0651/g, "\u022F")
 
 
    // diacritics
    str = str.replace(/\u0308/g, "\u030B")
    str = str.replace(/\u0740/g, "ʺ")
 
 
    // punctuation
    str = str.replace(/\u060C/g, ",")
    str = str.replace(/\u061B/g, ";")
    str = str.replace(/\u061F/g, "?")
    str = str.replace(/\u0701/g, ".")
    str = str.replace(/\u0702/g, ".")
    str = str.replace(/\u0703/g, ":")
    str = str.replace(/\u0704/g, ":")
    str = str.replace(/\u0705/g, ":")
    str = str.replace(/\u0706/g, ":")
    str = str.replace(/\u0707/g, ":")
    str = str.replace(/\u0708/g, ";")
    str = str.replace(/\u0709/g, "?")
    str = str.replace(/\u070A/g, ".")



	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')


	return str.trim()
	}





function transcribetoISO (chstring) {
					

	}






function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



