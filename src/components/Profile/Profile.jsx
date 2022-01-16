import react from "react";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.notebookcheck-ru.com/uploads/tx_nbc2/4zu3_mbp.jpg"></img>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;