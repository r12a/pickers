var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Osage WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'osa' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Osage WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'osagePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Osage WF" ]


var template = {}
	template.title = 'Osage character app'
	template.sample = "𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓷𐓣͘ 𐓘𐓵𐓟 𐓘𐓬𐓘—𐓤𐓘𐓸𐓘 𐓤𐓯𐓣 𐓘𐓵𐓟 𐓘𐓬𐓘, 𐓪𐓬𐓸𐓘. 𐓏𐓟𐓲’𐓘 𐓷𐓣͘ 𐓣𐓵𐓘𐓬𐓟. 𐓏𐓘𐓲’𐓘 𐓘𐓤𐓸𐓘 “𐒼𐓪𐓰𐓘𐓡𐓘 𐓨𐓘𐓵𐓣͘,” 𐓘𐓤𐓸𐓘. 𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓘𐓬𐓘, “𐓍𐓣𐓟 𐓵𐓣𐓟 𐓤𐓪𐓰𐓘𐓡𐓘 𐓨𐓘𐓵𐓣͘ 𐓷𐓣𐓩𐓘͘𐓮𐓰𐓘 𐓰𐓛͘ 𐓨𐓣͘𐓤𐓯𐓟,” 𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓘𐓪𐓘 𐓟𐓤𐓣𐓟 𐓘𐓬𐓘."
	template.sampleSource = ''
	template.blocklocation= 'osge'  // block directory
	template.noteslocation = 'osge/osa' // location of script notes
	template.vocablocation = 'osge/osa_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'osge'
	template.scriptcode = 'Osge'
	template.fontLocale = 'osge'
	template.hints = true
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '͘'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Osage text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Osage to IPA", "alt":"Convert Osage text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },
]



var inputAids = [
//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Osage from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Osage.", 
"desc":"Use an IPA keyboard mapping to type Osage from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Osage.", 
"desc":"Use a  mapping from Latin to type Osage from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to an Osage keyboard.", 
"desc":"Use an Osage keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},


{"id":"showLatinTransSwitch", "title":"Type-assist: Latin characters needed for transcriptions", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"L", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},

{"id":"togglePalette", "title":"Show/hide the type-assist palette. ~ also works.", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},
]




// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'

