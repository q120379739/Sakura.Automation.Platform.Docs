import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.CpHuYOvE.js";const y=JSON.parse('{"title":"在组件外使用 store","description":"","frontmatter":{},"headers":[],"relativePath":"zh/core-concepts/outside-component-usage.md","filePath":"zh/core-concepts/outside-component-usage.md","lastUpdated":1721384170000}'),h={name:"zh/core-concepts/outside-component-usage.md"},t=n(`<h1 id="using-a-store-outside-of-a-component" tabindex="-1">在组件外使用 store <a class="header-anchor" href="#using-a-store-outside-of-a-component" aria-label="Permalink to &quot;在组件外使用 store %{#using-a-store-outside-of-a-component}%&quot;">​</a></h1><p>Pinia store 依靠 <code>pinia</code> 实例在所有调用中共享同一个 store 实例。大多数时候，只需调用你定义的 <code>useStore()</code> 函数，完全开箱即用。例如，在 <code>setup()</code> 中，你不需要再做任何事情。但在组件之外，情况就有点不同了。 实际上，<code>useStore()</code> 给你的 <code>app</code> 自动注入了 <code>pinia</code> 实例。这意味着，如果 <code>pinia</code> 实例不能自动注入，你必须手动提供给 <code>useStore()</code> 函数。 你可以根据不同的应用，以不同的方式解决这个问题。</p><h2 id="single-page-applications" tabindex="-1">单页面应用 <a class="header-anchor" href="#single-page-applications" aria-label="Permalink to &quot;单页面应用 %{#single-page-applications}%&quot;">​</a></h2><p>如果你不做任何 SSR(服务器端渲染)，在用 <code>app.use(pinia)</code> 安装 pinia 插件后，对 <code>useStore()</code> 的任何调用都会正常执行：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> useUserStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">@/stores/user</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">vue</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> App</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">./App.vue</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// ❌  失败，因为它是在创建 pinia 之前被调用的</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> userStore</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useUserStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> app</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// ✅ 成功，因为 pinia 实例现在激活了</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> userStore</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useUserStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span></code></pre></div><p>为确保 pinia 实例被激活，最简单的方法就是将 <code>useStore()</code> 的调用放在 pinia 安装后才会执行的函数中。</p><p>让我们来看看这个在 Vue Router 的导航守卫中使用 store 的例子。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> createRouter</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">vue-router</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> router</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createRouter</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">({</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // ...</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// ❌ 由于引入顺序的问题，这将失败</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> store</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">router</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">beforeEach</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">((</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> from</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> next</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // 我们想要在这里使用 store</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">store</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">isLoggedIn</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> next</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  else</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> next</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">/login</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">router</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">beforeEach</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">((</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // ✅ 这样做是可行的，因为路由器是在其被安装之后开始导航的，</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // 而此时 Pinia 也已经被安装。</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">  const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> store</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">to</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">requiresAuth</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> &amp;&amp;</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> !</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">store</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">isLoggedIn</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> return</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">/login</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span></code></pre></div><h2 id="ssr-apps" tabindex="-1">服务端渲染应用 <a class="header-anchor" href="#ssr-apps" aria-label="Permalink to &quot;服务端渲染应用 %{#ssr-apps}%&quot;">​</a></h2><p>当处理服务端渲染时，你将必须把 <code>pinia</code> 实例传递给 <code>useStore()</code>。这可以防止 pinia 在不同的应用实例之间共享全局状态。</p><p>在<a href="./../ssr/">SSR 指南</a>中有一整节专门讨论这个问题，这里只是一个简短的解释。</p>`,11),p=[t];function k(e,l,r,F,d,o){return a(),i("div",null,p)}const c=s(h,[["render",k]]);export{y as __pageData,c as default};