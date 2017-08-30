

function setTop (title,sample) {
console.log(setTop)
var out
out = `<button id="contrastSwitch" title="Change the contrast level." onclick="toggleContrast()">🌓</button>

<header>
<div id="header-boilerplate"></div>
`

out += bp_appHeader('/shared/images/world.gif',template.title,'v21');

out += `</header>


<div id="welcome"></div>

<div id="main">
<span id="copydelete">
  <button title="Copy to clipboard (doesn't work on Safari)." onclick="copyToClipboard()">📋</button>
  <button title="Select all the text." onclick="selectAll()">🔶</button>
  <button title="Delete all the text." onclick="deleteAll()">❌</button>
  <button title="Generate a URL including text." onclick="makeSharingLink()"><img height="19px" style="margin-left: 3px;" src="../images/share.png" alt="URL"/></button>
  <button title="Add sample text." style="font-size: 150%;" onclick="add('` + template.sample +`')">+</button>
<a href="help"><button title="How to use this picker."><img alt="help" src="../shared20/help.png"/></button></a>
  </span>
  
  
<span id="tools">
    <button onclick="showCodepoints()">Show<br/>codepoints</button>
    
    <button onclick="openEscapeWindow(); return false;">Convert to<br/>escapes</button>
    
 ` 
	
for (let i=0;i<window.controls.length;i++){
	out += '<button onclick="'+window.controls[i].code+'" title="'+window.controls[i].alt+'">'+window.controls[i].title+'</button>\n\n'
	}

out += `<button  id="makeExample" onclick="makeExample(defaults.language,defaults.direction)" 
    title="Create an example.">Make<br>example</button>
    
    <button  id="makeCharLink" type="button" onclick="makeCharLink(template.blocklocation,defaults.language,template.direction)" 
    title="Create an character link.">Character<br/>markup</button>
    </span>
</div>

<div id="outputDiv">
  <textarea dir="auto" rows="2" cols="80" id="output" name="output" placeholder="›"></textarea>
</div>




<div id="transcriptionWrapper">
<div id="copyTranscription" onclick="copyTranscription()">📋</div>
<div id="moveTranscription" onclick="moveTranscription()">⌃</div>
<div id="closeTranscription" onclick="closeTranscription()">X</div>
<div id="transcription" contenteditable="true"></div>
</div>



<div id="autofocusswitch">Autofocus: 
	<span id="afon" class="on" 
    onclick="switchAutofocus('on')">On</span> 
    <span id="afoff" class="off" 
    onclick="switchAutofocus('off')">Off</span>
    </div>

`

if (inputAids.length > 0) {
	out += `<div style="position:relative;">
<div id="vertical-menu">
<div class="vmtab" 
	onmouseover="this.textContent='Default'" 
    onmouseout="this.textContent='D'"  
    onclick="setSidebarDefaults(this);
     return false;">D</div>
`
	}


for (let i=0;i<inputAids.length;i++) {
	out += `<div class="vmtab" title="`+inputAids[i].title+`" data-var="`+inputAids[i].dataVar+ `" data-locn="`+inputAids[i].dataLocn+`" data-shorttitle="`+inputAids[i].dataShortTitle+`"
	onmouseover="this.textContent=this.title+globals[this.dataset.var]" 
    onmouseout="this.textContent=this.dataset.shorttitle"  
	onclick="toggleSideBarOption(this, this.title, this.dataset.var, this.dataset.locn)">`+inputAids[i].dataShortTitle+`</div>
`
	}

if (inputAids.length > 0) {
out += `</div>
</div>

`
	}
return out
}



function getBottom () {
var out
out = `
<div id="extrashapes"></div>


<div id="controls">
  <div class="control">Change the font:<br />
    <select id="fontList" name="fontList" onchange="selectFont(this.value); return false;">
` +
  fontSelection
  +
 `
 	    </select>
 </div>
  <div class="control">Add another font:<br />
    <form action="none" onsubmit="customFont(document.getElementById('fontName').value); return false;">
      <input name="fontName" id="fontName" value="`+defaults.font+`" onclick="this.select();" />
    </form>
  </div>
  <div class="control" title="One row is 100px. Decimals are ok."><span id="dimensions">Set dimensions:</span><br />
     <input name="fontSize" value="35" id="fontSize" size="3" onchange="changeFontSize(this.value);" onmouseover="document.getElementById('dimensions').textContent='Font size (px):'" onmouseout="document.getElementById('dimensions').textContent='Set dimensions:'" onfocus="document.getElementById('dimensions').textContent='Font size (px):'" onblur="document.getElementById('dimensions').textContent='Set dimensions:'" />
     <input name="rows" value="1.5" id="rows" size="3" onchange="changeBoxHeight(this.value)" onmouseover="document.getElementById('dimensions').textContent='Box height (px):'" onmouseout="document.getElementById('dimensions').textContent='Set dimensions:'" onfocus="document.getElementById('dimensions').textContent='Box height (px):'" onblur="document.getElementById('dimensions').textContent='Set dimensions:'" />
     <input name="lineHeight" value="1.5" id="lineHeight" size="3"  onchange="changeLineHeight(this.value)" onmouseover="document.getElementById('dimensions').textContent='Line height:'" onmouseout="document.getElementById('dimensions').textContent='Set dimensions:'" onfocus="document.getElementById('dimensions').textContent='Line height:'" onblur="document.getElementById('dimensions').textContent='Set dimensions:'" />
  </div>
  <div class="control">Add codepoint:
    <form action="none" onsubmit="add(convertCP2Char(getElementById('addcode').value)); return false;">
      <input name="addcode" id="addcode"  type="text" style="width: 90px; text-align:right;" />
    </form>
  </div>
  <div class="control">Search for:
    <form action="none"
						 onsubmit="searchFor(getElementById('search').value, 'myanmar'); return false;">
      <input name="search" id="search"  type="text" />
      <img src="/pickers//images/clearsearch.png" onclick="searchFor('xxxxxx', 'myanmar');" style="cursor: pointer; vertical-align:top; margin:0 0px 0 0; border:0; padding:0; height: 15px;" alt="Clear search results." title="Clear search results." />
    </form>
  </div>
  
  <div class="control" id="helpcontrol"><a href="help">Help<br/><img src="../shared20/help.png" alt=""/></a></div>
</div>




<div id="extracontrols">
<details>
<summary>more controls</summary>

  <div id="normaliseControl" class="control" title="Change the normalization of the output.">Normalise: <span id="n11nform">NFC</span><br />
    <img src="/pickers//images/nfc.png" alt="Convert output to Normalization Form C."  title="Convert output to Normalization Form C." 
							onclick="globals.n11n='nfc'; document.getElementById( 'output' ).value=nfc(document.getElementById( 'output' ).value);
							document.getElementById('n11nform').innerHTML = 'NFC';"/> <img src="/pickers//images/nfd.png" alt="Convert output to Normalization Form D."  title="Convert output to Normalization Form D."  
							onclick="globals.n11n='nfd'; document.getElementById( 'output' ).value=nfd(document.getElementById( 'output' ).value);
							document.getElementById('n11nform').innerHTML = 'NFD';"/> <img src="/pickers//images/nfx.png" alt="Don't normalise output."  title="Don't normalise output."  
							onclick="globals.n11n='none'; document.getElementById('n11nform').innerHTML = 'None';"/></div>



<div class="control" id="uiFontControl">Change table font:<br />
    <select id="uiFont" name="uiFont" onchange="setUIFont(this.value); return false;">
` +
  fontSelection
  +
 `
    </select>
	<input name="uiFontSize" id="uiFontSize"  type="number" onchange="setUIFontSize(document.getElementById('uiFontSize').value); return false;" value=""  style="width: 30px;" />px</div>



<div class="control" id="ccBaseControl">CC base:<br />
    <select id="ccBase" name="ccBase" onchange="selectCCBase(this.value); return false;">
		<option value="0">Select...</option>
        <option value="">none</option>
        <option value="&#x00A0;">NBSP</option>
        <option value=" ">SP</option>
        <option value="◌">◌</option>
        <option value="-">-</option>
		</select>
</div>


<div class="control">Set language:
<form action="none" onsubmit="setLanguage(document.getElementById('langtag').value); return false;">
  <input name="langtag" id="langtag"  type="text" style="width: 40px; text-align:right;" />
  <button onClick="setLanguage(document.getElementById('langtag').value)">Set</button>
</form>
</div>


<div class="control" id="ccFactoryReset">Reset<br/><button onClick="resetDefaults()">Go</button>
</div>
</details>

<details>
<summary>more pickers</summary>
<iframe id="pickerlist" src="../pickerlist"></iframe>
</details>
</div>





<div id="panel" style="display:none">
	<div id="title" class="ex" lang="`+defaults.language+`"></div>
  <div style="display:block">&nbsp;</div>
  <p style="text-align:right;"></p>
</div>



<div class="smallprint">
Last commit <a href="https://github.com/r12a/pickers/tree/gh-pages/`+template.github+`"><!-- #BeginDate format:En2 -->15-Aug-2017<!-- #EndDate --></a>.
Make a <a href="https://github.com/r12a/pickers/issues/new?title=[`+template.github+`%20picker]%20%20ADD%20TITLE%20HERE">comment</a>. 
Licence <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC-By</a> © <a href="mailto:r12a@w3.org">r12a</a> 
</div>
`
return out
}