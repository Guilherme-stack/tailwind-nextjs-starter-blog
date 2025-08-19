import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import '@fontsource/slackey' // Importa a fonte globalmente

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="font-slackey grid grid-cols-[2fr_3fr] items-start">
        <div className="flex h-full items-center justify-center bg-[#F7F0E2]">
          <Image src={'/static/images/guilherme.png'} alt="avatar" width={600} height={600} />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center gap-14 bg-[#FF004C] p-24 text-center">
          <h1 className="font-slackey text-7xl font-extrabold text-[#FAFF00]">
            Guilherme Lima Mota
          </h1>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl text-[#FAFF00]">Biografia:</h3>
            <p className="text-2xl text-white">
              Estudande de Sistemas de Informação (UFG) , Programador, Designer UI/UX, Curioso,
              Leitor, Corredor, Fã do BK e do RET, From Goiânia, Nascido no Pará, Interessado em
              Arte.
            </p>
          </div>
          <div>
            <h3 className="text-5xl text-[#FAFF00]">Interesses:</h3>
            <p className="text-2xl text-white">
              História, Grécia Antiga, Sócratres, BK, RET, Arte, Exercício Físico, Comportamento
              Humano, Estética, Moda, Estudo, Resenhas, Artigos Ciêntificos, Modernidade, Podcast.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 w-full border-2 border-black bg-[#FAFF00] p-4 text-center text-black">
            <p>“eu nunca perco, é tudo troca. Eu sempre deixo, o que é meu volta” - BK</p>
          </div>
        </div>
      </div>
      {/* <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div> */}
    </>
  )
}
