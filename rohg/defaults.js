var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Hanifi Rohingya WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'rhg' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Hanifi Rohingya WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'rohgPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Hanifi Rohingya WF" ]


var template = {}
	template.title = 'Hanifi Rohingya'
	template.sample = "𐴀𐴞𐴕𐴐𐴝𐴦𐴕 𐴁𐴠𐴒𐴧𐴟𐴕 𐴀𐴝𐴎𐴝𐴊𐴢 𐴀𐴝𐴌 𐴀𐴠𐴑𐴧𐴟 𐴉𐴟𐴥𐴖𐴝𐴙𐴕𐴝 𐴇𐴡𐴥𐴑 𐴀𐴝𐴌 𐴀𐴞𐴎𐴧𐴡𐴃𐴢 𐴓𐴡𐴌 𐴉𐴡𐴘𐴊𐴝 𐴀𐴡𐴥𐴘𐴧𐴠 ۔  𐴀𐴞𐴥𐴃𐴝𐴘𐴝𐴃𐴧𐴟 𐴀𐴝𐴈𐴡𐴓 𐴀𐴝𐴌 𐴁𐴟𐴎 𐴀𐴡𐴥𐴘𐴧𐴠 ، 𐴀𐴠𐴥𐴃𐴡𐴓𐴧𐴝 𐴀𐴞𐴥𐴃𐴝𐴌𐴝𐴃𐴧𐴟 𐴀𐴠𐴑 𐴀𐴡𐴕 𐴀𐴝𐴌 𐴀𐴠𐴑 𐴎𐴡𐴕 𐴓𐴡𐴘 𐴁𐴤𐴝𐴘𐴧𐴡 𐴋𐴧𐴡𐴙𐴓𐴧𐴝 𐴔𐴝𐴦𐴔𐴠𐴓𐴝 𐴒𐴡𐴌𐴡𐴥𐴕 𐴏𐴝𐴀𐴝 ۔"
	template.sampleSource = ''
	template.blocklocation= 'rohg'  // block directory
	template.noteslocation = 'rohg/rhg' // location of script notes
	template.vocablocation = 'rohg/rhg_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'rohg'
	template.scriptcode = 'Rohg'
	template.fontLocale = "rohg"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐴀'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]





var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Rohingya text to a latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Transl<br/>++", "alt":"Convert Kashmiri text to a latin transliteration with vowels and other changes.", "code":"doTranscription('translitPlus')"},
]



var pulldown = [
]



var inputAids = [
{"title":"Shape-based lookup", "desc":"Click on a panel of shapes to find similar characters.", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "initialCode":"shapelist=document.getElementById('shapelist'); if (shapelist.style.display==='none') {shapelist.style.display='block';} else {shapelist.style.display='none';}"},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Maps keyboard mapped to useful characters.", 
"desc":"Use ASCII characters to type Hanifi Rohingya from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Hanifi Rohingya.", 
"desc":"Use an IPA keyboard mapping to type Hanifi Rohingya from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Hanifi Rohingya.", 
"desc":"Use a  mapping from Latin to type Hanifi Rohingya from the keyboard.",
"dataShortTitle":"l", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Google keyboard mappings.", 
"desc":"Use a Google Hanifi Rohingya keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},


{"id":"showLatinTransSwitch", 
"title":"Latin type-assist", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"L", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},

{"title":"Type-assist palette toggle", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
