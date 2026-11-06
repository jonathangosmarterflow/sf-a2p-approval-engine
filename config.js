/* config.js: the ONE place for the A2P funnel's rules and wiring (index.html, qualified.html, thanks.html and kit/ load it).

   v5 (2026-11-06, his decisions, LOCKED): the kit is FREE to everyone by email opt-in. THE GATE is one yes/no question:
   "If you were to work with us, are you willing to pay $55/hour for consulting?"
   qualified (the free 30-minute call) = gate YES  AND  country in tier 1 or tier 2
   Everything else = thanks.html (the kit by email + on the page, no calendar anywhere on that path).
   Revenue and the HighLevel account are FIELDS the consultant sees, not gates. Flip one line to make one a gate:
   gateOnRevenue / gateOnHighLevel. The worker (scripts/sf-estimate-kit/branded-host/optin.js OPTIN.qualify) recomputes
   the same rule for the HighLevel tags; review-screens.mjs fails when the two differ, so change both together. */
var A2P_SITE_VERSION = "a2p-site 5.0.0 (2026-11-06)";

var QUALIFY_RULES = {
  tier1: ["US","CA"],
  tier2: ["GB","IE","DE","FR","NL","BE","LU","AT","CH","IT","ES","PT","DK","SE","NO","FI","IS","PL","CZ","EE","LT","LV","SK","SI","HR","GR","MT","CY","HU","RO","BG","AU","NZ"],
  gateOnRevenue: false,
  revenueBandsThatQualify: ["5k-20k","20k+"],
  gateOnHighLevel: false,
  hlAnswersThatQualify: ["yes"],
  capacityFull: false,  /* flipped by the AI's weekly count of J1 calls (package section 7a), never by hand; true = "this week is full" line */
  bookingUrl: "https://ai.gosmarterflow.com/book",
  source: "yt-j1-a2p",
  utm: {utm_source:"youtube", utm_medium:"video", utm_campaign:"j1-a2p"}
};

var A2P_WIRING = {
  /* the opt-in endpoint on the same origin (get.gosmarterflow.com/a2p-approval-engine/api/optin, worker optin.js):
     upserts the HighLevel contact, tags it, sends the kit email once. Relative, so it only answers on the real host. */
  optinUrl: "api/optin",
  optinTimeoutMs: 9000,
  /* "" = the branch-event beacon is OFF (a labelled stub: events are built in memory, nothing is sent).
     Live needs the cloud worker to accept the a2p_* event names and the get.gosmarterflow.com origin (README.md). */
  eventUrl: "",
  eventToken: ""
};

/* Branch-event beacon. NEVER carries a name, an email or a website: only the keys below survive. */
var A2P_EVENT_KEYS = ["lane","sent","q_tier","q_country","q_revenue","q_hl","q_gate","file","utm_source","utm_medium","utm_campaign","utm_content","utm_term"];
window.__a2pEvents = [];
function a2pEvent(name, props){
  try{
    var p = {e:name, page:"a2p-j1", t:A2P_WIRING.eventToken};
    var src = props || {};
    A2P_EVENT_KEYS.forEach(function(k){ if(src[k]!=null && src[k]!=="") p[k]=String(src[k]).slice(0,80); });
    try{ var q=new URLSearchParams(location.search); ["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach(function(k){ if(!p[k] && q.get(k)) p[k]=q.get(k).slice(0,80); }); }catch(e){}
    window.__a2pEvents.push(p);                 /* the screenshot run inspects these payloads */
    if(!A2P_WIRING.eventUrl) return;            /* stub: OFF until the worker accepts these events */
    var body = JSON.stringify(p);
    if(window.fetch){ fetch(A2P_WIRING.eventUrl,{method:"POST",body:body,keepalive:true})["catch"](function(){}); }
    else if(navigator.sendBeacon){ navigator.sendBeacon(A2P_WIRING.eventUrl,new Blob([body],{type:"text/plain"})); }
  }catch(e){}
}

/* The rule, shared by index.html (routing) and qualified.html (a direct visit without qualifying answers goes to
   thanks.html, so nobody reaches the calendar link by skipping the gate). a = {country, gate, revenue, hl}. */
function a2pTier(code){ var R=QUALIFY_RULES; return R.tier1.indexOf(code)>-1?1:(R.tier2.indexOf(code)>-1?2:3); }
function a2pQualified(a){
  var R=QUALIFY_RULES;
  if(a.gate!=="yes") return false;
  if(a2pTier(a.country)===3) return false;
  if(R.gateOnRevenue && R.revenueBandsThatQualify.indexOf(a.revenue)<0) return false;
  if(R.gateOnHighLevel && R.hlAnswersThatQualify.indexOf(a.hl)<0) return false;
  return true;
}

/* Offline queue: when the opt-in POST fails (network or server), the submission waits in THIS browser's
   localStorage (max 3) and is re-sent on the next visit to any page of this site. Nothing is shown as sent that was not. */
var A2P_QUEUE_KEY = "a2p_optin_queue_v5";
function a2pQueueRead(){ try{ return JSON.parse(localStorage.getItem(A2P_QUEUE_KEY)||"[]")||[]; }catch(e){ return []; } }
function a2pQueueWrite(list){ try{ if(list.length) localStorage.setItem(A2P_QUEUE_KEY, JSON.stringify(list.slice(-3))); else localStorage.removeItem(A2P_QUEUE_KEY); }catch(e){} }
function a2pOptinPost(body, base){
  var url = (base||"") + A2P_WIRING.optinUrl;
  var ctl = window.AbortController ? new AbortController() : null;
  var timer = ctl ? setTimeout(function(){ ctl.abort(); }, A2P_WIRING.optinTimeoutMs) : null;
  return fetch(url, {method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(body), signal: ctl?ctl.signal:undefined})
    .then(function(r){ if(timer) clearTimeout(timer); return r.json().then(function(j){ j.status=r.status; return j; }, function(){ return {ok:false, status:r.status}; }); })
    ["catch"](function(){ if(timer) clearTimeout(timer); return {ok:false, status:0}; });
}
function a2pQueueFlush(base){
  var list=a2pQueueRead(); if(!list.length || !window.fetch) return;
  a2pQueueWrite([]);
  list.forEach(function(item){
    a2pOptinPost(item, base).then(function(j){ if(!j.ok && (j.status===0 || j.status>=500)){ var l=a2pQueueRead(); l.push(item); a2pQueueWrite(l); } });
  });
}
