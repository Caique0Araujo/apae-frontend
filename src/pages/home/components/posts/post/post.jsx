import { FormattedDate, IntlProvider } from 'react-intl';
import '../css/post.min.css'
export default function Post(props){
    const title = props.title;
    const description = props.description;
    const date = props.date;
    return(
        <div className="post">
            <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <IntlProvider locale='pt-BR'>
                    <FormattedDate value={date} year="numeric" day="2-digit" month='long'/>
                </IntlProvider>
            </div>
            <div>
                <img src="src\assets\images\pexels-mentatdgt-1336873.jpg" alt="" />
            </div>
        </div>
    )
}