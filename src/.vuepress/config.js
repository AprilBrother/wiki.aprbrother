const { description } = require('../../package')
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack';

module.exports = {
    title: 'Vuepress Docs Boilerplate',
    bundler: webpackBundler(),
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,
    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    shouldPrefetch: () => false,
    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
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
                lang: 'en-US', // this will be set as the lang attribute on <html>
                title: 'April Brother Wiki',
                description: 'April Brother Wiki'
            },
            '/zh/': {
                lang: 'zh-CN',
                title: 'April Brother Wiki',
                description: 'April Brother Wiki'
            }
        },
        navbar: [
            {
                text: 'Home',
                link: 'index.md',
            },
            {
                text: 'About',
                link: 'about.md',
            },
        ]
    }),
}
