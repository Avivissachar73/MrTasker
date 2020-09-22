<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
  import appHeader from './modules/general/components/appHeader';
  import appFooter from './modules/general/components/appFooter';

  export default {
    name: 'root',
    components: {
      appHeader,
      appFooter
    }
  }
</script>


// npm install --save register-service-worker