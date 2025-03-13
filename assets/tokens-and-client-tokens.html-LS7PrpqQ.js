import{_ as p,r as o,o as c,c as i,a as s,b as n,d as e,w as t,e as l}from"./app-ALAXI9dN.js";const u={},r=s("h1",{id:"usage-of-tokens",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage-of-tokens","aria-hidden":"true"},"#"),n(" Usage of Tokens")],-1),d=s("code",null,"client_token",-1),k=s("code",null,"token",-1),v=s("p",null,"It's very important to understand the difference between the two tokens and how they are used. To avoid any circumvention during the development and review of your extension. Therefore, we have created this guide to help you understand the difference between the two tokens and how they are used.",-1),m=s("h2",{id:"usage-of-extension-client-tokens",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage-of-extension-client-tokens","aria-hidden":"true"},"#"),n(" Usage of Extension Client Tokens")],-1),h=s("p",null,[n("The "),s("code",null,"onAuthorized"),n(" callback generates two distinct JWT tokens: "),s("code",null,"client_token"),n(" and "),s("code",null,"token"),n(", each catering to different requirements.")],-1),b=s("code",null,"client_token",-1),g=s("code",null,"onAuthorized",-1),f=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">OWN3D</span><span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">onAuthorized</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;On authorized&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://id.stream.tv/api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">Accept</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>client_token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage-of-extension-tokens" tabindex="-1"><a class="header-anchor" href="#usage-of-extension-tokens" aria-hidden="true">#</a> Usage of Extension Tokens</h2><p>The <code>token</code> property of the <code>onAuthorized</code> callback is a JWT token that should be used for any Extension Backend request for authentication. It contains all the information about the user and the channel that is required for authentication and authorization.</p><h3 id="jwt-as-access-token" tabindex="-1"><a class="header-anchor" href="#jwt-as-access-token" aria-hidden="true">#</a> JWT as Access Token</h3><p>JWT can be used as an access token for your backend to prevent unauthorized access to your backend. They are often used as Bearer tokens, which your backend can use to verify the identity of the user and the channel before processing the request.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">OWN3D</span><span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">onAuthorized</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;On authorized&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://example.com/api/extension&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">Accept</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When using our <a href="#example-create-a-express-application-with-jwt-authentication">Example JWT Express App</a> you will get the following response:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Token is valid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;client_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;98ea4168-7aa6-4596-82f7-46fac553bcd6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standalone&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;*&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="verify-jwt-tokens" tabindex="-1"><a class="header-anchor" href="#verify-jwt-tokens" aria-hidden="true">#</a> Verify JWT Tokens</h4><p>Each Extension has its own secret key that is used to sign the JWT tokens by our backend. You can use this secret key to verify the JWT tokens in your backend.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> decoded <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">EXTENSION_SECRET</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// invalid token</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The decoded token will contain the following information:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;client_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;98ea4168-7aa6-4596-82f7-46fac553bcd6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standalone&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;*&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-create-a-express-application-with-jwt-authentication" tabindex="-1"><a class="header-anchor" href="#example-create-a-express-application-with-jwt-authentication" aria-hidden="true">#</a> Example: Create a Express application with JWT authentication</h2><p>To create an Express application that verifies a JWT token from a Bearer authorization header, you&#39;ll need to set up a few components:</p><ol><li><strong>Express Framework</strong>: A popular web application framework for Node.js.</li><li><strong>jsonwebtoken Package</strong>: To decode and verify JWT tokens.</li><li><strong>dotenv Package</strong>: To manage environment variables.</li></ol><p>Here&#39;s a step-by-step guide to create the application:</p><h3 id="step-1-initialize-a-node-js-project" tabindex="-1"><a class="header-anchor" href="#step-1-initialize-a-node-js-project" aria-hidden="true">#</a> Step 1: Initialize a Node.js Project</h3><p>Initialize a new Node.js project, if you haven&#39;t done so already:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> jwt-express-app
<span class="token builtin class-name">cd</span> jwt-express-app
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Modify your <code>package.json</code> to add <code>&quot;type&quot;: &quot;module&quot;</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jwt-express-app&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-2-install-required-packages" tabindex="-1"><a class="header-anchor" href="#step-2-install-required-packages" aria-hidden="true">#</a> Step 2: Install Required Packages</h3><p>Install Express and the necessary packages:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express jsonwebtoken dotenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-3-create-middleware-for-jwt-verification" tabindex="-1"><a class="header-anchor" href="#step-3-create-middleware-for-jwt-verification" aria-hidden="true">#</a> Step 3: Create Middleware for JWT Verification</h3><p>Create a file named <code>verifyToken.js</code> for the middleware:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> jwt <span class="token keyword">from</span> <span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">verifyToken</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> authHeader <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>authorization<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>authHeader <span class="token operator">&amp;&amp;</span> authHeader<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Bearer &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> authHeader<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> authHeader<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

        jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">EXTENSION_SECRET</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> decoded</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Invalid token&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            req<span class="token punctuation">.</span>user <span class="token operator">=</span> decoded<span class="token punctuation">;</span> <span class="token comment">// Add the decoded token to the request object</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Proceed to the next middleware or route handler</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;No token provided&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-4-set-up-the-express-application" tabindex="-1"><a class="header-anchor" href="#step-4-set-up-the-express-application" aria-hidden="true">#</a> Step 4: Set Up the Express Application</h3><p>Create an <code>app.js</code> file:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> dotenv <span class="token keyword">from</span> <span class="token string">&#39;dotenv&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> verifyToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./verifyToken.js&#39;</span><span class="token punctuation">;</span>

dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/extension&#39;</span><span class="token punctuation">,</span> verifyToken<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Token is valid&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">user</span><span class="token operator">:</span> req<span class="token punctuation">.</span>user <span class="token comment">// Use the decoded token information from the middleware</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Server running on port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-5-configure-environment-variables" tabindex="-1"><a class="header-anchor" href="#step-5-configure-environment-variables" aria-hidden="true">#</a> Step 5: Configure Environment Variables</h3><p>Create a <code>.env</code> file in the root of your project:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXTENSION_SECRET=your_jwt_secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Replace <code>your_jwt_secret</code> with your actual JWT secret.</p><h3 id="step-6-run-the-application" tabindex="-1"><a class="header-anchor" href="#step-6-run-the-application" aria-hidden="true">#</a> Step 6: Run the Application</h3><p>Run your application using Node.js:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Remember to manage your <code>EXTENSION_SECRET</code> securely, especially in production environments.</p>`,39);function y(w,x){const a=o("RouterLink");return c(),i("div",null,[r,s("p",null,[n("In our "),e(a,{to:"/docs/extensions/extension-helper.html"},{default:t(()=>[n("Extension Helper")]),_:1}),n(" we provide two tokens: "),d,n(" and "),k,n(". Each token has a different purpose and should be used in different scenarios.")]),v,m,h,s("p",null,[n("The "),b,n(" is tailored for frontend applications, enabling direct interaction with the OWN3D API in your extension without necessitating a backend. This token, obtained during the "),g,n(" trigger, operates like a standard OAuth2 Access Token, as described in the "),e(a,{to:"/docs/authorization.html"},{default:t(()=>[n("Authorization")]),_:1}),n(" section. It's designed to ensure security and efficiency in API communication, with limited scopes and a shorter lifespan.")]),f])}const j=p(u,[["render",y],["__file","tokens-and-client-tokens.html.vue"]]);export{j as default};
