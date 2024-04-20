function Tweet({ data }) {
    return (
        <article className="flex p-4 gap-4 w-full">
            <div><img className="w-10 h-10 rounded-full" src={data.profileImage} alt={data.name} /></div>
            <div className="flex flex-col gap-1 flex-1">
                <div className="flex gap-1">
                    <a className="font-bold" href="#">{data.name}</a>
                    <a className="text-neutral-500" href="#">{data.user}</a>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-500">{data.timestamp}</span>
                </div>
                <div>
                    <p>{data.text}</p>
                </div>
                <div>
                    <ul className="flex justify-between">
                        <li><button>R {data.replays}</button></li>
                        <li><button>P {data.reposts}</button></li>
                        <li><button>L {data.likes}</button></li>
                        <li><button>V {data.views}</button></li>
                        <li>
                            <div className="flex gap-2">
                                <button>B</button>
                                <button>S</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Tweet;