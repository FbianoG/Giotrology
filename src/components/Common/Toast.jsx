import './Toast.css'

export default function Toast({ data, setToast }) {
    let paint = ''
    if (data.type === 'error') paint = '#d34949'
    const color = { color: paint }
    const bord = { borderColor: paint }
    
    return (
        <div className="toast" style={bord}>
            {data.type === 'error' && <i className="fa-solid fa-circle-xmark toast__icon" style={color}></i>}
            {!data.type && <i className="fa-solid fa-circle-check toast__icon" ></i>}
            <p className='toast__text'>{data.text}</p>
            <button className='toast__btn' onClick={() => setToast(false)}>Fechar</button>
        </div>
    )
}