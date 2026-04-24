/* Shared components — Header, Logo, Icons, Ring, Bars */

const AFAFALogo = ({ size = 40 }) => (
  <div className="logo">
    <div className="logo-mark" style={{ width: size, height: size }}>
      <svg width={size*0.55} height={size*0.55} viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L3 20 L8 20 L12 11 L16 20 L21 20 Z" fill="#5EEAD4"/>
        <path d="M9 15 L15 15" stroke="#0A0E17" strokeWidth="1.6"/>
      </svg>
    </div>
    <div>
      <div className="logo-text">AFAFA</div>
      <div className="logo-sub">SMART FARM OS</div>
    </div>
  </div>
);

const HeaderBar = ({ title, showSwitcher = false, time = "2026-04-23 14:28:46", weekday = "星期四" }) => (
  <div className="header">
    <AFAFALogo />
    <div className="header-title">
      <span className="bar" /> {title} <span className="bar r" />
    </div>
    <div className="header-right">
      <div style={{display:'flex', gap: 10}}>
        <span className="chip mint"><span style={{width:6,height:6,borderRadius:'50%',background:'#5EEAD4', boxShadow:'0 0 8px #5EEAD4'}}/> 系统在线</span>
        <span className="chip"><span style={{width:6,height:6,borderRadius:'50%',background:'#A78BFA'}}/> 数据同步中</span>
      </div>
      <div className="time">
        <div className="t num">{time}</div>
        <div className="d">{weekday}</div>
      </div>
      {showSwitcher && (
        <div className="base-switcher">
          <span style={{color:'#7B8196'}}>基地</span>
          <span style={{color:'#F2F4FA'}}>切换 ▾</span>
        </div>
      )}
    </div>
  </div>
);

/* ====== Simple icon set (line+fill, subtle glow) ====== */
const Ico = ({ name, size = 18, color = "#C9CEDC" }) => {
  const s = { width: size, height: size, filter: `drop-shadow(0 0 4px ${color}22)` };
  const common = { fill: "none", stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case 'temp': return (<svg viewBox="0 0 24 24" style={s}><path {...common} d="M10 4a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0z"/><circle cx="12" cy="16" r="1.5" fill={color}/></svg>);
    case 'humid': return (<svg viewBox="0 0 24 24" style={s}><path {...common} d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/></svg>);
    case 'co2': return (<svg viewBox="0 0 24 24" style={s}><circle {...common} cx="8" cy="12" r="3"/><path {...common} d="M18 9.5h-3a2 2 0 0 0 0 4h1a2 2 0 0 1 0 4h-3"/></svg>);
    case 'light': return (<svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="3.5" fill={color} opacity="0.8"/><g {...common}><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"/></g></svg>);
    case 'agv': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><rect x="3" y="8" width="14" height="8" rx="1.5"/><path d="M17 10h3l1 3v3h-4"/><circle cx="7" cy="18" r="1.6" fill={color}/><circle cx="17" cy="18" r="1.6" fill={color}/></g></svg>);
    case 'liquid': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><rect x="5" y="4" width="14" height="16" rx="2"/><path d="M5 14c3-2 6 2 9 0s5 1 5 1"/><circle cx="9" cy="9" r="1" fill={color}/></g></svg>);
    case 'mix': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><circle cx="12" cy="12" r="8"/><path d="M7 12l3 3 7-7"/></g></svg>);
    case 'seed': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><path d="M12 4c4 2 6 6 4 10-1 3-4 5-8 5"/><path d="M12 4c-4 2-6 6-4 10"/><circle cx="12" cy="13" r="1.2" fill={color}/></g></svg>);
    case 'power': return (<svg viewBox="0 0 24 24" style={s}><path {...common} d="M13 3L5 14h6l-1 7 8-11h-6z" fill={color} fillOpacity="0.2"/></svg>);
    case 'plant': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><path d="M12 21V11"/><path d="M12 11c0-4-3-6-7-6 0 4 3 6 7 6z" fill={color} fillOpacity="0.2"/><path d="M12 13c0-3 2.5-5 6-5 0 3-2.5 5-6 5z" fill={color} fillOpacity="0.2"/></g></svg>);
    case 'box': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></g></svg>);
    case 'leaf': return (<svg viewBox="0 0 24 24" style={s}><path {...common} d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" fill={color} fillOpacity="0.15"/><path {...common} d="M5 19L14 10"/></svg>);
    case 'sprout': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><path d="M12 21v-7"/><path d="M12 14c-3 0-5-2-5-5 3 0 5 2 5 5z" fill={color} fillOpacity="0.2"/><path d="M12 14c3 0 5-2 5-5-3 0-5 2-5 5z" fill={color} fillOpacity="0.2"/></g></svg>);
    case 'sun': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><circle cx="12" cy="12" r="4" fill={color} fillOpacity="0.25"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></g></svg>);
    case 'water': return (<svg viewBox="0 0 24 24" style={s}><path {...common} d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" fill={color} fillOpacity="0.15"/></svg>);
    case 'cpu': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M3 10h3M3 14h3M18 10h3M18 14h3M10 3v3M14 3v3M10 18v3M14 18v3"/></g></svg>);
    case 'chart': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><path d="M3 20h18"/><rect x="5" y="10" width="3" height="8" fill={color} fillOpacity="0.2"/><rect x="10.5" y="6" width="3" height="12" fill={color} fillOpacity="0.2"/><rect x="16" y="12" width="3" height="6" fill={color} fillOpacity="0.2"/></g></svg>);
    case 'alert': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 17.5v.1"/></g></svg>);
    case 'check': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></g></svg>);
    case 'arrow-r': return (<svg viewBox="0 0 24 24" style={s}><g {...common}><path d="M5 12h14M13 6l6 6-6 6"/></g></svg>);
    default: return null;
  }
};

/* ====== Ring Chart (SVG) ====== */
const RingChart = ({ value = 98.2, size = 140, color = "#5EEAD4", label = "合格率" }) => {
  const r = (size - 18) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value/100);
  return (
    <div className="ring-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <defs>
          <linearGradient id={`rg-${color.slice(1)}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color}/>
            <stop offset="100%" stopColor="#60A5FA"/>
          </linearGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none"/>
        <circle cx={size/2} cy={size/2} r={r}
          stroke={`url(#rg-${color.slice(1)})`} strokeWidth="8" fill="none"
          strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off}
          style={{ filter: `drop-shadow(0 0 8px ${color}aa)` }}/>
        {/* tick marks */}
        {Array.from({length: 60}).map((_,i) => {
          const a = (i/60) * Math.PI * 2;
          const inner = r + 12, outer = r + 16;
          const x1 = size/2 + Math.cos(a) * inner;
          const y1 = size/2 + Math.sin(a) * inner;
          const x2 = size/2 + Math.cos(a) * outer;
          const y2 = size/2 + Math.sin(a) * outer;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>;
        })}
      </svg>
      <div className="center">
        <div>
          <div className="num" style={{fontWeight:700, color:'var(--text-0)', fontSize: Math.max(14, size*0.18), letterSpacing:'-0.02em', lineHeight:1}}>
            {value}<span style={{fontSize: Math.max(10, size*0.09), color:'#7B8196', marginLeft:2}}>%</span>
          </div>
          <div style={{fontSize: Math.max(9, size*0.075), color:'#7B8196', letterSpacing:'0.16em', marginTop: size*0.05}}>{label}</div>
        </div>
      </div>
    </div>
  );
};

/* ====== Bar list (Top10) ====== */
const TopBars = ({ data, accent = "#5EEAD4" }) => {
  const max = Math.max(...data.map(d => d.v));
  return (
    <div style={{display:'flex', flexDirection:'column', gap: 10}}>
      {data.map((d, i) => (
        <div key={i} style={{display:'grid', gridTemplateColumns:'22px 110px 1fr 64px', gap:10, alignItems:'center'}}>
          <div className="mono" style={{
            fontSize: 11, color: i < 3 ? accent : '#4E5468', fontWeight: 600,
            width: 22, height: 22, borderRadius: 6, display:'grid', placeItems:'center',
            background: i < 3 ? 'rgba(94,234,212,0.1)' : 'rgba(255,255,255,0.03)',
            border: '1px solid ' + (i < 3 ? 'rgba(94,234,212,0.3)' : 'rgba(255,255,255,0.06)')
          }}>{(i+1).toString().padStart(2,'0')}</div>
          <div style={{fontSize:13, color:'#F2F4FA'}}>{d.n}</div>
          <div className="bar-cell">
            <div className="bar" style={{'--p': (d.v/max*100)+'%', height: 6}}>
              <span style={{background: `linear-gradient(90deg, ${accent}, #60A5FA)`}}/>
            </div>
          </div>
          <div className="num" style={{fontSize:13, fontWeight:600, textAlign:'right', color:'#F2F4FA'}}>{d.v}<span style={{color:'#7B8196', fontSize:10, marginLeft:3}}>kg</span></div>
        </div>
      ))}
    </div>
  );
};

/* ====== Spark line ====== */
const SparkLine = ({ points, color = "#5EEAD4", fill = true, w = 200, h = 40 }) => {
  const max = Math.max(...points), min = Math.min(...points);
  const range = max - min || 1;
  const pts = points.map((v, i) => [i/(points.length-1)*w, h - ((v-min)/range)*h*0.8 - h*0.1]);
  const d = pts.map((p,i) => (i===0?'M':'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const fillD = d + ` L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg width={w} height={h} className="spark">
      <defs>
        <linearGradient id={`sp-${color.slice(1)}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      {fill && <path d={fillD} fill={`url(#sp-${color.slice(1)})`}/>}
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" style={{filter:`drop-shadow(0 0 4px ${color}aa)`}}/>
    </svg>
  );
};

/* ====== Video placeholder ====== */
const VideoPH = ({ label = "垂直种植区 #01", ts = "2026-04-23 14:28:46", aspect = "16/9" }) => (
  <div className="video-ph" style={{aspectRatio: aspect, width:'100%'}}>
    <div className="frame-x"/>
    <div style={{position:'absolute', inset:0, display:'grid', placeItems:'center', color:'#4E5468', fontSize:11, letterSpacing:'0.2em', fontFamily:'JetBrains Mono, monospace'}}>
      [ LIVE CAMERA ]
    </div>
    <div className="rec"><span className="d"/> REC · LIVE</div>
    <div className="label">{label}</div>
    <div className="ts">{ts}</div>
  </div>
);

/* ====== Env metric tile ====== */
const EnvTile = ({ icon, label, value, unit, color = "#5EEAD4" }) => (
  <div className="env-tile" style={{'--accent': color}}>
    <div className="icon-badge" style={{borderColor: color+'55', background: color+'18'}}>
      <Ico name={icon} size={20} color={color}/>
    </div>
    <div style={{flex:1}}>
      <div className="l">{label}</div>
      <div><span className="v num">{value}</span><span className="u">{unit}</span></div>
    </div>
    <SparkLine points={Array.from({length:12}, () => 0.3 + Math.random()*0.7)} color={color} w={60} h={26}/>
    <div className="glow"/>
  </div>
);

/* ====== KPI Card (compact — for bottom strips) ====== */
const KpiCard = ({ icon, label, value, unit, delta, deltaType = 'up', color = "#5EEAD4", sub }) => (
  <div className="card" style={{padding:'12px 16px', position:'relative', overflow:'hidden', minHeight: 82}}>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap: 10}}>
      <div style={{display:'flex', gap:10, alignItems:'center', minWidth:0}}>
        <div className="icon-badge" style={{width:32, height:32, borderColor: color+'55', background: color+'18', flexShrink:0}}>
          <Ico name={icon} size={16} color={color}/>
        </div>
        <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.12em', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{label}</div>
      </div>
      {delta && <span className={`chip ${deltaType==='up'?'mint':'alert'}`} style={{fontSize:9, padding:'2px 6px'}}>{deltaType==='up'?'↑':'↓'} {delta}</span>}
    </div>
    <div style={{marginTop:8, display:'flex', alignItems:'baseline', gap:3}}>
      <div className="num" style={{fontSize:24, fontWeight:700, color, letterSpacing:'-0.02em', lineHeight:1}}>{value}</div>
      <div style={{fontSize:11, color:'#7B8196'}}>{unit}</div>
    </div>
    {sub && <div style={{marginTop:3, fontSize:10, color:'#4E5468'}}>{sub}</div>}
    <div style={{position:'absolute', right:-10, bottom:-10, width:70, height:36, opacity:0.25, pointerEvents:'none'}}>
      <SparkLine points={Array.from({length:12}, () => 0.2+Math.random()*0.8)} color={color} w={70} h={36}/>
    </div>
  </div>
);

/* ===== Card frame ===== */
const BentoCard = ({ title, en, extra, children, style, className = "" }) => (
  <div className={`card corners ${className}`} style={style}>
    <span className="c1"/><span className="c2"/>
    <div className="card-head">
      <div className="card-title">
        <span className="dot"/> {title}
        {en && <span className="en">{en}</span>}
      </div>
      {extra}
    </div>
    <div className="card-hl"/>
    {children}
  </div>
);

Object.assign(window, { AFAFALogo, HeaderBar, Ico, RingChart, TopBars, SparkLine, VideoPH, EnvTile, KpiCard, BentoCard });
