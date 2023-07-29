/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({ router }) => {
    router.addRoutes([
        {
            path: '/console/', beforeEnter(to, from, next) {
                window.location.replace('https://console.dev.own3d.tv/')
            },
        },
    ])
}
