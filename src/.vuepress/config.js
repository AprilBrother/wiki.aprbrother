const { description } = require('../../package')
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack';

module.exports = {
    title: 'Vuepress Docs Boilerplate',
    bundler: webpackBundler(),
    description: description,
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    home: '/',
    locales: {
        '/en/': {
            lang: 'en-US',
            title: 'April Brother Wiki',
            description: 'April Brother: document'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'April Brother Wiki',
            description: 'April Brother: document'
        }
    },
    shouldPrefetch: () => false,
    plugins: [
        mdEnhancePlugin({
            // Enable include files
            include: true,
            mermaid: true
        }),
    ],
    theme: defaultTheme({
        sidebar: 'auto',
        locales: {
            // The key is the path for the locale to be nested under.
            // As a special case, the default locale can use '/' as its path.
            '/en/': {
                selectLanguageName: 'English',
                navbar: [
                    {text: 'Home', link: 'index.md'},
                    {text: 'About', link: 'about.md'},
                ]
            },
            '/zh/': {
                selectLanguageName: '中文',
                navbar: [
                    {text: 'Home', link: 'index.md'},
                    {text: 'About', link: 'about.md'},
                ]
            }
        },
    }),
}
