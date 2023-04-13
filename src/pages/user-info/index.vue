<template>
    <div @click.stop="goUser">user-info页面</div>
</template>
<script>
export default {
    name: 'UserInfo',
    methods: {
        goUser() {
            console.log('跳到user-page')
            this.$router.push({ name: 'user' })
        },
    },
}
</script>
<style lang="scss" scoped></style>
