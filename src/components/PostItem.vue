<template>
    <div class="post">
        <div>
        <div style="margin-bottom: 6px">id = {{ post.id }}</div>
        <div><strong>Name:</strong> {{ post.title }}</div>
        <div><strong>Description:</strong> {{ post.body }}</div>
       </div>
       <div class="post__btns">
           <my-button
           @click="$router.push(`/posts/${post.id}`)"
           style="margin-right: 5px"
           >
           Open
           </my-button>
           <my-button
           @click="$emit ('remove', post)"
           >
           Delete
           </my-button>
           </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
.post {
    padding: 15px;
    border: 1.5px solid rgb(126, 126, 126);
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post__btns {
    display: flex;
}
</style>