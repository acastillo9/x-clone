import { useContext, useState } from "react"
import { UserContext } from "../../contexts/userContext"

function CreateTweet({ onCreate }) {
    const [tweetText, setTweetText] = useState('')
    const user = useContext(UserContext)

    function createTweet() {
        onCreate(tweetText)
        setTweetText('')
    }

    return (
        <section className="flex p-4 gap-4 w-full">
            <div><img className="w-10 h-10 rounded-full" src={user?.profileImage} alt={user?.name} /></div>
            <div className="flex flex-col gap-1 flex-1">
                <input className="bg-black text-xl mb-2" type="text" name="tweetText" id="tweetText" placeholder="What is happening?!" value={tweetText} onChange={(e) => setTweetText(e.target.value)} />
                <div className="flex justify-end">
                    <button className="bg-sky-500 px-4 py-1 rounded-full font-bold hover:bg-sky-600 transition" onClick={createTweet}>Post</button>
                </div>
            </div>
        </section>
    )
}

export default CreateTweet