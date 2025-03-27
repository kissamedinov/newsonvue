// src/data/mockData.js

export const articles = [
    {
      id: 1,
      title: 'Новости 1',
      excerpt: 'Краткое описание новости 1.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Новости 2',
      excerpt: 'Краткое описание новости 2.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Новости 3',
      excerpt: 'Краткое описание новости 3.',
      image: 'https://via.placeholder.com/300x200'
    }
  ]
  
  export const categories = [
    { name: 'Политика', slug: 'politics' },
    { name: 'Спорт', slug: 'sports' },
    { name: 'Технологии', slug: 'technology' }
  ]
  
  export const getArticlesByCategory = (category) => {
    return articles.filter(article => article.category === category)
  }
  
  export const getArticleById = (id) => {
    return articles.find(article => article.id === id)
  }
  