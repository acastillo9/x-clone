import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faChartSimple, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons'
import dayjs from 'dayjs'

function Tweet({ data }) {

    function goToTweet(id) {
        console.log('go to', id)
    }

    return (
        <article className="flex p-4 gap-4 w-full cursor-pointer" onClick={() => goToTweet(data.id)}>
            <div><img className="w-10 h-10 rounded-full" src={data.profileImage} alt={data.name} /></div>
            <div className="flex flex-col gap-1 flex-1">
                <div className="flex gap-1">
                    <a className="font-bold hover:underline" href="#">{data.name}</a>
                    <a className="text-neutral-500" href="#">{data.user}</a>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-500">{dayjs(data.timestamp).format('MMM DD')}</span>
                </div>
                <div>
                    <p>{data.text}</p>
                </div>
                <div className='pt-2'>
                    <ul className="flex justify-between">
                        <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faComment} /> <span>{data.replays}</span></button></li>
                        <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-green-500 transition'><FontAwesomeIcon icon={faRetweet} /> <span>{data.reposts}</span></button></li>
                        <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-pink-600 transition'><FontAwesomeIcon icon={faHeart} /> <span>{data.likes}</span></button></li>
                        <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faChartSimple} /> <span>{data.views}</span></button></li>
                        <li className='flex gap-3 items-center'>
                            <button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faBookmark} /></button>
                            <button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faArrowUpFromBracket} /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Tweet;