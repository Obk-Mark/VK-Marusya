import "./Footer.scss"
import { Container } from "../Container/Container"
import React from "react";

export const Footer = () => {
    const doNothing = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    return (
        <footer className="footer">
            <Container>
                <div className="footer__wrapper">
                    <a className="footer__link" href="https://vk.com/id757786339" target="_blank" aria-label="ВКонтакте">
                        <svg className="footer__icon footer__icon--vk" viewBox="0 0 19 11">
                            <use xlinkHref="./images/sprite.svg#vk-icon" />
                        </svg>
                    </a>
                    <a className="footer__link" href="#" aria-label="YouTube" onClick={doNothing}>
                        <svg className="footer__icon footer__icon--youtube" viewBox="0 0 16 11">
                            <use xlinkHref="./images/sprite.svg#youtube-icon" />
                        </svg>
                    </a>
                    <a className="footer__link" href="#" aria-label="Одноклассники"  onClick={doNothing}>
                        <svg className="footer__icon footer__icon--ok" viewBox="0 0 12 19">
                            <use xlinkHref="./images/sprite.svg#ok-icon" />
                        </svg>
                    </a>
                    <a className="footer__link" href="https://t.me/MrkObkh" target="_blank" aria-label="Телеграмм">
                        <svg className="footer__icon footer__icon--tme" viewBox="0 0 17 15">
                            <use xlinkHref="./images/sprite.svg#tme-icon" />
                        </svg>
                    </a>
                </div>
            </Container>
        </footer>
    )
}
