import{_ as s,c as i,o as a,a6 as t}from"./chunks/framework.BAHi7HeB.js";const g=JSON.parse('{"title":"HMR (Hot Module Replacement)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/cookbook/hot-module-replacement.md","filePath":"zh/cookbook/hot-module-replacement.md","lastUpdated":1721384170000}'),e={name:"zh/cookbook/hot-module-replacement.md"},h=t(`<h1 id="hmr-hot-module-replacement" tabindex="-1">HMR (Hot Module Replacement) <a class="header-anchor" href="#hmr-hot-module-replacement" aria-label="Permalink to &quot;HMR (Hot Module Replacement) %{#hmr-hot-module-replacement}%&quot;">​</a></h1><p>Pinia 支持热更新，所以你可以编辑你的 store，并直接在你的应用中与它们互动，而不需要重新加载页面，允许你保持当前的 state、并添加甚至删除 state、action 和 getter。</p><p>目前，只有 <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> 被官方支持，不过任何实现 <code>import.meta.hot</code> 规范的构建工具都应该能正常工作。(例外的是，<a href="https://webpack.js.org/api/module-variables/#importmetawebpackhot" target="_blank" rel="noreferrer">webpack</a> 似乎使用的是 <code>import.meta.webpackHot</code> 而不是 <code>import.meta.hot</code> ) 你只需要在任何 store 声明旁边添加这段代码。比方说，你有三个 store：<code>auth.js</code>、 <code>cart.js</code> 和 <code>chat.js</code>, 你必须在每个 <strong>store 声明</strong>后都添加(和调整)这段代码。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// auth.js</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> defineStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> acceptHMRUpdate</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> useAuth</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> defineStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">auth</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // 配置...</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 确保传递正确的 store 声明，本例中为 \`useAuth\`</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">hot</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">hot</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">accept</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">acceptHMRUpdate</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">useAuth</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">hot</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">))</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div>`,4),n=[h];function p(l,k,r,F,o,d){return a(),i("div",null,n)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
