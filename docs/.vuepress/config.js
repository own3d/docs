import {defaultTheme} from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {navbarEn, sidebarEn} from './configs'

const {description} = require('../../package')

export default defineUserConfig({
    lang: 'en-US',

    /**
     * The title of the site.
     */
    title: 'OWN3D Developer Portal',

    /**
     * The description of the site.
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     */
    head: [
        ['meta', {name: 'theme-color', content: '#ff9602'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ],

    /**
     * The base URL the site will be deployed at.
     */
    base: '/',

    theme: defaultTheme({
        repo: 'own3d/docs',
        docsDir: 'docs',

        locales: {
            /**
             * English locale config
             */
            '/': {
                navbar: navbarEn,
                sidebar: sidebarEn,
                editLinkText: 'Edit this page on GitHub',
            },
        },
    }),

    bundler: viteBundler(),
})