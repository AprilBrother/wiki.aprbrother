const { description } = require('../../package')
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import { markdownIncludePlugin } from "@vuepress/plugin-markdown-include"
import { markdownTabPlugin } from "@vuepress/plugin-markdown-tab"
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

module.exports = {
    title: 'Vuepress Docs Boilerplate',
    bundler: viteBundler(),
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
    theme: defaultTheme({
        sidebar: 'heading',
        locales: {
            '/en/': {
                selectLanguageName: 'English',
                navbar: []
            },
            '/zh/': {
                selectLanguageName: '中文',
                navbar: []
            }
        },
    }),
    plugins: [
        mdEnhancePlugin({
            mermaid: true
        }),
        markdownIncludePlugin({}),
        markdownTabPlugin({
            tabs: true
        }),
    ],
}
