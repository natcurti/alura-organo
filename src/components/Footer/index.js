import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media">
                <a href="www.facebook.com" target="_blank"><img src='/images/fb.png' alt='Logo Facebook'/></a>
                <a href="www.twitter.com" target="_blank"><img src='/images/tw.png' alt='Logo Twitter'/></a>
                <a href="www.instagram.com" target="_blank"><img src='/images/ig.png' alt='Logo Instagram'/></a>
            </div>
            <div className="logo">
                <img src='/images/logo.png' alt='Logo Organo' />
            </div>
            <p className="text">Desenvolvido por Natalia</p>
        </footer>
    )
}

export default Footer;