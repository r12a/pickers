var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'BGP 2017 DejaVu Serif WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "30";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area
	factoryDefaults.language = 'ka' // language to use for examples
	factoryDefaults.uifont = 'BGP 2017 DejaVu Sans WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'allgeorgian'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Georgian WF", "Noto Serif Georgian WF", "BGP 2017 DejaVu Serif WF", "BGP 2017 DejaVu Sans WF" ]


var template = {}
	template.title = 'All Georgian character app'
	template.sample = "მუხლი 1. ყველა ადამიანი იბადება თავისუფალი და თანასწორი თავისი ღირსებითა და უფლებებით. მათ მინიჭებული აქვთ გონება და სინდისი და ერთმანეთის მიმართ უნდა იქცეოდნენ ძმობის სულისკვეთებით."
	// source: https://unicode.org/udhr/d/udhr_kat.html
	template.blocklocation= '/scripts/georgian/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'geor-all'
	template.scriptcode = 'Geor'
	template.fontLocale = 'geor'
	template.hints = false
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Georgian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Georgian text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},
]



var inputAids = [
]





// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = ''
