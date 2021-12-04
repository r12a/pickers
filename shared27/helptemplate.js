

// keep these stubs for old function calls until all markup has been cleansed
function addAboutBP () {
return ''
}
function addBasicUse (direction) {
return ''
}
function addControlsAbove1 () {
return ''
}
function addControlsAbove2 () {
return ''
}
function addControlsAbove3 () {
return ''
}
function addSecondaryText () {
return ''
}
function addInputAids (aidsList, notes) {
return ''
}
function addYellowControls () {
return ''
}


function addMoreControls (direction) {
// remove all the old markup from older help files
document.getElementById('basics').style.display = 'none'
document.getElementById('about').style.display = 'none'
document.getElementById('input_aids').style.display = 'none'
document.getElementById('top_controls').style.display = 'none'
document.getElementById('fontManagement').style.display = 'none'
document.getElementById('yellow_controls').style.display = 'none'

// call the new markup builder for old help files
return createContent()
}




function createContent (direction) {

var out = `
<section id="input">
<h2 href="#about">Inputting characters</h2>

<p>To <strong><em>analyse</em> text</strong>, copy &amp; paste it into the large text area and select the desired control(s).</p>
<p>To <strong><em>produce</em> text</strong> in the text area, do one of the following (some apps may not offer all options):</p>
<ul>
<li><strong>Type on your keyboard, using <a href="#input_aids">type-assist</a></strong>. A quick way to input text from the ASCII characters on your keyboard. Various alternative methods are available, to help you access both the target language and Latin characters used in transcriptions.</li>
<li><strong>Open the shape-based input panel, and click</strong> on similar shapes to highlight characters you may be looking for. Good when you don't know the orthography well.</li>
<li><strong>Click on the characters in the selection area</strong>. The blocks are arranged to assist with input, and groups of characters are arranged within a block phonetically.
</li>
</ul>
<img src="../../shared27/images/help/hints.png" alt="NOT FOUND" style="float:left; margin-inline-end:1em;">
<p id="ktpHints"><b class="leadin">Hints.</b> The <samp>K T P</samp> selectors to the left of the window allow you to show hints for characters in the selection area. <samp>K</samp> shows the keypress that will produce that character in type-assist mode. <samp>T</samp> shows the transliteration for that character. <samp>P</samp> shows likely IPA pronunciation(s) for the character.  These hints are off by default. To turn them off again after using them, click on the currently highlighted option.</p>
</section>



<section id="basicUse">
<h2 href="#basicUse">Basic use</h2>

<p>The controls just above the text area allow you to interact with or analyse the text in various ways. <strong>They nearly all work on any highlighted text within the text area, or if there is no highlight, on all the text.</strong> Controls near the bottom of the app allow you to change font, font size, line-height, text direction, etc.</p>
<p><b class="leadin" id="contrast">Contrast.</b> Some of the text on the UI has a lighter coloured text, so as to not swamp the key information. However, if you find it difficult to read the light-coloured text, click on <img src="../../shared27/images/access.png" alt="Sample" style="height:1.4em; vertical-align:middle;"/> at the top right of the page to toggle between lighter and darker text. If you chose to save your settings between sessions, this will also be remembered.</p>
<p><b class="leadin">Sample text.</b> If you want to add some sample text to the text area, click on the &nbsp; <img src="../../shared27/images/sample.png" alt="Sample" style="height:1.4em; vertical-align:middle;"> &nbsp; icon.</p>
<p><b class="leadin">Fonts.</b>
To properly display the text you will need to use a font that is loaded on your system or device, or use the web font(s) downloaded with the page (names end in 'WF'). Font selectors in the app indicate which fonts are standard for Mac and Windows operating systems, and fonts that are freely available from Google and SIL. See more information about <a href="../../../scripts/fontlist/" target="_blank">standard OS fonts in Mac and Windows</a>.</p>
<p><b class="leadin" id="autofocus">Autofocus &amp; mobile devices.</b>
When working on an iPad or similar device, you should turn off <code class="kw" translate="no">Autofocus</code> (just below the text area). This prevents the keyboard popping up after you input every character.  (On older versions of iOS, you may also need to select a character twice to add it to the output field.)</p>

<p><b class="leadin">Text direction</b> In character apps for RTL orthographies, the characters <samp style="font-size:1.5rem">→ ↔ ←︎</samp>︎︎ (just below the right side of the text area) allow you to set the base direction of the text area to LTR, auto, and RTL, respectively. The symbols <samp style="font-size:1.5rem">⇐</samp>︎ and <samp style="font-size:1.5rem">⇒</samp> set the direction to RTL or LTR override.</p>
<p>In some character apps you will also see the symbol <samp style="font-size:1rem">⭅︎</samp>. This mirrors the character glyph at the same time as applying a RTL override.</p>

<p><b class="leadin" id="translit">Transliteration vs transcription.</b> Character apps distinguish between transliteration and transcription. In <strong>transliteration</strong> each native character has an equivalent Latin character associated with it. The transliteration may not accurately represent pronunciation, but does allow straightforward and reversible conversion between the two scripts. The transliteration schemes used here are specially created for materials on this site, and the app has controls to convert to and from that transliteration. A <strong>transcription</strong>, on the other hand, is more likely to be phonetically accurate (though may still reflect only an approximation), and is likely not to allow reversible conversions.</p>

<p><b class="leadin">Normalisation.</b> All text is output in Unicode normalisation form NFC by default.  You can change to NFD or no normalisation using the controls below the selection area. Note that normalization only takes place when you click on a character – text <em>pasted</em> into the box won't be normalised until you add another character from the UI, or set the normalisation explicitly.</p>

<p><b class="leadin">Secondary text area.</b> An area that opens up automatically just below the text area receives the output of various tools. Note that the text is editable.</p>
<p><img src="../../shared27/images/help/secondary_text.png" alt=""/></p>
<p>The icons to the right ( <img src="../../shared27/images/help/second_copy_etc.png" alt="" style="vertical-align:middle;"/> ) allow you to copy the contents of this area to the clipboard, insert the contents into the main text area, or close this subwindow, respectively. When you insert the contents of this subwindow into the main text area, the text will overwrite any highlighted text, otherwise it will just be inserted at the current cursor position.</p>
<p>Some conversions produce ambiguous output. In this case, you will be offered two alternatives on a yellow background, eg. <img src="../../shared27/images/help/alternatives.png" alt="" style="vertical-align:top;"/> presents you with the alternatives 'h' or 't'. Simply click on the alternative you want, and the app will discard the rest.</p>
</section>






<section id="topControls">
<h2 href="#top_controls">Controls above the text area</h2>

      <p><img src="../../shared27/images/help/top_bar.png" alt=""/></p>
      <p>Controls above the text area (and those pulled down from the icons to the right) allow you to run various operations on the text in the box. <strong><em>Most of them work on what you have selected within the box, or on all the text in the box if nothing is selected</em></strong>.</p>

<h3>Icons</h3>
      <p>The icons on the left above the input box allow you to do the following:</p>
      <blockquote>
      <img src="../../shared27/images/copy.png" alt="Copy icon"/> copy the text to the clipboard<br/>
      <img src="../../shared27/images/select.png" alt="Select icon"/> select all the text<br/>
      <img src="../../shared27/images/share.png" alt="Share icon"/> generate a URL to share with others that will reproduce for them what you see in the text box<br/>
      <img src="../../shared27/images/sample.png" alt="Sample icon"> add some sample text to the text area<br>
      <img src="../../shared27/images/toggle.png" alt="Invisible character toggle icon"/> show/hide invisible characters<br/>
      <img src="../../shared27/images/fonts.png" alt="Fonts icon"> show the font preview list. Mouse over the font names to change the font used for the text area. (Only works for webfonts or fonts you have on your system.) Click on a font name to change the font and store the setting.<br/>
      <img src="../../shared27/images/clear.png" alt="Clear icon"/> delete all the text</blockquote> 	  
	  <details>
	  <summary style="margin-left:7.5%">See a video of the font preview in action</summary>
	  <p><video controls width="100%; max-width:720px" aria-label="Embedded video" style="border:0;"><source src="../../shared27/images/help/font-preview.mp4" type="video/mp4"></video></p>
	  </details>
	  
<p>Find <a href="../../shared27/fontpreview" target="_blank">more information</a> about using the font preview panel, including <cite>Adding your own fonts</cite>, <cite>Identifying missing characters</cite>, and <cite>Checking coverage for a specific language</cite>.</p>


<h3>Controls to the right</h3>
      <p><b class="leadin">Analyze text.</b> This control is particularly useful for understanding the composition of the text. For each character highlighted (or the whole text box if nothing is highlighted) this lists information such as the following:</p>
       <ul>
       <li>phonetic correspondences (IPA)</li>
       <li>type of character</li>
       <li>special usage-related information</li>
       <li>transliteration (per the system designed for this app)</li>
       <li>equivalents in one or more standard or common transcriptions</li>
       <li>the name of the letter</li>
       <li>the character's Unicode name</li>
       </ul>
      <p>There are also links to the information in the character notes page, and to a list of properties for that character.</p>
      <p>If the app recognises a <em>sequence</em> of characters that has a particular significance in its own right, it will show that sequence (slightly indented) after the initial character.</p>
      <p>The two controls <samp>Show IPA</samp> and  <samp>Show Transcription</samp> reproduce the list of characters with the transcription or IPA information alongside each.  This is not an actual transcription: the information is provided on a character by character basis.  However, that said, it can often provide a quick way of producing a transcription.  You can select or grey out the transcription items by clicking on them. The remainder can be transferred to the main text area as a string by clicking on the <samp>Add</samp> button.</p>
      
      <p><b class="leadin">List characters.</b> Produces a list of the Unicode code points in the text area, and displays it in the bottom right corner of the window. At the top of the panel, Latin transliterations are shown alongside each character, to help you identify the components of the string. At the bottom of the panel are a number of icons that let you copy:</p>
      <ol>
      <li>a list of all code points with their Unicode names and code point values (very useful for copy/pasting lists to email, issue threads, or other places)</li>
      <li>the characters you are analysing</li>
      <li>the transliteration of the characters you are analysing</li>
      </ol>
      <p>By clicking on the <img src="../../shared27/images/help/share_transp.png" style="vertical-align:middle;" alt=""/> icon, you can export the characters to other apps.</p>
      <p>When detailed information is available for a given character, you can follow the link on the character name to see it.</p>
      
      <p><b class="leadin">Transliterate.</b> Converts the contents of the text area to a Latin transliteration that provides a one-to-one correspondence between the selected text and Latin symbols.</p>
      <p>The transliteration scheme was developed for this character app, and, where possible, uses symbols that represent sounds typically associated with the main phonological equivalents, rather than the sometimes fairly arbitrary selection of diacritics found in other systems. Of course, the complexities of mapping graphemes to sounds means that this is far from a real phonetic transcription, and it doesn't show vowels or other things that are not shown in the original text, but the process is reversible (unlike most transcriptions).</p>
      <p>Transliterations produced this way are particularly useful for quickly getting an idea of the composition of text in scripts, especially where the individual parts are not well separated in the orthography.</p>
      
      <p><b class="leadin">Find examples.</b> Opens a new window and searches for the highlighted text in the database of terms. The highlighted text can be a single character, or any sequence of characters. If it's a single character, the database will be searched for all terms containing that character. If it's a sequence of characters, the database will be searched for entries containing that sequence.</p>
      <p>The database search works with regular expressions, so for example you could write something like <samp>x..?y</samp> to search for any sequences that begin with an 'x', then have one or two other characters, then end with a 'y'. This supports the regular expression syntax that your browser uses for JavaScript matching. If you want to search for a literal character that is used in regex syntax, such as a period, you'll need to escape it (eg. <samp>\\.</samp>).</p>
      <p>By default, the search attempts to match the language terms and their transcriptions, but you can reduce the scope of the search on the term base page.</p>
      <p>From the term database page you can look up matches in the Wiktionary lemma list by clicking on entries with links.</p>

      <p><b class="leadin">Example markup.</b> This may be useful to speed up the creation of examples. You can create an example with four parts, delimited by /, in the following order:</p>
      <ol>
      <li>native text</li>
      <li>transliteration</li>
      <li>IPA transcription</li>
      <li>meaning</li>
      </ol>
      <p>You don't need to add all four elements, but if you want to skip one in the middle of the sequence, use nothing between the slashes.</p>
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




<section id="functionPulldown">
<h3>The <img src="../../shared27/images/menu.png" style="height: 1.4em; vertical-align: middle;" alt="Left-hand"> pulldown list</h3>

	<p>The list that is accessed via this icon contains additional controls.  The exact controls available for a given app will vary, depending on the type of orthography and whether or not additional features have been added to the app. The list below describes the more common controls, but doesn't describe additional features.</p>
	
      <p><b class="leadin">Show all db entries.</b> This is like 'Analyse text', described above, except that it will list all the meaningful sequences contained in the backend database for each character looked up, whether or not those sequences are contained in the string that is being tested.</p>
      
      <p><b class="leadin">Vocab to markup.</b> Converts a vocab entry to markup that can be used for an example. Must be applied to one line at a time.</p>
<blockquote style="background-color: cornsilk; padding: 0.1em 1em; border-radius: .5em; font-size: 90%;">
<p><code><span lang="km">មេឃ</span>|sky|meːk</code></p>
<p>will produce:</p>
<p><code>&lt;span class="charExample" translate="no"&gt;&lt;bdi class="ex" lang="km" dir="ltr"&gt;<span lang="km">មេឃ</span>&lt;/bdi&gt; &lt;bdi class="trans"&gt;m̱eḵʰ&lt;/bdi&gt; &lt;bdi class="ipa"&gt;meːk&lt;/bdi&gt; &lt;bdi class="meaning"&gt;sky&lt;/bdi&gt;&lt;/span&gt;</code></blockquote></p>
      
      <p><b class="leadin">Sort characters.</b> Produces a space-separated list of characters in the selected text, in Unicode code point order. Characters that appear multiple times are all displayed together.  If you want to remove the spaces, click on <img src="../../images/removespace.png" style="vertical-align:middle;" alt="Remove space"> below the selection area.</p>
      
      <p><b class="leadin">Unique sort.</b> Produces a space-separated list of characters in the selected text, in Unicode code point order, but characters that appear multiple times are reduced to a single item.  If you want to remove the spaces, click on <img src="../../images/removespace.png" style="vertical-align:middle;" alt="Remove space"> below the selection area.</p>
      
      <p><b class="leadin">Word sort.</b> Produces a space-separated list of the words in the selected text, where a 'word' is defined as a string of characters separated by spaces.  This is particularly useful for sorting digraphs and such with ordinary characters.</p>
      
      <p><b class="leadin">Show IPA data.</b> Opens a panel below the text area, and for each of the characters selected, shows phonological information associated with that character. This is not an actual transcription: the information is provided on a character by character basis.  However, that said, it can often provide a quick way of producing a transcription.  You can select or grey out the transcription items by clicking on them. The remainder can be transferred to the main text area as a string by clicking on the <samp>Add</samp> button.</p>
      
      <p><b class="leadin">Show transcription data.</b> Opens a panel below the text area, and for each of the characters selected, shows Latin transcription information associated with that character in the database. This is not an actual transcription: the information is provided on a character by character basis.  However, that said, it can often provide a quick way of producing a transcription.  You can select or grey out the transcription items by clicking on them. The remainder can be transferred to the main text area as a string by clicking on the <samp>Add</samp> button.</p>
      
      <p><b class="leadin">Uppercase.</b> Converts selected text to uppercase.</p>
      
      <p><b class="leadin">Lowercase.</b> Converts selected text to lowercase.</p>
</section>




<section id="exportPulldown">
<h3>The <img src="../../shared27/images/transfer.png" style="height: 1.4em; vertical-align: middle;" alt="Left-hand"> pulldown list</h3>

      <p>This control allows you to send or look up whatever text is currently highlighted in the text area in another app. That app opens in a separate window.</p>
      <p>The selection <samp>Script notes</samp> looks at the first character only in the highlighted text and opens the script description page at point in the index where that character appears. You can then follow the links to places in the page that describe the use of that character.  The <samp>Character notes</samp> selection also picks the first highlighted character and takes you to the character notes document where that is described.</p>
</section>
</section>





<section id="manage_fonts">
<h2 href="#manage_fonts">Manage fonts</h2>
<p><img src="../../shared27/images/help/manage_fonts.png" alt=""/></p>

<p>This control allows you to add fonts to the font preview panel. If you agreed to store settings, they will be remembered for your next session on that device (though remember that you need to set these lists separately on each device you use, since they are stored locally).</p>

<p>Simply add or delete font names (one per line) and click on <samp>Set</samp>.</p>

<p>To find this control, open the font preview panel by clicking on <img src="../../shared27/images/fonts.png" alt="Fonts icon" style="vertical-align:bottom;">, then click on <samp>manage fonts</samp> at the bottom of the panel.</p>

<details>
<summary style="margin-left:7.5%">See a video of how to add fonts to the selection lists.</summary>
<p><video controls width="100%; max-width:720px" aria-label="Embedded video" style="border:0;"><source src="../../shared27/images/help/add-font.mp4" type="video/mp4"></video></p>
</details>

<p>Find <a href="../../shared27/fontpreview" target="_blank">more information</a> about using the font preview panel.</p>
</section>





<section id="inputAids">
<h2>Type-assist &amp; other input aids</h2>

<p><img src="../../shared27/images/help/input_aids.png" style="float:left; margin-inline-end:1em; margin-block-end: 1rem;" alt=""/></p>

<p>The vertical bar to the left allows you to turn on/off a number of features or panels that can help create the text you want.</p>

<p><strong>While the cursor is in the text area, you can toggle between the default Type-assist [T] and Latin type-assist [L] by pressing the <samp>\`</samp> (backquote) key.  You can show or hide a palette for any choices by pressing the <samp>~</samp> (tilde) key.</strong></p>

<p>The <samp>K T P</samp> controls on the different background are for managing highlight information to the selection panel. See <a href="#ktpHints">above</a>.</p>



<p style="clear:both;"><b class="leadin"><span class="iaShortName">S</span> Shape-based lookup.</b> Adds a row of orange pictures representing or containing basic shapes. When you click on a picture, characters that incorporate that shape are highlighted.</p>

<p>This is particularly helpful for those who don't know the script at all and want to pick characters based on their shape, or for those times when you just can't find the character you want and need a hint.</p>

<p>Some characer apps show additional characters below the orange row. These are typically clusters of characters which include the same shape. Click on these characters to add them to the text area.</p>


<p><b class="leadin"><span class="iaShortName">H</span> Hint at similar shapes.</b> Changes the selection area so that, when you mouse over a character, characters that are similar in appearance, and may be easily confused, are automatically highlighted. This can be particularly useful for people who are not familiar with the script, to avoid confusing similar characters, or to find the right character when two or more look similar.</p>

<p><b class="leadin"><span class="iaShortName">T</span> Type assist.</b> Allows you to generate text in the native script from ASCII input. This is on by default when you open the character app.</p>
<p>Characters in the target language are mapped to ASCII keys on your keyboard. If you are unsure which key to press, you have three options:</p>
<ol>
<li>open the type-assist palette (see below), which shows the keys in orange and the character(s) it produces immediately after.</li>
<li>click on <samp>K</samp> in the vertical menu to the left on a light background, and find the character in the selection area – the hint will indicate the key mapping.</li>
<li>mouse over the character in the selection area and look for the letter after <samp>ᵏ</samp> where the character name is displayed.</li>
</ol>
<p>When a key produces more than one native character, you will be offered a list just below the text area.<p>
<p style="text-align:center;"><img src="../../shared27/images/help/type-assist.png" alt=""/></p>
<p>The first item in the list is automatically inserted into the text box, but if you press a number key corresponding to one of the digits, it will be replaced with the character you chose. (You can also click or tap on the character you want, which is handy for mobile devices.)</p>
<p>You should find that very little practise is needed to learn to enter native text quickly. This method is much faster than picking items from the selection area.</p>
<p>Other type-assist methods work in the same way, but the key mappings are different.


<p><b class="leadin"><span class="iaShortName" style="font-size:2rem;">[...]</span> IPA type-assist.</b> Converts IPA to text in the target language.</p>


<p><b class="leadin"><span class="iaShortName" style="font-size:2rem;">&lt;..&gt;</span> Transcription type-assist.</b> Converts a common transcription to text in the target language.</p>

<p><b class="leadin">Other type-assist methods.</b> Some character apps may provide additional converters, such as mappings to the ASCII characters for other transcription forms. They will appear here, and operate in the same way as others we have described. The control is represented by a lowercase letter that has some association with the transcription it handles.</p>


<p><b class="leadin"><span class="iaShortName">⌨</span> Keyboard type-assist.</b> Works as described in the type-assist section above, except that the keys on your keyboard are mapped to a popular keyboard layout, and this option also automatically shows that keyboard layout.</p>


<p><b class="leadin"><span class="iaShortName">L</span><span class="iaShortName">M</span> Latin type-assist/More characters.</b> Using a similar method to the type-assist options previously described, this gives access to the Latin characters you may need to use for transcriptions or other text.</p>
<p>Unlike the previous methods, the first item in any selection list is <strong>not</strong> automatically inserted into the text area.  This makes it easy to type ASCII or other characters that are available from your existing keyboard, but pull in ones that are not available as needed.</p> 
<p>This option is labelled <samp>M</samp> in character apps for Latin-script orthographies (meaning 'More characters').</p>

<p><b class="leadin"><span class="iaShortName">P</span> Palette toggle.</b> While using any of the type-assist methods described above, you can display the key-to-character mappings available for the method you are using.</p>
	<p style="text-align:center;"><img src="../../shared27/images/help/type_assist_palette.png" alt=""/></p>
	<p>The palette can also be toggled by pressing the <kbd>~</kbd> (tilde) key, while the cursor is in the text area.</p>




<section id="yellowControls">
<h2 href="#yellowControls">Controls below the selection panel</h2>

<p><img src="../../shared27/images/help/yellow_controls.png" alt=""/></p>

    <p><b class="leadin">Current font.</b> This control allows you to change the font used in the text area. If you want to use a font that is not in the predefined list, add the font using the <samp>manage fonts</samp> control (see above).</p>
    
    <p><b class="leadin">Font size.</b> Allows you to adjust the size of the font for the text area.</p>
    
    <p><b class="leadin">Add codepoint(s).</b> You can add characters to the text area by typing codepoints and escapes in the <samp translate="no">Add codepoint</samp> field and hitting return. This will accept HTML numeric character references, javascript and other programming escapes, U+ Unicode notation, or just simple codepoint numbers separated by spaces. All codepoint numbers (including those in escapes) must be hexadecimal.</p>

  <p><b class="leadin">Normalise.</b> All text is added to the main text area in Unicode normalisation form NFC by default.  You can change to NFD or no normalisation by clicking on the buttons in the yellow area. Note that normalization only takes place when you click on a character – text pasted into the box won't be normalised until you click on another character above, or click on a button in the yellow area. </p>

    <p><img src="../../shared27/images/help/yellow_controls2.png" alt=""/></p>

    <p><b class="leadin">Line height.</b> Adjust the line height for the text area.</p>

<p><b class="leadin">Change text.</b> Tools for manipulating the content in the text area.</p>
<p><img alt="Add space:" src="../../images/addspace.png"/> &nbsp; Adds a space between every character in the text area.</p>
<p><img alt="Collapse space:" src="../../images/collapsespaces.png"/> &nbsp; Converts multiple spaces to a single space.</p>
<p><img alt="Collapse lines:" src="../../images/collapselines.png"/> &nbsp; Convert all line breaks to spaces.</p>
<p><img alt="Remove space:" src="../../images/removespace.png"/> &nbsp; Removes all spaces from the text area.</p>
<p><img alt="Add comma:" src="../../images/addcomma.png"/> &nbsp; By default, adds ␣ between every character in the text area. Put a different character or sequence of characters in the box just to the left in order to add something else between each character.</p>
<p><img alt="Count:" src="../../images/count.png"/> &nbsp; Counts the number of characters in the text area.</p>
<p><b class="leadin">Replace.</b> Allows you to remove a character from the text area, or replace it with something else. Type in the left-hand box a single character or the hex code point value for the character you want to delete/replace. If replacing, type the replacement text in the right-hand box.</p>

<p><b class="leadin">Search for. </b>If you are searching for a particular character and know (at least part of) the name or the codepoint, type that in the search box and hit return. All characters with matching text in the name or codepoint number will be highlighted. The highlighting is only removed when you click on the <samp translate="no">X</samp> next to the search input field. You can also use regular expression syntax to improve your search results. For example, to find the letter 'ha', but not 'gha' etc, you can use <kbd  translate="no">\\bha\\b</kbd> (or the shortcut, <kbd  translate="no">:ha:</kbd>).</p>

<p><b class="leadin">Reset. </b>Returns all settings you have changed (such as font size, text area size, language, etc.) to the original, default state.</p>
</section>






<section id="moreControls">
<h2 id="more_controls" href="#more_controls">More controls</h2>
  `
  if (direction === 'rtl') out += '<p><img src="../../shared27/images/help/more_controls_rtl.png" alt=""/></p>'
  else out += '<p><img src="../../shared27/images/help/more_controls.png" alt=""/></p>'
  
  out += `
<p><b class="leadin">Set language.</b> Add a BCP47 language tag here (ie. what you would use as the value of a <code class="kw" translate="no">lang</code> attribute in HTML). It is used in code generated by <samp>Make example</samp> and <samp>Character markup</samp> controls to indicate the language of the text.</p>

<p><b class="leadin">CC base.</b> You would normally expect combining characters, such as accents and vowel signs, when displayed alone to be associated with a dotted circle, however these font glyphs are <a href="http://r12a.github.io/blog/?p=1433">handled inconsistently</a> from one browser/font to the next. The app is set up for a given web font initially, but if you change the table font you may need to do something to ensure that combining characters display in a way that helps you click on them. </p>
    <p>The <samp class="kw" translate="no">CC base</samp> control allows you to specify a base character that will be used before each combining character (or no base character). This should hopefully help for most font and browser combinations.</p>

<p><b class="leadin">Table direction.</b> For character apps handling RTL orthohgraphies, this allows you to flip the direction of the selection area</p>

<p><b class="leadin">Box height.</b> Adjust the vertical size of the text area.</p>

<p><b class="leadin">Change selection area font & size.</b> These two controls allow you to change the font and font size for the characters displayed in the selection panel.</p>

`
return out
}












