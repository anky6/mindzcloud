<template>
  <div class="hello">
<iframe src="/static/abc.pdf#toolbar=0&navpanes=0" scrolling="no" style = "overflow: hidden; width:100%; height:800px"></iframe>
</div>
</template>

<script>
  import {mapMutations} from 'vuex'
export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    methods: {
      ...mapMutations([
        'goTo',
        'showpdffile'
      ])
    }
}
</script>
