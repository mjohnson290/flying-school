new Vue({
  el: '#app',
  data () {
    return {
      products: null,
      errorMessage: false,
    }
  },
  mounted () {
    axios
      .get('https://mkt-endpoint.now.sh/products')
      .then(response => (this.products = response.data.sort((a, b) => a.price - b.price)))
      .catch(error => {
        console.log(error);
        errorMessage: {
          header: 'Oh Snap!';
          body: 'It looks like this page is temporarily unavailable. Please try again later.';
        };
      });
  },

  filters: {
    currencydecimal (value) {
      return '$' + value
    }
  },
})