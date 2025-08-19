import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass =
    'flex items-center justify-between   fixed top-3 left-[38%]  px-4 sm:px-6 lg:px-8 transition-colors duration-300 z-999'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden items-center gap-x-4 overflow-x-auto sm:flex">
          {headerNavLinks.map((link) => (
            <div className="rounded-2xl border-3 border-black bg-white p-3 text-black">
              <Link
                key={link.title}
                href={link.href}
                className="m-1 font-medium hover:text-[#FF004C] dark:hover:text-[#FF004C]"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
