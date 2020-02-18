<template>
  <div class="song">
      <img class="song-image" :src="song.album.cover_medium" alt="album cover">
      <div class="song-details">
        <h1 class="song-title">{{ song.title }}</h1>
        <div class="song-details--extra">
          <p class="song-artist">{{ songs.artist.name}}</p>
          <p></p>
          <p class="song-lenght">{{ song.duration}} Seconds</p>
        </div>
      </div>

      <div class="song-play-container">
        <a href="3" class="song-player">
          <img width="25px" src="/play-solid.svg" alt="Song play button">
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: "app-song-card",
  props: ["song"]
}
</script>

<style>

</style>
