var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Ethiopic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area 
	factoryDefaults.language = 'am' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Ethiopic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'ethiopicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Ethiopic WF" ]


var template = {}
	template.title = 'All Ethiopic'
	template.sample = "፪/፡ እያንዳንዱ፡ሰው፡ከማንኛውም፡አገር፡ሆነ፡ከራሱ፡አገር፡ወጥቶ፡እንደገና፡ወደ፡አገሩ፡የመመለስ፡መብት፡አለው።"
	template.blocklocation= 'ethiopic'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'ethiopic'
	template.scriptcode = 'Ethi'
	template.fontLocale = 'ethi'
	template.hints = false



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Ethiopic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Ethiopic text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Extended repertoire", "dataVar":"showExtended", "dataLocn":"", "dataShortTitle":"E", "type":"code", "initialCode":"if(globals.showExtended){revealExtended(true)}else{revealExtended(false);}", "desc":"Show the extended repertoire of syllables."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"single_palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions."},

{"title":"Show hints", "dataVar":"showRevealHints", "dataLocn":"", "dataShortTitle":"S", "type":"code", "initialCode":"if(globals.showRevealHints){revealHints(true)}else{revealHints(false);}", "desc":"Show transliterations alongside syllables to help find things."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
