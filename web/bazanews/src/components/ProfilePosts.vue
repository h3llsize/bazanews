<template>
  <div class="profile-posts">
    <div class="container profile-posts__container">
      <h2 class="profile-posts__heading">
        Ваши посты
      </h2>
      <ul class="profile-posts__list">

      </ul>
    </div>
  </div>
</template>

<style scoped lang='scss'>
  .profile-posts {
    width: 100%;
    padding-top: 30px;
  }

  .profile-posts__container {
    max-width: 640px;
    padding: 0 20px;
  }

  .profile-posts__heading {
    font-size: 28px;
    margin-bottom: 20px;
  }

</style>

<script>
  export default {
    props: [ 'userPosts' ],
    data: function() {
      return {

      }
    },
    methods: {
      
    },
  }
</script>
