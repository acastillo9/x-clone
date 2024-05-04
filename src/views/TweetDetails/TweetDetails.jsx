import { useEffect, useState } from "react";
import Tweet from "../../components/Tweet/Tweet"
import { useParams } from "react-router-dom"

function TweetDetails() {

    const { tweetId } = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/tweets/${tweetId}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }, [tweetId])


    return (
        data ? <Tweet data={data} /> : null
    )
}

export default TweetDetails