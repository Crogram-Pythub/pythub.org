module.exports = {
    selectText: 'Languages',
    label: 'English',
    ariaLabel: 'Languages',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    serviceWorker: {
        updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
        }
    },
    algolia: {},
    nav: [
        { text: 'Home', link: '/' },
        {
            text: 'Software List',
            ariaLabel: 'Software List',
            items: [
                { text: 'File Searcher', link: '/filesearcher' },
                { text: 'Pyinstaller Desktop', link: '/pyinstaller-desktop' },
                { text: 'Show All Files for Mac', link: '/show-all-files-for-mac' },
                { text: 'String Utilities', link: '/string-utilities' },
                {
                    text: 'DouFTP',
                    items: [
                        { text: 'DouFTP Client', link: '/douftp/client' },
                        { text: 'DouFTP Server', link: '/douftp/server' }
                    ]
                }
            ]
        }
    ]
    // sidebar: 'auto'
    // sidebar: {
    //     '/': [],
    //     '/nested/': []
    // }
}
