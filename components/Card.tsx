import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div className={`${imgSrc && 'h-full'} overflow-hidden rounded-2xl border-3 border-[#FF004C]`}>
      {/*  {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="border-b-3 border-[#FF004C] object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))} */}
      <div className="bg-white p-6">
        <h2 className="font-grotesk mb-3 text-3xl leading-8 font-extrabold tracking-tight text-[#000] max-md:text-2xl">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none leading-5 font-bold text-gray-600">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base leading-6 font-medium text-[#FF004C]"
            aria-label={`Link to ${title}`}
          >
            Continue lendo &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
