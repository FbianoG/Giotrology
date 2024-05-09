import './Button.css';

export default function Button(props) {

    return (
        <>
            {props.main ? <button className='mainBtn' type={props.type} onClick={props.functions} > {props.text}</button >
                : <button className='notMainBtn' type={props.type} onClick={props.functions} >{props.text}</button >
            }
        </>
    )
}