import './css/news.min.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Buffer } from 'buffer';
import { getById } from '../../repositories/news-repository';
import { FormattedDate, IntlProvider } from 'react-intl';
import ClipLoader from "react-spinners/ClipLoader";

export default function News(props) {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const color = '#74B05C'

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async() => {
        try {
            setLoading(true);
            
            const realValue = Buffer.from(id, 'base64').toString('utf-8');
            const idNews = realValue.split('+')[0];
    
            const _news = await getById(idNews);
            setNews(_news);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    if (error == true) {
        return (
            <div className='error-box'><h1>Ocorreu um erro :(</h1></div>
        );
    }

    if (loading == true) {
        return (
            <div className='loading-box'>
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

    if (news == null) {
        return (
            <div className='error-box'><h1>Notícia não encontrada :(</h1></div>
        );
    }

    return(
        <nav className='news-main-box'>
            <div className='title-box'>
                <h1>{news.title}</h1>
            </div>
            <img src={`data:image/png;base64,${news.image_path}`} alt="" />
            <div>
                <p>{news.text}</p>
                <IntlProvider locale='pt-BR'>
                    <FormattedDate value={news.date} year="numeric" day="2-digit" month='long'/>
                </IntlProvider>
            </div>
        </nav>
    )
}