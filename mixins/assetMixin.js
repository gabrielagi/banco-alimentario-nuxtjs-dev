const assetMixin = {
  data() {
    return {
      production: false,
      dev_path: 'http://127.0.0.1:8008/',
      prod_path: 'https://zebradevs.com/public/',
    }
  },
  methods: {
    assetPath() {
      return this.production ? this.prod_path : this.dev_path
    },
    imgPath() {
      return `${this.assetPath()}img/`
    },
  },
}

export default assetMixin
