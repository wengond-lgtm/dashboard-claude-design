import re

# page3-qingdao
with open('page3-qingdao.html', 'r', encoding='utf-8') as f:
    page3 = f.read()
page3 = page3.replace('青岛富士康植物工厂数据中心', 'Qingdao Foxconn Plant Factory')
with open('page3-qingdao.html', 'w', encoding='utf-8') as f:
    f.write(page3)

# page4-heilongjiang
with open('page4-heilongjiang.html', 'r', encoding='utf-8') as f:
    page4 = f.read()
page4 = page4.replace('黑龙江北大荒育秧中心', 'Heilongjiang Beidahuang Seedling Center')
with open('page4-heilongjiang.html', 'w', encoding='utf-8') as f:
    f.write(page4)

# page5-shaanxi
with open('page5-shaanxi.html', 'r', encoding='utf-8') as f:
    page5 = f.read()
page5 = page5.replace('陕西崔家湾红薯实验中心', 'Shaanxi Sweet Potato Research Center')
with open('page5-shaanxi.html', 'w', encoding='utf-8') as f:
    f.write(page5)

print("All titles updated")
