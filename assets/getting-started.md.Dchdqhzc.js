import{_ as t,D as e,c as n,I as h,j as s,a as i,a6 as p,o as l}from"./chunks/framework.BAHi7HeB.js";const f=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md","lastUpdated":1720404777000}'),k={name:"getting-started.md"},r=s("h1",{id:"Getting-Started",tabindex:"-1"},[i("Getting Started "),s("a",{class:"header-anchor",href:"#Getting-Started","aria-label":'Permalink to "Getting Started"'},"​")],-1),o=s("h2",{id:"Installation",tabindex:"-1"},[i("Installation "),s("a",{class:"header-anchor",href:"#Installation","aria-label":'Permalink to "Installation"'},"​")],-1),d=p(`<p>Install <code>pinia</code> with your favorite package manager:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">yarn</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> add</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> pinia</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;"># or with npm</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">npm</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> install</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> pinia</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If your app is using Vue &lt;2.7, you also need to install the composition api: <code>@vue/composition-api</code>. If you are using Nuxt, you should follow <a href="/ssr/nuxt">these instructions</a>.</p></div><p>If you are using the Vue CLI, you can instead give this <a href="https://github.com/wobsoriano/vue-cli-plugin-pinia" target="_blank" rel="noreferrer"><strong>unofficial plugin</strong></a> a try.</p><p>Create a pinia instance (the root store) and pass it to the app as a plugin:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">vue</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line highlighted"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> App</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">./App.vue</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line highlighted"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> app</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">mount</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">#app</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span></code></pre></div><p>If you are using Vue 2, you also need to install a plugin and inject the created <code>pinia</code> at the root of the app:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line highlighted"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> PiniaVuePlugin</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">Vue</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">PiniaVuePlugin</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line highlighted"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;--shiki-dark-font-weight:bold;--shiki-light-font-weight:inherit;">new</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> Vue</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">({</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">  el</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">#app</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // other options...</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // ...</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // note the same \`pinia\` instance can be used across multiple Vue apps on</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // the same page</span></span>
<span class="line highlighted"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">  pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span></code></pre></div><p>This will also add devtools support. In Vue 3, some features like time traveling and editing are still not supported because vue-devtools doesn&#39;t expose the necessary APIs yet but the devtools have way more features and the developer experience as a whole is far superior.</p><h2 id="What-is-a-Store-" tabindex="-1">What is a Store? <a class="header-anchor" href="#What-is-a-Store-" aria-label="Permalink to &quot;What is a Store?&quot;">​</a></h2><p>A Store (like Pinia) is an entity holding state and business logic that isn&#39;t bound to your Component tree. In other words, <strong>it hosts global state</strong>. It&#39;s a bit like a component that is always there and that everybody can read off and write to. It has <strong>three concepts</strong>, the <a href="./core-concepts/state">state</a>, <a href="./core-concepts/getters">getters</a> and <a href="./core-concepts/actions">actions</a> and it&#39;s safe to assume these concepts are the equivalent of <code>data</code>, <code>computed</code> and <code>methods</code> in components.</p><h2 id="When-should-I-use-a-Store" tabindex="-1">When should I use a Store <a class="header-anchor" href="#When-should-I-use-a-Store" aria-label="Permalink to &quot;When should I use a Store&quot;">​</a></h2><p>A store should contain data that can be accessed throughout your application. This includes data that is used in many places, e.g. User information that is displayed in the navbar, as well as data that needs to be preserved through pages, e.g. a very complicated multi-step form.</p><p>On the other hand, you should avoid including in the store local data that could be hosted in a component instead, e.g. the visibility of an element local to a page.</p><p>Not all applications need access to a global state, but if yours need one, Pinia will make your life easier.</p>`,15);function g(c,F,y,u,E,m){const a=e("VueMasteryLogoLink");return l(),n("div",null,[r,o,h(a,{for:"pinia-cheat-sheet"}),d])}const v=t(k,[["render",g]]);export{f as __pageData,v as default};
