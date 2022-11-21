<template>
  <section class="profile-page">
    <div class="container profile-page__container">
      <form action="#" class="profile-page__form" autocomplete="off" @submit.prevent="test">
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
    padding-top: 30px;
  }

  .profile-page__container {
    max-width: 340px;
    padding: 0 20px;
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

    color: rgba(black, .5);
    margin-top: 10px;
  }

</style>

<script>
  export default {
    data: function() {
      return {
        userName: this.getName(),
        userSurname: this.getSurname(),
      }
    },
    methods: {
      test: function() {
        console.log(this.userName);
        console.log(this.userSurname);
      },
      getName: function() {
        return 'Андрей' || '';
      },
      getSurname: function() {
        return 'Ривалл' || '';
      },
    },
  }
</script>
