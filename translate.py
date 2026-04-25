import re

# 中文到英文的映射
translations = {
    '<title>AFAFA · 02 北京大学东莞光电研究院</title>': '<title>AFAFA · 02 Beijing University Photonics Institute</title>',
    '<html lang="zh-CN">': '<html lang="en">',
    '01 · 总览': '01 · Overview',
    '02 · 北京': '02 · Beijing',
    '03 · 青岛': '03 · Qingdao',
    '04 · 黑龙江': '04 · Heilongjiang',
    '05 · 陕西': '05 · Shaanxi',
    '系统在线': 'System Online',
    '数据同步中': 'Syncing Data',
    '北京大学东莞光电研究院光生物应用研发中心': 'Beijing University Photonics Institute - Photobiology Research Center',
    '生产与订单管理': 'Production & Order Management',
    '线上监控画面': 'Live Camera Feed',
    '环境数据监控': 'Environment Monitoring',
    '种植设备运行效率': 'Equipment Efficiency',
    '经济性指标': 'Economic Indicators',
    'PRODUCTION & ORDERS': 'PRODUCTION & ORDERS',
    'LIVE CAMERA': 'LIVE CAMERA',
    'ENV MONITORING · 3 ZONES': 'ENV MONITORING · 3 ZONES',
    'EQUIPMENT EFFICIENCY': 'EQUIPMENT EFFICIENCY',
    'ECONOMIC INDEX': 'ECONOMIC INDEX',
}

# 读取并替换所有页面
pages = ['page2-beijing.html', 'page3-qingdao.html', 'page4-heilongjiang.html', 'page5-shaanxi.html']

for page in pages:
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for zh, en in translations.items():
        content = content.replace(zh, en)
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Translated {page}")

