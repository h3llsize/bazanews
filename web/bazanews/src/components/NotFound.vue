<template>
  <section class="error">
    <div class="container error__container">
      <p class="error__message">
        Данной страницы не существует.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .error__container {
    display: flex;
    justify-content: center;
    padding: 30px 20px;
  }

  .error__message {
    font-weight: 700;
    font-size: 22px;
  }
</style>

<script>
  export default {

  }
</script>
