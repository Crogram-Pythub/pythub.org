# DouFTP 服务端

## 软件简介

**DouFTP 服务端 桌面应用程序 V0.0.1**

一个简单的 FTP 服务器端 GUI 应用程序，使用 Python 语言开发，GUI 基于 Tkinter，主要包含功能：

1. 可以修改有权限的用户名、密码及端口

2. 匿名用户访问只能浏览

3. 可以修改路径，弹出文件夹选择窗口

4. 启动和停止按钮可以交互显示

5. 对文件夹路径做判断，不合理的会有提示

---

官网地址：https://douftp.org/server.html

源码地址：https://github.com/douftp/douftp-server

下载地址：[Mac 端](https://github.com/douftp/douftp-server/releases/latest)

---

Mac 端应用不能运行的，需要自行添加签名。执行如下命令

```sh
sudo codesign --force --deep --sign - 应用程序路径
```

## 软件预览

Mac 端：

![DouFTP服务端](/images/screenshots/douftp-server@2x.png)
