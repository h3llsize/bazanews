<template>
  <div class="profile-posts">
    <div class="container profile-posts__container">
      <h2 class="profile-posts__heading">
        Ваши посты
      </h2>
      <ul class="profile-posts__list">
        <NewsItem :post="post" :news="false" v-for="post in posts" :key="posts.indexOf(post)"/>
      </ul>
      <div class="pagination">
        <Paginate
          :page-count="totalPages"
          :click-handler="updatePage"
          :prev-text="'❮'"
          :next-text="'❯'"
          :container-class="'paginate'">
        </Paginate>
      </div>
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
  import NewsItem from '@/components/NewsItem.vue';
  import Paginate from 'vuejs-paginate';

  export default {
    props: [ 'userPosts' ],
    components: { NewsItem, Paginate },
    data: function() {
      return {
        posts: [],
        totalPages: 1,
        page: 0,
      }
    },
    methods: {
      getPosts: function() {
        let data = [];
        this.userPosts.content.forEach(el => {
          let obj = {}
          obj.postId = el.id;
          obj.type = 'user';
          obj.name = el.author.name + ' ' + el.author.surname;
          obj.typeMedia = this.typeMedia(el.imageUrl);
          obj.image = el.imageUrl;
          obj.title = el.title;
          obj.desc = el.description;
          obj.route = "news";
          data.push(obj);
        });
        this.posts = data;
      },
      updatePage: function(value) {
        this.page = value-1;
        this.loadNews(this.page, this.searchValue, this.$store.state.moderationMode);
      },
      typeMedia: function(url) {
        const types = new Map([["jpg", "img"], ["png", "img"], ["webp", "img"], ["jpeg", "img"], ["mp4", "video"]]);
        try {
          const urlObj = new URL(url);
          const extension = urlObj.pathname.split(".")[1];

          return types.get(extension);
        } catch (error) {
          return 'img';
        }
      },
    },
  }
</script>
