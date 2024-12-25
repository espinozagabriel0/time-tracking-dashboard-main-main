
export default function Card({activity, timeframe}){

    const showPreviousTimeframe = (timeframe) => {
        return timeframe === "daily" ? "day" : timeframe.replace("ly", '')
    }

    return (
        <div 
            className="rounded-xl relative overflow-hidden h-[16.5rem]"
            style={{backgroundColor: activity.color}}
        >
            <img src={activity.icon} alt="" className="absolute top-0 right-0"/>
            <div className="info bg-Darkblue rounded-xl p-6 relative top-12 z-50">
                <div className="flex items-center gap-5 justify-between py-5">
                    <span className="title text-xl">{activity.title}</span>
                    <img src="/img/icon-ellipsis.svg" alt="" className="cursor-pointer p-2" />
                </div>

                <div className="infoTime mt-3">
                    <h3 className="text-6xl mb-2 font-extralight">{activity.timeframes[timeframe].current}hrs</h3>
                    <p className="opacity-60">Last {showPreviousTimeframe(timeframe)} - {activity.timeframes[timeframe].previous}hrs</p>
                </div>
            </div>
        </div>
    )
}