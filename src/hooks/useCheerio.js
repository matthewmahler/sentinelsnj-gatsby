import { useState, useEffect } from 'react';
import cheerio from 'cheerio';
import axios from 'axios';
function useCheerio(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function scrapeData() {
    const document = axios
      .get('https://buttercms.com/docs/api/')
      .then(console.log(document));
  }
  useEffect(() => {
    scrapeData();
  }, []);
  return [data, loading];
}
export { useCheerio };
