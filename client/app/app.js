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
        $('.imageHolder').removeClass('hidden');
        $('.img-holder-img').removeClass('hidden');
        if(!$('.img-holder-img').length){
            $('.img-holder').imageScroll({
                coverRatio: 0.8
            });
        }
    },
    componentWillUnmount: function() {
        $('.imageHolder').addClass('hidden');
        $('.img-holder-img').addClass('hidden');

    },
    render: function() {

        return (
            <div className="corpsDanse large-9 columns">
                <section>
                    <h1>INTRODUCTION</h1></section>
                <div className="img-holder" data-image="/assets/img/cd_slide-1.png">
                </div>
                <section>
                    <p>Le corps est ce qui nous fait vivre, exister. C’est à travers lui que l’individu s’exprime. La gestuelle, les postures et autres mimiques constituent notre premier langage. Il est l’un de nos moyen de communication.</p>
                    <p>Dans le cadre de ce projet professionnel, je porte mon attention sur l’aspect artistique du mouvement, la pratique de la danse.</p>
                    <p>L’organisme n’est jamais très silencieux ; nos articulations grincent, craquent, nos cœurs battent, et l’air que nous inspirons semble déferler d’une voix stridente dans nos poumons.
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-2.jpg"></div>
                <section>
                    <p>
                        Tous ces rythmes physiques, dont on a souvent perdu la subtilité, sont en fait une assurance de la vie elle­même, un signal de notre vitalité la plus incontestable et fascinante.</p>
                    <p>Je porte mon attention sur le bruissement qui résulte de la manipulation d’une matière. Je m’intéresse aux propriétés sonores des matériaux qui composent notre quotidien. Je souhaite que mon projet permette à un corps en mouvement de donner vie à une parole nouvelle. Cette parole, c’est celle des matériaux. Elle habillera ce corps et l’accompagnera dans sa performance dansée.
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-3.jpg"></div>
                <section>
                    <h1>Anatomie sonore</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-4.jpg"></div>
                <section>
                    <p>
                        Chacun des éléments qui constituent notre corps humaine travaille, au quotidien afin de nous maintenir en pleine santé. Toute cette activité à l’intérieur de nos chairs n’est pas si silencieuse que nous le pensons. Le cœur, les dents, le ventre... </p>
                    <p>Notre corps est à l’origine de toutes sortes de bruits. Nos os grincent, notre cœur pulse, bat, et rythme le mécanisme de la machine humaine. Ce tout, représente l’état sonore naturel de notre organisme. </p>
                    <p>Les sons de l’environnement dans lequel nous évoluons ne stimulent pas seulement les tympans de nos oreilles. Ils nous mettent en vibration. </p>
                    <p>Les vibrations sonores, qu’elles soient musique ou bruit, résonnent dans notre corps. Certes les tympans des oreilles entrent en vibration sous l’impact des sons, mais ils ne sont pas les seuls. La peau et les tissus sont également mobilisés par les vibrations sonores. Cette résonance est plus ou moins importante en fonction des caractéristiques du son : sa hauteur, son volume, son timbre. </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        L’artiste Karina van Heck vit et travaille aux Pays­Bas. Ses installations et ses objets sont pour la plupart considérés comme un complément à l’organisme qui peut servir le corps d’une manière esthétique . En 2010, elle commence à expérimenter en combinant l’art, la mode et la technologie et elle réalise « Body Speaker ». </p>
                    <p>Un projet artistique qui transforme les sons du corps en une musique, grâce à une série de capteurs installés sur le corps. Une simple capture de l’état sonore interne du corps. </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <h1>Geste musical</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        Le geste est un mécanisme vivant et intelligible propulsé par une énergie à l’intérieur d’un être.
                    </p>
                    <p>Le geste musical est un des phénomènes les plus complexes de l’expression humaine ; il relève de réactions synchrones diverses et variées. Chez l’homme, différents gestes contribuent ainsi à l’éclosion de toutes sortes de sons vivants qui nous entourent ou agissent en nous, bien que chacun d’eux ne revête pas la même importance.</p>
                    <p>C’est le travail de la perception et de l’organisation du matériau sonore (capté ou imaginé par chacun) qui permet d’explorer leurs différentes possibilités et de leur donner un sens musical.</p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <h1>Geste musical</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        Bien que tout geste soit caractérisé par l’expression d’un mouvement, d’un rythme, d’une durée, d’une densité et même d’une sonorité, il n’est pas pour autant un geste musical automatique.</p>
                    <p>
                        C’est seulement par des interactions et le principe de complémentarité que les gestes jouent un rôle primordial dans l’expression sonore du corps.
                    </p>
                    <p>
                        Autrement dit, ne devient musique que le résultat d’un agencement approprié de sons et de silences, répondant aux critères musicaux admis dans une culture donnée. Taper des mains ou des pieds, s’agiter, se secouer, frapper avec un objet une surface, gratter, pincer ou frotter un corps constituent des exemples de gestes qui produisent des «sensations» et des sons différents.
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        Quand le "devenir­oiseau" ...
                        <br/> se confond avec un "devenir­pinceau".
                    </p>
                    <p>
                        Le chorégraphe Josef Nadj et le musicien Akosh S. sont à l’origine de cette performance dansée où il est question d’une observation patiente, minutieuse des corbeaux et en particulier, de l’instant fugace où ils se posent, où s’opère la transition entre le vol et la marche.
                    </p>
                    <p>
                        Cependant, dans le dialogue danse / musique, un troisième partenaire est invité à s’exprimer : une peinture noire, brillante, fluide, qui, dans le fil du geste musical et chorégraphique, déposera la trace, témoin ou empreinte, du passage des oiseaux.
                    </p>
                </section>
                <section>
                    <h1>Chorégraphie</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        La danse est un moyen de communiquer : par «le langage du corps», elle est un instrument physique ou un symbole permettant d’exprimer ses sentiments et ses pensées ; les mouvements corporels devenant des symboles que les membres de la société comprennent et dont le but est de représententer des expériences du monde extérieur et psychique.
                    </p>
                    <p>
                        Intimement liés, musique, danse, corps et espace sont des éléments bien souvent indissociables d’une performance commune qui se construit dans des interactions complexes. Improvisation, temps musical, processus de création, mise en scène, mise en mouvement, rituel, sont autant de mécanismes sociaux, culturels, cognitifs, corporels et émotionnels nécessitant une réflexion anthropologique et technique à mener conjointement dans la création d’une chorégraphie.
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        J’ai porté mon attention sur la pensée de Merce Cunningham. Ce chorégraphe américain a bouleversé les codes de la danse moderne et posé les bases de la danse contemporaine telle que nous la connaissons aujourd’hui. Il sépare la danse de la musique.
                    </p>
                    <p>
                        La chorégraphie ne suit plus le rythme de la musique, mais est définie par un temps précis. La danse compose alors sa propre musique et chaque geste, chez Cunningham, peut être perçu comme une note. Le spectateur est entraîné par le rythme des pas des danseurs. Au cours de sa carrière, il va de plus en plus déconstruire le mouvement. Il utilise le hasard pour composer certaines danses. Cela lui permet de prendre des décisions esthétiques de manière objective et impersonnelle. On peut dire que ce moyen d’arriver à la création, non par intuition, instinct ou goût personnel, a été une sorte de point de non­retour dans sa conception chorégraphique. Le but de sa danse est de donner à voir le mouvement et son organisation dans l’espace et dans le temps. Il n’y a pas de sens caché dans les chorégraphies de Cunningham et c’est à chacun de trouver son chemin dans son œuvre.
                    </p>
                    <p>
                        Robert Swinston déclare en parlant d’une de ces créations représentée par ‘Le Théâtre du Silence’ (une compagnie de danse créée en 1972 par Jacques Garnier et Brigitte Lefèvre) : «Il n’y a pas d’histoire, mais il se passe des choses, et on a, en tant que spectateur, le sentiment que quelque chose peut jaillir, un fracas, un hasard. On ne pense pas, on ressent.»
                    </p>
                    <p>
                        Dans les années 90, l’intérêt de Cunningham pour les technologies contemporaines le pousse à découvrir le logiciel informatique "Lifeforms" mouvements qui lui donne de nouvelles possibilités chorégraphiques. En 1999, il crée Biped dans lequel les danseurs dialoguent avec leur propre image grâce à des capteurs placés sur leur corps et une projection vidéo sur scène.
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <h1>Temps</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        Il est important dans la pratique de la danse de ne pas dissocier les composants de celle­ci. Parce que la danse est, la plupart du temps associée à de la musique, il faut considérer dans sa compréhension les notions du temps, du silence, du phrasé, du rythme et de la durée. Ces derniers ont longtemps été indissociables.
                    </p>
                    <p>
                        La musique et la danse ont beaucoup d’éléments communs, en premier lieu bien entendu le déroulement dans le temps, la régularité de la pulsation, la périodicité des formules rythmiques, mais également la dynamique (différenciation de la force), l’espace (configuration spatiale des exécutants) et le corps humain (voix du chanteur et de l’instrumentiste, mouvements du danseur).
                    </p>
                    <p>
                        Plus que des éléments communs, c’est une véritable intimité qui lie la musique instrumentale à la danse. André Schaeffner dans «Origine des instruments de musique» n’hésite pas à rappeler que «la musique instrumentale, en ses formes les plus primitives, suppose toujours la danse : elle est danse. L’homme frappe le sol de ses pieds ou de ses mains, bat son corps en cadence, sinon l’agite en partie ou en entier afin de mouvoir les objets et ornements sonores [les sonnailles] qu’il porte.»
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        Anne Teresa De Keersmaeker est danseuse et chorégraphe belge flamande. Elle est une figure majeure de la danse contemporaine belge et mondiale. Elle s’est imposée au début des années 1980 grâce à sa volonté de renouveler le lien intense entre danse et musique. Elle déclare : « Il y a dans cette musique, un rapport de connivence aussi étroit entre le son et le silence qu’il y en a, pour moi, entre le mouvement et l’immobilité. J’y vois aussi une très grande économie de moyens, un désir d’austérité, de lenteur ». Ce désir d’austérité et une sécheresse apparente qui cherchent cependant « à faire jaillir la vie ». En 2008, elle réalise un « virage » dans son processus de création en écrivant une pièce, The Song, bâtie autour du silence et de quelques bruitages dont la structure repose autour de l’espace scénique, des lumières et du seul mouvement des corps.
                    </p>
                    <p>
                        En m’intéressant aux propriétés sonores des matières, le textile devient instrument et le danseur musicien. Ainsi le rythme sonore émane du rythme chorégraphié.
                    </p>
                    <p>
                        Le corps est devenu créateur de bruissement dans le mouvement. Danser le silence ? Une histoire où le silence a tout simplement la parole...
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <h1>Espace</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        Le mouvement est réalisé dans l’espace qui se trouve à la périphérie du danseur.
                    </p>
                    <p>
                        Il est important de différencier l’espace scénique, c’est­à­ dire les lieux investis habituellement par la danse ; théâtres / opéras / scènes / salles / halls / réserves / hangars / garages / parkings / lofts / murs / toits / musées / rues, etc. De l’espace propre au danseur : intérieur, périphérique (ou corporel proche), extérieur (ou de déplacement), inter- danseurs.
                    </p>
                    <p>
                        Depuis le 20ème siècle l’espace du danseur s’est progressivement métamorphosé. La libération hors des lieux traditionnels a donc été entretenue par la quête de liberté face aux contraintes et normes de la danse classique et moderne.
                    </p>
                    <p>
                        Cette soif d’affranchissement a eu des répercussions sur la place du spectateur, toujours plus questionnée et redéfinie par cette évolution, voire, parfois, niée (puisqu’en refusant l’idée de «spectacle», on ne lui permet pas d’être considéré). Le danseur, en «s’exposant» hors­cadre, prend aussi le risque dans certaines œuvres de ne pas même être vu...
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
                <section>
                    <p>
                        Les pionniers de la performance de danse verticale sont les danseurs de la compagnie Bandaloop. Leurs chorégraphies sont complexes et ils ont l’art de transformer la piste de danse.
                    </p>
                    <p>
                        Fondé par la chorégraphe et la directrice artistique Amelia Rudolph, le travail de Bandaloop a été présenté dans des théâtres et des musées, sur des gratte­ciels, des ponts, des panneaux d’affichage et des sites historiques, dans des auditoriums et des halls de convention, dans la nature sur des falaises et sur des écrans.
                        <br/> BANDALOOP apporte à la danse de nouveaux publics, de nouveaux espaces, de nouveaux lieux. Ils ré­imaginent ce que la danse peut être.
                    </p>
                    <p>
                        L’image ci­dessous est une performance de danse qui a été filmée à la verticale sur le côté du bâtiment de 18 étages de l’hôtel de ville d’Oakland au début du mois à l’Art + Soul Festival. Les danseurs sont Amelia Rudolph et Roel Seeber.
                    </p>
                </section>
                <div className="img-holder" data-image="/assets/img/cd_slide-5.jpg"></div>
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
        var classname = 'sidebar large-3 small-3 text-center columns sidebar-' + page;
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
