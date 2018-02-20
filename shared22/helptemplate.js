

function addBasicUse (direction) {
var out
out = `<section id="basics">
  <h2 href="#basics">Basic use</h2>
<p>To produce characters in the text area, click on character shapes, or use your keyboard for Latin characters, delete, etc. Then cut &amp; paste the result to your document, or use the controls to get further information about the characters. You must have JavaScript enabled. </p>
<p>The controls just above the text area allow you to interact with the text in various ways. <strong>They nearly all work on highlighted text within the text area, or if there is no highlight, on all the text.</strong> Controls near the bottom of the picker allow you to change font, font size, line-height, text direction, etc.</p>
<p><b class="leadin">Contrast.</b> To change the contrast level for the text on the picker user interface, click on the <img src="../../images/contrast.png" alt="plus sign"/> icon, found at the top right of the page. If you chose to save your settings between sessions, this will also be remembered.</p>
<p><b class="leadin">Sample text</b> If you want to add some sample text to the text area, click on the <img src="../../images/sample.png" alt="plus sign"/> icon.</p>
<p><b class="leadin">Fonts</b>
To properly display the text you will need to choose a font that is loaded on your system or device, or use the web fonts downloaded with the page (the names end in ' WF'). Where applicable, the font list indicates which fonts are standard for Mac and Windows operating systems, and fonts that are freely available from Google and SIL. See more information about <a href="/scripts/fontlist/#khmer" target="_blank">standard OS fonts in Mac and Windows</a>.</p>
<p><b class="leadin">Autofocus &amp; mobile devices</b>
When working on an iPad or similar device, you should turn off <code class="kw" translate="no">Autofocus</code> (just below the text area). This prevents the keyboard popping up after you input every character.  You may also need to select a character twice to add it to the output field.</p>
`
if (direction === 'rtl') out += `<p><b class="leadin">Text direction</b> The characters → ↔ ←︎︎︎ (just below the right side of the text area) allow you to set the base direction of the text area to LTR, auto, and RTL, respectively. The symbol ⇐︎ sets the direction to RTL override.</p>
<p>In some pickers you will also see the symbol ⭅︎ . This mirrors the character glyph at the same time as applying a RTL override.</p>
`

out += `
</section>
`
return out
}


function addAboutBP () {
return `
<p>The pickers distinguish between transliteration and transcription. In <strong>transliteration</strong> each native character has an equivalent Latin character associated with it. The transliteration may not accurately represent pronunciation, but does allow straightforward and reversible conversion between the two scripts. One transliteration scheme is chosen as the default for the picker, and the picker has controls to convert to and from that transliteration. A <strong>transcription</strong>, on the other hand, is more likely to be phonetically accurate (though may still reflect only an approximation), and is likely not to allow reversible conversions.</p>
<p>All text is output in Unicode normalisation form NFC by default.  You can change to NFD or no normalisation by clicking on the buttons in the yellow area. Note that normalization only takes place when you click on a character - text pasted into the box won't be normalised until you click on another character above, or click on a button in the yellow area.</p>

`
}



function addControlsAbove1 () {
return `
      <p><img src="../../shared22/images/help/top_bar.png" alt=""/></p>
      <p>Controls above the input box allow you to run various operations on the text in the box. <strong>Most of them work on what you have selected</strong> within the box, or the whole box if nothing is selected.</p>
      <p><b class="leadin">Copy, select, delete, etc. (<img src="../../shared22/images/help/copy_etc.png" style="vertical-align:middle;" alt=""/>).</b> The icons on the left above the input box allow you (listing them from left to right) to copy the text to the clipboard, select the text,  delete it, generate a URL to share with others that will reproduce for them what you see in the text box, add some sample text to the text area, and open this help file.</p>
      <p><b class="leadin">Show codepoints.</b> Produces a list of the Unicode code points in the input box. You can usually follow a link from a code point item to more detailed information about that character.</p>
      <p><b class="leadin">Convert to escapes.</b> Opens a new window for the converter app, which shows various different ways of representing the text in the input box using escapes.</p>

`
}



function addControlsAbove2 () {
return `
<p><b class="leadin">Make example.</b> This may be useful to speed up the creation of examples. You can create an example with four parts, delimited by /, in the following order: [1] native text, [2] transliteration, [3] IPA transcription, [4] meaning. You don't need to add all four elements, but if you want to skip one in the middle of the sequence, use nothing between the slashes.</p>
       <p>For example, the following in a Russian picker:</p>
      <p><span lang="ru">ру́сский язы́к</span>/rússkiy yazýk/ˈruskʲɪj jɪˈzɨk/Russian (language)</p>
      <p>will produce:</p>
      <p style="text-align:left; text-justify:auto;"><code>&lt;span class=&quot;charExample&quot; translate=&quot;no&quot;&gt;&lt;span class=&quot;ex&quot; lang=&quot;ru&quot;&gt;ру́сский язы́к&lt;/span&gt; &lt;span class=&quot;ipa&quot;&gt;rússkiy yazýk&lt;/span&gt; &lt;span class=&quot;ipa&quot;&gt;ˈruskʲɪj jɪˈzɨk&lt;/span&gt; &lt;span class=&quot;meaning&quot;&gt;Russian (language)&lt;/span&gt;&lt;/span&gt;</code></p>
      <p>To get just the Cyrillic and the meaning you would use:</p>
       <p><span lang="ru">ру́сский язы́к///Russian (language)</span></p>
       
      
      <p><b class="leadin">Character markup.</b> This may be useful to speed up the creation of markup for a specific character or set of characters. Select one or more characters in the text area, then click this button.  It will return something like the following for each of the characters:</p>
      <p style="text-align:left; text-justify:auto;"><code>&lt;span class=&quot;codepoint&quot; translate=&quot;no&quot;&gt;&lt;span lang=&quot;en&quot;&gt;&amp;#x04A7;&lt;/span&gt; [&lt;span class=&quot;uname&quot;&gt;U+04A7 CYRILLIC SMALL LETTER PE WITH MIDDLE HOOK&lt;/span&gt;]&lt;/span&gt;</code></p>
      <p>When you add it to your document, it will look like this.</p>
      <p><span class="codepoint" translate="no"><span lang="en">&#x04A7;</span> [<span class="uname">U+04A7 CYRILLIC SMALL LETTER PE WITH MIDDLE HOOK</span>]</span></p>
`
}




function addSecondaryText () {
return `
  <h2 id="secondary_output">Secondary text area</h2>
  <p><img src="../../shared22/images/help/secondary_text.png" alt=""/></p>
  <p>This area receives the output of various tools. Note that the text is editable.</p>
  <p>The icons to the right ( <img src="../../shared22/images/help/second_copy_etc.png" alt="" style="vertical-align:middle;"/> ) allow you to copy the contents of this area to the clipboard, insert the contents into the main text area, or close this subwindow, respectively. When you insert the contents of this subwindow into the main text area, the text will overwrite any highlighted text, otherwise it will just be inserted at the current cursor position.</p>
  <p>Some conversions produce ambiguous output. In this case, you will be offered two alternatives on a yellow background, eg. <img src="../../shared22/images/help/alternatives.png" alt="" style="vertical-align:top;"/> presents you with the alternatives 'h' or 't'. Simply click on the alternative you want, and the picker will discard the rest.</p>

`
}




function addInputAids (aidsList) {
var out = ''

if (aidsList.match('intro')) {
	out += `
	<p><img src="../../shared22/images/help/input_aids.png" style="float:left; margin-right:1em; " alt=""/></p>
	<p>The vertical grey bar to the left allows you to turn on/off a number of panels that can help create the text you want.</p>
	<p><b class="leadin">Default.</b> Turns off all input aids and closes all panels.</p>
 	`
 }
 
if (aidsList.match('hinting')) {
	out += `
	<p><b class="leadin">Hinting.</b> Changes the selection area so that, when you mouse over a character, characters that are 	similar in appearance, and may be easily confused, are automatically highlighted. This can be particularly useful for people who are not familiar with the script, to avoid confusing similar characters, or to find the right character when two or more look similar.</p>
	`
	}
	
if (aidsList.match('shape')) {
	out += `
	<p><b class="leadin">Shape lookup.</b> This adds a row of orange pictures that represent basic shapes associated with the characters in the selection area. When you click on a picture, characters that incorporate that shape are highlighted. This is particularly helpful for those who don't know the script at all and want to pick characters based on their shape, or for those times when you just can't find the character you want and need a hint.</p>
	<p> Each orange key below the table represents a significant part of the shape of two or more characters; when you click on the keys, characters and combinations of characters that incorporate that shape are highlighted above.</p>
	<p>Some pickers show additional characters below the orange row. These are typically clusters of characters which include the same shape. Click on these characters to add them to the text area.</p>
	`
	}

if (aidsList.match('latin')) {
	out += `
	<p><b class="leadin">Latin characters.</b> Displays a panel of lowercase Latin characters you are likely to need for  transcription. Click on them to add them to the text area.</p>
	`
	}

if (aidsList.match('translit')) {
	out += `
	<p><b class="leadin">Reverse transliteration.</b> Displays a panel of the transliteration characters used for this picker. It allows you to generate text in the native script. Click on the transcription character and the appropriate native character will be added to the text area. Where there are multiple possible choices, these choices are presented in a small pop-up box; click on the choice you want in order to add it to the text area.</p>
	<p><img src="../../shared22/images/help/translit_option.png" alt=" "/></p>
	`
	}

if (aidsList.match('keyboard')) {
	out += `
	<p><b class="leadin">Keyboard.</b> Allows you to type  characters by selecting them from a keyboard layout.</p>
	`
	}

return out
}




function addYellowControls () {
return `
  <h2 href="#yellow_controls">Controls on the yellow background</h2>
    <p><img src="../../shared22/images/help/yellow_controls.png" alt=""/></p>
    <p><b class="leadin">Left-hand controls.</b> These controls at the bottom of the page allow you to modify fonts used, the font size, line height, and the height of the text area. </p>
    <p><b class="leadin">Add codepoint.</b> You can add characters to the text area by typing codepoints and escapes in the <samp>Add codepoint</samp> field and hitting return. This will accept HTML numeric character references, javascript and other programming escapes, U+ Unicode notation, or just simple codepoint numbers separated by spaces. All codepoint numbers (including those in escapes) must be hexadecimal.</p>
    <p><b class="leadin">Search for. </b>If you are searching for a particular character and know (at least part of) the name or the codepoint, type that in the search box and hit return. All characters with matching text in the name or codepoint number will be highlighted. The highlighting is only removed when you click on the <samp translate="no">X</samp> next to the search input field. You can also use regular expression syntax to improve your search results. For example, to find the letter 'ha', but not 'gha' etc, you can use <kbd  translate="no">\bha\b</kbd> (or the shortcut, <kbd  translate="no">:ha:</kbd>).</p>
`
}




function addMoreControls (direction) {
out = ''
out +=  `
  <h2 href="#more_controls">More controls</h2>
  <p><img src="../../shared22/images/help/more_controls.png" alt=""/></p>
  <p>Click on <samp>more controls</samp> to reveal the less commonly used controls described here.</p>
  <p><b class="leadin">Normalise. </b>All text is added to the main text area in Unicode normalisation form NFC by default.  You can change to NFD or no normalisation by clicking on the buttons in the yellow area. Note that normalization only takes place when you click on a character – text pasted into the box won't be normalised until you click on another character above, or click on a button in the yellow area. </p>
  <p><b class="leadin">Change table font. </b>Allows you to change the font and size of the characters you click on in the main selection areas. </p>
    <p><b class="leadin">CC base.</b> You would normally expect combining characters, such as accents and vowel signs, when displayed alone to be associated with a dotted circle, however these font glyphs are <a href="http://r12a.github.io/blog/?p=1433">handled inconsistently</a> from one browser/font to the next. The picker is set up for a given web font initially, but if you change the table font you may need to do something to ensure that combining characters display in a way that helps you click on them. </p>
    <p>The <samp class="kw" translate="no">CC base</samp> control allows you to specify a base character that will be used before each combining character (or no base character). This should hopefully help for most font and browser combinations.</p>
    `
    
if (direction === 'rtl') out += `
<p><b class="leadin">Table direction.</b> Allows you to flip the direction of the selection area</p>
`
out += `
    <p><b class="leadin">Set language. </b>Add a BCP47 language tag here (ie. what you would use as the value of a <code class="kw" translate="no">lang</code> attribute in HTML). It is used in code generated by <samp>Make example</samp> and <samp>Character markup</samp> controls to indicate the language of the text.</p>
    <p><b class="leadin">Reset. </b>Returns all settings you have changed (such as font size, text area size, language, etc.) to the original, default state.</p>
<p><b class="leadin">Change text.</b> Tools for manipulating the content in the text area.</p>
<p><img alt="Add space:" src="../../images/addspace.png"/> &nbsp; Adds a space between every character in the text area.</p>
<p><img alt="Add space:" src="../../images/addcomma.png"/> &nbsp; Adds a comma between every character in the text area.</p>
<p><img alt="Add space:" src="../../images/removespace.png"/> &nbsp; Removes all spaces from the text area.</p>
<p><img alt="Add space:" src="../../images/count.png"/> &nbsp; Counts the number of characters in the text area.</p>
<p><b class="leadin">Remove.</b> Allows you to remove a character from the text area. Type in the box a single character or the hex code point value for the character you want to delete.</p>
`

return out
}



