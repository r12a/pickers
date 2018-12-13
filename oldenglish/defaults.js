var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL' // text area font name (a single font, no quotes)
	factoryDefaults.size = "30";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "3"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ang' // language to use for examples
	factoryDefaults.uifont = 'Doulos SIL'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'oldenglishPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Old English character picker'
	template.sample = "Hwæt! wē Gār-Dena in ġēar-dagum þēod-cyninga þrym gefrūnon, hūðā æþelingas ellen fremedon."
	template.blocklocation= '/scripts/latin/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'oldenglish'
	template.scriptcode = 'Latn'



var inputAids = [
{"title":"Type characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
{"title":"IPA characters", "dataVar":"showIPATrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(ipaCharacterMap);makeKbdEventList(ipaCharacterMap);"},
//{"title":"IPA characters", "dataVar":"showIPATrans", "dataLocn":"ipatranscript", "dataShortTitle":"I", "type":"palette"}
]

var controls = [
{"title":"Old English<br/>to IPA", "alt":"Convert Old English text to a rough IPA transcription.", "code":"doTranscription('toIPA')"},
{"title":"Old English<br/>to runes", "alt":"Convert Old English text to a rough runic transcription.", "code":"doTranscription('oldEnglishToRune')"},
]
