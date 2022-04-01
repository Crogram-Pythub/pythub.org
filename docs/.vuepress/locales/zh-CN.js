module.exports = {
    // 多语言下拉菜单的标题
    selectText: '选择语言',
    ariaLabel: '选择语言',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    // 编辑链接文字
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    // Service Worker 的配置
    serviceWorker: {
        updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
        }
    },
    // 当前 locale 的 algolia docsearch 选项
    algolia: {},
    nav: [
        { text: '首页', link: '/zh-cn/' },
        {
            text: '软件列表',
            ariaLabel: '软件列表',
            items: [
                { text: '文件搜索工具', link: '/zh-cn/filesearcher/' },
                { text: 'GUI应用生成器', link: '/zh-cn/pyinstaller-desktop/' },
                { text: '显示系统所有文件', link: '/zh-cn/show-all-files/' },
                { text: '字符串处理工具', link: '/zh-cn/string-utilities/' },
                { text: '账号密码助手', link: '/zh-cn/password-assistant/' },
                {
                    text: 'DouFTP',
                    items: [
                        { text: 'DouFTP 客户端', link: '/zh-cn/douftp/client' },
                        { text: 'DouFTP 服务端', link: '/zh-cn/douftp/server' }
                    ]
                }
            ]
        },
        {
            text: '相关资源',
            items: [
                { text: 'Python 官网', link: 'https://www.python.org/' },
                { text: 'Tk图形用户界面(GUI)', link: 'https://docs.python.org/zh-cn/3/library/tk.html' },
                { text: 'PyInstaller', link: 'http://www.pyinstaller.org/' }
            ]
        }
    ]
    // sidebar: 'auto'
    // sidebar: {
    //     '/zh-cn/': [],
    //     '/zh-cn/nested/': []
    // }
}
