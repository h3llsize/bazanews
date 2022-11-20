<template>
  <section class="actions">
    <div class="container actions__container">
      <SectionSearch :value.sync="searchValue" placeholder="найти событие"/>

      <!-- <yandex-map
        :coords="[54.756738, 35.603973]"
        zoom="15"
        style="width: 600px; height: 600px;"
        :cluster-options="{
          1: {clusterDisableClickZoom: true}
        }"
        :controls="[ 'zoomControl' ]"
      >

        <ymap-marker
          marker-id="1"
          marker-type="placemark"
          :coords="[54.757538, 35.604173]"
          hint-content="Парк Никола-Ленивец"
          :icon="{color: 'green', glyph: 'park'}"
          cluster-name="1"
        />

      </yandex-map> -->

      <ul class="actions__list">
        <li class="actions__item is_active">
          <div class="actions__mini-item">
            <img src="../assets/actions1.png" alt="image" class="actions__image-item">
            <div class="actions__info-item">
              <h2 class="actions__title-item">
                Масленница
              </h2>
              <p class="actions__desc-item">
                это торжественная встреча весны и одновременно освобождение от всего плохого, надоевшего, раздражающего. В 2023 году празднования пройдут с 20 по 26 февраля, в том числе в арт-парке Никола-Ленивец. Программа будет озвучена ближе к дате.
              </p>
              <span class="actions__data-item">
                26 февраля 2023 года • Парк Никола-Ленивец
              </span>
            </div>
          </div>

          <div class="actions__full-item">
            <h3 class="actions__programm-item">
              Программа
            </h3>
            <p class="actions__desc-programm-item">
              Напомним, в этой небольшой деревне в Калужской области находится арт-парк с необычными арт-объектами, которые остаются после ежегодного фестиваля “Архивостояние”. Право радовать гостей долгие годы получают исключительно выдающиеся объекты. Конечно же, не менее выдающийся арт-объект появится и на Масленицу. В финале праздника его сожгут вместо чучела. В этом году таким объектом станет огромная «Вавилонская башня».
              До сожжения башни весь день гости будут гулять по снежным тропам и угощаться блинами. Не обойдется и без традиционных забав: можно будет прыгнуть в сеновал с крепости Бастилии и победить Жар-птицу. Главной фишкой праздника станет небесная почта. По территории парка прокатят шар, в который можно положить записку с желаниями. Потом наполненный шар доставят к «Вавилонской башне» и сожгут. Так послания отправятся прямиком в небо.
            </p>
            <div class="actions__map-info-item">
              <yandex-map
                :coords="[54.756738, 35.603973]"
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
                  :coords="[54.757538, 35.604173]"
                  hint-content="Парк Никола-Ленивец"
                  :icon="{color: 'green', glyph: 'park'}"
                  cluster-name="1"
                />

              </yandex-map>

              <div class="actions-time-price-item">
                <div class="actions__time-item">
                  <h3 class="actions__title-time-item">
                    Расписание
                  </h3>
                  <ul class="actions__list-time">
                    <li class="actions__item-time">
                      12:00 - 16:00 ― Никола-Ленивецкий городок забав и поединков
                    </li>
                    <li class="actions__item-time">
                      13:00 — 16:00 ― «Небесная почта» Олега Жуковского и театра La Pushkin
                    </li>
                    <li class="actions__item-time">
                      16:45 ― начало перформанса, предваряющего сожжение
                    </li>
                    <li class="actions__item-time">
                      17:45 — 19:00 ― сожжение «Вавилонской башни»
                    </li>
                  </ul>
                </div>
                <div class="actions__price-item">
                  <h3 class="actions__title-price-item">
                    Билеты и цены
                  </h3>
                  <p class="actions__desc-price-item">
                    Цена билетов на Масленицу в Никола-Ленивце 6 марта 2022: 2 900 рублей. Дети до 14 лет – бесплатно.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button class="actions__more-item">
            Показать
            <svg class="actions__icon-item">
              <use xlink:href="../assets/sprite.svg#chevron-back-outline"></use>
            </svg>
          </button>
        </li>
      </ul>
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

    cursor: pointer;

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
  import SectionSearch from '@/components/SectionSearch';
  import { yandexMap, ymapMarker } from 'vue-yandex-maps'

  export default {
    components: { SectionSearch, yandexMap, ymapMarker },
    data: function() {
      return {
        searchValue: '',

      }
    },
  }
</script>
