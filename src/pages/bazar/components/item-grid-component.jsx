import { Card } from "react-bootstrap";
import { FormattedNumber, IntlProvider } from "react-intl";

export function ItemGridComponent(props) {
    return (
        <Card key={props.id} className='item-grid' style={{width: 200, marginBottom: 50}} onClick={() => props.onClick(props.id)}>
            <Card.Img variant="top" src={`data:image/png;base64,${props.buffer}`} height={125} style={{objectFit: 'cover'}}/>
            <Card.Body style={{textAlign: 'center'}}>
                <Card.Title style={{fontWeight: 500, color: '#666666'}}>{props.title}</Card.Title>
                <Card.Text style={{fontWeight: 300, color: '#666666'}}>
                    <IntlProvider locale="pt-BR">
                        <FormattedNumber value={props.price} style='currency' currency="BRL"/>
                    </IntlProvider>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}