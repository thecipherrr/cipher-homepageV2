const Nav = () => {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-60 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl text-white font-semibold font-roboto">
            Edward Matthew
          </a>
          <div className="hidden lg:flex space-x-8 text-white font-roboto">
            <a href="#" className="transition-colors ease-in-out hover:text-bluu duration-300">
              01. About
            </a>
            <a href="#" className="transition-colors ease-in-out hover:text-bluu duration-300">
              02. Projects
            </a>
            <a href="https://github.com/thecipherrr" target="_blank" className="transition-colors ease-in-out hover:text-bluu duration-300">
              03. GitHub
            </a>
            <a href="#" className="transition-colors ease-in-out hover:text-bluu duration-300">
              04. Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
