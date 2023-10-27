import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../settings/firebase";
//@ts-ignore
import Cookies from "js-cookie";

const usePostViews = (postId: any) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    if (postId) {
      const counterRef = doc(db, "counters", postId);

      if (!Cookies.get(`visited_${postId}`)) {
        getDoc(counterRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const currentCount = docSnapshot.data().count;
              updateDoc(counterRef, { count: currentCount + 1 });
            } else {
              setDoc(counterRef, { postId, count: 1 });
            }

            Cookies.set(`visited_${postId}`, "true", { expires: 1 });
          })
          .then(() => {
            return getDoc(counterRef);
          })
          .then((updatedDocSnapshot: any) => {
            setViewCount(updatedDocSnapshot.data().count);
          });
      } else {
        getDoc(counterRef).then((docSnapshot: any) => {
          setViewCount(docSnapshot.data().count);
        });
      }
    }
  }, [postId]);

  return viewCount;
};

export default usePostViews;
