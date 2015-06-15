import React    from 'react';
import Router   from 'react-router';


var Link = Router.Link;


var Header = React.createClass({
    render: function() {
        return (
            <div className="header" id="header">
                <header>
                    <div className="fixed my-topbar">
                        <nav className="top-bar" data-topbar role="navigation">
                            <section className="top-bar-section">
                                <div className="row">
                                    <div className="presentation large-3 small-3 columns">
                                        <ul className="left">
                                            <li><Link to="home">
                                                <strong>ADÈLE LE MÉNÉLEC--ROBERT</strong><br/>
                                                Diplôme des métiers d'arts textiles<br/>
                                                2015
                                            </Link></li>
                                        </ul>
                                    </div>
                                    <div className="large-9 small-9 columns topbar-content">
                                        <ul className="left">
                                            <li><Link to="cv">CV</Link></li>
                                        </ul>
                                        <ul className="right">
                                            <li><Link to="corps-danse">CORPS-DANSÉ</Link></li>
                                            <li><Link to="vetement-sonore">VÊTEMENT-SONORE</Link></li>
                                            <li><Link to="contact">CONTACT</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
});

export default Header;
