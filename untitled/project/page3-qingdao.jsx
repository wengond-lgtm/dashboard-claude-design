/* Page 3 — 青岛富士康植物工厂数据中心
 * 1 vertical zone for production, 3 env zones (垂直种植区/育苗区/催芽区)
 */

const P3_TOP10 = [
  {n:'奶油生菜', v:92.4}, {n:'翠叶绿', v:84.6}, {n:'羽衣甘蓝', v:72.8},
  {n:'小菠菜', v:64.1}, {n:'薄荷', v:52.3}, {n:'芽苗菜', v:46.5},
  {n:'乌塌菜', v:38.2}, {n:'萝卜苗', v:32.9}, {n:'西蓝花苗', v:28.4}, {n:'紫甘蓝苗', v:22.1},
];

const P3_EQUIP = [
  {n:'AGV 搬运车 A',  icon:'agv',     runs:'1,280 次/天', eff:97.8, fault:'—',     faultH:'0h',  status:'ok'},
  {n:'AGV 搬运车 B',  icon:'agv',     runs:'1,156 次/天', eff:95.3, fault:'—',     faultH:'0h',  status:'ok'},
  {n:'加液机 #01',    icon:'liquid',  runs:'124 筐/小时', eff:93.8, fault:'—',     faultH:'0h',  status:'ok'},
  {n:'配肥机 #02',    icon:'mix',     runs:'98 筐/小时',  eff:89.2, fault:'11:20', faultH:'0.3h', status:'warn'},
  {n:'播种机',        icon:'seed',    runs:'680 次/天',   eff:96.5, fault:'—',     faultH:'0h',  status:'ok'},
  {n:'动力组',        icon:'power',   runs:'24 h',       eff:98.4, fault:'—',     faultH:'0h',  status:'ok'},
];

const Page3 = () => (
  <div className="screen" data-screen-label="03 青岛富士康植物工厂">
    <HeaderBar title="青岛富士康植物工厂数据中心" showSwitcher time="2026-04-23 14:28:46" weekday="星期四"/>

    <div style={{padding:'16px 20px 14px', display:'grid', gridTemplateColumns:'1.15fr 1.3fr 1fr', gridTemplateRows:'1fr auto', gap:14, flex:1, minHeight:0, overflow:'hidden', boxSizing:'border-box'}}>
      {/* LEFT — 生产与订单管理 (single zone) */}
      <BentoCard title="生产与订单管理" en="PRODUCTION & ORDERS"
        extra={<span className="chip lav"><Ico name="leaf" size={12} color="#A78BFA"/> 垂直种植区</span>}
        style={{display:'flex', flexDirection:'column', minHeight:0, overflow:'hidden'}}>
        <div style={{padding:16, display:'flex', flexDirection:'column', gap:12, flex:1, minHeight:0, overflow:'hidden'}}>
          {/* Slot ratio — big */}
          <div style={{
            padding:14, borderRadius:12,
            background:'linear-gradient(135deg, rgba(94,234,212,0.08), rgba(167,139,250,0.05))',
            border:'1px solid rgba(94,234,212,0.25)',
            position:'relative', overflow:'hidden'
          }}>
            <div style={{position:'absolute', right:-40, top:-40, width:160, height:160, borderRadius:'50%', background:'radial-gradient(circle, rgba(94,234,212,0.25), transparent 70%)'}}/>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
              <div style={{fontSize:12, color:'#7B8196', letterSpacing:'0.14em'}}>种植库位占比</div>
              <div className="num" style={{fontSize:14, color:'#5EEAD4', fontWeight:600}}>占有率 96.7%</div>
            </div>
            <div style={{display:'flex', alignItems:'baseline', gap:8, margin:'6px 0 10px'}}>
              <span className="num" style={{fontSize:40, fontWeight:800, letterSpacing:'-0.03em'}}>6,500</span>
              <span style={{fontSize:14, color:'#4E5468'}}>/ 6,720 个</span>
            </div>
            <div className="progress" style={{'--p':'96.7%', height:8}}>
              <span style={{background:'linear-gradient(90deg, #5EEAD4, #A78BFA, #60A5FA)', boxShadow:'0 0 16px rgba(94,234,212,0.5)'}}/>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:2, marginTop:8}}>
              {Array.from({length:5}).map((_,i) => (
                <div key={i} style={{height:3, borderRadius:2, background:i<4?'rgba(94,234,212,0.4)':'rgba(255,255,255,0.08)'}}/>
              ))}
            </div>
          </div>

          {/* Today yield */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10}}>
            {[
              {l:'预计产量', v:'3,240', u:'kg', c:'#C9CEDC'},
              {l:'实际产量', v:'3,186', u:'kg', c:'#5EEAD4'},
              {l:'产出批次', v:'48',   u:'批', c:'#A78BFA'},
            ].map((k,i) => (
              <div key={i} style={{padding:'10px 12px', borderRadius:10, background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)'}}>
                <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em'}}>{k.l}</div>
                <div style={{display:'flex', alignItems:'baseline', gap:4, marginTop:2}}>
                  <span className="num" style={{fontSize:22, fontWeight:700, color:k.c}}>{k.v}</span>
                  <span style={{fontSize:11, color:'#7B8196'}}>{k.u}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Ring + Top */}
          <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:16, alignItems:'center', padding:'10px 0', borderTop:'1px dashed rgba(255,255,255,0.06)', borderBottom:'1px dashed rgba(255,255,255,0.06)'}}>
            <RingChart value={98.2} size={110} color="#5EEAD4"/>
            <div>
              <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em'}}>实时合格通过率</div>
              <div style={{display:'flex', alignItems:'baseline', gap:4, margin:'4px 0'}}>
                <span className="num" style={{fontSize:36, fontWeight:700, color:'#5EEAD4'}}>98.2</span>
                <span style={{fontSize:14, color:'#7B8196'}}>%</span>
              </div>
              <div style={{fontSize:11, color:'#4E5468', lineHeight:1.6}}>
                较昨日 <span style={{color:'#34D399'}}>↑ 0.4%</span> &nbsp;|&nbsp; 较上周 <span style={{color:'#34D399'}}>↑ 1.2%</span>
              </div>
              <div style={{display:'flex', gap:6, marginTop:10}}>
                <span className="chip mint" style={{fontSize:10}}>合格 6,384</span>
                <span className="chip warn" style={{fontSize:10}}>返工 116</span>
                <span className="chip alert" style={{fontSize:10}}>废品 44</span>
              </div>
            </div>
          </div>

          {/* TOP10 */}
          <div style={{flex:1, minHeight:0, overflow:'hidden'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
              <div style={{fontSize:12, color:'#7B8196', letterSpacing:'0.14em'}}>品种产出量 TOP10</div>
              <div style={{display:'flex', gap:6}}>
                <span className="chip" style={{fontSize:10}}>本月</span>
                <span className="chip mint" style={{fontSize:10}}>本年 ⟳</span>
              </div>
            </div>
            <TopBars data={P3_TOP10}/>
          </div>
        </div>
      </BentoCard>

      {/* MIDDLE — 环境监控 + 设备表格 */}
      <div style={{display:'flex', flexDirection:'column', gap:12, minHeight:0}}>
        <BentoCard title="环境数据监控" en="ENV MONITORING"
          extra={<span className="chip sky" style={{fontSize:10}}><Ico name="cpu" size={10} color="#60A5FA"/> 3 区域</span>}>
          <div style={{padding:14, display:'grid', gridTemplateRows:'1fr 1fr 1fr', gap:10}}>
            {[
              {name:'垂直种植区', accent:'#5EEAD4', t:24.2, h:68, co2:840, lux:430},
              {name:'育苗区',     accent:'#A78BFA', t:26.1, h:75, co2:680, lux:240},
              {name:'催芽区',     accent:'#FBBF24', t:28.5, h:85, co2:720, lux:120},
            ].map((z,i) => (
              <div key={i} style={{padding:12, borderRadius:10, background:`linear-gradient(90deg, ${z.accent}0a, transparent 60%)`, border:`1px solid ${z.accent}2a`, display:'grid', gridTemplateColumns:'110px 1fr 1fr 1fr 1fr', gap:10, alignItems:'center'}}>
                <div>
                  <div style={{display:'flex', alignItems:'center', gap:8}}>
                    <div style={{width:4, height:14, borderRadius:2, background:z.accent, boxShadow:`0 0 8px ${z.accent}`}}/>
                    <div style={{fontSize:13, fontWeight:600}}>{z.name}</div>
                  </div>
                  <div style={{fontSize:10, color:z.accent, letterSpacing:'0.16em', marginTop:4, opacity:0.7}} className="mono">ZONE · 0{i+1}</div>
                </div>
                <EnvTile icon="temp"  label="温度"       value={z.t}   unit="℃"        color={z.accent}/>
                <EnvTile icon="humid" label="湿度"       value={z.h}   unit="%"        color={z.accent}/>
                <EnvTile icon="co2"   label="CO₂"        value={z.co2} unit="ppm"      color={z.accent}/>
                <EnvTile icon="light" label="光照"       value={z.lux} unit="μmol"     color={z.accent}/>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard title="种植设备运行效率" en="EQUIPMENT EFFICIENCY"
          extra={<span className="chip lav" style={{fontSize:10}}>垂直种植区 ⟳</span>} style={{flex:1}}>
          <table className="tbl">
            <thead>
              <tr>
                <th>设备名称</th>
                <th>运行频次</th>
                <th style={{width:'26%'}}>运行效率</th>
                <th>故障时间</th>
                <th>故障时长</th>
              </tr>
            </thead>
            <tbody>
              {P3_EQUIP.map((e,i) => (
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
                      <span className="num" style={{width:40, textAlign:'right', fontSize:12, fontWeight:600, color: e.status==='warn'?'#FBBF24':'#5EEAD4'}}>{e.eff}%</span>
                    </div>
                  </td>
                  <td className="mono" style={{color:'#7B8196', fontSize:11}}>{e.fault}</td>
                  <td>
                    <span className={`chip ${e.status==='ok'?'mint':'warn'}`} style={{fontSize:10}}>{e.faultH}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </BentoCard>
      </div>

      {/* RIGHT — Live video + 经济指标 */}
      <div style={{display:'flex', flexDirection:'column', gap:12, minHeight:0}}>
        <BentoCard title="线上监控画面" en="LIVE CAMERA"
          extra={<span className="chip alert" style={{fontSize:10}}><span style={{width:5,height:5,borderRadius:'50%', background:'#F87171', boxShadow:'0 0 4px #F87171'}}/> LIVE</span>}>
          <div style={{padding:14, display:'flex', flexDirection:'column', gap:10}}>
            <VideoPH label="垂直种植区 #主通道" ts="14:28:46" aspect="16/9"/>
            <VideoPH label="育苗区 #02" ts="14:28:46" aspect="16/9"/>
          </div>
        </BentoCard>

        <BentoCard title="经济性指标" en="ECONOMIC INDEX"
          extra={<span className="chip lav" style={{fontSize:10}}>今日</span>}
          style={{flex:1}}>
          <div style={{padding:16, display:'flex', flexDirection:'column', gap:14}}>
            <div>
              <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em', marginBottom:8}}>能耗细分</div>
              {[
                {l:'补光电能',   v:'5,824', u:'kWh', c:'#5EEAD4', p:74},
                {l:'环控电能',   v:'2,136', u:'kWh', c:'#A78BFA', p:42},
                {l:'总耗电量',   v:'8,340', u:'kWh', c:'#60A5FA', p:88},
                {l:'营养液/水耗', v:'48.6',  u:'m³',  c:'#34D399', p:56},
              ].map((k,i) => (
                <div key={i} style={{display:'grid', gridTemplateColumns:'1fr auto 100px', alignItems:'center', gap:10, padding:'6px 0', borderBottom:i<3?'1px dashed rgba(255,255,255,0.04)':'none'}}>
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
                  <div className="num" style={{fontSize:17, fontWeight:700, marginTop:4, color:'#5EEAD4'}}>128<span style={{fontSize:10, color:'#7B8196', marginLeft:3}}>kg</span></div>
                </div>
                <div style={{padding:'10px 12px', borderRadius:8, background:'rgba(167,139,250,0.06)', border:'1px solid rgba(167,139,250,0.2)'}}>
                  <div style={{fontSize:10, color:'#7B8196'}}>O₂ 产出估算</div>
                  <div className="num" style={{fontSize:17, fontWeight:700, marginTop:4, color:'#A78BFA'}}>93<span style={{fontSize:10, color:'#7B8196', marginLeft:3}}>kg</span></div>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
    </div>

    {/* Bottom KPI strip — in grid flow */}
    <div style={{gridColumn:'1 / -1', display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:12}}>
      {[
        {i:'power',  l:'单位产量能耗', v:'0.65', u:'kWh/kg', c:'#5EEAD4', d:'8.4%'},
        {i:'leaf',   l:'固碳量',       v:'1,240',u:'kg/日',  c:'#34D399', d:'14.6%'},
        {i:'sun',    l:'绿能替代率',   v:'68.2', u:'%',      c:'#FBBF24', d:'4.2%'},
        {i:'chart',  l:'人工成本降低', v:'56',   u:'%',      c:'#A78BFA', d:'11.2%'},
        {i:'water',  l:'资源循环利用', v:'94',   u:'%',      c:'#60A5FA', d:'3.0%'},
      ].map((k,i) => (
        <KpiCard key={i} icon={k.i} label={k.l} value={k.v} unit={k.u} color={k.c} delta={k.d} deltaType="up" sub="较上周"/>
      ))}
    </div>
  </div>
);

window.Page3 = Page3;
