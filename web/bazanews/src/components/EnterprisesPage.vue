<template>
  <section class="enterprises">
    <div class="container enterprises__container">
      <SectionSearch :value.sync="searchValue" placeholder="найти предприятие"/>

      <ul class="enterprises__list">
        <li class="enterprises__item" :class="{ is_active: item.active }" v-for="item in enterprisesItems" :key="enterprisesItems.indexOf(item)">
          <div class="enterprises__mini-item">
            <img :src="pathItems(item.image)" alt="image" class="enterprises__image-item">
            <div class="enterprises__info-item">
              <h2 class="enterprises__title-item">
                {{ item.title }}
              </h2>
              <p class="enterprises__desc-item">
                {{ item.desc }}
              </p>
              <span class="enterprises__data-item">
                {{ item.date }} • {{ item.place }}
              </span>
            </div>
          </div>

          <div class="enterprises__full-item">
            <h3 class="enterprises__programm-item">
              {{ item.programmTitle }}
            </h3>
            <p class="enterprises__desc-programm-item">
              {{ item.programmDesc }}
            </p>
            <div class="enterprises__map-info-item">
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
                  :icon="{color: item.map.icon.color, glyph: item.map.icon.type}"
                  cluster-name="1"
                />

              </yandex-map>

              <div class="enterprises-time-price-item">
                <div class="enterprises__time-item">
                  <h3 class="enterprises__title-time-item">
                    {{ item.timeTitle }}
                  </h3>
                  <ul class="enterprises__list-time">
                    <li class="enterprises__item-time" v-for="timeItem in item.timeItems">
                      {{ timeItem }}
                    </li>
                  </ul>
                </div>
                <div class="enterprises__price-item">
                  <h3 class="enterprises__title-price-item">
                    {{ item.priceTitle }}
                  </h3>
                  <p class="enterprises__desc-price-item">
                    {{ item.priceDesc }}
                  </p>
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
    </div>
  </section>
</template>

<style scoped lang="scss">
  .enterprises {
    padding-top: 75px;
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
      height: auto;
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
  import SectionSearch from '@/components/SectionSearch';
  import { yandexMap, ymapMarker } from 'vue-yandex-maps';
  import pathItems from '@/helpers/pathItems';

  export default {
    components: { SectionSearch, yandexMap, ymapMarker },
    data: function() {
      return {
        searchValue: '',

        enterprisesItems: [
          {
            image: 'enterprises1.jpg',
            title: 'Московский локомотиворемонтный завод',
            desc: 'Московский локомотиворемонтный завод (МЛРЗ) — предприятие, ремонтирующее электропоезда постоянного тока для нужд железных дорог.',
            date: '',
            place: 'Москва, Перовское шоссе, 43',
            programmTitle: 'О магазине',
            programmDesc: 'В структуру завода входят 5 основных цехов: цех №1 (сборочный), цех №2 (электроаппаратный), цех №3 (колёсно-тележечный), цех №7 (ремонтно-комплектовочный), цех №8 (электромашинный), и 3 вспомогательных цеха – цех №4 (железнодорожный), цех №5 (энергосиловой), цех №6 (ремонтно-инструментальный).',
            map: {
              coords: [54.756738, 35.603973],
              icon: {
                color: 'blue',
                type: 'shopping',
              },
            },
            timeTitle: 'График работы',
            timeItems: [
              '08:00 — открытие',
              '13:00 - 14:00 — обеденный перерыв',
              '22:00 — закрытие',
            ],
            priceTitle: 'Товары',
            priceDesc: 'Электропоезда.',
            active: false,
          },
        ],
      }
    },
    methods: {
      pathItems,
    },
  }
</script>
