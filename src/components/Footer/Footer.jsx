import React from 'react';
import './Footer.css'
import Paypal from '../../assets/imgs/imgfooter/Paypal.png';
import Contacto from '../Contacto/contacto'; 
function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="footer-container">
                    <div className="pagos">
                        <p>Medios de pagos</p>
                        <img src={Paypal} alt="" />
                    </div>
                    <div className="red-social">
                        <p>Siguenos en nuestras redes</p>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-tiktok"></i>
                    </div>
                </div>                
                < Contacto />
                <div className="copyright">
                    Copyright&copy; 2023 - Todos los derechos reservados
                </div>
            </footer >    
        </>
    )
}

export default Footer