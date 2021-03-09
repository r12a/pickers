var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Newa WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'new' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Newa WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'newaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Newa WF" ]

var template = {}
	template.title = 'Newa character app'
	template.sample = "𑐳𑐎𑐮𑐾𑑄 𑐩𑐣𑐹𑐟 𑐳𑑂𑐰𑐟𑐣𑑂𑐟𑑂𑐬 𑐰 𑐖𑑂𑐰𑐮𑐶𑐖𑑂𑐰𑑅 𑐁𑐟𑑂𑐩𑐳𑐩𑑂𑐩𑐵𑐣 𑐰 𑐰𑐵𑑄 𑐡𑐂𑐎𑐠𑑄 𑐧𑐸𑐂 𑑋 𑐂𑐥𑐶𑑄 𑐳𑑂𑐰𑐰𑐶𑐰𑐾𑐎 𑐰 𑐳𑐡𑑂𑐧𑐸𑐡𑑂𑐔𑐶 𑐡𑐫𑐵𑑅 𑐰𑐶𑐰𑐾𑐎𑐱𑐷𑐮 𑐖𑐸𑐂 𑐀𑐮𑐾 𑐠𑐰𑑄𑐠𑐰𑐫𑑂 𑐡𑐵𑐖𑐵𑐎𑐠𑑄 𑐴𑐣𑐵𑐧𑐣𑐵 𑐫𑐵𑐂 𑑋"
	template.blocklocation= 'newa'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'newa'
	template.scriptcode = 'Newa'
	template.fontLocale = "newa"
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Newa text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Newa text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('transcription')", "warning":"Adds inherent vowels based on a very generalised rule. The result should be checked."},

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/newa/new_vocab')"},
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Newa from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Newa from the keyboard via reverse transliteration."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
