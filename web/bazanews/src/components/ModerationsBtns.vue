<template>
  <div class="moderation">
    <div class="moderation__btns" @click.prevent="menuOpen = !menuOpen">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-if="menuOpen" class="moderation__menu">
      <button class="moderation__btn" @click.prevent="checkPost(postId)">Одобрить</button>
      <button class="moderation__btn" @click.prevent="declinePost(postId)">Отклонить</button>
    </div>
  </div>
</template>

<style scoped lang='scss'>
  .moderation {
    position: absolute;
    top: 10px;
    right: 15px;
  }

  .moderation__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    height: 22px;
    border-radius: 100%;
    cursor: pointer;
  }

  .moderation__btns span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4px;
    height: 4px;
    background: black;
    border-radius: 100%;
  }

  .moderation__menu {
    position: absolute;
    top: -10px;
    right: -190px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 20px;
    background: #fff;
    border-radius: 20px;
    border-top-left-radius: 0;
  }

  .moderation__btn {
    font-weight: 700;
    padding: 10px 20px;
    background: #08D9D6;
    color: white;
    border-radius: 10px;
    font-size: 14px;
  }

  .moderation__btn:nth-of-type(2) {
    background: #FF2E63;
  }
</style>

<script>
  import axios from 'axios';
  import { API_BASE_URL } from '@/helpers/API_BASE_URL';

  export default {
    props: [ 'postId' ],
    data: function() {
      return {
        menuOpen: false,
      }
    },
    methods: {
      checkPost: function(id) {
        return axios.get(`${API_BASE_URL}/api/post/check`, {
          params: {
            id: id,
            accessToken: localStorage.getItem('bzaccesstoken'),
          }
        })
        .then(response => {
          alert(response.data);
          this.updateState();
        })
        .catch(error => {
          alert(error);
        })
      },
      declinePost: function(id) {
        return axios.get(`${API_BASE_URL}/api/post/decline`, {
          params: {
            id: id,
            accessToken: localStorage.getItem('bzaccesstoken'),
          }
        })
        .then(response => {
          alert(response.data);
          this.updateState();
        })
        .catch(error => {
          alert(error);
        })
      },
      updateState: function() {
        this.$store.commit('updateNews', true);
      }
    },
  }
</script>
