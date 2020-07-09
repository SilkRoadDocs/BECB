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
            {text: '建站', link: '/web_builder/WebBuilder'},
            {text: '丝', link: 'https://slr.mobvista.com'},
        ],
        sidebar: [
            '/industry_chain/WebBuilder.md',
            '/industry_chain/Selection',
            '/industry_chain/Source',
            '/industry_chain/Marketing',
            '/industry_chain/Operation',
            '/industry_chain/Supplier',
            '/industry_chain/Logistics',
            '/industry_chain/Brand',
            
        ],
    },
};
