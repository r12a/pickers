var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'A Tai Tham KH New WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'kkh' // language to use for examples
	factoryDefaults.uifont = 'A Tai Tham KH New WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'taikhuenPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Tai Khün character app'
	template.sample = "ᨡᩳ᩶ 1 ᨾᨶᩩᩔ᩼ᨴ᩠ᨦᩢᩉᩖᩣ᩠ᨿᨠᩮ᩠ᨯᩨᨾᩣᨾᩦᨻ᩠ᨦᩈᩁᩓᩢᨹ᩠ᨿ᩵ᨦᨻ᩠ᨿᨦᨠ᩠ᨶᩢ ᨶᩱᨠᩥᨲ᩠ᨲᩥᩈ᩠ᨠᩢ ᩓᩢᩈᩥᨴ᩠ᨵᩥ ᨲ᩵ᩣ᩠ᨦᨣᩳ᩶ᨣᩢᨾᩦᨾᨶᩮᩣᨵᨾ᩠ᨾ᩼ᩓᩢ ᨣ᩠ᩅᩁᨷᨭᩥᨷ᩠ᨲᩢᨲᩳ᩵ᨠ᩠ᨶᩢᨯᩢ᩠ᩅ᩠ᨿᨣ᩠ᩅᩣ᩠ᨾᨹ᩠ᨿ᩵ᨦᨻ᩠ᨿᨦᨠ᩠ᨶᩢ"
	template.blocklocation= '/scripts/taikhuen/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'taikhuen'
	template.scriptcode = 'Lana'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Khün text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes when you mouse over a character."},

{"title":"IME-like assisted typing", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);", "desc":"Use ASCII characters to type Hausa from the keyboard via reverse transliteration."},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);", "desc":"Show Latin characters used for IPA or other transcriptions and transliterations."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Input text using an onscreen keyboard."},
]