/**
 * Client app enhancement file.
 *
 * https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-config.html#register-vue-components
 */

import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({router}) {
        router.addRoute({
            path: '/console/', beforeEnter(to, from, next) {
                window.location.replace('https://console.dev.own3d.tv/')
            },
        })
    },
})
