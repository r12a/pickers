var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Javanese' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
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
	template.sample = "꧋ꦱꦧꦼꦤ꧀ꦲꦸꦮꦺꦴꦁꦏꦭꦪꦶꦂꦫꦏꦺꦏꦤ꧀ꦛꦶꦩꦂꦢꦶꦏꦭꦤ꧀ꦢꦂꦧꦺꦩꦂꦠꦧꦠ꧀ꦭꦲꦏ꧀ꦲꦏ꧀ꦏꦁꦥꦝ꧉"
	template.blocklocation= 'javanese'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script


// ꦏꦧꦺꦃꦥꦶꦤꦫꦶꦁꦔꦤ꧀ꦲꦏꦭ꧀ꦭꦤ꧀ꦏꦭ꧀ꦧꦸꦱꦂꦠꦏꦲꦗꦧ꧀ꦥꦱꦿꦮꦸꦁꦔꦤ꧀ꦲꦁꦒꦺꦴꦤ꧀ꦤꦺꦩꦼꦩꦶꦠꦿꦤ꧀ꦱꦶꦗꦶꦭꦤꦱꦶꦗꦶꦤꦺꦏꦤ꧀ꦛꦶꦗꦶꦮꦱꦸꦩꦢꦸꦭꦸꦂ

var inputAids = [
{"title":"Shape lookup", "dataVar":"showShapeHints", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shapelist"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"}
]
