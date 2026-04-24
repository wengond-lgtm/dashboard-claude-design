/* Page 2 — 北京大学东莞光电研究院光生物应用研发中心
 * 垂直种植区 + 集装箱种植区 (equal), 3-zone env, equipment table, cameras, economics
 */

const TOP10_PAGE2_VERT = [
  {n:'奶油生菜', v:38.6}, {n:'翠叶绿', v:34.2}, {n:'羽衣甘蓝', v:28.8},
  {n:'小菠菜', v:24.5}, {n:'薄荷', v:20.1}, {n:'芽苗菜', v:17.3},
  {n:'乌塌菜', v:15.6}, {n:'萝卜苗', v:13.2}, {n:'西蓝花苗', v:11.8}, {n:'紫甘蓝苗', v:9.4},
];
const TOP10_PAGE2_BOX = [
  {n:'奶油生菜', v:28.4}, {n:'羽衣甘蓝', v:25.1}, {n:'翠叶绿', v:21.6},
  {n:'小菠菜', v:18.8}, {n:'薄荷', v:15.6}, {n:'芽苗菜', v:13.2},
  {n:'萝卜苗', v:11.4}, {n:'西蓝花苗', v:9.8}, {n:'乌塌菜', v:8.3}, {n:'紫苏', v:6.9},
];

const P2_PROD = {
  vertical: { name:'垂直种植区', accent:'#5EEAD4', slots:220, total:312, rate:70.5, planned:160, actual:156, batch:12, pass:98.2, top: TOP10_PAGE2_VERT },
  box:      { name:'集装箱种植区', accent:'#A78BFA', slots: 96, total:120, rate:80.0, planned: 82, actual: 78, batch: 6, pass:97.4, top: TOP10_PAGE2_BOX  },
};

const P2_EQUIP = [
  {n:'AGV 搬运车',  icon:'agv',     runs:'320 次/天',  eff:96.2, fault:'—',     faultH:'0h',   status:'ok'},
  {n:'加液机',      icon:'liquid',  runs:'48 筐/小时', eff:92.5, fault:'—',     faultH:'0h',   status:'ok'},
  {n:'配肥机',      icon:'mix',     runs:'36 筐/小时', eff:88.4, fault:'14:02', faultH:'0.5h', status:'warn'},
  {n:'播种机',      icon:'seed',    runs:'180 次/天',  eff:94.8, fault:'—',     faultH:'0h',   status:'ok'},
  {n:'动力组 A',    icon:'power',   runs:'24 h',      eff:99.1, fault:'—',     faultH:'0h',   status:'ok'},
  {n:'动力组 B',    icon:'power',   runs:'24 h',      eff:76.3, fault:'09:14', faultH:'2.1h', status:'alert'},
];

const P2ProdSub = ({ zone }) => (
  <div style={{
    padding: 16, borderRadius: 12,
    background: `linear-gradient(180deg, ${zone.accent}0c, rgba(255,255,255,0.01))`,
    border: `1px solid ${zone.accent}33`,
    display:'flex', flexDirection:'column', gap: 12,
    flex: 1, minHeight: 0,
  }}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <div style={{width:5, height:16, borderRadius:2, background:zone.accent, boxShadow:`0 0 10px ${zone.accent}`}}/>
        <div style={{fontSize:14, fontWeight:600, letterSpacing:'0.1em'}}>{zone.name}</div>
      </div>
      <div className="mono" style={{fontSize:10, color:zone.accent, letterSpacing:'0.2em', opacity:0.7}}>ZONE · {zone.name==='垂直种植区'?'01':'02'}</div>
    </div>

    {/* slot ratio */}
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:4}}>
        <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em'}}>种植库位占比</div>
        <div className="num" style={{fontSize:12, color:zone.accent, fontWeight:600}}>占有率 {zone.rate}%</div>
      </div>
      <div style={{display:'flex', alignItems:'baseline', gap:6, marginBottom:8}}>
        <span className="num" style={{fontSize:24, fontWeight:700}}>{zone.slots}</span>
        <span style={{fontSize:12, color:'#4E5468'}}>/ {zone.total} 个</span>
      </div>
      <div className="progress" style={{'--p': zone.rate+'%'}}>
        <span style={{background:`linear-gradient(90deg, ${zone.accent}, #60A5FA)`, boxShadow:`0 0 12px ${zone.accent}66`}}/>
      </div>
    </div>

    {/* today yield + ring */}
    <div style={{
      display:'grid', gridTemplateColumns:'1fr 1fr 1fr auto', gap: 10, alignItems:'center',
      paddingTop: 10, borderTop: '1px dashed rgba(255,255,255,0.06)'
    }}>
      <div>
        <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.12em'}}>预计产量</div>
        <div className="num" style={{fontSize:17, fontWeight:600, marginTop:2}}>{zone.planned}<span style={{fontSize:10, color:'#7B8196', marginLeft:3}}>kg</span></div>
      </div>
      <div>
        <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.12em'}}>实际产量</div>
        <div className="num" style={{fontSize:17, fontWeight:600, marginTop:2, color:zone.accent}}>{zone.actual}<span style={{fontSize:10, color:'#7B8196', marginLeft:3}}>kg</span></div>
      </div>
      <div>
        <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.12em'}}>产出批次</div>
        <div className="num" style={{fontSize:17, fontWeight:600, marginTop:2}}>{zone.batch}<span style={{fontSize:10, color:'#7B8196', marginLeft:3}}>批</span></div>
      </div>
      <RingChart value={zone.pass} size={70} color={zone.accent} label="合格率"/>
    </div>

    {/* top10 */}
    <div style={{paddingTop: 8, borderTop:'1px dashed rgba(255,255,255,0.06)', flex:1, minHeight:0, display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8}}>
        <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em'}}>品种产出量 TOP10</div>
        <span className="chip" style={{background:`${zone.accent}14`, borderColor:`${zone.accent}44`, color:zone.accent, fontSize:10}}>本月</span>
      </div>
      <div style={{flex:1, minHeight:0}}>
        <TopBars data={zone.top} accent={zone.accent}/>
      </div>
    </div>
  </div>
);

const Page2 = () => (
  <div className="screen" data-screen-label="02 北京大学东莞光电研究院">
    <HeaderBar title="北京大学东莞光电研究院光生物应用研发中心" showSwitcher time="2026-04-23 14:28:46" weekday="星期四"/>

    {/* 3-column grid; bottom KPI strip is fixed in flow (not absolute) to prevent overlap */}
    <div style={{
      padding:'16px 20px 14px',
      display:'grid',
      gridTemplateColumns:'1fr 1.15fr 1fr',
      gridTemplateRows:'auto 1fr auto',
      gap:14,
      height:'calc(100% - 80px)',
      flex:1,
      minHeight:0,
      overflow:'hidden',
      boxSizing:'border-box'
    }}>

      {/* LEFT — Production (2 equal subzones) spans 2 rows */}
      <BentoCard title="生产与订单管理" en="PRODUCTION & ORDERS"
        extra={<span className="chip mint" style={{fontSize:10}}><Ico name="leaf" size={11} color="#5EEAD4"/> 模块 01</span>}
        style={{gridRow:'1 / span 2', display:'flex', flexDirection:'column', minHeight:0}}>
        <div style={{padding:14, display:'flex', flexDirection:'column', gap:12, flex:1, minHeight:0}}>
          <P2ProdSub zone={P2_PROD.vertical}/>
          <P2ProdSub zone={P2_PROD.box}/>
        </div>
      </BentoCard>

      {/* CENTER TOP — Env monitoring (3 zones) */}
      <BentoCard title="环境数据监控" en="ENV MONITORING · 3 ZONES"
        extra={<span className="chip sky" style={{fontSize:10}}><Ico name="cpu" size={11} color="#60A5FA"/> 实时</span>}>
        <div style={{padding:14, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10}}>
          {[
            {name:'垂直种植区', accent:'#5EEAD4', t:24.6, h:68, co2:820, lux:420},
            {name:'集装箱种植区', accent:'#A78BFA', t:23.8, h:72, co2:780, lux:380},
            {name:'育苗区',     accent:'#60A5FA', t:26.2, h:75, co2:650, lux:260},
          ].map((z,i) => (
            <div key={i} style={{padding:12, borderRadius:10, background:`linear-gradient(180deg, ${z.accent}0a, transparent)`, border:`1px solid ${z.accent}33`}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
                <div style={{display:'flex', alignItems:'center', gap:8}}>
                  <div style={{width:4, height:12, borderRadius:2, background:z.accent, boxShadow:`0 0 8px ${z.accent}`}}/>
                  <div style={{fontSize:12, fontWeight:600}}>{z.name}</div>
                </div>
                <span className="chip" style={{fontSize:9, padding:'2px 6px', background:`${z.accent}14`, borderColor:`${z.accent}44`, color:z.accent}}>正常</span>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
                <EnvTile icon="temp"  label="温度"     value={z.t}   unit="℃"         color={z.accent}/>
                <EnvTile icon="humid" label="湿度"     value={z.h}   unit="%"         color={z.accent}/>
                <EnvTile icon="co2"   label="CO₂"     value={z.co2} unit="ppm"        color={z.accent}/>
                <EnvTile icon="light" label="光照"     value={z.lux} unit="μmol"      color={z.accent}/>
              </div>
            </div>
          ))}
        </div>
      </BentoCard>

      {/* RIGHT TOP — Live cameras */}
      <BentoCard title="线上监控画面" en="LIVE CAMERA"
        extra={<span className="chip alert" style={{fontSize:10}}><span style={{width:5,height:5,borderRadius:'50%', background:'#F87171', boxShadow:'0 0 4px #F87171'}}/> LIVE</span>}>
        <div style={{padding:12, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
          <VideoPH label="垂直种植区 #01" ts="14:28:46"/>
          <VideoPH label="集装箱 #03" ts="14:28:46"/>
        </div>
      </BentoCard>

      {/* CENTER BOTTOM — Equipment table */}
      <BentoCard title="种植设备运行效率" en="EQUIPMENT EFFICIENCY"
        extra={<div style={{display:'flex', gap:6}}>
          <span className="chip mint" style={{fontSize:9}}>垂直区</span>
          <span className="chip" style={{fontSize:9}}>集装箱 ⟳</span>
        </div>}>
        <table className="tbl">
          <thead>
            <tr>
              <th>设备名称</th>
              <th>运行频次</th>
              <th style={{width:'30%'}}>运行效率</th>
              <th>故障时间</th>
              <th>故障时长</th>
            </tr>
          </thead>
          <tbody>
            {P2_EQUIP.map((e,i) => (
              <tr key={i}>
                <td>
                  <div style={{display:'flex', alignItems:'center', gap:10}}>
                    <div className="icon-badge" style={{width:26, height:26, borderRadius:7}}>
                      <Ico name={e.icon} size={13} color={e.status==='ok'?'#5EEAD4':e.status==='warn'?'#FBBF24':'#F87171'}/>
                    </div>
                    <span style={{fontSize:12}}>{e.n}</span>
                  </div>
                </td>
                <td className="num" style={{fontSize:12, color:'#C9CEDC'}}>{e.runs}</td>
                <td>
                  <div className="bar-cell">
                    <div className={`bar ${e.status==='warn'?'warn':e.status==='alert'?'alert':''}`} style={{'--p':e.eff+'%'}}><span/></div>
                    <span className="num" style={{width:42, textAlign:'right', fontSize:12, fontWeight:600, color: e.status==='alert'?'#F87171':e.status==='warn'?'#FBBF24':'#5EEAD4'}}>{e.eff}%</span>
                  </div>
                </td>
                <td className="mono" style={{color:'#7B8196', fontSize:11}}>{e.fault}</td>
                <td>
                  <span className={`chip ${e.status==='ok'?'mint':e.status==='warn'?'warn':'alert'}`} style={{fontSize:10}}>{e.faultH}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </BentoCard>

      {/* RIGHT BOTTOM — Economic index (能耗 + 气体) */}
      <BentoCard title="经济性指标" en="ECONOMIC INDEX"
        extra={<span className="chip lav" style={{fontSize:10}}>今日</span>}>
        <div style={{padding:14, display:'flex', flexDirection:'column', gap:12}}>
          <div>
            <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em', marginBottom:8}}>能耗细分</div>
            {[
              {l:'补光电能',       v:'842',     u:'kWh',    c:'#5EEAD4', p:62},
              {l:'环控电能',       v:'312',     u:'kWh',    c:'#A78BFA', p:38},
              {l:'总耗电量',       v:'1,245',   u:'kWh',    c:'#60A5FA', p:85},
              {l:'太阳能发电(年)', v:'140,000', u:'kWh/年', c:'#34D399', p:73},
            ].map((k,i) => (
              <div key={i} style={{display:'grid', gridTemplateColumns:'1fr auto 90px', alignItems:'center', gap:10, padding:'6px 0', borderBottom:i<3?'1px dashed rgba(255,255,255,0.04)':'none'}}>
                <span style={{fontSize:12, color:'#C9CEDC'}}>{k.l}</span>
                <span className="num" style={{fontSize:13, fontWeight:600, color:k.c}}>{k.v}<span style={{fontSize:10, color:'#7B8196', marginLeft:4}}>{k.u}</span></span>
                <div className="bar-cell"><div className="bar" style={{'--p':k.p+'%'}}><span style={{background:`linear-gradient(90deg, ${k.c}, #60A5FA)`}}/></div></div>
              </div>
            ))}
          </div>
          <div>
            <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em', marginBottom:8}}>气体代谢</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
              <div style={{padding:'10px 12px', borderRadius:8, background:'rgba(94,234,212,0.06)', border:'1px solid rgba(94,234,212,0.2)'}}>
                <div style={{fontSize:10, color:'#7B8196'}}>CO₂ 补充/消耗</div>
                <div className="num" style={{fontSize:18, fontWeight:700, marginTop:4, color:'#5EEAD4'}}>24.6<span style={{fontSize:10, color:'#7B8196', marginLeft:3}}>kg</span></div>
              </div>
              <div style={{padding:'10px 12px', borderRadius:8, background:'rgba(167,139,250,0.06)', border:'1px solid rgba(167,139,250,0.2)'}}>
                <div style={{fontSize:10, color:'#7B8196'}}>O₂ 产出估算</div>
                <div className="num" style={{fontSize:18, fontWeight:700, marginTop:4, color:'#A78BFA'}}>17.9<span style={{fontSize:10, color:'#7B8196', marginLeft:3}}>kg</span></div>
              </div>
            </div>
          </div>
        </div>
      </BentoCard>

      {/* BOTTOM — Core KPI strip spans all 3 columns */}
      <div style={{gridColumn:'1 / -1', display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:12}}>
        {[
          {i:'power',  l:'单位产量能耗', v:'0.82', u:'kWh/kg', c:'#5EEAD4', d:'5.2%'},
          {i:'leaf',   l:'固碳量',       v:'286',  u:'kg/日',  c:'#34D399', d:'12.4%'},
          {i:'sun',    l:'绿能替代率',   v:'73.5', u:'%',      c:'#FBBF24', d:'3.1%'},
          {i:'chart',  l:'人工成本降低', v:'42',   u:'%',      c:'#A78BFA', d:'8.6%'},
          {i:'water',  l:'资源循环利用', v:'92',   u:'%',      c:'#60A5FA', d:'2.3%'},
        ].map((k,i) => (
          <KpiCard key={i} icon={k.i} label={k.l} value={k.v} unit={k.u} color={k.c} delta={k.d} deltaType="up" sub="较上周"/>
        ))}
      </div>
    </div>
  </div>
);

window.Page2 = Page2;
