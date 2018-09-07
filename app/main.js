// main app
new Vue({
  el: '#app',
  data () {
    return {
      photos: null
    }
  },
  created () {
      this.loadPhotos(main_url);
  },
  methods: {
    loadPhotos: function(main_url){
       axios
      .get(main_url)
      .then(response => {
        this.photos = response.data;
      })
    },
    selectphoto: function (event) {
       Bus.$emit('image_selected', {0: event.title,1: event.url});
       this.thumbnailselected = event;
    }
  }
})