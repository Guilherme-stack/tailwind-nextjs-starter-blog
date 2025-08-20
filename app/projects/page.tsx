import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-[#FAFF00] bg-black px-25 pt-15 max-md:px-5">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-left text-3xl leading-9 font-extrabold tracking-tight text-[#FAFF00] sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Análises e Projetos
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
