

function addBasicUse (direction) {
var out
out = `<section id="basics">
  <h2 href="#basics">Basic use</h2>
<p>The controls just above the text area allow you to interact with or analyse the text in various ways. <strong>They nearly all work on any highlighted text within the text area, or if there is no highlight, on all the text.</strong> Controls near the bottom of the app allow you to change font, font size, line-height, text direction, etc.</p>
<p><b class="leadin" id="contrast">Contrast.</b> Some of the text on the UI has a lighter coloured text, so as to not swamp the key information. However, if you find it difficult to read the light-coloured text, click on <samp>Change contrast</samp> at the top right of the page to toggle between lighter and darker text. If you chose to save your settings between sessions, this will also be remembered.</p>
<p><b class="leadin">Sample text.</b> If you want to add some sample text to the text area, click on the <img src="../../shared26/images/sample.png" alt="Sample"/> icon.</p>
<p><b class="leadin">Fonts.</b>
To properly display the text you will need to choose a font that is loaded on your system or device, or use the web fonts downloaded with the page (the names end in ' WF'). Where applicable, the font list indicates which fonts are standard for Mac and Windows operating systems, and fonts that are freely available from Google and SIL. See more information about <a href="/scripts/fontlist/#khmer" target="_blank">standard OS fonts in Mac and Windows</a>.</p>
<p><b class="leadin" id="autofocus">Autofocus &amp; mobile devices.</b>
When working on an iPad or similar device, you should turn off <code class="kw" translate="no">Autofocus</code> (just below the text area). This prevents the keyboard popping up after you input every character.  (On older versions of iOS, you may also need to select a character twice to add it to the output field.)</p>
`
if (direction === 'rtl') out += `<p><b class="leadin">Text direction</b> The characters → ↔ ←︎︎︎ (just below the right side of the text area) allow you to set the base direction of the text area to LTR, auto, and RTL, respectively. The symbol ⇐︎ sets the direction to RTL override.</p>
<p>In some character apps you will also see the symbol ⭅︎ . This mirrors the character glyph at the same time as applying a RTL override.</p>
`

out += `
<p><b class="leadin" id="translit">Transliteration vs transcription.</b> Character apps distinguish between transliteration and transcription. In <strong>transliteration</strong> each native character has an equivalent Latin character associated with it. The transliteration may not accurately represent pronunciation, but does allow straightforward and reversible conversion between the two scripts. The transliteration schemes used here are specially created for materials on this site, and the app has controls to convert to and from that transliteration. A <strong>transcription</strong>, on the other hand, is more likely to be phonetically accurate (though may still reflect only an approximation), and is likely not to allow reversible conversions.</p>

<p><b class="leadin">Normalisation.</b> All text is output in Unicode normalisation form NFC by default.  You can change to NFD or no normalisation by clicking on the buttons in the yellow area. Note that normalization only takes place when you click on a character – text <em>pasted</em> into the box won't be normalised until you add another character from the UI, or set the normalisation explicitly.</p>

<p><b class="leadin">Secondary text area.</b> An area that opens up automatically just below the text area receives the output of various tools. Note that the text is editable.</p>
<p><img src="../../shared26/images/help/secondary_text.png" alt=""/></p>
<p>The icons to the right ( <img src="../../shared26/images/help/second_copy_etc.png" alt="" style="vertical-align:middle;"/> ) allow you to copy the contents of this area to the clipboard, insert the contents into the main text area, or close this subwindow, respectively. When you insert the contents of this subwindow into the main text area, the text will overwrite any highlighted text, otherwise it will just be inserted at the current cursor position.</p>
<p>Some conversions produce ambiguous output. In this case, you will be offered two alternatives on a yellow background, eg. <img src="../../shared26/images/help/alternatives.png" alt="" style="vertical-align:top;"/> presents you with the alternatives 'h' or 't'. Simply click on the alternative you want, and the app will discard the rest.</p>


`

out += `
</section>
`
return out
}


function addAboutBP () {
return `
<img src="../../shared26/images/help/hints.png" alt="NOT FOUND" style="float:left;">
<p><b class="leadin">Hints.</b> The <samp>K T P</samp> selectors on the light-coloured background to the left of the window allow you to show hints for characters in the selection area. <samp>K</samp> shows the keypress that will produce that character in type-assist mode. <samp>T</samp> shows the transliteration for that character. <samp>P</samp> shows likely IPA pronunciation(s) for the character.  These hints are off by default. To turn them off again after using them, click on the currently highlighted option.</p>
`
}

 

function addControlsAbove1 () {
return `
<h2 href="#top_controls">Controls above the text area</h2>
      <p><img src="../../shared26/images/help/top_bar.png" alt=""/></p>
      <p>Controls above the text area (and those pulled down from the icon to the right) allow you to run various operations on the text in the box. <strong>Most of them work on what you have selected</strong> within the box, or the whole box if nothing is selected.</p>
      <p><b class="leadin" id="icons">Icons.</b> The icons on the left above the input box allow you to do the following:</p>
      <blockquote>
      <img src="../../shared26/images/copy.png" alt="Copy icon"/> copy the text to the clipboard<br/>
      <img src="../../shared26/images/select.png" alt="Select icon"/> select all the text<br/>
      <img src="../../shared26/images/toggle.png" alt="Invisible character toggle icon"/> show/hide invisible characters<br/>
      <img src="../../shared26/images/clear.png" alt="Clear icon"/> delete all the text<br/>
      <img src="../../shared26/images/share.png" alt="Share icon"/> generate a URL to share with others that will reproduce for them what you see in the text box<br/>
      <img src="../../shared26/images/sample.png" alt="Sample icon"> add some sample text to the text area<br>
      <img src="../../shared26/images/fonts.png" alt="Fonts icon"> show the font preview list. Mouse over the font names to change the font used for the text area. (Only works for webfonts or fonts you have on your system.) Click on a font name to change the font and store the setting.</blockquote>
	  	  
	  <details>
	  <summary style="margin-left:7.5%">See a video of the font preview in action</summary>
	  <p><video controls width="100%; max-width:720px" aria-label="Embedded video" style="border:0;"><source src="../../shared26/images/help/font-preview.mp4" type="video/mp4"></video></p>
	  </details>
	  
<p>Find <a href="../../shared26/fontpreview" target="_blank">more information</a> about using the font preview panel, including <cite>Adding your own fonts</cite>, <cite>Identifying missing characters</cite>, and <cite>Checking coverage for a specific language</cite>.</p>

      <!--p><b class="leadin">Copy, select, delete, etc. (<img src="../../shared26/images/help/copy_etc.png" style="vertical-align:middle;" alt=""/>).</b> The icons on the left above the input box allow you (listing them from left to right) to copy the text to the clipboard, select the text,  delete it, generate a URL to share with others that will reproduce for them what you see in the text box, add some sample text to the text area, and open this help file.</p-->
      <p><b class="leadin">Show codepoints.</b> Produces a list of the Unicode code points in the input box. You can usually follow a link from a code point item to more detailed information about that character.</p>
      <p><b class="leadin">Analyze text.</b> This control is particularly useful for understanding the composition of the text. For each character highlighted (or the whole text box if nothing is highlighted) this lists information such as the following:</p>
       <ul>
       <li>transliteration</li>
       <li>phonetic equivalence (IPA)</li>
       <li>type of character</li>
       <li>special usage-related information</li>
       <li>equivalents in one or more transcriptions</li>
       <li>a link to that character's description in the detailed character notes.</li>
       </ul>
      <p>If the app recognises a sequence of characters that has a particular significance in its own right, it will show that sequence (slightly indented) after the initial character.</p>

`
}


function addControlsAbove2 () {
return `
        <p><b class="leadin">Make example.</b> This may be useful to speed up the creation of examples. You can create an example with four parts, delimited by /, in the following order: [1] native text, [2] transliteration, [3] IPA transcription, [4] meaning. You don't need to add all four elements, but if you want to skip one in the middle of the sequence, use nothing between the slashes.</p>
        <blockquote style="background-color: cornsilk; padding: 0.1em 1em; border-radius: .5em; font-size: 90%;">
       <p>For example, the following in a Russian character app:</p>
      <p><span lang="ru">ру́сский язы́к</span>/rússkiy yazýk/ˈruskʲɪj jɪˈzɨk/Russian (language)</p>
      <p>will produce:</p>
      <p style="text-align:left; text-justify:auto;"><code>&lt;span class=&quot;charExample&quot; translate=&quot;no&quot;&gt;&lt;span class=&quot;ex&quot; lang=&quot;ru&quot;&gt;ру́сский язы́к&lt;/span&gt; &lt;span class=&quot;ipa&quot;&gt;rússkiy yazýk&lt;/span&gt; &lt;span class=&quot;ipa&quot;&gt;ˈruskʲɪj jɪˈzɨk&lt;/span&gt; &lt;span class=&quot;meaning&quot;&gt;Russian (language)&lt;/span&gt;&lt;/span&gt;</code></p>
      <p>To get just the Cyrillic and the meaning you would use:</p>
       <p><span lang="ru">ру́сский язы́к///Russian (language)</span></p>
       </blockquote>
      
      <p><b class="leadin">Character markup.</b> This may be useful to speed up the creation of markup for a specific character or set of characters. Select one or more characters in the text area, then click this button.</p>
      <blockquote style="background-color: cornsilk; padding: 0.1em 1em; border-radius: .5em; font-size: 90%;">
      <p>It will return something like the following for each of the characters:</p>
      <p style="text-align:left; text-justify:auto;"><code>&lt;span class=&quot;codepoint&quot; translate=&quot;no&quot;&gt;&lt;span lang=&quot;en&quot;&gt;&amp;#x04A7;&lt;/span&gt; [&lt;span class=&quot;uname&quot;&gt;U+04A7 CYRILLIC SMALL LETTER PE WITH MIDDLE HOOK&lt;/span&gt;]&lt;/span&gt;</code></p>
      <p>When you add it to your document, it will look like this.</p>
      <p><span class="codepoint" translate="no"><span lang="en">&#x04A7;</span> [<span class="uname">U+04A7 CYRILLIC SMALL LETTER PE WITH MIDDLE HOOK</span>]</span></p>
      </blockquote>
        <p><b class="leadin">Convert to escapes.</b> Opens a new window for the converter app, which shows various different ways of representing the text in the input box using escapes.</p>
        <p><b class="leadin">Show all db entries.</b> This is like 'Analyse text', described above, except that it will list all meaningful sequences in the backend database which include each character.</p>
        <p><b class="leadin">Reverse transliterate.</b> Converts a Latin transliteration in the text area (using the home-grown transliteration scheme described above) to native characters.</p>

`
}




function addSecondaryText () {
return `
<h2 id="manage_fonts" href="#manage_fonts">Manage fonts</h2>
<p><img src="../../shared26/images/help/manage_fonts.png" alt=""/></p>

<p>This control allows you to add fonts to the font preview panel. If you agreed to store settings, they will be remembered for your next session on that device (though remember that you need to set these lists separately on each device you use, since they are stored locally).</p>

<p>Simply add or delete font names (one per line) and click on <samp>Set</samp>.</p>

<p>To find this control, open the font preview panel by clicking on <img src="../../shared26/images/fonts.png" alt="Fonts icon" style="vertical-align:bottom;">, then click on <samp>manage fonts</samp> at the bottom of the panel.</p>

<details>
<summary style="margin-left:7.5%">See a video of how to add fonts to the selection lists.</summary>
<p><video controls width="100%; max-width:720px" aria-label="Embedded video" style="border:0;"><source src="../../shared26/images/help/add-font.mp4" type="video/mp4"></video></p>
</details>

<p>Find <a href="../../shared26/fontpreview" target="_blank">more information</a> about using the font preview panel.</p>

`
}




function addInputAids (aidsList, notes) {
var out = '<h2 href="#input_aids">Input aids</h2>'

if (aidsList.match('showIntro')) {
	out += `
	<p><img src="../../shared26/images/help/input_aids.png" style="float:left; margin-right:1em; " alt=""/></p>
	<p>The vertical grey bar to the left allows you to turn on/off a number of features or panels that can help create the text you want.</p>
 	`
    if (notes) out+= notes
    }
 
	
if (aidsList.match('showShapeLookup')) {
	out += `
	<p><b class="leadin">[S] Shape-based lookup.</b> This adds a row of orange pictures that represent basic shapes associated with the characters in the selection area. When you click on a picture, characters that incorporate that shape are highlighted. This is particularly helpful for those who don't know the script at all and want to pick characters based on their shape, or for those times when you just can't find the character you want and need a hint.</p>
	<p> Each orange key represents a significant part of the shape of two or more characters; when you click on the keys, characters and combinations of characters that incorporate that shape are highlighted below.</p>
	<p>Some characer apps show additional characters below the orange row. These are typically clusters of characters which include the same shape. Click on these characters to add them to the text area.</p>
	`
	}

if (aidsList.match('showShapeHints')) {
	out += `
	<p><b class="leadin">[H] Hint at similar shapes.</b> Changes the selection area so that, when you mouse over a character, characters that are similar in appearance, and may be easily confused, are automatically highlighted. This can be particularly useful for people who are not familiar with the script, to avoid confusing similar characters, or to find the right character when two or more look similar.</p>
	`
	}

if (aidsList.match('typeAssist')) {
	out += `
	<p><b class="leadin">[T] Type assist.</b> Allows you to generate text in the native script from QWERTY input. This can also be switched on/off by hitting the \` (backquote) key, but <strong>it is on by default</strong> when you open the character app.</p>
    <p>You should find that very little practise is needed to learn to enter native text quickly. This method is much faster than picking items from the selection area below.</p>
    <p>When there are alternatives, the app will allow you to select characters from a list. For each alternative you'll see the character to be inserted in red. To its left you'll see the transliteration for that character (in grey, above), and the number key to press (in orange, below) to insert the character into the text box.  You can also just tap on the character (often more useful when using hand-held devices).
    <p style="text-align:center;"><img src="../../shared26/images/help/type-assist.png" alt=""/></p>
    <p>This feature sets up the <strong>Transcription type-in mode</strong>, which means that the first item on the list is automatically added to the text area.</p>
	<p><em>Hint:</em> If you can't see or remember which key produces which character, either click on <samp>K</samp> in the vertical menu to the left on a light background, or mouse over that character in the selection area and look for the letter after <samp>ᵏ</samp> where the character name is displayed.</p>
	`
	}

if (aidsList.match('showLatinTrans')) {
	out += `
	<p><b class="leadin">[L] Latin type-assist.</b> Displays a panel of Latin characters associated with QWERTY keystrokes (in orange). This can also be switched on/off by hitting the ~ (tilde) key.</p>
    <p style="text-align:center;"><img src="../../shared26/images/help/latin-panel.png" alt=""/></p>
    <p>As you type the characters indicated by the orange circles, suggestions for input will appear at the bottom of the text area. To insert one of those items into the text area at the cursor position, type the appropriate number key, or tap directly on the item you want to insert. The character you typed will be replaced by the item you selected. (If you already see the character you want, just continue typing.)</p>
    <p style="text-align:center;"><img src="../../shared26/images/help/character-selector.png" alt=""/></p>
    <p>Because this sets up the <strong>Latin type-in mode</strong>, alternative characters are <strong>only</strong> inserted after you click on a number key.</p>
    <p>In general, alternative characters are associated with a key on the keyboard that resembles them when displayed - eg. &#x0263; will usually be brought up by clicking on the 'y' key (rather than, say 'g').</p>
	`
	}

if (aidsList.match('showTranslit')) {
	out += `
	<p><b class="leadin">[R] Reverse transliteration.</b> Displays a panel of the transliteration characters used for this app, and sets up the <strong>Transcription type-in mode</strong>. It allows you to generate text in the native script when you know the transcription.</p>
    <p style="text-align:center;"><img src="../../shared26/images/help/reverse-transcription.png" alt=""/></p>
    <p>This works in the same way as the <samp>Type assist</samp> input aid described just earlier, however it displays a panel to help with selection. Although the panel below the text area shows only the Latin transcription characters associated with each key, if you mouse over those characters the corresponding native character will appear at the bottom right of the text area (ie. the yellow box in the picture above).</p>
	`
	}

if (aidsList.match('showKeyboard')) {
	out += `
	<p><b class="leadin">[K] Keyboard.</b> Allows you to type  characters by selecting them from a keyboard layout.</p>
    `
    }


return out
}




function addYellowControls () {
return `
<h2 href="#yellow_controls">Controls below the selection panel</h2>
    <p><img src="../../shared26/images/help/yellow_controls.png" alt=""/></p>

    <p><b class="leadin">Current font.</b> This control allows you to change the font used in the text area. If you want to use a font that is not in the predefined list, add the font using the <samp>manage fonts</samp> control (see above).</p>
    
    <p><b class="leadin">Font size.</b> Allows you to adjust the size of the font for the text area.</p>
    
    <p><b class="leadin">Add codepoint(s).</b> You can add characters to the text area by typing codepoints and escapes in the <samp translate="no">Add codepoint</samp> field and hitting return. This will accept HTML numeric character references, javascript and other programming escapes, U+ Unicode notation, or just simple codepoint numbers separated by spaces. All codepoint numbers (including those in escapes) must be hexadecimal.</p>

  <p><b class="leadin">Normalise.</b> All text is added to the main text area in Unicode normalisation form NFC by default.  You can change to NFD or no normalisation by clicking on the buttons in the yellow area. Note that normalization only takes place when you click on a character – text pasted into the box won't be normalised until you click on another character above, or click on a button in the yellow area. </p>

    <p><img src="../../shared26/images/help/yellow_controls2.png" alt=""/></p>

    <p><b class="leadin">Line height.</b> Adjust the line height for the text area.</p>

<p><b class="leadin">Change text.</b> Tools for manipulating the content in the text area.</p>
<p><img alt="Add space:" src="../../images/addspace.png"/> &nbsp; Adds a space between every character in the text area.</p>
<p><img alt="Add space:" src="../../images/removespace.png"/> &nbsp; Removes all spaces from the text area.</p>
<p><img alt="Add space:" src="../../images/addcomma.png"/> &nbsp; By default, adds ␣ between every character in the text area. Put a different character or sequence of characters in the box just to the left in order to add something else between each character.</p>
<p><img alt="Add space:" src="../../images/count.png"/> &nbsp; Counts the number of characters in the text area.</p>
<p><b class="leadin">Replace.</b> Allows you to remove a character from the text area, or replace it with something else. Type in the left-hand box a single character or the hex code point value for the character you want to delete/replace. If replacing, type the replacement text in the right-hand box.</p>

<p><b class="leadin">Search for. </b>If you are searching for a particular character and know (at least part of) the name or the codepoint, type that in the search box and hit return. All characters with matching text in the name or codepoint number will be highlighted. The highlighting is only removed when you click on the <samp translate="no">X</samp> next to the search input field. You can also use regular expression syntax to improve your search results. For example, to find the letter 'ha', but not 'gha' etc, you can use <kbd  translate="no">\bha\b</kbd> (or the shortcut, <kbd  translate="no">:ha:</kbd>).</p>

<p><b class="leadin">Reset. </b>Returns all settings you have changed (such as font size, text area size, language, etc.) to the original, default state.</p>
`
}




function addMoreControls (direction) {
out = ''
out +=  `
  <h2 id="more_controls" href="#more_controls">More controls</h2>
  `
  if (direction === 'rtl') out += '<p><img src="../../shared26/images/help/more_controls_rtl.png" alt=""/></p>'
  else out += '<p><img src="../../shared26/images/help/more_controls.png" alt=""/></p>'
  
  out += `
<p><b class="leadin">Set language.</b> Add a BCP47 language tag here (ie. what you would use as the value of a <code class="kw" translate="no">lang</code> attribute in HTML). It is used in code generated by <samp>Make example</samp> and <samp>Character markup</samp> controls to indicate the language of the text.</p>

<p><b class="leadin">CC base.</b> You would normally expect combining characters, such as accents and vowel signs, when displayed alone to be associated with a dotted circle, however these font glyphs are <a href="http://r12a.github.io/blog/?p=1433">handled inconsistently</a> from one browser/font to the next. The app is set up for a given web font initially, but if you change the table font you may need to do something to ensure that combining characters display in a way that helps you click on them. </p>
    <p>The <samp class="kw" translate="no">CC base</samp> control allows you to specify a base character that will be used before each combining character (or no base character). This should hopefully help for most font and browser combinations.</p>
`
    
if (direction === 'rtl') out += `
<p><b class="leadin">Table direction.</b> Allows you to flip the direction of the selection area</p>
`
out += `
<p><b class="leadin">Box height.</b> Adjust the vertical size of the text area.</p>

<p><b class="leadin">Change selection area font & size.</b> These two controls allow you to change the font and font size for the characters displayed in the selection panel.</p>
`

return out
}



