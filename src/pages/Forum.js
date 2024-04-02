import React, { useState } from "react";

// NOTE: The posts are not persistent and will be lost when the component unmounts.
// Could store the posts in localStorage, within the parent component, in a context, etc...
function Forum(props) {
  const [post, setPost] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleInputChange = (event) => {
    setPost(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Trim the post text.
    const postTrimmed = post.trim();

    if(postTrimmed === "") {
      setErrorMessage("A post cannot be empty.");
      return;
    }

    // Create post.
    setPosts([ ...posts, { username: props.username, text: postTrimmed }]);

    // Reset post content.
    setPost("");
    setErrorMessage("");
  }

  return (
     <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="intro_section">
        {/* Your image */}
        <img style={{ width: '100vw',height:'40vh', objectFit:'cover'}} src='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
        <h1 style={{ fontSize:'5em', color: "#0f2e0b", position: "absolute", top: "20vh", left: "50%", transform: "translateX(-50%)" }}>Forum</h1>
       </div>
    <div className="intro_content">
    
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>New Post</legend>
          <div className="form-group">
            <textarea name="post" id="post" className="form-control" rows="3"
              value={post} onChange={handleInputChange} />
          </div>
          {errorMessage !== null &&
            <div className="form-group">
              <span className="text-danger">{errorMessage}</span>
            </div>
          }
          <div className="form-group">
            <input type="button" className="btn btn-danger mr-5" value="Cancel"
              onClick={() => { setPost(""); setErrorMessage(null); }} />
            <input type="submit" className="btn btn-primary" value="Post" />
          </div>
        </fieldset>
      </form>

      <hr />
      <h1>Forum</h1>
      <div>
      {
        posts.length === 0 ?
          <span className="text-muted">No posts have been submitted.</span>
          :
          posts.map((x) =>
            <div className="border my-3 p-3" style={{ whiteSpace: "pre-wrap" }}>
              <h3 className="text-primary">{x.username}</h3>
              {x.text}
            </div>
          )
      }
      </div>
    </div>
    </section>
  );
}

export default Forum;
