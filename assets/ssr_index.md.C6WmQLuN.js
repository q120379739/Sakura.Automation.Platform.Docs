import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.CpHuYOvE.js";const y=JSON.parse('{"title":"Server Side Rendering (SSR)","description":"","frontmatter":{},"headers":[],"relativePath":"ssr/index.md","filePath":"ssr/index.md","lastUpdated":1720404777000}'),t={name:"ssr/index.md"},e=n(`<h1 id="Server-Side-Rendering-SSR-" tabindex="-1">Server Side Rendering (SSR) <a class="header-anchor" href="#Server-Side-Rendering-SSR-" aria-label="Permalink to &quot;Server Side Rendering (SSR)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are using <strong>Nuxt.js,</strong> you need to read <a href="./nuxt"><strong>these instructions</strong></a> instead.</p></div><p>Creating stores with Pinia should work out of the box for SSR as long as you call your <code>useStore()</code> functions at the top of <code>setup</code> functions, <code>getters</code> and <code>actions</code>:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#62E884;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> setup</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// this works because pinia knows what application is running inside of</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// \`setup\`</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> main</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useMainStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span></code></pre></div><h2 id="Using-the-store-outside-of-setup-" tabindex="-1">Using the store outside of <code>setup()</code> <a class="header-anchor" href="#Using-the-store-outside-of-setup-" aria-label="Permalink to &quot;Using the store outside of \`setup()\`&quot;">​</a></h2><p>If you need to use the store somewhere else, you need to pass the <code>pinia</code> instance <a href="./../getting-started#installation">that was passed to the app</a> to the <code>useStore()</code> function call:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> app</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">router</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">router</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">beforeEach</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">((</span><span style="--shiki-dark:#FFB86C;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">to</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // ✅ This will work make sure the correct store is used for the</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // current running app</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">  const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> main</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useMainStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">to</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">meta</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">requiresAuth</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> &amp;&amp;</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> !</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">main</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">isLoggedIn</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> return</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">/login</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span></code></pre></div><p>Pinia conveniently adds itself as <code>$pinia</code> to your app so you can use it in functions like <code>serverPrefetch()</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">export</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> default</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  serverPrefetch</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">    const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> store</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">this</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">$pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  },</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div><p>Note you don&#39;t need to do anything special when using <code>onServerPrefetch()</code>:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#62E884;--shiki-light:#B07D48;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;"> setup</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> store</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> useStore</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">onServerPrefetch</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">async</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> ()</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =&gt;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">  // ✅ this will work</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  await</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> store</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">fetchData</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">})</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&lt;/</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">script</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">&gt;</span></span></code></pre></div><h2 id="State-hydration" tabindex="-1">State hydration <a class="header-anchor" href="#State-hydration" aria-label="Permalink to &quot;State hydration&quot;">​</a></h2><p>To hydrate the initial state, you need to make sure the rootState is included somewhere in the HTML for Pinia to pick it up later on. Depending on what you are using for SSR, <strong>you should escape the state for security reasons</strong>. We recommend using <a href="https://github.com/nuxt-contrib/devalue" target="_blank" rel="noreferrer">@nuxt/devalue</a> which is the one used by Nuxt.js:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> devalue</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">@nuxt/devalue</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">import</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> }</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> from</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// retrieve the rootState server side</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> app</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">router</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// after rendering the page, the root state is built and can be read directly</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// on \`pinia.state.value\`.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// serialize, escape (VERY important if the content of the state can be changed</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// by the user, which is almost always the case), and place it somewhere on</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// the page, for example, as a global variable.</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">devalue</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">state</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">value</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span></code></pre></div><p>Depending on what you are using for SSR, you will set an <em>initial state</em> variable that will be serialized in the HTML. You should also protect yourself from XSS attacks. You can use <a href="https://github.com/nuxt-contrib/devalue#see-also" target="_blank" rel="noreferrer">other alternatives</a> to <code>@nuxt/devalue</code> depending on what you need, e.g. if you can serialize and parse your state with <code>JSON.stringify()</code>/<code>JSON.parse()</code>, <strong>you could improve your performance by a lot</strong>.</p><p>If you are not using Nuxt you will need to handle the serialization and hydration of the state yourself. Here are some examples:</p><ul><li><a href="https://github.com/antfu/vitesse/blob/main/src/modules/pinia.ts" target="_blank" rel="noreferrer">Vitesse template</a></li><li><a href="https://vite-plugin-ssr.com/pinia" target="_blank" rel="noreferrer">vite-plugin-ssr</a></li></ul><p>Adapt this strategy to your environment. <strong>Make sure to hydrate pinia&#39;s state before calling any <code>useStore()</code> function</strong> on client side. For example, if we serialize the state into a <code>&lt;script&gt;</code> tag to make it accessible globally on client side through <code>window.__pinia</code>, we can write this:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> pinia</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createPinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">const</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;"> app</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> createApp</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">App</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">app</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">use</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">// \`isClient\` depends on the environment, e.g. on Nuxt it&#39;s \`import.meta.client\`</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> (</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">isClient</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">  pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">state</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">value</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;"> =</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#B07D48;"> JSON</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">parse</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">(</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">window</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">.</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#B07D48;">__pinia</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">)</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div>`,19),h=[e];function l(p,k,r,F,d,o){return a(),i("div",null,h)}const c=s(t,[["render",l]]);export{y as __pageData,c as default};