import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.BAHi7HeB.js";const y=JSON.parse('{"title":"VS Code Snippets","description":"","frontmatter":{},"headers":[],"relativePath":"cookbook/vscode-snippets.md","filePath":"cookbook/vscode-snippets.md","lastUpdated":1720404777000}'),t={name:"cookbook/vscode-snippets.md"},h=n(`<h1 id="VS-Code-Snippets" tabindex="-1">VS Code Snippets <a class="header-anchor" href="#VS-Code-Snippets" aria-label="Permalink to &quot;VS Code Snippets&quot;">​</a></h1><p>These are some snippets that I use in VS Code to make my life easier.</p><p>Manage user snippets with <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>P</kbd> / <kbd>⇧</kbd> <kbd>⌃</kbd> <kbd>P</kbd> and then <code>Snippets: Configure User Snippets</code>.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">{</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">  &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">Pinia Options Store Boilerplate</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">scope</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">javascript,typescript</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">prefix</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia-options</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">body</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> [</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">import { defineStore, acceptHMRUpdate } from &#39;pinia&#39;</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">export const use\${TM_FILENAME_BASE/^(.*)$/\${1:/pascalcase}/}Store = defineStore(&#39;$TM_FILENAME_BASE&#39;, {</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> state: () =&gt; ({</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   $0</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> }),</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> getters: {},</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> actions: {},</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">})</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">if (import.meta.hot) {</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> import.meta.hot.accept(acceptHMRUpdate(use\${TM_FILENAME_BASE/^(.*)$/\${1:/pascalcase}/}Store, import.meta.hot))</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">}</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">    ],</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">description</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">Bootstrap the code needed for a Vue.js Pinia Options Store file</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  },</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">  &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">Pinia Setup Store Boilerplate</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">scope</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">javascript,typescript</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">prefix</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">pinia-setup</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">body</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> [</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">import { defineStore, acceptHMRUpdate } from &#39;pinia&#39;</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">export const use\${TM_FILENAME_BASE/^(.*)$/\${1:/pascalcase}/}Store = defineStore(&#39;$TM_FILENAME_BASE&#39;, () =&gt; {</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> $0</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> return {}</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">})</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">if (import.meta.hot) {</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> import.meta.hot.accept(acceptHMRUpdate(use\${TM_FILENAME_BASE/^(.*)$/\${1:/pascalcase}/}Store, import.meta.hot))</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">}</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">,</span></span>
<span class="line"><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">      &quot;&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">    ],</span></span>
<span class="line"><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">    &quot;</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">description</span><span style="--shiki-dark:#97E2F2;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">:</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">Bootstrap the code needed for a Vue.js Pinia Setup Store file</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">  }</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span></code></pre></div>`,4),p=[h];function k(l,e,E,r,d,o){return a(),i("div",null,p)}const F=s(t,[["render",k]]);export{y as __pageData,F as default};
