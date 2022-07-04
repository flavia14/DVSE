
import React from "react"

import Posting from "../props/posting"
import data from "./data"
import { useContext } from "react";
import UserContext from "../context/user";
import (UserContext)
// export default function Timeline() {
//     const  photos:any  = useFollowedUsersPhotos();
    
//     return (
//         <div className="container col-span-2">
//             {!photos ? (
//                 <>
//                     {[...new Array(4)].map((_, index) => (
//                         <Skeleton key={index} count={1} width={320} height={400} />
//                     ))}
//                 </>
//             ) : photos && photos.length > 0 ? (
//                 photos.map((content:any) => <p key={content.docId}> Salut</p>)
//             ) : (
//                 <p className="text-center text-2xl">Follow people to see photos!</p>
//             )}
//         </div>
//     );
// }

export default function Timeline(){
    const  user  = useContext(UserContext);
    if(user)
   { const cards = data.map(item => {
        return (
            <div className="container col-span-2 items-center">
            <Posting 
                key={item.id}
                {...item}
            /></div>
        )
    })        

    return (
        <div className="items-center">
            {cards}
        </div>
    )
}
else 
{ return(
    <p>You need to LogIn</p>)
}
}