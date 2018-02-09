import router from '../../router'
import Viewer from 'viewerjs'

const state = {
  patchUpdateDom: false
}

const getters = {
  patchUpdateDom: state => state.patchUpdateDom
}

const mutations = {
  goTo (state, path) {
    router.push(path)
  },
  showpdffile (state) {
    console.log('hey')
    let viewer = new Viewer(document.getElementById('pdf'), {
      ready: function () {
        console.log('asd')
        return viewer.show()
      }
    })
    console.log(viewer)
  }

}

const actions = {
}

export default {
  mutations,
  state,
  getters,
  actions
}
