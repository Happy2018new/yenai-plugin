import{_ as o,X as l,Y as c,a0 as a,Z as e,$ as n,a2 as d,a1 as h,C as s}from"./framework-04471026.js";const u={},p=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),_={href:"https://gitee.com/Le-niao/Yunzai-Bot",target:"_blank",rel:"noopener noreferrer"},m=h(`<p>你可以开箱即用这个插件，不强制安装任何依赖，但你可能会因此失去一些功能</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#在Yunzai-Bot根目录执行</span>
<span class="token function">git</span> clone <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span> https://github.com/yeyang52/yenai-plugin.git ./plugins/yenai-plugin

<span class="token comment">#安装依赖(可选)</span>
<span class="token function">pnpm</span> <span class="token function">add</span> systeminformation cheerio <span class="token parameter variable">-w</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><ul><li>QQ事件通知</li><li>好友申请、群申请、加群申请处理</li><li>更改Bot信息</li><li>群管</li><li>Pixiv</li><li>搜图搜番 <ul><li>saucenao</li><li>ascii2d</li><li>trace.moe</li></ul></li></ul>`,5),f=e("h2",{id:"你发现了问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#你发现了问题","aria-hidden":"true"},"#"),n(" 你发现了问题？")],-1),b={href:"https://github.com/yeyang52/yenai-plugin/issues",target:"_blank",rel:"noopener noreferrer"},g={href:"https://jq.qq.com/?_wv=1027&k=o8FTig5Z",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"友情链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#友情链接","aria-hidden":"true"},"#"),n(" 友情链接")],-1),v={href:"https://tukuai.one",target:"_blank",rel:"noopener noreferrer"},x={href:"https://trss.me/",target:"_blank",rel:"noopener noreferrer"};function B(y,L){const i=s("Boxx"),t=s("ExternalLinkIcon"),r=s("RouterLink");return l(),c("div",null,[a(i),p,e("p",null,[n("Yenai-plugin是"),e("a",_,[n("Yunzai-Bot"),a(t)]),n("的一个扩展插件，提供一些便捷功能和娱乐功能。")]),m,e("p",null,[n("详细功能请到"),a(r,{to:"/features/Notice.html"},{default:d(()=>[n("功能")]),_:1}),n("页面查看")]),f,e("ul",null,[e("li",null,[e("a",b,[n("Github issues"),a(t)])]),e("li",null,[e("a",g,[n("QQ群"),a(t)])])]),k,e("ul",null,[e("li",null,[e("a",v,[n("Earth-K-Plugin"),a(t)])]),e("li",null,[e("a",x,[n("TRSS Script"),a(t)])])])])}const Y=o(u,[["render",B],["__file","about.html.vue"]]);export{Y as default};