<template>
  <div class="website" :class="{ chat_active: chatActive }">
    <HeaderSection :active.sync="chatActive"/>
    <Router-View/>
    <ChatSection :active="chatActive"/>
    <ProfileSection/>
  </div>
</template>

<script>
  import HeaderSection from '@/components/HeaderSection';
  import ProfileSection from '@/components/ProfileSection';
  import ChatSection from '@/components/ChatSection';
  import { mapActions } from 'vuex';

  export default {
    components: { HeaderSection, ProfileSection, ChatSection },
    data: function() {
      return {
        chatActive: false,
      }
    },
    methods: {
      ...mapActions({ validateToken: 'validateToken' }),
    },
    created: function() {
      if (localStorage.getItem('bzaccesstoken') != "false") {
        this.validateToken();
      }
    }

  }
</script>

<style lang="scss">
  // global settings
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  * {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  input, button {
    background: none;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  body {
    position: relative;
    min-height: 100vh;
    background: #F5F5F5;
  }

  .container {
    margin: 0 auto;
    padding: 0 20px;
  }

  .website {
    position: relative;
  }

  .news,
  .actions,
  .enterprises {
    transition: padding .25s ease;
  }

  .chat_active .news,
  .chat_active .actions,
  .chat_active .enterprises {
    padding-right: 300px !important;
  }

  .pagination {
    display: flex;
    justify-content: center;

    width: 100%;
    padding-top: 20px;
  }

  .paginate {
    display: flex;
    align-items: center;
    gap: 10px;

    li {
      transition: transform .25s ease;
      &.active {
        // filter: drop-shadow(0 10px 10px rgba(black, 0.25));
        transform: scale(1.1);
      }
      &.disabled {
        a {
          cursor: not-allowed;
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 100%;
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
  // global settings
</style>
