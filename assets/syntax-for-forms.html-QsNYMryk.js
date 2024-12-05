import{_ as c,r as t,o as u,c as d,a as s,b as n,d as a,f as r,w as o,e}from"./app-xqdBJZ50.js";const k="/assets/syntax-for-forms-static-HVHn7uyq.png",v="/assets/syntax-for-forms-dynamic-IIn010Oa.png",m="/assets/extension-context-2_sgGGvE.png",b={},y={id:"syntax-for-forms",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#syntax-for-forms","aria-hidden":"true"},"#",-1),f=e('<h2 id="about-yaml-syntax" tabindex="-1"><a class="header-anchor" href="#about-yaml-syntax" aria-hidden="true">#</a> About YAML Syntax</h2><p>YAML is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted. YAML targets many of the same communications applications as Extensible Markup Language (XML). YAML is a superset of JSON, and YAML files can be parsed as JSON.</p><h2 id="native-inputs" tabindex="-1"><a class="header-anchor" href="#native-inputs" aria-hidden="true">#</a> Native Inputs</h2><p>Native inputs are inputs that are already available in the browser source. They are not defined in the form file. These are the native inputs:</p><ul><li><strong>Title</strong></li><li><strong>Transform</strong></li><li><strong>Shadow</strong></li><li><strong>Filters</strong> (only available for images and videos)</li><li><strong>Opacity</strong></li></ul><p><img src="'+k+'" alt="img.png"></p><h2 id="creating-forms-for-extensions" tabindex="-1"><a class="header-anchor" href="#creating-forms-for-extensions" aria-hidden="true">#</a> Creating Forms For Extensions</h2><p>In opposite to native inputs, custom inputs are defined in the form file. These allow you to create custom inputs for your extension. Even our internal widgets are using this system. The following example shows how to create a form for a browser source:</p><p><img src="'+v+`" alt="img.png"></p><p>Creating forms for browser sources is very easy. We use YAML syntax to define the inputs. The following example shows the syntax for a form with different input types:</p><blockquote><p>Each form must contain a uuid (<code>id</code>) and an array of inputs (<code>inputs</code>). The uuid is used to identify the form in the scene editor which must match with your extension id. The inputs array contains all the inputs that are available in the form.</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">id</span><span class="token punctuation">:</span> 98f9fab0<span class="token punctuation">-</span>0714<span class="token punctuation">-</span>46d8<span class="token punctuation">-</span>ac77<span class="token punctuation">-</span>d57130a1dc88
<span class="token key atrule">inputs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> input
    <span class="token key atrule">id</span><span class="token punctuation">:</span> text
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Text
      <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
      <span class="token key atrule">value</span><span class="token punctuation">:</span> Hello World
    <span class="token key atrule">validations</span><span class="token punctuation">:</span>
      <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h3><ul><li>The <code>id</code> of the form must match the <code>id</code> of the extension.</li><li>The <code>id</code> of the inputs must be unique and cannot be <code>extension</code>.</li><li>The <code>id</code> of the inputs must be an alphanumeric string with a length of 3-32 characters and may contain dashes and underscores.</li></ul><h2 id="fields" tabindex="-1"><a class="header-anchor" href="#fields" aria-hidden="true">#</a> Fields</h2><h3 id="accordion-field" tabindex="-1"><a class="header-anchor" href="#accordion-field" aria-hidden="true">#</a> Accordion Field</h3><p>The <code>accordion</code> field can be used to group any number of other fields.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> accordion
    <span class="token key atrule">id</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>accordion
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> My Accordion
    <span class="token key atrule">fields</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> boolean
        <span class="token key atrule">id</span><span class="token punctuation">:</span> random
        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
          <span class="token key atrule">label</span><span class="token punctuation">:</span> Random
          <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> input
        <span class="token key atrule">id</span><span class="token punctuation">:</span> text
        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
          <span class="token key atrule">label</span><span class="token punctuation">:</span> Text
          <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
          <span class="token key atrule">value</span><span class="token punctuation">:</span> Hello World
          <span class="token key atrule">type</span><span class="token punctuation">:</span> text
        <span class="token key atrule">validations</span><span class="token punctuation">:</span>
          <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The field does not store any values.</p><h3 id="boolean-field" tabindex="-1"><a class="header-anchor" href="#boolean-field" aria-hidden="true">#</a> Boolean Field</h3><p>The <code>boolean</code> field may be used to represent a boolean / &quot;on/off&quot; value. The resulting <code>values</code> will be represented as a boolean value.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> boolean
    <span class="token key atrule">id</span><span class="token punctuation">:</span> random
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Random
      <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;random&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="border-radius-field" tabindex="-1"><a class="header-anchor" href="#border-radius-field" aria-hidden="true">#</a> Border Radius Field</h3><p>The <code>border-radius</code> field provides a beautiful input that can be used to select a border radius value. The <code>value</code> is required and must be an object with the following properties: <code>multiple</code>, <code>radius</code>, <code>top-left</code>, <code>top-right</code>, <code>bottom-left</code> &amp; <code>bottom-right</code>. The <code>multiple</code> will allow you to set the border radius for each corner individually. The <code>radius</code> value will be used when <code>multiple</code> is set to <code>false</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> border<span class="token punctuation">-</span>radius
    <span class="token key atrule">id</span><span class="token punctuation">:</span> border<span class="token punctuation">-</span>radius
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Border Radius
      <span class="token key atrule">value</span><span class="token punctuation">:</span>
        <span class="token key atrule">multiple</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">radius</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">top-left</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">top-right</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">bottom-left</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">bottom-right</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;border-radius&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;multiple&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;radius&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;top-left&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;top-right&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bottom-left&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bottom-right&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="button-field" tabindex="-1"><a class="header-anchor" href="#button-field" aria-hidden="true">#</a> Button Field</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The <code>button</code> field is currently not supported in the scene editor.</p></div><p>The <code>button</code> field allows you to create a button that can be used to trigger an action. It will emit an event through the extension IPC module when the button is clicked. There is no <code>value</code> for this field.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> button
    <span class="token key atrule">id</span><span class="token punctuation">:</span> button
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Button
      <span class="token key atrule">value</span><span class="token punctuation">:</span> Click Me
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Emitted event:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">OWN3D</span><span class="token punctuation">.</span>ext<span class="token punctuation">.</span>ipc<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;ext-id&gt;:inputs:&lt;input-id&gt;:click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Got click event&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="checkbox-field" tabindex="-1"><a class="header-anchor" href="#checkbox-field" aria-hidden="true">#</a> Checkbox Field</h3><p>The <code>checkbox</code> field may be used to represent a boolean / &quot;on/off&quot; value. The resulting <code>values</code> will be represented as a array list of options which are checked using the <code>value</code> as their identifier.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> checkbox
    <span class="token key atrule">id</span><span class="token punctuation">:</span> checkbox
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Checkbox
      <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Option 1
        <span class="token key atrule">value</span><span class="token punctuation">:</span> option<span class="token punctuation">-</span><span class="token number">1</span>
        <span class="token key atrule">checked</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Option 2
        <span class="token key atrule">value</span><span class="token punctuation">:</span> option<span class="token punctuation">-</span><span class="token number">2</span>
        <span class="token key atrule">checked</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;checkbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;option-1&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chips-field" tabindex="-1"><a class="header-anchor" href="#chips-field" aria-hidden="true">#</a> Chips Field</h3><p>The <code>chips</code> field provides a set of chips that can be selected. It behaves exactly like a <code>dropdown</code> field, but with a different UI.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> chips
    <span class="token key atrule">id</span><span class="token punctuation">:</span> battery
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Battery
      <span class="token key atrule">value</span><span class="token punctuation">:</span> full
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Full
        <span class="token key atrule">value</span><span class="token punctuation">:</span> full
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> battery<span class="token punctuation">-</span>full
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Half
        <span class="token key atrule">value</span><span class="token punctuation">:</span> half
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> battery<span class="token punctuation">-</span>half
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Empty
        <span class="token key atrule">value</span><span class="token punctuation">:</span> empty
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> battery<span class="token punctuation">-</span>empty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;battery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;full&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="color-field" tabindex="-1"><a class="header-anchor" href="#color-field" aria-hidden="true">#</a> Color Field</h3><p>The <code>color</code> field provides a color picker that can be used to select a color. The hex code can be either 6 or 8 characters long. The 8 character hex code will be used for the alpha channel.</p><p>If <code>allow-gradient</code> is set, the user can choose between <code>color</code>, <code>linear gradient</code> and <code>radial gradient</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> color
    <span class="token key atrule">id</span><span class="token punctuation">:</span> color
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Color
      <span class="token key atrule">allow-gradient</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;#ff0000&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code> for hex-color:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code> for <code>linear-gradient</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear-gradient(90deg, #FF9602 0%, #ffffff 100%)&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code> for <code>radial-gradient</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;radial-gradient(circle, #c99144ff 0%, #ffffff 100%)&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),g=e(`<h3 id="dropdown-field" tabindex="-1"><a class="header-anchor" href="#dropdown-field" aria-hidden="true">#</a> Dropdown Field</h3><p>The <code>dropdown</code> field provides a dropdown menu. The <code>select</code> options may be defined in the <code>options</code> array.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> dropdown
    <span class="token key atrule">id</span><span class="token punctuation">:</span> dropdown
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Dropdown
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Option 1
        <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Option 2
        <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Option 3
        <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dropdown&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-field" tabindex="-1"><a class="header-anchor" href="#file-field" aria-hidden="true">#</a> File Field</h3><p>The <code>file</code> field allows you to upload a file. The <code>mimeTypes</code> array is required and must contain a list of mime types which are allowed to be uploaded but limited to the following types: <code>mp3</code>, <code>mp4</code>, <code>webm</code>, <code>wav</code>, <code>png</code>, <code>jpg</code>, <code>jpeg</code> and <code>gif</code>. The max file size is 5MB by default.</p><p>Multiple files can be uploaded by setting the <code>multiple</code> attribute to <code>true</code>. When multiple is set to <code>true</code>, the <code>value</code> will be an array of file ids &amp; types.</p><p>We offer multiple popups for selecting files. The <code>popup</code> attribute can be used to define which popup should be used. If you don&#39;t define a popup, the default popup <code>files</code> will be used. The following popups are available:</p><ul><li><code>files</code> - Allows you to select files from your OWN3D media library</li><li><code>gifs</code> - Allows you to select GIFs from Tenor</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> file
    <span class="token key atrule">id</span><span class="token punctuation">:</span> image
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Image
      <span class="token key atrule">multiple</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">mimeTypes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> image/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1337&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="how-files-are-stored" tabindex="-1"><a class="header-anchor" href="#how-files-are-stored" aria-hidden="true">#</a> How Files Are Stored</h4>`,14),q=s("code",null,"value",-1),x=s("h3",{id:"font-settings-field",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#font-settings-field","aria-hidden":"true"},"#"),n(" Font Settings Field")],-1),w=s("code",null,"font-settings",-1),T={href:"https://fonts.bunny.net/",target:"_blank",rel:"noopener noreferrer"},j=e(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> font<span class="token punctuation">-</span>settings
    <span class="token key atrule">id</span><span class="token punctuation">:</span> font<span class="token punctuation">-</span>settings
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Font Settings
      <span class="token key atrule">value</span><span class="token punctuation">:</span>
        <span class="token key atrule">font-color</span><span class="token punctuation">:</span> <span class="token string">&quot;#ffffff&quot;</span>
        <span class="token key atrule">font-family</span><span class="token punctuation">:</span> Inter
        <span class="token key atrule">font-weight</span><span class="token punctuation">:</span> <span class="token number">400</span>
        <span class="token key atrule">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>
        <span class="token key atrule">text-align</span><span class="token punctuation">:</span> left
        <span class="token key atrule">font-style</span><span class="token punctuation">:</span> normal
        <span class="token key atrule">letter-spacing</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token key atrule">line-height</span><span class="token punctuation">:</span> <span class="token number">1.2</span>
        <span class="token key atrule">text-indent</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;font-settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;font-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-family&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Inter&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-weight&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-size&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
      <span class="token property">&quot;text-align&quot;</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;letter-spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;line-height&quot;</span><span class="token operator">:</span> <span class="token number">1.2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="group-field" tabindex="-1"><a class="header-anchor" href="#group-field" aria-hidden="true">#</a> Group Field</h3><p>The <code>group</code> field can be used to visually combine other fields into a group.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> group
    <span class="token key atrule">id</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>group
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> My Group
    <span class="token key atrule">fields</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> boolean
        <span class="token key atrule">id</span><span class="token punctuation">:</span> random
        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
          <span class="token key atrule">label</span><span class="token punctuation">:</span> Random
          <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> input
        <span class="token key atrule">id</span><span class="token punctuation">:</span> text
        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
          <span class="token key atrule">label</span><span class="token punctuation">:</span> Text
          <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
          <span class="token key atrule">value</span><span class="token punctuation">:</span> Hello World
          <span class="token key atrule">type</span><span class="token punctuation">:</span> text
        <span class="token key atrule">validations</span><span class="token punctuation">:</span>
          <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The field does not store any values.</p><h3 id="input-field" tabindex="-1"><a class="header-anchor" href="#input-field" aria-hidden="true">#</a> Input Field</h3><p>The <code>input</code> field provides a simple text input. It can be used for text, numbers, and other types of data. The <code>type</code> attribute can be used to define the type of input. The <code>type</code> attribute is optional and defaults to <code>text</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> input
    <span class="token key atrule">id</span><span class="token punctuation">:</span> text
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Text
      <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
      <span class="token key atrule">value</span><span class="token punctuation">:</span> Hello World
      <span class="token key atrule">type</span><span class="token punctuation">:</span> text
    <span class="token key atrule">validations</span><span class="token punctuation">:</span>
      <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="link-field" tabindex="-1"><a class="header-anchor" href="#link-field" aria-hidden="true">#</a> Link Field</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The <code>link</code> field is currently not supported in the scene editor.</p></div><p>The <code>link</code> field allows you to create a link that can be used to navigate to a specific URL. It will open the link in a new tab. There is no <code>value</code> for this field.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> link
    <span class="token key atrule">id</span><span class="token punctuation">:</span> link
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Link
      <span class="token key atrule">value</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="platforms-field" tabindex="-1"><a class="header-anchor" href="#platforms-field" aria-hidden="true">#</a> Platforms Field</h3><p>The <code>platforms</code> fields allows you to select a single or multiple streaming platform connection. It works like the <code>checkbox</code> field, but with a different UI, and it will automatically fetch the available platforms from the Connections API and pass them to the extension context. The <code>value</code> will be an array of selected platforms. <code>options</code> can be omitted. The selectable values will be the intersection of <code>options</code> (if given) and the platforms that are connected to the user account, including the <code>&quot;own3d&quot;</code> platform.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> platforms
    <span class="token key atrule">id</span><span class="token punctuation">:</span> connections
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">value</span><span class="token punctuation">:</span> twitch
      <span class="token punctuation">-</span> <span class="token key atrule">value</span><span class="token punctuation">:</span> youtube
      <span class="token punctuation">-</span> <span class="token key atrule">value</span><span class="token punctuation">:</span> own3d
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Platforms
      <span class="token key atrule">multiple</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;platforms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;twitch&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;youtube&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;context&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;connections&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;twitch&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1337&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;youtube&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1337&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resource-field" tabindex="-1"><a class="header-anchor" href="#resource-field" aria-hidden="true">#</a> Resource Field</h3><p>Additional <code>resource</code> options may be defined in the <code>options</code> array, like in the <code>dropdown</code> field. When using the <code>multiple</code> option, the value will be an array of selected values.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> resource
    <span class="token key atrule">id</span><span class="token punctuation">:</span> alert<span class="token punctuation">-</span>set
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Alert Set
      <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">1337</span>
      <span class="token key atrule">multiple</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token key atrule">resource</span><span class="token punctuation">:</span>
        <span class="token key atrule">resolver</span><span class="token punctuation">:</span> fetch
        <span class="token key atrule">endpoint</span><span class="token punctuation">:</span> /v1/alerts<span class="token punctuation">-</span>sets
        <span class="token key atrule">map</span><span class="token punctuation">:</span>
          <span class="token key atrule">label</span><span class="token punctuation">:</span> $.data<span class="token punctuation">[</span>*<span class="token punctuation">]</span>.name
          <span class="token key atrule">value</span><span class="token punctuation">:</span> $.data<span class="token punctuation">[</span>*<span class="token punctuation">]</span>.id
    <span class="token key atrule">validations</span><span class="token punctuation">:</span>
      <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;alert-set&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1337&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="search-field" tabindex="-1"><a class="header-anchor" href="#search-field" aria-hidden="true">#</a> Search Field</h3><p>The <code>search</code> field can be used to group any number of other fields and search through them and all of their ancestors. Searched ancestor fields: <code>label</code>, <code>description</code>, <code>title</code>, <code>value</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> search
    <span class="token key atrule">id</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>search
    <span class="token key atrule">fields</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> boolean
        <span class="token key atrule">id</span><span class="token punctuation">:</span> random
        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
          <span class="token key atrule">label</span><span class="token punctuation">:</span> Random
          <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> input
        <span class="token key atrule">id</span><span class="token punctuation">:</span> text
        <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
          <span class="token key atrule">label</span><span class="token punctuation">:</span> Text
          <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
          <span class="token key atrule">value</span><span class="token punctuation">:</span> Hello World
          <span class="token key atrule">type</span><span class="token punctuation">:</span> text
        <span class="token key atrule">validations</span><span class="token punctuation">:</span>
          <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The field does not store any values.</p><h3 id="select-field" tabindex="-1"><a class="header-anchor" href="#select-field" aria-hidden="true">#</a> Select Field</h3><p>The <code>select</code> field is intended to summarise all types of selection lists. These include <code>dropdowns</code>, <code>chips</code> and the <code>grid</code> select.</p><p>The select field currently only supports the <code>grid</code> style, others will follow.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">id</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>select
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> grid
      <span class="token key atrule">multiple</span><span class="token punctuation">:</span> false <span class="token punctuation">|</span> true
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>option<span class="token punctuation">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment"># This is always an array</span>
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Option 1 with icon
        <span class="token key atrule">value</span><span class="token punctuation">:</span> option<span class="token punctuation">-</span><span class="token number">1</span>
        <span class="token key atrule">icon</span><span class="token punctuation">:</span> sparkles <span class="token comment"># Fontawesome Icon</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Option 2 with image
        <span class="token key atrule">value</span><span class="token punctuation">:</span> option<span class="token punctuation">-</span><span class="token number">2</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> images/option<span class="token punctuation">-</span>2<span class="token punctuation">-</span>thumbnail.png <span class="token comment"># Path to image in the extension</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;my-select&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;option-1&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slider-field" tabindex="-1"><a class="header-anchor" href="#slider-field" aria-hidden="true">#</a> Slider Field</h3><p>The <code>slider</code> field provides a beautiful slider that can be used to select a value. The <code>min</code>, <code>max</code> &amp; <code>step</code> values are required.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> slider
    <span class="token key atrule">id</span><span class="token punctuation">:</span> age
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Age
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">18</span>
      <span class="token key atrule">min</span><span class="token punctuation">:</span> <span class="token number">13</span>
      <span class="token key atrule">max</span><span class="token punctuation">:</span> <span class="token number">99</span>
      <span class="token key atrule">step</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tabs-field" tabindex="-1"><a class="header-anchor" href="#tabs-field" aria-hidden="true">#</a> Tabs Field</h3><p>The <code>tabs</code> field provides a tab bar with defined tabs to structure and group other fields. Recommended to be used as the top level field. the optional <code>templates</code> field in a tab specified the pre-selected tab when the user selects templates in the configuration menu.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> tabs
    <span class="token key atrule">id</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>tabs
    <span class="token key atrule">tabs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Tab1
        <span class="token key atrule">fields</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> boolean
            <span class="token key atrule">id</span><span class="token punctuation">:</span> random
            <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
              <span class="token key atrule">label</span><span class="token punctuation">:</span> Random
              <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token punctuation">-</span> <span class="token punctuation">...</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Tab2
        <span class="token key atrule">templates</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">fields</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> input
            <span class="token key atrule">id</span><span class="token punctuation">:</span> text
            <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
              <span class="token key atrule">label</span><span class="token punctuation">:</span> Text
              <span class="token key atrule">description</span><span class="token punctuation">:</span> This is a description
              <span class="token key atrule">value</span><span class="token punctuation">:</span> Hello World
              <span class="token key atrule">type</span><span class="token punctuation">:</span> text
            <span class="token key atrule">validations</span><span class="token punctuation">:</span>
              <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token punctuation">-</span> <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tags-field" tabindex="-1"><a class="header-anchor" href="#tags-field" aria-hidden="true">#</a> Tags Field</h3><p>The <code>tags</code> field allow you to freely type in a list of words. This field is useful for adding a list of users, for which may be included or excluded from a feature, for example.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> tags
    <span class="token key atrule">id</span><span class="token punctuation">:</span> ignored<span class="token punctuation">-</span>users
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Ignored Users
      <span class="token key atrule">description</span><span class="token punctuation">:</span> The users that will be ignored
      <span class="token key atrule">value</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> user1
        <span class="token punctuation">-</span> user2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resulting <code>values</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ignored-users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;user2&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conditional-fields" tabindex="-1"><a class="header-anchor" href="#conditional-fields" aria-hidden="true">#</a> Conditional Fields</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Conditional fields require additional review and may delay the review process. Please use them only when necessary and avoid using them for complex logic since they will decrease the performance of the form.</p></div><p>Conditional fields allow you to show or hide fields based on the value of another field. Conditional fields are defined using the <code>if</code> attribute. The <code>if</code> attribute must be a valid JavaScript expression that returns a boolean value, and it can be used either for the field itself or for values in the <code>options</code> array. As of now, only <code>values</code> are available in the context.</p><p>The following example shows how to use conditional fields in multiple ways:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> theme
    <span class="token key atrule">type</span><span class="token punctuation">:</span> dropdown
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Default
        <span class="token key atrule">value</span><span class="token punctuation">:</span> default
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Legacy
        <span class="token key atrule">value</span><span class="token punctuation">:</span> legacy
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Bubbles
        <span class="token key atrule">value</span><span class="token punctuation">:</span> bubbles
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Zwietracht
        <span class="token key atrule">value</span><span class="token punctuation">:</span> discord
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Theme
      <span class="token key atrule">value</span><span class="token punctuation">:</span> default
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> options
    <span class="token key atrule">type</span><span class="token punctuation">:</span> checkbox
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Test Mode
        <span class="token key atrule">value</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>mode
      <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> <span class="token string">&quot;[&#39;default&#39;, &#39;legacy&#39;].includes(values.theme)&quot;</span>
        <span class="token key atrule">label</span><span class="token punctuation">:</span> Show Badges
        <span class="token key atrule">value</span><span class="token punctuation">:</span> show<span class="token punctuation">-</span>badges
        <span class="token key atrule">checked</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> <span class="token string">&quot;[&#39;default&#39;, &#39;legacy&#39;].includes(values.theme)&quot;</span>
        <span class="token key atrule">label</span><span class="token punctuation">:</span> Show Avatars
        <span class="token key atrule">value</span><span class="token punctuation">:</span> show<span class="token punctuation">-</span>avatars
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Hide Old Messages
        <span class="token key atrule">value</span><span class="token punctuation">:</span> hide<span class="token punctuation">-</span>old<span class="token punctuation">-</span>messages
      <span class="token punctuation">-</span> <span class="token key atrule">label</span><span class="token punctuation">:</span> Hide Commands
        <span class="token key atrule">value</span><span class="token punctuation">:</span> hide<span class="token punctuation">-</span>commands
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Options
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> message<span class="token punctuation">-</span>timeout
    <span class="token key atrule">if</span><span class="token punctuation">:</span> values.options<span class="token punctuation">[</span><span class="token string">&#39;hide-old-messages&#39;</span><span class="token punctuation">]</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> input
    <span class="token key atrule">attributes</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> number
      <span class="token key atrule">label</span><span class="token punctuation">:</span> Message Cleanup
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">30</span>
      <span class="token key atrule">description</span><span class="token punctuation">:</span> The number of seconds to cleanup
    <span class="token key atrule">validations</span><span class="token punctuation">:</span>
      <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="receiving-values" tabindex="-1"><a class="header-anchor" href="#receiving-values" aria-hidden="true">#</a> Receiving Values</h2><h3 id="using-the-api" tabindex="-1"><a class="header-anchor" href="#using-the-api" aria-hidden="true">#</a> Using the API</h3>`,56),_={href:"https://example.com",target:"_blank",rel:"noopener noreferrer"},F=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;resource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1337&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dropdown&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;checkbox&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;code-of-conduct&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;font-settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;font-family&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Impact&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;font-size&quot;</span><span class="token operator">:</span> <span class="token number">14</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ignored-users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;user2&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;98f9fd85-0832-44fa-87d1-e24d9741f632&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-the-extension-helper" tabindex="-1"><a class="header-anchor" href="#using-the-extension-helper" aria-hidden="true">#</a> Using the Extension Helper</h3>`,2),I=s("code",null,"OWN3D.ext.onContext(...)",-1),R=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token constant">OWN3D</span><span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">onContext</span><span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> changed<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// context[&#39;inputs&#39;] contains the current inputs (TBC)</span>
    <span class="token comment">// context[&#39;values&#39;] contains the values from the form</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="img.png"></p>',2);function A(C,W){const i=t("Badge"),l=t("RouterLink"),p=t("ExternalLinkIcon");return u(),d("div",null,[s("h1",y,[h,n(" Syntax for Forms "),a(i,{text:"public beta",type:"warning"})]),f,r("\n### Divider\n\nThe `divider` field displays a horizontal line and provides no other functionaliy.\n```yaml\n  - type: divider\n    id: divider\n```\n"),g,s("p",null,[n("When a file is uploaded using this field, OWN3D will store the file for you. The file will be stored in the OWN3D CDN and will be available until the file is deleted. The "),q,n(" of the field will be the file id which can be used to retrieve the file using the "),a(l,{to:"/docs/file-storage.html"},{default:o(()=>[n("File Storage API")]),_:1}),n(".")]),x,s("p",null,[n("The "),w,n(" field provides a multi input field for font settings. It provides a list of fonts that are available in "),s("a",T,[n("Bunny Fonts"),a(p)]),n(" (the font provider for OWN3D and equivalent to Google Fonts).")]),j,s("p",null,[n("The values are received using the "),s("a",_,[n("TBD"),a(p)]),n(" endpoint. The following example shows how data is represented in the API:")]),F,s("p",null,[n("The values are received using the "),a(l,{to:"/docs/extensions/extension-helper.html"},{default:o(()=>[n("Extension Helper")]),_:1}),n(" method "),I,n(". The following example shows how to receive the values from the form:")]),R])}const O=c(b,[["render",A],["__file","syntax-for-forms.html.vue"]]);export{O as default};
