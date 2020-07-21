var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Tai Le WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'tdd' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tai Le WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "26";  // selection area font size, number of pixels (just the number)
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
    // source: http://www.seasite.niu.edu/tai/TaiDehong/story1/gif&jpg/p3.jpg
	template.blocklocation= '/scripts/taile/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'taile'
	template.scriptcode = 'Tale'
	template.fontLocale = 'tale'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tai Le text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Javanese text.", "code":"doTranscription('revTransliterate')"},
{"title":"Switch<br/>tones", "alt":"Convert tone letters to marks, and vice versa.", "code":"switchTones()"},
]




var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Tai Le from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

//{"title":"ISO to Hindi", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(isoCharacterMap);makeKbdEventList(isoCharacterMap);", "desc":"Create XXXX text from characters in the XXXX transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Tai Le from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
