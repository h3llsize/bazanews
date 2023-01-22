<template>
  <section class="news">
    <div class="container news__container">
      <SectionSearch :value.sync="searchValue" placeholder="попробуйте что-то найти"/>

      <ul class="news__list">
        <NewsItem :item="item" :news="true" v-for="item in news" :key="news.indexOf(item)"/>
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
  </section>
</template>

<style scoped lang="scss">
  .news {
    padding-top: 75px;
  }

  .news__container {
    position: relative;
    max-width: 640px;
    padding: 30px 20px;
  }

  .news__list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    padding-top: 30px;
  }
</style>

<script>
  import SectionSearch from '@/components/SectionSearch';
  import NewsItem from '@/components/NewsItem';
  import Paginate from 'vuejs-paginate';
  import Swiper from 'swiper/bundle';
  import axios from 'axios';
  import 'swiper/css/bundle';
  import { API_BASE_URL } from '@/helpers/API_BASE_URL';

  export default {
    components: { SectionSearch, NewsItem, Paginate },
    data: function() {
      return {
        searchValue: '',

        page: 0,
        totalPages: 1,

        newsData: null,
        news: [],
      }
    },
    methods: {
      loadNews: function(page, text, moderate) {
        return axios
          .get(`${API_BASE_URL}/api/post/${moderate ? 'moderate' : 'find'}`, {
            params: {
              page: page,
              query: text,
              accessToken: localStorage.getItem('bzaccesstoken'),
            }
          })
          .then(response => {
            this.newsData = response.data;
            this.totalPages = response.data.totalPages;
            this.getNews();
          });
      },
      getNews: function() {
        let data = [];
        this.newsData.content.forEach(el => {
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
        this.news = data;
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
      }
    },
    mounted: function() {
      // new Swiper(this.$refs.swiper, {
      //   direction: 'horizontal',
      //   loop: true,
      //   slidesPerView: 2,
      //   spaceBetween: 20,

      //   navigation: {
      //     nextEl: '.news__button-next-swiper',
      //     prevEl: '.news__button-prev-swiper',
      //   },
      // })
    },
    created: function() {
      this.loadNews(this.page, this.searchValue, this.$store.state.moderationMode);
    },
    watch: {
      searchValue: function() {
        this.loadNews(this.page, this.searchValue, this.$store.state.moderationMode);
      },
      '$store.state.updateNews': function() {
        this.loadNews(this.page, this.searchValue, this.$store.state.moderationMode);
        this.$store.commit('updateNews')
      }
    }
  }
</script>


