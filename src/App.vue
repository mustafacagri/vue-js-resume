<template>
  <div id="app">
      <div class="container-fluid">
          <div class="row">
                <div class="col-md-3">
                    <Header/>
                </div><!-- col-md-3 -->
                <div class="col-md-9">
                <vue-page-transition name="fade-in-right">
                    <router-view/>
                </vue-page-transition>
              </div><!-- col-md-9 -->
          </div><!-- row -->
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
  },
  methods:{
  },
};
</script>