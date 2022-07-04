import { useState, useEffect, useContext } from 'react';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';
import UserContext from '../context/user';
import firebase from 'firebase';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    const user = useContext(UserContext);
    
    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds:any = await getUserByUserId(user?.uid);

            if (followingUserIds && followingUserIds[0].following.length > 0) {
                const followedUserPhotos:any = await getUserFollowedPhotos(user?.uid,followingUserIds);
                
                followedUserPhotos.sort((a: any, b:any) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPhotos);
            }
         }
        
        getTimelinePhotos();
    }, [user?.uid]);
    
    return { photos };
}