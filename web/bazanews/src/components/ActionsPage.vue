<template>
  <section class="actions">
    <div class="container actions__container">
      <SectionSearch :value.sync="searchValue" placeholder="найти событие"/>

      <ul class="actions__list">
        <li class="actions__item" :class="{ is_active: item.active }" v-for="item in actions" :key="actions.indexOf(item)">
          <div class="actions__mini-item">
            <img :src="item.image" alt="image" class="actions__image-item">
            <div class="actions__info-item">
              <h2 class="actions__title-item">
                {{ item.title }}
              </h2>
              <p class="actions__desc-item">
                {{ item.desc }}
              </p>
              <span class="actions__data-item">
                {{ item.date }} • {{ item.place }}
              </span>
            </div>
          </div>

          <div class="actions__full-item">
            <h3 class="actions__programm-item">
              {{ item.programmTitle }}
            </h3>
            <p class="actions__desc-programm-item">
              {{ item.programmDesc }}
            </p>
            <div class="actions__map-info-item">
              <yandex-map
                :coords="item.map.coords"
                zoom="15"
                style="width: 425px; height: 280px;"
                :cluster-options="{
                  1: {clusterDisableClickZoom: true}
                }"
                :controls="[ 'zoomControl' ]"
              >

                <ymap-marker
                  marker-id="1"
                  marker-type="placemark"
                  :coords="item.map.coords"
                  :hint-content="item.place"
                  cluster-name="1"
                />

              </yandex-map>

              <div class="actions-time-price-item">
                <div class="actions__time-item">
                  <h3 class="actions__title-time-item">
                    {{ item.timeTitle }}
                  </h3>
                  <ul class="actions__list-time">
                    <li class="actions__item-time">
                      {{ item.timeItems }}
                    </li>
                  </ul>
                </div>
                <div class="actions__price-item">
                  <h3 class="actions__title-price-item">
                    {{ item.priceTitle }}
                  </h3>
                  <p class="actions__desc-price-item">
                    {{ item.priceDesc }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button class="actions__more-item" @click.prevent="item.active = !item.active">
            {{ item.active ? 'Закрыть' : 'Показать' }}
            <svg class="actions__icon-item">
              <use xlink:href="../assets/sprite.svg#chevron-back-outline"></use>
            </svg>
          </button>
        </li>
      </ul>

      <div class="pagination">
        <Paginate
          :page-count="totalPages"
          :click-handler="updatePage"
          :prev-text="'❮'"
          :next-text="'❯'"
          :container-class="'paginate'">
        </Paginate>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .actions {
    padding-top: 75px;
  }

  .actions__container {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 940px;
    padding: 30px 20px;
  }

  .actions__list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    padding-top: 30px;
  }

  .actions__item {
    position: relative;

    padding: 15px;
    background: #fff;
    border-radius: 15px;

    height: 230px;

    &.is_active {
      height: auto;
    }
  }

  .actions__mini-item {
    display: flex;
    gap: 20px;
  }

  .actions__image-item {
    display: inline-block;

    width: 200px;
    height: 200px;

    object-fit: cover;
  }

  .actions__info-item {
    display: flex;
    flex-direction: column;
  }

  .actions__title-item {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #000000;
  }

  .actions__desc-item {
    font-size: 16px;
    line-height: 22px;

    color: rgba(black, .5);
  }

  .actions__data-item {
    margin-top: auto;

    font-size: 14px;
    line-height: 19px;

    color: rgba(black, .5);
  }

  .actions__full-item {
    margin-top: 20px;
    transform: scaleY(0);

    .actions__item.is_active & {
      transform: none;
    }
  }

  .actions__programm-item {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
  }

  .actions__desc-programm-item {
    font-size: 14px;
    line-height: 19px;

    color: #000000;
    margin-bottom: 20px;
  }

  .actions__map-info-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .actions__title-time-item {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
  }

  .actions__list-time {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .actions__item-time {
    font-size: 14px;
    line-height: 19px;

    color: #000000;
  }

  .actions__title-price-item {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
  }

  .actions__desc-price-item {
    font-size: 14px;
    line-height: 19px;

    color: #000000;
  }

  .actions__more-item {
    position: absolute;
    right: 15px;
    bottom: 15px;

    display: flex;
    align-items: center;

    font-size: 14px;
    line-height: 19px;

    color: rgba(black, .5);
  }

  .actions__icon-item {
    width: 15px;
    height: 15px;
    transform: rotate(-90deg) translateX(-7%);

    color: rgba(black, .5);

    .actions__item.is_active & {
      transform: rotate(90deg) translateX(7%);
    }
  }
</style>

<script>
  import axios from 'axios';
  import SectionSearch from '@/components/SectionSearch';
  import { yandexMap, ymapMarker } from 'vue-yandex-maps';
  import Paginate from 'vuejs-paginate';
  import { API_BASE_URL } from '@/helpers/API_BASE_URL';

  export default {
    components: { SectionSearch, yandexMap, ymapMarker, Paginate },
    data: function() {
      return {
        searchValue: '',

        page: 0,
        totalPages: 1,

        actionsData: null,
        actions: []
      }
    },
    methods: {
      loadActions: function(page, text) {
        return axios
          .get(`${API_BASE_URL}/api/events/?find`, {
            params: {
              page: page,
              query: text,
              accessToken: localStorage.getItem('bzaccesstoken'),
            }
          })
          .then(response => {
            this.actionsData = response.data;
            this.totalPages = response.data.totalPages;
            this.getActions();
          });
      },
      getActions: function() {
        let data = [];
        this.actionsData.content.forEach(el => {
          let obj = {}

          obj.image = el.imageUrl
          obj.title = el.title
          obj.desc = el.description
          obj.date = el.date
          obj.place = el.place
          obj.programmTitle = el.programTitle
          obj.programmDesc = el.programDesc
          obj.map = {
            coords: [el.coordsX, el.coordsY]
          }
          obj.timeTitle = "Начало проведения"
          obj.timeItems = el.startTime
          obj.priceTitle = "Цены"
          obj.priceDesc = el.price
          obj.active = false

          data.push(obj);
        });
        this.actions = data;
      },
      updatePage: function(value) {
        this.page = value-1;
        this.loadActions(this.page, this.searchValue);
      },
    },
    created: function() {
      this.loadActions(this.page, this.searchValue);
    },
    watch: {
      searchValue: function() {
        this.loadActions(this.page, this.searchValue);
      },
    }
  }
</script>
