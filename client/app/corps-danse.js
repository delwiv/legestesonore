import React    from 'react';
import $        from 'jquery';
import _        from 'lodash';

var CorpsDanse = React.createClass({
    componentDidMount: function() {
        $('.imageHolder').removeClass('hidden');
        $('.img-holder-img').removeClass('hidden');
        $('.pageContent').removeClass('large-9');
        $('.pageContent').removeClass('small-9');
        if(!$('.img-holder-img').length){
            $('.img-holder').imageScroll({
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
            <div className="corpsDanse large-12 small-12 columns" id="corpsDanse">
                <div className="img-holder" data-image="/assets/img/cd-slide-12.jpg"></div>

                <section>
                    <h1 id="introduction">Introduction</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd-slide-1.jpg"></div>
                <section>
                    <ul>
                        <li className="large-6 small-6 columns">
                            <p>Le corps est ce qui nous fait vivre, exister. C’est à travers lui que l’individu s’exprime. La gestuelle, les postures et autres mimiques constituent notre premier langage. Il est l’un de nos moyen de communication.</p>
                            <p>Dans le cadre de ce projet professionnel, je porte mon attention sur l’aspect artistique du mouvement, la pratique de la danse.</p>
                            <p>L’organisme n’est jamais très silencieux ; nos articulations grincent, craquent, nos cœurs battent, et l’air que nous inspirons semble déferler d’une voix stridente dans nos poumons.
                            </p>
                        </li>
                        <li className="large-6 small-6 columns">
                            <p>
                                Tous ces rythmes physiques, dont on a souvent perdu la subtilité, sont en fait une assurance de la vie elle­même, un signal de notre vitalité la plus incontestable et fascinante.</p>
                            <p>Je porte mon attention sur le bruissement qui résulte de la manipulation d’une matière. Je m’intéresse aux propriétés sonores des matériaux qui composent notre quotidien. Je souhaite que mon projet permette à un corps en mouvement de donner vie à une parole nouvelle. Cette parole, c’est celle des matériaux. Elle habillera ce corps et l’accompagnera dans sa performance dansée.
                            </p>

                        </li>
                    </ul>
                    <div style={style}></div>
                </section>

                <div className="img-holder" data-image="/assets/img/cd-slide-2.jpg"></div>
                <section>
                    <h1>Anatomie sonore</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd-slide-3.jpg"></div>
                <section>
                    <div className="large-6 small-6 columns">
                        <p>
                            Chacun des éléments qui constituent notre corps humaine travaille, au quotidien afin de nous maintenir en pleine santé. Toute cette activité à l’intérieur de nos chairs n’est pas si silencieuse que nous le pensons. Le cœur, les dents, le ventre... </p>
                        <p>Notre corps est à l’origine de toutes sortes de bruits. Nos os grincent, notre cœur pulse, bat, et rythme le mécanisme de la machine humaine. Ce tout, représente l’état sonore naturel de notre organisme. </p>
                        <p>Les sons de l’environnement dans lequel nous évoluons ne stimulent pas seulement les tympans de nos oreilles. Ils nous mettent en vibration. </p>
                        <p>Les vibrations sonores, qu’elles soient musique ou bruit, résonnent dans notre corps. Certes les tympans des oreilles entrent en vibration sous l’impact des sons, mais ils ne sont pas les seuls. La peau et les tissus sont également mobilisés par les vibrations sonores. Cette résonance est plus ou moins importante en fonction des caractéristiques du son : sa hauteur, son volume, son timbre. </p>
                    </div>
                    <div className="large-6 small-6 columns">
                    <img class="section-img" src="/assets/img/IMAGE 1.jpg"/>
                    <img class="section-img" src="/assets/img/IMAGE 2.jpg"/>
                        <p>
                            L’artiste Karina van Heck vit et travaille aux Pays­Bas. Ses installations et ses objets sont pour la plupart considérés comme un complément à l’organisme qui peut servir le corps d’une manière esthétique . En 2010, elle commence à expérimenter en combinant l’art, la mode et la technologie et elle réalise « Body Speaker ». </p>
                        <p>Un projet artistique qui transforme les sons du corps en une musique, grâce à une série de capteurs installés sur le corps. Une simple capture de l’état sonore interne du corps. </p>
                    </div>
                    <div style={style}></div>
                </section>
                <div className="img-holder" data-image="/assets/img/cd-slide-4.jpg"></div>
                <section>
                    <h1>Geste musical</h1>
                </section>

                <div className="img-holder" data-image="/assets/img/cd-slide-5.jpg"></div>
                <section>
                    <div className="large-6 small-6 columns">
                        <p>
                            Le geste est un mécanisme vivant et intelligible propulsé par une énergie à l’intérieur d’un être.
                        </p>
                        <p>Le geste musical est un des phénomènes les plus complexes de l’expression humaine ; il relève de réactions synchrones diverses et variées. Chez l’homme, différents gestes contribuent ainsi à l’éclosion de toutes sortes de sons vivants qui nous entourent ou agissent en nous, bien que chacun d’eux ne revête pas la même importance.</p>
                        <p>C’est le travail de la perception et de l’organisation du matériau sonore (capté ou imaginé par chacun) qui permet d’explorer leurs différentes possibilités et de leur donner un sens musical.</p>
                    </div>

                    <div className="large-6 small-6 columns">
                        <p>
                            Bien que tout geste soit caractérisé par l’expression d’un mouvement, d’un rythme, d’une durée, d’une densité et même d’une sonorité, il n’est pas pour autant un geste musical automatique.</p>
                        <p>
                            C’est seulement par des interactions et le principe de complémentarité que les gestes jouent un rôle primordial dans l’expression sonore du corps.
                        </p>
                        <p>
                            Autrement dit, ne devient musique que le résultat d’un agencement approprié de sons et de silences, répondant aux critères musicaux admis dans une culture donnée. Taper des mains ou des pieds, s’agiter, se secouer, frapper avec un objet une surface, gratter, pincer ou frotter un corps constituent des exemples de gestes qui produisent des «sensations» et des sons différents.
                        </p>
                        <br/>
                        <br/>
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
                    </div>
                    <div style={style}></div>
                </section>
                <div className="img-holder" data-image="/assets/img/cd-slide-6.jpg"></div>
                <section>
                    <h1>Chorégraphie</h1>
                </section>
                <div className="img-holder" data-image="/assets/img/cd-slide-7.jpg"></div>
                <section>




                    <div className="large-6 small-6 columns">
                        <p>
                            La danse est un moyen de communiquer : par «le langage du corps», elle est un instrument physique ou un symbole permettant d’exprimer ses sentiments et ses pensées ; les mouvements corporels devenant des symboles que les membres de la société comprennent et dont le but est de représententer des expériences du monde extérieur et psychique.
                        </p>
                        <p>
                            Intimement liés, musique, danse, corps et espace sont des éléments bien souvent indissociables d’une performance commune qui se construit dans des interactions complexes. Improvisation, temps musical, processus de création, mise en scène, mise en mouvement, rituel, sont autant de mécanismes sociaux, culturels, cognitifs, corporels et émotionnels nécessitant une réflexion anthropologique et technique à mener conjointement dans la création d’une chorégraphie.
                        </p>

                        <img class="section-img" src="/assets/img/IMAGE 3.jpg"/>

                    </div>

                    <div className="large-6 small-6 columns">

                        <p>
                            J’ai porté mon attention sur la pensée de Merce Cunningham. Ce chorégraphe américain a bouleversé les codes de la danse moderne et posé les bases de la danse contemporaine telle que nous la connaissons aujourd’hui. Il sépare la danse de la musique.
                        </p>
                        <p>
                            La chorégraphie ne suit plus le rythme de la musique, mais est définie par un temps précis. La danse compose alors sa propre musique et chaque geste, chez Cunningham, peut être perçu comme une note. Le spectateur est entraîné par le rythme des pas des danseurs. Au cours de sa carrière, il va de plus en plus déconstruire le mouvement. Il utilise le hasard pour composer certaines danses. Cela lui permet de prendre des décisions esthétiques de manière objective et impersonnelle. On peut dire que ce moyen d’arriver à la création, non par intuition, instinct ou goût personnel, a été une sorte de point de non­retour dans sa conception chorégraphique. Le but de sa danse est de donner à voir le mouvement et son organisation dans l’espace et dans le temps. Il n’y a pas de sens caché dans les chorégraphies de Cunningham et c’est à chacun de trouver son chemin dans son œuvre.
                        </p>
                        <p>
                            Robert Swinston déclare en parlant d’une de ces créations représentée par ‘Le Théâtre du Silence’ (une compagnie de danse créée en 1972 par Jacques Garnier et Brigitte Lefèvre) : «Il n’y a pas d’histoire, mais il se passe des choses, et on a, en tant que spectateur, le sentiment que quelque chose peut jaillir, un fracas, un hasard. On ne pense pas, on ressent.»
                        </p>
                    </div>

                    <div className="large-12 small-12 columns">

                        <img class="section-img" src="/assets/img/IMAGE 4.jpg"/>

                        <p>
                            Dans les années 90, l’intérêt de Cunningham pour les technologies contemporaines le pousse à découvrir le logiciel informatique "Lifeforms" mouvements qui lui donne de nouvelles possibilités chorégraphiques. En 1999, il crée Biped dans lequel les danseurs dialoguent avec leur propre image grâce à des capteurs placés sur leur corps et une projection vidéo sur scène.
                        </p>
                    </div>


                    <div style={style}></div>

                </section>
                <div className="img-holder" data-image="/assets/img/cd-slide-8.jpg"></div>
                <section>
                    <h1>Temps</h1>

                </section>
                <div className="img-holder" data-image="/assets/img/cd-slide-9.jpg"></div>
                <section>

                <div className="large-6 small-6 columns">
                    <p>
                        Il est important dans la pratique de la danse de ne pas dissocier les composants de celle­ci. Parce que la danse est, la plupart du temps associée à de la musique, il faut considérer dans sa compréhension les notions du temps, du silence, du phrasé, du rythme et de la durée. Ces derniers ont longtemps été indissociables.
                    </p>
                    <p>
                        La musique et la danse ont beaucoup d’éléments communs, en premier lieu bien entendu le déroulement dans le temps, la régularité de la pulsation, la périodicité des formules rythmiques, mais également la dynamique (différenciation de la force), l’espace (configuration spatiale des exécutants) et le corps humain (voix du chanteur et de l’instrumentiste, mouvements du danseur).
                    </p>
                    <p>
                        Plus que des éléments communs, c’est une véritable intimité qui lie la musique instrumentale à la danse. André Schaeffner dans «Origine des instruments de musique» n’hésite pas à rappeler que «la musique instrumentale, en ses formes les plus primitives, suppose toujours la danse : elle est danse. L’homme frappe le sol de ses pieds ou de ses mains, bat son corps en cadence, sinon l’agite en partie ou en entier afin de mouvoir les objets et ornements sonores [les sonnailles] qu’il porte.»
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
                <div className="img-holder" data-image="/assets/img/cd-slide-10.jpg"></div>
                <section>
                    <h1>Espace</h1>

                </section>
                <div className="img-holder" data-image="/assets/img/cd-slide-11.jpg"></div>
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

                        <img className="section-img center columns" src="/assets/img/IMAGE 5.jpg"/>
                    </div>

                    <div style={style}></div>
                </section>



            </div>

        );
    }
});

export default CorpsDanse;
