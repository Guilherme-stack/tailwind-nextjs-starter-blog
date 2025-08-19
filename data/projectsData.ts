interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Análise do Desempenho Escolar das Escolas de Goiânia',
    description: `Insights sobre o desempenho escolar das escolas de Goiânia, utilizando Python para análise de dados e visualização. Através de dados retirados do próprio site da prefeitura de Goiânia, explorei métricas como taxas de aprovação, reprovação e evasão escolar, além de comparar o desempenho entre escolas públicas e privadas. O projeto destaca a importância da análise de dados na educação para identificar áreas de melhoria e promover políticas educacionais mais eficazes.`,
    imgSrc: '/static/images/time-machine.png',
    href: '/blog/analise-do-desempenho-escolar-das-escolas-de-goiania',
  },
]

export default projectsData
