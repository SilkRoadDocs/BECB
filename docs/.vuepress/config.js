module.exports = {
    title: 'Build E-commerce Business',
    description:
        'BECB 帮助你快速构建跨境电商业务，细胞级指导。',
    head: [['link', { rel: 'icon', href: '/public/img/favicon.ico' }]],
    dest: './dist',
    base: '/BECB/dist/',
    themeConfig: {
        nav: [
            {text: '电商资讯', link: '/guide/News'},
            {text: '丝路', link: 'https://slr.mobvista.com'},
        ],
        sidebar: [
            '/'
        ],
    },
};
