<template>
    <div class="navbar">
<div @click="$router.push('/')"><my-button>Vue 3</my-button></div>
<my-button style="margin-left: 17px" @click="$router.push('/about')">About</my-button>
<div class="navbar__btns">
    <my-button @click="$router.push('/posts')">Post default</my-button>
    <my-button style="margin-left: 17px" @click="$router.push('/store')">Vuex Post</my-button>
    <my-button style="margin-left: 17px" @click="$router.push('/composition')">CompositionApi Post</my-button>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar {
   height: 60px;
   background-color: rgb(218, 216, 216);
   box-shadow: 2px 2px 4px gray;
   display: flex;
   align-items: center;
   padding: 0 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>