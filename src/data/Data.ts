export const navLinks = [
  {name: 'Sobre',id: 'about'},
  {name: 'Liberdade',id: 'freedom'},
  {name: 'Projetos',id: 'projects'},
  {name: 'Serviços',id: 'services'},
  {name: 'Contato',id: 'contact'},
]
export const heroSection = {
  heading: 'Sua empresa está pronta para o presente?',
  description:
    'Faça parte da nova realidade do mundo, detenha sua própria tecnologia e presença digital! Consolide-se no mercado',
  cta: 'LIBERTE-SE',
  scrollToId: 'freedom'
}
export const aboutSection = {
  //color Scheme
  id: 'about',
  lightBg: false,
  lightText: true,
  //texts
  topLine: 'Tecnologias, branding, marketing e consultoria',
  headLine:
    'Prazer! Somos a ConsoliDados',
  description:
    'Somos uma empresa focada em te proporcionar ferramentas e serviços para que sua empresa possa ter uma presença consolidada no mercado. Aliando desenvolvimento de sites, aplicativos, sistemas de gestão, branding, estratégias de marketing e consultorias de forma que se adaptem a sua empresa, para você possa aplicar novas tecnologias e se transformar digital e tecnologicamente. E acima de tudo, te proporcionamos LIBERDADE.',
  buttonLabel: 'Saiba Mais',
  scrollToId: 'services',
  //image
  imgStart: false,
  img: require('../assets/images/about.svg').default,
  alt: 'Logo da Consolidados',
  //button
  dark: false,
  primary: true,
  darkText: false
}
export const freedomSection = {
  //color Scheme
  id: 'freedom',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  //texts
  topLine: 'Adapte as tecnologias, serviços e redes sociais ao seu negócio e nunca dependa deles',
  headLine:
    'Você é senhor(a) na sua própria casa? ',
  description:
    'Hoje sua empresa utiliza o potencial das redes sociais e serviços de gestão de terceiros, ou depende deles? Não dependa de tecnologias externas, nem de nós. Nosso trabalho e te proporcionar, de forma colaborativa, uma base de tecnologias e conhecimentos para que você possa se adaptar a qualquer mudança no mercado. E adaptar as redes sociais e serviços de terceiros a sua realidade, liberdade para que possa, a qualquer momento, substituí-los. ',
  buttonLabel: 'Saiba Mais',
  scrollToId: '',
  //image
  imgStart: true,
  img: require('../assets/images/rule.svg').default,
  alt: 'Car',
  //button
  dark: false,
  primary: true,
  darkText: true
}
export const projectsSection = {
  //color Scheme
  id: 'projects',
  lightBg: false,
  lightText: true,
  //texts
  headLine:
    'Projetos',
  description:
    'Para cobrir as principais necessidades da maioria dos projetos, nas seções abaixo abordamos as principais características de cada tipo, de pequenos a grandes projetos. Para construir um único site ou mesmo um sistema de gestão completo.',
  //Projects
  projects: [
    {
      lightText: true,
      //texts
      topLine: 'Sites e Blogs, Marketing Digital e Branding.',
      headLine:
        'Base de Lançamento',
      description:
        '<p>Esses projetos têm como objetivo atender empresas que querem começar a ter o seu próprio espaço na internet. E vêem a necessidade, no futuro de poder personalizar toda a experiência na oferta de seus produtos e serviços. <br/> <br/> Para este projeto, partimos do site, materiais de apoio, como templates para marketing em redes sociais e consultorias para que possa fazer a gestão de suas próprias campanhas publicitárias. <br/> <br/> Se sua empresa já possuí um site e uma presença em redes socias, mas nunca deu a devida atenção a estas ferramentas, é por aqui que iniciaremos. Tudo novo, de forma CORRETA. <p/>',
      buttonLabel: 'Saiba Mais',
      scrollToId: '',
      //image
      imgStart: true,
      img: require('../assets/images/small.svg').default,
      alt: 'Car',
      //button
      dark: false,
      primary: true,
    },
    {
      lightText: true,
      //texts
      topLine: 'E-commerce, Painéis administrativos, Integrações e Soluções mais complexas.',
      headLine:
        'Em Orbita',
      description:
        '<p>À medida que as vendas aumentam e o pessoal aumenta, surge uma maior necessidade de automação, desenvolvimento de sistemas de gestão e aplicativos. Os detalhes se tornam mais importantes à medida que o número de visitantes aumenta, e pequenas coisas podem fazer uma grande diferença. <br/> <br/> Esses projetos são uma colaboração estreita entre nossas empresas, onde usamos gerenciamento de projetos inteligente para tomar decisões mais eficientes sobre o consumo de tempo e prioridades durante nossos trabalhos. <br/> <br/> Tudo para que possamos construir juntos uma relevância solida para sua empresa e deixá-la cada vez mais independência de quaisquer outras soluções e sistema. Sua LIBERDADE começa aqui. <p/>',
      buttonLabel: 'Saiba Mais',
      scrollToId: '',
      //image
      imgStart: false,
      img: require('../assets/images/medium.svg').default,
      alt: 'Car',
      //button
      dark: false,
      primary: true,
    },
    {
      lightText: true,
      //texts
      topLine: 'Transformação digital e automação, você no comando.',
      headLine:
        'Ao Infinito e Além',
      description:
        '<p>Quando uma empresa está aqui, percebe que, para obter os melhores resultados possíveis para o seu negócio, a equipe precisa das melhores ferramentas, as quais precisam ser personalizadas. <br/> <br/> Hoje em dia, as pessoas não deveriam trabalhar com tarefas repetitivas e administrativas. No entanto, eles devem ter permissão para usar sua humanidade e criatividade para criar laços fortes com outras pessoas, clientes, fornecedores e, o mais importante, para fazer coisas que são difíceis de automatizar. Pode ser complicado sem ferramentas feitas sob medida, projetadas para ter uma boa experiência dos usuários. <br/> <br/> Somente quando essas ferramentas personalizadas estiverem disponíveis, o potencial do negócio pode ser alcançado. E a produtividade geralmente aumenta, significativamente. <br/> <br/> Essas etapas são grandes e complexas e têm várias dependências complicadas. Portanto, essas colaborações são contínuas e focadas em administrar e resolver problemas de negócios complexos juntos. <br/> <br/> A partir deste momento, saberemos que sua empresa estará pronta para seguir sozinha e nos focaremos em montar equipes necessárias e capacitar seus colaboradores para que essas soluções continuem evoluindo e crescendo juntamente com sua empresa. RELEVÂNCIA, você passará a liderar o mercado.</p>',
      buttonLabel: 'Saiba Mais',
      scrollToId: '',
      //image
      imgStart: true,
      img: require('../assets/images/large.svg').default,
      alt: 'Car',
      //button
      dark: false,
      primary: true,
    },
  ]
}
