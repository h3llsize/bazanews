<template>
  <div class="website">
    <HeaderSection/>
    <Router-View/>
    <ProfileSection/>
  </div>
</template>

<script>
  import HeaderSection from '@/components/HeaderSection';
  import ProfileSection from '@/components/ProfileSection';

  export default {
    data: function() {
      return {

      }
    },
    components: { HeaderSection, ProfileSection },
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
  // global settings
</style>
