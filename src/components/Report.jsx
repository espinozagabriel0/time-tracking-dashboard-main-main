import { useState } from "react"

export default function Report({setTimeFrame}){

    const [activeButton, setActiveButton] = useState(1)
    const handleActive = (id) => {
        setActiveButton(id)
    }

    return(
        <section className="w-full card card-report rounded-2xl overflow-hidden col-span-1 flex flex-col justify-between p-4">
            <div className="bg-Blue p-10 rounded-2xl grid grid-cols-2 lg:grid-cols-1 gap-[2rem] h-full lg:pb-[6.8rem] place-items-center lg:place-items-start z-10">
                <img src="/img/image-jeremy.png" alt="" className="max-w-[4.3rem] border-[2.75px] rounded-full"/>
                <div>
                    <span className="opacity-45">Report for</span>
                    <p className="text-5xl mt-3 font-extralight">{'Jeremy Robson'}</p>
                </div>
            </div>
            <div className="bg-Darkblue p-10 grid grid-cols-3 lg:grid-cols-1 gap-3 rounded-b-xl relative bottom-6">
                <button className={`text-center lg:text-left z-20 ${activeButton == 1 ? '': 'opacity-30'}`} onClick={() => {setTimeFrame("daily"), handleActive(1)}}>Daily</button>
                <button className={`text-center lg:text-left z-20 ${activeButton == 2 ? '': 'opacity-30'}`} onClick={() => {setTimeFrame("weekly"), handleActive(2)}}>Weekly</button>
                <button className={`text-center lg:text-left z-20 ${activeButton == 3 ? '': 'opacity-30'}`} onClick={() => {setTimeFrame("monthly"), handleActive(3)}}>Monthly</button>
            </div>
        </section>
    )
}