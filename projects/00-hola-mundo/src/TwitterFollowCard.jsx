import { useState } from 'react'

export {useState} from 'react'

export function TwitterFollowCard({ children,formatUserName,userName,initialIsFollowing }){

    //console.log(formatUserName)
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    const handleClick = () => setIsFollowing(!isFollowing)
    const text = isFollowing ? 'Siguiendo':'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button'

    //console.log('[twitterFollowCard] render with userName: ',userName)
    console.log('[TwitterFollowCard] render with isFolloing: ', isFollowing)

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar" 
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span
                        className='tw-followCard-infoUserName'
                    >@{userName}</span>
                </div>
            </header>
            <aside>
                <button
                    className={buttonClassName}
                    onClick={handleClick}
                >{text}</button>
            </aside>
        </article>
    )
}