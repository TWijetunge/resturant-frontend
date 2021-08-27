import {Dish} from './dish';

export const DISHES: Dish[] = [
    {
        id: '0',
        name: 'Uthappizza',
        image: 'assets/images/images/uthappizza.png',
        category: 'manins',
        featured: true,
        label: 'hot',
        price: '4.99',
        description:'A unique combination of indian Uthappam',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z' //this is the standard format of declaring date in programming languages according to ISO/OSI
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
      },
      {
        id: '1',
        name: 'Zucchipakoda',
        image: 'assets/images/images/zucchipakoda.png',
        category: 'appetizer',
        featured: false,
        label: '',
        price: '1.99',
        description:'Deep fried Zucchini coated with mildly sp',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
      },
      {id: '2',
      name: 'Vadonut',
      image: 'assets/images/images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description:'A quintessential ConFusion experience',
      comments: [
        {
            rating: 5,
            comment: 'Imagine all the eatables, living in conFusion!',
            author: 'John Lemon',
            date: '2012-10-16T17:57:28.556094Z'
        },
        {
            rating: 4,
            comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
            author: 'Paul McVites',
            date: '2014-09-05T17:57:28.556094Z'
        },
        {
            rating: 3,
            comment: 'Eat it, just eat it!',
            author: 'Michael Jaikishan',
            date: '2015-02-13T17:57:28.556094Z'
        },
        {
            rating: 4,
            comment: 'Ultimate, Reaching for the stars!',
            author: 'Ringo Starry',
            date: '2013-12-02T17:57:28.556094Z'
        },
        {
            rating: 2,
            comment: 'It\'s your birthday, we\'re gonna party!',
            author: '25 Cent',
            date: '2011-12-02T17:57:28.556094Z'
        }
    ]
    },
    {
      id: '3',
      name: 'ElaiCheese Cake',
      image: 'assets/images/images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description:'A delectable, semi-sweet New York Style ',
      comments: [
        {
            rating: 5,
            comment: 'Imagine all the eatables, living in conFusion!',
            author: 'John Lemon',
            date: '2012-10-16T17:57:28.556094Z'
        },
        {
            rating: 4,
            comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
            author: 'Paul McVites',
            date: '2014-09-05T17:57:28.556094Z'
        },
        {
            rating: 3,
            comment: 'Eat it, just eat it!',
            author: 'Michael Jaikishan',
            date: '2015-02-13T17:57:28.556094Z'
        },
        {
            rating: 4,
            comment: 'Ultimate, Reaching for the stars!',
            author: 'Ringo Starry',
            date: '2013-12-02T17:57:28.556094Z'
        },
        {
            rating: 2,
            comment: 'It\'s your birthday, we\'re gonna party!',
            author: '25 Cent',
            date: '2011-12-02T17:57:28.556094Z'
        }
    ]
    }

];