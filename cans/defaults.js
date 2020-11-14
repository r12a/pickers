var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Canadian Aboriginal WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'cr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Canadian Aboriginal WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'ucasPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Canadian Aboriginal WF" ]


var template = {}
	template.title = 'All UCAS character app'
	template.sample = "ᒥᓯᐌ ᐃᓂᓂᐤ ᑎᐯᓂᒥᑎᓱᐎᓂᐠ ᐁᔑ ᓂᑕᐎᑭᐟ ᓀᐢᑕ ᐯᔭᑾᐣ ᑭᒋ ᐃᔑ ᑲᓇᐗᐸᒥᑯᐎᓯᐟ ᑭᐢᑌᓂᒥᑎᓱᐎᓂᐠ ᓀᐢᑕ ᒥᓂᑯᐎᓯᐎᓇ᙮ ᐁ ᐸᑭᑎᓇᒪᒋᐠ ᑲᑫᑕᐌᓂᑕᒧᐎᓂᓂᐤ ᓀᐢᑕ ᒥᑐᓀᓂᒋᑲᓂᓂᐤ ᓀᐢᑕ ᐎᒋᑴᓯᑐᐎᓂᐠ ᑭᒋ ᐃᔑ ᑲᓇᐗᐸᒥᑐᒋᐠ᙮"
	template.blocklocation= '/scripts/cans/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cans'
	template.scriptcode = 'Cans'
	template.fontLocale = 'cans'
	template.hints = false



var controls = [
]


var inputAids = [
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = ''

