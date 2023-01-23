<template>
  <li class="news__item item--user">
    <template>
      <div class="news__user-item">
        <div class="news__data-item">
          <h3 class="news__name-item">
            {{ item.name }}
          </h3>
          <span class="news__date-item">
            {{ item.date }}
          </span>
        </div>
        <ModerationsBtns v-if="$store.state.moderationMode && news" :post-id="item.postId" />
      </div>
      <img v-if="item.typeMedia === 'img'" :src="item.image" alt="image" class="news__image-item">
      <video v-else class="news__video-item" :src="item.image" controls="controls">
        <source :src="item.image" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
      </video>
      <h2 class="news__title-item">
        {{ item.title }}
      </h2>
      <p class="news__desc-item">
        {{ item.desc }}
      </p>
    </template>
  </li>
</template>

<style scoped lang='scss'>
  .news__item {
    position: relative;
    padding: 15px;
    background: #fff;
    border-radius: 15px;
  }

  .news__date-item {
    font-size: 12px;
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
    word-wrap: break-word;
    margin-bottom: none;
  }

  .news__desc-item {
    font-size: 14px;
    line-height: 19px;

    color: rgba(black, .5);
    word-wrap: break-word;
  }

  .news__user-item {
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }

  .news__icon-item {
    width: 25px;
    height: 25px;
  }

  .news__data-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-height: 24px;
    padding-bottom: 10px;
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

  .news__video-item {
    border-radius: 0;
    margin: 0 -15px 10px -15px;
    width: calc(100% + 15px * 2);
  }
</style>

<script>
  import ModerationsBtns from '@/components/ModerationsBtns';

  export default {
    props: [ 'item', 'news' ],
    components: { ModerationsBtns },
    data: function () {
      return {

      }
    },
    methods: {
      newsClassObj: function (item) {
        return {
          // 'item--admin': item.type == 'admin',
          // 'item--user': item.type == 'user',
          // 'item--swiper': item.type == 'swiper',
          'item--user': true
        }
      },
    },
  }
</script>
