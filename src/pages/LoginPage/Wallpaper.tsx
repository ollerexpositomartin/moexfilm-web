import { useWindupString } from "windups"

function Wallpaper() {
    const [text] = useWindupString(
        "Que te apetece ver hoy 😈", {
        pace: (char) => (char === " " ? 80 : 40)
    });

    return (
        <div className='bg-img-login w-full'>
            <div className='w-full top-1/4 left-1/2 fixed text-center'>
                <p className='text-9xl text-gray-200 font-bebasNeu max-w-lg '>{text}</p>
            </div>
        </div>
    )
}

export default Wallpaper;