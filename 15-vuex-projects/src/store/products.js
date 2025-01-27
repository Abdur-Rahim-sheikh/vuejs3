export default {
  state() {

    return {

      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbctent.com%2Fwp-content%2Fuploads%2F2017%2F01%2F43220-60x100.jpg&f=1&nofb=1&ipt=8a50b9eb361288c9fbb05d258514f5f16420cd2bfe5851596632d5b6ac292b47&ipo=images',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],

    };
  },

  getters: {
    products(state) {
      return state.products;
    },
  },
}
