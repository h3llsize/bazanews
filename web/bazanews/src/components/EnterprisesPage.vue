<template>
  <section class="enterprises">
    <div class="container enterprises__container">
      <SectionSearch :value.sync="searchValue" placeholder="найти предприятие" />

      <ul class="enterprises__list">
        <li class="enterprises__item" :class="{ is_active: item.active, }" v-for="item in enterprises" :key="enterprises.indexOf(item)">
          <div class="enterprises__mini-item">
            <img :src="item.image" alt="image" class="enterprises__image-item">
            <div class="enterprises__info-item">
              <h2 class="enterprises__title-item">
                {{ item.title }}
              </h2>
              <p class="enterprises__desc-item">
                {{ item.desc }}
              </p>
              <span class="enterprises__data-item">
                {{ item.place }}
              </span>
            </div>
          </div>

          <div class="enterprises__full-item">
            <h3 class="enterprises__programm-item">
              {{ item.aboutTitle }}
            </h3>
            <p class="enterprises__desc-programm-item">
              {{ item.aboutDesc }}
            </p>
            <div class="enterprises__map-info-item">
              <yandex-map :coords="item.map.coords" zoom="15" style="width: 425px; height: 280px;" :cluster-options="{
                1: { clusterDisableClickZoom: true }
              }" :controls="['zoomControl']">

                <ymap-marker marker-id="1" marker-type="placemark" :coords="item.map.coords" cluster-name="1"/>

              </yandex-map>

              <div class="enterprises-time-price-item">
                <div class="enterprises__time-item">
                  <h3 class="enterprises__title-time-item">
                    Время работы
                  </h3>
                  <ul class="enterprises__list-time">
                    <li class="enterprises__item-time">
                      {{ item.startTime }} - {{ item.endTime }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button class="enterprises__more-item" @click.prevent="item.active = !item.active">
            {{ item.active ? 'Закрыть' : 'Показать' }}
            <svg class="enterprises__icon-item">
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
.enterprises {
  padding-top: 75px;
  padding-bottom: 75px;
}

.enterprises__container {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 940px;
  padding: 30px 20px;
}

.enterprises__list {
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  padding-top: 30px;
}

.enterprises__item {
  position: relative;

  padding: 15px;
  background: #fff;
  border-radius: 15px;

  height: 230px;

  &.is_active {
    height: auto !important;
  }
}

.enterprises__mini-item {
  display: flex;
  gap: 20px;
}

.enterprises__image-item {
  display: inline-block;

  width: 200px;
  height: 200px;
  border-radius: 15px;

  object-fit: cover;
}

.enterprises__info-item {
  display: flex;
  flex-direction: column;
}

.enterprises__title-item {
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  color: #000000;
}

.enterprises__desc-item {
  font-size: 16px;
  line-height: 22px;

  color: rgba(black, .5);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
          line-clamp: 4;
  -webkit-box-orient: vertical;
}

.enterprises__item.is_active .enterprises__desc-item {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 50000; /* number of lines to show */
          line-clamp: 50000;
  -webkit-box-orient: vertical;
}

.enterprises__data-item {
  margin-top: auto;

  font-size: 14px;
  line-height: 19px;

  color: rgba(black, .5);
}

.enterprises__full-item {
  margin-top: 20px;
  transform: scaleY(0);

  .enterprises__item.is_active & {
    transform: none;
  }
}

.enterprises__programm-item {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
}

.enterprises__desc-programm-item {
  font-size: 14px;
  line-height: 19px;

  color: #000000;
  margin-bottom: 20px;
}

.enterprises__map-info-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.enterprises__title-time-item {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
}

.enterprises__list-time {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.enterprises__item-time {
  font-size: 14px;
  line-height: 19px;

  color: #000000;
}

.enterprises__title-price-item {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
}

.enterprises__desc-price-item {
  font-size: 14px;
  line-height: 19px;

  color: #000000;
}

.enterprises__more-item {
  position: absolute;
  right: 15px;
  bottom: 15px;

  display: flex;
  align-items: center;

  font-size: 14px;
  line-height: 19px;

  color: rgba(black, .5);
}

.enterprises__icon-item {
  width: 15px;
  height: 15px;
  transform: rotate(-90deg) translateX(-7%);

  color: rgba(black, .5);

  .enterprises__item.is_active & {
    transform: rotate(90deg) translateX(7%);
  }
}
</style>

<script>
import axios from 'axios';
import SectionSearch from '@/components/SectionSearch';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import pathItems from '@/helpers/pathItems';
import { mapActions } from 'vuex';
import { API_BASE_URL } from '@/helpers/API_BASE_URL';
import Paginate from 'vuejs-paginate';

export default {
  components: { SectionSearch, yandexMap, ymapMarker, Paginate },
  data: function () {
    return {
      searchValue: '',

      page: 0,
      totalPages: 1,

      enterprisesData: null,
      enterprises: []
    }
  },
  methods: {
    loadEnterprises: function (page, text) {
      return axios
        .get(`${API_BASE_URL}/api/objects/?find`, {
          params: {
            page: page,
            query: text,
            accessToken: localStorage.getItem('bzaccesstoken'),
          }
        })
        .then(response => {
          this.enterprisesData = response.data;
          this.totalPages = response.data.totalPages;
          this.getEnterprises();
        });
    },
    getEnterprises: function () {
      let data = [];
      this.enterprisesData.content.forEach(el => {
        let obj = {}

        obj.image = el.imageUrl;
        obj.title = el.title;
        obj.desc = el.description;
        obj.aboutTitle = el.aboutTitle;
        obj.aboutDesc = el.aboutDesc;
        obj.map = {
          coords: [el.coordsX, el.coordsY]
        };
        obj.startTime = el.startTime;
        obj.endTime = el.endTime;
        obj.place = el.place;
        obj.active = false;

        data.push(obj);
      });
      this.enterprises = data;
    },
    updatePage: function (value) {
      this.page = value - 1;
      this.loadEnterprises(this.page, this.searchValue);
    },
    ellipsisFunc() {

    }
  },
  created: function () {
    this.loadEnterprises(this.page, this.searchValue);
    this.ellipsisFunc();
  },
  watch: {
    searchValue: function () {
      this.loadEnterprises(this.page, this.searchValue);
    },
  }
}
</script>
