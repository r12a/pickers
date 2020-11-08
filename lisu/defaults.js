var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Lisu WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'lis' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Lisu WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'lisuPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Lisu WF" ]


var template = {}
	template.title = 'Lisu character app'
	//template.sample = "ꓠꓬꓲꓻꓠꓬꓲ ꓣꓳꓽꓡꓲꓢꓴ ꓫꓵꓽꓐꓴ ꓒꓵꓽꓒꓽ ꓐꓴꓣꓱꓽˍꓔꓬˍꓟ ꓢꓽꓚꓻ ꓛꓲꓻꓐꓶꓻꓔꓯꓸꓣꓱꓽꓐˍꓡˍꓠꓼꓟ꓾ ꓞꓳꓻꓡꓯꓸ ꓐꓴˍꓶꓻꓙꓳˍꓡꓳ꓿ꓟꓬꓽꓠꓬꓲ ꓕꓲꓽꓐꓱꓻꓟˍꓠꓬ꓾"
	template.sample = "ꓞꓳ ꓘꓹ ꓠꓯꓹꓼ ꓢꓲ ꓫꓬ ꓟ ꓙ ꓖꓴ ꓗꓪ ꓟꓬꓱꓽ ꓧꓳꓽ ꓢꓴ ꓠꓬ꓾ ꓞꓳ ꓘꓹ ꓗꓪ ꓟ ꓞꓳ ꓟ ꓐꓴ ꓔꓯ ꓮ ꓡꓲ ꓬꓰ ꓠꓯꓹ ꓟ꓾ ꓟꓬꓱꓽ ꓔꓯ ꓧꓳꓽ ꓪꓴꓸ ꓟꓴ ꓢꓴ ꓬꓲ ꓜꓴꓻ ꓤ (Committee) ꓕꓲ ꓜꓴꓻ ꓢꓲꓺ ꓖꓶ ꓠꓯꓹ ꓡꓳ꓿"
    // sample source: http://www.evertype.com/standards/iso10646/pdf/fraser-sample.pdf
	template.blocklocation= '/scripts/lisu/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lisu'
	template.scriptcode = 'Lisu'
	template.fontLocale = 'lisu'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lisu text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Transcribe", "alt":"Convert Lisu text to a Latin transcription.", "code":"doTranscription('translitplus')", "warning": "Presents tones using visually friendly characters."},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Lisu from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

//{"title":"ISO to Hindi", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(isoCharacterMap);makeKbdEventList(isoCharacterMap);", "desc":"Create XXXX text from characters in the XXXX transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Lisu from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
