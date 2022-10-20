var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Tai Le WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'tdd' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tai Le WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'tailePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Tai Le WF" ]


var template = {}
	template.title = 'Tai Le character app'
	template.sample = "ᥘᥬ̈ᥔᥩᥛ̇ᥝᥢ̈ᥘᥭ̇，ᥐᥩᥙᥘᥭ̀ᥑᥨᥛ̌ᥑᥦᥢ́ᥖᥫᥒ̈ᥐᥣ，ᥝᥣᥐᥖᥣᥙ̌ᥐᥨᥢ̈ᥑᥥᥢ́ᥛᥣ̈ᥔᥥ́，ᥛᥣᥢ̀ᥘᥣ̈ᥟᥢᥐᥬ̀ᥓᥛᥑᥩᥙ̌ᥞᥤᥛ̈ᥙᥥ̀ᥢᥣᥢ̇ᥘᥢ̇，ᥛᥤ̈ᥐᥣᥭ̈ᥚᥣᥒ̇ᥓᥤᥢᥚᥧᥒ́ᥘᥫᥒᥑᥝ̀ᥛᥣᥢ̇ᥛᥣ̈，ᥟᥣᥛᥥᥝ̈ᥖᥭ̈ᥖᥒ̈ᥘᥣᥭ́ᥟᥩᥢᥐᥢᥐᥣ̌ᥓᥩᥭᥗᥦᥛ́．"
	template.sampleSource = 'http://www.seasite.niu.edu/tai/TaiDehong/story1/gif&jpg/p3.jpg'
	template.blocklocation= 'taile'  // block directory
	template.noteslocation = 'taile/tdd' // location of script notes
	template.vocablocation = 'taile/tdd_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tale'
	template.scriptcode = 'Tale'
	template.fontLocale = 'tale'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tai Le text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Switch tones", "alt":"Convert tone letters to marks, and vice versa.", "code":"switchTones()"},
]




var inputAids = [
//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Tai Le from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Tai Le.", 
"desc":"Use an IPA keyboard mapping to type Tai Le from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

//{"title":"Type assist: LOC transcription to Tai Le.", 
//"desc":"Use a  mapping from LOC to type Tai Le from the keyboard.",
//"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
//},

{"title":"Type assist: Map keys to a Tai Le keyboard.", 
"desc":"Use a Tai Le keyboard mapping to type from the keyboard.",
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
var inputAidsHelp1 = 'intro,typeAssist,ipaAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'
