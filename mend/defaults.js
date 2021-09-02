var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Mende Kikakui WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area
	factoryDefaults.language = 'men' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Mende Kikakui WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'mendePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Mende Kikakui WF" ]


var template = {}
	template.title = 'Mende Kikakui character app'
	template.sample = "𞡥𞠖𞢻𞠢𞠮𞠣 𞢣𞠽 𞡅 𞡄 𞠺 𞡈 𞡗 𞢰𞠎 𞡔 𞡪, 𞡅𞠧 𞡄 𞡥𞢻𞠤 𞡖𞠢 𞠄𞠦 𞡄 𞠼𞣀 𞠕𞠣 𞡬𞠊𞢂. 𞠀𞠢𞡔 𞠄𞠦 𞡨𞢯𞠸𞠣𞡪 𞡽𞠨𞠷 𞠣 𞡗𞠼 𞡄 𞡪𞡣. 𞡛𞡇 𞠕𞡰𞡽 𞡄 𞡄 𞣄𞣄𞡪 𞡭𞠢 𞠀𞠣 𞢱𞠥𞢄𞠣."
	template.blocklocation= '/scripts/mend/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'mend'
	template.scriptcode = 'Mend'
	template.fontLocale = 'mend'
	template.hints = false
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Mende Kikakui text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
//{"title":"Reverse transcription", "alt":"Convert Latin transliterated text to Mende Kikakui.", "code":"doTranscription('reverse')"},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Mende to Latin", "alt":"Convert Mende Kikakui text to a Latin transcription.", "code":"doTranscription('toLatin')", "warning":"This conversion will likely need tweaking!"},
]




var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"makePalette(''); window.latinOnly=false;makeKbdEventList(translitCharacterMap);", "desc":"Use ASCII characters to type Mende from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}

