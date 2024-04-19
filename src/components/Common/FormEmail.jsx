import Button from './Button'
import './FormEmail.css'



export default function FormEmail() {

    return (
        <form className="formEmail">
            <h1>Nos mande uma mensagem!</h1>
            <label htmlFor='name'>Nome:</label>
            <input type='text' name='name' id='name' />
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' id='email' />
            <label htmlFor='coment'>Comentário:</label>
            <textarea name="" ></textarea>
            
            <Button type={'submit'} text={'Enviar'} main={true}/>
        </form>
    )
}