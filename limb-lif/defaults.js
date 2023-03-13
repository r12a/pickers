var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Namdhinggo SIL WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'lif' // language to use for examples
	factoryDefaults.uifont = 'Namdhinggo SIL WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'lifPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Namdhinggo SIL WF" ]


var template = {}
	template.title = 'Limbu'
	template.sample = "ᤁᤧᤖᤧᤰ ᤕᤠᤵᤔᤡᤜᤠ᤹ ᤀᤡᤱᤎᤠᤱ ᤏᤢ ᤕᤢᤰᤖᤧ ᤏᤠ᤺ᤶᤓᤣᤀᤥ ᤛᤠᤘᤠ᤺ᤴᤏᤥᤏᤢᤀᤣ ᤆᤥ᤺ᤰᤕᤢᤶᤓᤥᤒᤠ ᤏᤢ ᤐᤧᤶᤒᤧᤶᤒᤠ ᤔᤧᤘᤠ᤹ ॥"
	template.sampleSource = ''
	template.blocklocation= 'limb'  // block directory
	template.noteslocation = 'limb/lif' // location of script notes
	template.vocablocation = 'limb/lif_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'limb-lif'
	template.scriptcode = 'Limb'
	template.fontLocale = 'limb-lif'
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]

// ᤁᤧᤖᤧᤰ ᤕᤠᤵᤔᤡᤜᤠ᤹ ᤀᤡᤱᤎᤠᤱ ᤏᤢ ᤕᤢᤰᤖᤧ ᤏᤠ᤺ᤶᤓᤣᤀᤥ ᤛᤠᤘᤠ᤺ᤴᤏᤥᤏᤢᤀᤣ ᤆᤥ᤺ᤰᤕᤢᤶᤓᤥᤒᤠ ᤏᤢ ᤐᤧᤶᤒᤧᤶᤒᤠ ᤔᤧᤘᤠ᤹ ॥ ᤂᤢᤏᤡ᤹ ᤏᤡᤛᤡ᤺ᤰᤐᤠ ᤏᤢ ᤂᤧᤛᤡᤱ ᤔᤧᤍᤠᤖᤢᤀᤠᤱ ᤔᤧᤍᤩᤧᤀᤠᤱ ᤔᤧᤘᤠ᤹ ᤜᤧᤰᤁᤩᤠᤱ  ᤌᤡᤰᤘᤣ᤹ᤀᤥ ᤑᤢ᤹ᤏᤢᤛᤠ᤹ ᤀᤡᤛᤡᤰ ᤀᤥᤃᤠᤵ ᤆᤥ᤺ᤰᤔᤠᤛᤡ ᤐᤥ᤺ᤱ ॥

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Limbu text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
]



var inputAids = [
/*{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Bamanan from the keyboard."},

{"title":"More characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"M", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions, as well as normal letters."},
*/


{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Sunuwar from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Sunuwar.", 
"desc":"Use an IPA keyboard mapping to type Sunuwar from the keyboard.",
"dataShortTitle":"[...]", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Sunuwar.", 
"desc":"Use a  mapping from Sunuwar in Latin text to type Sunuwar from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Sunuwar keyboard.", 
"desc":"Use a Mukdum font keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},

{"id":"showLatinTransSwitch", "title":"Type-assist: More characters, needed for transcriptions.", 
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
var inputAidsHelp1 = 'intro,typeAssist,ipaAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'