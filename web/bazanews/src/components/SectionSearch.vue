<template>
  <form class="search" @submit.prevent="sendSearchValue" key="search">
    <input v-model="currentSearchValue" type="text" name="search" placeholder="попробуйте найти что-то" class="search__input"/>
    <button v-if="currentSearchValue" type="submit" class="search__send">
      Найти
    </button>
  </form>
</template>

<style scoped lang="scss">
  .search {
    position: relative;
  }

  .search__input {
    position: relative;

    width: 100%;
    padding: 10px 15px;

    background: #fff;
    border-radius: 15px;

    font-size: 18px;
    line-height: 25px;

    color: rgba(black, .5);

    &::placeholder {
      display: flex;
      align-items: center;
      padding-left: 40px;
      background: url(../assets/search-outline.svg) no-repeat;
      opacity: .5;
      color: black;
    }
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
    props: [ 'value' ],
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
