<template>
  <div id="app">
    <div class="toolbar" role="banner">
      <router-link to="/home"><button>Home</button></router-link>
      <router-link to="/about"><button>About</button></router-link>
    </div>

    <div class="content" role="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
$blue: #3f51b5;

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  width: 100%;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 8px 0;
}

p {
  margin: 0;
}

a,
a:visited,
a:hover {
  color: $blue;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline dotted;
}

.spacer {
  flex: 1;
}

.text-center {
  text-align: center;
}

.bold {
  font-weight: bold;
}

.cursor-pointer {
  cursor: pointer;
}

.mb-1em {
  margin-bottom: 1em;
}

.mb-2em {
  margin-bottom: 2em;
}

.toolbar {
  padding-left: 16px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #3f51b5;
  color: white;
  font-weight: 600;

  button {
    background: none;
    font-weight: bold;
    border: 0;
    margin-right: 8px;
    padding: 12px 16px;
    cursor: pointer;
    color: white;
    border-radius: 4px;
    outline: none;
    border: 1px solid transparent;

    &:hover {
      background-color: #3e4faa;
      border: 1px solid #39489c;
    }
  }
}

.content {
  display: flex;
  margin: 32px auto;
  padding: 0 16px;
  max-width: 960px;
  flex-direction: column;
  align-items: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}

.card {
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #fafafa;
  width: 225px;
  height: 225px;
  margin: 0 8px 16px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-out;
  box-sizing: border-box;

  .card:not(:last-child) {
    margin-right: 0;
  }

  &:hover {
    padding: 8px;

    .card-content {
      img {
        opacity: 0.6;
      }

      .card-info {
        bottom: 0;
      }
    }
  }

  .card-content {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
    }

    .card-info {
      transition: all 300ms ease-out;
      box-sizing: border-box;
      position: absolute;
      bottom: -66px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      color: rgba(255, 255, 255, 0.8);
      padding-right: 8px;

      ul {
        font-size: 0.8em;
        list-style-position: inside;
        padding-left: 16px;

        li {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "App"
};
</script>
