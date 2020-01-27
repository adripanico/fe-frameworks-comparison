<template>
  <div>
    <h2>Rick and Morty characters</h2>

    <div class="card-container">
      <div
        class="card"
        v-for="character in characters"
        v-bind:key="character.name"
      >
        <div class="card-content">
          <img v-bind:src="character.image" />
          <div class="card-info">
            <p class="text-center bold">{{ character.name }}</p>
            <p class="text-center">
              {{ character.gender }} {{ character.species }}
            </p>
            <ul>
              <li>Origin: {{ character.origin.name }}</li>
              <li>Location: {{ character.location.name }}</li>
              <li>Episodes: {{ character.episode.length }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      characters: null
    };
  },
  mounted() {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      this.characters = response.data.results;
    });
  }
};
</script>
