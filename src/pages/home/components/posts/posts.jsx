import { useEffect } from "react";
import { useState } from "react";
import { getMostRecentNews } from "../../../../repositories/news-repository";
import "../css/posts.min.css";
import Post from "./post/post";
import { Buffer } from "buffer";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
export default function Posts() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const color = "#74B05C";

  const [currentPage, setCurrentPage] = useState(0);
  const newsPerPage = 2;
  const pages = Math.ceil(news.length / newsPerPage);
  const startIndex = currentPage * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = news.slice(startIndex, endIndex);

  const [search, setSearch] = useState("");
  const [searchNews, setSearchNews] = useState([]);

  const searchFromTitle = (searchWord) => {
    let temp = [];
    news.forEach((item) => {
      if (item.title.toLowerCase().includes(searchWord.toLowerCase())) {
        temp.push(item);
      }
    });
    setSearchNews(temp);
  };

  const navigate = useNavigate();

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setError(false);

    try {
      setLoading(true);
      const _news = await getMostRecentNews();
      setNews(_news);
      setLoading(false);
    } catch {
      setError(true);
    }
  };

  const onClickInPost = (id, date) => {
    const _id = `${id}+${date}`;
    const bf = Buffer.from(_id, "utf-8");
    const base = bf.toString("base64");
    console.log(base);

    navigate(`noticia/${base}`, { id: base });
  };

  const showNews = () => {
    if (error == true) {
      return (
        <div className="error-box">
          <h1>Ocorreu um erro :(</h1>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="loading-box">
          <ClipLoader
            color={color}
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      );
    }

    return (
      <>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => {
              var word = e.target.value;
              setSearch(e.target.value);
              searchFromTitle(word);
            }}
          />
        </div>
        {search.length < 3
          ? currentNews.map((val) => (
              <Post
                key={val.id_news}
                title={val.title}
                description={val.text}
                buffer={val.image_path}
                date={val.created_at_utc}
                onClick={onClickInPost}
                id={val.id_news}
              />
            ))
          : searchNews.map((val) => (
              <Post
                key={val.id_news}
                title={val.title}
                description={val.text}
                buffer={val.image_path}
                date={val.created_at_utc}
                onClick={onClickInPost}
                id={val.id_news}
              />
            ))}
        {
            search.length < 3?
          <div className="controlsBox">
            <button
              onClick={(e) => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              Anterior
            </button>
            <h4>{currentPage + 1}</h4>
            <button
              onClick={(e) => {
                if (currentPage < pages - 1) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              Proxima
            </button>
          </div>
          :
          <></>
        }
      </>
    );
  };

  return (
    <div className="postsContainer">
      <div className="title-box">
        <h1>Últimos destaques</h1>
      </div>

      {showNews()}
    </div>
  );
}
