import React, { useState, useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import { getPost } from "../../services/PostServices";
import { getComments } from "../../services/CommentService";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function PostDetail() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  const { darkMode } = useContext(ThemeContext)

  const fetchFn = useCallback(() => {
    setLoading(true);

    getPost(postId).then((post) => {
      setPost(post);
    });

    getComments(postId).then((comments) => {
      setComments(comments);
    });

  }, [postId])

  useEffect(() => {
    fetchFn()
  }, [fetchFn]);

  useEffect(() => {
    if (post) {
      setLoading(false);
    }
  }, [post]);

  useEffect(() => {
    if (comments) {
      setLoadingComments(false);
    }
  }, [comments]);

  return (
    <div>
      {loading ? (
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <>
          <h1 className={`${darkMode ? "text-light" : "text-dark"}`}>{post.title}</h1>
          <p className={`${darkMode ? "text-light" : "text-dark"}`}>{post.body}</p>
          <hr />
          <h3 className={`${darkMode ? "text-light" : "text-dark"}`}>Comments</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {loadingComments ? (
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            ) : comments && comments.length > 0 ? (
              comments.map((comment) => (
                <div className="col" key={comment.id}>
                  <div className={`card h-100 ${darkMode ? "bg-secondary" : "bg-light"}`}>
                    <div className="card-body">
                      <h5 className={`card-title ${darkMode ? "text-light" : "text-dark"}`}>{comment.name}</h5>
                      <p>{comment.body}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>There are no comments</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
