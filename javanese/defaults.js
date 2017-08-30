var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Javanese' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'jv' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Javanese'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'javanesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Javanese character picker'
	template.sample = "꧋ꦱꦧꦼꦤ꧀ꦲꦸꦮꦺꦴꦁꦏꦭꦲꦶꦫꦏꦺꦏꦤ꧀ꦛꦶꦩꦂꦢꦶꦏꦭꦤ꧀ꦢꦂꦧꦺꦩꦂꦠꦧꦠ꧀ꦭꦤ꧀ꦲꦏ꧀ꦲꦏ꧀ꦏꦁꦥꦢ꧀ꦲ꧉"
	template.blocklocation= 'javanese'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'javanese'


// ꦏꦧꦺꦃꦥꦶꦤꦫꦶꦔꦤ꧀ꦲꦏꦭ꧀ꦭꦤ꧀ꦏꦭ꧀ꦧꦸꦱꦂꦠꦏꦲꦗꦧ꧀ꦥꦱꦿꦮꦸꦁꦔꦤ꧀ꦲꦁꦒꦺꦴꦤꦺꦩꦼꦩꦶꦠꦿꦤ꧀ꦱꦶꦗꦶꦭꦤ꧀ꦱꦶꦗꦶꦤꦺꦏꦤ꧀ꦛꦶꦗꦶꦮꦺꦴꦱꦸꦩꦢꦸꦭꦸꦂ

var inputAids = [
{"title":"Shape lookup", "dataVar":"showShapeHints", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shapelist"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"}
]

var controls = [
{"title":"Javanese<br/>to Latin", "alt":"Convert Javanese text to a Latin transcription.", "code":"doTranscription('toLatin')"},
]
