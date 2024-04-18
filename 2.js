"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];



const divProdacts = document.querySelector('.products');
// Для каждого продукта создает элемент с названием товара и списком отзывов к нему
for (const product of initialData) {
  const productEl = document.createElement('div');
  productEl.classList.add('product-item');
  productEl.textContent = product.product;
  const ulEl = document.createElement('ul');
  ulEl.classList.add('list-reviews');
  productEl.append(ulEl);

  // создание списка отзывов для товара
  for (const review of product.reviews) {
    const reviewEl = document.createElement('li');
    reviewEl.textContent = review.text;
    ulEl.append(reviewEl);
  }

  // Создание поля ввода для нового отзыва и кнопки добавления
  const inputEl = document.createElement('input');
  inputEl.classList.add('input-review');
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('add-review');
  buttonEl.textContent = 'Добавить отзыв';
  productEl.append(inputEl);
  productEl.append(document.createElement('br'));
  productEl.append(buttonEl);
  divProdacts.append(productEl);

  // Создание для кнопки события "Добавить отзыв"
  buttonEl.addEventListener('click', () => {
    const textReview = inputEl.value;

    //Проверка условия длины
    if (textReview.length > 50 && textReview.length < 500) {
      const addReviewEl = document.createElement('li');
      addReviewEl.textContent = textReview;
      ulEl.append(addReviewEl);
      product.reviews.push({id: uid(), text: textReview}) //добавление в массив отзывов
      inputEl.value = '';
      // Удаление не нужных сообщений об ошибке, если они есть
      const findErrorMessage = productEl.querySelector('.error-message');
      if (findErrorMessage != undefined) {
        findErrorMessage.remove();
      }
    } else {
      // Удаление не нужных сообщений об ошибке, если они есть
      const findErrorMessage = productEl.querySelector('.error-message');
      if (findErrorMessage != undefined) {
        findErrorMessage.remove();
      }
      const errorMessageEl = document.createElement('div');
      errorMessageEl.classList.add('error-message');
      errorMessageEl.textContent = 'Добавленный отзыв не соответсвует по количеству текста';
      buttonEl.before(errorMessageEl);
    }
    
  })
}
