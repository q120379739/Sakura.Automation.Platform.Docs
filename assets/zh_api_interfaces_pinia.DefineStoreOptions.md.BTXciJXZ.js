import{_ as e,c as t,o as a,a6 as i}from"./chunks/framework.CpHuYOvE.js";const f=JSON.parse('{"title":"接口：DefineStoreOptions<Id, S, G, A>","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"zh/api/interfaces/pinia.DefineStoreOptions.md","filePath":"zh/api/interfaces/pinia.DefineStoreOptions.md","lastUpdated":1721384170000}'),s={name:"zh/api/interfaces/pinia.DefineStoreOptions.md"},o=i(`<p><a href="./../">API 文档</a> / <a href="./../modules/pinia">pinia</a> / DefineStoreOptions</p><h1 id="interface-definestoreoptions-id-s-g-a" tabindex="-1">接口：DefineStoreOptions&lt;Id, S, G, A&gt; <a class="header-anchor" href="#interface-definestoreoptions-id-s-g-a" aria-label="Permalink to &quot;接口：DefineStoreOptions&lt;Id, S, G, A\\&gt; %{#interface-definestoreoptions-id-s-g-a}%&quot;">​</a></h1><p><a href="./../modules/pinia">pinia</a>.DefineStoreOptions</p><p>用于 option store 的 <code>defineStore()</code> 的配置参数。 可以通过插件 API 扩展来增强 store。</p><p><strong><code>See</code></strong></p><p><a href="./pinia.DefineStoreOptionsBase">DefineStoreOptionsBase</a>.</p><h2 id="type-parameters" tabindex="-1">类型参数 <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;类型参数 %{#type-parameters}%&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名字</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Id</code></td><td style="text-align:left;">extends <code>string</code></td></tr><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <a href="./../modules/pinia#statetree"><code>StateTree</code></a></td></tr><tr><td style="text-align:left;"><code>G</code></td><td style="text-align:left;"><code>G</code></td></tr><tr><td style="text-align:left;"><code>A</code></td><td style="text-align:left;"><code>A</code></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">层次结构 <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;层次结构 %{#hierarchy}%&quot;">​</a></h2><ul><li><p><a href="./pinia.DefineStoreOptionsBase"><code>DefineStoreOptionsBase</code></a>&lt;<code>S</code>, <a href="./../modules/pinia#store"><code>Store</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt;&gt;</p><p>↳ <strong><code>DefineStoreOptions</code></strong></p></li></ul><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="actions" tabindex="-1">actions <a class="header-anchor" href="#actions" aria-label="Permalink to &quot;actions %{#actions}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>actions</strong>: <code>A</code> &amp; <code>ThisType</code>&lt;<code>A</code> &amp; <code>UnwrapRef</code>&lt;<code>S</code>&gt; &amp; <a href="./pinia._StoreWithState"><code>_StoreWithState</code></a>&lt;<code>Id</code>, <code>S</code>, <code>G</code>, <code>A</code>&gt; &amp; <a href="./../modules/pinia#_storewithgetters"><code>_StoreWithGetters</code></a>&lt;<code>G</code>&gt; &amp; <a href="./pinia.PiniaCustomProperties"><code>PiniaCustomProperties</code></a>&lt;<code>string</code>, <a href="./../modules/pinia#statetree"><code>StateTree</code></a>, <a href="./../modules/pinia#_getterstree"><code>_GettersTree</code></a>&lt;<a href="./../modules/pinia#statetree"><code>StateTree</code></a>&gt;, <a href="./../modules/pinia#_actionstree"><code>_ActionsTree</code></a>&gt;&gt;</p><p>action 的可选对象</p><hr><h3 id="getters" tabindex="-1">getters <a class="header-anchor" href="#getters" aria-label="Permalink to &quot;getters %{#getters}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>getters</strong>: <code>G</code> &amp; <code>ThisType</code>&lt;<code>UnwrapRef</code>&lt;<code>S</code>&gt; &amp; <a href="./../modules/pinia#_storewithgetters"><code>_StoreWithGetters</code></a>&lt;<code>G</code>&gt; &amp; <a href="./pinia.PiniaCustomProperties"><code>PiniaCustomProperties</code></a>&lt;<code>string</code>, <a href="./../modules/pinia#statetree"><code>StateTree</code></a>, <a href="./../modules/pinia#_getterstree"><code>_GettersTree</code></a>&lt;<a href="./../modules/pinia#statetree"><code>StateTree</code></a>&gt;, <a href="./../modules/pinia#_actionstree"><code>_ActionsTree</code></a>&gt;&gt; &amp; <a href="./../modules/pinia#_getterstree"><code>_GettersTree</code></a>&lt;<code>S</code>&gt;</p><p>getter 的可选对象</p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id %{#id}%&quot;">​</a></h3><p>• <strong>id</strong>: <code>Id</code></p><p>唯一的字符串密钥，用于识别整个应用中的 store。</p><hr><h3 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state %{#state}%&quot;">​</a></h3><p>• <code>Optional</code> <strong>state</strong>: () =&gt; <code>S</code></p><h4 id="type-declaration" tabindex="-1">类型声明 <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;类型声明 %{#type-declaration}%&quot;">​</a></h4><p>▸ (): <code>S</code></p><p>创建一个新 state 的函数。 <strong>必须是一个箭头函数</strong>，以确保正确的类型标注!</p><h5 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h5><p><code>S</code></p><h2 id="methods" tabindex="-1">方法 <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;方法 %{#methods}%&quot;">​</a></h2><h3 id="hydrate" tabindex="-1">hydrate <a class="header-anchor" href="#hydrate" aria-label="Permalink to &quot;hydrate %{#hydrate}%&quot;">​</a></h3><p>▸ <code>Optional</code> <strong>hydrate</strong>(<code>storeState</code>, <code>initialState</code>): <code>void</code></p><p>当 store 定义中使用了复杂的 state (如仅客户端的引用)，并且仅从 <code>pinia.state</code> 中复制值是不够时， 允许在 SSR 期间对 store 进行 hydrating。</p><p><strong><code>Example</code></strong></p><p>如果在你的 <code>state</code> 中，你使用了任何在服务器和客户端有不同值的 <code>customRef</code>、<code>computed</code> 或 <code>ref</code>， 你需要手动激活它们。 例如，一个存储在本地存储的自定义 ref：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> useStore</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> defineStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">main</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  state</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> () </span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">=&gt;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> ({</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">    n</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useLocalStorage</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">key</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">, </span><span style="--shiki-dark:#BF9EEE;--shiki-light:#2F798A;">0</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  }),</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  hydrate</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">storeState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">, </span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">initialState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">) {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">    // @ts-expect-error: https://github.com/microsoft/TypeScript/issues/43826</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">    storeState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">n</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useLocalStorage</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">key</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">, </span><span style="--shiki-dark:#BF9EEE;--shiki-light:#2F798A;">0</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span></code></pre></div><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">名字</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>storeState</code></td><td style="text-align:left;"><code>UnwrapRef</code>&lt;<code>S</code>&gt;</td><td style="text-align:left;">the current state in the store</td></tr><tr><td style="text-align:left;"><code>initialState</code></td><td style="text-align:left;"><code>UnwrapRef</code>&lt;<code>S</code>&gt;</td><td style="text-align:left;">initialState</td></tr></tbody></table><h4 id="返回值-1" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-1" aria-label="Permalink to &quot;返回值&quot;">​</a></h4><p><code>void</code></p>`,41),d=[o];function n(r,l,h,p,c,k){return a(),t("div",null,d)}const y=e(s,[["render",n]]);export{f as __pageData,y as default};