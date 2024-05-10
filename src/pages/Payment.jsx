import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import './Payment.css';
import Button from '../components/Common/Button'
import Header from '../components/Shared/Header';
import Loader from "../components/Common/Loader";
import Stars from '../components/Common/Stars';
import Footer from '../components/Shared/Footer';
import Toast from '../components/Common/Toast';

export default function Payment() {

    // Variáveis
    const { register, handleSubmit, errors, reset } = useForm();
    const [loadingEmail, setLoadingEmail] = useState(false)
    const [bandeira, setBandeira] = useState('1')
    const [toast, setToast] = useState(false)


    // Funções
    async function sendEmail(data) {
        setLoadingEmail(true)
        try {
            // throw new Error('olá')
            const response = await emailjs.send(import.meta.env.VITE_REACT_APP_SERVICE, import.meta.env.VITE_REACT_APP_TEMPLATE, data)
            setToast({ text: 'Solicitação enviado com sucesso!' })
            reset()
        } catch (error) {
            console.log('Erro ao enviar e-mail:', error);
            setToast({ text: 'Erro ao solicitar. Tente novamente!', type: 'error' })
        }
        setLoadingEmail(false)
    }


    // Chamadas
    emailjs.init(import.meta.env.VITE_REACT_APP_PUBLIC_KEY)

    return (
        <>
            <Header />
            <div className="content">
                <h1 className='main__title'>Sinastria Amorosa</h1>
                <form className="container__payment" onSubmit={handleSubmit(sendEmail)}>
                    <div className="payment__form">
                        <fieldset>
                            <h3 className="payment__title">Informações de contato</h3>
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" {...register("email", { required: true })} />
                        </fieldset>
                        <fieldset>
                            <h3 className="payment__title">Sinastria - Pessoa 1</h3>
                            <label htmlFor="name1">Nome Completo</label>
                            <input id="name1" type="text" {...register("name1", { required: true })} />
                            <label htmlFor="city1">Cidade de Nascimento</label>
                            <input id="city1" type="text" {...register("city1", { required: true })} />
                            <label htmlFor="bairro1">Bairro de Nascimento</label>
                            <input id="bairro1" type="text" {...register("bairro1", { required: true })} />
                            <label id="date1" htmlFor="">Data de Nascimento</label>
                            <input id="date1" type="date" {...register("date1", { required: true })} />
                            <label htmlFor="time1">Hora de Nascimento</label>
                            <input id="time1" type="time" {...register("time1", { required: true })} />
                        </fieldset>
                        <fieldset>
                            <h3 className="payment__title">Sinastria - Pessoa 2</h3>
                            <label htmlFor="name2">Nome Completo</label>
                            <input type="text"  {...register("name2")} />
                            <label htmlFor="city2">Cidade de Nascimento</label>
                            <input type="text" {...register("city2")} />
                            <label htmlFor="bairro2">Bairro de Nascimento</label>
                            <input type="text" {...register("bairro2")} />
                            <label htmlFor="date2">  Data de Nascimento</label>
                            <input type="date" {...register("date2")} />
                            <label htmlFor="time2">Hora de Nascimento</label>
                            <input type="time" {...register("time2")} />
                        </fieldset>
                        <h3 className="payment__title">Informações de Pagamento</h3>
                        <fieldset className="fieldset -flex">
                            <div className="payment__method-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/71/71227.png" alt="" />
                                <p>Cartão</p>
                            </div>
                            <div className="payment__method-item">
                                <span className="payment__method-selection"></span>
                                <img src="https://logopng.com.br/logos/pix-106.png" alt="" />
                                <p>Pix</p>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3 className="payment__title">Pagamento</h3>
                            <label htmlFor="card">Número do Cartão</label>
                            <input id="card" type="number" />
                            <label htmlFor="cardName">Nome no Cartão</label>
                            <input id="cardName" type="text" />
                            <label htmlFor="validad">Validade (MM/AA)</label>
                            <input id="validad" type="text" />
                            <label htmlFor="cvv">Cvv</label>
                            <input id="cvv" type="number" />
                        </fieldset>
                    </div>
                    <div className="payment__sumary">
                        <h3 className='payment__title'>Sumário de compra</h3>
                        <div className="payment__sumary-product">
                            <figure><img src='' alt='' /></figure>
                            <div className="sumary__product-details">
                                <p><strong>Sinastria Amorosa</strong></p>
                                <p>p/ 2 pessoas</p>
                                <p><strong>R$35,00</strong></p>
                            </div>
                        </div>
                        <span className='payment__sumary-divider'></span>
                        <div className="payment__sumary-pricing">
                            <p>Subtotal</p>
                            <p><strong>R$120,00</strong></p>
                            <p>Taxas</p>
                            <p><strong>R$0,00</strong></p>
                            <p>Desconto</p>
                            <p><strong>R$12,00</strong></p>
                            <span className='payment__sumary-divider -pricing'></span>
                            <p className='payment__sumary-price--large'><strong>Total</strong></p>
                            <p className='payment__sumary-price--large'><strong>R$108,00</strong></p>
                        </div>
                        <span className='payment__sumary-divider'></span>
                        <button className='payment__sumary-btn' type='submit'>Confirmar envio</button>
                    </div>
                </form>
            </div>
            {loadingEmail && <div className="backdropLoad"><Loader /></div>}
            {toast && <Toast data={toast} setToast={setToast} />}
            <Stars />
            <Footer />
        </>
    )
}