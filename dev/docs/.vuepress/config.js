module.exports = {
    title: '微軟職種部落格',
    description: 'Docat\'s Blog',
    head: [
        ['link', { rel: 'icon', href: './page.png' }],  
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: "reco",
    themeConfig: {
        subSidebar: 'auto',
        mode: 'auto', 
        modePicker: true, 
        type: 'blog',
        logo: '/page.png',
        author: 'Docat0209',
        authorAvatar: '/page.png',
        locales: {
            '/': {
              lang: 'zh-TW'
            },
        },
        plugins: [
            [
              "@vuepress-reco/vuepress-plugin-back-to-top",
              {
                icon: './BackToTop.png'
              },
              "@vuepress-reco/vuepress-plugin-loading-page",false
            ]
          ],
        keyPage: {
            color: '#42b983', 
            lineColor: '#42b983'
        },
        blogConfig: {
            category: {
                location: 2,
                text: '專案'
            },
            tag: {
                location: 3,
                text: '標籤'
            }
        },
        friendLink: [
            {
                title: 'Docat0209',
                desc: 'Github網站',
                link: 'https://github.com/Docat0209'
            },
            {
                title: 'URLoser404',
                desc: 'Github網站',
                link: 'https://urloser404.github.io/'
            }
        ],
        nav: [
            { text: '首頁', link: '/', icon: 'reco-home' },
            { text: '網站歷史', link: '/timeline/', icon: 'reco-date' },
            {
                text: '個人連結',
                icon: 'reco-account',
                items: [
                    { text: 'GitHub', link: 'https://github.com/Docat0209', icon: 'reco-github' },
                    { text: 'Gmail', link: 'https://shane930209@gmail.com', icon: 'reco-mail' }
                ]
            }
        ],
        noFoundPageByTencent: false,
        subSidebar: 'auto'
    }
}