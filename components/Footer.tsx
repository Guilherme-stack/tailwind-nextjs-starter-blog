import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-around gap-3 bg-[#FAFF00] py-2 align-middle max-md:flex-col">
        <div className="flex space-x-2 text-sm text-black">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="flex space-x-4 text-black">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} c size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>
      </div>
    </footer>
  )
}
