<template>
  <section class="sportNewsSection">
    <div class="sport-news-iframe">
      <section class="new-section">
        <div class="news-container">
          <div class="col news-col">
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
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { parseString } from 'xml2js';

export default {
  name: 'CrownNewsOnly',
  props: {
    count: Number,
  },
  data: () => ({
    newsList: [],
  }),
  methods: {
    async getRssFeed() {
      const data = await axios.get('https://www.espn.com/espn/rss/soccer/news');
      parseString(data.data, (err, result) => {
        const items = result?.rss?.channel[0]?.item;
        // eslint-disable-next-line max-len
        const filteredItemWithImage = items.filter((item) => item.image != null).slice(0, this.count);
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
