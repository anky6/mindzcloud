<template>
  <div class="hello">

        <v-card v-show=" photoUrl != '' " flat>
          <v-card-media :src="photoUrl" height="40vh">
          </v-card-media>
        </v-card>

        <v-card-actions>
          <label id="#bb" style="margin-left: 17px;">
            <v-icon class="white--text">
              file_upload
            </v-icon>
            <input type="file" name="pic" accept="/"  @change="uploadImg($event)" id="uploadPhoto">
          </label>
          <span class="caption">Upload Video</span>

          <v-spacer></v-spacer>

<!--btnLoader v-if="btnLoader"></btnLoader-->
<v-btn flat @click=
  "insertvideo(photoObj,photoUrl)">
  Add
</v-btn>
</v-card-actions>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      photoObj: '',
      photoUrl: ''
    }
  },
  methods: {
    uploadImg (event) {
    // let tempPhotoObj = {
      this.photoObj = event.target.files[0]
      this.photoUrl = URL.createObjectURL(event.target.files[0])
    },
    insertvideo (x, y) {
      console.log(x + y)
      axios.get(`http://localhost:8080/index`)
        .then(response => {
          console.log(response)
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
