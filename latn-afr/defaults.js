var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Adelle Sans EXT Light WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'en' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Light WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'latnAfrPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Gentium Plus WF", "Adelle Sans EXT Light WF", "Noto Sans Light WF" ]


var template = {}
	template.title = 'Pan-African Latin character app'
	template.sample = "Bánlʊrʊ́ʊ ɩrʊ́ báa weení na kezéńbíídi gɛ bɩka bɛdɛ́ɛ ɖɔɔzɩ́tɩ na yíkowá kɛgɛ́ɛ ɖéyí-ɖéyí gɛ. Bɔwɛná laakárɩ na ɩrʊ́tɩ bɩka bɩɩbɔ́ɔ́zɩ bɔcɔɔná ɖamá koobíre cɔwʊrɛ." // from https://unicode.org/udhr/d/udhr_kdh.html
	template.blocklocation= '/scripts/latin/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latin-afr'
	template.scriptcode = 'Latn'
	template.fontLocale = 'latn-afr'
	template.hints = false



var controls = [
]



var pulldown = [
]


var inputAids = [
{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"makePalette(''); window.latinOnly=false;makeKbdEventList(translitCharacterMap);", "desc":"Use ASCII characters to type African text from the keyboard."},

{"title":"More Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"M", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);", "desc":"Show characters needed for IPA or other transcriptions, as well as normal letters."},
]
