import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="w-full divide-y-3 divide-[#FAFF00] bg-black px-25 pt-15 max-md:px-5 max-md:pb-10">
        <div className="space-y-2 pt-10 pb-8 md:space-y-5">
          <h1 className="font-slackey sm: text-center text-6xl leading-9 font-extrabold text-[#FAFF00] [-webkit-text-stroke:1.5px_#FF004C] max-md:text-4xl">
            ANÁLISES & PROJETOS
          </h1>
        </div>
        <div className="w-full py-12">
          <div className="grid grid-cols-3 max-md:grid-cols-1">
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
