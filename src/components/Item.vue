<template>
  <div class="content">
    <img :src="item.user.profile_image_url" alt="profile_image_url" />
    <div class="subject">
      <a :href="item.url">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: [ 'item' ],
}
</script>

<style scoped>
.content {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
}
img {
  width: 64px;
  height: 64px;
}
.subject {
  word-break: break-all;
  margin: 0 5px;
}
</style>
