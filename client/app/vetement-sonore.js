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
                    ­
                    <div className="large-6 small-6 columns">
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
                    <div className="large-12 small-12 columns">
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
                        </div>
                    </div>
                    <div className="large-12 small-12 columns fullWidth">
                        <p>
                            Une soudaine prolifération basée sur la relation sens­objet dans la poésie, la musique et les arts visuels pendant la Renaissance montre une prise de conscience collective de l’expérience sensorielle. Le seizième siècle est appelé «l’âge de l’oreille». A cette époque, le monde était plus calme ; en l’absence d’électricité et de la technologie moderne, les paysages sonores étaient définis par le ronflement de l’eau et le bourdonnement de la conversation courante. Dans une société analphabète les repères sonores avaient une forte influence sur le quotidien. Les informations se propageaient phonétiquement. Les cloches des églises ont été le fondement, la base essentielle de la vie quotidienne. Elles étaient un repère dans le temps mais aussi un repère géographique car elles déterminaient les frontières, les signalisations quotidiennes, les événements saisonniers, mais aussi la structure de la vie spirituelle.
                        </p>
                    </div>
                    <div className="large-6 small-6 columns">
                        <p>
                            En bref, les sons étaient plus perceptibles et les auditeurs plus sensibles. L’étude du bruissement des vêtements pendant la Renaissance doit prendre en compte le puissant rapport à la fidélité et la sainteté qui régnait en maître dans le quotidien de cette époque. On la désigne souvent comme étant celle où la mode est née. Elle était alors définie comme une institution mue par le cycle des tendances. Cette ère a connu une préoccupation accrue pour l’expérimentation vestimentaire. Les coutures innovantes voient le jour, ainsi que des volumes complexes et de nouvelles formes. Imaginez une robe, en couche épaisse au sein de laquelle étaient incrustées des réseaux de grilles (élaborées par les artisans ferronniers) ainsi que des pierres précieuses... N’importe quel mouvement dans un vêtement de ce type doit avoir été remarquable pour ses qualités sonores. On observe une expansion vestimentaire volumique à la périphérie du corps humain, notamment avec l’apparition des vertugadins (élément du costume féminin, sorte de crinoline espagnole). Mais également une évolution sonore à travers les chaînes et les pointes en métal qui se font de plus en plus nombreuses dans la création. Ces dernières rappellent les bruyantes armures de guerre...</p>
                    </div>
                    <div className="vert-photos large-6 small-6 columns">
                        <img className="long-vert-img" src="/assets/img/vetement-sonore/IMAGE 4.jpg" />
                        <p>Voici un exemple de silhouette : deux cônes inversés qui évoquent un sablier un peu rigide. Le tableau date d'Henri II environ 1530</p>
                    </div>
                    <div className="large-12 small-12 columns fullWidth">
                        <p>
                            La puissance auditive de ‘la robe’ du quatorzième siècle peut encore être justifiée par le potentiel expressif d’un corps en mouvement. Ce dernier est à plusieurs reprises évoqué dans la poésie de cette époque. C’est cette écriture qui a imité les bruits rythmés du corps vêtu : les chaussures tapant sur des pavés ronds, les jupes de soie se balancent dans la foulée, les colliers de pierres précieuses frappant sourdement, doucement contre un corsage. Les images auditives dans les travaux poétiques de Petticoat Julia et Robert Herrick sont nombreuses. Ils font tous deux allusion à la capacité du son à stimuler l’émotion et à nous situer dans une expérience corporelle de mémoire.
                        </p>
                        <p>
                            La fonction sonore du vêtement apparait comme un moyen de s’imposer en société comme quelqu’un d’important (l’ampleur des vêtements de l’époque sert également ce propos) mais pas que, en effet, le vêtement sonore est également un moyen de séduire. En bref, il est un moyen d’être vu, entendu, regardé.
                        </p>
                        <p>
                            L’efficacité du son dans l’expression de l’érotisme à travers la robe devient encore plus évident lors de l’apogée de la mode dite ‘bruyante’ : au dix­neuvième siècle. Après la Renaissance, le potentiel sonore des vêtements continue d’être exploité, mais dans la seconde moitié du XIXe siècle on observe une augmentation notable des allusions aux sons des vêtements.
                        </p>
                        <p>
                            Exemple dans la littérature contemporaine, les mots rattachés au champ lexical du bruit abondent : «frou­frou, bourdonnement, tintement, bruissement, chuintement, grincement, sifflement» et ce pour qualifier des thermes tel que «jupes voluptueuses en soie, taffetas moiré, glacine, crêpe, satin et dentelle». Les descriptions varient considérablement du tempéré : «doux, léger, faible, sensible» ; au rythmique : «agréable, musical, flottement, gracieux, balayant» ; à l’euphorie : «indescriptible, glorieux, captivant, violent, déconcertant».
                        </p>
                        <p>Pourquoi les vêtements furent soudainement si acoustiquement désignés?</p>
                        <p>Trois facteurs sociologiques spécifiques peuvent répondre à cette question.</p>
                        ­
                        <p> - l’assaut de la révolution industrielle</p>
                        ­
                        <p> - les innovations technologiques</p>
                        ­
                        <p> - l’établissement stricte des valeurs bourgeoises</p>
                        ­
                        <p>
                            Ces trois facteurs ont convergé pour créer le cadre idéal afin que l’état sonore naturel des matières puisse devenir le chapitre le plus actif de l’histoire du costume. Le boom de la révolution industrielle a établi un nouveau rythme de vie. Ce dernier a affecté la sensibilité sensuelle et naturelle des organismes. Les inventions les plus percutantes du XIXe siècle étaient parfaitement audibles dans leurs interactions avec le monde : trains, voitures, machines à écrire, aspirateurs et machines à laver. Non seulement l’état sonore du monde a été plus intense, plus fort, mais le sens même du ‘son’ lui­même a complètement changé.
                        </p>
                    </div>
                    <div className="large-6 small-6 columns">
                        <img src="/assets/img/vetement-sonore/IMAGE 5.jpg" />
                        <p>
                            Georges Jules VICTOR peint Frou Frou, 1882.
                        </p>
                    </div>
                    <div className="large-6 small-6 columns">
                        <p>
                            Au XIXe siècle le bruissement d’une jupe est devenu un outil extrêmement utile pour communiquer. La fonction du vêtement sonore apparait par conséquent, comme une preuve de la physicalité et de la personnalité, une manifestation, l’affirmation d’un coup de tête. Cette fonction est paradoxalement subtile dans sa sémiotique, pré­ langage universel, mais également spécifique dans sa délibération. C’est tout ce que la mode s’efforce d’être. Elle se manifeste parfois si subtilement que cela devient presque imperceptible.
                        </p>
                        <p>
                            Peut ­être que ce n’est pas un hasard si une telle expression nuancée de l’individualité se développe pendant cette période.
                        </p>
                        <p>
                            Quelle femme ne s’est pas sentie strictement circonscrite au XIXe siècle ? Telle que définie par des valeurs bourgeoises, chaque expression de la féminité a été codifiée, décidément distincte et opposée à la masculinité. Nulle part cette vérité ne s’est sentie plus profondément que dans la mode. Le ‘son’ lui­même est devenu genré, érotisé, fétichisé et marginalisé.
                            <p>Un exemple de cette affirmation est «Frou Frou». </p>
                        </p>
                        <p>
                            C’est le personnage principale de la pièce populaire de Georges Clairin écrite en 1869. Elle est une héroïne frivole nommée pour le comportement bruyant et enivrante de sa robe, qui sert en fin de compte comme une métaphore de son caractère superficiel et immoral.
                        </p>
                    </div>
                    <div className="large-12 small-12 columns  fullWidth">
                        <p>
                            Tout au long du XXe siècle, une tendance pour le ‘son dans les vêtements’ a surgi. Les robes ornées de perles des jeunes filles délurées des années 1920 ont accompagné les formidables musiques de Jazz. Un défilé de mode voit le jour en 1964 à Los Angeles, grâce à l’initiative du designer Eddy George. Il a eu lieu dans la plus grande chambre anéchoïque du monde, où le «doux chuchotement peut être entendu ... le décor parfait pour les robes qui vont vous catapulter sur la lune». ­ Julie Byrne, Here’s the Sound of Fashion: An Explosion or a Whisper (Los Angeles Times, October 20, 1964.)
                        </p>
                        <p>
                            C’est dans la dernière décennie que les designers textile ont pris conscience de l’importance de s’interroger et de travailler une approche sensorielle du vêtement.
                        </p>
                    </div>
                    <div className="large-6 small-6 columns">
                        <p>
                            Le duo néerlandais Viktor & Rolf ont présenté pour l’Automne/Hiver 2000 une collection de haute couture, probablement la plus remarquable pour son ampleur sonore. Leurs créations, étaient recouvertes d’une épaisse couche de cloches en laiton. Ils ont fait de choix de faire avancer leurs mannequins dans un épais brouillard. Le tintement et les cliquetis de chaque ensemble, si subtiles, si apaisants, furent entendus longtemps avant d’être vus. La collection met en scène l’interaction entre les cloches et les vêtements. Le sens qui se dégage de cette action est que le vêtement est signifiant et un diffuseur d’une information puissante. Le défilé met en valeur la notion que le son entretient un lien étroit avec la mode. Ce projet a réaffirmé que l’expérience sensorielle du vêtement sur un corps en mouvement est un élément à ne pas négliger dans la création.
                        </p>
                        <p>
                            Autre exemple : la performance de Bjork en robe AlexanderMcQueen en 2001. Sa robe se transforme en un instrumentde pulsation et qui fait référence à l’état sonore naturel deson corps, à la vitalité de l’organisme. Cette dernière luipermet de créer un fond sonore lorsqu’elle chante, en quelque sorte, sa robe l’accompagne.
                        </p>
                        <p>
                            De même, le «froissé argenté» fait de sacs poubelle recyclés est une collection de robes de Gareth Pugh, 2013. Elle rappelle l’importance de prendre en compte le sens de l’ouïe lors de la création de la même façon que l’on s’intéresse au toucher, ou à la vue.
                        </p>
                        <img src="/assets/img/vetement-sonore/IMAGE 6 (2).jpg" />
                    </div>
                    <div className="large-6 small-6 columns">
                        <img src="/assets/img/vetement-sonore/IMAGE 6 (3).jpg" />
                    </div>
                    <div className="large-6 small-6 columns">
                        <img src="/assets/img/vetement-sonore/IMAGE 6 (1).jpg" />
                    </div>
                    <div className="large-6 small-6 columns">
                        <p>
                            Les différentes instances du potentiel sonore des matières qui composent les vêtements de notre quotidien, vêtements de scène, depuis la Renaissance jusqu’à nos jours ont éveillé la créativité de certains, développé leur l’imagination. Mais elles représentent encore aujourd’hui un potentiel quasi­inexploité.
                        </p>
                        <p>
                            Finalement, l’acte de faire entendre ce bruit est implicite dans l’expérience et l’interprétation des vêtements. En comprenant la dextérité animée du bruit par son passé, nous pouvons commencer à imaginer, et entendre, son avenir.
                        </p>
                    </div>
                    <div style={style}></div>
                </section>
            </div>

        );
    }
});

export default VetementSonore;
