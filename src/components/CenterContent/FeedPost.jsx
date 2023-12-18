import { FiMoreHorizontal } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { BsBookmark, BsEmojiSmile } from "react-icons/bs";
import PropTypes from 'prop-types';




export default function FeedPost({ imgProfile, nameProfile, post, altImg, likes, discriptionPost, comments }) {
    return (

        <>
            <header>

                <div className="conteudo-header">
                    <div className="borda-post">
                        <img className="borda-img" src={imgProfile} alt="" />
                    </div>
                    <span>{nameProfile}</span>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="post">
                <img src={post} alt={altImg} />
            </div>

            <div className="icones">

                <div className="icones-publi">
                    <FaRegHeart />
                    <IoChatbubbleOutline />
                    <LuSend />
                </div>

                <BsBookmark />

            </div>

            <section className="section-comments">
                <strong>{likes} likes</strong>
                <p><strong>{nameProfile}</strong> {discriptionPost}</p>
                <p>View all {comments} comments</p>

                <div className="comment">
                    <input placeholder="Add a comment…" />

                    <BsEmojiSmile />
                </div>
            </section>

            <svg className="divisao" xmlns="http://www.w3.org/2000/svg" width="468" height="1" viewBox="0 0 462 1" fill="none">
                <path d="M0 0.5H462" stroke="#E5E5E5" />
            </svg>
        </>

    )
    
}

FeedPost.propTypes = {
    imgProfile: PropTypes.string.isRequired,
    nameProfile: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    discriptionPost: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
}