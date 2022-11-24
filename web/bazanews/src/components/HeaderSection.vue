<template>
  <header class="header">
    <div class="container header__container">

      <router-link :to="{ path: '/' }" class="header__logo">
        База
      </router-link>

      <nav class="header__nav">
        <ul class="header__list">

          <li ref="news" class="header__item" :class="{ is_active: item.route == $route.name }" v-for="item in navItems" :key=item.route>
            <router-link :to="{ name: item.route }" class="header__link">
              <img :src=pathItems(item.path) class="header__icon">
              {{ item.title }}
            </router-link>
          </li>
          <li class="header__item" :class="{ is_active: chatActive }">
            <button class="header__link" @click.prevent="activateChat">
              <svg class="header__icon">
                <use xlink:href="../assets/sprite.svg#chatbubble-outline"></use>
              </svg>
              Чат
            </button>
          </li>

        </ul>
      </nav>

    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    max-width: 300px;
  }

  .header__container {
    max-width: 280px;
    padding: 30px 20px;
  }

  .header__logo {
    display: block;

    font-weight: 600;
    font-size: 32px;
    line-height: 44px;

    letter-spacing: -0.07em;
    color: #000000;

    margin-bottom: 60px;
  }

  .header__list {
    display: flex;
    flex-direction: column;
  }

  .header__item {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;

      background: transparent;
      border-radius: 10px;

      transform: scaleX(.916);
      transform-origin: left;
      transition: .25s ease;
    }
    &.is_active::before {
      transform: none;
      background: #fff;
    }
  }

  .header__link {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 9px 10px;
    width: 240px;

    font-size: 18px;
    line-height: 25px;

    color: #000000;
  }

  .header__icon {
    width: 22px;
    height: 22px;
    color: black;
  }
</style>

<script>
  import pathItems from '@/helpers/pathItems';

  export default {
    props: [ 'active' ],
    data: function() {
      return {
        btns: {
          news: false,
          actions: false,
          enterprises: false,
        },
        navItems: [
          {
            title: 'Главная',
            path: 'newspaper-outline.svg',
            route: 'news',
          },
          {
            title: 'События',
            path: 'calendar-outline.svg',
            route: 'actions',
          },
          {
            title: 'Предприятия',
            path: 'storefront-outline.svg',
            route: 'enterprises',
          },
        ],
        chatActive: this.active,
      }
    },
    methods: {
      pathItems,
      activateChat: function() {
        this.chatActive = !this.chatActive;
        this.$emit('update:active', this.chatActive);
      }
    },
  }
</script>
