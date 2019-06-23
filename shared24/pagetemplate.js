


function setBidiOverride (mirror) {
    // used by the small arrows below the input area when picker base direction is bidi
    // sets the direction to rlo with optional mirroring
    // mirror: boolean, sets the mirroring if true
    
    if (mirror) {
        document.getElementById('output').classList.add('mirrorRTL')
        document.getElementById('output').classList.add('bdoLTR')
        document.getElementById('output').classList.remove('bdoRTL')
        }
    else {
        document.getElementById('output').classList.remove('mirrorRTL')
        document.getElementById('output').classList.remove('bdoLTR')
        document.getElementById('output').classList.add('bdoRTL')
        }
    }

function clearBidiOverride () {
    // used by the small arrows below the input area when picker base direction is bidi
    // clears the rlo and any mirroring
    
    document.getElementById('output').classList.remove('bdoRTL')
    document.getElementById('output').classList.remove('mirrorRTL')
    document.getElementById('output').classList.remove('bdoLTR')
    }



function setTop (title,sample) {
console.log(setTop)
var out
out = `<button id="contrastSwitch" title="Change the contrast level." onclick="toggleContrast()">🌓</button>
<a class="interactiveHelpButton" style="float:right; margin-right:.5em;" href="help/#contrast" target="_help" title="Help with contrast."><img alt="help" src="../images/help.png"/></a>

<header>
<div id="header-boilerplate"></div>
`

out += bp_appHeader('/shared/images/world.gif',template.title,'v24');

out += `</header>


<div id="welcome"></div>


<div id="topControls">
<span id="copydelete">
  <button title="Copy to clipboard." onclick="copyToClipboard()">📋</button>
  <button title="Select all the text." onclick="selectAll()">🔶</button>
  <button title="Toggle invisible code points." onclick="toggleInvisibles()">⛶</button>
  <button title="Delete all the text." onclick="deleteAll()">❌</button>
  <button title="Generate a URL including text." onclick="makeSharingLink()"><img height="19px" style="margin-left: 3px;" src="../images/share.png" alt="URL"/></button>
  <button title="Add sample text." style="font-size: 150%;" onclick="add('` + template.sample +`')">+</button>
<a class="interactiveHelpButton" href="help/#icons" target="_help"><button title="Help with the icons."><img alt="help" src="../images/help.png"/></button></a>
  </span>
  
  
<span id="tools">
<a class="interactiveHelpButton" style="margin-right:.5em;" href="help/#top_controls" target="_help" title="Help for top level controls."><img alt="help" src="../images/help.png"/></a>
    <button onclick="showCodepoints()">Show<br/>codepoints</button>
    
 ` 
	
for (let i=0;i<window.controls.length;i++){
	out += '<button onclick="'+window.controls[i].code+'" '
    if (window.controls[i].warning) {
        var warningMsg = window.controls[i].warning+'<br/><small>See help file for more information</small>.'
        var warningLocn = "document.getElementById(\'warning\')"
        out += 'onmouseover="'+warningLocn+'.style.display=\'inline-block\'; '+warningLocn+'.innerHTML = \''+warningMsg+'\'" '
        out += 'onmouseout="'+warningLocn+'.style.display=\'none\'" '
        }
    out += 'title="'+window.controls[i].alt+'">'+window.controls[i].title+'</button>\n\n'
	}

out += ` 
    <button onclick="openEscapeWindow(); return false;">Convert to<br/>escapes</button>

    <button  id="makeExample" onclick="makeExample(defaults.language,template.direction)" 
    title="Create an example.">Make<br>example</button>
    
    <button  id="makeCharLink" type="button" onclick="makeCharLink(template.blocklocation,defaults.language,template.direction)" 
    title="Create an character link.">Character<br/>markup</button>
    </span>
</div>

<div id="outputDiv" style="position: relative;">
<div id="warning"></div>
<textarea dir="auto" rows="2" cols="80" id="output" name="output" placeholder="›" lang="`
+ defaults.language +
`"></textarea>
<div id="charChoice"></div>
 <div id="transcriptionChoice"></div>
</div>




<div id="transcriptionWrapper">
<a class="interactiveHelpButton" href="help/#secondary_output" target="_help" style= "float: left; margin: 1em 1em 0 1em;" title="Help with the secondary text area."><img alt="help" src="../images/help.png"/></a>
<div id="copyTranscription" onclick="copyTranscription()">📋</div>
<div id="moveTranscription" onclick="moveTranscription()">⌃</div>
<div id="closeTranscription" onclick="closeTranscription()">X</div>
<div id="transcription" contenteditable="true"></div>
</div>



<div id="autofocusswitch">
<a class="interactiveHelpButton" style="margin-right:.5em;" href="help/#autofocus" target="_help" title="Help with autofocus and direction."><img alt="help" src="../images/help.png"/></a>
`

if (template.direction == "rtl" || template.direction == "bidi") {
    out += `
    <span title="Set base direction to LTR." onclick="document.getElementById('output').dir='ltr'; clearBidiOverride()" class="setDir">&#x2192;&#xFE0E;</span>
    <span title="Set base direction to Auto." onclick="document.getElementById('output').dir='auto'; clearBidiOverride()" class="setDir">&#x2194;&#xFE0E;</span> 
    <span title="Set base direction to RTL." onclick="document.getElementById('output').dir='rtl'; clearBidiOverride()" class="setDir">&#x2190;&#xFE0E;</span>  
     <span title="Set base direction to RTL override." onclick="document.getElementById('output').dir='rtl'; setBidiOverride(false)" class="setDir">&#x21D0;&#xFE0E;</span>
     &bull; 
    `
    }
if (template.direction == "bidi") {
    out += `
    <span title="Set base direction to RTL override, and reverse character glyphs." onclick="document.getElementById('output').dir='ltr'; setBidiOverride(true)" class="setDir">&#x2B45;&#xFE0E;</span> 
     &bull; 
    `
    }


out += `Autofocus: 
	<span id="afon" class="on" 
    onclick="switchAutofocus('on')">On</span> 
    <span id="afoff" class="off" 
    onclick="switchAutofocus('off')">Off</span>
    </div>

   `

if (inputAids.length > 0) {
	out += `
    <div style="position:relative;">
    <div id="vertical-menu">

    <!--div class="vmtab" 
	onmouseover="this.textContent='Clear all'" 
    onmouseout="this.textContent='C'"  
    onclick="setSidebarDefaults(this);
     return false;">C</div-->
    `
	}


for (let i=0;i<inputAids.length;i++) {
    if (!inputAids[i].initialCode)  inputAids[i].initialCode = ''
    if (inputAids[i].type === 'palette') inputAids[i].initialCode = 'closeSidebarPalettes(this);'+inputAids[i].initialCode
	out += `<div class="vmtab`
    if (inputAids[i].type === 'palette') out += ' palette'
    out += `" title="`+inputAids[i].title+`" data-var="`+inputAids[i].dataVar+ `" data-locn="`+inputAids[i].dataLocn+`" data-shorttitle="`+inputAids[i].dataShortTitle+`"
    onmouseover="this.textContent=this.title+globals[this.dataset.var]" 
    onmouseout="this.textContent=this.dataset.shorttitle"  
    onclick="if (globals[this.dataset.var] ==''){` + inputAids[i].initialCode + `}toggleSideBarOption(this, this.title, this.dataset.var, this.dataset.locn)"`
    if (inputAids[i].dataVar==="showLatinTrans") out += ' id="showLatinTransSwitch" '
    if (inputAids[i].dataVar==="showTranslit") out += ' id="showRevTransSwitch" '
    out += '>'+inputAids[i].dataShortTitle+`</div>
    `
	}

if (inputAids.length > 0) {
out += `
<a class="interactiveHelpButton" href="help/#input_aids" target="_help" title="Help with input aids."><img alt="help" src="../images/help.png"/></a>
    <div class="vmtab" 
	onmouseover="this.textContent='Clear all'" 
    onmouseout="this.textContent='C'"  
    onclick="setSidebarDefaults(this);
     return false;">C</div>
</div>
</div>

`
	}
return out
}



function getBottom () {
var out
out = `
  <div id="helpBanner" style="text-align: center;color: white;background-color: #60ADFB;">
  <div style="float:right; margin:1em;" onclick="hideCSHelp()">X</div>
  <div><a href="help/" target="_help">Get basic information</a> about how to use this picker.</div>
  <div style="font-size:80%">For context-sensitive help, click on one of these icons: <img src="../images/help.png" alt=""/></div>
  </div>
  
<!--div id="extrashapes"></div-->


<div id="controls">
  <div class="control">Change the text area font:<br />
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
    <input id="fontSizeSlider" type="range" min="20" max="150" step="1" value="`+defaults.size+`" oninput="changeFontSize(this.value)" style="width:10em;">
  </div>
  
  
  
  <div class="control">Add codepoint(s):
    <form action="none" onsubmit="add(convertCP2Char(getElementById('addcode').value)); return false;">
      <input name="addcode" id="addcode"  type="text" style="width: 10em; text-align:right;" />
    </form>
  </div>
  
  
  <div class="control">Search for:
    <form action="none" onsubmit="searchFor(getElementById('search').value, 'myanmar'); return false;">
      <input name="search" id="search"  type="text" style="width: 7em;"/>
      <img src="/pickers/images/clearsearch.png" onclick="searchFor('xxxxxx', 'myanmar');" style="cursor: pointer; vertical-align:top; margin:0 0px 0 0; border:0; padding:0; height: 15px;" alt="Clear search results." title="Clear search results." />
    </form>
  </div>
  
<div id="normaliseControl" class="control" title="Change the normalization of the output.">Normalise: <span id="n11nform">NFC</span><br />
<img src="/pickers//images/nfc.png" alt="Convert output to Normalization Form C."  title="Convert output to Normalization Form C." 
    onclick="globals.n11n='nfc'; document.getElementById( 'output' ).value=document.getElementById( 'output' ).value.normalize('NFC');
    document.getElementById('n11nform').innerHTML = 'NFC';"/> 
<img src="/pickers//images/nfd.png" alt="Convert output to Normalization Form D."  title="Convert output to Normalization Form D."  
    onclick="globals.n11n='nfd'; document.getElementById( 'output' ).value=document.getElementById( 'output' ).value.normalize('NFD');
    document.getElementById('n11nform').innerHTML = 'NFD';"/> 
<img src="/pickers//images/nfx.png" alt="Don't normalise output."  title="Don't normalise output."  
    onclick="globals.n11n='none'; document.getElementById('n11nform').innerHTML = 'None';"/>
    </div>

<a class="interactiveHelpButton" href="help/#yellow_controls" target="_help" title="Help with main yellow controls."><img alt="help" src="../images/help.png"/></a>

<div class="control" id="helpcontrol" onclick="showCSHelp();return false;">Help<br/><img src="../images/help.png" alt=""/></div>
</div>



<div id="fontManager">
</div>




<div id="extracontrols">


<details>
<summary>more controls</summary>
    
  <div class="control" title="One row is 100px. Decimals are ok."><span id="dimensions">Set dimensions:</span><br />
     <input name="fontSize" value="35" id="fontSize" size="3" onchange="changeFontSize(this.value);" onmouseover="document.getElementById('dimensions').textContent='Font size (px):'" onmouseout="document.getElementById('dimensions').textContent='Set dimensions:'" onfocus="document.getElementById('dimensions').textContent='Font size (px):'" onblur="document.getElementById('dimensions').textContent='Set dimensions:'" />
     <input name="rows" value="1.5" id="rows" size="3" onchange="changeBoxHeight(this.value)" onmouseover="document.getElementById('dimensions').textContent='Box height (px):'" onmouseout="document.getElementById('dimensions').textContent='Set dimensions:'" onfocus="document.getElementById('dimensions').textContent='Box height (px):'" onblur="document.getElementById('dimensions').textContent='Set dimensions:'" />
     <input name="lineHeight" value="1.5" id="lineHeight" size="3"  onchange="changeLineHeight(this.value)" onmouseover="document.getElementById('dimensions').textContent='Line height:'" onmouseout="document.getElementById('dimensions').textContent='Set dimensions:'" onfocus="document.getElementById('dimensions').textContent='Line height:'" onblur="document.getElementById('dimensions').textContent='Set dimensions:'" />
  </div>



<div class="control">Set language:
<form action="none" onsubmit="setLanguage(document.getElementById('langtag').value); return false;">
  <input name="langtag" id="langtag"  type="text" style="width: 40px; text-align:right;" />
  <button onClick="setLanguage(document.getElementById('langtag').value)">Set</button>
</form>
</div>



<div class="control" id="ccVariousControls" style="vertical-align: top;">Change text:<br/> <img src="../images/addspace.png" alt="Select" title="Separate the characters in the edit buffer with spaces." onclick="addSpacesToPicker(' ');">
          <img src="../images/removespace.png" alt="Select" title="Remove all spaces from the text area." onclick="document.getElementById('output').value = document.getElementById('output').value.replace(/\\s/g,'')">
          <input name="insertMe" id="insertMe"  type="text" style="width: 40px; text-align:right; vertical-align: top; line-height: 1;" value="␣" />
          <img src="../images/addcomma.png" alt="Select" title="Separate the characters in the edit buffer with commas." onclick="addSpacesToPicker(document.getElementById('insertMe').value);">
          <img src="../images/count.png" alt="Count" title="Count the characters in the text area." onclick="if (document.getElementById('output').value== '') { alert('None.'); } else { alert(document.getElementById('output').value.length); }">
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




out += `<div class="control" id="ccFactoryReset">Reset<br/><button onClick="resetDefaults()">Go</button>
</div>


<a class="interactiveHelpButton" href="help/#more_controls" target="_help" title="Help with more yellow controls."><img alt="help" src="../images/help.png"/></a>


</details>



<details>
<summary>manage fonts</summary>


<div class="control" id="uiFontControl">Change selection area font:<br />
    <select id="uiFont" name="uiFont" onchange="setUIFont(this.value); return false;">
` +
  fontSelection
  +
 `
    </select>
	<input name="uiFontSize" id="uiFontSize"  type="number" onchange="setUIFontSize(document.getElementById('uiFontSize').value); return false;" value=""  style="width: 30px;" />px</div>


<div id="userFontMgt" class="control" style="width: 26em; height: 5em;padding: .5em; display: flex; flex-direction: row; flex-wrap: nowrap; align-items: start;">
<span style="padding-right: 1em; flex:4; text-align:start;">List fonts you want to add to the font selection lists. One font name per line.</span>
<textarea id="fontManagementList" style="flex:6; height: 100%;"></textarea>
<button style="flex:.5; margin-left:.5em;" onclick="manageUserFonts(document.getElementById('fontManagementList').value)">Set</button>
</div>

<a class="interactiveHelpButton" href="help/#manage_fonts" target="_help" title="Help with font management controls."><img alt="help" src="../images/help.png"/></a>

</details>

`


if (template.scriptcode) {
    out += `<details>
    <summary>related links</summary>
    <div id="linklist">`

    out += getData(template.scriptcode)
    
    out += '</details>'
    }
    
out += `<details>
<summary>more pickers</summary>
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





<div id="panel" style="display:none">
	<div id="title" class="ex" lang="`+defaults.language+`"></div>
  <div style="display:block">&nbsp;</div>
  <p style="text-align:right;"></p>
</div>



<div class="smallprint">
See <a href="https://github.com/r12a/pickers/tree/gh-pages/`+template.github+`">recent changes</a>.
Make a <a href="https://github.com/r12a/pickers/issues/new?title=[`+template.github+`%20picker]%20%20ADD%20TITLE%20HERE">comment</a>. 
Licence <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-By</a> © <a href="mailto:r12a@w3.org">r12a</a> 
</div>
`
return out
}