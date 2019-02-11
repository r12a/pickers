var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tuladha Jejeg WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "3"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'jv' // language to use for examples
	factoryDefaults.uifont = 'Tuladha Jejeg WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'javanesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Javanese character picker'
	template.sample = "ꦧꦧ꧀꧇꧑꧇​꧋ꦱꦧꦼꦤ꧀ꦲꦸꦮꦺꦴꦁꦏꦭꦲꦶꦂꦫꦏꦺꦏꦤ꧀ꦛꦶꦩꦂꦢꦶꦏꦭꦤ꧀ꦢꦂꦧꦺꦩꦂꦠꦧꦠ꧀ꦭꦤ꧀ꦲꦏ꧀ꦲꦏ꧀ꦏꦁꦥꦝ꧉"
	template.sampleSource = "https://unicode.org/udhr/d/udhr_jav_java.html"
	template.blocklocation= '/scripts/javanese/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'javanese'
	template.scriptcode = 'Java'


// ꦏꦧꦺꦃꦥꦶꦤꦫꦶꦔꦤ꧀ꦲꦏꦭ꧀ꦭꦤ꧀ꦏꦭ꧀ꦧꦸꦱꦂꦠꦏꦲꦗꦧ꧀ꦥꦱꦿꦮꦸꦁꦔꦤ꧀ꦲꦁꦒꦺꦴꦤꦺꦩꦼꦩꦶꦠꦿꦤ꧀ꦱꦶꦗꦶꦭꦤ꧀ꦱꦶꦗꦶꦤꦺꦏꦤ꧀ꦛꦶꦗꦶꦮꦺꦴꦱꦸꦩꦢꦸꦭꦸꦂ

var inputAids = [
{"title":"Shape lookup", "dataVar":"showShapeHints", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shapelist"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Javanese text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Trans-<br/>scribe", "alt":"Convert Javanese text to a Latin transcription.", "code":"doTranscription('toLatin')"},
]
