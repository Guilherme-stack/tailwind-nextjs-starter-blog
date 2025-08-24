interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
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
]

export default projectsData
