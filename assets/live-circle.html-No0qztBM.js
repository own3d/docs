import{_ as e,o as t,c as a,e as o}from"./app-ALAXI9dN.js";const r={},s=o('<h1 id="life-cycle-management" tabindex="-1"><a class="header-anchor" href="#life-cycle-management" aria-hidden="true">#</a> Life Cycle Management</h1><p>Each extension version goes through a release circle. The release circle is a process that ensures that each extension version is reviewed and tested before it is published to the public. For now, you can only publish one version of your extension at a time. Each new release will deprecate the previous version.</p><blockquote><p>During <strong>Local Test</strong> &amp; <strong>Hosted Test</strong> you can select to <strong>up to 10 <a href="#access-control">Internal Tester</a> accounts</strong> (by ID or username) to make your app available for internal testing releases.</p></blockquote><h2 id="local-test" tabindex="-1"><a class="header-anchor" href="#local-test" aria-hidden="true">#</a> Local Test</h2><p>Each version begins with the local test state. In this state, you can test your extension locally without uploading it to our CDN. You can use a local webserver with HTTPS support to test your extension.</p><h2 id="hosted-test" tabindex="-1"><a class="header-anchor" href="#hosted-test" aria-hidden="true">#</a> Hosted Test</h2><p>In the hosted test state, your extension is hosted on our CDN. In this state, you can test your extension how it will behave in the production environment and make sure that everything works as expected before submitting it for a code and feature review.</p><h2 id="in-review" tabindex="-1"><a class="header-anchor" href="#in-review" aria-hidden="true">#</a> In Review</h2><p>In the review state, your extension is reviewed by our team. We check if your extension follows our guidelines and works as expected. If your extension is rejected, you can fix the issues and resubmit it for a review.</p><h2 id="rejected" tabindex="-1"><a class="header-anchor" href="#rejected" aria-hidden="true">#</a> Rejected</h2><p>If your extension is rejected, you can fix the issues and resubmit it for a review. You must move your extension back to the local test state before you can resubmit it for a second review.</p><h2 id="approved" tabindex="-1"><a class="header-anchor" href="#approved" aria-hidden="true">#</a> Approved</h2><p>If your extension is approved, you can publish it to the public.</p><h2 id="published" tabindex="-1"><a class="header-anchor" href="#published" aria-hidden="true">#</a> Published</h2><p>If your extension is published, it is available to all or selected OWN3D users depending on your <a href="#access-control">Content Creator Allowlist</a> settings.</p><h2 id="deprecated" tabindex="-1"><a class="header-anchor" href="#deprecated" aria-hidden="true">#</a> Deprecated</h2><p>If you publish a new version of your extension, the previous version will be deprecated. You can roll back/restore a deprecated version of your extension at any time but not later than 30 days after the deprecation.</p>',17),i=[s];function n(c,h){return t(),a("div",null,i)}const l=e(r,[["render",n],["__file","live-circle.html.vue"]]);export{l as default};
