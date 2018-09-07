//creo un componente modal
Vue.component('modal',{
  template: '#modaltemp',
  data: function(){
    return {
      title: '',
      imageURL: '#',
      display: false
    }
  },
  created() {
    //espero los datos a traves del bus
    Bus.$on('image_selected', (selected) => {
      this.setImageURL(selected[1]);
      this.setTitle(selected[0]);
      this.show();
    })
  },
  methods: {
    //setters
    show: function(){
      this.display = true;
    },
    closeModal: function(){
      this.display = false;
    },
    setTitle: function(title){
      this.title = title;
    },
    setImageURL: function(url){
      this.imageURL = url;
    }
  }
});
// 