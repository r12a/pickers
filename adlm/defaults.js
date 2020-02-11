var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Adlam WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'fuf' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Adlam WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'adlamPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Adlam character app'
	template.sample = "𞤑𞤵𞥅𞤤𞤢𞤤 𞤺𞤢𞤣𞤢𞤲𞤢𞤤 𞤋𞤲𞥆𞤢𞤥𞤢 𞤢𞥄𞤣𞤫𞥅𞤶𞤭 𞤬𞤮𞤬 𞤨𞤮𞤼𞤭، 𞤲ˈ𞤣𞤭𞤥𞤯𞤭𞤣𞤭 𞤫 𞤶𞤭𞤦𞤭𞤲𞤢𞤲𞥆𞤣𞤫 𞤼𞤮 𞤦𞤢𞤲𞥆𞤺𞤫 𞤸𞤢𞤳𞥆𞤫𞥅𞤶𞤭. 𞤉𞤩𞤫 𞤲ˈ𞤺𞤮𞥅𞤣𞤭 𞤥𞤭𞥅𞤶𞤮 𞤫 𞤸𞤢𞤳𞥆𞤭𞤤𞤢𞤲𞤼𞤢𞥄𞤺𞤢𞤤 𞤫𞤼𞤫 𞤫𞤩𞤫 𞤨𞤮𞤼𞤭 𞤸𞤵𞥅𞤬𞤮 𞤲ˈ𞤣𞤭𞤪𞤣𞤫 𞤫 𞤲ˈ𞤣𞤫𞤪 𞤩 𞤭𞤴𞤲𞤺𞤵𞤴𞤵𞤥𞥆𞤢𞥄𞤺𞤵."
	template.sampleSource = 'UDHR https://unicode.org/udhr/d/udhr_fuf_adlm.html'
    template.blocklocation= '/scripts/adlam/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'adlm'
	template.scriptcode = 'Adlm'
	template.cursive = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert ajami text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Transl<br/>++", "alt":"Convert ajami text to a latin transliteration with vowels and other changes.", "code":"doTranscription('translitPlus')"},
]



var pulldown = [
]




var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes when you mouse over a character"},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Adlam from the keyboard."},

{"title":"Latin type assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show Latin characters used for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Adlam from the keyboard via reverse transliteration."},
]

