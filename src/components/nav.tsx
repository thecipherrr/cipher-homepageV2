const Nav = () => {
  return (
    <nav className="w-full bg-light-yellow">
      <div className="max-w-6xl mx-auto p-8 text-black">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="font-poppins font-bold text-xl lg:text-2xl">Edward Matthew</div>
          </div>
          <div className="flex items-center space-x-8 font-poppins font-semibold lg:text-xl">
            <a>Projects</a>
            <a>About</a>
            <a
              href="https://github.com/thecipherrr"
              target="_blank"
            >GitHub</a>
          </div>
        </div>
      </div >
    </nav>
  )
}

export default Nav
