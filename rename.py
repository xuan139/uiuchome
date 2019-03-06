import os
import sys
import re
# path=input('请输入文件路径(结尾加上/)：')       
path = 'e:\\fromQQ\\'
#获取该目录下所有文件，存入列表中
f=os.listdir('e:\\fromQQ\\/')

n=0
for i in f:
    oldname=f[n]

    #设置旧文件名（就是路径+文件名）
    print(oldname)
    # print(newname) 
    #设置新文件名

    
    n+=1