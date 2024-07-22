import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.BAHi7HeB.js";const o=JSON.parse('{"title":"服务端渲染 (SSR)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ssr/index.md","filePath":"zh/ssr/index.md","lastUpdated":1721384170000}'),t={name:"zh/ssr/index.md"},h=n(`<h1 id="server-side-rendering-ssr" tabindex="-1">服务端渲染 (SSR) <a class="header-anchor" href="#server-side-rendering-ssr" aria-label="Permalink to &quot;服务端渲染 (SSR) %{#server-side-rendering-ssr}%&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你使用的是 <strong>Nuxt.js</strong>，你需要阅读的是<a href="./nuxt"><strong>这些说明文档</strong></a>。</p></div><p>只要你只在 <code>setup</code> 函数、<code>getter</code> 和 <code>action</code> 的顶部调用你定义的 <code>useStore()</code> 函数，那么使用 Pinia 创建 store 对于 SSR 来说应该是开箱即用的：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#62E884;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> setup</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 这是可行的，</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 因为 pinia 知道在 \`setup\` 中运行的是什么程序。</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> main</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useMainStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span></code></pre></div><h2 id="using-the-store-outside-of-setup" tabindex="-1">在 <code>setup()</code> 外部使用 store <a class="header-anchor" href="#using-the-store-outside-of-setup" aria-label="Permalink to &quot;在 \`setup()\` 外部使用 store %{#using-the-store-outside-of-setup}%&quot;">​</a></h2><p>如果你需要在其他地方使用 store，你需要将<a href="#install-the-plugin">原本被传递给应用</a> 的 <code>pinia</code> 实例传递给 <code>useStore()</code> 函数：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> app</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">router</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">router</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">beforeEach</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">((</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // ✅这会正常工作，因为它确保了正确的 store 被用于</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // 当前正在运行的应用</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">  const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> main</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useMainStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">to</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">requiresAuth</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> &amp;&amp;</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> !</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">main</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">isLoggedIn</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> return</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">/login</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span></code></pre></div><p>Pinia 会将自己作为 <code>$pinia</code> 添加到你的应用中，所以你可以在 <code>serverPrefetch()</code> 等函数中使用它。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">export</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> default</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  serverPrefetch</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">    const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> store</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">this</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">$pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  },</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div><h2 id="state-hydration" tabindex="-1">State 激活 <a class="header-anchor" href="#state-hydration" aria-label="Permalink to &quot;State 激活 %{#state-hydration}%&quot;">​</a></h2><p>为了激活初始 state，你需要确保 rootState 包含在 HTML 中的某个地方，以便 Pinia 稍后能够接收到它。根据你服务端所渲染的内容，<strong>为了安全你应该转义 state</strong>。我们推荐 Nuxt.js 目前使用的 <a href="https://github.com/nuxt-contrib/devalue" target="_blank" rel="noreferrer">@nuxt/devalue</a>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> devalue</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">@nuxt/devalue</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 检索服务端的 rootState</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> app</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">router</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 渲染页面后，rootState 被建立，</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 可以直接在 \`pinia.state.value\`上读取。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 序列化，转义(如果 state 的内容可以被用户改变，这点就非常重要，几乎都是这样的)</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 并将其放置在页面的某处</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 例如，作为一个全局变量。</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">devalue</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">state</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">value</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span></code></pre></div><p>根据你服务端所渲染的内容，你将设置一个<strong>初始状态</strong>变量，该变量将在 HTML 中被序列化。你还应该保护自己免受 XSS 攻击。例如，在 <a href="https://github.com/frandiox/vite-ssr" target="_blank" rel="noreferrer">vite-ssr</a>中你可以使用<a href="https://github.com/frandiox/vite-ssr#state-serialization" target="_blank" rel="noreferrer"><code>transformState</code> 选项</a> 以及 <code>@nuxt/devalue</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> devalue</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">@nuxt/devalue</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">export</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> default</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> viteSSR</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">  App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  {</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">    routes</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">    transformState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">state</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">      return</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">env</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#B07D48;">SSR</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> ?</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> devalue</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">state</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> :</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> state</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">    },</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  },</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  ({</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> initialState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> })</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">    // ...</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">    if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#998418;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">env</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#B07D48;">SSR</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">      // 序列化并设置为 window.__INITIAL_STATE__</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">      initialState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">state</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">value</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">    }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> else</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">      // 在客户端，我们恢复 state</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">      pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">state</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">value</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> initialState</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">    }</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span></code></pre></div><p>你可以根据你的需要使用 <code>@nuxt/devalue</code> 的<a href="https://github.com/nuxt-contrib/devalue#see-also" target="_blank" rel="noreferrer">其他替代品</a>，例如，你也可以用 <code>JSON.stringify()</code>/<code>JSON.parse()</code> 来序列化和解析你的 state，<strong>这样你可以把性能提高很多。</strong></p><p>也可以根据你的环境调整这个策略。但确保在客户端调用任何 <code>useStore()</code> 函数之前，激活 pinia 的 state。例如，如果我们将 state 序列化为一个 <code>&lt;script&gt;</code> 标签，并在客户端通过 <code>window.__pinia</code> 全局访问它，我们可以这样写：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> app</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// 必须由用户设置</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">isClient</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">  pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">state</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">value</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#B07D48;"> JSON</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">parse</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">window</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">__pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div>`,17),k=[h];function p(l,e,F,r,d,g){return a(),i("div",null,k)}const c=s(t,[["render",p]]);export{o as __pageData,c as default};
