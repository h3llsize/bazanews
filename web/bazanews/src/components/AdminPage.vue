<template>
  <section class="admin">
    <div class="container admin__container">
      <h2 class="admin__heading">
        Админ-панель
      </h2>
      <label for="checkboxAdmin" class="admin__label">
        <input type="checkbox" class="admin__check" id="checkboxAdmin" v-model="moderationMode">
        <span class="admin__inputtext">
          Режим модерации
          <button class="admin__help">
            ?
            <div class="admin__tooltip">
              При включении данного режима, в ленте Вам будут попадаться только непроверенные посты с возможностью их модерации.
            </div>
          </button>
        </span>
      </label>
    </div>
  </section>
</template>

<style scoped lang='scss'>
  .admin {
    padding-top: 35px;
  }

  .admin__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .admin__heading {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .admin__label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .admin__check {
    width: 25px;
    height: 25px;
  }

  .admin__inputtext {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
  }

  .admin__help {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: #E4E4E4;
    color: white;
    border-radius: 100%;
    font-size: 15px;
    cursor: pointer;
  }

  .admin__help:hover .admin__tooltip {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
  .admin__help:focus .admin__tooltip {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  .admin__tooltip {
    position: absolute;
    top: 30px;

    width: 251px;
    padding: 10px;
    border-radius: 10px;
    background: #E4E4E4;
    color: black;

    opacity: 0;
    visibility: hidden;
    transform: translateY(-30px);

    transition: .25s ease;
  }

  .admin__tooltip::before {
    position: absolute;
    top: -5px;
    left: 50%;
    content: '';
    width: 10px;
    height: 10px;
    background: #E4E4E4;
    transform: translateX(-50%) rotate(45deg);
  }
</style>

<script>
  export default {
    data: function() {
      return {
        moderationMode: false
      }
    },
    created: function() {
      this.moderationMode = this.$store.state.moderationMode;
    },
    watch: {
      moderationMode: function() {
        this.$store.commit('updateModerationMode', this.moderationMode);
      }
    }
  }
</script>
