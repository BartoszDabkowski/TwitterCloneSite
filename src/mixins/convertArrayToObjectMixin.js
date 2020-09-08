export default{
    // created: function () {
    //     this.convertArrayToObject()
    //   },
    methods: {
        convertArrayToObject: function(array, key) {
            return array.reduce((obj, item) => {
              return {
                ...obj,
                [item[key]]: item,
              };
            }, {});
          }
    }
}