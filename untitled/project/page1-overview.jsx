/* Page 1 — 基地集群总览 */

const BASES = [
  {
    id: '01',
    name: '北京大学东莞光电研究院',
    sub: '光生物应用研发中心',
    loc: '广东 · 东莞',
    zones: ['垂直种植区', '集装箱种植区', '育苗区'],
    accent: '#5EEAD4',
    output: '312',
    outputLabel: '库位 (个)',
    yield: '98.2',
    yieldLabel: '合格率 (%)',
    power: '1,245',
  },
  {
    id: '02',
    name: '青岛富士康',
    sub: '植物工厂数据中心',
    loc: '山东 · 青岛',
    zones: ['垂直种植区', '育苗区', '催芽区'],
    accent: '#A78BFA',
    output: '6,720',
    outputLabel: '库位 (个)',
    yield: '97.6',
    yieldLabel: '合格率 (%)',
    power: '8,340',
  },
  {
    id: '03',
    name: '黑龙江北大荒',
    sub: '育秧中心',
    loc: '黑龙江 · 哈尔滨',
    zones: ['种植区', '育苗区'],
    accent: '#60A5FA',
    output: '250,000',
    outputLabel: '计划盘数',
    yield: '99.1',
    yieldLabel: '通过率 (%)',
    power: '2,180',
  },
  {
    id: '04',
    name: '陕西崔家湾',
    sub: '红薯实验中心',
    loc: '陕西 · 西安',
    zones: ['种植区', '育苗区'],
    accent: '#FBBF24',
    output: '250,000',
    outputLabel: '计划盘数',
    yield: '98.7',
    yieldLabel: '通过率 (%)',
    power: '1,560',
  },
];

const EntryCard = ({ base }) => (
  <div className="entry-card" style={{
    '--accent': base.accent,
    padding: 26,
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr auto',
    gap: 16,
    minHeight: 0,
  }}>
    <div className="tag-accent" style={{background:`linear-gradient(180deg, ${base.accent}, transparent 35%)`}}/>

    {/* top row */}
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', position:'relative', gap: 16}}>
      <div style={{minWidth:0}}>
        <div style={{display:'flex', alignItems:'center', gap: 10}}>
          <div className="mono" style={{fontSize:12, color:base.accent, letterSpacing:'0.28em'}}>BASE · {base.id}</div>
          <div style={{width:32, height:1, background:base.accent, opacity:0.5}}/>
        </div>
        <div style={{fontSize:24, fontWeight:700, marginTop:10, letterSpacing:'0.02em', lineHeight:1.2}}>{base.name}</div>
        <div style={{fontSize:15, color:'#C9CEDC', marginTop:4, fontWeight:400}}>{base.sub}</div>
        <div style={{fontSize:11, color:'#7B8196', marginTop:10, letterSpacing:'0.16em'}}>📍 {base.loc}</div>
      </div>
      <div style={{
        width:70, height:70, borderRadius: 16,
        background: `linear-gradient(135deg, ${base.accent}33, transparent)`,
        border:`1px solid ${base.accent}66`,
        display:'grid', placeItems:'center', flexShrink:0
      }}>
        <div className="mono" style={{fontSize:32, fontWeight:800, color: base.accent, letterSpacing:'-0.04em'}}>{base.id}</div>
      </div>
    </div>

    {/* zones chips */}
    <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
      {base.zones.map((z,i) => (
        <span key={i} className="chip" style={{background:`${base.accent}14`, borderColor:`${base.accent}44`, color:base.accent, fontSize:12, padding:'5px 12px'}}>
          {z}
        </span>
      ))}
    </div>

    {/* metrics row */}
    <div style={{
      display:'grid', gridTemplateColumns:'1fr 1fr 1fr',
      borderTop:'1px solid rgba(255,255,255,0.08)',
      paddingTop: 16, alignSelf:'end'
    }}>
      <div>
        <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.16em'}}>{base.outputLabel}</div>
        <div className="num" style={{fontSize:26, fontWeight:700, marginTop:4, letterSpacing:'-0.02em'}}>{base.output}</div>
      </div>
      <div style={{borderLeft:'1px solid rgba(255,255,255,0.08)', paddingLeft: 18}}>
        <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.16em'}}>{base.yieldLabel}</div>
        <div className="num" style={{fontSize:26, fontWeight:700, marginTop:4, color:base.accent, letterSpacing:'-0.02em'}}>{base.yield}</div>
      </div>
      <div style={{borderLeft:'1px solid rgba(255,255,255,0.08)', paddingLeft: 18}}>
        <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.16em'}}>日耗电 kWh</div>
        <div className="num" style={{fontSize:26, fontWeight:700, marginTop:4, letterSpacing:'-0.02em'}}>{base.power}</div>
      </div>
    </div>

    {/* enter button */}
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'11px 16px', borderRadius: 12,
      background: `${base.accent}14`,
      border: `1px solid ${base.accent}55`,
    }}>
      <div style={{fontSize:13, letterSpacing:'0.22em', color:base.accent, fontWeight:600}}>进入数据中心</div>
      <div className="mono" style={{fontSize:11, letterSpacing:'0.18em', color:base.accent, opacity:0.8}}>ENTER →</div>
    </div>
  </div>
);

const Page1 = () => (
  <div className="screen" data-screen-label="01 基地集群总览">
    <HeaderBar title="植物工厂数据管理中心" time="2026-04-23 14:28:46" weekday="星期四"/>

    {/* stats strip */}
    <div style={{padding:'24px 40px 0', position:'relative', zIndex:2}}>
      <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:20}}>
        {[
          {l:'接入基地', v:'04', u:'个', c:'#5EEAD4'},
          {l:'在线设备', v:'248', u:'台', c:'#A78BFA'},
          {l:'累计产出量', v:'12,486', u:'kg', c:'#60A5FA'},
          {l:'平均合格率', v:'98.4', u:'%', c:'#5EEAD4'},
          {l:'绿能替代率', v:'73.5', u:'%', c:'#34D399'},
        ].map((k,i) => (
          <div key={i} className="card" style={{padding:'18px 22px', display:'flex', alignItems:'center', gap:14}}>
            <div className="icon-badge" style={{width:44, height:44, borderColor:k.c+'55', background:k.c+'18'}}>
              <Ico name={['box','cpu','leaf','check','power'][i]} size={22} color={k.c}/>
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontSize:12, color:'#7B8196', letterSpacing:'0.14em'}}>{k.l}</div>
              <div style={{display:'flex', alignItems:'baseline', gap:4, marginTop:4}}>
                <span className="num" style={{fontSize:30, fontWeight:700, color:k.c, letterSpacing:'-0.02em'}}>{k.v}</span>
                <span style={{fontSize:12, color:'#7B8196'}}>{k.u}</span>
              </div>
            </div>
            <SparkLine points={Array.from({length:14}, ()=>0.2+Math.random()*0.8)} color={k.c} w={70} h={36}/>
          </div>
        ))}
      </div>
    </div>

    {/* 4 base entry grid — full width, 2x2, generous */}
    <div style={{padding:'20px 40px 28px', display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr', gap:20, flex:1, minHeight:0, overflow:'hidden', boxSizing:'border-box'}}>
      {BASES.map((b) => <EntryCard key={b.id} base={b}/>)}
    </div>
  </div>
);

window.Page1 = Page1;
