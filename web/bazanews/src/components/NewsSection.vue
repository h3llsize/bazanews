<template>
  <section class="news">
    <div class="container news__container">
      <SectionSearch :value.sync="searchValue"/>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .news__container {
    max-width: 640px;
    padding: 30px 20px;
  }
</style>

<script>
  import SectionSearch from '@/components/SectionSearch';

  export default {
    components: { SectionSearch },
    data: function() {
      return {
        searchValue: ''
      }
    }
  }
</script>
