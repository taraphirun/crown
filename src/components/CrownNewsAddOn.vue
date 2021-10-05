<template>
  <section class="sportNewsSection">
    <div class="sport-news-iframe">
      <section class="new-section">
        <div class="news-container">
          <div class="col news-col">
            <div class="video">
              <iframe width="100%" height="330px" src="https://www.youtube.com/embed/dn-tyJnq06w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="news-list" v-for="item in newsList" :key="item.guid[0]._">
              <div class="news-image">
                <img :src="item.image[0]" />
              </div>
              <div class="news-content">
                <h3 class="title">
                  {{item.title[0]}}
                </h3>
                <p class="date">{{item.pubDate[0]}}</p>
                <p class="description">
                  {{item.description[0]}}
                </p>
                <a class="link" :href="item.link[0]" target="_blank">Read More</a>
              </div>
            </div>
          </div>
          <div class="col tabel-col">
            <div class="tabel-slider">
              <div class="slide first">
                <iframe src="https://www.scoreaxis.com/widget/standings-widget/8?columns=1%2C1%2C1%2C1%2C1%2C1%2C0%2C0%2C1&tabs=0&header=1&bg=%23FFFFFF&color=%23313934&headerBg=%23000000&headerColor=%23ffffff&bodyBackground=%23000000&textColor=%23ffffff&group=" width="100%"
                        height="538" style="border: none"></iframe>
              </div>
              <div class="slide second">
                <iframe src="https://www.scoreaxis.com/widget/standings-widget/384?columns=1%2C1%2C1%2C1%2C1%2C1%2C0%2C0%2C1&tabs=0&header=1&bg=%23FFFFFF&color=%23313934&headerBg=%23000000&headerColor=%23ffffff&bodyBackground=%23000000&textColor=%23ffffff&group=" width="100%"
                        height="538" style="border: none"></iframe>
              </div>
              <div class="slide third">
                <iframe src="https://www.scoreaxis.com/widget/standings-widget/564?columns=1%2C1%2C1%2C1%2C1%2C1%2C0%2C0%2C1&tabs=0&header=1&bg=%23FFFFFF&color=%23313934&headerBg=%23000000&headerColor=%23ffffff&bodyBackground=%23000000&textColor=%23ffffff&group=" width="100%"
                        height="538" style="border: none"></iframe>
              </div>
              <div class="slide fourth">
                <iframe src="https://www.scoreaxis.com/widget/standings-widget/82?columns=1%2C1%2C1%2C1%2C1%2C1%2C0%2C0%2C1&tabs=0&header=1&bg=%23FFFFFF&color=%23313934&headerBg=%23000000&headerColor=%23ffffff&bodyBackground=%23000000&textColor=%23ffffff&group=" width="100%"
                        height="538" style="border: none"></iframe>
              </div>
            </div>
          </div>
        </div>
<!--        <div class="container-fluid">-->
<!--        <v-row class="row align-items-center">-->
<!--          <v-col cols="6">-->
<!--            <div class='wrapper'>-->
<!--              <div class='carousel'>-->
<!--                <div class='carousel__item' v-for="item in flashText" :key="item.id">-->
<!--                  <div class='carousel__item-head'>-->
<!--                    <img :src="item.flag" width="60" alt="Singapore">-->
<!--                  </div>-->
<!--                  <div class='carousel__item-body'>-->
<!--                    <p class='title'>{{item.title}}</p>-->
<!--                    <p class='Money'>Withdraw {{item.money}}</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </v-col>-->
<!--          <v-col cols="6">-->
<!--            <img src="https://crown987.com/web/images/index/BottomRightBanner.jpg" width="50%" height="auto">-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--        </div>-->
<!--        <div class="container-fluid">-->
<!--          <div class="row align-items-center">-->
<!--            <div class="col-sm-6">-->
<!--              <div class='wrapper'>-->
<!--                <div class='carousel'>-->
<!--                  <div class='carousel__item' v-for="item in flashText" :key="item.id">-->
<!--                    <div class='carousel__item-head'>-->
<!--                      <img :src="item.flag" width="60" alt="Singapore">-->
<!--                    </div>-->
<!--                    <div class='carousel__item-body'>-->
<!--                      <p class='title'>{{item.title}}</p>-->
<!--                      <p class='Money'>Withdraw {{item.money}}</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-sm-6">-->
<!--              <img src="https://crown987.com/web/images/index/BottomRightBanner.jpg" width="100%" height="auto">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </section>
    </div>
    <v-container fluid>
      <div class="row">
        <div class="column">
          <div class='wrapper'>
            <div class='carousel'>
              <div class='carousel__item' v-for="item in flashText" :key="item.id">
                <div class='carousel__item-head'>
                  <img :src="item.flag" width="60" alt="Singapore">
                </div>
                <div class='carousel__item-body'>
                  <p class='title'>{{item.title}}</p>
                  <p class='Money'>Withdraw {{item.money}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class='wrapper'>
          <img src="https://crown987.com/web/images/index/BottomRightBanner.jpg" width="100%" height="auto">
          </div>
        </div>
      </div>
<!--      -->
<!--      -->
<!--    <v-row class="row align-items-center">-->
<!--      <v-col cols="6">-->
<!--        <div class='wrapper'>-->
<!--          <div class='carousel'>-->
<!--            <div class='carousel__item' v-for="item in flashText" :key="item.id">-->
<!--              <div class='carousel__item-head'>-->
<!--                <img :src="item.flag" width="60" alt="Singapore">-->
<!--              </div>-->
<!--              <div class='carousel__item-body'>-->
<!--                <p class='title'>{{item.title}}</p>-->
<!--                <p class='Money'>Withdraw {{item.money}}</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </v-col>-->
<!--      <v-col cols="6">-->
<!--        <img src="https://crown987.com/web/images/index/BottomRightBanner.jpg" width="50%" height="auto">-->
<!--      </v-col>-->
<!--    </v-row>-->
    </v-container>
  </section>
</template>

<script>
import axios from 'axios';
import { parseString } from 'xml2js';

export default {
  name: 'StandaloneText',
  data: () => ({
    newsList: [],
    alignments: [
      'start',
      'center',
      'end',
    ],
    flashText: [
      {
        id: 1,
        flag: 'https://flagcdn.com/sg.svg',
        alt: 'Singapore',
        title: 'John Doe',
        money: '5000 SGD',
      },
      {
        id: 2,
        flag: 'https://flagcdn.com/my.svg',
        alt: 'Malaysia',
        title: 'Jane',
        money: '100 USD',
      },
      {
        id: 3,
        flag: 'https://flagcdn.com/vn.svg',
        alt: 'Vietnam',
        title: 'Eliza',
        money: '10,0000,000 Dong',
      },
      {
        id: 4,
        flag: 'https://flagcdn.com/th.svg',
        alt: 'Thailand',
        title: 'Napaporn',
        money: '10,543 THB',
      },
      {
        id: 5,
        flag: 'https://flagcdn.com/th.svg',
        alt: 'Thailand',
        title: 'Napaporn',
        money: '10,543 THB',
      },
      {
        id: 6,
        flag: 'https://flagcdn.com/th.svg',
        alt: 'Thailand',
        title: 'Napaporn',
        money: '10,543 THB',
      },
      {
        id: 7,
        flag: 'https://flagcdn.com/th.svg',
        alt: 'Thailand',
        title: 'Napaporn',
        money: '10,543 THB',
      },
      {
        id: 8,
        flag: 'https://flagcdn.com/th.svg',
        alt: 'Thailand',
        title: 'Napaporn',
        money: '10,543 THB',
      },
      {
        id: 9,
        flag: 'https://flagcdn.com/th.svg',
        alt: 'Thailand',
        title: 'Napaporn',
        money: '10,543 THB',
      },
    ],
  }),
  methods: {
    async getRssFeed() {
      const data = await axios.get('https://www.espn.com/espn/rss/soccer/news');
      parseString(data.data, (err, result) => {
        const items = result?.rss?.channel[0]?.item;
        const filteredItemWithImage = items.filter((item) => item.image != null).slice(0, 3);
        console.dir(filteredItemWithImage);
        this.newsList = filteredItemWithImage;
        return items;
      });
    },
  },
  mounted() {
    this.getRssFeed();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.standalone-text-red {
  color: red;
}
.findmestyle {
  display: initial;
}
body {
  background: black;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.news-container {
  display: flex;
}

.news-col {
  width: 55%;
  padding-top: 0.5em;
}

.tabel-col {
  width: 45%;
}

.news-list {
  display: flex;
  margin-bottom: 5px;
}

.news-image {
  width: 180px;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.news-image svg {
  max-width: 170px;
  max-height: 106px;
  width: 100%;
  height: 100%;
}

.news-content {
  padding: 0px 15px;
  width: calc(100% - 180px);
}

.title {
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  background-color: transparent;
  font-size: 16px;
}

.Money {
  background-color: transparent;
  color: white;
}

.align-items-center {
  height: 400px;
}

.date {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 12px;
}

.description {
  overflow: hidden;
  /* display: -webkit-box; */
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-top: 8px;
  margin-bottom: 8px;
}

.link {
  text-decoration: unset;
  color: #d9b08c;
}

.link:hover {
  color: #922a31;
}

.tabel-slider {
  position: relative;
  display: flex;
  flex-wrap: wrap;
}

.tabel-slider .slide {
  flex: 0 0 49.5%;
  max-width: 49.5%;
  overflow: auto;
  max-height: 350px;
  scrollbar-width: thin;
  scrollbar-color: #f5f5f5;
}
/*FireFox Scrollbar*/

.tabel-slider .slide:-webkit-scrollbar {
  width: 3px;
}

.tabel-slider .slide:-webkit-scrollbar-track {
  background: black;
}

.tabel-slider .slide:-webkit-scrollbar-thumb {
  background-color: #000;
  border-radius: 0px;
  border: 0px solid transparent;
}

.tabel-slider .slide::-webkit-scrollbar-track {
  background-color: black;
}

.tabel-slider .slide::-webkit-scrollbar {
  width: 5px;
  background-color: black;
}

.tabel-slider .slide::-webkit-scrollbar-thumb {
  background-color: black;
}

.tabel-slider .slide:nth-child(odd) {
  margin-right: auto;
}

.tabel-slider img {
  width: 100%;
}

.previous,
.next {
  cursor: pointer;
  position: absolute;
  top: 3px;
  margin-top: 0;
  width: 15px;
  height: 15px;
  padding: 0;
  display: none;
}

.previous svg,
.next svg {
  width: 12px;
  height: 12px;
}

.previous {
  right: 20px;
}

.next {
  right: 0;
}

@media (max-width: 767px) {
  .news-container {
    display: block;
  }
  .col {
    width: 100%;
  }
  .news-content {
    padding: 0px 15px;
  }
  .tabel-slider .slide {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .news-list {
    display: block;
  }
  .news-image,
  .news-content {
    width: 100%;
  }
  .news-content {
    padding: 0;
    margin-top: 5px;
  }
  .news-image svg {
    display: block;
    margin: auto;
  }
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  text-decoration: none;
  background-color: black;
}

.sportNewsSection,
.newsSection,
.news-container {
  padding: 0.2rem;
  color: white;
}

.header {
  padding: 0.5rem;
}

.video {
  padding: 1rem 0.5rem 0.5rem 0;
}

.third,
.fourth {
  padding-top: 0.5rem;
}
</style>
<style>
 *,
 *::before,
 *::after {
   box-sizing: border-box;
 }

body {
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  height: 100vh;
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.carousel {
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.carousel__item {
  background-color: transparent;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  padding: 0 12px;
  opacity: 0;
  filter: drop-shadow(0 2px 2px #555);
  will-change: transform, opacity;
  -webkit-animation: carousel-animate-vertical 27s linear infinite;
  animation: carousel-animate-vertical 27s linear infinite;
}

.carousel__item:nth-child(1) {
  -webkit-animation-delay: calc(3s * -1);
  animation-delay: calc(3s * -1);
}

.carousel__item:nth-child(2) {
  -webkit-animation-delay: calc(3s * 0);
  animation-delay: calc(3s * 0);
}

.carousel__item:nth-child(3) {
  -webkit-animation-delay: calc(3s * 1);
  animation-delay: calc(3s * 1);
}

.carousel__item:nth-child(4) {
  -webkit-animation-delay: calc(3s * 2);
  animation-delay: calc(3s * 2);
}

.carousel__item:nth-child(5) {
  -webkit-animation-delay: calc(3s * 3);
  animation-delay: calc(3s * 3);
}

.carousel__item:nth-child(6) {
  -webkit-animation-delay: calc(3s * 4);
  animation-delay: calc(3s * 4);
}

.carousel__item:nth-child(7) {
  -webkit-animation-delay: calc(3s * 5);
  animation-delay: calc(3s * 5);
}

.carousel__item:nth-child(8) {
  -webkit-animation-delay: calc(3s * 6);
  animation-delay: calc(3s * 6);
}

.carousel__item:last-child {
  -webkit-animation-delay: calc(-3s * 2);
  animation-delay: calc(-3s * 2);
}

.carousel__item-head {
  border-radius: 50%;
  background-color: #f0b90b;
  border-color: inherit;
  height: 90px;
  padding: 14px;
  position: relative;
  margin-right: -45px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}

.carousel__item-body {
  width: 100%;
  background-color: #202020;
  border-radius: 8px;
  padding: 16px 20px 16px 70px;
}

.title {
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 10px;
}

@-webkit-keyframes carousel-animate-vertical {
  0% {
    transform: translateY(50%) scale(0.5);
    opacity: 0;
    visibility: hidden;
  }
  3%,
  11.1111111111% {
    transform: translateY(50%) scale(0.7);
    opacity: 0;
    visibility: visible;
  }
  14.1111111111%,
  22.2222222222% {
    transform: translateY(0) scale(1);
    opacity: 1;
    visibility: visible;
  }
  25.2222222222%,
  33.3333333333% {
    transform: translateY(-50%) scale(0.7);
    opacity: 0.4;
    visibility: visible;
  }
  36.3333333333% {
    transform: translateY(-50%) scale(0.5);
    opacity: 0;
    visibility: visible;
  }
  100% {
    transform: translateY(-50%) scale(0.5);
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes carousel-animate-vertical {
  0% {
    transform: translateY(50%) scale(0.5);
    opacity: 0;
    visibility: hidden;
  }
  3%,
  11.1111111111% {
    transform: translateY(50%) scale(0.7);
    opacity: 0;
    visibility: visible;
  }
  14.1111111111%,
  22.2222222222% {
    transform: translateY(0) scale(1);
    opacity: 1;
    visibility: visible;
  }
  25.2222222222%,
  33.3333333333% {
    transform: translateY(-50%) scale(0.7);
    opacity: 0.4;
    visibility: visible;
  }
  36.3333333333% {
    transform: translateY(-50%) scale(0.5);
    opacity: 0;
    visibility: visible;
  }
  100% {
    transform: translateY(-50%) scale(0.5);
    opacity: 0;
    visibility: hidden;
  }
}

   /* Create two equal columns that floats next to each other */
   .column {
     float: left;
     width: 50%;
     padding: 10px;
     height: 300px; /* Should be removed. Only for demonstration */
   }

   /* Clear floats after the columns */
   .row:after {
     content: "";
     display: table;
     clear: both;
   }
</style>
