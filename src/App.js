import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Pagination from './components/Pagination';
import authorsData from './data/authors.json';
import newsData from './data/news.json';

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 1;

  useEffect(() => {
    // Simulating fetch by loading JSON data
    setAuthors(authorsData);
    setArticles(newsData);
  }, []);

  const findAuthor = (authorId) => authors.find(author => author.id === authorId);

  const displayedArticles = articles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        {displayedArticles.map(article => (
          <Article
            key={article.id}
            title={article.title}
            body={article.body}
            imageUrl={article.image_url}
            author={findAuthor(article.author_id)}
            date={article.created_at}
          />
        ))}
        <Pagination
          total={10}
          current={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default App;
