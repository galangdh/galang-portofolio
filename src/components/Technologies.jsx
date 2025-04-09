import { RiReactjsLine } from "react-icons/ri"
import { FaLaravel } from "react-icons/fa6";
import { DiCodeigniter } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">TECHNOLOGIES</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel className="text-7xl text-red-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCodeigniter className="text-7xl text-red-700" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiBootstrap className="text-7xl text-purple-700" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPhp className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFlutter className="text-7xl text-cyan-400" />
            </div>
        </div>
    </div>
  )
}

export default Technologies
