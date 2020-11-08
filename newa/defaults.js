var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Newa WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ne' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Newa WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'newaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Newa WF" ]

var template = {}
	template.title = 'Newa character app'
	template.sample = "𑐩𑐸𑐮𑐸𑐎𑐫𑑂 𑐰𑑅𑐐𑐸 𑐬𑐵𑐖𑐣𑑁𑐟𑐶𑐎 𑐫𑐬𑐶𑐰𑐬𑑂𑐟𑐣 𑐤𑐹𑐐𑐸 𑐳𑐰𑐶𑐢𑐵𑐣𑑄 𑐣𑐾𑐫𑐵𑑅𑐫𑐵𑐟 𑐳𑑄𑐑𑐷𑐫 𑐮𑑀𑐎𑐟𑐵𑐣𑑂𑐟𑑂𑐬𑐎 𑐐𑐞𑐟𑐣𑑂𑐟𑑂𑐬 𑐣𑐶𑐬𑑂𑐩𑐵𑐞 𑐫𑐵𑐂𑐐𑐸 𑐖𑐹𑐐𑐸𑐮𑐶𑑄 𑐬𑐾𑐥𑐵𑑅𑐫𑐵 𑐁𑐡𑐶𑐰𑐵𑐳𑐷 𑐣𑐾𑐰𑐵𑑅𑐟𑐣𑐫𑐸𑐳𑑄 𑐣𑐾𑐰𑐵𑑅 𑐳𑐵𑐫𑐟𑑂𑐟 𑐬𑐵𑐖𑑂𑐬𑐫𑐵 𑐩𑐵𑐐 𑐫𑐵𑑅𑐐𑐸 𑐚𑑂𑐬𑐸 𑑋"
	// source: https://scriptsource.org/cms/scripts/render_graphic.php?&type=graphic_in_html&title=Popup&filename=../sites/s/media/database/ssproto/entries/f8/2s/f82szejag6_Lipi%20Pau%20Feb%202009.jpg
	template.blocklocation= 'newa'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'newa'
	template.scriptcode = 'Newa'
	template.fontLocale = "newa"
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert newa text to a latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Trans-<br/>scribe", "alt":"Convert newa text to a latin transcription.", "code":"doTranscription('transcription')"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Newa from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Newa from the keyboard via reverse transliteration."},
]
