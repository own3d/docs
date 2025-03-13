import{_ as s,r as i,o as l,c as u,a as t,b as e,d as o,w as r,e as n}from"./app-ALAXI9dN.js";const p={},h=n('<h1 id="own3d-pro-api" tabindex="-1"><a class="header-anchor" href="#own3d-pro-api" aria-hidden="true">#</a> OWN3D Pro API</h1><blockquote><p><strong>Information</strong>: We&#39;re about to merge own3d.pro and own3d.tv API&#39;s.</p></blockquote><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>The OWN3D Pro API is a RESTful API that allows you to access your own3d.pro account.</p><h3 id="step-1-create-a-new-client" tabindex="-1"><a class="header-anchor" href="#step-1-create-a-new-client" aria-hidden="true">#</a> Step 1: Create a new client</h3>',5),f=t("h3",{id:"step-2-authenticate",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#step-2-authenticate","aria-hidden":"true"},"#"),e(" Step 2: Authenticate")],-1),g={href:"https://github.com/own3d/id",target:"_blank",rel:"noopener noreferrer"},b=n(`<h3 id="step-3-get-your-own3d-pro-account-information" tabindex="-1"><a class="header-anchor" href="#step-3-get-your-own3d-pro-account-information" aria-hidden="true">#</a> Step 3: Get your own3d.pro account information</h3><p>After you have authenticated yourself, you can get your own3d.pro account information by using the <code>https://api.own3d.pro/v1/users</code> endpoint with the access token you have received. An access token will be added as an Authorization header to the request.</p><div class="language-curl line-numbers-mode" data-ext="curl"><pre class="language-curl"><code>curl -X GET https://api.own3d.pro/v1/users \\
  -H &quot;Authorization: Bearer &lt;access_token&gt;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-deprecations" tabindex="-1"><a class="header-anchor" href="#api-deprecations" aria-hidden="true">#</a> API Deprecations</h2><p>Sometimes we need to deprecate an API endpoint. This means that the endpoint will be removed in the future. If you are using an endpoint that is marked as deprecated, you should update your application as soon as possible. We will notify you about the deprecation of an endpoint at least 6 months before it will be removed.</p><h3 id="_2023-02-06" tabindex="-1"><a class="header-anchor" href="#_2023-02-06" aria-hidden="true">#</a> 2023-02-06</h3><p><strong>Deprecation of endpoints</strong></p><ul><li>TBA</li></ul><p><strong>Deprecated attributes in api responses:</strong></p><ul><li>Attribute <code>topic</code> in <code>POST /v1/alerts/test</code> is deprecated (renamed) and will be removed in the future. Please use <code>template</code> instead.</li><li>Attribute <code>categories</code> of <code>Alert</code> is deprecated, use <code>categories</code> instead.</li><li>Attribute <code>alert</code> of <code>AlertConfig</code> is deprecated, avoid using it (it&#39;s inaccurate).</li><li>Attribute <code>goalBar</code> of <code>GoalBarConfig</code> is deprecated, use <code>goal_bar</code> instead.</li><li>Attribute <code>profileImage</code> of <code>Linkspree</code> is deprecated, use <code>profile_image</code> instead.</li><li>Attribute <code>backgroundImage</code> of <code>Linkspree</code> is deprecated, use <code>background_image</code> instead.</li><li>Attribute <code>currencyPrice</code> of <code>Plan</code> is deprecated, use <code>currency_price</code> instead.</li><li>Attribute <code>latestPayment</code> of <code>Subscription</code> is deprecated, use <code>latest_payment</code> instead.</li><li>Attribute <code>actingUser</code> of <code>User</code> is deprecated, use <code>acting_user</code> instead.</li><li>Attribute <code>referralReward</code> of <code>User</code> is deprecated, use <code>referral_reward</code> instead.</li><li>Attribute <code>referralRewards</code> of <code>User</code> is deprecated, use <code>referral_rewards</code> instead.</li></ul><h2 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference" aria-hidden="true">#</a> API Reference</h2>`,11);function m(w,_){const a=i("RouterLink"),d=i("ExternalLinkIcon"),c=i("open-api-documentation");return l(),u("div",null,[h,t("p",null,[e("Before you getting started with the OWN3D Pro API, you need to create a new client. You can get the client id and secret by following the steps in the "),o(a,{to:"/docs/authorization.html#client-registration"},{default:r(()=>[e("Client Registration")]),_:1}),e(" section. If you already have a client, you can skip this step.")]),f,t("p",null,[e("After requesting your client id and secret, you need to authenticate yourself. This can be done by following the steps in the "),o(a,{to:"/docs/authorization.html#authorization-code-flow"},{default:r(()=>[e("Authorization Code Flow")]),_:1}),e(" section. If you call endpoints which require "),o(a,{to:"/docs/authorization.html#scopes"},{default:r(()=>[e("Scopes")]),_:1}),e(", you need to pass those scopes as a parameter to the authorize endpoint.")]),t("blockquote",null,[t("p",null,[e("If you are familiar with laravel, you may want to check our "),t("a",g,[e("own3d/id"),o(d)]),e(". It is a laravel package that provides a simple way to work with our API's.")])]),b,o(c,{specs:"http://own3dpro.test/openapi","base-url":"https://api.own3d.pro"})])}const A=s(p,[["render",m],["__file","own3d-pro-api.html.vue"]]);export{A as default};
