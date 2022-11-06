import { useEffect } from 'react';
import { useState } from 'react';
import { getMostRecentNews } from '../../../../repositories/news-repository';
import '../css/posts.min.css';
import Post from './post/post';

export default function Posts(){
    const [news, setNews] = useState([]);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        // TODO: mostra spinner de carregamento no final das notícias
        const _news = await getMostRecentNews(news.length, 5);
        setNews(_news);
        // TODO: desativa o spinner
    };

    return(
        <div className='postsContainer'>
            <div className='title-box'>
                <h1>Últimos destaques</h1>
            </div>
            
            { 
                news.map((val) => 
                    <Post 
                        key={val.id_news} 
                        title={val.title} 
                        description={val.description} 
                        date={val.created_at_utc}
                    />
                )
            }
        </div>
    )
}