<template>
  <section class="profile">
    <div class="container profile__container">
      <template v-if="authorized">
        <router-link class="profile__link" :to="{ name: 'profile' }">
          <svg class="profile__user">
            <use xlink:href="../assets/sprite.svg#person-circle-outline"></use>
          </svg>
        </router-link>
        <button class="profile__logout" @click.prevent="clickLogout()">
          <svg class="profile__user-control">
            <use xlink:href="../assets/sprite.svg#log-out-outline"></use>
          </svg>
        </button>
      </template>
      <router-link v-else class="profile__login" :to="{ name: 'login' }">
        <svg class="profile__user-control">
            <use xlink:href="../assets/sprite.svg#log-in-outline"></use>
          </svg>
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .profile {
    position: fixed;
    right: 0;
    top: 0;
  }

  .profile__container {
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 20px;
  }

  .profile__user {
    width: 30px;
    height: 30px;
  }

  .profile__login {
    padding-top: 5px;
    color: black;
  }

  .profile__user-control {
    width: 20px;
    height: 20px;
  }
</style>

<script>
  import { mapActions } from 'vuex';

  export default {
    data: function() {
      return {

      }
    },
    computed: {
      authorized: function() {
        return !!this.$store.state.authorized;
      }
    },
    methods: {
      ...mapActions({ logout: 'logout' }),
      clickLogout: function() {
        this.logout();
        this.$router.push({ name: 'login' });
      }
    }
  }
</script>
