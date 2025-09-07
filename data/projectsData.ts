interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'APRESENTAÇÃO E INSIGHTS DE CAMPANHAS DE MARKETING',
    description: `Projeto fictício de análise e apresentação de insights sobre campanhas de marketing digital em uma empresa.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/apresentacao-e-insights-de-campanhas-de-marketing',
  },
  {
    title: 'GOOGLE TAG MANAGER - RASTREAMENTO DE EVENTOS',
    description: `Projeto de implementação do Google Tag Manager (GTM) para rastreamento de eventos em um site.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/google-tag-manager',
  },
  {
    title: 'ANÁLISE DO DESEMPENHO DAS ESCOLAS DE GOIÂNIA',
    description: `Insights sobre o desempenho escolar das escolas de Goiânia, utilizando Python para
     análise de dados e visualização. Através de dados retirados do próprio site da prefeitura de Goiânia,
      explorei métricas como taxas de aprovação, reprovação e evasão escolar, além de comparar o desempenho 
      entre escolas públicas e privadas. `,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/analise-do-desempenho-escolar-das-escolas-de-goiania',
  },
  {
    title: 'FITLIFE ACADEMIAS',
    description: `A FitLife Academias tem filiais em várias cidades do Brasil. Nosso objetivo é entender melhor
     o comportamento dos alunos para reduzir a evasão (cancelamento de planos) e aumentar a retenção.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/fitlife-academias',
  },
  {
    title: 'TECHWAVE',
    description: `Vendemos produtos como **celulares, notebooks, acessórios e periféricos** em todo o Brasil.
Nosso time de marketing e diretoria querem entender melhor o **comportamento de compra dos clientes** e como 
podemos **aumentar faturamento e recorrência de compras**.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/techwave',
  },
  {
    title: 'DASHBOARD DE VENDAS - META-X',
    description: `Uma rede fictícia de lojas precisa de um dashboard de performance de vendas para a diretoria`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/dashboard-vendas',
  },
]

export default projectsData
