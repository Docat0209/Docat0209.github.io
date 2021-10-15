module.exports = {
    title: '微軟職種部落格',
    description: 'Docat\'s Blog',
    theme: "reco",
    head: [
        ['link', { rel: 'icon', href: './page.png' }],  
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["script", {
          "language": "javascript",
          "type": "text/javascript",
          "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
        }],
        ["script", {
          "language": "javascript",
          "type": "text/javascript",
          "src": "./js/MouseClickEffect.js"
        }]       
    ],
    plugins: 
    [
        ["@vuepress-reco/vuepress-plugin-loading-page", false],
        [
            "dynamic-title",
            {
              showText: "(/≧▽≦/)！",
              hideText: "(●—●)！",
              recoverTime: 2000
            }
        ],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "網站更新啦",
                buttonText: "刷新"
            }
        }],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "複製程式碼",
            tip: {
                content: "複製成功!"
            }
          }]
      
    ],
    themeConfig: {
        subSidebar: 'auto',
        mode: 'dark', 
        modePicker: false, 
        type: 'blog',
        logo: '/page.png',
        author: 'Docat0209',
        authorAvatar: '/page.png',
        locales: {
            '/': {
              lang: 'zh-TW'
            },
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
        codeTheme: 'tomorrow', // default 'tomorrow'
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
        noFoundPageByTencent: false
    }
    
}