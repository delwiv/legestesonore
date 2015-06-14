import React    from 'react';
import $        from 'jquery';
import _        from 'lodash';

var VetementSonore = React.createClass({
    componentDidMount: function() {

        $('.imageHolder').removeClass('hidden');
        $('.vs-img-holder-img').removeClass('hidden');
        $('.pageContent').removeClass('large-9');
        $('.pageContent').removeClass('small-9');
        if(!$('.img-holder-img').length){
            $('.vs-img-holder').imageScroll({
                coverRatio: 0.8
            });
        }
    },
    componentWillUnmount: function() {
        $('.imageHolder').addClass('hidden');
        $('.img-holder-img').addClass('hidden');
        $('.pageContent').addClass('large-9');
        $('.pageContent').addClass('small-9');

    },
    render: function() {
        var style = {
            clear: "both"
        };

        return (
            <div className="vetementSonore large-12 small-12 columns" id="vetementSonore">
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-10.jpg"></div>
                <section>
                    <h1 id="introduction">Introduction</h1>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-1.jpg"></div>
                <section>
                    <div className="large-6 small-6 columns">
                        <p>Tout contre la peau, le costume révèle le danseur, autant qu’il le protège. Il fait naître des sensations spécifiques, suscite – ou réprime – des postures et des mouvements. Regarder la danse à partir du costume nous invite aussi à approcher différemment le paysage de la création chorégraphique. La fibre, la coupe, la couleur, la lumière, la couture, le pli, le mouvement et le poids, les créateurs doivent prendre en compte chacun de ces éléments...
                        </p>
                    </div>
                    <div style={style}></div>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-2.jpg"></div>
                <section>
                    <h1>Vêtement de scène</h1>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-3.jpg"></div>
                <section>
                    <div className="large-12 small-12 columns">
                        <div className="large-6 small-6 columns">
                            <p>
                                Classiques ou contemporains, les danseurs sont presque toujours vêtus sur scène. Ainsi, le costume est un élément à part entière du spectacle chorégraphie et le fruit d’un travail de création en accord avec le spectacle lui­même et le propos défendu. L’évolution du costume suit l’Histoire, mais aussi la mode, avec laquelle elle flirte souvent, s’en inspirant ou la nourrissant, et selon le développement des techniques et fabrication textile.</p>
                            <p>L’image des corps dansants s’est grandement transformée et diversifiée depuis un siècle. Elle a suivi l’explosion des styles chorégraphiques, qui connaît depuis peu un engouement pour le nu. On oublie l’exubérance du costume de scène au temps du Roi­Soleil ou à la Scala de Milan. La danse a connu l’extravagance du costume. </p>
                        </div>
                        <div className="large-6 small-6 columns vert-photos">
                            <div className="large-4 small-4 columns">
                                <img className="long-vert-img" src="/assets/img/vetement-sonore/oscar-schlemmer.jpg" />
                            </div>
                            <div className="large-4 small-4 columns">
                                <img className="long-vert-img" src="/assets/img/vetement-sonore/alwin-nikolais.jpg" />
                            </div>
                            <div className="large-4 small-4 columns">
                                <img className="long-vert-img" src="/assets/img/vetement-sonore/william-forsythe.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="large-12 small-12 columns names">
                        <div className="large-2 small-2 columns">Marie Wigman 1892</div>
                        <div className="large-2 small-2 columns">Loie Fuller 1893</div>
                        <div className="large-2 small-2 columns">Isadora Ducan 1897</div>
                        <div className="large-2 small-2 columns">Oscar Schlemmer 1922</div>
                        <div className="large-2 small-2 columns">Alwin Nikolais 1959</div>
                        <div className="large-2 small-2 columns">William Forsythe 2010</div>
                    </div>
                    <div className="large-6 small-6 columns vert-photos">
                        <div className="large-4 small-4 columns">
                            <img className="long-vert-img" src="/assets/img/vetement-sonore/marie-wigman.jpg" />
                        </div>
                        <div className="large-4 small-4 columns">
                            <img className="long-vert-img" src="/assets/img/vetement-sonore/loie-fuller.jpg" />
                        </div>
                        <div className="large-4 small-4 columns">
                            <img className="long-vert-img" src="/assets/img/vetement-sonore/isadora-ducan.jpg" />
                        </div>
                    </div>
                    <div className="large-6 small-6 columns">
                        <p>Toutefois, c’est le tutu qui reste dans l’imaginaire collectif le plus célèbre des costumes de danse. Pour beaucoup d’entre nous, c’est l’archétype même de la danseuse et il règne encore aujourd’hui en maître des compagnies classiques.</p>
                        <p>Le corps se dévoile et se dissimule à travers le costume. En effet, par la danse, l’habillement peut constituer deux aspects tout à fait opposés :</p>
                        <p>
                            La danse ainsi que le costume peuvent mettre le corps à nu. Prenons l’exemple du justaucorps, ce vêtement, porté à même la peau, souvent de couleur chair, il est ajusté au corps et ne peut que suivre les courbes et les mouvements de celui­ci ainsi que les mouvements qu’il produit. Le vêtement contribue à la nudité par le fait qu’il apparaît comme une seconde peau. Le corps, à travers la danse se dévoile jusqu’à l’extrême et se dérobe de toutes les façons. Parfois, le danseur est quasi­nu, voire nu. Il est le premier support de création du mouvement.
                        </p>
                        <p>
                            Si le costume peut épouser et dévoiler le corps, il peut aussi le cacher ou même le transformer, et à son tour faire partie de la performance. Il devient vecteur du mouvement et de l’énergie du danseur.
                        </p>
                    </div>
                    <div style={style}></div>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-4.jpg"></div>
                <section>
                    <h1>Matériaux</h1>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-5.jpg"></div>
                <section>
                    <div className="large-6 small-6 columns">
                        <p>
                            On désigne bien souvent par le terme de «bruit», l’intégralité des sons qui nous entourent. Pour certains, le bruit est un son jugé indésirable.
                        </p>
                        <p>
                            Pour les musiciens du courant classique européen, le bruit est un son complexe produit par des vibrations diverses, souvent amorties et qui ne sont pas harmoniques. Le bruit s’oppose, dans ce cadre théorique, à la note de musique. </p>
                        <p>Le bois et l’acier ne racontent pas la même histoire. </p>
                        <p>Une matière sonore nous entoure, sans même que nous nous en apercevions. André Minveille l’a compris. Il est un chanteur français, également percussionniste. C’est aussi un bricoleur sonore. Il crée, avec un sac plastique qu’il frotte dans ses mains, deux cailloux qu’il entrechoque en rythme et un sampler, en live, une nappe musicale de fond sur laquelle l’accordéon, la voix et des percussions maison vont révéler toute la créativité et sublimer un jazz multifacettes.</p>
                        <p>
                            Les cailloux d’André Minveille se taisent, tant qu’il n’y a personne pour les faire se rencontrer, s’entrechoquer. Encore faut­il qu’il y ait quelqu’un pour l’écouter, tendre l’oreille.
                        </p>
                        <p>
                            Chez Cage, compositeur, poète et plasticien américain, né en 1912, la totalité des bruits du monde pendant le temps de l’œuvre en font partie. L’intégration des sons de l’environnement (qui avaient fait leur première apparition avec son oeuvre 4’33’’ notamment) se poursuit dans d’autres œuvres comme Etcetera (1973) ou Etcetera 2/4 Orchestras (1985). L’ensemble de cette évolution artistique tend à ce que Cage nommera plus tard une écologie sonore : une musique permettant d’habiter le monde dans sa totalité et non simplement des morceaux du monde.
                        </p>
                        <div className="vert-photos">
                            <img className="long-vert-img" src="/assets/img/vetement-sonore/IMAGE 2 (2).jpg" />
                        </div>
                    </div>
                    <div className="large-6 small-6 columns">
                        <p>
                            Pour moi, le bruit représente cette matière sonore, qui nous entoure et nous accompagne au quotidien. Il varie en intensité (il peut être fort, faible...) et en sonorité (il peut être aigu, grave, sourd...). Il englobe dans la définition que je m’en fais, les klaxonnes de voiture, et les craquements d’un parquet, le crissement d’une fermeture éclair, le froissement d’un papier de soie, le battement de nos cœurs, le claquement du latex, le tintement des sequins, le cliquètement des broderies métalliques, bourdonnement, fredonnement, chuintement, grésillement, crépitement, froissement, clappement, claquement, crépitement, crissement, grondement, sifflement, ronflement, brondissement, ronronnement... Qu’il soit en nous ou autour de nous, je l’estime être partout.</p>
                        <div className="vert-photos">
                            <img className="long-vert-img" src="/assets/img/vetement-sonore/IMAGE 2 (1).jpg" />
                        </div>
                        <p>
                            Autre exemple : Nantes,‘ESTUAIRE 2009’. Chaque lieu dans une ville est lié aux sons qui participent à son identité. C’est à partir de cette idée que Celeste Boursier­Mougenot (musicien de formation) donne pour titre à son œuvre : From here to Hear (d’ici à l’oreille). L’artiste a transformé les halles du Bouffay en un instrument de musique aléatoire dans lequel la composition est inventée par le déplacement de 30 oiseaux : des Mandrins. Ils se déplacent et se déposent de manière aléatoire sur 5 guitares électriques qui font office de perchoirs. </p>
                        <p>Chaque mouvement est l’occasion de sons ou d’accords nouveaux. Ils créent ainsi une composition sonore hasardeuse, guidée uniquement par la façon dont l’artiste a ‘ESTUAIRE 2009’. Chaque lieu accordé les instruments de sa vaste volière. Le mouvement des visiteurs, l’effroi qu’ils provoquent, l’effet des bruits de la ville sur l’émotion des oiseaux va influencer leurs déplacements. Si l’on s’attache à décortiquer cette œuvre, on observe l’existence d’une matière sonore encore inerte : les guitares électriques. Un corps en mouvement : celui des oiseaux. Enfin, un élément perturbateur, une action qui va mettre la machine en marche : le déplacement des visiteurs.</p>
                        <p>Si l’on applique ce raisonnement à mon projet professionnel dont ce site internet est l’objet, voilà ce qui en résulte : on observera l’existence d’une matière sonore encore inerte : celle qui compose le vêtement de scène. Un corps en mouvement : celui du danseur. Enfin, un élément perturbateur, une action, qui va mettre la machine en marche : l’acte de danser. C’est une relation de cause à effet entre une matière à potentiel sonore encore inexploitée et un geste, une action qui va libérer la parole de ce matériau.</p>
                    </div>
                    <div style={style}></div>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-6.jpg"></div>
                <section>
                    <h1>Volume</h1>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-7.jpg"></div>
                <section>
                    <div className="large-6 small-6 columns">
                        <p>Évoquer le costume de danse suppose de traiter les liens qui se tissent entre le vêtement et le mouvement. La poésie du geste se déploie : contraint ou accompagné, imposé, permis et amplifié, bloqué, dirigé. Le vêtement de scène peut avoir un impact sur la liberté de se mouvoir. C’est en effet une de ses fonctions.</p>
                        <p>Prenons quelques exemples :</p>
                        ­
                        <p> - Le costume de la danseuse de ballet classique : Tutu, tulle, pointes et coiffure constituent un ensemble d’attributs définissant très clairement l’identité de la danseuse classique.</p>
                        <p>Ainsi, le costume, au­delà de sa dimension esthétique, remplit une fonction précise : permettre à la danseuse d’effectuer des gestes «plus» virtuoses, des gestes inscrits dans un code.</p>
                        <p>Nous sommes en présence d’une cohérence «académique» entre le costume, le corps et le mouvement.</p>
                        ­
                        <p>Le costume du Faune : met en exergue le caractère animal et sensuel du faune ; il ne renvoie pas à un code reconnaissable d’emblée mais donne une identité de sens. Un collant académique peint et laissant apparaître des tâches, des sandales évoquant des sabots, une petite queue et coiffe avec des oreilles pointues. Dans ce cas, les différents éléments du costume mettent en évidence une identité précise : le danseur est un animal, le Faune. Le costume ne semble pas entraver le corps dans le mouvement, il est une seconde peau, ce qui renforce cette idée d’animalité.</p>
                    </div>
                    ­<div className="large-6 small-6 columns">


                        <p>Le costume non­académique caractérise de manière caricaturale le personnage qu’il représente, mais en plus, joue un autre rôle, décisif, parce qu’il autorise ou interdit certains mouvements. Le danseur semble supporter une sculpture volumique de grande dimension. Son corps est quasiment enveloppé dans la structure qui semble être un assemblage d’éléments. L’ensemble évoque une sculpture qui relève du cubisme. Les jambes apparaissent dans un costume conventionnel laissant supposer que le danseur peut se déplacer. Le haut du corps semble, lui, limité dans sa gestuelle.</p>
                        <p>Le corps du danseur est transformé et s’inscrit dans une démesure. Le danseur devient le manipulateur d’un objet. Le danseur est corps et décor ; c’est un hybride (corps objet), une sculpture vivante. L’ensemble tend alors à composer une forme plastique abstraite. L’originalité de l’utilisation d’un costume «extra» ordinaire, réside dans le fait qu’il soumet le mouvement à des contraintes spécifiques (lourdeur et démesure du costume dans cet exemple) qui obligent le danseur et /ou le chorégraphe à trouver des solutions corporelles inédites. Le corps joue avec les lois de l’équilibre et du déséquilibre. La notion de contrainte offre de nouveaux possibles.</p>
                        <p>Nous sommes en présence d’une cohérence entre le costume, le corps et la création du mouvement par rapport à une volonté artistique précise.</p>
                        <p>Pour conclure la réflexion autour de ces exemples, on peut remarquer que le costume, est investi de manière différente dans les trois schémas : costume «code», costume «sens», et un «costume «contrainte». Je m’intéresse aux propriétés sonores des matériaux qui composent notre quotidien.</p>
                    </div>
                    <div className="large-12 small-12 columns">
                        <div className="vert-photos">
                            <div className="large-4 small-4 columns">
                                <img className="long-vert-img " src="/assets/img/vetement-sonore/IMAGE 3 (1).jpg" />
                                <p>Le Lac des cygnes de Tchaïkovski, 1977</p>
                            </div>
                            <div className="large-4 small-4 columns">
                                <img className="long-vert-img" src="/assets/img/vetement-sonore/IMAGE 3 (3).jpg" />
                                <p>L'Après­midi d'un faune de Vaslav Nijinski, 1912</p>
                            </div>
                            <div className="large-4 small-4 columns">
                                <img className="long-vert-img" src="/assets/img/vetement-sonore/IMAGE 3 (2).jpg" />
                                <p>Ballet triadique de Oskar Schlemmer, 1922</p>
                            </div>
                        </div>
                    </div>
                    <div style={style}></div>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-8.jpg"></div>
                <section>
                    <h1>Histoire du son dans le vêtement.</h1>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-9.jpg"></div>
                <section>
                    <div className="large-6 small-6 columns">
                        <p>
                            Le vêtement que je fabrique permet à l’état sonore naturel des matériaux utilisés lors de la création, d’être manipulé, amplifié, etc...
                        </p>
                        <p>
                            Les bruissements qui se dégagent de nos vêtements, ne sont jamais totalement absents. Toutefois, ils sont plus facilement identifiables à certains moments clés de l’histoire du costume.

                        </p>
                        <p>
                            Tracer cette évolution magnifie finalement son importance, tout en expliquant en même temps son statut souvent négligé par les nuances de sa fonction.
                        </p>
                        <div className="vert-photos">
                            <img className="long-vert-img" src="/assets/img/vetement-sonore/IMAGE 4.jpg" />
                        </div>
                    </div>
                    <div className="large-6 small-6 columns">

                        <p>
                            Une soudaine prolifération basée sur la relation sens­objet dans la poésie, la musique et les arts visuels pendant la Renaissance montre une prise de conscience collective de l’expérience sensorielle. Le seizième siècle est appelé «l’âge de l’oreille». A cette époque, le monde était plus calme ; en l’absence d’électricité et de la technologie moderne, les paysages sonores étaient définis par le ronflement de l’eau et le bourdonnement de la conversation courante. Dans une société analphabète les repères sonores avaient une forte influence sur le quotidien. Les informations se propageaient phonétiquement. Les cloches des églises ont été le fondement, la base essentielle de la vie quotidienne. Elles étaient un repère dans le temps mais aussi un repère géographique car elles déterminaient les frontières, les signalisations quotidiennes, les événements saisonniers, mais aussi la structure de la vie spirituelle.
                        </p>

                    </div>
                    <div className="large-6 small-6 columns">
                        <p>
                            En bref, les sons étaient plus perceptibles et les auditeurs plus sensibles. L’étude du bruissement des vêtements pendant la Renaissance doit prendre en compte le puissant rapport à la fidélité et la sainteté qui régnait en maître dans le quotidien de cette époque. On la désigne souvent comme étant celle où la mode est née. Elle était alors définie comme une institution mue par le cycle des tendances. Cette ère a connu une préoccupation accrue pour l’expérimentation vestimentaire. Les coutures innovantes voient le jour, ainsi que des volumes complexes et de nouvelles formes. Imaginez une robe, en couche épaisse au sein de laquelle étaient incrustées des réseaux de grilles (élaborées par les artisans ferronniers) ainsi que des pierres précieuses... N’importe quel mouvement dans un vêtement de ce type doit avoir été remarquable pour ses qualités sonores. On observe une expansion vestimentaire volumique à la périphérie du corps humain, notamment avec l’apparition des vertugadins (élément du costume féminin, sorte de crinoline espagnole). Mais également une évolution sonore à travers les chaînes et les pointes en métal qui se font de plus en plus nombreuses dans la création. Ces dernières rappellent les bruyantes armures de guerre...

                        </p>
                        <p>

                        </p>
                        <p>

                        </p>
                        <p>

                        </p>
                        <p>

                        </p>
                        <p>

                        </p>

                        <p>
                        </p>
                    </div>
                    <div className="large-6 small-6 columns">
                        <p>
                            Anne Teresa De Keersmaeker est danseuse et chorégraphe belge flamande. Elle est une figure majeure de la danse contemporaine belge et mondiale. Elle s’est imposée au début des années 1980 grâce à sa volonté de renouveler le lien intense entre danse et musique. Elle déclare : « Il y a dans cette musique, un rapport de connivence aussi étroit entre le son et le silence qu’il y en a, pour moi, entre le mouvement et l’immobilité. J’y vois aussi une très grande économie de moyens, un désir d’austérité, de lenteur ». Ce désir d’austérité et une sécheresse apparente qui cherchent cependant « à faire jaillir la vie ». En 2008, elle réalise un « virage » dans son processus de création en écrivant une pièce, The Song, bâtie autour du silence et de quelques bruitages dont la structure repose autour de l’espace scénique, des lumières et du seul mouvement des corps.
                        </p>
                        <p>
                            En m’intéressant aux propriétés sonores des matières, le textile devient instrument et le danseur musicien. Ainsi le rythme sonore émane du rythme chorégraphié.
                        </p>
                        <p>
                            Le corps est devenu créateur de bruissement dans le mouvement. Danser le silence ? Une histoire où le silence a tout simplement la parole...
                        </p>
                    </div>
                    <div style={style}></div>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-10.jpg"></div>
                <section>
                    <h1>Espace</h1>
                </section>
                <div className="vs-img-holder" data-image="/assets/img/cd-slide-5.jpg"></div>
                <section>
                    <div className="large-6 small-6 columns">
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
                    </div>
                    <div className="large-6 small-6 columns">
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
                    </div>
                    <div className="large-12 small-12 columns">
                        <img className="section-img center columns" src="/assets/img/IMAGE 5.jpg" />
                    </div>
                    <div style={style}></div>
                </section>
            </div>



        );
    }
});

export default VetementSonore;
