import aboutimg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
const about = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">ABOUT
            <span className="text-netruel-500"> ME</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="rounded-2xl" src={aboutimg} alt="about" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </div>           
        </div>
    </div>
  )
}

export default about
