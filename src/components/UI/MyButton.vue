<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: "my-button"
    }
</script>

<style scoped>
.btn {
    padding: 10px;
    background: none;
    color: rgb(0, 0, 0);
    border: 1.5px solid rgb(126, 126, 126);
}
</style>