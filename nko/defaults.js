var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans NKo WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'nqo' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans NKo WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'nkoPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans NKo WF" ]


var template = {}
	template.title = 'N\'Ko character app'
    template.sample = " ߡߊ߲߬ߘߋ߲߬ ߛߊ߲ߘߊ ߘߏ߫ ߟߋ߬ ߞߊ߲߫ ߞߏ߫: ߌ ߓߊ߯ ߌ ߢߊ ߟߐ߬ ߕߋ߬ߟߋ ߘߐ߫ ߞߵߌ ߕߊ߯ ߦߙߐ ߡߊߝߟߍ߫߸ ߛߎ߫ ߕߍ߫ ߞߏ߬ ߌ ߡߊ߬. ߒ߬ߓߊ߬ ߊ߲ ߧߋ߫ ߒ߬ ߠߞߊߟߌߦߊ߫ ߛߊ߫ ߒ߬ ߘߌ߫ ߞߍ߫ ߒ߬ ߘߎߢߊߘߐߕߍ߯ ߢߐ߲߮ ߠߎ߬ ߘߐ߫ ߞߊ߬ ߞߍ߫ ߞߎߟߎ߲߫ ߞߋߟߋ߲߫ ߞߣߐ߫ ߏ߬ ߘߐ߫."
    template.blocklocation= '/scripts/nko/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'nko'
	template.scriptcode = 'Nkoo'
	template.fontLocale = 'nkoo'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert N'Ko text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Javanese text.", "code":"doTranscription('revTransliterate')"},

{"title":"Trans-<br/>scribe", "alt":"Convert N'Ko text to a Latin transcription.", "code":"doTranscription('transcription')", "warning":"Convert sequences for foreign sounds to single Latin symbols."},
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type N'Ko from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type N'Ko from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
