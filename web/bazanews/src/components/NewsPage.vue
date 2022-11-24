<template>
  <section class="news">
    <div class="container news__container">
      <SectionSearch :value.sync="searchValue" placeholder="попробуйте что-то найти"/>

      <ul class="news__list">
        <li class="news__item" :class="newsClassObj(item)" v-for="item in newsData" :key="newsData.indexOf(item)">
          <template v-if="item.type != 'swiper'">
            <div v-if="item.type == 'user'" class="news__user-item">
              <!-- <img src="../assets/person-circle-outline.svg" alt="Пользователь" class="news__icon-item"> -->
              <div class="news__data-item">
                <h3 class="news__name-item">
                  {{ item.name }}
                </h3>
                <span class="news__subscribes-item">
                  {{ subscribeFormat(item.subscribes) }} подписчиков
                </span>
              </div>
            </div>
            <img :src=pathItems(item.image) alt="image" class="news__image-item">
            <h2 class="news__title-item">
              {{ item.title }}
            </h2>
            <p class="news__desc-item">
              {{ item.desc }}
            </p>
          </template>
          <template v-else>
            <div ref="swiper" class="news__swiper swiper">
              <div class="news__wrapper-swiper swiper-wrapper">
                <div class="news__slide-swiper swiper-slide" v-for="image in item.images">
                  <router-link :to="{ name: image.route }">
                    <img :src=pathItems(image.path) alt="slide" class="news__image-swiper">
                  </router-link>
                </div>
              </div>
            </div>
            <div class="news__button-prev-swiper swiper-button-prev">
              <img src="../assets/chevron-back-outline.svg" alt="arrow" class="news__arrow-swiper">
            </div>
            <div class="news__button-next-swiper swiper-button-next">
              <img src="../assets/chevron-back-outline.svg" alt="arrow" class="news__arrow-swiper">
            </div>
          </template>
        </li>


      </ul>
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

  .news__item {
    padding: 15px;
    background: #fff;
    border-radius: 15px;
  }

  .news__image-item {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 15px;
  }

  .news__title-item {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #000000;
    margin-bottom: none;
  }

  .news__desc-item {
    font-size: 14px;
    line-height: 19px;

    color: rgba(black, .5);
    margin-bottom: none;
  }

  .news__user-item {
    display: flex;
    align-items: flex-start;
    gap: 5px;

    margin-bottom: 10px;
  }

  .news__icon-item {
    width: 25px;
    height: 25px;
  }

  .news__data-item {
    display: flex;
    flex-direction: column;
  }

  .news__name-item {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }

  .news__subscribes-item {
    font-size: 10px;
    line-height: 14px;
    color: rgba(black, .5);
  }

  .item--user .news__image-item {
    border-radius: 0;
    margin: 0 -15px 10px -15px;
    width: calc(100% + 15px * 2);
  }

  .news__item.item--swiper {
    padding: 0;
    background: none;
    border-radius: 0;
  }

  .item--swiper{
    position: relative;
  }

  .news__swiper {
    width: 600px;
    height: 200px;
    border-radius: 15px;
  }

  .news__image-swiper {
    width: 290px;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  .news__button-prev-swiper,
  .news__button-next-swiper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);

    &::after {
      content: '';
    }
  }

  .news__button-prev-swiper {
    left: -20px;
  }
  .news__button-next-swiper {
    right: -20px;
    transform: rotate(180deg);
  }

  .news__arrow-swiper {
    width: 30px;
    height: 30px;

    opacity: .5;
  }
</style>

<script>
  import SectionSearch from '@/components/SectionSearch';
  import pathItems from '@/helpers/pathItems';
  import Swiper from 'swiper/bundle';
  import 'swiper/css/bundle';

  export default {
    components: { SectionSearch },
    data: function() {
      return {
        searchValue: '',

        newsData: [
          {
            type: 'swiper',
            images: [
              {
                path: 'slide1.png',
                route: 'news',
              },
              {
                path: 'slide2.png',
                route: 'news',
              }
            ]
          },
          {
            type: 'admin',
            image: 'gaz.jpg',
            title: 'Завершение проектирования газопровода "Союз Восток" ожидают в 2023 году',
            desc: 'Завершение проектирования газопровода "Союз Восток", продолжающего "Силу Сибири 2" через Монголию в Китай, ожидается в 2023 году, сообщила вице-премьер РФ Виктория Абрамченко.',
            route: 'news',
          },
          {
            type: 'user',
            avatar: 'person-circle-outline.svg',
            name: 'riwall',
            subscribes: '36630',
            image: 'image.png',
            title: 'Coolest wallpaper!',
            desc: 'I made a very beautiful wallpaper for your desktop.',
            route: 'news'
          },
        ],
      }
    },
    methods: {
      pathItems,
      subscribeFormat: function(value) {
        return value >= 1000 ? Math.round(value / 100) / 10 + 'K' : value
      },
      newsClassObj: function(item) {
        return {
          'item--admin': item.type == 'admin',
          'item--user': item.type == 'user',
          'item--swiper': item.type == 'swiper',
        }
      },
    },
    mounted: function() {
      new Swiper(this.$refs.swiper, {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,

        navigation: {
          nextEl: '.news__button-next-swiper',
          prevEl: '.news__button-prev-swiper',
        },
      })
    },
  }
</script>
