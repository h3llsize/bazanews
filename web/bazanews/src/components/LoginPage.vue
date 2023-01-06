<template>
  <section class="login">
    <div class="container login__container">
      <template v-if="!$store.state.authorized">
        <h2 class="login__heading">
          Вход
        </h2>
        <span v-if="$store.state.validate" class="login_validate">
          Ошибка
        </span>
        <form action="#" class="login__form" @submit.prevent="login({ email: email, password: password })">
          <input type="text" class="login__input" placeholder="Email" v-model="email">
          <input type="password" class="login__input" placeholder="Password" v-model="password">
          <button class="login__btn" type="submit">Войти</button>
        </form>
        <router-link class="login__signup" :to="{ name: 'signup' }">
          Зарегистрироваться.
        </router-link>
      </template>
      <template v-else>
        <h2 class="login__heading">
          Вы уже авторизованы.
        </h2>
      </template>
    </div>
  </section>
</template>

<style scoped lang='scss'>
  .login {
    padding-top: 35px;
  }

  .login__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login__heading {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    margin-bottom: 10px;
  }

  .login__input {
    width: 300px;
    padding: 10px 20px;
    font-size: 18px;
    background: #fff;
    border-radius: 10px;
  }

  .login__btn {
    width: 150px;
    padding: 10px 20px;
    background: #fff;
    border-radius: 10px;
    font-size: 18px;
  }

  .login__signup {
    color: black;
    text-decoration: underline;
  }
</style>

<script>
  import { mapActions } from 'vuex';

  export default {
    data: function() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      ...mapActions({ login: 'login' }),
    },
    watch: {
      '$store.state.authorized': function() {
        this.$router.push({ name: 'news' });
      }
    },
  }
</script>
