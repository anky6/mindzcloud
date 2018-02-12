<template>
  <div class="hello">

  <form method="POST"
  action="https://1512435765.cloud.vimeo.com/upload?ticket_id=132674647&video_file_id=933110886&signature=979ab1660de74e43441ec9483ec39cd6&v6=1&redirect_url=https%3A%2F%2Fvimeo.com%2Fupload%2Fapi%3Fvideo_file_id%3D933110886%26app_id%3D120274%26ticket_id%3D132674647%26signature%3D9533eb0e3c3950141b8840784a20148142af3238"
  enctype="multipart/form-data">
    <label for="file" style="margin-left: 17px;">
      <v-icon class="white--text">
        file_upload
      </v-icon>
    <input type="file" name="file_data" id="file">
    <br>
    </label>
    <input type="submit" name="submit" value="Submit">
  </form>

  <iframe src="https://player.vimeo.com/video/255370320?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0"
  width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
  </iframe>


  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  methods: {

    insertvideo () {
      axios.get(`http://127.0.0.1:8000/uploadvideo`)
        .then(response => {
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
  label{
    padding: 10px;
    background: grey;
    display: table;
    color: #fff;
    border-radius: 100%;
  }
  input[type="file"] {
    display: none;
  }
</style>
