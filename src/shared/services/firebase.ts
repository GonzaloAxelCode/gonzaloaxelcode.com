import { db } from "@/shared/settings/firebase";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export const getComments = async (idblog: string) => {
  const allAomments: any = [];
  const q = query(collection(db, "comments"), where("idBlog", "==", idblog));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    allAomments.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return allAomments;
};

export const addSubComment = async (newcomment: any, idcommentparent: any) => {
  const washingtonRef = doc(db, "comments", idcommentparent);
  await updateDoc(washingtonRef, {
    replies: arrayUnion(newcomment),
  });
};

export const deleteSubComment = async (
  commentObject: any,
  idcommentparent: any
) => {
  const washingtonRef = doc(db, "comments", idcommentparent);
  await updateDoc(washingtonRef, {
    replies: arrayRemove(commentObject),
  });
};

export const deleteComment = async (idComment: string) => {
  await deleteDoc(doc(db, "comments", idComment));
};

export const addComment = async (newcomment: any) => {
  await addDoc(collection(db, "comments"), newcomment);
};

export const editComment = async (newCommentString: any, idComment: any) => {
  const washingtonRef = doc(db, "comments", idComment);
  await updateDoc(washingtonRef, {
    comment: newCommentString,
  });
};

export const editReplyComment = async (
  newComment: any,
  idcommentparent: any
) => {
  const washingtonRef = doc(db, "comments", idcommentparent);
  const newReplies: any = [];
  await updateDoc(washingtonRef, {
    replies: newReplies,
  });
};
