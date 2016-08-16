<template lang="jade">
header.main-header
    .my-avatar
        img(src="../assets/tom.jpg")
    .my-name PiLee
    nav.main-nav.clearfix
        ul
            li.nav-item
                a(v-link="{ path: '/'}") 首页
            li.nav-item
                a(v-link="{ path: '/about'}") 关于
</template>
