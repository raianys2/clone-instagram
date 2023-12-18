import Feed from './Feed'
import Stories from './Stories'
import './style.css'


export default function CenterContent() {
    return (
        <div className="CenterContent">
            
                <Stories />
                <Feed />

        </div>
    )
}