if (typeof fontDB === 'undefined') {
	fontSelection = ''
	webFonts = ''
	}
else {  
	// create a subset of the fontDB
	localeList = []
	for (rec in fontDB) { //console.log(fontDB[rec].name)
		if (fontDB[rec].locales.has(template.fontLocale)) localeList.push(fontDB[rec])
		}
	var macArray = ["Mac fonts"]
	var winArray = ["Windows fonts"]
	var gsArray = ["Google/SIL/other fonts"]
	var otherArray = ["Other fonts"]
	for (rec in localeList) {
		if (localeList[rec].system.has('mac')) macArray.push(localeList[rec].name)
		if (localeList[rec].system.has('win')) winArray.push(localeList[rec].name)
		if (localeList[rec].system.has('goog') || localeList[rec].system.has('sil') || localeList[rec].system.has('other')) gsArray.push(localeList[rec].name)
		//if (localeList[rec].system.has('other')) otherArray.push(localeList[rec].name)
		}

	fontDB = []
	fontDB.push(macArray)
	fontDB.push(winArray)
	fontDB.push(gsArray)
	fontDB.push(otherArray)
	macArray = []
	winArray = []
	gsArray = []
	otherArray = []

	createFontPulldowns()
	}

function createFontPulldowns () {
	// create the select list markup for the font pulldowns (used if fontDB available)
	
	if (typeof webFonts === 'undefined') alert('The webFonts array is not defined.')
	
	out = '<optgroup label="Webfonts">\n'
	for (let w=0;w<webFonts.length;w++) {
		out += '<option value="'+webFonts[w]+'">'+webFonts[w]+'</option>\n'
		}
	out += '</optgroup>\n'
	
	out += '<optgroup label="System defaults">\n'
	out += '<option value="serif">serif</option>\n'
	out += '<option value="sans-serif">sans-serif</option>\n'
	out += '</optgroup>\n'
	
	for (r=0; r<fontDB.length;r++) {
		if (fontDB[r].length > 1) {
			out += '<optgroup label="'+fontDB[r][0]+'">\n'
			for (let i=1;i<fontDB[r].length;i++) {
				out += '<option value="'+fontDB[r][i]+'">'+fontDB[r][i]+'</option>\n'
				}
			out += '</optgroup>\n'
			}
		}
	fontSelection = out
	}


function createFontPicker () {
// create the fontPickerCode which is used for the area above the text box


	var webfontGroups = document.getElementById('fontList').querySelectorAll('optgroup')

	// list the webfonts & system defaults horizontally
	var webFonts = webfontGroups[0].querySelectorAll('option')
	out = '<div id="fontPickerWebfonts"><span class="fpOptgroup">Webfonts</span>'
	for (let f=0;f<webFonts.length;f++) {
		out += '<span class="fpOption'
		if (webFonts[f].textContent === defaults.font) out += ' currentFont'	
		out += '" onmouseover="applyFontPreview(String(this.dataset.value))" onclick="selectFont(this.dataset.value); document.getElementById(\'fontPicker\').innerHTML=\'\';document.getElementById(\'fontManagementDetails\').style.display=\'none\';" data-value="'+webFonts[f].textContent+'">'+webFonts[f].textContent+'</span> &nbsp; \n'
		}
	//out += '&nbsp; <span style="white-space:nowrap"><span class="fpOptgroup">Generic fallbacks</span>'
	//out += '<span class="fpOption" onmouseover="document.getElementById(\'output\').style.fontFamily = \'sans-serif\'" data-value="sans-serif">sans-serif</span> &nbsp; \n'
	//out += '<span class="fpOption" onmouseover="document.getElementById(\'output\').style.fontFamily = \'serif\'" data-value="serif">serif</span>\n'
	out += '</span> &nbsp;  &nbsp;  &nbsp; <a  class="fpOptgroup" href="../shared27/fontpreview.html" target="_blank">Usage tips</a>'
	out += '</div>'

	// list the other fonts, in columns
	out += '<div id="fontPickerCols">\n'
	for (let g=2;g<webfontGroups.length;g++) {
		out += '<div class="fpOptgroup">'+webfontGroups[g].label+'\n'
		var options = webfontGroups[g].querySelectorAll('option')
		for (let o=0;o<options.length;o++) {
			out += '<div class="fpOption'
			if (options[o].textContent === defaults.font) out += ' currentFont'
			out += '"'
			if (fontInfo[options[o].textContent]) out += ' title="'+fontInfo[options[o].textContent].notes+'"'
			out += ' onmouseover="applyFontPreview(this.dataset.value)" onclick="selectFont(this.dataset.value);  document.getElementById(\'fontPicker\').innerHTML=\'\';document.getElementById(\'fontManagementDetails\').style.display=\'none\';"  data-value="'+options[o].textContent+'">'+options[o].textContent+'</div>\n'
			if (g===webfontGroups.length-1 && o===options.length-1) out += '<div class="fpOption"><a href="../shared27/fontpreview.html" onclick="document.getElementById(\'fontManagementDetails\').open=true; return false;">Add more</a></div>'
			}
		out += '</div>'
		}
	out += '<div onclick="document.getElementById(\'fontPicker\').innerHTML=\'\'; document.getElementById(\'fontManagementDetails\').style.display=\'none\';" style="cursor:pointer; font-size: 200%;">X</div>'
	out += '</div>'
	
	return out
	}


function applyFontPreview (font) {
	document.getElementById('output').style.fontFamily = "\'"+font+"\', 'Unicode BMP Fallback SIL', 'Adobe NotDef'"
	}


function setBidiOverride (dir, mirror) {
    // used by the small arrows below the input area when character app base direction is bidi
    // sets the direction to rlo with optional mirroring
    // mirror: boolean, sets the mirroring if true
    
    if (mirror) {
        document.getElementById('output').classList.add('mirrorRTL')
        document.getElementById('output').classList.add('bdoLTR')
        document.getElementById('output').classList.remove('bdoRTL')
        }
    else if (dir==='rtl') {
        document.getElementById('output').classList.remove('mirrorRTL')
        document.getElementById('output').classList.remove('bdoLTR')
        document.getElementById('output').classList.add('bdoRTL')
        }
    else {
        document.getElementById('output').classList.remove('mirrorRTL')
        document.getElementById('output').classList.add('bdoLTR')
        document.getElementById('output').classList.remove('bdoRTL')
	   	}
    }

function clearBidiOverride () {
    // used by the small arrows below the input area when character app base direction is bidi
    // clears the rlo and any mirroring
    
    document.getElementById('output').classList.remove('bdoRTL')
    document.getElementById('output').classList.remove('mirrorRTL')
    document.getElementById('output').classList.remove('bdoLTR')
    }




function addTabEtc (location) {
	node = document.getElementById(location)
	out = `
<span class="touch" title="Tab" dir="auto" onClick="add('\u0009');"><img src="../shared27/images/tab.png" alt="⇥"`
if (template.direction === 'rtl')  out += ` style="transform: rotateY(180deg);"`
out += `></span> 
<span class="touch" title="Line break" dir="auto" onClick="add('\\n');"><img src="../shared27/images/return.png" alt="⏎"`
if (template.direction === 'rtl')  out += ` style="transform: rotateY(180deg);"`
out += `></span> 
<span class="touch" title="Delete last character in text area" style="padding: 5px 20px;" onClick="del();">DEL</span> 
<span class="touch delAll" title="Delete all" style="margin-right: 20px; margin-left:20px;" onClick="deleteAll();">❌</span>
`
	node.innerHTML = out
	}



function setTop (title,sample) {
var out

//out = `<button id="contrastSwitch" title="Change the contrast level." onclick="toggleContrast()">ðŸŒ“</button>
out = `<div id="contrastSwitch" style="position:absolute;top:3px;right:14px; line-height:1;"  title="Change the contrast level." onclick="document.getElementById('access').style.display='flex'"><img src="../shared27/images/access.png" alt="Accessibility settings"></div>


<header>
<div id="header-boilerplate"></div>
`

out += bp_appHeader('/shared/images/world.gif',template.title.replace(/ Character app/i,''),'v27');

out += `</header>

<!-- ACCESSIBILITY PANEL  -->
<div id="access" style="display: none;">
<div id="access_contrast">
<div id="contrastChoice">
<button id="contrastLow" class="access_selected" onClick="document.querySelector('body').classList.remove('contrast');
	defaults.contrast = 'low'; 
    this.classList.add('access_selected'); 
    this.nextSibling.classList.remove('access_selected');
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)">Low contrast</button><button id="contrastHigh" onClick="
    document.querySelector('body').classList.add('contrast');
	defaults.contrast = 'high';
    this.classList.add('access_selected'); 
    this.previousSibling.classList.remove('access_selected');
	if (localStorage.pickersStore) localStorage[thisPicker] = JSON.stringify(defaults)">High contrast</button>
</div>
</div>
<div id="access_fontsize">Set text size: <input type="range" min="17" max="24" step="1" value="17" oninput="document.querySelector('body').style.fontSize = this.value+'px'" style="width:12rem;"></div>
<div style="color: white;">Font size of the selection panel and text box are set using the controls below.</div>
<div style="margin-block-start: 1rem; font-size: 1.4rem; color: black; cursor:pointer;" onclick="this.parentNode.style.display='none';">Close X</div>
</div>


<div id="welcome"></div>


<div id="topControls" style="position:relative;">
<span id="copydelete">
  <img title="Copy to clipboard." onclick="copyToClipboard()" src="../shared27/images/copy.png" alt="Copy" style="vertical-align: bottom;" onmouseover="showMenuText(this.title,\'tan\');" onmouseout="hideMenuText()">
  <img title="Select all the text." onclick="selectAll()" src="../shared27/images/select.png" alt="Select" style="vertical-align: bottom;" onmouseover="showMenuText(this.title,\'tan\');" onmouseout="hideMenuText()">
  <img title="Generate a URL including text." onclick="makeSharingLink()"  src="../shared27/images/share.png" alt="Share" onmouseover="showMenuText(this.title,\'tan\');" onmouseout="hideMenuText()">
  <img title="Add some sample text." onclick="add('` + template.sample +`')" src="../shared27/images/sample.png" alt="Sample" onmouseover="showMenuText(this.title,\'tan\');" onmouseout="hideMenuText()">
  <img title="Toggle invisible code points." onclick="toggleInvisibles()" src="../shared27/images/toggle.png" alt="Toggle" style="vertical-align: bottom;" onmouseover="showMenuText(this.title,\'tan\');" onmouseout="hideMenuText()">`
  if (typeof window.charCheckerList !== 'undefined') out += `<img title="Check the text for non-recommended characters or sequences." onclick="charChecker();" src="../shared27/images/checker.png" alt="Checker" onmouseover="showMenuText(this.title,\'tan\');" onmouseout="hideMenuText()">` // charCheckerList is defined in localcode.js
  if (typeof fontDB !== 'undefined') out += `<img title="Open the font preview panel." style="margin-left:.5em;" onclick="if (document.getElementById('fontPicker').innerHTML=='') { document.getElementById('fontPicker').innerHTML = createFontPicker(); document.getElementById('fontManagementDetails').style.display='block'} else { document.getElementById('fontPicker').innerHTML=''; document.getElementById('fontManagementDetails').style.display='none'}" src="../shared27/images/fonts.png" alt="Fonts" onmouseover="showMenuText(this.title,\'tan\');" onmouseout="hideMenuText()">`
  out += `<img title="Delete all the text." onclick="deleteAll()" src="../shared27/images/clear.png" alt="Clear" style="margin-left: 1em;" onmouseover="showMenuText(this.title,\'tan\');" onmouseout="hideMenuText()">
<a class="interactiveHelpButton" href="help/#topLeftIcons" target="_help"><button title="Help with the icons."><img alt="help" src="../images/help.png"/></button></a>
  </span>
  
  
<span id="tools">
<a class="interactiveHelpButton" style="margin-right:.5em;" href="help/#topRight" target="_help" title="Help for top level controls."><img alt="help" src="../images/help.png"/></a>
    
<button onclick="showCodepoints()" title="Show a list of code points for each character." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">List<br>characters</button>

<button  id="showDB" type="button" onclick="getDBInfo(template.blocklocation,defaults.language,template.direction, false)" 
title="Show information in the database for each character."  onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Analyse<br>text</button>

 ` 

/*
for (let i=0;i<window.controls.length;i++){
	out += '<button onclick="'+window.controls[i].code+'" '
	if (typeof window.controls[i].warning === 'undefined') warningMsg = ''
    if (window.controls[i].warning) {
        var warningMsg = window.controls[i].warning+'<br/><small>See help file for more information</small>.'
        var warningLocn = "document.getElementById(\'warning\')"
        out += 'onmouseover="'+warningLocn+'.style.display=\'inline-block\'; '+warningLocn+'.innerHTML = \''+warningMsg+'\'"; showMenuText(this.title,\'tan\')" '
        out += 'onmouseout="'+warningLocn+'.style.display=\'none\'; hideMenuText()" '
        }
    out += 'title="'+window.controls[i].alt+'">'+window.controls[i].title+'</button>\n\n'
	}
*/


for (let i=0;i<window.controls.length;i++){
	out += '<button onclick="'+window.controls[i].code+'" '
	if (typeof window.controls[i].warning === 'undefined') warningMsg = ''
    else {
        var warningMsg = window.controls[i].warning+'<br/><small>See help file for more information</small>.'
        var warningLocn = "document.getElementById(\'warning\')"
        }
    out += 'onmouseover="showMenuText(this.title,\'tan\');'
    if (warningMsg) out += warningLocn+'.style.display=\'inline-block\'; '+warningLocn+'.innerHTML = \''+warningMsg+'\';'
    out += '" '
    out += 'onmouseout="hideMenuText();'
    if (warningMsg) out += warningLocn+'.style.display=\'none\';'
    out += '" '
    out += 'title="'+window.controls[i].alt+'">'+window.controls[i].title+'</button>\n\n'
	}

out += ` 
<button onclick="openVocabWindow(template.vocablocation); return false;" title="Search for examples containing the highlighted text." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Find<br>examples</button>

<button  id="makeExample" onclick="makeExample(defaults.language,template.direction)" title="Create source code for an example." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Example<br>markup</button>
    
<button  id="makeCharLink" type="button" onclick="makeCharLink(template.blocklocation,defaults.language,template.direction)" title="Create source code for a character link." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Character<br/>markup</button>

<a class="interactiveHelpButton" href="help/#functionPulldown" target="_help" title="Help with type-assist and other input aids."><img alt="help" src="../images/help.png"/></a>

<img src="../shared27/images/menu.png" alt="More controls" style="vertical-align: bottom; cursor:pointer;" onclick="if (document.getElementById(\'pulldown\').style.display===\'none\') {document.getElementById(\'pulldown\').style.display=\'block\'} else { document.getElementById(\'pulldown\').style.display=\'none\'}; document.getElementById(\'shuttle\').style.display=\'none\'; document.getElementById(\'output\').focus();"/>

<a class="interactiveHelpButton" href="help/#exportPulldown" target="_help" title="Help with type-assist and other input aids."><img alt="help" src="../images/help.png"/></a>

<img src="../shared27/images/transfer.png" alt="Export to other apps" style="vertical-align: bottom; cursor:pointer; margin-inline-end: 1em;" onclick="if (document.getElementById(\'shuttle\').style.display===\'none\'){document.getElementById(\'shuttle\').style.display=\'block\'} else { document.getElementById(\'shuttle\').style.display=\'none\' }; document.getElementById(\'pulldown\').style.display=\'none\'; document.getElementById(\'output\').focus();"/>
</span>


<div id="shuttle" style="display:none;" onMouseUp="this.style.display=\'none\'; document.getElementById(\'output\').focus();">
<div>
`

if (template.vocablocation) out += `
<button onclick="openVocabWindow(template.vocablocation); return false;" title="Search for examples containing the highlighted text." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Find examples</button>

`

out += `
<button onclick="openEscapeWindow(); return false;" title="Convert to escapes." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Convert to escapes</button>

<button onclick="openUniViewWindow(); return false;" title="Open in UniView." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show in UniView</button>

<button onclick="openUniViewUniqueWindow(); return false;" title="Show each unique character in UniView." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show in UniView (unique)</button>

<button onclick="openAnalyseWindow(); return false;" title="Open in Analyse String app." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show in Analyse String</button>

<button onclick="openListWindow(); return false;" title="Open in List Characters app." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show in List Characters</button>

<button onclick="openUsageWindow(); return false;" title="Open in Character Usage app." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show in Character Usage</button>

<button onclick="openFontlistWindow('`+template.scriptcode.toLowerCase()+`'); return false;" title="Open in Font Lister app." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show in Font Lister</button>

<button onclick="openListcatsWindow(); return false;" title="Open in List by category app." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Triage by category</button>

<button onclick="openListbidiWindow(); return false;" title="Open in Triage Bidi app." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Triage by bidi class</button>

<button onclick="openListlinebreakWindow(); return false;" title="Open in Triage for Linebreaking  app." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Triage for line breaking</button>

<button onclick="openListindicWindow(); return false;" title="Open in Triage for Indic_Syllabic_Category app." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Triage by Indic category </button>`

if (template.noteslocation) out += `
<button onclick="openScriptPageWindow(); return false;" title="View first character in selection in a page that describes the script." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Script notes</button>`

if (template.blocklocation) out += `
<button onclick="openBlockPageWindow(); return false;" title="View notes for first character in selection." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Character notes</button>
`

out += `
<span id="closeShuttle" onclick="document.getElementById(\'shuttle\').style.display=\'none\'; document.getElementById(\'output\').focus();">X</span>
</div>
</div>



<div id="pulldown" style="display:none;" onMouseUp="this.style.display=\'none\'; document.getElementById(\'output\').focus();">
<div>

<!--button onclick="openEscapeWindow(); return false;" title="Convert to escapes (in a separate window)." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Convert to<br/>escapes</button><br/-->

<button  id="showDBAll" type="button" onclick="getDBInfo(template.blocklocation,defaults.language,template.direction, true)" title="Show all information in the database for each character." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show all db entries</button>

<button  id="vocab2Markup" type="button" onclick="vocab2Markup(getHighlightedText(document.getElementById('output')))" title="Convert a vocab entry to example markup." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Vocab to markup</button>

<button  id="sortAll" type="button" onclick="document.getElementById('output').value = sortOutput(document.getElementById('output').value, unique=false, word=false)" title="Reorder all characters in ascending order of Unicode code position." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Sort characters</button>

<button  id="sortAllUnique" type="button" onclick="document.getElementById('output').value = sortOutput(document.getElementById('output').value, unique=true, word=false)" title="Keep one of each character and sort in ascending order of Unicode code position." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Unique sort</button>

<button  id="sortWord" type="button" onclick="document.getElementById('output').value = sortOutput(document.getElementById('output').value, unique=false, word=true)" title="Split on white space and sort in ascending order of Unicode code position." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Word sort</button>

<button  id="showIPA" type="button" 
onclick="getDBInfo(template.blocklocation,defaults.language,template.direction, false); document.getElementById('transcriptionWrapper').style.display='none'; sieveForIPA();" 
title="For each character, show IPA equivalents from the database." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show IPA data</button>

<button  id="showTranscription" type="button" 
onclick="getDBInfo(template.blocklocation,defaults.language,template.direction, false); document.getElementById('transcriptionWrapper').style.display='none'; sieveFor('analysisTransc');" 
title="For each character, show transcription equivalents from the database." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Show transcription data</button>
    `

if (template.bicameral) out += `

<button  id="makeUpperCase" type="button" onclick="add(getHighlightedText(document.getElementById('output')).toUpperCase());document.getElementById('output').focus();" title="Convert the highlighted text to uppercase." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Uppercase</button>

<button  id="makeLowerCase" type="button" onclick="add(getHighlightedText(document.getElementById('output')).toLowerCase());document.getElementById('output').focus();" title="Convert the highlighted text to lowercase." onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()">Lowercase</button>
`

if (window.pulldown) {
/*for (let i=0;i<window.pulldown.length;i++){
	out += '<button onclick="'+window.pulldown[i].code+'" '
	
    if (window.pulldown[i].warning) {
        var warningMsg = window.pulldown[i].warning+'<br/><small>See help file for more information</small>.'
        var warningLocn = "document.getElementById(\'warning\')"
        out += 'onmouseover="'+warningLocn+'.style.display=\'inline-block\'; '+warningLocn+'.innerHTML = \''+warningMsg+'\'; showMenuText(this.title,\'tan\')" '
        out += 'onmouseout="'+warningLocn+'.style.display=\'none\'; hideMenuText()" '
        }
    out += 'title="'+window.pulldown[i].alt+'">'+window.pulldown[i].title+'</button><br/>\n\n'
	}*/
for (let i=0;i<window.pulldown.length;i++){
	out += '<button onclick="'+window.pulldown[i].code+'" '
	if (typeof window.pulldown[i].warning === 'undefined') warningMsg = ''
    else {
        var warningMsg = window.pulldown[i].warning+'<br/><small>See help file for more information</small>.'
        var warningLocn = "document.getElementById(\'warning\')"
        }
    out += 'onmouseover="showMenuText(this.title,\'tan\');'
    if (warningMsg) out += warningLocn+'.style.display=\'inline-block\'; '+warningLocn+'.innerHTML = \''+warningMsg+'\';'
    out += '" '
    out += 'onmouseout="hideMenuText();'
    if (warningMsg) out += warningLocn+'.style.display=\'none\';'
    out += '" '
    out += 'title="'+window.pulldown[i].alt+'">'+window.pulldown[i].title+'</button>\n\n'
	}
	}

	out += `
	<span id="closePulldown" onclick="document.getElementById(\'pulldown\').style.display=\'none\'; document.getElementById(\'output\').focus();">X</span>
    </div>
</div>
</div>

<div id="outputDiv" style="position: relative;">
<div id="warning"></div>
<div>
`

out += '<div id="fontPicker">'
out += `</div>`


out += `<details id="fontManagementDetails" style="display: none;">
<summary>manage fonts</summary>

<div style="display:flex; flex-wrap: nowrap; flex-direction:row;">
<div id="userFontMgt" class="control" style="width: 50em; height: 6em;padding: .5em; display: flex; flex-direction: row; flex-wrap: nowrap; align-items: start;">
<span style="padding-right: 1em; flex:4; text-align:start;">List fonts you want to add to the font selection lists. One font name per line.</span>
<textarea id="fontManagementList" style="flex:6; height: 100%;"></textarea>
<button style="flex:.5; margin-left:.5em;" onclick="manageUserFonts(document.getElementById('fontManagementList').value); document.getElementById('fontPicker').innerHTML = createFontPicker()">Set</button>
</div>


<div class="control" style="width: 10px;" onclick="document.getElementById('fontManagementList').value = escapeNonASCII(JSON.stringify(autoTranslitArray));document.getElementById('fontManagementList').select();"
</div>

<a class="interactiveHelpButton" href="help/#manage_fonts" target="_help" title="Help with font management controls."><img alt="help" src="../images/help.png"/></a>
</div>
</details>
`



out += `<textarea dir="auto" id="output" name="output" placeholder="›" lang="`
+ defaults.language +
`"></textarea>
</div>

<div id="listOutput">
<!--button onclick="document.getElementById('listOutputHorizontal').textContent = document.getElementById('listOutputHorizontal').textContent.replace(/⸱/g,'')" style="float:right">Remove •</button-->
<!--button onclick="add(document.getElementById('listOutputHorizontal').textContent.replace(/⸱/g,''))" style="float:right">Add ^</button-->
<button onclick="addXitems()" style="float:right">Add ^</button>
<p id="listOutputHorizontal"></p>
<!--pre id="listOutputHorizontal" contenteditable></pre-->
<pre id="listOutputVertical"></pre>
<p id="listOutputClose" onclick="document.getElementById('listOutput').style.display='none'">X</p>
</div>

<div id="charChoice"></div>
 <div id="transcriptionChoice"></div>
</div>




<div id="transcriptionWrapper">
<a class="interactiveHelpButton" href="help/#secondary_output" target="_help" style= "float: left; margin: 1em 1em 0 1em;" title="Help with the secondary text area."><img alt="help" src="../images/help.png"/></a>
<div id="copyTranscription" onclick="copyTranscription()"><img src="../shared27/images/copy.png" alt="Copy"></div>
<div id="moveTranscription" onclick="moveTranscription()"><img src="../shared27/images/move.png" alt="Move"></div>
<div id="closeTranscription" onclick="closeTranscription()">X</div>
<div id="transcription" contenteditable="true"></div>
</div>



<div id="autofocusswitch">
<a class="interactiveHelpButton" style="margin-right:.5em;" href="help/#autofocus" target="_help" title="Help with autofocus and direction."><img alt="help" src="../images/help.png"/></a>
`

if (template.direction == "rtl" || template.direction == "bidi") {
    out += `
    <img title="Set base direction to LTR." onclick="document.getElementById('output').dir='ltr'; clearBidiOverride()" class="setDir" src="../shared27/images/arrows/ltr.png" alt=">" onmouseover="showMenuText(this.title,'tan');" onmouseout="hideMenuText()">
    <img title="Set base direction to Auto." onclick="document.getElementById('output').dir='auto'; clearBidiOverride()" class="setDir" src="../shared27/images/arrows/auto.png" alt="<>" onmouseover="showMenuText(this.title,'tan');" onmouseout="hideMenuText()">
    <img title="Set base direction to RTL." onclick="document.getElementById('output').dir='rtl'; clearBidiOverride()" class="setDir" src="../shared27/images/arrows/rtl.png" alt="<" onmouseover="showMenuText(this.title,'tan');" onmouseout="hideMenuText()">
    <img title="Set base direction to LTR override." onclick="document.getElementById('output').dir='ltr'; setBidiOverride('ltr',false)" class="setDir" src="../shared27/images/arrows/lro.png" alt=">>" onmouseover="showMenuText(this.title,'tan');" onmouseout="hideMenuText()">
    <img title="Set base direction to RTL override." onclick="document.getElementById('output').dir='rtl'; setBidiOverride('rtl',false)" class="setDir" src="../shared27/images/arrows/rlo.png" alt="<<" onmouseover="showMenuText(this.title,'tan');" onmouseout="hideMenuText()">
     &bull; 
    `
    }
if (template.direction == "bidi") {
    out += `
    <img title="Set base direction to RTL override, and reverse character glyphs." onclick="document.getElementById('output').dir='ltr'; setBidiOverride('rtl',true)" class="setDir" src="../shared27/images/arrows/mirror.png" alt="<<<" onmouseover="showMenuText(this.title,'tan');" onmouseout="hideMenuText()">
     &bull; 
    `
    }

    
out += `<span id="autofocus" onclick="toggleAutofocus()" onmouseover="showMenuText('Stop the virtual keyboard opening every time you select a character (for mobile devices).','tan');" onmouseout="hideMenuText()">Autofocus <span id="autofocusState">On</span></span>
    </div>

	<span id="cursive" dir="rtl"></span>
   `


out += `
</div>
</div>

`
return out
}




function setSideMenu () {

out = ''

if (inputAids.length > 0) {
	out += `
    <div style="position:relative;">
    <div id="vertical-menu">
	<div class="vmtab off"><a class="interactiveHelpButton" href="help/#inputAids" target="_help" title="Help with type-assist and other input aids."><img alt="help" src="../images/help.png"/></a></div>
    `
	}


for (let i=0;i<inputAids.length;i++) {

	// change the short labels, where needed
    if (inputAids[i].dataShortTitle === 'æ')  inputAids[i].dataShortTitle = '[...]'
    if (inputAids[i].dataShortTitle === 't')  inputAids[i].dataShortTitle = '<..>'
    if (inputAids[i].dataShortTitle === 'k')  inputAids[i].dataShortTitle = '⌨'
	
	// finish up the assignments
    if (!inputAids[i].initialCode)  inputAids[i].initialCode = ''
    if (inputAids[i].id === 'showShapeLookup') inputAids[i].initialCode = `if (this.classList.contains('on')) { document.getElementById('shapelist').style.display = 'none' } else { document.getElementById('shapelist').style.display = 'block' }`
    if (inputAids[i].id === 'showShapeHints') inputAids[i].initialCode = `if (this.classList.contains('on')) { globals.showShapeHints = false; } else { globals.showShapeHints = true; }`
    if (inputAids[i].type === 'palette') inputAids[i].onClickCode = `if (this.classList.contains('on')) closeSidebarPalettes(this); else { closeSidebarPalettes(this);`+inputAids[i].initialCode+ `; this.classList.add('on');this.classList.remove('off');}`    
    else inputAids[i].onClickCode = inputAids[i].initialCode + `; if (this.classList.contains('on')) { this.classList.remove('on'); this.classList.add('off'); } else { this.classList.remove('off'); this.classList.add('on') }`
    if (! inputAids[i].desc) inputAids[i].desc = inputAids[i].title
    
    // create basic markup
	out += `<div class="vmtab off`
    if (inputAids[i].type === 'palette') out += ' palette'
    out += `" title="`+inputAids[i].desc+`"`
    out += ` data-title="`+inputAids[i].title+`"`
    //out += ` data-locn="`+inputAids[i].dataLocn+`"`
    out += ` data-shorttitle="`+inputAids[i].dataShortTitle+`"`
    out += ` onMouseOver="showMenuText(this.dataset.title,'#666')"`
    out += ` onMouseOut="hideMenuText()"`
    out += ` onclick="` + inputAids[i].onClickCode + `"`
    
    // add ids for specific types
    if (inputAids[i].id) out += ' id="'+inputAids[i].id+'"'
    out += '>'
    
    out += inputAids[i].dataShortTitle
    
    out += `</div>
    `
	}

/*
for (let i=0;i<inputAids.length;i++) {
	// finish up the assignments
    if (!inputAids[i].initialCode)  inputAids[i].initialCode = ''
    if (inputAids[i].type === 'palette' || inputAids[i].type === 'typeAssist') inputAids[i].onClickCode = `if (this.classList.contains('on')) closeSidebarPalettes(this); else { closeSidebarPalettes(this);`+inputAids[i].initialCode+ `; this.classList.add('on');this.classList.remove('off');}`
    
    
    //if (inputAids[i].type === 'palette' || inputAids[i].type === 'typeAssist') inputAids[i].onClickCode = `if (globals[this.dataset.var] != '') closeSidebarPalettes(this); else { closeSidebarPalettes(this);`+inputAids[i].initialCode+ `; toggleSideBarOption(this, this.dataset.title, this.dataset.var, this.dataset.locn)}`
    else inputAids[i].onClickCode = inputAids[i].initialCode + `; toggleSideBarOption(this, this.dataset.title, this.dataset.var, this.dataset.locn)`
    if (! inputAids[i].desc) inputAids[i].desc = inputAids[i].title
    
    // create basic markup
	out += `<div class="vmtab off`
    if (inputAids[i].type === 'palette') out += ' palette'
    out += `" title="`+inputAids[i].desc+`"`
    out += ` data-title="`+inputAids[i].title+`"`
    out += ` data-var="`+inputAids[i].dataVar+ `"`
    out += ` data-locn="`+inputAids[i].dataLocn+`"`
    out += ` data-shorttitle="`+inputAids[i].dataShortTitle+`"`
    out += ` onMouseOver="showMenuText(this.dataset.title,'#666')"`
    out += ` onMouseOut="hideMenuText()"`
    out += ` onclick="` + inputAids[i].onClickCode + `"`
    
    // add ids for specific types
    if (inputAids[i].dataVar==="showLatinTrans") out += ' id="showLatinTransSwitch" '
    if (inputAids[i].default && inputAids[i].default===true) out += ' id="showRevTransSwitch" '
    if (inputAids[i].dataVar==="typeAssist") out += ' id="showRevTransSwitch" '
    //if (inputAids[i].dataVar==="showShapeHints") out += ' id="showShapeHints" '
    out += '>'
    
    out += inputAids[i].dataShortTitle
    
    out += `</div>
    `
	}


*/

if (template.hints) out += `<div id="hintControls" onMouseOver="document.getElementById('closeHintType').style.display='block'"  onMouseOut="document.getElementById('closeHintType').style.display='none'">
<div id="keyHintType" onClick="if (this.style.color!=='white'){setGridHints('none');} else{setGridHints('key')}" onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()" title="Show keypress hints.">K</div>

<div id="translitHintType" onClick="if (this.style.color!=='white'){setGridHints('none');} else{setGridHints('translit')}" onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()" title="Show transliteration hints.">T</div>

<div id="ipaHintType" onClick="if (this.style.color!=='white'){setGridHints('none');} else{setGridHints('ipa')}" onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()" title="Show IPA hints.">P</div>

<div id="closeHintType" style="display:none" onClick="setGridHints('none');" onMouseOver="showMenuText(this.title,'tan')" onMouseOut="hideMenuText()" title="Remove all IPA hints.">X</div>
`

out += `
<div><a class="interactiveHelpButton" href="help/#ktpHints" target="_help" title="Help with type-assist and other input aids."><img alt="help" src="../images/help.png"/></a></div>
</div>
`
return out
}


function getBottom () {
var out
out = `
  <div id="helpBanner" style="text-align: center;color: white;background-color: #60ADFB;">
  <div style="float:right; margin:1em;" onclick="hideCSHelp()">X</div>
  <div><a href="help/" target="_help">Get basic information</a> about how to use this app.</div>
  <div style="font-size:80%">For context-sensitive help, click on one of these icons: <img src="../images/help.png" alt=""/></div>
  </div>
  

<div id="controlBox">

<div id="controls">
  <div class="control">Current font:<br />
    <select id="fontList" name="fontList" onchange="selectFont(this.value); return false;">
` +
  fontSelection
  +
 `
 	    </select>
 </div>
  <!--div class="control">Add another font:<br />
    <form action="none" onsubmit="customFont(document.getElementById('fontName').value); return false;">
      <input name="fontName" id="fontName" value="`+defaults.font+`" onclick="this.select();" />
    </form>
  </div-->
  
  
  
  <div class="control">Font size: <span id="sizeIndicator" style="font-size:80%;">`+defaults.size+`</span>px<br />
    <input id="fontSizeSlider" type="range" min="10" max="200" step="1" value="`+defaults.size+`" oninput="changeFontSize(this.value)" style="width:12em;">
  </div>
  
  
  
  <div class="control">Add codepoint(s):
    <form action="none" onsubmit="add(convertCP2Char(getElementById('addcode').value)); return false;">
      <input name="addcode" id="addcode"  type="text" style="width: 10em; text-align:right;" />
    </form>
  </div>
  
<div id="normaliseControl" class="control" title="Change the normalization of the output.">Normalise: <span id="n11nform">NFC</span><br />
<img src="../images/nfc.png" alt="Convert output to Normalization Form C."  title="Convert output to Normalization Form C." 
    onclick="globals.n11n='nfc'; document.getElementById( 'output' ).value=document.getElementById( 'output' ).value.normalize('NFC');
    document.getElementById('n11nform').innerHTML = 'NFC';"/> 
<img src="../images/nfd.png" alt="Convert output to Normalization Form D."  title="Convert output to Normalization Form D."  
    onclick="globals.n11n='nfd'; document.getElementById( 'output' ).value=document.getElementById( 'output' ).value.normalize('NFD');
    document.getElementById('n11nform').innerHTML = 'NFD';"/> 
<img src="../images/nfx.png" alt="Don't normalise output."  title="Don't normalise output."  
    onclick="globals.n11n='none'; document.getElementById('n11nform').innerHTML = 'None';"/>
    </div>

<a class="interactiveHelpButton" href="help/#yellowControls" target="_help" title="Help with main yellow controls." style="margin: 1rem;"><img alt="help" src="../images/help.png"/></a>

<div class="control" id="helpcontrol" onclick="showCSHelp();return false;" accesskey="h">Help<br/><img src="../images/help.png" alt=""/></div>
</div>



<div id="fontManager">
</div>




<div id="extracontrols">


<div class="control">Line height: <span id="lineHeight" style="font-size:80%;">`+defaults.lineheight+`</span><br />
<input id="lineHeightSlider" type="range" min=".5" max="5" step=".1" value="`+defaults.lineheight+`" oninput="changeLineHeight(this.value); document.getElementById('lineHeight').textContent=this.value;" style="width:10em;">
</div>


<div class="control" id="ccVariousControls" style="vertical-align: top;">Change text:<br/> <img src="../images/addspace.png" alt="Select" title="Separate the characters in the edit buffer with spaces." onclick="addSpacesToPicker(' ');">
          <img src="../images/collapsespaces.png" alt="Select" title="Collapse multiple spaces to a single space." onclick="document.getElementById('output').value = document.getElementById('output').value.replace(/[ ]+/g,' ')">
          <img src="../images/collapselines.png" alt="Select" title="Collapse line breaks to spaces." onclick="document.getElementById('output').value = document.getElementById('output').value.replace(/\\n/g,' ')">
          <img src="../images/removespace.png" alt="Select" title="Remove all white space from the text area." onclick="document.getElementById('output').value = document.getElementById('output').value.replace(/\\s/g,'')">
          <input name="insertMe" id="insertMe"  type="text" style="width: 40px; text-align:right; vertical-align: top; line-height: 1;" value="␣" />
          <img src="../images/addcomma.png" alt="Select" title="Separate the characters in the edit buffer with commas." onclick="addSpacesToPicker(document.getElementById('insertMe').value);">
          <img src="../images/count.png" alt="Count" title="Count the characters in the text area." onclick="if (document.getElementById('output').value== '') { alert('None.'); } else { count=[...document.getElementById('output').value]; alert(count.length); }">
</div>



<!--div class="control">Remove:
<form action="none" onsubmit="removeCharacter(document.getElementById('charRemoval').value); return false;">
  <input name="charRemoval" id="charRemoval"  type="text" style="width: 40px; text-align:right;" />
  <button>Go</button>
</form>
</div-->


<div class="control">Replace:
<form action="none" onsubmit="removeCharacter(document.getElementById('charRemoval').value, document.getElementById('charReplacement').value); return false;">
  <input name="charRemoval" id="charRemoval"  type="text" style="width: 40px; text-align:right; line-height: 1;" />
  <input name="charReplacement" id="charReplacement"  type="text" style="width: 40px; text-align:right; line-height: 1;" />
  <button>Go</button>
</form>
</div>




<div class="control">Search for:
    <form action="none" onsubmit="searchFor(getElementById('search').value, 'myanmar'); return false;">
      <input name="search" id="search"  type="text" style="width: 7em;"/>
      <img src="../images/clearsearch.png" onclick="searchFor('xxxxxx', 'myanmar');" style="cursor: pointer; vertical-align:top; margin:0 0px 0 0; border:0; padding:0; height: 15px;" alt="Clear search results." title="Clear search results." />
    </form>
  </div>
  



<div class="control" id="ccFactoryReset">Reset<br/><button onClick="resetDefaults()">Go</button>
</div>
</div>
`

out += `
<details>
    <summary style="margin-left:20px">more..</summary>
  

<div id="moreControls">

<div class="control">Set language:
<form action="none" onsubmit="setLanguage(document.getElementById('langtag').value); return false;">
  <input name="langtag" id="langtag"  type="text" style="width: 40px; text-align:right;" />
  <button onClick="setLanguage(document.getElementById('langtag').value)">Set</button>
</form>
</div>



<div class="control" id="ccBaseControl">CC base:<br />
    <select id="ccBase" name="ccBase" onchange="selectCCBase(this.value); return false;">
		<option value="0">Select...</option>
        <option value="">none</option>
        <option value="&#x00A0;">NBSP</option>
        <option value=" ">SP</option>
        <option value="◌">◌</option>
        <option value="-">-</option>
		</select>
</div>`


if (template.direction == 'rtl') {
    out += `
    
     <div class="control" id="uiTableDirection" style="text-align:right;">Table direction:<br />
    <select onChange="changeSelectionDirection(this.value); return false;">
    <option value="rtl">RTL</option>
    <option value="ltr">LTR</option>
    </select>
    </div>
   
    `
    }

out += `<input style="display:none" name="fontSize" value="35" id="fontSize" size="3" onchange="changeFontSize(this.value);">

  
<div class="control" id="boxHeightControl">Box height: <span id="rows" style="font-size:80%;">`+defaults.rows+`</span>px<br />
<input id="boxHeightSlider" type="range" min="50" max="500" step="10" value="`+defaults.rows+`" oninput="changeBoxHeight(this.value)"  style="width:10em;">
</div>

<div class="control" id="uiFontControl">Change selection area font:<br />
<select id="uiFont" name="uiFont" onchange="setUIFont(this.value); return false;">
` + fontSelection + `</select>
</div>

<div class="control" id="uiFontSizeControl">...&amp; size: <span id="uiFontSizeValue" style="font-size:80%;">`+defaults.uisize+`</span>px<br />
<input id="uiFontSizeSlider" type="range" min="20" max="40" step="1" value="`+defaults.uisize+`" oninput="setUIFontSize(this.value);"  style="width:6em;"></div>

</details>



</div>




`

out += `<div id="seeAlso">`


if (template.scriptcode) {
    out += `<details>
    <summary>related links</summary>
    <div id="linklist">`

    //out += getData(template.scriptcode)
    
    if (template.noteslocation) out += '<a href="../../scripts/' + template.noteslocation + '" target="_blank">Script notes</a><br/>\n'
    if (template.blocklocation) out += '<a href="../../scripts/' + template.blocklocation + '/block" target="_blank">Character notes</a><br/>\n'
    out += '<a href="../../scripts/links?iso=' + template.scriptcode + '" target="_blank">Script-related links for '+template.scriptcode+'</a><br/>\n'
    out += '<a href="../../app-charuse?language=' + defaults.language + '" target="_blank">Character usage for '+defaults.language+'</a><br/>\n'
    out += `
    	<a onclick="this.href = '../../uniview/?charlist='+getHighlightedText(_output)" target="_blank" href="#">UniView</a><br/>
    	<!--a onclick="this.href = '../../app-listcharacters/?chars='+getHighlightedText(_output)" target="_blank" href="#">List characters</a><br/>
    	<a onclick="this.href = '../../app-conversion/?q='+getHighlightedText(_output)" target="_blank" href="#">Character converter</a-->
    	</div>`
    
    out += '</details>'
    }
    
out += `<details>
<summary>more character apps</summary>
<iframe id="pickerlist" src="../pickerlist"></iframe>
</details>
`
if ((typeof(footnotes) !== 'undefined')) {
    out += `
    <details>
    <summary>* [footnotes]</summary>
    `
    out += footnotes
    out += `
    </details>
    `
    }

out += `
</div>
</div>
</div>

</div>





<div id="panel" style="display:none">
	<div id="title" class="ex" lang="`+defaults.language+`"></div>
  <div style="display:block">&nbsp;</div>
  <p style="text-align:right;"></p>
</div>



<div class="smallprint">
Updates on <a href="https://twitter.com/r12a" target="_blank">Twitter</a>.
See <a target="_blank" href="https://github.com/r12a/pickers/tree/gh-pages/`+template.github+`">recent changes</a>.
Make a <a target="_blank" href="https://github.com/r12a/pickers/issues/new?title=[`+template.github+`]%20%20ADD%20TITLE%20HERE">comment</a>. 
Licence <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-By</a> © <a href="mailto:r12a@w3.org">r12a</a> 
</div>
`
return out
}


window.msgStore = ''

function showMenuText (msg, colour) {
	// shows an explanation of the vertical menu selection on mouseover
	node = document.getElementById('chardata')
	window.msgStore = node.innerHTML
	node.textContent=msg
	node.style.backgroundColor=colour
	node.style.color='white'
	node.style.paddingInlineStart = "1em"
	}

function hideMenuText () {
	// hides an explanation of the vertical menu selection on mouseover
	node = document.getElementById('chardata')
	node.style.backgroundColor='white'
	node.style.color='tan'
	node.style.paddingInlineStart = "0"
	node.innerHTML = window.msgStore
	}
