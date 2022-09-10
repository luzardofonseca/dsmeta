import logo from '../../assets/img/image_1.svg';

import './style.css';

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por

                        <a href="htpps://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                    </p>

            </div>
        </header>
    )
}

export default Header;