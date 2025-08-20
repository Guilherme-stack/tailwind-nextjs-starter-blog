import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass =
    'flex items-center justify-between fixed top-0 w-full bg-[#FAFF00] py-1 border-y-3 border-[#fff]  sm:px-6 lg:px-8 transition-colors duration-300 z-999'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="flex w-full items-center space-x-4 sm:space-x-6">
        <div className="no-scrollbar flex w-full items-center justify-center gap-x-4 overflow-x-auto sm:flex">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="">
              <Link
                key={link.title}
                href={link.href}
                className="font-slackey m-1 block rounded-2xl border-3 border-[#000] bg-[#FF004C] px-3 py-1 font-medium text-[#fff]"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        {/*  <SearchButton />
        <ThemeSwitch /> */}
        {/* <MobileNav /> */}
      </div>
    </header>
  )
}

export default Header
