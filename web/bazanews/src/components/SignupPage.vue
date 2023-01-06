<template>
  <section class="signup">
    <div class="container signup__container">
      <h2 class="signup__heading">
        Регистрация
      </h2>
      <span v-if="$store.state.validate" class="signup_validate">
        Ошибка
      </span>
      <form action="#" class="signup__form" @submit.prevent="signup({ name: name, surname: surname, email: email, password: password })">
        <input type="text" class="signup__input" placeholder="Имя" v-model="name">
        <input type="text" class="signup__input" placeholder="Фамилия" v-model="surname">
        <input type="email" class="signup__input" placeholder="Email" v-model="email">
        <input type="password" class="signup__input" placeholder="Password" v-model="password">
        <button class="signup__btn" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <router-link class="signup__login" :to="{ name: 'login' }">
        Войти.
      </router-link>
    </div>
  </section>
</template>

<style scoped lang='scss'>
  .signup {
    padding-top: 35px;
  }

  .signup__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .signup__heading {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .signup__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    margin-bottom: 10px;
  }

  .signup__input {
    width: 300px;
    padding: 10px 20px;
    font-size: 18px;
    background: #fff;
    border-radius: 10px;
  }

  .signup__btn {
    padding: 10px 20px;
    background: #fff;
    border-radius: 10px;
    font-size: 18px;
  }

  .signup__login {
    color: black;
    text-decoration: underline;
  }
</style>

<script>
  import { mapActions } from 'vuex';

  export default {
    data: function() {
      return {
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions({ signup: 'signup' }),
    },
    watch: {
      '$store.state.signup': function() {
        if (this.$store.state.signup == true) {
          this.$router.push({ name: 'login' });
        }
      }
    }
  }
</script>
