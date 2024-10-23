<template>
  <div class="error">
    <div class="container">
      <h1 class="error__title">Page not found</h1>
      <router-link class="error__btn btn" to="/">Go to the main page</router-link>
    </div>
  </div>
</template>

<style lang="scss">
  .error {
    text-align: center;
    padding: 50px 0;
  
    &__title {
      margin-bottom: 40px;
      font-size: 60px;
    }

    &__btn {
      border-color: #000;
      font-size: 20px;
      color: #000;
    }
  }
</style>