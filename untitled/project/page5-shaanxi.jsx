/* Page 5 — 陕西崔家湾红薯实验中心
 * Similar structure to Page 4 but sweet potato themed, warmer accent
 */

const Page5 = () => (
  <div className="screen" data-screen-label="05 陕西崔家湾红薯实验中心">
    <HeaderBar title="陕西崔家湾红薯实验中心" showSwitcher time="2026-04-23 14:28:46" weekday="星期四"/>

    <div style={{padding:'16px 24px 14px', display:'grid', gridTemplateColumns:'1.1fr 1.4fr 1fr', gridTemplateRows:'1fr auto', gap:16, flex:1, minHeight:0, overflow:'hidden', boxSizing:'border-box'}}>

      {/* LEFT — 订单排产与产量 */}
      <BentoCard title="订单排产与产量" en="SCHEDULE & YIELD"
        extra={<span className="chip warn"><Ico name="leaf" size={12} color="#FBBF24"/> 模块 01</span>}
        style={{display:'flex', flexDirection:'column'}}>
        <div style={{padding:22, display:'flex', flexDirection:'column', gap:22, flex:1}}>

          {/* planned vs actual */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
            <div style={{padding:'18px 18px', borderRadius:12, background:'linear-gradient(180deg, rgba(251,191,36,0.08), transparent 60%)', border:'1px solid rgba(251,191,36,0.25)'}}>
              <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:10}}>
                <div className="icon-badge" style={{width:28, height:28, borderColor:'#FBBF2455', background:'rgba(251,191,36,0.12)'}}><Ico name="chart" size={14} color="#FBBF24"/></div>
                <span style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em'}}>计划盘数</span>
              </div>
              <div className="num" style={{fontSize:38, fontWeight:800, letterSpacing:'-0.03em'}}>250,000</div>
              <div style={{fontSize:11, color:'#4E5468', letterSpacing:'0.1em', marginTop:4}}>盘 · 本月</div>
            </div>
            <div style={{padding:'18px 18px', borderRadius:12, background:'linear-gradient(180deg, rgba(94,234,212,0.08), transparent 60%)', border:'1px solid rgba(94,234,212,0.25)'}}>
              <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:10}}>
                <div className="icon-badge" style={{width:28, height:28, borderColor:'#5EEAD455', background:'rgba(94,234,212,0.12)'}}><Ico name="check" size={14} color="#5EEAD4"/></div>
                <span style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em'}}>实际盘数</span>
              </div>
              <div className="num" style={{fontSize:38, fontWeight:800, letterSpacing:'-0.03em', color:'#5EEAD4'}}>238,000</div>
              <div style={{fontSize:11, color:'#4E5468', letterSpacing:'0.1em', marginTop:4}}>盘 · 累计完成</div>
            </div>
          </div>

          {/* 在架率 */}
          <div style={{padding:'16px 18px', borderRadius:12, background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10}}>
              <div style={{fontSize:12, color:'#C9CEDC', letterSpacing:'0.14em'}}>在架率</div>
              <div className="num" style={{fontSize:30, fontWeight:700, color:'#FBBF24'}}>95.2<span style={{fontSize:14, color:'#7B8196', marginLeft:3}}>%</span></div>
            </div>
            <div className="progress" style={{'--p':'95.2%', height:10}}>
              <span style={{background:'linear-gradient(90deg, #FBBF24, #F97316, #A78BFA)', boxShadow:'0 0 16px rgba(251,191,36,0.5)'}}/>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:8, fontSize:10, color:'#4E5468'}}>
              <span>0</span><span>50k</span><span>100k</span><span>150k</span><span>200k</span><span>250k</span>
            </div>
          </div>

          {/* 本月红薯产出数 */}
          <div style={{
            padding:18, borderRadius:12,
            background:'linear-gradient(135deg, rgba(251,191,36,0.08), rgba(249,115,22,0.04))',
            border:'1px solid rgba(251,191,36,0.3)',
            display:'flex', alignItems:'center', gap:16
          }}>
            <div style={{width:56, height:56, borderRadius:12, background:'rgba(251,191,36,0.15)', border:'1px solid rgba(251,191,36,0.4)', display:'grid', placeItems:'center'}}>
              <Ico name="plant" size={26} color="#FBBF24"/>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em'}}>本月红薯产出数</div>
              <div style={{display:'flex', alignItems:'baseline', gap:6, marginTop:4}}>
                <span className="num" style={{fontSize:36, fontWeight:800, color:'#FBBF24'}}>48</span>
                <span style={{fontSize:14, color:'#7B8196'}}>批</span>
              </div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontSize:10, color:'#4E5468', letterSpacing:'0.1em'}}>较上月</div>
              <div style={{fontSize:16, color:'#34D399', fontWeight:600, marginTop:2}}>↑ 9.8%</div>
            </div>
          </div>

          {/* 合格通过率 — big ring */}
          <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:28, padding:'16px 0', borderTop:'1px dashed rgba(255,255,255,0.06)'}}>
            <RingChart value={99.1} size={180} color="#FBBF24" label="实时合格通过率"/>
            <div style={{flex:1}}>
              <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.16em', marginBottom:6}}>合格分布</div>
              {[
                {l:'合格', v:'235,870', p:99.1, c:'#FBBF24'},
                {l:'返工', v:'1,880',   p:0.7,  c:'#A78BFA'},
                {l:'废品', v:'250',     p:0.2,  c:'#F87171'},
              ].map((r,i) => (
                <div key={i} style={{display:'grid', gridTemplateColumns:'60px 1fr auto', alignItems:'center', gap:10, padding:'8px 0'}}>
                  <span style={{fontSize:12, color:'#C9CEDC'}}>{r.l}</span>
                  <div className="progress" style={{'--p':Math.max(r.p, 1)+'%'}}>
                    <span style={{background:r.c, boxShadow:`0 0 10px ${r.c}66`}}/>
                  </div>
                  <span className="num" style={{fontSize:13, fontWeight:600, color:r.c, width:70, textAlign:'right'}}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BentoCard>

      {/* MIDDLE — Env + live */}
      <div style={{display:'flex', flexDirection:'column', gap:18}}>
        <BentoCard title="环境数据监控" en="ENV MONITORING"
          extra={<span className="chip sky" style={{fontSize:10}}><Ico name="cpu" size={10} color="#60A5FA"/> 2 区域</span>}>
          <div style={{padding:16, display:'grid', gridTemplateRows:'1fr 1fr', gap:14}}>
            {[
              {name:'种植区', accent:'#FBBF24', t:25.4, h:65, co2:720, lux:520, status:'正常'},
              {name:'育苗区', accent:'#A78BFA', t:27.8, h:82, co2:640, lux:200, status:'正常'},
            ].map((z,i) => (
              <div key={i} style={{padding:14, borderRadius:10, background:`linear-gradient(180deg, ${z.accent}0a, transparent 70%)`, border:`1px solid ${z.accent}2a`}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
                  <div style={{display:'flex', alignItems:'center', gap:10}}>
                    <div style={{width:5, height:16, borderRadius:2, background:z.accent, boxShadow:`0 0 10px ${z.accent}`}}/>
                    <div style={{fontSize:14, fontWeight:600, letterSpacing:'0.08em'}}>{z.name}</div>
                    <span className="mono" style={{fontSize:10, color:z.accent, letterSpacing:'0.18em', opacity:0.7}}>ZONE · 0{i+1}</span>
                  </div>
                  <span className="chip mint" style={{fontSize:10, background:`${z.accent}14`, borderColor:`${z.accent}44`, color:z.accent}}>{z.status}</span>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:10}}>
                  <EnvTile icon="temp"  label="温度"    value={z.t}   unit="℃"          color={z.accent}/>
                  <EnvTile icon="humid" label="湿度"    value={z.h}   unit="%"          color={z.accent}/>
                  <EnvTile icon="co2"   label="CO₂"    value={z.co2} unit="ppm"         color={z.accent}/>
                  <EnvTile icon="light" label="光照"    value={z.lux} unit="μmol/m²/s"   color={z.accent}/>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard title="线上监控画面" en="LIVE CAMERA"
          extra={<span className="chip alert" style={{fontSize:10}}><span style={{width:5,height:5,borderRadius:'50%', background:'#F87171', boxShadow:'0 0 4px #F87171'}}/> LIVE</span>}
          style={{flex:1}}>
          <div style={{padding:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, height:'calc(100% - 52px)'}}>
            <VideoPH label="种植区 #C1" ts="14:28:46"/>
            <VideoPH label="育苗区 #D2" ts="14:28:46"/>
          </div>
        </BentoCard>
      </div>

      {/* RIGHT — 经济性指标 */}
      <BentoCard title="经济性指标" en="ECONOMIC INDEX"
        extra={<span className="chip lav" style={{fontSize:10}}>今日</span>}
        style={{display:'flex', flexDirection:'column'}}>
        <div style={{padding:16, display:'flex', flexDirection:'column', gap:12, flex:1}}>
          {[
            {i:'sun',    l:'补光电能',    v:'986',    u:'kWh',     c:'#FBBF24'},
            {i:'cpu',    l:'环控电能',    v:'432',    u:'kWh',     c:'#A78BFA'},
            {i:'power',  l:'总耗电量',    v:'1,560',  u:'kWh',     c:'#60A5FA'},
            {i:'water',  l:'营养液/水耗', v:'18.4',   u:'m³',      c:'#34D399'},
            {i:'chart',  l:'单位产量能耗', v:'0.68',  u:'kg/kWh',  c:'#5EEAD4'},
          ].map((k,i) => (
            <div key={i} style={{
              padding:'14px 16px', borderRadius:12,
              background:`linear-gradient(90deg, ${k.c}0a, transparent 70%)`,
              border:`1px solid ${k.c}28`,
              display:'flex', alignItems:'center', gap:14, flex:1
            }}>
              <div className="icon-badge" style={{width:44, height:44, borderRadius:12, borderColor:k.c+'55', background:k.c+'16'}}>
                <Ico name={k.i} size={22} color={k.c}/>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:11, color:'#7B8196', letterSpacing:'0.14em'}}>{k.l}</div>
                <div style={{display:'flex', alignItems:'baseline', gap:4, marginTop:4}}>
                  <span className="num" style={{fontSize:26, fontWeight:700, color:k.c}}>{k.v}</span>
                  <span style={{fontSize:12, color:'#7B8196'}}>{k.u}</span>
                </div>
              </div>
              <SparkLine points={Array.from({length:14}, ()=>0.2+Math.random()*0.8)} color={k.c} w={80} h={36}/>
            </div>
          ))}
        </div>
      </BentoCard>

    {/* Bottom summary strip — in flow */}
      <div className="card" style={{gridColumn:'1 / -1', padding:'14px 22px', display:'grid', gridTemplateColumns:'repeat(6, 1fr) auto', gap:22, alignItems:'center'}}>
        <div>
          <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.16em'}}>累计产出</div>
          <div className="num" style={{fontSize:22, fontWeight:700, marginTop:2}}>14,280 <span style={{fontSize:11, color:'#7B8196'}}>kg</span></div>
        </div>
        <div>
          <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.16em'}}>在架苗数</div>
          <div className="num" style={{fontSize:22, fontWeight:700, marginTop:2, color:'#FBBF24'}}>238,000 <span style={{fontSize:11, color:'#7B8196'}}>盘</span></div>
        </div>
        <div>
          <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.16em'}}>实验品种</div>
          <div className="num" style={{fontSize:22, fontWeight:700, marginTop:2}}>18 <span style={{fontSize:11, color:'#7B8196'}}>种</span></div>
        </div>
        <div>
          <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.16em'}}>平均生长周期</div>
          <div className="num" style={{fontSize:22, fontWeight:700, marginTop:2, color:'#A78BFA'}}>96 <span style={{fontSize:11, color:'#7B8196'}}>天</span></div>
        </div>
        <div>
          <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.16em'}}>设备在线率</div>
          <div className="num" style={{fontSize:22, fontWeight:700, marginTop:2, color:'#34D399'}}>98.8 <span style={{fontSize:11, color:'#7B8196'}}>%</span></div>
        </div>
        <div>
          <div style={{fontSize:10, color:'#7B8196', letterSpacing:'0.16em'}}>日产出目标</div>
          <div className="num" style={{fontSize:22, fontWeight:700, marginTop:2, color:'#FBBF24'}}>620 <span style={{fontSize:11, color:'#7B8196'}}>kg</span></div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:8, padding:'10px 16px', borderRadius:10, background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.3)'}}>
          <span className="mono" style={{fontSize:11, color:'#FBBF24', letterSpacing:'0.18em'}}>DATA SYNC</span>
          <span style={{width:6, height:6, borderRadius:'50%', background:'#FBBF24', boxShadow:'0 0 8px #FBBF24'}}/>
        </div>
      </div>
    </div>
  </div>
);

window.Page5 = Page5;
