import{_ as s,o as n,c as a,e}from"./app-xqdBJZ50.js";const t={},p=e(`<h1 id="restreaming" tabindex="-1"><a class="header-anchor" href="#restreaming" aria-hidden="true">#</a> Restreaming</h1><p>StreamTV allows you to restream your live stream to multiple platforms at the same time. This feature is available for all pro users.</p><h2 id="infrastucture" tabindex="-1"><a class="header-anchor" href="#infrastucture" aria-hidden="true">#</a> Infrastucture</h2><p>The Restreaming feature is built on top of Nginx RTMP. The following diagram shows the basic architecture of the Restreaming feature.</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> LR
    User<span class="token text string">[User]</span> <span class="token arrow operator">--&gt;</span><span class="token label property">|RTMP|</span> Ingest1<span class="token text string">(Nginx RTMP Ingest LB)</span>
    User <span class="token arrow operator">--&gt;</span><span class="token label property">|SRT|</span> Ingest2<span class="token text string">(C3VOC SRT Relay)</span>
    User <span class="token arrow operator">--&gt;</span><span class="token label property">|WebSocket|</span> Ingest3<span class="token text string">(OWN3D WebSocket Bridge)</span>
    
    Viewer <span class="token arrow operator">--&gt;</span><span class="token label property">|HLS|</span> CDN<span class="token text string">(Video Edge CDN)</span>

    Ingest1 <span class="token arrow operator">--&gt;</span> Auth<span class="token text string">{Auth}</span>
    Ingest2 <span class="token arrow operator">--&gt;</span> Auth
    Ingest3 <span class="token arrow operator">--&gt;</span> Auth

    Auth <span class="token arrow operator">--&gt;</span><span class="token label property">|Redirect|</span> Edge1<span class="token text string">(Nginx RTMP Ingest Edge 1)</span>
    Auth <span class="token arrow operator">--&gt;</span><span class="token label property">|Redirect|</span> Edge2<span class="token text string">(Nginx RTMP Ingest Edge 2)</span>
    Auth <span class="token arrow operator">--&gt;</span><span class="token label property">|Unauthenticated|</span> User
    
    Edge1 <span class="token arrow operator">--&gt;</span><span class="token label property">|FFmpeg Copy|</span> G<span class="token text string">(YouTube Ingest)</span>
    Edge1 <span class="token arrow operator">--&gt;</span><span class="token label property">|FFmpeg Copy|</span> H<span class="token text string">(Twitch Ingest)</span>
    Edge2 <span class="token arrow operator">--&gt;</span><span class="token label property">|FFmpeg Copy|</span> G
    Edge2 <span class="token arrow operator">--&gt;</span><span class="token label property">|FFmpeg Copy|</span> H

    CDN <span class="token arrow operator">--&gt;</span> Edge2
    Client<span class="token text string">[SRT Client]</span> <span class="token arrow operator">--&gt;</span><span class="token label property">|SRT|</span> Ingest2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-endpoints" tabindex="-1"><a class="header-anchor" href="#api-endpoints" aria-hidden="true">#</a> API Endpoints</h2><h3 id="get-streams" tabindex="-1"><a class="header-anchor" href="#get-streams" aria-hidden="true">#</a> Get Streams</h3><p>Returns a list of all streams.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /v1/streams
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9a8e3a6d&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New Stream&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-09-01T12:00:00Z&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;updated_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-09-01T12:00:00Z&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;restream_targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;twitch&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;platform_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;106415581&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;stream_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp://a.rtmp.youtube.com/live2&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-stream-keys" tabindex="-1"><a class="header-anchor" href="#get-stream-keys" aria-hidden="true">#</a> Get Stream Keys</h3><p>Returns a list of all stream keys for a specific stream.</p><p>Supported protocols are <code>rtmp</code>, <code>srt</code> and <code>websocket</code>.</p><blockquote><p>The WebSocket protocol is only available for StreamTV specific products.</p></blockquote><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /v1/streams/{id}/stream-keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stream_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;publish_9a8e3a6d_7jwEDAxdYwDjZeT4BNfu7K6g&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;srt&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stream_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;publish/9a8e3a6d/7jwEDAxdYwDjZeT4BNfu7K6g&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;websocket&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stream_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;publish_9a8e3a6d_7jwEDAxdYwDjZeT4BNfu7K6g&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reset-stream-key" tabindex="-1"><a class="header-anchor" href="#reset-stream-key" aria-hidden="true">#</a> Reset Stream Key</h3><p>Resets the stream key for a specific stream.</p><p>Supported protocols are <code>rtmp</code> and <code>srt</code>.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /v1/streams/{id}/stream-keys/reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-stream" tabindex="-1"><a class="header-anchor" href="#create-stream" aria-hidden="true">#</a> Create Stream</h3><p>Creates a new stream.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>POST /v1/streams
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New Stream&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-stream" tabindex="-1"><a class="header-anchor" href="#update-stream" aria-hidden="true">#</a> Update Stream</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>PUT /v1/streams/{id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New Name&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-stream" tabindex="-1"><a class="header-anchor" href="#delete-stream" aria-hidden="true">#</a> Delete Stream</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>DELETE /v1/streams/{id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="watch-a-stream" tabindex="-1"><a class="header-anchor" href="#watch-a-stream" aria-hidden="true">#</a> Watch a Stream</h3><p>Returns all playlist urls for a specific stream.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /v1/streams/{id}/playlists
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;playlists&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hls&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://video-edge.hls.stream.tv/streams/9a8e3a6d.m3u8&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;srt&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;srt://fsn1.ingest.stream.tv:1337?streamid=play/9a8e3a6d&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-restream-target" tabindex="-1"><a class="header-anchor" href="#create-restream-target" aria-hidden="true">#</a> Create Restream Target</h3><p>Creates a new Restream Target for a specific stream.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /v1/streams/{id}/restream-targets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You either have to provide a <code>stream_key</code> or a <code>stream_url</code> and a <code>stream_key</code> for the Restream Target.</p><p>Option 1: For well known platforms like Twitch, YouTube, Facebook, etc. you can use the <code>platform</code> field.</p><p>Supported platforms are <code>twitch</code>, <code>youtube</code>, <code>kick</code>, <code>custom</code>.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;twitch&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stream_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;live_106415581_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Option 2: For custom platforms you can use the <code>stream_url</code> field.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stream_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp://a.rtmp.youtube.com/live2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stream_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f0gh-mycg-xxxx-xxxx-xxxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update-restream-target" tabindex="-1"><a class="header-anchor" href="#update-restream-target" aria-hidden="true">#</a> Update Restream Target</h3><p>Deletes a Restream Target for a specific stream.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>PATCH /v1/streams/{id}/restream-targets/{id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;New Name&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-restream-target" tabindex="-1"><a class="header-anchor" href="#delete-restream-target" aria-hidden="true">#</a> Delete Restream Target</h3><p>Deletes a Restream Target for a specific stream.</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>DELETE /v1/streams/{id}/restream-targets/{id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get-rtmp-ingest-server-list" tabindex="-1"><a class="header-anchor" href="#get-rtmp-ingest-server-list" aria-hidden="true">#</a> Get RTMP Ingest Server List</h3><p>Returns a list of all available RTMP ingest servers (ordered by distance).</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /v1/ingests?protocol=rtmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ingests&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Germany, Falkenstein&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eu-central&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url_template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp://fsn1.ingest.stream.tv/app/{stream_key}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Finland, Helsinki&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eu-central&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url_template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp://hel1.ingest.stream.tv/app/{stream_key}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USA, Hillsboro&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;us-west&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url_template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp://hil1.ingest.stream.tv/app/{stream_key}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USA, Ashburn&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;us-east&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url_template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rtmp://ash1.ingest.stream.tv/app/{stream_key}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-srt-ingest-server-list" tabindex="-1"><a class="header-anchor" href="#get-srt-ingest-server-list" aria-hidden="true">#</a> Get SRT Ingest Server List</h3><p>Returns a list of all available SRT ingest servers (ordered by distance).</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /v1/ingests?protocol=srt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ingests&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Germany, Falkenstein&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eu-central&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url_template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;srt://fsn1.ingest.stream.tv:1337?streamid={stream_key}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-websocket-ingest-server-list" tabindex="-1"><a class="header-anchor" href="#get-websocket-ingest-server-list" aria-hidden="true">#</a> Get WebSocket Ingest Server List</h3><p>Returns a list of all available WebSocket ingest servers (ordered by distance).</p><blockquote><p>This is an experimental feature and only available for StreamTV specific products.</p></blockquote><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>GET /v1/ingests?protocol=websocket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ingests&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Germany, Falkenstein&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eu-central&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url_template&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wss://fsn1.ingest.stream.tv?stream_key={stream_key}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,63),o=[p];function r(i,l){return n(),a("div",null,o)}const u=s(t,[["render",r],["__file","restream.html.vue"]]);export{u as default};
