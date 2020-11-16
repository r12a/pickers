var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tai Heritage Pro WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'blt' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tai Viet WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'taivietPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Tai Heritage Pro WF", "Noto Sans Tai Viet WF" ]


var template = {}
	template.title = 'Tai Viet character app'
	template.sample = "ꪹꪕꪸꪉ ꪀꪱ ꪋꪴ ꫛ ꪎꪲꪉ ꪮꪮꪀ ꪣꪱ ꪻꪠ ꪁꪷ ꪻꪬ ꪼꪒ ꪕꪳ ꪕꪱꪉ ꪀꪾꪚ ꪹꪋꪷꪉ ꪝꪸꪉ ꪕꪮꪥ ꪩꪾ ꫛ ꪶꪔꪙ ꪠꪴ - ꪋꪴ ꪬꪺ ꫛ ꪻꪠ ꪁꪷ ꪻꪬ ꪣꪲ ꪁꪫꪸꪙ ꪎꪱꪉ ꪶꪎꪣ ꪩꪺꪉ ꪹꪥꪸꪒ ꫛ ꪀꪾꪚ ꪹꪥꪸꪒ ꪻꪊ ꪚꪴꪙ ꪀꪾꪚ ꪼꪒ ꪹꪚꪷꪉ ꪒꪲ ꪀꪾꪚ ꪫꪸꪀ ꪭꪰꪀ ꪵꪝꪉ ꪹꪏꪉ ꪹꪭꪙ ꪒꪸꪫ."
	template.blocklocation= '/scripts/taiviet/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tavt'
	template.scriptcode = 'Tavt'
	template.fontLocale = 'tavt'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tai Viet text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Tai Viet text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Tai Viet from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

//{"title":"ISO to Hindi", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(isoCharacterMap);makeKbdEventList(isoCharacterMap);", "desc":"Create XXXX text from characters in the XXXX transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Tai Viet from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
