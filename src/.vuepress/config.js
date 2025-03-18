const { description } = require('../../package')
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import { markdownIncludePlugin } from "vuepress-plugin-markdown-include"
import { markdownTabPlugin } from "@vuepress/plugin-markdown-tab"
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
    theme: defaultTheme({
        sidebar: 'auto',
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
            include: true,
            tabs: true,
            mermaid: true
        })<
        markdownIncludePlugin({}),
        markdownTabPlugin({}),
    ],
}
