import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const  updateNews = async () => {
    props.setProgress(15);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=7`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(25);
    let parsedData = await data.json()
    props.setProgress(75);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `Breaking News - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
  }, []);
 
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=7x`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

    return (
      <>
        <div className='text-center'>
          <h1 style={{ margin: '100px 0px 10px', marginTop: '95px' }}>VIP News - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
        </div>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          >
          <div className='container'>

            <div className='row'>
              {articles.map((element) => {
                return (
                  <div className='col-md-4' key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 77) : ""}
                      description={element.description ? element.description.slice(0, 75) : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url} author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      />
                  </div>
                );
              })}
              
            </div>

          </div>
        </InfiniteScroll>
      </>
    )
  }

News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
