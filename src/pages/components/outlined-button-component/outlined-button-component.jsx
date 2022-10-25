import { Button } from "react-bootstrap";
import './css/Style.min.css';

function OutlinedButtonComponent(props) {
    let width = 175;
    if (props.width != undefined) {
        width = props.width;
    }

    let text = 'Outlined Button';
    if (props.text != undefined) {
        text = props.text;
    }

    return (
        <Button className="outlined-button" style={{
            borderRadius: 45,
            width: width
        }}>{text}</Button>
    );
}

export default OutlinedButtonComponent;