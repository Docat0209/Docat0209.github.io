module.exports = {
    title: 'Docat0209',
    description: '雞雞',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],  
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: "reco",
    themeConfig: {
        mode: 'light', 
        modePicker: true, 
        type: 'blog',
        logo: '/favicon.ico',
        author: 'Docat0209',
        authorAvatar: '/favicon.ico',
        blogConfig: {
            category: {
                location: 2,
                text: 'Category'
            },
            tag: {
                location: 3,
                text: 'Tag'
            }
        },
        friendLink: [
            {
                title: 'Docat0209',
                desc: 'My own Github',
                link: 'https://github.com/Docat0209'
            }
        ],
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            {
                text: 'About',
                icon: 'reco-account',
                items: [
                    { text: 'GitHub', link: 'https://github.com/Docat0209', icon: 'reco-github' },
                    { text: 'Email', link: 'https://shane930209@gmail.com', icon: 'reco-mail' }
                ]
            }
        ],
        noFoundPageByTencent: false,
        subSidebar: 'auto'
    }
}