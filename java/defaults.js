var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Javanese WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'jv' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Javanese WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'javanesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Javanese WF", "Tuladha Jejeg WF" ]

 
var template = {}
	template.title = 'Javanese character app'
	template.sample = "ꦧꦧ꧀꧇꧑꧇​꧋ꦱ​ꦧꦼ​ꦤ꧀ꦲꦸ​ꦮꦺꦴꦁ​ꦏ​ꦭ​ꦲꦶ​ꦫ​ꦏꦺ​ꦏ​ꦤ꧀ꦛꦶ​ꦩꦂ​ꦢꦶ​ꦏ​ꦭ​ꦤ꧀ꦢꦂ​ꦧꦺ​ꦩꦂ​ꦠ​ꦧ​ꦠ꧀ꦭ​ꦤ꧀ꦲ​ꦏ꧀ꦲ​ꦏ꧀ꦏꦁ​ꦥ​ꦝ꧉​"
	template.sampleSource = "https://unicode.org/udhr/d/udhr_jav_java.html"
	template.blocklocation= '/scripts/javanese/block'  // blocklocation to use for examples
	template.noteslocation = 'javanese/' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'java'
	template.scriptcode = 'Java'
	template.fontLocale = 'java'
	template.hints = true
	
	// this indicates which items are to be described in the help
	// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
	template.inputaids1 = 'intro,shape,typeAssist,latin,reverse,'
	template.inputaids2 = 'keyboard'


// ꦏꦧꦺꦃꦥꦶꦤꦫꦶꦔꦤ꧀ꦲꦏꦭ꧀ꦭꦤ꧀ꦏꦭ꧀ꦧꦸꦱꦂꦠꦏꦲꦗꦧ꧀ꦥꦱꦿꦮꦸꦁꦔꦤ꧀ꦲꦁꦒꦺꦴꦤꦺꦩꦼꦩꦶꦠꦿꦤ꧀ꦱꦶꦗꦶꦭꦤ꧀ꦱꦶꦗꦶꦤꦺꦏꦤ꧀ꦛꦶꦗꦶꦮꦺꦴꦱꦸꦩꦢꦸꦭꦸꦂ


var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Javanese text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to XXXX text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/javanese/jv_vocab')"},
]



var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Javanese from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Javanese.", 
"desc":"Use an IPA keyboard mapping to type Javanese from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Javanese.", 
"desc":"Use a  mapping from Latin to type Javanese from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Javanese keyboard.", 
"desc":"Use a Javanese keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},

{"id":"showLatinTransSwitch", "title":"Type-assist: Latin characters needed for transcriptions", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"L", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},


{"id":"togglePalette", "title":"Show/hide the type-assist palette. ~ also works.", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},
]


// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,shapeLookup,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'
