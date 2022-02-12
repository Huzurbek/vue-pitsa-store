import { createStore } from 'vuex'

export default createStore({
  state: {
    pizzas: [
      {
        image: 'chicken-sweet.png',
        title: 'Чикен Сладкий Чили',
        text: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
        price: 399,
        startingPrice: true,
        sign: 'NEW'
      },
      {
        image: 'easy-peasy.png',
        title: 'EASY PEASY огуречный ',
        text: 'Курица, Лук, Перец Халапеньо...',
        price: 549,
        startingPrice: true,
        sign: 'ХИТ'
      },
      {
        image: 'easy-peasy-checken.png',
        title: 'EASY PEASY чикен а-ля',
        text: 'Курица, Лук, Соус Карбонара,...',
        price: 249,
        startingPrice: true
      },
      {
        image: 'four-season.png',
        title: '4 сезона',
        text: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
        price: 630,
        startingPrice: true
      },

      {
        image: 'four-season.png',
        title: '4 сезона',
        text: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
        price: 630,
        startingPrice: true
      },
      {
        image: 'easy-peasy-checken.png',
        title: 'EASY PEASY чикен а-ля',
        text: 'Курица, Лук, Соус Карбонара,...',
        price: 249,
        startingPrice: true
      },
      {
        image: 'chicken-sweet.png',
        title: 'Чикен Сладкий Чили',
        text: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
        price: 399,
        startingPrice: true
      },
      {
        image: 'easy-peasy.png',
        title: 'EASY PEASY огуречный ',
        text: 'Курица, Лук, Перец Халапеньо...',
        price: 549,
        startingPrice: true
      },
    ],
    sushes: [
      {
        image: 'sushi-cranch.png',
        title: 'Филадельфия кранч',
        text: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        price: 475,
        startingPrice: true,
        sign: 'NEW'
      },
      {
        image: 'sushi-cream.png',
        title: 'Филадельфия крем-брюле ',
        text: 'Сливочный сыр, семга татаки с тростниковым сахаром, соус у...',
        price: 395,
        startingPrice: false,
        sign: 'ХИТ'
      },
      {
        image: 'sushi-super.png',
        title: 'Супер Филадельфия',
        text: 'Действительно много семги, сливочный сыр, огурец, рис, н...',
        price: 425,
        startingPrice: false
      },
      {
        image: 'sushi-tigr-mama.png',
        title: 'Тигр мама',
        text: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...',
        price: 525,
        startingPrice: false
      },
      {
        image: 'sushi-tigr-mama.png',
        title: 'Тигр мама',
        text: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...',
        price: 525,
        startingPrice: false
      },
      {
        image: 'sushi-super.png',
        title: 'Супер Филадельфия',
        text: 'Действительно много семги, сливочный сыр, огурец, рис, н...',
        price: 425
      },
      {
        image: 'sushi-cranch.png',
        title: 'Филадельфия кранч',
        text: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        price: 475
      },
      {
        image: 'sushi-cream.png',
        title: 'Филадельфия крем-брюле ',
        text: 'Сливочный сыр, семга татаки с тростниковым сахаром, соус у...',
        price: 395
      },
    ],
    basket: 0
  },
  mutations: {
    addToBasket(state,payload){
      console.log('in mutation',payload)
      state.basket += payload
    }
  },
  actions: {
  },
  modules: {
  }
})
