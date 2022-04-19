
import { createStore } from 'vuex'
import axios from 'axios';
// function containsObject(obj, list) {
//   var i;
//   for (i = 0; i < list.length; i++) {
//     if (list[i].id === obj.id) {
//       return true;
//     }
//   }
//   return false;
// }
export default createStore({
  state: {
    formData:[],
    posts: [],
    sushes: [
        {
          id: 1,
          image: 'sushi-cranch.png',
          name: 'Филадельфия кранч',
          description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
          toppings: [
        {
          icon: 'MozarellaCheese',
          width: 41,
          height: 35,
          toppingName: 'Моцарелла',
          inStock: true,
        },
        {
          icon: 'Cucumber',
          width: 40,
          height: 40,
          toppingName: 'Огурцы маринованные',
          inStock: true,
        },
        {
          icon: '',
          width: 40,
          height: 40,
          toppingName: 'Пепперони',
          inStock: true,
        },
        {
          icon: 'SousInsideWhite',
          width: 41,
          height: 27,
          toppingName: 'Томатный соус',
          inStock: false,
        }
      ],
          additionalToppings:[
        {
          id: 1,
          icon: 'MozarellaCheese',
          width: 41,
          height: 35,
          toppingName: 'Моцарелла',
          price: 59
        },
        {
          id: 2,
          icon: 'Mashroom',
          width: 105,
          height: 105,
          toppingName: 'Шампиньоны',
          price: 59
        },

      ],
          crust: 'Традиционное',
          size: 20,
          price: 399,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
        },
        {
          id: 2,
            image: 'sushi-cream.png',
            name: 'Филадельфия крем-брюле',
            description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
            toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
            additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
            crust: 'Традиционное',
            size: 20,
            price: 399,
            startingPrice: true,
            status: 'ХИТ',
            quantity: 1,
        },
    ],
    //   {
    //     image: 'sushi-cranch.png',
    //     name: 'Филадельфия кранч',
    //     description: 'Сливочный сыр, семга татаки с тростниковым сахаром, соус у...',
    //     toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
    //     crust: 'Традиционное',
    //     size: '20 см',
    //     price: 475,
    //     startingPrice: true,
    //     status: 'NEW',
    //   },
    //   {
    //     image: 'sushi-cream.png',
    //     name: 'Филадельфия крем-брюле ',
    //     description: 'Сливочный сыр, семга татаки с тростниковым сахаром, соус у...',
    //     toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
    //     crust: 'Традиционное',
    //     size: '20 см',
    //     price: 395,
    //     startingPrice: false,
    //     status: 'ХИТ'
    //   },
    //   {
    //     image: 'sushi-super.png',
    //     name: 'Супер Филадельфия',
    //     description: 'Действительно много семги, сливочный сыр, огурец, рис, н...',
    //     toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
    //     crust: 'Традиционное',
    //     size: '20 см',
    //     price: 425,
    //     startingPrice: false,
    //     status: ''
    //   },
    //   {
    //     image: 'sushi-tigr-mama.png',
    //     name: 'Тигр мама',
    //     description: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...',
    //     toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
    //     crust: 'Традиционное',
    //     size: '20 см',
    //     price: 525,
    //     startingPrice: false,
    //     status: ''
    //   },
    //   {
    //     image: 'sushi-tigr-mama.png',
    //     name: 'Тигр мама',
    //     description: 'Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...',
    //     toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
    //     crust: 'Традиционное',
    //     size: '20 см',
    //     price: 525,
    //     startingPrice: false,
    //     status: ''
    //   },
    //   {
    //     image: 'sushi-super.png',
    //     name: 'Супер Филадельфия',
    //     description: 'Действительно много семги, сливочный сыр, огурец, рис, н...',
    //     toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
    //     crust: 'Традиционное',
    //     size: '20 см',
    //     price: 425,
    //     startingPrice: false,
    //     status: ''
    //   },
    //   {
    //     image: 'sushi-cranch.png',
    //     name: 'Филадельфия кранч',
    //     description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
    //     toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
    //     crust: 'Традиционное',
    //     size: '20 см',
    //     price: 475,
    //     startingPrice: false,
    //     status: ''
    //   },
    //   {
    //     image: 'sushi-cream.png',
    //     name: 'Филадельфия крем-брюле ',
    //     description: 'Сливочный сыр, семга татаки с тростниковым сахаром, соус у...',
    //     toppings: ['Моцарелла','Огурцы маринованные','Пепперони','Томатный соус'],
    //     crust: 'Традиционное',
    //     size: '20 см',
    //     price: 395,
    //     startingPrice: false,
    //     status: ''
    //   },


    basket: 0,
    products: [
      {
        id: 1,
        image: 'chicken-sweet.png',
        name: 'Чикен Сладкий Чили',
        description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'NEW',
        quantity: 1,
      },
      {
        id: 2,
        image: 'easy-peasy.png',
        name: 'EASY PEASY огуречный расколбас',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. gd Accusamus aliquam aspernatur culpa dignissimos dolorem enim facilis harum in incidunt, ipsa iusto magnam nostrum odit optio quibusdam reprehenderit rerum, sit suscipit?',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: false,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: false,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[],
        crust: 'Тонкое',
        size: 28,
        price: 280,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 3,
        image: 'easy-peasy-checken.png',
        name: 'EASY PEASY чикен а-ля хрен',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aspernatur culpa dignissimos dolorem enim facilis harum in incidunt, ipsa iusto magnam nostrum odit optio quibusdam reprehenderit rerum, sit suscipit?',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: false,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: '',
        quantity: 1,
      },
      {
        id: 4,
        image: 'four-season.png',
        name: '4 сезона',
        description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: false,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: '',
        quantity: 1,
      },
      {
        id: 5,
        image: 'four-season.png',
        name: '4 сезона',
        description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: false,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[],
        crust: 'Традиционное',
        size: 28,
        price: 399,
        startingPrice: true,
        status: '',
        quantity: 1,
      },
      {
        id: 6,
        image: 'easy-peasy-checken.png',
        name: 'EASY PEASY чикен а-ля хрен',
        description: 'Курица, Лук, Соус Карбонара,...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: false,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[],
        crust: 'Традиционное',
        size: 33,
        price: 399,
        startingPrice: true,
        status: '',
        quantity: 1,
      },
      {
        id: 7,
        image: 'chicken-sweet.png',
        name: 'Чикен Сладкий Чили',
        description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: false,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: '',
        quantity: 1,
      },
      // {
      //   id: 8,
      //   image: 'easy-peasy.png',
      //   name: 'EASY PEASY огуречный расколбас',
      //   description: 'Курица, Лук, Перец Халапеньо...',
      //   toppings: [
      //     {
      //       icon: 'MozarellaCheese',
      //       width: 41,
      //       height: 35,
      //       toppingName: 'Моцарелла',
      //       inStock: true,
      //     },
      //     {
      //       icon: 'Cucumber',
      //       width: 40,
      //       height: 40,
      //       toppingName: 'Огурцы маринованные',
      //       inStock: false,
      //     },
      //     {
      //       icon: '',
      //       width: 40,
      //       height: 40,
      //       toppingName: 'Пепперони',
      //       inStock: true,
      //     },
      //     {
      //       icon: 'SousInsideWhite',
      //       width: 41,
      //       height: 27,
      //       toppingName: 'Томатный соус',
      //       inStock: false,
      //     }
      //   ],
      //   additionalToppings:[],
      //   crust: 'Традиционное',
      //   size: 33,
      //   price: 399,
      //   startingPrice: true,
      //   status: '',
      //   quantity: 1,
      // },
    ],
    snacks: [
      {
        id: 1,
        image: 'snack1.png',
        name: 'Филадельфия кранч',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'NEW',
        quantity: 1,
      },
      {
        id: 2,
        image: 'snack2.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 3,
        image: 'snack3.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 4,
        image: 'snack4.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 5,
        image: 'snack2.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
    ],
    desserts: [
      {
        id: 1,
        image: 'dessert1.png',
        name: 'Филадельфия кранч',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'NEW',
        quantity: 1,
      },
      {
        id: 2,
        image: 'dessert2.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 3,
        image: 'dessert3.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 4,
        image: 'dessert4.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 5,
        image: 'dessert5.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
    ],
    drinks: [
      {
        id: 1,
        image: 'drinks1.png',
        name: 'Филадельфия кранч',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'NEW',
        quantity: 1,
      },
      {
        id: 2,
        image: 'drinks2.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 3,
        image: 'drinks3.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 4,
        image: 'drinks4.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
      {
        id: 5,
        image: 'drinks5.png',
        name: 'Филадельфия крем-брюле',
        description: 'Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...',
        toppings: [
          {
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            inStock: true,
          },
          {
            icon: 'Cucumber',
            width: 40,
            height: 40,
            toppingName: 'Огурцы маринованные',
            inStock: true,
          },
          {
            icon: '',
            width: 40,
            height: 40,
            toppingName: 'Пепперони',
            inStock: true,
          },
          {
            icon: 'SousInsideWhite',
            width: 41,
            height: 27,
            toppingName: 'Томатный соус',
            inStock: false,
          }
        ],
        additionalToppings:[
          {
            id: 1,
            icon: 'MozarellaCheese',
            width: 41,
            height: 35,
            toppingName: 'Моцарелла',
            price: 59
          },
          {
            id: 2,
            icon: 'Mashroom',
            width: 105,
            height: 105,
            toppingName: 'Шампиньоны',
            price: 59
          },

        ],
        crust: 'Традиционное',
        size: 20,
        price: 399,
        startingPrice: true,
        status: 'ХИТ',
        quantity: 1,
      },
    ],
    basketProducts: [],

  },
  getters: {
    basketTotalSum: (state) => {
      return state.basketProducts.reduce((total,el)=>total += (el.price * el.quantity),0)
    },
    checkoutTotalSum: (state) => {
      return state.checkoutProducts.reduce((total,el)=>total += (el.price * el.quantity),0)
    },
    getPosts:(state) => {
      return state.posts
    }
  },
  mutations: {
    addTopping(state,payload){
      let index = state.products.findIndex(el=>el.id === payload.id)

      let toppings = state.products[index].additionalToppings
      if(toppings.filter(el=>el.id === payload.value.id).length > 0){
        let toppingIndex= toppings.findIndex(el=>el.id === payload.value.id)
        toppings.splice(toppingIndex,1)
      }else{
        toppings.push(payload.value)
      }
    },
    addToBasket(state,payload){
      state.basketProducts.push(payload)
    },

    incBasketProQuantity(state, payload){
      state.basketProducts = state.basketProducts.map((product)=>{
        if(product.id === payload){
          product.quantity +=1
        }
          return product
      })
    },
    decBasketProQuantity(state,payload){
      let buffer=[]
      state.basketProducts.forEach((product,id)=>{
        if(product.id === payload ){
          state.basketProducts[id].quantity-=1
        }
        if (product.quantity!==0 ){
          buffer.push(state.basketProducts[id])
        }
      })
      state.basketProducts=buffer

    },
    removeBasketProducts(state){
      state.basketProducts = []
    },
    addToCheckout(state,payload){
      state.checkoutProducts = (payload)
    },

    fillForm(state,payload){
      state.formData.push(payload)
    },



    setPost(state,payload){
      state.posts = payload
    },
  },
  actions: {
    getPost({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            commit('setPost', response.data)
          })
    },

  },
  modules: {
  }
})
