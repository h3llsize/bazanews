<template>
  <form class="search" @submit.prevent="sendSearchValue" key="search" autocomplete="off">
    <input v-model="currentSearchValue" type="text" name="search" :placeholder="placeholder" class="search__input"/>
    <svg class="search__icon">
      <use xlink:href="../assets/sprite.svg#search-outline"></use>
    </svg>
    <button v-if="currentSearchValue" type="submit" class="search__send">
      Найти
    </button>
  </form>
</template>

<style scoped lang="scss">
  .search {
    position: fixed;
    z-index: 100;
    top: 30px;

    width: 600px;

    &::before {
      content: '';
      position: absolute;
      left: -30px;
      top: -30px;
      right: -30px;
      bottom: -30px;

      background: #F5F5F5;
    }
  }

  .search__input {
    position: relative;

    width: 100%;
    padding: 10px 15px 10px 65px;

    background: #fff;
    border-radius: 15px;

    font-size: 18px;
    line-height: 25px;

    color: rgba(black, .5);
  }

  .search__icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);

    width: 30px;
    height: 30px;

    color: rgba(black, .5);
  }

  .search__send {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);

    padding: 5px 10px;
    border-radius: 10px;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
</style>

<script>
  export default {
    props: [ 'value', 'placeholder' ],
    data: function() {
      return {
        currentSearchValue: '',
      }
    },
    methods: {
      sendSearchValue: function() {
        this.$emit('update:value', this.currentSearchValue);
      }
    },
  }
</script>
