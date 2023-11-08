"use client";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";

import {
  addComment,
  addSubComment,
  getComments,
} from "@/shared/services/firebase";

import Image from "next/image";

//@ts-ignore
import moment from "moment";
//@ts-ignore
moment.locale("es");
const CommentsBlock = ({ idArticle }: any) => {
  const [email, setEmail] = useState<string | null>(null);
  const [user, setUser] = useState({});

  const [loaderBtn, setLoaderBtn] = useState(false);

  const [change, setChange] = useState(true);
  const [newComment, setNewComment] = useState<any>({
    user: user || {},
    comment: "",
    emailUser: email || "",
    nameResponse: null,
    idBlog: idArticle,
    dateCreated: new Date(Date.now()).toISOString(),
    alias: "",
  });
  const { comment: commentString } = newComment;
  const [allComments, setAllComments] = useState<any>(null);
  const [openReply, setOpenReply] = useState({
    open: false,
    id: "",
  });
  const [openReplyRes, setOpenReplyRes] = useState({
    openRes: false,
    idRes: "",
  });
  let { id } = openReply;
  let { idRes } = openReplyRes;

  useEffect(() => {
    loadCommentsByArticle();
  }, [change, setChange, setOpenReply, openReply]);

  useEffect(() => {
    setChange(!change);
  }, [idArticle]);

  const loadCommentsByArticle = async () => {
    const comments = await getComments(idArticle);
    setAllComments(comments);
  };

  const addResponseComment = async (id: any, type = "", nameResponse = "") => {
    if (commentString === "") {
      alert("coloca algo en los comentarios !!");
    } else {
      setLoaderBtn(true);
      await addSubComment(
        {
          ...newComment,
          nameResponse: type === "re-response" ? `@${nameResponse} ` : null,
          user: user,
          dateCreated: new Date(Date.now()).toISOString(),
          emailUser: email,
        },
        id
      );
      setLoaderBtn(false);

      setOpenReply({
        ...openReply,
        id: "",
      });
      setOpenReplyRes({
        ...openReplyRes,
        idRes: "",
      });
      setNewComment({ ...newComment, comment: "" });
      setChange(!change);
    }
  };

  const addComm = async () => {
    if (commentString === "") {
      alert("coloca algo en los comentarios !!");
    } else {
      setLoaderBtn(true);
      await addComment({
        ...newComment,
        user: user,

        dateCreated: new Date(Date.now()).toISOString(),
        emailUser: email,
      });
      setLoaderBtn(false);

      setNewComment({ ...newComment, comment: "" });

      setChange(!change);
    }
  };

  async function handleSuccess(credentialResponse: any) {
    if (credentialResponse.credential) {
      const response = await fetch("/api/google", {
        method: "POST",
        body: JSON.stringify({
          token: credentialResponse.credential,
        }),
      });
      const json = await response.json();

      setEmail(json.email);
      setUser({
        ...json,
        name: json?.given_name,
        image: json?.picture,
      });
    }
  }
  function handleError() {}

  return (
    <div className="my-12">
      <h2
        id="commentsSection"
        className="font-headings text-blackbg dark:text-white tracking-tight  text-2xl-tight lg:text-3xl-tight 2xl:text-4xl font-medium mt-12 scroll-mt-[120px]"
      >
        {allComments ? allComments.length || 0 : 0} comnetarios
      </h2>
      <form
        className="flex gap-4 flex-col mt-6 relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-4 items-start">
          <div className="w-full">
            <textarea
              id="commentBox"
              placeholder="Your comment"
              style={{ paddingTop: 12 }}
              className="rounded-lg text-blackbg dark:text-white border-2 px-4 py-2 leading-7 focus:outline-none focus:ring-4 focus:ring-tertiary-purple w-full block h-36 bg-white dark:bg-gray-1F border-gray-15"
              defaultValue={""}
              onChange={(e: any) =>
                setNewComment({
                  ...newComment,
                  comment: e.target.value,
                })
              }
              name="comment"
              maxLength={65525}
              required
              value={commentString}
            />
          </div>

          <div className="flex w-full">
            {email && (
              <ButtonPostComment
                handleClick={() => addComm()}
                loaderBtn={loaderBtn}
                commentString={commentString}
                email={email}
              />
            )}

            {!email && (
              <div className="w-full ">
                <GoogleLogin
                  onSuccess={handleSuccess}
                  onError={handleError}
                  useOneTap
                  theme="filled_black"
                  shape="pill"
                  locale="es"
                  size="large"
                  auto_select
                />
              </div>
            )}
          </div>
        </div>
      </form>

      <div className="flex flex-col gap-8 mt-12 text-gray-15">
        {allComments &&
          allComments.map((comment: any, index: number) => {
            return (
              <div
                key={index}
                className="border-gray-EE rounded-xl p-7  border-b scroll-mt-[120px] dark-copy bg-gray-F7"
              >
                <div className="flex items-center gap-2">
                  <Image
                    alt={comment?.user.name}
                    src={comment.user.image}
                    className="avatar avatar-60 photo object-contain rounded-full"
                    height={40}
                    width={40}
                    loading="lazy"
                    decoding="async"
                  />
                  <h4 className=" tracking-tight scroll-mt-[120px] text-md font-medium">
                    {comment.user.name}
                  </h4>
                </div>

                <div className="font-copy text-md font-medium  print:text-justify copy-muted mt-4 overflow-hidden">
                  <p className="whitespace-normal">{comment.comment}</p>
                </div>
                <div className="flex text-sm gap-2 mt-2 mb-8">
                  <span className="text-gray-A4 first-letter:uppercase">
                    {moment(comment.dateCreated).fromNow()}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CommentsBlock;

const ButtonPostComment = ({
  handleClick,
  loaderBtn,
  commentString,
  email,
  ...args
}: any) => {
  return (
    <button
      className="rounded-lg font-bold whitespace-nowrap focus:outline-none focus:ring-tertiary-purple disabled:opacity-50 group border-2 focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75 disabled:hover:bg-opacity-100 border-gray-15 py-3 px-6 text-sm-flat leading-5 2xl:text-base-flat 2xl:leading-5 bg-gray-15 text-white"
      type="submit"
      onClick={() => handleClick()}
      disabled={loaderBtn || commentString === ""}
    >
      {loaderBtn && <span className="loader"></span>}

      <span>
        Post with <i>{email || ""}</i>
      </span>
    </button>
  );
};
