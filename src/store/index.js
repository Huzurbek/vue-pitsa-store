import { createStore } from 'vuex'

export default createStore({
  state: {

    sushes: [
      {
        image: 'sushi-cranch.png',
        name: 'Филадельфия кранч',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
        crust: 'Традиционное',
        size: '20 см',
        price: 475,
        startingPrice: true,
        status: 'NEW',
      },
      {
        image: 'sushi-cream.png',
        name: 'Филадельфия крем-брюле ',
        description: 'Сливочный сыр, семга татаки с тростниковым сахаром, соус у...',
        toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
        crust: 'Традиционное',
        size: '20 см',
        price: 395,
        startingPrice: false,
        status: 'ХИТ'
      },
      {
        image: 'sushi-super.png',
        name: 'Супер Филадельфия',
        description: 'Действительно много семги, сливочный сыр, огурец, рис, н...',
        toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
        crust: 'Традиционное',
        size: '20 см',
        price: 425,
        startingPrice: false,
        status: ''
      },
      {
        image: 'sushi-tigr-mama.png',
        name: 'Тигр мама',
        description: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...',
        toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
        crust: 'Традиционное',
        size: '20 см',
        price: 525,
        startingPrice: false,
        status: ''
      },
      {
        image: 'sushi-tigr-mama.png',
        name: 'Тигр мама',
        description: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...',
        toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
        crust: 'Традиционное',
        size: '20 см',
        price: 525,
        startingPrice: false,
        status: ''
      },
      {
        image: 'sushi-super.png',
        name: 'Супер Филадельфия',
        description: 'Действительно много семги, сливочный сыр, огурец, рис, н...',
        toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
        crust: 'Традиционное',
        size: '20 см',
        price: 425,
        startingPrice: false,
        status: ''
      },
      {
        image: 'sushi-cranch.png',
        name: 'Филадельфия кранч',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
        crust: 'Традиционное',
        size: '20 см',
        price: 475,
        startingPrice: false,
        status: ''
      },
      {
        image: 'sushi-cream.png',
        name: 'Филадельфия крем-брюле ',
        description: 'Сливочный сыр, семга татаки с тростниковым сахаром, соус у...',
        toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
        crust: 'Традиционное',
        size: '20 см',
        price: 395,
        startingPrice: false,
        status: ''
      },
    ],
    basket: 0,
    products: [
      {
        image: 'chicken-sweet.png',
        name: 'Чикен Сладкий Чили',
        description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Пепперони'
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус'
          }
        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'NEW',
      },
      {
        image: 'easy-peasy.png',
        name: 'EASY PEASY огуречный расколбас',
        description: 'Курица, Лук, Перец Халапеньо...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные'
          },

        ],
        crust: 'Тонкое',
        size: 28,
        price: 280,
        startingPrice: true,
        status: 'ХИТ',
      },
      {
        image: 'easy-peasy-checken.png',
        name: 'EASY PEASY чикен а-ля хрен',
        description: 'Курица, Лук, Соус Карбонара,...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Пепперони'
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус'
          }
        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: '',
      },
      {
        image: 'four-season.png',
        name: '4 сезона',
        description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Пепперони'
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус'
          }
        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: '',
      },
      {
        image: 'four-season.png',
        name: '4 сезона',
        description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Пепперони'
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус'
          }
        ],
        crust: 'Традиционное',
        size: 28,
        price: 399,
        startingPrice: true,
        status: '',
      },
      {
        image: 'easy-peasy-checken.png',
        name: 'EASY PEASY чикен а-ля хрен',
        description: 'Курица, Лук, Соус Карбонара,...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Пепперони'
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус'
          }
        ],
        crust: 'Традиционное',
        size: 33,
        price: 399,
        startingPrice: true,
        status: '',
      },
      {
        image: 'chicken-sweet.png',
        name: 'Чикен Сладкий Чили',
        description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Пепперони'
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус'
          }
        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: '',
      },
      {
        image: 'easy-peasy.png',
        name: 'EASY PEASY огуречный расколбас',
        description: 'Курица, Лук, Перец Халапеньо...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные'
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Пепперони'
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус'
          }
        ],
        crust: 'Традиционное',
        size: 33,
        price: 399,
        startingPrice: true,
        status: '',
      },
    ],
    plan: [
      {
        crust: ['Традиционное','Тонкое'],
        size: ['20 см','28 см','33 см'],
      }
    ]
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
