"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[6448],{246:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-4e473bf6",path:"/configuration/03-colorschemes.html",title:"Colorscheme",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Switching colors",slug:"switching-colors",children:[]},{level:2,title:"Installing colorschemes",slug:"installing-colorschemes",children:[]},{level:2,title:"Transparent Windows",slug:"transparent-windows",children:[]}],filePathRelative:"configuration/03-colorschemes.md",git:{updatedTime:162818407e4,contributors:[{name:"christianchiarulli",email:"chrisatmachine@gmail.com",commits:1}]}}},2940:(e,n,s)=>{s.r(n),s.d(n,{default:()=>m});var a=s(6252);const o=(0,a.uE)('<h1 id="colorscheme" tabindex="-1"><a class="header-anchor" href="#colorscheme" aria-hidden="true">#</a> Colorscheme</h1><h2 id="switching-colors" tabindex="-1"><a class="header-anchor" href="#switching-colors" aria-hidden="true">#</a> Switching colors</h2><p>To switch color schemes on the fly, type the following command:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>Telescope <span class="token keyword">colorscheme</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can also press <code>Space</code> <code>s</code> <code>p</code> to cycle through colorschemes with a preview.</p><p>To change the color scheme permanently, modify <code>config.lua</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>colorscheme <span class="token operator">=</span> <span class="token string">&#39;desert&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="installing-colorschemes" tabindex="-1"><a class="header-anchor" href="#installing-colorschemes" aria-hidden="true">#</a> Installing colorschemes</h2>',8),l=(0,a.Uk)("You can add any colorscheme you like. Just add a plugin with the colorscheme of your choice. For more information on installing plugins "),r=(0,a.Uk)("look here. "),c={href:"https://github.com/rockerBOO/awesome-neovim#colorscheme",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("This is a list"),t=(0,a.Uk)(" of colorschemes with tree-sitter support"),u=(0,a.uE)('<h2 id="transparent-windows" tabindex="-1"><a class="header-anchor" href="#transparent-windows" aria-hidden="true">#</a> Transparent Windows</h2><p>If you&#39;re using transparent windows enable this setting</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>transparent_window <span class="token operator">=</span> <span class="token keyword">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>That enables the following settings</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>cmd <span class="token string">&quot;au ColorScheme * hi Normal ctermbg=none guibg=none&quot;</span>\ncmd <span class="token string">&quot;au ColorScheme * hi SignColumn ctermbg=none guibg=none&quot;</span>\ncmd <span class="token string">&quot;au ColorScheme * hi NormalNC ctermbg=none guibg=none&quot;</span>\ncmd <span class="token string">&quot;au ColorScheme * hi MsgArea ctermbg=none guibg=none&quot;</span>\ncmd <span class="token string">&quot;au ColorScheme * hi TelescopeBorder ctermbg=none guibg=none&quot;</span>\ncmd <span class="token string">&quot;au ColorScheme * hi NvimTreeNormal ctermbg=none guibg=none&quot;</span>\ncmd <span class="token string">&quot;let &amp;fcs=&#39;eob: &#39;&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',5),p={},m=(0,s(3744).Z)(p,[["render",function(e,n){const s=(0,a.up)("RouterLink"),p=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[l,(0,a.Wm)(s,{to:"/plugins/"},{default:(0,a.w5)((()=>[r])),_:1})]),(0,a._)("p",null,[(0,a._)("a",c,[i,(0,a.Wm)(p)]),t]),u],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[s,a]of n)e[s]=a;return e}}}]);