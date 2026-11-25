/* track.js: what a visit to a video funnel page looks like, sent to our own host (worker events.js, table `events` in
   the D1 database funnel-events). Born 2026-11-25, FB-2301, his words: "We need data ... How many views and clicks are
   we getting on the landing page? Which step are they going to? ... Where are they clicking? Where are they spending
   time?" Read by the AI with scripts/lp-stats.py; nobody opens a dashboard.
   Use: <script src="../track.js" data-root="../" data-page="slides" data-v="9.0.0"></script> after config.js.
   NEVER reads or sends anything typed into a field: field NAMES and button labels only. NOTHING is stored on the
   visitor's device (no cookie, no localStorage, no sessionStorage): a random id lives in memory for this one page
   view, so the steps taken on a page count as one visit and two pages are never joined (outside review 2026-11-25).
   A page never waits on, and never breaks on, its own measurement: every line here is inside a try. */
(function(){
  try{
    var sc=document.currentScript; if(!sc||!window.fetch||!window.JSON) return;
    var ROOT=sc.getAttribute('data-root')||'./', PAGE=sc.getAttribute('data-page')||'', PV=sc.getAttribute('data-v')||'';
    if(!PAGE) return;
    var API=ROOT+'api/event', q=[], t0=Date.now(), seen=0, last=Date.now(), maxSc=0, gone=false, fields={};
    function rand(){ var s=''; for(var i=0;i<16;i++) s+='abcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random()*36)); return s; }
    var sid=rand(), leaves=0;
    function body(){ var ev=q.splice(0,12); return JSON.stringify({sid:sid,page:PAGE,pv:PV,ref:document.referrer||'',qs:location.search||'',ev:ev}); }
    function flush(leaving){
      if(!q.length) return;
      try{
        var b=body();
        if(leaving&&navigator.sendBeacon){ navigator.sendBeacon(API,new Blob([b],{type:'text/plain'})); return; }
        fetch(API,{method:'POST',body:b,keepalive:true,credentials:'same-origin',headers:{'content-type':'text/plain'}})['catch'](function(){});
      }catch(e){}
    }
    function add(e){ try{ if(q.length<60) q.push(e); }catch(x){} }
    window.sfTrack=function(name,props){ var e={e:String(name)}, p=props||{}; if(p.step!=null) e.step=p.step; if(p.sel) e.sel=String(p.sel).slice(0,80); if(p.field) e.field=String(p.field).slice(0,40); add(e); };
    /* the page's own events (opt-in result, form route, call step) ride along under their own names */
    try{
      var orig=window.a2pEvent;
      if(typeof orig==='function') window.a2pEvent=function(n,p){
        try{ var pr=p||{}, st=String(pr.state||''), e={e:String(n), sel:[pr.lane||'',st,pr.why||''].filter(Boolean).join(':').slice(0,80)}; var m=/^(\d)/.exec(st); if(m) e.step=Number(m[1]); add(e); }catch(x){}
        return orig.apply(this,arguments);
      };
    }catch(e){}
    add({e:'view'});
    function label(el){
      if(el.id) return '#'+el.id;
      if(el.tagName==='LABEL'){ var i=el.querySelector('input'); if(i&&i.name) return 'choice:'+i.name+'='+(i.type==='radio'||i.type==='checkbox'?i.value:''); }
      return el.tagName.toLowerCase()+':'+String(el.textContent||'').replace(/\s+/g,' ').trim().slice(0,50);
    }
    document.addEventListener('click',function(ev){
      try{
        var el=ev.target&&ev.target.closest?ev.target.closest('a,button,label.choice,select,summary'):null; if(!el) return;
        var h=Math.max(document.documentElement.scrollHeight,1), w=Math.max(window.innerWidth,1);
        add({e:'click',sel:label(el),x:Math.round(ev.clientX/w*1000)/1000,y:Math.round((ev.clientY+window.pageYOffset)/h*1000)/1000});
        if(el.tagName==='A') flush(true);   /* a link may leave the page at once */
      }catch(x){}
    },true);
    document.addEventListener('focusin',function(ev){
      try{ var el=ev.target; if(!el||!el.name||!/^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName)||el.tabIndex===-1||fields[el.name]) return; fields[el.name]=1; add({e:'field',field:el.name}); }catch(x){}
    },true);
    window.addEventListener('scroll',function(){
      try{ var d=document.documentElement, pct=Math.round((window.pageYOffset+window.innerHeight)/Math.max(d.scrollHeight,1)*100); if(pct>maxSc) maxSc=Math.min(100,pct); }catch(x){}
    },{passive:true});
    function leave(){
      if(gone) return; gone=true;
      try{ if(!document.hidden) seen+=Date.now()-last; if(!maxSc){ var d=document.documentElement; maxSc=Math.min(100,Math.round(window.innerHeight/Math.max(d.scrollHeight,1)*100)); } add({e:'leave',ms:Math.min(seen,86400000),sc:maxSc}); flush(true); }catch(x){}
    }
    document.addEventListener('visibilitychange',function(){
      /* phones often never fire pagehide: every time the tab is hidden, a checkpoint of the visible time so far goes out */
      try{ if(document.hidden){ seen+=Date.now()-last; if(leaves<5){ leaves++; add({e:'leave',ms:Math.min(seen,86400000),sc:maxSc||null}); } flush(true); } else { last=Date.now(); } }catch(x){}
    });
    window.addEventListener('pagehide',leave);
    setInterval(function(){ flush(false); },4000);
    setTimeout(function(){ flush(false); },600);
  }catch(e){}
})();
