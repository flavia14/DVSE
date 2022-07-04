import React, { useState } from 'react'
import "./style.css";
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';
export default function Card(props) {
    const [toggleLiked, setToggleLiked] = useState(props.like);
    const [likes, setLikes] = useState(props.like);
    const handleToggleLiked = async () => {
        setToggleLiked((toggleLiked) => !toggleLiked);
        setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
    }
/////////////////////////////////////////////////////////////////////////////
const [comment, setComment] = useState('');
    const handleSubmitComment = (event) => {
        event.preventDefault();
        setComment(props.secondcom);
    }
    
    return (
        <div className="article-post">   
        <div className="post-header">
        <img src={process.env.PUBLIC_URL +props.profilPic} alt="airbnb" className="profile-photo"/> 
        <div><span><h1 className="user-name"><Link to={ROUTES.EXTRA}>  {props.username}</Link> </h1> </span>
        <span className="location">{props.location}</span>
        </div>
        </div>
            <img src={process.env.PUBLIC_URL +props.coverImg} alt="airbnb" className="photo"/>
            <div className="footer">
            <div className="flex">
                    <svg onClick={() => handleToggleLiked((toggleLiked) => !toggleLiked)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                
                            }
                        }}
                        className={`w-8 mr-4 select-none cursor-pointer ${
                            toggleLiked ? 'fill-current text-red' : 'text-black' 
                            
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        tabIndex={0}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      
                    </svg>
                      
                </div>
                <span> {likes} likes</span>
                <div>   <span className="comment"><b>{props.username} </b>{props.description}  </span></div>
                <div>   <span className="comment"><b>{props.friend} </b>{props.coments}  </span></div>
                <div>   <span className="comment"><b>{props.username} </b>{comment}  </span></div>
            </div>
            <div className="border-t border-gray">
            <form
                className="flex w-full justify-between pl-0 pr-5"
                onSubmit={(event) =>
                    comment.length >= 3 ? handleSubmitComment(event) : event.preventDefault()
                }
                method="POST"
            >
                <input
                    aria-label="Add a comment"
                    autoComplete="off"
                    className="text-sm text-gray w-full mr-3 py-5 px-4"
                    type="text"
                    name="add-comment"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                 
                />
                <button 
                    className={`text-sm font-bold text-blue-500 ${!comment && 'opacity-25'}`}
                    type="button"
                    disabled={comment.length < 3}
                    onClick={handleSubmitComment}
                >
                    Post
                </button>
            </form>
            
        </div>   
        </div>
    )
}