var indexDescriptions = [
    {
      "name": "PIB Nominal",
      "source": "https://data.imf.org/?sk=4c514d48-b6ba-49ed-8ab9-52b0c1a0179b",
      "date": "2019",
      "OrganismName": "Fond Monétaire International",
      "presentation": "Le PIB nominal d’un pays correspond à l’addition de la valeur de la consommation, des dépenses de l’État, des investissements et des exportations de ce pays, à laquelle on soustrait les importations sur un an. Cette valeur est exprimée en dollar. Le fait que ce PIB soit “nominal” indique que cette valeur est exprimée selon la valeur du dollar de l’année en cours. La variation des prix n'est pas prise en compte. Il ne serait par exemple pas pertinent de comparer le PIB nominal d’un pays en 2020 à celui qu’il affichait en 1990. Pour ce type de comparaisons, privilégier les PIB réels.",
      "organismDescription": "Le Fond Monétaire International (FMI) en anglais IMF (International Monetary Fund) est une institution internationale qui regroupe 190 pays du monde. Elle s’est donnée pour objectifs d’encourager les coopérations monétaires, d’assurer la stabilité financière, de réduire la pauvreté et d'encourager une économie soutenable à travers le monde. Le siège du FMI est à Washington. L’institution est parfois critiquée pour ses positions libérales favorisant généralement l’ouverture et la diminution de l’emprise des États sur les marchés.",
      "other": "Le PIB ne mesure la richesse qu’à travers le prisme des transactions monétaires. Le travail bénévole, les tâches domestiques, le marché noir ou bien les services rendus par les écosystèmes ou la biodiversité par exemple ne sont pas pris en compte. De plus, cet indicateur n’intègre aucun facteur social comme le niveau d'éducation ou la mesure des inégalités. Le PIB nominal des pays est mesuré par plusieurs institutions internationales dont les Nations Unies ou la Banque Mondiale. Son calcul peut varier d’une institution à une autre. Il existe sous de nombreuses variantes : PIB réel, PIB par habitant, PIB vert …"
    },
    {
      "name": "Devise",
      "source": "https://www.xe.com/fr/symbols.php",
      "date": "2020",
      "OrganismName": "XE.com",
      "presentation": "La monnaie remplit généralement trois fonctions : fournir une unité de compte commune, garantir une réserve de valeur relativement stable et permettre un intermédiaire d’échange. La norme ISO 4217 identifie chaque devise par un identifiant unique à trois lettres. Cette norme permet de contourner des problèmes d’homonymie entre certaines devises. Il n’existe à notre connaissance pas de norme reconnue répertoriant l’ensemble des symboles associés aux monnaies. Toutefois, le site XE.com propose une liste non exhaustive des symboles associés à différentes monnaies. ",
      "organismDescription": "L’organisme fournissant les normes dites ISO est L’organisation internationale de normalisation. Il s’agit d’une organisation non gouvernementale internationale qui rassemble 165 pays du monde et dont le siège social est basé à Genève. L’organisation est subdivisée en 201 comités techniques spécialisés dans des domaines différents (photographie, acoustique, hydrométrie etc.). XE.com est quant à elle une entreprise privée basée à Newmarket au Canada. Elle a été intégrée à Euronet en 2015.",
      "other": "Nombre d’autres services proposent des listes de correspondances entre symboles et devises. La norme ISO 4217 est globalement celle qui prévaut dans la désignation des monnaies. "
    },
    {
      "name": "Indice de Gini",
      "source": "https://datacatalog.worldbank.org/dataset/poverty-and-equity-database",
      "date": "07/10/2020 (au plus récent)",
      "OrganismName": "Banque Mondiale",
      "presentation": "L’indice de Gini est un outil statistique qui permet d’évaluer la répartition d’une série ou d’une variable. Il est utilisé dans le cas présent pour mesurer les inégalités de richesse au sein des pays. Souvent présenté en ratio (variant de 0 à 1), il est ici présenté en pourcentage (variant de 0 à 100). Un pays qui présenterait un indice de Gini égal à 0 serait parfaitement égalitaire : chaque personne détiendrait exactement la même quantité de richesse. En revanche un pays présentant un indice de 100 serait parfaitement inégalitaire : une personne détiendrait l’ensemble des richesses du pays. ",
      "organismDescription": "La Banque mondiale est une institution financière internationale qui accorde des prêts aux pays en développement. Elle regroupe 189 pays membres. Elle s’est donnée pour objectif de faire passer la part de la population mondiale vivant avec moins de 1,90 USD par jour sous la barre des 3 % d'ici 2030. Son siège social est à Washington. Les 13 présidents qui se sont succédé à sa tête depuis sa création en 1945 étaient tous de nationalité américaine. Tous les ans, la Banque mondiale publie une étude nommée World Development Report dans laquelle elle détaille un aspect particulier du développement économique. Le rapport de 2019 portait sur les changements de la nature du travail (The Changing of work). ",
      "other": "Il existe de nombreuses autres façons de mesurer les inégalités de richesse. Parmi les plus répandues figurent : le ratio de Palma, le P90/P10 ou encore le S80/S20.  Le S80/S20 est le rapport entre le revenu moyen des 20 % les plus riches et des 20 % les plus pauvres. Le P90/P10 est le rapport entre la valeur limite supérieure du neuvième décile (c'est-à-dire les 10 % des personnes ayant le revenu le plus élevé) et celle du premier décile. Le ratio de Palma est la part de l'ensemble des revenus perçus par les 10 % de personnes ayant le revenu disponible le plus élevé divisée par la part de l'ensemble des revenus perçus par les 40 % de personnes ayant le revenu disponible le plus faible."
    },
    {
      "name": "Revenu médian annuel",
      "source": "https://news.gallup.com/poll/166211/worldwide-median-household-income-000.aspx",
      "date": "16 décembre 2013",
      "OrganismName": "Gallup Organization",
      "presentation": "Le revenu médian annuel est exprimé en dollar et correspond à la somme perçue avant impôt. La valeur médiane est à privilégier car elle n’est pas soumise à des effet d’étirement dûs aux valeurs extrêmes contrairement à la valeur moyenne. La valeur médiane correspond à la valeur qui se situe exactement au centre de l’échantillon lorsque celui-ci est trié par ordre croissant ou décroissant. ",
      "organismDescription": "The Gallup Organization est un institut de sondage américain privé fondé en 1958. Il fournit de 2006 à 2010 les sondages Flash Eurobaromètre pour la Commission européenne. Son siège social est à Washington. ",
      "other": "Les revenus médians et moyens peuvent être calculés par tête ou par foyers."
    },
    {
      "name": "Liberté de la presse",
      "source": "https://rsf.org/fr/classement",
      "date": "2020",
      "OrganismName": "Reporters Sans Frontières",
      "presentation": "L’indice tente de mesurer le degré de liberté de la presse dans chacun des 180 pays qui sont évalués. Cette mesure s’appuie sur le résultat d’un sondage qualitatif recueilli auprès d’experts dans chacun de ces pays et d’une évaluation quantitative des exactions commises à l’encontre de ceux-ci. Le questionnaire est composé de 87 questions et disponible dans 20 langues différentes. Sont pris en compte : le pluralisme, l’indépendance des médias, l’environnement et l’autocensure, le cadre légal, la transparence, les infrastructures et les exactions. La valeur de l’indice est comprise entre 0 et 100 : 0 représente la meilleure note qu’il est possible d’obtenir et 100 la pire. RSF établit 5 niveaux de hiérarchisation en fonction du score obtenu : situation bonne (de 0 à 15), situation plutôt bonne (de 15 à 25), situation problématique (de 25 à 35), situation difficile (de 35 à 55) et situation très grave (de 55 à 100).",
      "organismDescription": "Reporter sans frontières est une organisation non gouvernementale internationale fondée en 1985. Elle est reconnue d’utilité publique en France en 1995. Elle tente de promouvoir la liberté de la presse à travers le monde. Son siège social est à Paris. L’indice de liberté de la presse est reconnu par des médias d’importance et parfois cité par les Nations Unies ou la Banque mondiale. Après avoir acquis le statut d’ONG associée à l'UNESCO en 1996, ce statut lui est retiré sur une demande du Vénézuela et du Pérou le 6 mars 2012. RSF est cependant toujours en lien avec l'UNESCO sous le statut de consultant.   ",
      "other": "Néant."
    },
    {
      "name": "Niveau démocratique",
      "source": "http://www.eiu.com/topic/democracy-index",
      "date": "2019",
      "OrganismName": "The Economist",
      "presentation": "L’indice de démocratie tente de mesurer le niveau démocratique de chacun des 167 pays qui sont évalués à travers une variable variant de 0 à 10. 0 représente un régime hypothétique dans lequel aucune liberté individuelle ne serait permise et 10 une démocratie parfaite. Cet indice est publié annuellement depuis 2008. Le calcul est établi sur 60 critères distincts répartis en 5 catégories : le processus électoral et le pluralisme, les libertés civiles, le fonctionnement du gouvernement, la participation politique et la culture politique. The Economist établit 5 régimes distincts en fonction du score obtenu : démocratie pleine (de 10 à 8), démocratie incomplète (de 8 à 6), régime hybride (de 6 à 4) et régime autoritaire (de 4 à 0). Bien évidemment,  hiérarchiser les démocraties est une entreprise délicate qui doit être considérée avec précaution.",
      "organismDescription": "The Economist est un journal international renommé se présentant comme un magazine et paraissant de façon hebdomadaire. Son siège social est basé à Londres. Il compte parmi son équipe de rédaction des journalistes du monde entier, la nationalité américaine étant cependant la plus représentée. L’orientation politique du journal est souvent caractérisée comme centriste et libérale. L’économie occupe une place centrale parmi les thématiques abordées par le journal mais sont aussi discutés la politique, les sciences et les arts. Une des particularités du journal est qu’aucun article (sauf exception) n’est signé du nom de son auteur. ",
      "other": "The Freedom House, organisation non gouvernementale (ONG) financée par le gouvernement américain et basée à Washington évalue également le niveau de démocratie des pays du monde à travers une autre méthodologie de calcul. "
    },
    {
      "name": "Perception de la corruption",
      "source": "https://www.transparency.org/en/cpi/2019/press-and-downloads",
      "date": "2019",
      "OrganismName": "Transparency International",
      "presentation": "L’indice de perception de la corruption est étalonné de 0 à 100. 0 est le score le plus faible qu’il est possible d’obtenir, 100 le meilleur. Il n’est conçu que pour mesurer la corruption au niveau du secteur public. Cet indice est en réalité un agrégat de nombreux autres indices mesurés par d’autres institutions notamment : le Sustainable Governance Indicator (Bertelsmann Stiftung), le Country Risk Service Indicator (Economist Intelligence Unit), The World Bank’s IDA Resource Allocation Index (Banque mondiale) et d’autres. Le calcul harmonise les différentes échelles utilisées par ces indices afin de restituer une variable variant de 0 à 100. La corruption est par essence un phénomène qu’il est difficile de détecter et il n’existe logiquement pas de données officielles publiées par les États à ce sujet. D’autre part, la corruption n’est pas uniforme au sein d’un pays. Elle peut varier localement d’une ville à une autre par exemple ou en fonction du secteur d’activité ou du milieu social. D’autre part, elle peut être plus ou moins bien acceptée par les individus au sein de ces milieux. ",
      "organismDescription": "Transparency International est une organisation non gouvernementale internationale. Son siège social est basé à Berlin. L’utilisation d’indices extérieurs fournis par d’autres institutions lui a parfois été reprochée considérant que cela remettait en cause son indépendance. Toutefois, l’indice de perception de la corruption (IPC) reste largement cité et utilisé par les organismes internationaux et les entreprises. ",
      "other": "Il est naturellement possible de consulter l’ensemble des indices utilisés par Transparency International de façon indépendante. "
    },
    {
      "name": "Langue officielle",
      "source": "https://github.com/annexare/Countries",
      "date": "2020",
      "OrganismName": "GitHub",
      "presentation": "La langue présentée ici est la langue officielle la plus parlée dans le pays. Attention toutefois, certains pays présentent plusieurs langues officielles. En parallèle existent des langues régionales, des dialectes et des langues étrangères qui peuvent être parlées par les populations.",
      "organismDescription": "Ces données sont issues d’un projet collaboratif publié sur Github. 1200 personnes utilisaient cette base de données à la date du 29 décembre 2020. Le projet est ouvert aux contributions et aux corrections.",
      "other": "La page Wikipedia en langue anglaise présente également une liste relativement exhaustive des langues parlées au sein de différents pays du monde. Consulter : List of official languages by country and territory."
    },
    {
      "name": "Espérance de vie",
      "source": "https://apps.who.int/gho/data/node.country",
      "date": "2020 (au plus récent)",
      "OrganismName": "Organisation Mondiale de la Santé",
      "presentation": "L’espérance de vie est utilisée pour les projections démographiques ainsi que pour mesurer le niveau de développement d’un pays. L’indice présenté ici est la moyenne de l’espérance de vie d’une femme et de celle d’un homme pour chacun des pays évalués, l’espérance de vie étant généralement légèrement différente en fonction du sexe. Elle se distingue de la moyenne des âges au moment du décès car elle n’est pas dépendante de la répartition des âges au sein d’une population. C’est une projection. Cet âge correspond à l’âge moyen qu’une génération peut espérer atteindre si les conditions de vie se maintiennent dans l’état où elles se trouvaient au moment du calcul de l’espérance de vie. La guerre ou le progrès médical sont des facteurs qui peuvent venir perturber en bien ou en mal cette espérance.",
      "organismDescription": "L’organisation mondiale de la santé (OMS) est l’organisme chargé de la santé publique au sein de l’organisation des Nations Unies (ONU). Son siège est à Pregny-Chambésy, en Suisse. L’OMS compte 194 États membres et a pour objectifs de maximiser l’état de santé physique et psychique des populations. Son budget est fixé sur une période de deux ans et comprend une part de contribution fixe et une part de contribution volontaire par État. Le budget pour la période 2018-2019 s’élevait à 5,62 milliards de dollars. L’OMS reçoit également de l’argent de fondations et d’organismes privées. Sur la période 2018-2019, la Fondation Bill & Melinda Gates était par exemple le second contributeur derrière les États-Unis.  ",
      "other": "Comme indiqué précédemment, il peut être judicieux de consulter également la moyenne des âges au moment du décès. Il peut également être pertinent de mesurer l’espérance de vie en fonction des classes socio-professionnelles. "
    },
    {
      "name": "Mortalité Infantile",
      "source": "https://www.cia.gov/library/publications/the-world-factbook/rankorder/2091rank.html",
      "date": "2017",
      "OrganismName": "Central Intelligence Agency",
      "presentation": "La mortalité infantile correspond au nombre moyen d’enfants décédés avant l’âge d’un an pour 1000 naissances au sein d’un pays. Elle est souvent associée au niveau de développement d’un pays parce que les moyens de lutte contre la mortalité infantile sont connus et peu chers : la mortalité infantile est surtout due aux infections, elle disparaît avec les vaccinations et la réduction de la malnutrition. Pendant la première semaine, un nouveau-né est particulièrement vulnérable. D’après un rapport de l’OMS publié en 2008 (“Les nouveau-nés : on s’intéresse enfin à eux”), un enfant présente autant de chance de décès pendant la première semaine que pendant la durée totale des 11 mois qui suivent. La réduction du taux de mortalité infantile est comprise parmi les objectifs du millénaire pour le développement établis par l'organisation des Nations Unies. ",
      "organismDescription": "La Central Intelligence Agency (CIA) est une des principales agences de renseignements des États-Unis. Attention, il s’agit d’une source partiale et ses données doivent être prises en compte avec précaution. La CIA a une fonction double. D’une part, elle est chargée de collecter des renseignements sur les États, les entreprises et les individus. D’autre part, elle a pour mission de mener des opérations secrètes pour le compte des États-Unis. Cette seconde mission reste cependant marginale par rapport à la première. La CIA publie annuellement en accès libre le taux de mortalité infantile calculé par pays à travers un rapport nommé : CIA World Factbook. En dépit de la nature de cette organisation, cet indice semble être reconnu par un certain nombre d’institutions internationales dont la Banque mondiale et l’OMS.",
      "other": "Le taux de mortalité maternelle correspondant au nombre de femmes décédées en conséquence ou lors d’un accouchement peut également être un indicateur pertinent pour mesurer l’efficacité des soins obstétriques et pédiatriques d'un pays. La mortalité infantile peut aussi être calculée pour des décès survenus avant l’âge de 5 ans."
    },
    {
      "name": "Alphabétisation",
      "source": "http://uis.unesco.org/",
      "date": "2015",
      "OrganismName": "UNESCO",
      "presentation": "Le taux d’alphabétisation est le pourcentage de la population sachant lire et écrire. L’UNESCO le définit pour 3 tranches d’âge différentes : les adultes (plus de 15 ans), les jeunes (entre 15 et 24 ans), les personnes âgées (plus de 65 ans). L’indice qui est présenté ici est celui correspondant à la population adulte (plus de 15 ans). La dernière tranche d’âge n’est pas forcément pertinente pour des pays où la pyramide des âges ne comprend que très peu de personnes âgées de plus de 65 ans. L’évaluation de la capacité à savoir lire et écrire peut varier d’un pays à l’autre. Elle est généralement limitée à la compréhension d’une déclaration courte de la vie quotidienne. Elle englobe fréquemment la capacité à savoir compter mais se limite à des opérations arithmétiques simples. Dans les pays où une majorité importante de la population a reçu une éducation primaire cet indice n’est pas forcément pertinent car il ne permet pas de discriminer des capacités de lecture et d’écriture plus avancées. Il est fréquent qu’il subsiste des disparités de ce taux d’alphabétisation en fonction du sexe, souvent au détriment des femmes.",
      "organismDescription": "L'Organisation des Nations Unies pour l'Éducation, la Science et la Culture (UNESCO) est une institution des Nations Unies. Son siège est à Paris dans le 7ème arrondissement. Elle s’est donnée pour objectif de favoriser l’accès à l’art, la culture et les sciences à l’ensemble du monde sans distinction de sexe, d’âge, de langue, de religion ou d’appartenance ethnique. Elle rassemble 193 pays membres. ",
      "other": "D’autres indicateurs servent à mesurer “l'excellence académique” : le classement de Shanghai ou les enquêtes TIMSS consacrées aux mathématiques et aux sciences par exemple. "
    },
    {
      "name": "COP 21",
      "source": "https://treaties.un.org/Pages/ViewDetails.aspx?src=TREATY&mtdsg_no=XXVII-7-d&chapter=27&clang=_fr",
      "date": "29 décembre 2020",
      "OrganismName": "Nations Unies",
      "presentation": "La Conférence de Paris de 2015 sur les changements climatiques (COP21) s’est tenue du 30 novembre au 12 décembre 2015. 195 pays sur les 197 que reconnaît l'Organisation des Nations Unies ont signé ou se sont engagés à signer l'accord de Paris sur le climat, c’est une première mondiale pour l’époque. L’accord prévoit trois dispositions majeures. Premièrement, maintenir l'augmentation de la température moyenne mondiale en dessous de 2°C par rapport aux niveaux préindustriels et poursuivre les efforts visant à limiter cette augmentation à 1,5 °C. Ensuite, accroître la capacité d'adaptation aux effets néfastes du changement climatique et favoriser la résilience. Enfin, rendre les flux financiers compatibles avec ces précédents objectifs. L’accord est non contraignant. Les États-Unis ont indiqué leur volonté de se retirer de  l’accord le 4 novembre 2019.",
      "organismDescription": "La liste et les dates de signature, de ratification, d’acceptation, d’approbation et d’adhésion des pays ayant participé à cette conférence est maintenue à jour par les Nations Unies. Il existe des différences juridiques d’implication qui distinguent ces différents types d’engagements. ",
      "other": "Néant."
    },
    {
      "name": "% CO2 monde",
      "source": "https://unfccc.int/resource/docs/2015/cop21/eng/10.pdf",
      "date": "13 décembre 2015",
      "OrganismName": "ONU",
      "presentation": "Cet indice mesure la part de CO2 émis dans l’atmosphère par pays. Il a été établi en 2015 par les Nations Unies lors de la COP 21. Il a été calculé en fonction des données livrées par les pays eux-mêmes. ",
      "organismDescription": "L’Organisation des Nations unies est une organisation internationale regroupant actuellement 193 États membres. Son objectif principal est le maintien de la paix.",
      "other": "Le dioxyde de carbone n’est pas l’unique représentant des gaz à effet de serre. Lorsque cela est possible, il peut être judicieux de consulter la part de l’ensemble des gaz à effet de serre émis par un pays. Certains gaz sont plus nocifs que le CO2 en ce qui concerne le réchauffement climatique, c’est le cas du méthane notamment mais le CO2 reste le gaz à effet serre le plus émis par l’homme.  "
    }
  ]