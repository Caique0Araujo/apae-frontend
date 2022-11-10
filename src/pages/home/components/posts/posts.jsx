import { useEffect } from 'react';
import { useState } from 'react';
import { getMostRecentNews } from '../../../../repositories/news-repository';
import '../css/posts.min.css';
import Post from './post/post';
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router-dom';

export default function Posts(){
    const [news, setNews] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        setError(false);

        try {
            // TODO: mostra spinner de carregamento no final das notícias
            const _news = await getMostRecentNews(news.length, 5);
            setNews(_news);
            // TODO: desativa o spinner
        } catch {
            setError(true);
        }
    };

    const onClickInPost = (id, date) => {
        const _id = `${id}+${date}`;
        const bf = Buffer.from(_id, 'utf-8');
        const base = bf.toString('base64');
        console.log(base);

        navigate(`noticia/${base}`, { id: base });
    }

    const showNews = () => {
        if (error == true) {
            // TODO: Colocar um erro customizado
            return (
                <div>Erro</div>
            );
        }

        return (
            <>
                {
                    news.map((val) => 
                        <Post 
                            key={val.id_news} 
                            title={val.title} 
                            description={val.text} 
                            date={val.created_at_utc}
                            onClick={onClickInPost}
                            id={val.id_news}
                        />
                    )
                }
            </>
        );
    }

    return(
        <div className='postsContainer'>
            <div className='title-box'>
                <h1>Últimos destaques</h1>
            </div>
            
            { showNews() }
        </div>
    )
}