import{_ as c,r as o,o as i,c as l,a as n,b as s,d as a,w as r,e as t}from"./app-ALAXI9dN.js";const u={},d=n("h1",{id:"examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),s(" Examples")],-1),k={id:"trigger-alerts",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#trigger-alerts","aria-hidden":"true"},"#",-1),m=t(`<p>Right now you can trigger alerts by two ways:</p><ul><li><strong>Using templates</strong>: You can use existing templates from the user to trigger alerts.</li><li><strong>Using custom templates</strong>: You can create your own templates to trigger alerts.</li></ul><h3 id="type-1-trigger-alerts-using-existing-templates" tabindex="-1"><a class="header-anchor" href="#type-1-trigger-alerts-using-existing-templates" aria-hidden="true">#</a> Type 1: Trigger alerts using existing templates</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST https://api.own3d.pro/v1/alerts
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer {access_token}</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;follow&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GhostZero&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="supported-templates" tabindex="-1"><a class="header-anchor" href="#supported-templates" aria-hidden="true">#</a> Supported Templates</h4><table><thead><tr><th>Template</th><th>Description</th></tr></thead><tbody><tr><td><code>follow</code></td><td>Someone follows your channel</td></tr><tr><td><code>gift-subscribe</code></td><td>Someone gifted a subscription to your channel</td></tr><tr><td><code>subscribe</code></td><td>Someone subscribes to your channel</td></tr><tr><td><code>cheer</code></td><td>Someone cheers on your channel</td></tr><tr><td><code>raid</code></td><td>Someone raids your channel</td></tr><tr><td><code>donation</code></td><td>Someone donates to your channel</td></tr></tbody></table>`,6),h={id:"type-2-trigger-alerts-using-custom-templates",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#type-2-trigger-alerts-using-custom-templates","aria-hidden":"true"},"#",-1),g=t(`<div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST https://api.own3d.pro/v1/alerts
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer {access_token}</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;image_href&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://media.giphy.com/media/pzmbXFDiRbEEk1vCtP/giphy-downsized.gif&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sound_href&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Custom Alert&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;subtitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{{message}}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;display_time&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;layout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;banner&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;volume&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;font_size&quot;</span><span class="token operator">:</span> <span class="token number">1.4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;font_family&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Montserrat&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;font_weight&quot;</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
        <span class="token property">&quot;font_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;font_highlight_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#8205b3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;font_animation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiggle&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;font_delay&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;animation_alert_enter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fade-in&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;animation_alert_leave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fade-out&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World!&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y={id:"type-3-trigger-alerts-using-custom-templates-and-custom-data",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#type-3-trigger-alerts-using-custom-templates-and-custom-data","aria-hidden":"true"},"#",-1),f=t(`<p>In our latest alert engine update, we added the ability to use custom <code>fields</code> in your templates. Which allow you to create more dynamic alerts and animations. The <code>fields</code> property is an array of key-value pairs, which you can use in your HTML, CSS and JS templates using the <code>{key}</code> syntax.</p><p>Custom Fields (<code>fields</code>) are mostly used for additional settings within your theme to change the appearance of your alert. For example, you can create a custom field called <code>font_color</code> and use it in your CSS to change the color of your alert.</p><blockquote><p><strong>Coming Soon:</strong> Custom Fields can also be edited by the streamer in the OWN3D dashboard. In order to use custom fields in the dashboard, using form inputs. Therefore, the field must be added to the <code>fields</code> array of the alert configs too.</p></blockquote><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST https://api.own3d.pro/v1/alerts
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer {access_token}</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
    <span class="token property">&quot;template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;user_defaults&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;div&gt;{key}&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/** CSS */&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/** JS */&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{{message}}&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World!&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="socket-api" tabindex="-1"><a class="header-anchor" href="#socket-api" aria-hidden="true">#</a> Socket API</h2><p>The Socket API is a simple way to receive realtime updates from our infrastructure. It is used within our browser source to display alerts, for example.</p><h3 id="use-sockets-with-socket-io" tabindex="-1"><a class="header-anchor" href="#use-sockets-with-socket-io" aria-hidden="true">#</a> Use Sockets with Socket.IO</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> io <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;socket.io-client&#39;</span>

<span class="token comment">// Connect to the socket</span>
<span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token string">&#39;https://socket-hel1-1.own3d.dev&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Required for cookies</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Join a room for the current user</span>
socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Connected to socket server, id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>socket<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;room&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;90a951d1-ea50-4fda-8c4d-275b81f7d219.twitch.106415581&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Listen for events</span>
socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;notifysub&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Got a new event from the notification subscription service:&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The socket server uses sticky sessions to distribute the load across multiple servers. If you&#39;re using NodeJS, you must use the <code>serverid</code> cookie to connect to the correct server, otherwise you will encounter connection issues.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> io <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;socket.io-client&#39;</span>

<span class="token comment">// List of available servers</span>
<span class="token keyword">const</span> servers <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// The list of available servers is not public. </span>
    <span class="token comment">// Please contact us if you need access to the list of available servers.</span>
<span class="token punctuation">]</span>

<span class="token comment">// Select a random server</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> servers<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> servers<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token comment">// Connect to the socket</span>
<span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token string">&#39;https://socket-hel1-1.own3d.dev&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Required for cookies</span>
    <span class="token literal-property property">extraHeaders</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">Cookie</span><span class="token operator">:</span> <span class="token string">&#39;serverid=&#39;</span> <span class="token operator">+</span> server<span class="token punctuation">,</span> <span class="token comment">// Set the serverid cookie</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// continue as usual</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,9),_={id:"use-sockets-with-own3d-extension-helper",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#use-sockets-with-own3d-extension-helper","aria-hidden":"true"},"#",-1),x=t(`<p>Using the OWN3D Extension Helper, you can easily connect to the socket server and listen for events.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">OWN3D</span><span class="token punctuation">.</span>ext<span class="token punctuation">.</span>socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;notifysub&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Got notify-sub event&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token constant">OWN3D</span><span class="token punctuation">.</span>ext<span class="token punctuation">.</span>socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;browser-source-updated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Got browser-source-updated event&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function S(T,j){const e=o("Badge"),p=o("RouterLink");return i(),l("div",null,[d,n("h2",k,[v,s(" Trigger Alerts "),a(e,{text:"beta",type:"warning"})]),m,n("h3",h,[b,s(" Type 2: Trigger alerts using custom templates "),a(e,{text:"beta",type:"warning"})]),g,n("h3",y,[q,s(" Type 3: Trigger alerts using custom templates and custom data "),a(e,{text:"closed beta",type:"warning"})]),f,n("h3",_,[w,s(" Use Sockets with OWN3D Extension Helper "),a(e,{text:"beta",type:"warning"})]),n("blockquote",null,[n("p",null,[s("This feature using the "),a(p,{to:"/docs/alerts/extensions/extension-helper.html"},{default:r(()=>[s("OWN3D Extension Helper")]),_:1}),s(".")])]),x])}const N=c(u,[["render",S],["__file","examples.html.vue"]]);export{N as default};
