import React from "react";

const UserAvatarimg = (props) => {
    return (
        <>
            <div className={`userImg d-flex align-items-center justify-content-center rounded-circle ${props.lg=== true && 'lg'}`}>
                <span className="rounded-circle d-flex align-items-center justify-content-center">
                    <img src={props.img} alt="Profile" className="w-100" />
                </span>
            </div>
        </>
    );
}
export default UserAvatarimg;