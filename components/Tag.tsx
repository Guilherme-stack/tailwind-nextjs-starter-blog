import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 rounded-2xl border-2 border-black bg-white p-1 text-[0.55rem] font-medium text-black uppercase hover:text-[#FF004C]"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
