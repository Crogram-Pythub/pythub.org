const locales = require('./locales/index')
const localesConfig = require('./locales/localesConfig')

module.exports = {
    title: 'PytHub',
    description: 'Python 桌面应用程序合集',
    locales: locales,
    head: [
        ['meta', { name: 'renderer', content: 'webkit' }],
        ['meta', { name: 'force-rendering', content: 'webkit' }],
        ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' }],
        ['meta', { name: 'author', content: 'CROGRAM' }],
        ['meta', { name: 'copyright', content: 'CROGRAM 程江开源' }],
        ['meta', { name: 'keywords', content: 'PytHub, Python, Python GUI, Tkinter' }],
        // ['meta', { name: 'baidu-site-verification', content: '' }],
        // ['meta', { name: 'google-site-verification', content: '' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        repo: 'pythub-project/pythub.org',
        docsBranch: 'master',
        docsDir: 'docs/', // 文档源文件存放在仓库中的目录名
        editLinks: true,
        locales: localesConfig
    },
    plugins: [
        ['@vuepress/plugin-back-to-top', true]
        // [
        //     '@vuepress/google-analytics',
        //     {
        //         ga: 'UA-28162642-12'
        //     }
        // ]
    ]
}
