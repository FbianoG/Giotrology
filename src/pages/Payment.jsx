import { useRef, useState } from 'react';
import './Payment.css';
import Button from '../components/Common/Button'
import Stars from '../components/Common/Stars';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';

export default function Payment() {


    const bandeira = useRef()
    const card = useRef()
    const cardNumber = useRef()
    const name = useRef()
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
        cardName.current.textContent = name.current.value
        cardName.current.style.textTransform = 'capitalize'
        cardCvv.current.textContent = cvv.current.value
        cardValidade.current.textContent = validade.current.value
        if (regex.test(cardValidade.current.textContent) === false && validade.current.value.length === 5) validade.current.style.borderColor = 'red'
        if (regex.test(cardValidade.current.textContent) === true) validade.current.style.borderColor = ''
    }

    function numberCard(e) {
        return e.slice(0, 4) + " " + e.slice(4, 8) + " " + e.slice(8, 12) + " " + e.slice(12)
    }

    const [qrcode, setQrcode] = useState(false)

    return (
        <>

            <Header />
            <div className="paymentContainer">
                <div className="checkout">
                    <h3>Leitura de Mapa Astral</h3>
                    <div className="checkout-type">
                        <div className="checkout-typePayment">
                            <img src='https://logopng.com.br/logos/pix-106.png' alt='' />
                            <label htmlFor='type1'>Pix</label>
                            <input type='radio' name='typePayment' id='type1' onChange={() => setQrcode(true)} />
                        </div>
                        <div className="checkout-typePayment">
                            <img src='https://fdr.com.br/wp-content/uploads/2020/10/44b6d5730ec643dfbefe2d70ecba93f9.png' alt='' />
                            <label htmlFor='type2' >Crédio / Débito</label>
                            <input type='radio' name='typePayment' id='type2' onChange={() => setQrcode(false)} />
                        </div>
                    </div>
                    <div className="checkout-price">
                        <span className='checkout-priceLegend'>Preço</span>
                        <span className='checkout-priceValue'>R$75,00</span>
                    </div>
                </div>
                <form className="paymentContent">
                    {!qrcode &&
                        <>
                            <div className="paymentCard">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png" alt="fundo" id='paymentCardBg' />
                                <img src="" alt="Imagem bandeira do cartão" ref={bandeira} />
                                <label htmlFor=''>Nº Cartão</label>
                                <span ref={cardNumber}></span>
                                <div className="paymentCardData">
                                    <div className="paymentCardDataName">
                                        <label htmlFor=''>Nome</label>
                                        <span ref={cardName}></span>
                                    </div>
                                    <div className="paymentCardDataName">
                                        <label htmlFor=''>CVV</label>
                                        <span ref={cardCvv}></span>
                                    </div>
                                </div>
                                <label htmlFor=''>Validade:</label>
                                <span ref={cardValidade}></span>
                            </div>
                            <div className="paymentData"></div>
                            <div className="paymentForm">
                                <div className="paymentFormBandeira">
                                    <input type="radio" name="bandeira" id="visa" value="visa" onChange={(e) => changeBandeira(e)} />
                                    <label htmlFor='visa'>Visa</label>
                                    <input type="radio" name="bandeira" id="masterCard" value="master" onChange={(e) => changeBandeira(e)} />
                                    <label htmlFor='masterCard'>MasterCard</label>
                                </div>
                                <div className="paymentFormGroup">
                                    <label htmlFor='card'>Nº Cartão:</label>
                                    <input type='text' name='card' onChange={changeCard} ref={card} maxLength='16' />
                                    <label htmlFor='name'>Nome no Cartão</label>
                                    <input type='text' name='name' onChange={changeCard} ref={name} />
                                    <label htmlFor='cvv'>CVV:</label>
                                    <input type='text' name='cvv' onChange={changeCard} ref={cvv} maxLength='3' />
                                </div>
                                <div className="paymentFormGroup">
                                    <label htmlFor='validade'>Validade:</label>
                                    <input type='text' name='validade' onChange={changeCard} ref={validade} maxLength='5' />
                                    <label htmlFor='cpf' >CPF:</label>
                                    <input type='text' name='cpf' maxLength='11' />
                                    <Button type="submit" main="true" text="Comprar" />
                                </div>
                            </div>
                        </>
                    }

                    {qrcode &&
                        <>
                            <div className="paymentPix">
                                <img src='/img/qrcode.svg' alt='' />
                                <h3>Copie o código:</h3>
                                <span>qr.codes/EJOGsX <i className="fa-solid fa-copy"></i></span>
                            </div>
                        </>
                    }


                </form>

            </div>
            <Stars />

            <Footer />
        </>
    )
}