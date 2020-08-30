import React from 'react'
import './Footer.css';
import FooterSection from './FooterSection';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <FooterSection items={[
                    'Come funziona Airbnb',
                    'Newsroom',
                    'Airbnb Plus',
                    'Airbnb Luxe',
                    'HotelTonight',
                    'Airbnb for Work',
                    'Olimpiadi',
                    'Opportunità di lavoro'
                ]} title="Informazioni"/>
                <FooterSection items={[
                    'Diversità e appartenenza',
                    'Accessibilità',
                    'Airbnb Associates',
                    'Alloggi per l\'emergenza',
                    'Invita degli amici'
                ]} title="Community"/>
                <FooterSection items={[
                    'Diventa un host',
                    'Offri un\'Esperienza online',
                    'Offri un\'Esperienza',
                    'Messaggio dal CEO Brian Chesky',
                    'Ospitare responsabilmente',
                    'Open Homes',
                    'Centro risorse',
                    'Community Center'
                ]} title="Ospita"/>
                <FooterSection items={[
                    'Aggiornamenti sulla pandemia di COVID-19',
                    'Centro Assistenza',
                    'Opzioni di cancellazione',
                    'Servizio di assistenza di quartiere',
                    'Affidabilità e sicurezza'
                ]} title="Assistenza"/>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    <p>
                    © 2020 Airbnb clone, No rights reserved · <span>Privacy</span> · <span>Termini</span> · <span>Mappa del sito</span> · <span>Dettagli dell'azienda</span>
                    </p>
                </div>
                <div className="footer__bottom-right">
                    <div className="footer__bottom-right__language">
                        <LanguageIcon />
                        <h5>Italiano (IT)</h5>
                    </div>
                    <div className="footer__bottom-right__currency">
                        <p>€</p>
                        <h5>EUR</h5>
                    </div>
                    <div className="footer__bottom-right__icons">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
