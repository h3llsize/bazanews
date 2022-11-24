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

  export default {
    components: { HeaderSection, ProfileSection, ChatSection },
    data: function() {
      return {
        chatActive: true,
      }
    },
    methods: {

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
  // global settings
</style>
