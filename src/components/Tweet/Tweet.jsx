import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faChartSimple, faArrowUpFromBracket, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, faBookmark, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Tweet.css'

function Tweet({ data, onDelete }) {

    // Hooks
    const [isLiked, setIsLiked] = useState(data.isLiked)
    const [likes, setLikes] = useState(data.likes)
    const navigate = useNavigate()

    function goToTweet(id) {
        navigate(`/tweets/${id}`)
    }

    function addLike(event) {
        event.stopPropagation()
        // TODO Deberia llamar una API donde se cocume un servicio de dar like
        if (!isLiked) {
            data.likes += 1
            data.isLiked = true
        } else {
            data.likes -= 1
            data.isLiked = false
        }
        setLikes(data.likes)
        setIsLiked(data.isLiked)
    }

    function deleteTweet(tweetId, event) {
        event.stopPropagation()
        onDelete(tweetId)
    }

    return (
        <article className="flex p-4 gap-4 w-full cursor-pointer" onClick={() => goToTweet(data.id)}>
            <div><img className="w-10 h-10 rounded-full" src={data.profileImage} alt={data.name} /></div>
            <div className="flex flex-col gap-1 flex-1">
                <div className='flex justify-between items-center'>
                    <div className="flex gap-1">
                        <a className="font-bold hover:underline" href="#">{data.name}</a>
                        <a className="text-neutral-500" href="#">{data.user}</a>
                        <span className="text-neutral-500">·</span>
                        <span className="text-neutral-500">{dayjs(data.timestamp).format('MMM DD')}</span>
                    </div>
                    {onDelete && <button onClick={(e) => deleteTweet(data.id, e)}><FontAwesomeIcon className='justify-self-end' icon={faTrashCan} /></button>}
                </div>
                <div>
                    <p>{data.text}</p>
                </div>
                <div className='pt-2'>
                    <ul className="flex justify-between">
                        <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faComment} /> <span>{data.replays}</span></button></li>
                        <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-green-500 transition'><FontAwesomeIcon icon={faRetweet} /> <span>{data.reposts}</span></button></li>
                        <li className='flex gap-2 items-center'><button className={`text-neutral-500 ${isLiked ? 'text-pink-600' : 'hover:text-pink-600'} transition`} onClick={addLike}>
                            <FontAwesomeIcon className={isLiked ? 'heart' : ''} icon={isLiked ? faHeartSolid : faHeart} /> <span>{likes}</span>
                        </button></li>
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