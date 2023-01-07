<template>
  <div class="profile-user">
    <h2 class="profile-page__heading-user">Профиль</h2>
    <form action="#" class="profile-page__form-user" autocomplete="off">
      <input type="text" class="profile-page__input-user" placeholder="Email" name="email" :value="userEmail" disabled>
      <input v-model="userName" type="text" placeholder="Имя" name="name" class="profile-page__input-user">
      <input v-model="userSurname" type="text" placeholder="Фамилия" name="surname" class="profile-page__input-user">
      <button type="submit" class="profile-page__button-user">
        Сохранить
      </button>
    </form>
  </div>
</template>

<style scoped lang='scss'>
  .profile-page__heading-user {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
  }

  .profile-page__form-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 100%;
  }

  .profile-page__input-user {
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

  .profile-page__button-user {
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
export default {
  props: [ 'userEmail', 'userName', 'userSurname' ],
  data: function () {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
}
</script>
