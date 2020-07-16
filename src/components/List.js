import React, {useState, useEffect} from 'react'
import '../css/list.css'
import '../css/card.css'
import axios from 'axios'

function Card({title, upvotes, selftext, link}){
    return(
        <div className='card'>
            <h1 className="cardTitle">{title}</h1>
            <p className="cardUpvotes">{`${upvotes} upvotes`}</p>
            <p className='cardText'>{selftext}</p>
            <p className="cardLink"><a target="_blank" href={link}>Goto post</a></p>
        </div>
    )
}


function List(){
    const [subreddit,selectSub] = useState('all')
    const [posts,setPosts] = useState([])



    useEffect(
        ()=>{
          const url = 'https://www.reddit.com/r/' + subreddit + '.json';
          axios.get(url)
          .then(res=>{
            const newPosts =  res.data.data.children.map(obj => obj.data)
            const loadingText = document.getElementById('loadingText')
            setPosts(newPosts);
            loadingText.innerHTML =''
          })
        },[posts]
    )

    function selectFunction(){
        const optionSelect = document.getElementById('optionSelect')
        selectSub(subreddit => optionSelect.value)
        const loadingText = document.getElementById('loadingText')
        const list = document.getElementById('list')
        loadingText.innerHTML ='Loading...'
    }
    
    return(
        <div className='list'>

            <select className='option' id='optionSelect' onChange={selectFunction}>  
                <option value='all' defaultValue>r/all</option>
                <option value='askreddit' >r/AskReddit</option>
                <option value='javascript'>r/JavaScript</option>
                <option value='reactjs'>r/reactjs</option>
                <option value='webdev'>r/webdev</option>
            </select>
            <br/><br/>
            <p id='loadingText'> Loading ... </p>
            <ul id="list" className='cardList'>
                {
                    posts.map(post => (
                        <li className="li" key={post.id}><Card title={post.title} selftext={post.selftext} upvotes={post.ups} link={post.url}/></li>
                    ))
                }
            </ul>
        
        </div>
    )
}

export default List