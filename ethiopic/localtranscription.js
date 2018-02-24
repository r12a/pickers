function localtranscribe (direction, str) {
	
	if (direction == 'toLatin') { return toLatin(str) }
	if (direction == 'toEthi') { return toEthi(str) }
	}
		
		


function toLatin (str) {
	// transcribes ethiopic text into a transliteration
    // works on the main Ethiopic block only
    
        	
		
	// add initial space so that space-based rules work
	str = ' '+str+' '
	
	
	// handle syllables that have -oa rather than -wa
	//str = str.replace('ḳwa','ḳao')
	//str = str.replace('ḫwa','ḫao')
	//str = str.replace('kwa','kao')
	//str = str.replace('wwa','wao')
	//str = str.replace('ywa','yao')
	//str = str.replace('gwa','gao')
	//str = str.replace('ṣ́wa','ṣ́ao')
	
str = str.replace(/ሀ/g, "hä")
str = str.replace(/ሁ/g, "hu")
str = str.replace(/ሂ/g, "hi")
str = str.replace(/ሃ/g, "ha")
str = str.replace(/ሄ/g, "he")
str = str.replace(/ህ/g, "hə")
str = str.replace(/ሆ/g, "ho")
str = str.replace(/ሇ/g, "hoa")
str = str.replace(/ለ/g, "lä")
str = str.replace(/ሉ/g, "lu")
str = str.replace(/ሊ/g, "li")
str = str.replace(/ላ/g, "la")
str = str.replace(/ሌ/g, "le")
str = str.replace(/ል/g, "lə")
str = str.replace(/ሎ/g, "lo")
str = str.replace(/ሏ/g, "lwa")
str = str.replace(/ⶀ/g, "loa")
str = str.replace(/ሐ/g, "ḥä")
str = str.replace(/ሑ/g, "ḥu")
str = str.replace(/ሒ/g, "ḥi")
str = str.replace(/ሓ/g, "ḥa")
str = str.replace(/ሔ/g, "ḥe")
str = str.replace(/ሕ/g, "ḥə")
str = str.replace(/ሖ/g, "ḥo")
str = str.replace(/ሗ/g, "ḥwa")
str = str.replace(/መ/g, "mä")
str = str.replace(/ሙ/g, "mu")
str = str.replace(/ሚ/g, "mi")
str = str.replace(/ማ/g, "ma")
str = str.replace(/ሜ/g, "me")
str = str.replace(/ም/g, "mə")
str = str.replace(/ሞ/g, "mo")
str = str.replace(/ሟ/g, "mwa")
str = str.replace(/ⶁ/g, "moa")
str = str.replace(/ፙ/g, "mya")
str = str.replace(/ᎀ/g, "mʷä")
str = str.replace(/ᎁ/g, "mʷi")
str = str.replace(/ᎂ/g, "mʷe")
str = str.replace(/ᎃ/g, "mʷə")
str = str.replace(/ሠ/g, "śä")
str = str.replace(/ሡ/g, "śu")
str = str.replace(/ሢ/g, "śi")
str = str.replace(/ሣ/g, "śa")
str = str.replace(/ሤ/g, "śe")
str = str.replace(/ሥ/g, "śə")
str = str.replace(/ሦ/g, "śo")
str = str.replace(/ሧ/g, "śwa")
str = str.replace(/ረ/g, "rä")
str = str.replace(/ሩ/g, "ru")
str = str.replace(/ሪ/g, "ri")
str = str.replace(/ራ/g, "ra")
str = str.replace(/ሬ/g, "re")
str = str.replace(/ር/g, "rə")
str = str.replace(/ሮ/g, "ro")
str = str.replace(/ሯ/g, "rwa")
str = str.replace(/ⶂ/g, "roa")
str = str.replace(/ፘ/g, "rya")
str = str.replace(/ሰ/g, "sä")
str = str.replace(/ሱ/g, "su")
str = str.replace(/ሲ/g, "si")
str = str.replace(/ሳ/g, "sa")
str = str.replace(/ሴ/g, "se")
str = str.replace(/ስ/g, "sə")
str = str.replace(/ሶ/g, "so")
str = str.replace(/ሷ/g, "swa")
str = str.replace(/ⶃ/g, "soa")
str = str.replace(/ሸ/g, "šä")
str = str.replace(/ሹ/g, "šu")
str = str.replace(/ሺ/g, "ši")
str = str.replace(/ሻ/g, "ša")
str = str.replace(/ሼ/g, "še")
str = str.replace(/ሽ/g, "šə")
str = str.replace(/ሾ/g, "šo")
str = str.replace(/ሿ/g, "šwa")
str = str.replace(/ⶄ/g, "šoa")

str = str.replace(/ቀ/g, "ḳä")
str = str.replace(/ቁ/g, "ḳu")
str = str.replace(/ቂ/g, "ḳi")
str = str.replace(/ቃ/g, "ḳa")
str = str.replace(/ቄ/g, "ḳe")
str = str.replace(/ቅ/g, "ḳə")
str = str.replace(/ቆ/g, "ḳo")
str = str.replace(/ቇ/g, "ḳoa")
str = str.replace(/ቈ/g, "ḳʷä")
str = str.replace(/ቊ/g, "ḳʷi")
str = str.replace(/ቋ/g, "ḳʷa")
str = str.replace(/ቌ/g, "ḳʷe")
str = str.replace(/ቍ/g, "ḳʷə")
str = str.replace(/ቐ/g, "ḳʰä")
str = str.replace(/ቑ/g, "ḳʰu")
str = str.replace(/ቒ/g, "ḳʰi")
str = str.replace(/ቓ/g, "ḳʰa")
str = str.replace(/ቔ/g, "ḳʰe")
str = str.replace(/ቕ/g, "ḳʰə")
str = str.replace(/ቖ/g, "ḳʰo")
str = str.replace(/ቘ/g, "ḳʰʷä")
str = str.replace(/ቚ/g, "ḳʰʷi")
str = str.replace(/ቛ/g, "ḳʰʷa")
str = str.replace(/ቜ/g, "ḳʰʷe")
str = str.replace(/ቝ/g, "ḳʰʷə")

str = str.replace(/በ/g, "bä")
str = str.replace(/ቡ/g, "bu")
str = str.replace(/ቢ/g, "bi")
str = str.replace(/ባ/g, "ba")
str = str.replace(/ቤ/g, "be")
str = str.replace(/ብ/g, "bə")
str = str.replace(/ቦ/g, "bo")
str = str.replace(/ቧ/g, "bwa")
str = str.replace(/ⶅ/g, "boa")
str = str.replace(/ᎄ/g, "bʷä")
str = str.replace(/ᎅ/g, "bʷi")
str = str.replace(/ᎆ/g, "bʷe")
str = str.replace(/ᎇ/g, "bʷə")
str = str.replace(/ቨ/g, "vä")
str = str.replace(/ቩ/g, "vu")
str = str.replace(/ቪ/g, "vi")
str = str.replace(/ቫ/g, "va")
str = str.replace(/ቬ/g, "ve")
str = str.replace(/ቭ/g, "və")
str = str.replace(/ቮ/g, "vo")
str = str.replace(/ቯ/g, "vwa")
str = str.replace(/ተ/g, "tä")
str = str.replace(/ቱ/g, "tu")
str = str.replace(/ቲ/g, "ti")
str = str.replace(/ታ/g, "ta")
str = str.replace(/ቴ/g, "te")
str = str.replace(/ት/g, "tə")
str = str.replace(/ቶ/g, "to")
str = str.replace(/ቷ/g, "twa")
str = str.replace(/ⶆ/g, "toa")
str = str.replace(/ቸ/g, "čä")
str = str.replace(/ቹ/g, "ču")
str = str.replace(/ቺ/g, "či")
str = str.replace(/ቻ/g, "ča")
str = str.replace(/ቼ/g, "če")
str = str.replace(/ች/g, "čə")
str = str.replace(/ቾ/g, "čo")
str = str.replace(/ቿ/g, "čwa")
str = str.replace(/ⶇ/g, "čoa")

str = str.replace(/ኀ/g, "ḫä")
str = str.replace(/ኁ/g, "ḫu")
str = str.replace(/ኂ/g, "ḫi")
str = str.replace(/ኃ/g, "ḫa")
str = str.replace(/ኄ/g, "ḫe")
str = str.replace(/ኅ/g, "ḫə")
str = str.replace(/ኆ/g, "ḫo")
str = str.replace(/ኇ/g, "ḫoa")
str = str.replace(/ኈ/g, "ḫʷä")
str = str.replace(/ኊ/g, "ḫʷi")
str = str.replace(/ኋ/g, "ḫʷa")
str = str.replace(/ኌ/g, "ḫʷe")
str = str.replace(/ኍ/g, "ḫʷə")
str = str.replace(/ነ/g, "nä")
str = str.replace(/ኑ/g, "nu")
str = str.replace(/ኒ/g, "ni")
str = str.replace(/ና/g, "na")
str = str.replace(/ኔ/g, "ne")
str = str.replace(/ን/g, "nə")
str = str.replace(/ኖ/g, "no")
str = str.replace(/ኗ/g, "nwa")
str = str.replace(/ⶈ/g, "noa")
str = str.replace(/ኘ/g, "ñä")
str = str.replace(/ኙ/g, "ñu")
str = str.replace(/ኚ/g, "ñi")
str = str.replace(/ኛ/g, "ña")
str = str.replace(/ኜ/g, "ñe")
str = str.replace(/ኝ/g, "ñə")
str = str.replace(/ኞ/g, "ño")
str = str.replace(/ኟ/g, "ñwa")
str = str.replace(/ⶉ/g, "ñoa")
str = str.replace(/አ/g, "ʾä")
str = str.replace(/ኡ/g, "ʾu")
str = str.replace(/ኢ/g, "ʾi")
str = str.replace(/ኣ/g, "ʾa")
str = str.replace(/ኤ/g, "ʾe")
str = str.replace(/እ/g, "ʾə")
str = str.replace(/ኦ/g, "ʾo")
str = str.replace(/ኧ/g, "ʾwa")
str = str.replace(/ⶊ/g, "ʾoa")
str = str.replace(/ከ/g, "kä")
str = str.replace(/ኩ/g, "ku")
str = str.replace(/ኪ/g, "ki")
str = str.replace(/ካ/g, "ka")
str = str.replace(/ኬ/g, "ke")
str = str.replace(/ክ/g, "kə")
str = str.replace(/ኮ/g, "ko")
str = str.replace(/ኯ/g, "koa")
str = str.replace(/ኰ/g, "kʷä")
str = str.replace(/ኲ/g, "kʷi")
str = str.replace(/ኳ/g, "kʷa")
str = str.replace(/ኴ/g, "kʷe")
str = str.replace(/ኵ/g, "kʷə")

str = str.replace(/ኸ/g, "xä")
str = str.replace(/ኹ/g, "xu")
str = str.replace(/ኺ/g, "xi")
str = str.replace(/ኻ/g, "xa")
str = str.replace(/ኼ/g, "xe")
str = str.replace(/ኽ/g, "xə")
str = str.replace(/ኾ/g, "xo")
str = str.replace(/ዀ/g, "xʷä")
str = str.replace(/ዂ/g, "xʷi")
str = str.replace(/ዃ/g, "xʷa")
str = str.replace(/ዄ/g, "xʷe")
str = str.replace(/ዅ/g, "xʷə")

str = str.replace(/ወ/g, "wä")
str = str.replace(/ዉ/g, "wu")
str = str.replace(/ዊ/g, "wi")
str = str.replace(/ዋ/g, "wa")
str = str.replace(/ዌ/g, "we")
str = str.replace(/ው/g, "wə")
str = str.replace(/ዎ/g, "wo")
str = str.replace(/ዏ/g, "woa")
str = str.replace(/ዐ/g, "ʿä")
str = str.replace(/ዑ/g, "ʿu")
str = str.replace(/ዒ/g, "ʿi")
str = str.replace(/ዓ/g, "ʿa")
str = str.replace(/ዔ/g, "ʿe")
str = str.replace(/ዕ/g, "ʿə")
str = str.replace(/ዖ/g, "ʿo")
str = str.replace(/ዘ/g, "zä")
str = str.replace(/ዙ/g, "zu")
str = str.replace(/ዚ/g, "zi")
str = str.replace(/ዛ/g, "za")
str = str.replace(/ዜ/g, "ze")
str = str.replace(/ዝ/g, "zə")
str = str.replace(/ዞ/g, "zo")
str = str.replace(/ዟ/g, "zwa")
str = str.replace(/ዠ/g, "žä")
str = str.replace(/ዡ/g, "žu")
str = str.replace(/ዢ/g, "ži")
str = str.replace(/ዣ/g, "ža")
str = str.replace(/ዤ/g, "že")
str = str.replace(/ዥ/g, "žə")
str = str.replace(/ዦ/g, "žo")
str = str.replace(/ዧ/g, "žwa")
str = str.replace(/ⶋ/g, "žoa")

str = str.replace(/የ/g, "yä")
str = str.replace(/ዩ/g, "yu")
str = str.replace(/ዪ/g, "yi")
str = str.replace(/ያ/g, "ya")
str = str.replace(/ዬ/g, "ye")
str = str.replace(/ይ/g, "yə")
str = str.replace(/ዮ/g, "yo")
str = str.replace(/ዯ/g, "yoa")
str = str.replace(/ደ/g, "dä")
str = str.replace(/ዱ/g, "du")
str = str.replace(/ዲ/g, "di")
str = str.replace(/ዳ/g, "da")
str = str.replace(/ዴ/g, "de")
str = str.replace(/ድ/g, "də")
str = str.replace(/ዶ/g, "do")
str = str.replace(/ዷ/g, "dwa")
str = str.replace(/ⶌ/g, "doa")

str = str.replace(/ዿ/g, "wa")
str = str.replace(/ⶍ/g, "oa")

str = str.replace(/ጀ/g, "ǧä")
str = str.replace(/ጁ/g, "ǧu")
str = str.replace(/ጂ/g, "ǧi")
str = str.replace(/ጃ/g, "ǧa")
str = str.replace(/ጄ/g, "ǧe")
str = str.replace(/ጅ/g, "ǧə")
str = str.replace(/ጆ/g, "ǧo")
str = str.replace(/ጇ/g, "ǧwa")
str = str.replace(/ⶎ/g, "ǧoa")
str = str.replace(/ገ/g, "gä")
str = str.replace(/ጉ/g, "gu")
str = str.replace(/ጊ/g, "gi")
str = str.replace(/ጋ/g, "ga")
str = str.replace(/ጌ/g, "ge")
str = str.replace(/ግ/g, "gə")
str = str.replace(/ጎ/g, "go")
str = str.replace(/ጏ/g, "goa")
str = str.replace(/ጐ/g, "gʷä")
str = str.replace(/ጒ/g, "gʷu")
str = str.replace(/ጓ/g, "gʷa")
str = str.replace(/ጔ/g, "gʷe")
str = str.replace(/ጕ/g, "gʷə")

str = str.replace(/ጘ/g, "ŋä")
str = str.replace(/ጙ/g, "ŋu")
str = str.replace(/ጚ/g, "ŋi")
str = str.replace(/ጛ/g, "ŋa")
str = str.replace(/ጜ/g, "ŋe")
str = str.replace(/ጝ/g, "ŋə")
str = str.replace(/ጞ/g, "ŋo")
str = str.replace(/ጟ/g, "ŋwa")
str = str.replace(/ⶓ/g, "ŋʷä")
str = str.replace(/ⶔ/g, "ŋʷi")
str = str.replace(/ⶕ/g, "ŋʷe")
str = str.replace(/ⶖ/g, "ŋʷə")
str = str.replace(/ጠ/g, "ṭä")
str = str.replace(/ጡ/g, "ṭu")
str = str.replace(/ጢ/g, "ṭi")
str = str.replace(/ጣ/g, "ṭa")
str = str.replace(/ጤ/g, "ṭe")
str = str.replace(/ጥ/g, "ṭə")
str = str.replace(/ጦ/g, "ṭo")
str = str.replace(/ጧ/g, "ṭwa")
str = str.replace(/ⶏ/g, "ṭoa")
str = str.replace(/ጨ/g, "č̣ä")
str = str.replace(/ጩ/g, "č̣u")
str = str.replace(/ጪ/g, "č̣i")
str = str.replace(/ጫ/g, "č̣a")
str = str.replace(/ጬ/g, "č̣e")
str = str.replace(/ጭ/g, "č̣ə")
str = str.replace(/ጮ/g, "č̣o")
str = str.replace(/ጯ/g, "č̣wa")
str = str.replace(/ⶐ/g, "č̣oa")

str = str.replace(/ጰ/g, "p̣ä")
str = str.replace(/ጱ/g, "p̣u")
str = str.replace(/ጲ/g, "p̣i")
str = str.replace(/ጳ/g, "p̣a")
str = str.replace(/ጴ/g, "p̣e")
str = str.replace(/ጵ/g, "p̣ə")
str = str.replace(/ጶ/g, "p̣o")
str = str.replace(/ጷ/g, "p̣wa")
str = str.replace(/ⶑ/g, "p̣oa")
str = str.replace(/ጸ/g, "ṣä")
str = str.replace(/ጹ/g, "ṣu")
str = str.replace(/ጺ/g, "ṣi")
str = str.replace(/ጻ/g, "ṣa")
str = str.replace(/ጼ/g, "ṣe")
str = str.replace(/ጽ/g, "ṣə")
str = str.replace(/ጾ/g, "ṣo")
str = str.replace(/ጿ/g, "ṣwa")

str = str.replace(/ፀ/g, "ṣ́ä")
str = str.replace(/ፁ/g, "ṣ́u")
str = str.replace(/ፂ/g, "ṣ́i")
str = str.replace(/ፃ/g, "ṣ́a")
str = str.replace(/ፄ/g, "ṣ́e")
str = str.replace(/ፅ/g, "ṣ́ə")
str = str.replace(/ፆ/g, "ṣ́o")
str = str.replace(/ፇ/g, "ṣ́oa")
str = str.replace(/ፈ/g, "fä")
str = str.replace(/ፉ/g, "fu")
str = str.replace(/ፊ/g, "fi")
str = str.replace(/ፋ/g, "fa")
str = str.replace(/ፌ/g, "fe")
str = str.replace(/ፍ/g, "fə")
str = str.replace(/ፎ/g, "fo")
str = str.replace(/ፏ/g, "fwa")
str = str.replace(/ፚ/g, "fya")
str = str.replace(/ᎈ/g, "fʷä")
str = str.replace(/ᎉ/g, "fʷi")
str = str.replace(/ᎊ/g, "fʷe")
str = str.replace(/ᎋ/g, "fʷə")
str = str.replace(/ፐ/g, "pä")
str = str.replace(/ፑ/g, "pu")
str = str.replace(/ፒ/g, "pi")
str = str.replace(/ፓ/g, "pa")
str = str.replace(/ፔ/g, "pe")
str = str.replace(/ፕ/g, "pə")
str = str.replace(/ፖ/g, "po")
str = str.replace(/ፗ/g, "pwa")
str = str.replace(/ⶒ/g, "poa")
str = str.replace(/ᎌ/g, "pʷä")
str = str.replace(/ᎍ/g, "pʷi")
str = str.replace(/ᎎ/g, "pʷe")
str = str.replace(/ᎏ/g, "pʷə")

	
	// punctuation
	str = str.replace(/፡/g,' ') // wordspace 
	str = str.replace(/።/g,'. ') // wordspace 
	str = str.replace(/፣/g,', ') // wordspace 
	str = str.replace(/፤/g,'; ') // wordspace 
	str = str.replace(/፥/g,': ') // wordspace 
	str = str.replace(/፦/g,': ') // wordspace 
	str = str.replace(/፧/g,'? ') // wordspace 
	str = str.replace(/፨/g,'–—') // wordspace 


    // numbers
	str = str.replace(/፩/g,'1') 
	str = str.replace(/፪/g,'2') 
	str = str.replace(/፫/g,'3') 
	str = str.replace(/፬/g,'4') 
	str = str.replace(/፭/g,'5') 
	str = str.replace(/፮/g,'6')
	str = str.replace(/፯/g,'7')
	str = str.replace(/፰/g,'8')
	str = str.replace(/፱/g,'9')
	str = str.replace(/۰/g,'0')
	
	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')


	return str.trim()
	}
		
		


function OLDtoLatin (str) {
	// transcribes ethiopic text into a transliteration
    // works on the main Ethiopic block only
    
    
    var consonants = 
    ['h','l','ḥ','m','ś','r','s','š','ḳ','ḳʷ','ḳʰ','ḳʰʷ','b','v', 't','č','ḫ','ḫʷ','n','ñ','ʾ','k', 'kʷ','x','xʷ','w', 'ʿ','z','ž','y','d','d?','ǧ','g','gʷ','ŋ','ṭ','č̣',
    'p̣','ṣ','ṣ́','f','p']
    var vowels = 
    ['ä','u','i','a','e','ə','o','wa']
    
    var chars = [...str]
    //console.log(chars)
    for (let i=0;i<chars.length;i++) {
        var dec = chars[i].codePointAt(0)
        if (dec > 4607 && dec < 4952) {
            consonant = Math.floor((dec-4608)/8)
            //console.log(dec, consonant)
            vowel = dec % 8
            //console.log(consonants[consonant], vowels[vowel])
            chars[i] = consonants[consonant]+vowels[vowel]
        }
    }
	
    str = chars.join('')
		
	// add initial space so that space-based rules work
	str = ' '+str+' '
	
	// collect a list of punctuation, in order
	var punctuationSet = /!|\(|\)|\-|\.|:|\[|\]|\*|\/|\\|،|؟|«|»|‹|›| /g
	var punctuationList = str.match(punctuationSet)
	str = str.replace(punctuationSet,' ')
	
	// handle syllables that have -oa rather than -wa
	str = str.replace('ḳwa','ḳao')
	str = str.replace('ḫwa','ḫao')
	str = str.replace('kwa','kao')
	str = str.replace('wwa','wao')
	str = str.replace('ywa','yao')
	str = str.replace('gwa','gao')
	str = str.replace('ṣ́wa','ṣ́ao')
	
	str = str.replace(/ፘ/g,'ryä') 
	str = str.replace(/ፙ/g,'myä') 
	str = str.replace(/ፚ/g,'fyä') 
	
	// punctuation
	str = str.replace(/፡/g,' ') // wordspace 
	str = str.replace(/።/g,'. ') // wordspace 
	str = str.replace(/፣/g,', ') // wordspace 
	str = str.replace(/፤/g,'; ') // wordspace 
	str = str.replace(/፥/g,': ') // wordspace 
	str = str.replace(/፦/g,': ') // wordspace 
	str = str.replace(/፧/g,'? ') // wordspace 
	str = str.replace(/፨/g,'–—') // wordspace 


    // numbers
	str = str.replace(/፩/g,'1') 
	str = str.replace(/፪/g,'2') 
	str = str.replace(/፫/g,'3') 
	str = str.replace(/፬/g,'4') 
	str = str.replace(/፭/g,'5') 
	str = str.replace(/፮/g,'6')
	str = str.replace(/፯/g,'7')
	str = str.replace(/፰/g,'8')
	str = str.replace(/፱/g,'9')
	str = str.replace(/۰/g,'0')
	
	
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	//str = str.replace(/¶/g,'')


	return str.trim()
	}


function toDeva (str) {
	str += '  '
	var consonants = 'kgṉcjñṭḍtdnṇpqbmyrvśṣshlXṛṚṟẏḷḻfzɠʄɗɓġ'
	var aspiratedconsonants = 'kgcjṭḍtdpbṛ'
	var vowels = 'aāiīuūeēoōɛʊȓřɫḹ'
	var highvowels = 'īɛoōuॕeēoōʊ'
	var nasals = 'ṉñnmṅ'
	
	var out=''
	str = ' '+str
	str = str.replace(/ã/g,'a\u0303')
	str = str.replace(/ĩ/g,'i\u0303')
	str = str.replace(/ũ/g,'u\u0303')
	str = str.replace(/ẽ/g,'e\u0303')
	str = str.replace(/õ/g,'o\u0303')
	str = str.replace(/aĩ/g,'ai\u0303')
	str = str.replace(/aũ/g,'au\u0303')
	str = str.replace(/ai/g,'ɛ')
	str = str.replace(/au/g,'ʊ')
	str = str.replace(/k͟h/g,'X')
	str = str.replace(/r̥̄/g,'ř')
	str = str.replace(/r̥/g,'ȓ')
	str = str.replace(/l̥̄/g,'ḹ')
	str = str.replace(/l̥/g,'ɫ')
	
	for (var i=1; i<str.length-2; i++) {
		var ch = str.charAt(i)
		var conjunct = false
		var skipOne = false
		
		// conjuncts
		//if (consonants.indexOf(ch) > -1 && consonants.indexOf(str.charAt(i+1)) > -1  && str.charAt(i+1) != 'h') { conjunct = true }
		if (inSet(consonants, ch) && inSet(consonants, str.charAt(i+1)) && str.charAt(i+1) != 'h') { conjunct = true }
		if (inSet(consonants, ch) && str.charAt(i+1) == ':') { conjunct = true }
		
		// aspirated consonants
		if (aspiratedconsonants.indexOf(ch) > -1 && str.charAt(i+1) == 'h') { 
			ch = ch.toUpperCase() 
			skipOne = true
			}
		
		// upper case vowel signs, lowercase independent vowels
		if (inSet(vowels, ch) && inSet(consonants, str.charAt(i-1)) ) { 
			ch = ch.toUpperCase()
			}
		
		// candrabindu vs anusvara
		if (str.charAt(i) == '\u0303' && highvowels.indexOf(str.charAt(i-1)) > -1) {
			ch = '\u0902'
			}
		else if (str.charAt(i) == '\u0303') { ch = '\u0901' }
		
		// anusvara before conjunct
		if (nasals.indexOf(ch) > -1 && consonants.indexOf(str.charAt(i-1)) == -1 && consonants.indexOf(str.charAt(i+1)) > -1 ) {
			switch (ch) {
				case 'ṅ': ch = 'ङ\u094D'; break
				case 'ñ': ch = 'ञ\u094D'; break
				case 'ṇ': ch = 'ण\u094D'; break
				case 'n': ch = 'न\u094D'; break
				case 'm': ch = 'म\u094D'; break
				}
			ch = '<span class=alts><span class=altfirst>&nbsp;\u0902</span><span class=altlast>'+ch+'</span></span>'
			conjunct = false
			}
		
		if (typeof mapToDeva[ch] != 'undefined') { out += mapToDeva[ch] }
		else { out += ch }
		if (conjunct) { out += '\u094D' }
		if (skipOne) { i++ }
		}

	return out.trim()
	}


var mapToDeva = {
'k': '\u0915', 
'K': '\u0916', 
'g': '\u0917', 
'G': '\u0918', 
'ṅ': '\u0919', 
'q': '\u0915\u093C', 
'X': '\u0916\u093C', 
'c': '\u091A', 
'C': '\u091B', 
'j': '\u091C', 
'J': '\u091D', 
'ñ': '\u091E', 
'ġ': '\u0917\u093C', 
'ṉ': '\u0929', 
'ṭ': '\u091F', 
'Ṭ': '\u0920', 
'ḍ': '\u0921', 
'Ḍ': '\u0922', 
'ṇ': '\u0923', 
'ṛ': '\u0921\u093C', 
'Ṛ': '\u0922\u093C', 
't': '\u0924', 
'T': '\u0925', 
'd': '\u0926', 
'D': '\u0927', 
'n': '\u0928', 
'ṟ': '\u0931', 
'ẏ': '\u092F\u093C', 
'p': '\u092A', 
'P': '\u092B', 
'b': '\u092C', 
'B': '\u092D', 
'm': '\u092E', 
'ḷ': '\u0933', 
'ḻ': '\u0934', 
'y': '\u092F', 
'r': '\u0930', 
'l': '\u0932', 
'v': '\u0935', 
'f': '\u092B\u093C', 
'z': '\u091C\u093C', 
'ś': '\u0936', 
'ṣ': '\u0937', 
's': '\u0938', 
'h': '\u0939', 
'?': '\u0979', '?': '\u097A', 
'ɠ': '\u097B', 
'ʄ': '\u097C', 
'ɗ': '\u097E', 
'ɓ': '\u097F',


'A': '',
'Ā': '\u093E',
'I': '\u093F',
'Ī': '\u0940',
'U': '\u0941',
'Ū': '\u0942',
'?': '\u0956',
'?': '\u0957',
'Ȓ': '\u0943',
'Ř': '\u0944',
'Ɫ': '\u0962',
'Ḹ': '\u0963',
'ê': '\u0945',
'E': '\u0946',
'Ē': '\u0947',
'Ɛ': '\u0948',
'Ô': '\u0949',
'O': '\u094A',
'Ō': '\u094B',
'Ʊ': '\u094C',
'?': '\u094F',
'?': '\u093A',
'?': '\u093B',
'?': '\u094E',



// independent vowels
'x': 'ऄ',
'a': 'अ', 
'ā': 'आ', 
'i': 'इ', 
'ī': 'ई', 
'u': 'उ', 
'ū': 'ऊ', 
'?': 'ॶ', '?': 'ॷ', 
'ȓ': 'ऋ', 
'ř': 'ॠ', 
'ɫ': 'ऌ', 
'ḹ': 'ॡ', 
'â': 'ॲ', 
'ê': 'ऍ', 
'e': 'ऎ', 
'ē': 'ए', 
'ɛ': 'ऐ', 
'x': 'ऑ', 
'o': 'ऒ', 
'ō': 'ओ', 
'ô': 'ऑ', 
'ʊ': 'औ', 
'?': 'ॵ', '?': 'ॳ', '?': 'ॴ',

//virama
'\u094D':'',

// candrabindu
'\u0303': '\u0901',

// punctuation
'.': ' ।',
'\'': '\u093D',
'ḥ': '\u0903',
':': '',

// numbers
'0': '०',
'1': '१', 
'2': '२', 
'3': '३', 
'4': '४', 
'5': '५', 
'6': '६', 
'7': '७', 
'8': '८', 
'9': '९' 

}
