<template>
  <section class="profile-page">
    <div class="container profile-page__container">
      <h2 class="profile-page__heading">Профиль</h2>
      <form action="#" class="profile-page__form" autocomplete="off">
        <input type="text" class="profile-page__input" placeholder="Email" name="email" :value="userEmail" disabled>
        <input v-model="userName" type="text" placeholder="Имя" name="name" class="profile-page__input">
        <input v-model="userSurname" type="text" placeholder="Фамилия" name="surname" class="profile-page__input">
        <button type="submit" class="profile-page__button">
          Сохранить
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .profile-page {
    padding-top: 35px;
  }

  .profile-page__container {
    max-width: 340px;
    padding: 0 20px;
  }

  .profile-page__heading {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
  }

  .profile-page__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 100%;
  }

  .profile-page__input {
    width: 100%;
    background: #fff;
    border-radius: 15px;
    padding: 10px 15px;

    font-size: 18px;
    line-height: 25px;

    &::placeholder {
      color: rgba(black, .5);
    }
  }

  .profile-page__button {
    padding: 10px 30px;
    background: #fff;
    border-radius: 15px;

    font-size: 18px;
    line-height: 25px;

    color: black;
    margin-top: 10px;
  }

</style>

<script>
  import axios from 'axios';
  import { mapActions } from 'vuex';

  export default {
    data: function() {
      return {
        userEmail: '',
        userName: '',
        userSurname: '',
      }
    },
    methods: {
      getUser: function() {
        axios.get('http://localhost:8082/api/auth/validate', {
          params: {
            token: localStorage.getItem('bzaccesstoken'),
          }
        })
        .then(response => {
          this.userEmail = response.data.email;
          this.userName = response.data.name;
          this.userSurname = response.data.surname;
        })
        .catch(error => {
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
