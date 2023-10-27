//@ts-ignore
import Cookies from "js-cookie";

import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../settings/firebase";

interface Rating {
  value: number;
  liked: boolean;
}

const usePostRatings = (postId: string) => {
  const [ratings, setRatings] = useState<any>({
    like: 0,
    heart: 0,
    applause: 0,
    confetti: 0,
  });

  useEffect(() => {
    if (postId) {
      const ratingsRef = doc(db, "ratings", postId);

      getDoc(ratingsRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();

          setRatings(data);
        } else {
          setDoc(ratingsRef, {
            like: 0,
            heart: 0,
            applause: 0,
            confetti: 0,
          }).then(() => {
            setRatings({
              like: 0,
              heart: 0,
              applause: 0,
              confetti: 0,
            });
          });
        }
      });
    }
  }, [postId]);

  const handleToggleLike = async (type: any) => {
    if (postId) {
      const ratingsRef = doc(db, "ratings", postId);

      if (Cookies.get(`rated_${postId}_${type}`)) {
        setRatings((prevRatings: any) => ({
          ...prevRatings,
          [type]: prevRatings[type] - 1,
        }));

        updateDoc(ratingsRef, {
          [type]: ratings[type] - 1,
        });

        Cookies.remove(`rated_${postId}_${type}`);
      } else {
        setRatings((prevRatings: any) => ({
          ...prevRatings,
          [type]: prevRatings[type] + 1,
        }));

        updateDoc(ratingsRef, {
          [type]: ratings[type] + 1,
        });

        Cookies.set(`rated_${postId}_${type}`, "true", { expires: 1 });
      }
    }
  };

  return { ratings, handleToggleLike };
};

export default usePostRatings;
