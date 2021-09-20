import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../services/PostServices';
import Loader from 'react-loader-spinner';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function PostsList() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response)
      })
  }, [])

  useEffect(() => {
    if (posts) {
      setLoading(false)
    }
  }, [posts])

  return (
    <div className='PostsList row row-cols-1 row-cols-md-2 g-4'>
      {loading ? (
        <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      ) : (
        posts && posts.length > 0 ? posts.map((post) => (
          <div className="col" key={post.id}>
            <div className={`card ${darkMode ? "bg-secondary" : "bg-light"}`}>
              <div className="card-body">
                <h5 className={`card-title ${darkMode ? "text-light" : "text-dark"}`}>{post.title}</h5>

                <Link className="btn btn-outline-dark" to={`/posts/${post.id}`}>Ver detalle</Link>
              </div>
            </div>
          </div>
        )) : (
          <h4>There are no posts</h4>
        )
      )}
    </div>
  )
}


