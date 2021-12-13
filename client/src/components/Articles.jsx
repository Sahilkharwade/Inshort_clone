import { useEffect, useState } from 'react';
import { getNews } from '../service/api.js';

// components
import Article from './Article';

const Articles = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let res = await getNews();
    setNews(res.data);
    console.log(res);
  };

  return news.map((article) => <Article article={article} />);
};
export default Articles;
