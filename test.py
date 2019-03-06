#coding:utf-8

from bottle import template
import webbrowser
import os
file_path = 'e:\\uiuc\\Apartment\\'
path_list = os.listdir(file_path)
path_name=[]
for i in path_list:
    path_name.append(('/download/' + i.strip() ))

print (path_name)
print (len(path_name))
articles = [("Title #1","Detials #1","http://blog.csdn.net/reallocing1/article/details/51694967"),("Title #2","Detials #2","http://music.163.com"),("Title #3","Detials #3","http://douban.fm")]

message = """
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>下载中心</title>

  </head>

  <body>

      <h1>下载中心</h1>
        % for download_link in items:
          <p><a href={{download_link}}>{{download_link.split("/")[2]}}</a>


        %end
 
  </body>
</html>"""


html = template(message,items=path_name)

with open("Apartment.html",'wb') as f:
    f.write(html.encode('utf-8'))


#使用浏览器打开html
webbrowser.open("Apartment.html")
