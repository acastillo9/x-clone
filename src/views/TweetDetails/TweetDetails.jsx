import { useEffect, useState } from "react";
import Tweet from "../../components/Tweet/Tweet"
import { useParams } from "react-router-dom"

function TweetDetails() {

    const { tweetId } = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        // TODO llamar a API y solicitar el tweet con id tweetId
        const response = {
            "id": tweetId,
            "text": "Just saw the most beautiful sunset! 🌅",
            "user": "@juan",
            "name": "Juan",
            "timestamp": "2024-04-20T18:30:00Z",
            "replays": 15,
            "reposts": 10,
            "likes": 150,
            "views": 10,
            "profileImage": "https://randomuser.me/api/portraits/men/0.jpg",
            "isLiked": false,
        }
        setData(response)
    }, [tweetId])
    

    return (
        data ? <Tweet data={data} /> : null
    )
}

export default TweetDetails