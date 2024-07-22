import{_ as e,c as t,o as a,a6 as o}from"./chunks/framework.CpHuYOvE.js";const _=JSON.parse('{"title":"Enumeration: MutationType","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"zh/api/enums/pinia.MutationType.md","filePath":"zh/api/enums/pinia.MutationType.md","lastUpdated":1721384170000}'),n={name:"zh/api/enums/pinia.MutationType.md"},i=o('<p><a href="./../">API 文档</a> / <a href="./../modules/pinia">pinia</a> / MutationType</p><h1 id="enumeration-mutationtype" tabindex="-1">Enumeration: MutationType <a class="header-anchor" href="#enumeration-mutationtype" aria-label="Permalink to &quot;Enumeration: MutationType %{#enumeration-mutationtype}%&quot;">​</a></h1><p><a href="./../modules/pinia">pinia</a>.MutationType</p><p>SubscriptionCallback 的可能类型</p><h2 id="enumeration-members" tabindex="-1">Enumeration Members <a class="header-anchor" href="#enumeration-members" aria-label="Permalink to &quot;Enumeration Members %{#enumeration-members}%&quot;">​</a></h2><h3 id="direct" tabindex="-1">direct <a class="header-anchor" href="#direct" aria-label="Permalink to &quot;direct %{#direct}%&quot;">​</a></h3><p>• <strong>direct</strong> = <code>&quot;direct&quot;</code></p><p>Direct mutation of the state:</p><ul><li><code>store.name = &#39;new name&#39;</code></li><li><code>store.$state.name = &#39;new name&#39;</code></li><li><code>store.list.push(&#39;new item&#39;)</code></li></ul><hr><h3 id="patchfunction" tabindex="-1">patchFunction <a class="header-anchor" href="#patchfunction" aria-label="Permalink to &quot;patchFunction %{#patchfunction}%&quot;">​</a></h3><p>• <strong>patchFunction</strong> = <code>&quot;patch function&quot;</code></p><p>通过 <code>$patch</code> 和一个函数更改 state：</p><ul><li><code>store.$patch(state =&gt; state.name = &#39;newName&#39;)</code></li></ul><hr><h3 id="patchobject" tabindex="-1">patchObject <a class="header-anchor" href="#patchobject" aria-label="Permalink to &quot;patchObject %{#patchobject}%&quot;">​</a></h3><p>• <strong>patchObject</strong> = <code>&quot;patch object&quot;</code></p><p>通过 <code>$patch</code> 和一个对象更改 state：</p><ul><li><code>store.$patch({ name: &#39;newName&#39; })</code></li></ul>',19),c=[i];function r(p,s,u,d,h,l){return a(),t("div",null,c)}const b=e(n,[["render",r]]);export{_ as __pageData,b as default};