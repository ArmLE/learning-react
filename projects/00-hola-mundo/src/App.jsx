import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name:'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name:'Pablo H.',
        isFollowing: false
    }
]

export function App (){

    const functionName = (userName) => `@${userName}`
    const element = <span>@midudev</span>
    const objectJson = {
        isFollowing: true, 
        userName: "objectJson",
        atributeFunction: functionName()
    }
    
    console.log({...objectJson})

    const [name,setName] = useState('midudev')
    const [isFollowing,setIsFollowing] = useState(false)
    const [state,setState] = useState(0)

    console.log('[App] render with name: ', name)
    console.log('[App] render with isFolloing: ', isFollowing)

    return (
        <section className='ownSection'>
            {
                users.map(
                    ({userName, name, isFollowing}) => 
                    //const {userName, name, isFollowing} = user
                    //return 
                     (
                        <TwitterFollowCard
                            key = {userName}
                            userName = {userName}
                            initialIsFollowing = {isFollowing}

                        > 
                         {name}
                        </TwitterFollowCard>
                    )
                )
            }
            
            {/*
            <TwitterFollowCard 
                initialIsFollowing = {true}
                formatUserName={functionName} 
                userName={name} >
                Miguel Angel
            </TwitterFollowCard>
            
             <TwitterFollowCard 
                {...objectJson}>
                Miguel Angel
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                initialIsFollowing = {isFollowing}
                formatUserName={element} 
                userName="midudev">
                childrenLikeAName
            </TwitterFollowCard>

            <TwitterFollowCard 
                formatUserName={element}
                userName="midudev">
                childrenGoLikeProps
            </TwitterFollowCard> 
            */}
            <button onClick={() => setName('pedromichel')}>Cambio nombre</button>
            <button onClick={() => setIsFollowing(!isFollowing)}>Cmbiar estado del App</button>
            <button onClick={() => setState(state+1)}> count</button>
        </section>
    )
}