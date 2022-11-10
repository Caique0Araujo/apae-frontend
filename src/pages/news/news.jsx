import './css/news.min.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Buffer } from 'buffer';
import { getById } from '../../repositories/news-repository';
import { FormattedDate, IntlProvider } from 'react-intl';

export default function News(props) {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

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
        // TODO: Interessante colocar algo nesta parte
        return (
            <div>Ocorreu um error</div>
        );
    }

    if (loading == true) {
        // TODO: Interessante colocar algo nesta parte
        return (
            <div>Laoding</div>
        );
    }

    if (news == null) {
        // TODO: Interessante colocar algo nesta parte
        return (
            <div>News not founded</div>
        );
    }

    return(
        <nav className='news-main-box'>
            <div className='title-box'>
                <h1>{news.title}</h1>
            </div>
            <img src="../../src/assets/images/pexels-mentatdgt-1336873.jpg" alt="" />
            <div>
                <p>{news.text}</p>
                <IntlProvider locale='pt-BR'>
                    <FormattedDate value={news.date} year="numeric" day="2-digit" month='long'/>
                </IntlProvider>
            </div>
        </nav>
    )
}