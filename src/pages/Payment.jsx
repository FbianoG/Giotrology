import { useRef, useState } from 'react';
import './Payment.css';
import Button from '../components/Common/Button'
import Stars from '../components/Common/Stars';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';
import Loader from "../components/Common/Loader";

export default function Payment() {

    const [nome1, setNome1] = useState('')
    const [nome2, setNome2] = useState('')
    const [bairro1, setBairro1] = useState('')
    const [bairro2, setBairro2] = useState('')
    const [cidade1, setCidade1] = useState('')
    const [cidade2, setCidade2] = useState('')
    const [estado1, setEstado1] = useState('')
    const [estado2, setEstado2] = useState('')
    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
    const [hora1, setHora1] = useState('')
    const [hora2, setHora2] = useState('')
    const [email, setEmail] = useState('')
    const [bandeira, setBandeira] = useState('1')
    const [loadingEmail, setLoadingEmail] = useState(false)


    emailjs.init("ceAIIFLHMCK_ganFy") // public key - iniciar fora da function
    async function sendEmail(e) { // Envia o formulário de contato para meu Email
        e.preventDefault()
        setLoadingEmail(true)
        const formContact = { nome1, nome2, bairro1, bairro2, cidade1, cidade2, data1, data2, hora1, hora2, email }
        if (!nome1, !nome2, !bairro1, !bairro2, !cidade1, !cidade2, !data1, !data2, !hora1, !hora2, !email) {
            window.alert('Preencha todos os campos!')
            setLoadingEmail(false)
            return
        }
        try {
            const response = await emailjs.send('service_oc8e0g4', 'template_082zxcb', formContact) // service, template, formulário
            console.log(response);

        } catch (error) {
            console.log('Erro ao enviar e-mail:', error);
        }
        setLoadingEmail(false)
    }




    const [showLove, setShowLove] = useState(false)
    return (
        <>
            <Header />
            <div className="content">
                <div className="container__payment">
                    <form className="payment__form">
                        <fieldset>
                            <h3 className="payment__title">Informações de contato</h3>
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" />
                        </fieldset>
                        <fieldset>
                            <h3 className="payment__title">Sinastria - Pessoa 1</h3>
                            <label htmlFor="name1">Nome Completo</label>
                            <input id="name1" type="text" />
                            <label htmlFor="city1">Cidade de Nascimento</label>
                            <input id="city1" type="text" />
                            <label htmlFor="bairro1">Bairro de Nascimento</label>
                            <input id="bairro1" type="text" />
                            <label id="date1" htmlFor="">Data de Nascimento</label>
                            <input id="date1" type="date" />
                            <label htmlFor="time1">Hora de Nascimento</label>
                            <input id="time1" type="time" />
                        </fieldset>
                        <fieldset>
                            <h3 className="payment__title">Sinastria - Pessoa 2</h3>
                            <label htmlFor="name2">Nome Completo</label>
                            <input type="text" />
                            <label htmlFor="city2">Cidade de Nascimento</label>
                            <input type="text" />
                            <label htmlFor="bairro2">Bairro de Nascimento</label>
                            <input type="text" />
                            <label htmlFor="date2">  Data de Nascimento</label>
                            <input type="date" />
                            <label htmlFor="time2">Hora de Nascimento</label>
                            <input type="time" />
                        </fieldset>
                        <h3 className="payment__title">Informações de Pagamento</h3>
                        <fieldset className="fieldset--flex">
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
                    </form>
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
                        <div className="payment__sumary-pricing">
                            <p>Subtotal</p>
                            <p><strong>R$35,00</strong></p>
                            <p>Taxas</p>
                            <p><strong>R$0,00</strong></p>
                            <p>Desconto</p>
                            <p><strong>R$3,50</strong></p>
                            <span className='payment__sumary-divider'></span>
                            <p className='payment__sumary-price--large'><strong>Total</strong></p>
                            <p className='payment__sumary-price--large'><strong>R$31,50</strong></p>
                        </div>
                        <button className='payment__sumary-btn'>Confirmar envio</button>
                    </div>
                </div>






            </div>

            {loadingEmail && <div className="backdropLoad">
                <Loader />
            </div>}

            <Stars />
            <Footer />
        </>
    )
}












{/* {modal &&
                    <div className="mapData-modal">
                        <div className="mapData-data">
                            <h3>Leitura de Mapa Astral</h3>
                            <form className="mapData-form">
                                <label >Nome Completo:</label>
                                <input type='text' />
                                <label >E-mail:</label>
                                <input type='email' />
                                <h4>Sobre seu nascimento</h4>
                                <label >Bairro:</label>
                                <input type='text' />
                                <label >Cidade:</label>
                                <input type='text' />
                                <label >Estado:</label>
                                <input type='text' />
                                <label >Data:</label>
                                <input type='date' />
                                <label >Hora:</label>
                                <input type='time' />
                                <div className="mapData-formBtns">
                                    <button className='btnCancel' onClick={() => setModal(false)}>Cancelar</button>
                                    <Button type="submit" main="true" text="Enviar" />
                                </div>
                            </form>
                        </div>
                    </div>

                } */}