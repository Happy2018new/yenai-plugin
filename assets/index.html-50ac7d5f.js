import{_ as o,X as c,Y as r,Z as n,$ as e,a0 as a,a1 as l,C as s}from"./framework-04471026.js";const d={},p=l(`<h3 id="让生活多姿多彩" tabindex="-1"><a class="header-anchor" href="#让生活多姿多彩" aria-hidden="true">#</a> 让生活多姿多彩<img src="https://media.giphy.com/media/mGcNjsfWAjY5AEZNw6/giphy.gif" width="50"></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#在Yunzai-Bot根目录执行</span>
<span class="token function">git</span> clone <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span> https://github.com/yeyang52/yenai-plugin.git ./plugins/yenai-plugin

<span class="token comment">#安装依赖</span>
<span class="token function">pnpm</span> <span class="token function">add</span> systeminformation cheerio <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m={class:"hint-container tip"},h=n("p",{class:"hint-container-title"},"提示",-1),u={href:"https://gitee.com/Le-niao/Yunzai-Bot",target:"_blank",rel:"noopener noreferrer"};function _(v,g){const t=s("ExternalLinkIcon"),i=s("Boxx");return c(),r("div",null,[p,n("div",m,[h,n("p",null,[e("Yenai-plugin仅适配"),n("a",u,[e("Yunzai-Bot V3"),a(t)])])]),a(i)])}const b=o(d,[["render",_],["__file","index.html.vue"]]);export{b as default};