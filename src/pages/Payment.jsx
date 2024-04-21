import { useRef, useState } from 'react';
import './Payment.css';
import Button from '../components/Common/Button'

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
        if (regex.test(cardValidade.current.textContent) === false && validade.current.value.length === 5) {

            validade.current.style.borderColor = 'red'
        }
        if (regex.test(cardValidade.current.textContent) === true) {

            validade.current.style.borderColor = ''
        }


    }

    function numberCard(e) {
        return e.slice(0, 4) + " " + e.slice(4, 8) + " " + e.slice(8, 12) + " " + e.slice(12)
    }

    return (
        <form className="paymentContent">
            <div className="paymentCard">
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
                    <input type="radio" name="bandeira" id="" value="visa" onChange={(e) => changeBandeira(e)} />
                    <label htmlFor=''>Visa</label>
                    <input type="radio" name="bandeira" id="" value="master" onChange={(e) => changeBandeira(e)} />
                    <label htmlFor=''>MasterCard</label>
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
                    <input type='text' name='cpf' maxLength='11'/>
                    <Button type="submit" main="true" text="Comprar" />
                </div>
            </div>
        </form>
    )
}