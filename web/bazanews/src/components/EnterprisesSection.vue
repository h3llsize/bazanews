<template>
  <section class="enterprises">
    <div class="container enterprises__container">
      <SectionSearch :value.sync="searchValue" placeholder="найти предприятие"/>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .enterprises {
    padding-top: 75px;
  }

  .enterprises__container {
    position: relative;
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
    },
  }
</script>
