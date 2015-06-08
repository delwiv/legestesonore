import React       from 'react';
import $           from 'jquery';
import Router      from 'react-router';
import _           from 'lodash';
import ImageScroll from './parallax-imagescroll';




var assets       = require('./texts.json');

var DefaultRoute = Router.DefaultRoute;
var Link         = Router.Link;
var Route        = Router.Route;
var RouteHandler = Router.RouteHandler;
var Locations    = Router.Locations;

var CorpsDanse = React.createClass({
    componentDidMount: function() {
        $('.img-holder').show();
        $('.img-holder').imageScroll();
    },
    componentDidUnmount: function() {
        $('img-holder').hide();
    },
    render: function() {

        return (
            <div className="corpsDanse">

                <div className="img-holder" data-image="/assets/img/cd_slide-1.png">
                </div>

                <section>
                    <p>Le corps est ce qui nous fait vivre, exister. C’est à travers lui que l’individu s’exprime. La gestuelle, les postures et autres mimiques constituent notre premier langage. Il est l’un de nos moyen de communication. Dans le cadre de ce projet professionnel, je porte mon attention sur l’aspect artistique du mouvement, la pratique de la danse. L’organisme n’est jamais très silencieux ; nos articulations grincent, craquent, nos cœurs battent, et l’air que nous inspirons semble déferler d’une voix stridente dans nos poumons.
                    </p></section>
                <div className="img-holder" data-image="/assets/img/cd_slide-2.jpg"></div>
                <section>
                    <p>
                    Tous ces rythmes physiques, dont on a souvent perdu la subtilité, sont en fait une assurance de la vie elle­même, un signal de notre vitalité la plus incontestable et fascinante. Je porte mon attention sur le bruissement qui résulte de la manipulation d’une matière. Je m’intéresse aux propriétés sonores des matériaux qui composent notre quotidien. Je souhaite que mon projet permette à un corps en mouvement de donner vie à une parole nouvelle. Cette parole, c’est celle des matériaux. Elle habillera ce corps et l’accompagnera dans sa performance dansée.
                    </p>
                </section>
                 <div className="img-holder" data-image="/assets/img/cd_slide-3.jpg"></div>
                <section>
                    <p>
                    Tous ces rythmes physiques, dont on a souvent perdu la subtilité, sont en fait une assurance de la vie elle­même, un signal de notre vitalité la plus incontestable et fascinante. Je porte mon attention sur le bruissement qui résulte de la manipulation d’une matière. Je m’intéresse aux propriétés sonores des matériaux qui composent notre quotidien. Je souhaite que mon projet permette à un corps en mouvement de donner vie à une parole nouvelle. Cette parole, c’est celle des matériaux. Elle habillera ce corps et l’accompagnera dans sa performance dansée.
                    </p>
                </section>
                 <div className="img-holder" data-image="/assets/img/cd_slide-4.jpg"></div>
                <section>
                    <p>
                    Tous ces rythmes physiques, dont on a souvent perdu la subtilité, sont en fait une assurance de la vie elle­même, un signal de notre vitalité la plus incontestable et fascinante. Je porte mon attention sur le bruissement qui résulte de la manipulation d’une matière. Je m’intéresse aux propriétés sonores des matériaux qui composent notre quotidien. Je souhaite que mon projet permette à un corps en mouvement de donner vie à une parole nouvelle. Cette parole, c’est celle des matériaux. Elle habillera ce corps et l’accompagnera dans sa performance dansée.
                    </p>
                </section>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return(
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
});

var Content = React.createClass({
    render: function() {
        return (
            <div className="content">
                <div className="">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});


var Page = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    render: function() {
        var currentPage = _.trimLeft(this.context.router.getCurrentPathname(), '/');
        if (currentPage === '')
            currentPage = 'home';
        // console.log(currentPage);
        return (
            <div className="page">
            <Sidebar page={currentPage}/>
            <PageContent page={currentPage}/>
            </div>
        );
    }
});

var Sidebar = React.createClass({
    render: function() {
        var page = this.props.page;
        var classname = 'sidebar large-3 small-3 columns sidebar-' + page;
        var sidebarContent = assets.sidebar[page];
        // console.log('sidebar:' + page);
        // console.log(sidebarContent);
        // $('.sidebar').setClass('sidebar ' + classname);
        return (
            <div className={classname} dangerouslySetInnerHTML={{__html: sidebarContent}}>
            </div>
        );
    }
});

var PageContent = React.createClass({
    render: function() {
        var page = this.props.page;
        var element;
        switch (page) {
            case 'cv':
                element = <Cv/>;
                break;
            case 'contact':
                element = <Contact/>;
                break;
            case 'corps-danse':
                element = <CorpsDanse/>;
                break;
            default:
                element = <Home/>;
                break;
        }
        var classname = 'pageContent  large-9 small-9 columns page-' + page;
        var pageContent =  + assets.page[page];
        return (
            <div className={classname}>
                {element}
            </div>
        );
    }
});


var Contact = React.createClass({
    render: function() {
        return (
            <div className="contact"></div>
        );
    }
});

// <iframe className="large-12 small-12 columns" height="394px" src="//player.vimeo.com/video/44371067?badge=0&autoplay=1&title=0&portrait=0&byline=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
//                 </iframe>


var Home = React.createClass({
    render: function() {

        return (
            <div className="home">


            </div>
        );
    }
});

var Cv = React.createClass({
    render: function() {
        return (
            <div className="cv large-12 small-12 columns">
                <div className="large-3 small-3 columns">FORMATION</div>
                <div className="large-9 small-9 columns">
                    <div className="large-3 small-3 columns">2013-2015</div>
                    <div className="large-9 small-9 columns">Diplôme des Métiers d’Art Textiles, Lycée JP Vernant - Sèvres (92) option artisanat numérique</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">2012-2013</div>
                    <div className="large-9 small-9 columns">École Supérieure des Beaux Arts - Angers (49)</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">2012</div>
                    <div className="large-9 small-9 columns">BAC Sciences et Technologies de l’Industrie, Lycée Livet - Nantes (44) option arts appliqués</div>
                </div>
                <hr/>
                <div className="large-3 small-3 columns">EXPERIENCES PROFESSIONNELLES</div>
                <div className="large-9 small-9 columns">
                    <div className="large-3 small-3 columns">2014-2015</div>
                    <div className="large-9 small-9 columns">Collaboration avec Margaux TARDITS réalisation de voile court et long brodés placement et incrustation de dentelle sur bustier gestion de la communication sur interne</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Juin 2014</div>
                    <div className="large-9 small-9 columns">Stage dans l’entreprise de Margaux TARDITS - Montreuil (93) création de robes de mariées sur mesure assistante modélisme/stylisme placement, broderie, incrustation de dentelles suivi de projet, relation client et fournisseur</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Octobre 2013</div>
                    <div className="large-9 small-9 columns">Assistante de l’artiste Serge CRAMPON - Bouguenais (44) Exposition au Piano’Cktail « Un Champs d’Honneur » préparation et transport des œuvres aide à la scénographie, accrochage / décrochage médiation et accueil du public (groupes scolaires / visiteurs)</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Julliet à Août 2013</div>
                    <div className="large-9 small-9 columns">Salariée au sein de l’entreprise Mamzelle Fourmi - Bouguenais (44) vente de tissus, patrons, mercerie en ligne préparation de commandes</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">2011-2013</div>
                    <div className="large-9 small-9 columns">Photographe du Collectif des Créateurs de Mode de l’Ouest le Collectif Émergence - Nantes (44) réalisation de shooting pour affiche, flyer et site internet</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">2013</div>
                    <div className="large-9 small-9 columns">Assistante</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">2009-2014</div>
                    <div className="large-9 small-9 columns">Gardes d’enfants régulières, occasionnelles, au pair - Nantes Angers Paris Logement contre service et habitat partagé - Angers, Boulogne Billancourt</div>
                </div>
                <hr/>
                <div className="large-3 small-3 columns">COMPÉTENCES</div>
                <div className="large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Langues</div>
                    <div className="large-9 small-9 columns">Anglais : bonne compréhention écrite et orale</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Informatique</div>
                    <div className="large-9 small-9 columns">Logiciels de bureautique Pack Office Maya, Marvelous Designer, suite Adobe, LightRoom</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Photographie</div>
                    <div className="large-9 small-9 columns">Prise de vue et développement argentique (4 ans)</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Danse</div>
                    <div className="large-9 small-9 columns">Moderne Jazz (3 ans) & flamenco (2 ans)</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Musique</div>
                    <div className="large-9 small-9 columns">Saxophone & basse (6 ans) solfège, chorale, jazz et percussion (5 ans)</div>
                </div>
                <div className="large-offset-3 small-offset-3 large-9 small-9 columns">
                    <div className="large-3 small-3 columns">Théâtre</div>
                    <div className="large-9 small-9 columns">Improvisation, exercice de diction, relaxation (2 ans)</div>
                </div>
            </div>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <div className="footer large-12 columns">
                <div className="large-6 large-offset-4 small-10 small-offset-4">
                    <p>Site réalisé par Delwiv - React.js/Node.js</p>
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <header>
                    <div className="fixed my-topbar">
                        <nav className="top-bar" data-topbar role="navigation">
                            <section className="top-bar-section">
                                <div className="row">
                                    <div className="presentation large-3 small-3 columns">
                                        <ul className="left">
                                            <li><Link to="home">
                                                <strong>ADÈLE LE MÉNÉLEC--ROBERT</strong><br/>
                                                Dimplôme des métiers darts textilles<br/>
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


var routes = (
    <Route handler={App}>
        <Route name="home" handler={Page}/>
        <Route name="cv" handler={Page}/>
        <Route name="corps-danse" handler={Page}/>
        <Route name="vetement-sonore" handler={Page}/>
        <Route name="contact" handler={Page}/>
        <DefaultRoute handler={Page}/>
    </Route>
);
// , Router.HistoryLocation
Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById('content'));
});

// var Welcome = React.createClass({
//     render: function
// })

// React.render( <App/> , document.getElementById('content'));
