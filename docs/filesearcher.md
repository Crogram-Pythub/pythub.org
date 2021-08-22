# 文件搜索工具 V0.0.1

## 软件简介

一个简单的文件搜索工具，使用 Python 语言开发，GUI 基于 Tkinter，主要包含功能：

1. 文件名可为空，输入指定文件后缀，选择文件夹搜索文件

2. 重置输入的数据

3. 清理列表数据

源码地址：https://github.com/pythub-project/filesearcher

下载地址：[Mac 端](https://github.com/pythub-project/filesearcher/releases/latest)

---

Mac 端应用不能运行的，需要自行添加签名。执行如下命令

```
chmod +x dist/文件搜索工具.app/Contents/MacOS/文件搜索工具`
`sudo codesign --force --deep --sign - ./dist/文件搜索工具.app
```

## 软件预览

Mac 端：

![字符串处理工具](/images/screenshots/filesearcher@2x.png)
