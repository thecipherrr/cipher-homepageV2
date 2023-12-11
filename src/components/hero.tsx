import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"

const Hero = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center bg-transparent m-auto py-24 lg:py-48">
      <h1 className="font-roboto font-black text-8xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-bluu p-4">
        Hi! I&#39;m
      </h1>
      <h1 className="font-roboto font-black text-8xl text-center font-white">
        Edward
      </h1>
      <div className="flex flex-wrap overflow-hidden py-12 space-x-12">
        <a
          href="https://instagram.com/thecipherrr"
          className="text-4xl border-white border-4 rounded-full p-4 py-6 hover:border-blue-500 ease-in-out duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/thecipherrr"
          className="text-4xl border-white border-4 rounded-full p-4 py-6 hover:border-blue-500 ease-in-out duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </div >
  )
}

export default Hero
