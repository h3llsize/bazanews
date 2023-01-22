<template>
  <section class="profile-page">
    <div class="container profile-page__container">

      <ProfileUser :user-email="userEmail" :user-name="userName" :user-surname="userSurname"/>
      <ProfileCreate/>
      <ProfilePosts :user-posts="userPosts"/>

    </div>
  </section>
</template>

<style scoped lang="scss">
  .profile-page {
    padding-top: 35px;
  }

  .profile-page__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 20px;
  }
</style>

<script>
  import ProfileUser from '@/components/ProfileUser';
  import ProfileCreate from '@/components/ProfileCreate';
  import ProfilePosts from '@/components/ProfilePosts';
  import axios from 'axios';
  import { mapActions } from 'vuex';
  import { API_BASE_URL } from '@/helpers/API_BASE_URL';

  export default {
    components: { ProfileUser, ProfileCreate, ProfilePosts },
    data: function() {
      return {
        userEmail: '',
        userName: '',
        userSurname: '',
        userPosts: []
      }
    },
    methods: {
      getUser: function() {
        axios.get(`${API_BASE_URL}/api/auth/validate`, {
          params: {
            token: localStorage.getItem('bzaccesstoken'),
          }
        })
        .then(response => {
          this.userEmail = response.data.email;
          this.userName = response.data.name;
          this.userSurname = response.data.surname;
          this.userPosts = response.data.userPosts;
        })
        .catch(() => {
          this.logout();
          this.$router.push({ name: 'login' });
        })
      },
      ...mapActions({ logout: 'logout' })
    },
    created: function() {
      this.getUser();
    }
  }
</script>
