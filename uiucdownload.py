import os
filePath = 'e:\\uiuc\\'
file_path = 'e:\\uiuc\\'
# os.listdir(file)会历遍文件夹内的文件并返回一个列表
path_list = os.listdir(file_path)
# print(path_list)
# 定义一个空列表,我不需要path_list中的后缀名
path_name=[]
# 利用循环历遍path_list列表并且利用split去掉后缀名
for i in path_list:
    path_name.append('"/download/' + i+'"' )

print (path_name)
print (len(path_name))
#coding:utf-8

import webbrowser
#命名生成的html
GEN_HTML = "download.html" 
#打开文件，准备写入
f = open(GEN_HTML,'w',encoding='utf-8')
 
#准备相关变量
 
message = """

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>下载中心</title>

  </head>

  <body>

      <h1>下载中心</h1>

        <p><a href=%s>%s</a>
        <p><a href=%s>%s</a>

  </body>
</html>"""%(path_name[0],path_name[0].split("/")[2],path_name[2],path_name[2].split("/")[2])
 
#写入文件.split("/")[2]
f.write(message) 
#关闭文件
f.close()
 
#运行完自动在网页中显示
webbrowser.open(GEN_HTML,new = 1) 
'''
webbrowser.open(url, new=0, autoraise=True) 
Display url using the default browser. If new is 0, the url is opened in the same browser window if possible. If new is 1, a new browser window is opened if possible. If new is 2, a new browser page (“tab”) is opened if possible. If autoraise is True, the window is raised if possible (note that under many window managers this will occur regardless of the setting of this variable).
'''
