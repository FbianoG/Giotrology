import { useRef, useState } from 'react';
import './Payment.css';
import Button from '../components/Common/Button'
import Stars from '../components/Common/Stars';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';

export default function Payment() {



    // function changeBandeira(e) {
    //     const band = e.target.value
    //     if (band === "master") {
    //         bandeira.current.src = "https://logosmarcas.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
    //     } else {
    //         bandeira.current.src = "https://logopng.com.br/logos/visa-17.png"

    //     }
    // }

    // emailjs.init("ceAIIFLHMCK_ganFy") // public key - iniciar fora da function
    // async function sendEmail(e) { // Envia o formulário de contato para meu Email
    //     e.preventDefault()
    //     const formContact = { nome1, nome2, bairro1, bairro2, cidade1, cidade2, estado1, estado2, data1, data2, hora1, hora2, email }
    //     if (Object.values(formContact).some(element => element.trim() === '')) {
    //         setMapData(true)
    //         return
    //     }
    //     try {
    //         const response = await emailjs.send('service_oc8e0g4', 'template_082zxcb', formContact) // service, template, formulário
    //         console.log(response);

    //     } catch (error) {
    //         console.log('Erro ao enviar e-mail:', error);
    //     }
    // }


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

    const [showLove, setShowLove] = useState(false)
    return (
        <>
            <Header />
            <div className="content">
                <div className="paymentContainer">
                    <div className="paymentSection">
                        <h3 className='paymentSectionTitle'>Sinastria Amorosa</h3>
                        <h2 className='paymentSectionSubtitle'><span>R$</span> 35,00</h2>
                        <div className="widgetDiscont">10% OFF</div>
                    </div>
                    <div className="paymentSection">
                        <div className="paymentSectionCard">

                            <img src="https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png" alt="fundo" id="paymentSectionCardBackgroud" />
                            <img src="" alt="Imagem bandeira do cartão" />
                            <label for="">Nº Cartão</label>
                            <span></span>
                            <div class="paymentCardData">
                                <div class="paymentCardDataName">
                                    <label for="">Nome</label>
                                    <span></span>
                                </div>
                                <div class="paymentCardDataName">
                                    <label for="">CVV</label>
                                    <span></span>
                                </div>
                            </div>
                            <label for="">Validade:</label>
                            <span></span>
                        </div>

                        <div className="paymentSectionCouple">
                            <label >Bandeira do Cartão</label>
                            <select>
                                <option value="1">Master</option>
                                <option value="2">Visa</option>
                            </select>
                            <label >Nº Cartão</label>
                            <input type='text' />
                            <label >Nome no Cartão</label>
                            <input type='text' />
                            <div className="paymentSectionCoupleRow">
                                <label >CVV</label>
                                <label >Validade</label>
                                <input type='number' />
                                <input type='text' />
                            </div>
                        </div>
                        <Button main text='Solicitar' functions={() => setShowLove(true)} />

                    </div>

                    <div className="paymentSection">
                        {!showLove && <>
                            <h3 className='paymentSectionTitle'>Suas Informações</h3>
                            <div className="paymentSectionCouple">
                                <label >E-mail</label>
                                <input type='text' />
                                <label >Nome Completo</label>
                                <input type='text' />
                                <div className="paymentSectionCoupleRow">
                                    <label >Hora de Nasc.</label>
                                    <label >Dia de Nasc.</label>
                                    <input type='time' />
                                    <input type='date' />
                                </div>
                                <div className="paymentSectionCoupleRow">
                                    <label >Bairro de Nasc.</label>
                                    <label >Cidade de Nasc.</label>
                                    <input type='text' />
                                    <input type='text' />
                                </div>

                            </div>
                            <Button text='Seu Amor' functions={() => setShowLove(true)} />
                        </>}
                        {showLove && <>
                            <h3 className='paymentSectionTitle'>Informações do Seu Amor</h3>
                            <div className="paymentSectionCouple">
                                <label >Nome Completo</label>
                                <input type='text' />
                                <div className="paymentSectionCoupleRow">
                                    <label >Hora de Nasc.</label>
                                    <label >Dia de Nasc.</label>
                                    <input type='time' />
                                    <input type='date' />
                                </div>
                                <div className="paymentSectionCoupleRow">
                                    <label >Bairro de Nasc.</label>
                                    <label >Cidade de Nasc.</label>
                                    <input type='text' />
                                    <input type='text' />
                                </div>

                            </div>
                            <Button text='Seus Dados' functions={() => setShowLove(false)} />
                        </>}

                    </div>
                </div>
            </div>

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