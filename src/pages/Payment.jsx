import { useRef, useState } from 'react';
import './Payment.css';
import Button from '../components/Common/Button'
import Stars from '../components/Common/Stars';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';

export default function Payment() {

    const [qrcode, setQrcode] = useState(true)
    const bandeira = useRef()
    const card = useRef()
    const [cardNumber, setCardNumber] = useState('')
    const [name, setName] = useState('')

    const cardName = useRef()
    const cvv = useRef()
    const cardCvv = useRef()
    const validade = useRef()
    const cardValidade = useRef()

    function changeBandeira(e) {
        const band = e.target.value
        if (band === "master") {
            bandeira.current.src = "https://logosmarcas.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
        } else {
            bandeira.current.src = "https://logopng.com.br/logos/visa-17.png"

        }
    }

    function changeCard() {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        cardNumber.current.textContent = numberCard(card.current.value)
        cardName.current.style.textTransform = 'capitalize'
        cardCvv.current.textContent = cvv.current.value
        cardValidade.current.textContent = validade.current.value
        if (regex.test(cardValidade.current.textContent) === false && validade.current.value.length === 5) validade.current.style.borderColor = 'red'
        if (regex.test(cardValidade.current.textContent) === true) validade.current.style.borderColor = ''
    }
    emailjs.init("ceAIIFLHMCK_ganFy") // public key - iniciar fora da function
    async function sendEmail(e) { // Envia o formulário de contato para meu Email
        e.preventDefault()

        const formContact = { nome1, nome2, bairro1, bairro2, cidade1, cidade2, estado1, estado2, data1, data2, hora1, hora2, email }

        console.log(formContact);



        try {
            const response = await emailjs.send('service_oc8e0g4', 'template_082zxcb', formContact) // service, template, formulário
            console.log(response);

        } catch (error) {
            console.log('Erro ao enviar e-mail:', error);
        }
    }


    const [mapData, setMapData] = useState(true)
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
    return (
        <>
            <Header />

            <div className="paymentContainer">

                <div className="checkout">
                    <h3>Sinastria Amorosa</h3>
                    <div className="checkout-type">
                        {/* <input type='radio' name='typePayment' id='type1' onChange={() => setMapData(true)} /> */}
                        <div className="checkout-typePayment">
                            <img src='https://logopng.com.br/logos/pix-106.png' alt='' />
                            <label htmlFor='type1'>Pix</label>
                            <input type='radio' name='typePayment' id='type1' onChange={() => { setQrcode(true); setMapData(false) }} />
                        </div>
                        <div className="checkout-typePayment">
                            <img src='https://fdr.com.br/wp-content/uploads/2020/10/44b6d5730ec643dfbefe2d70ecba93f9.png' alt='' />
                            <label htmlFor='type2' >Crédio / Débito</label>
                            <input type='radio' name='typePayment' id='type2' onChange={() => { setQrcode(false); setMapData(false) }} />
                        </div>
                    </div>
                    <div className="checkout-price">
                        <span className='checkout-priceLegend'>Preço</span>
                        <span className='checkout-priceValue'>R$35,00</span>
                    </div>
                </div>

                <div className="paymentContent">

                    {/* CARTÃO */}
                    {!qrcode && !mapData && <>
                        <div className="paymentCard">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png" alt="fundo" id='paymentCardBg' />
                            <img src="" alt="Imagem bandeira do cartão" ref={bandeira} />
                            <label htmlFor=''>Nº Cartão</label>
                            <span>{cardNumber}</span>
                            <div className="paymentCardData">
                                <div className="paymentCardDataName">
                                    <label htmlFor=''>Nome</label>
                                    <span >{name}</span>
                                </div>
                                <div className="paymentCardDataName">
                                    <label htmlFor=''>CVV</label>
                                    <span ref={cardCvv}></span>
                                </div>
                            </div>
                            <label htmlFor=''>Validade:</label>
                            <span ref={cardValidade}></span>
                        </div>
                        <div className="paymentForm">
                            <div className="paymentFormBandeira">
                                <input type="radio" name="bandeira" id="visa" value="visa" onChange={(e) => changeBandeira(e)} />
                                <label htmlFor='visa'>Visa</label>
                                <input type="radio" name="bandeira" id="masterCard" value="master" onChange={(e) => changeBandeira(e)} />
                                <label htmlFor='masterCard'>MasterCard</label>
                            </div>
                            <div className="paymentFormGroup">
                                <label htmlFor='card'>Nº Cartão:</label>
                                <input type='text' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} maxLength='16' />
                                <label htmlFor='name'>Nome no Cartão</label>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                                <label htmlFor='cvv'>CVV:</label>
                                <input type='text' onChange={changeCard} ref={cvv} maxLength='3' />
                            </div>
                            <div className="paymentFormGroup">
                                <label htmlFor='validade'>Validade:</label>
                                <input type='text' name='validade' onChange={changeCard} ref={validade} maxLength='5' />
                                <label htmlFor='cpf' >CPF:</label>
                                <input type='text' name='cpf' maxLength='11' />
                                <Button main="true" text="Comprar" functions={(e) => sendEmail(e)} />
                            </div>
                        </div>
                    </>}

                    {/* PIX */}
                    {qrcode && !mapData && <>
                        <div className="paymentForm pix">
                            <h3 >Scan:</h3>
                            <img src='/img/qrcode.svg' alt='' />
                            <h3 >Copie o código:</h3>
                            <span>qr.codes/EJOGsX <i className="fa-solid fa-copy"></i></span>
                            <Button main="true" text="Comprar" functions={() => setModal(true)} />
                        </div>
                    </>
                    }


                    {mapData &&
                        <div className="paymentForm">
                            <div className="paymentFormGroup">
                                <h3>Amor 1</h3>
                                <label htmlFor='card'>Nome Completo:</label>
                                <input type='text' value={nome1} onChange={(e) => setNome1(e.target.value)} />
                                <label htmlFor='card'>Bairro de Nasc:</label>
                                <input type='text' value={bairro1} onChange={(e) => setBairro1(e.target.value)} />
                                <label htmlFor='card'>Cidade de Nasc:</label>
                                <input type='text' value={cidade1} onChange={(e) => setCidade1(e.target.value)} />
                                <label htmlFor='card'>Estado de Nasc:</label>
                                <input type='text' value={estado1} onChange={(e) => setEstado1(e.target.value)} />
                                <label htmlFor='card'>Hora de Nasc:</label>
                                <input type='time' value={hora1} onChange={(e) => setHora1(e.target.value)} />
                                <label htmlFor='card'>Data de Nasc:</label>
                                <input type='date' value={data1} onChange={(e) => setData1(e.target.value)} />

                            </div>
                            <div className="paymentFormGroup">
                                <h3>Amor 2</h3>
                                <label htmlFor='card'>Nome Completo:</label>
                                <input type='text' value={nome2} onChange={(e) => setNome2(e.target.value)} />
                                <label htmlFor='card'>Bairro de Nasc:</label>
                                <input type='text' value={bairro2} onChange={(e) => setBairro2(e.target.value)} />
                                <label htmlFor='card'>Cidade de Nasc:</label>
                                <input type='text' value={cidade2} onChange={(e) => setCidade2(e.target.value)} />
                                <label htmlFor='card'>Estado de Nasc:</label>
                                <input type='text' value={estado2} onChange={(e) => setEstado2(e.target.value)} />
                                <label htmlFor='card'>Hora de Nasc:</label>
                                <input type='time' value={hora2} onChange={(e) => setHora2(e.target.value)} />
                                <label htmlFor='card'>Data de Nasc:</label>
                                <input type='date' value={data2} onChange={(e) => setData2(e.target.value)} />
                            </div>
                            <input type='text' id='inputEmail' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                            < Button main text={'Salvar'} functions={() => { setQrcode(false); setMapData(false) }} />
                        </div>
                    }


                </div>

            </div >
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
                                <label htmlFor=''>Nome Completo:</label>
                                <input type='text' />
                                <label htmlFor=''>E-mail:</label>
                                <input type='email' />
                                <h4>Sobre seu nascimento</h4>
                                <label htmlFor=''>Bairro:</label>
                                <input type='text' />
                                <label htmlFor=''>Cidade:</label>
                                <input type='text' />
                                <label htmlFor=''>Estado:</label>
                                <input type='text' />
                                <label htmlFor=''>Data:</label>
                                <input type='date' />
                                <label htmlFor=''>Hora:</label>
                                <input type='time' />
                                <div className="mapData-formBtns">
                                    <button className='btnCancel' onClick={() => setModal(false)}>Cancelar</button>
                                    <Button type="submit" main="true" text="Enviar" />
                                </div>
                            </form>
                        </div>
                    </div>

                } */}