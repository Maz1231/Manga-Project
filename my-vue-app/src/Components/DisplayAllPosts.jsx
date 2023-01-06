import React, { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import ModifyPost from "./ModifyPost";
import Post from "./Post";

const DisplayAllPosts = () => {
  // managing states below
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([
    {
      id: 1,
      title: "Anime Is Definitely Not Just For Kids",
      content:
        "There's no way to discuss complex moral decisions in anime without mentioning Death Note, so let's start there. For the uninitiated, Death Note focuses on Light Yagami, who finds a magical notebook that kills anyone whose name is written inside. He decides to use this notebook to kill criminals and improve society. Eventually, a combination of hubris and desperate attempts to avoid capture lead him to betray his original morals. Kids who watch Death Note tend to focus on how badass they think either Light or his detective opponent L are. Yes, L is badass (Light isn't, sorry guys) but the biggest hook for grown-up viewers is the major question posed by the series: does any one person truly have the right to decide who lives and who dies? Death Note is a classic example of an anime that poses moral questions, but it's far from the only one. Another good one is Psycho Pass, which features the Sybil system, a series of tests that analyze your personality, your mental and physical health, your genetic heritage, and other traits to determine your station in life. Viewers of Psycho Pass have to grapple with the concept of free will. What does it mean? Is it real? Are our choices actually determined by traits we don't control? How does free will factor into the creation of an ideal society? These are not questions targeted at kids. "
    },
    {
      id: 2,
      title: "IF WE LIVED IN THE ANIME WORLD",
      content:
        "Many people don’t quite understand how the Japanese anime world works because, of course, we are living in reality or they don’t know what anime is. Just imagine how different the world would be if everyone acted as though they were from a favorite anime of theirs. Oh yeah, it’s not just the dramatic voicing or the random gasps that anime characters make; it’s also just the way they stand and what they wear. Basically, just how a normal anime character would be. First of all, for those who do not know what “anime” is, let me give you a brief summary. Anime is a Japanese cartoon that, for most of them, originated from Japanese comics called, manga. Most of you have probably already seen some of the famous and well known animes here in America. Just to name a few, there’s Sonic the Hedgehog, Pokemon, Dragon Ball Z, and Yu-Gi-Oh. All of these are animes which originated from their own manga. Now, some people may not have realized that these were animes until just now or recently.."
    }
  ]);
  // const [allPosts, setAllPosts] = useState([]) // can also be used
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef (to empty title and content once saved)
  const getTitle = useRef();
  const getContent = useRef();

  // function 1 (accepting title in state by user input)
  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
  };

  // function 2 (accepting content/description in state by user input)
  const savePostContentToState = (event) => {
    setContent(event.target.value);
  };

  // function 3 (to save title and content in allPosts state)
  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  // function 4 (toggle create new post visibility)
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  // function 5 (toggle post editing)
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };

  // function 6 (to edit posts)
  const editPost = (id) => {
    setEditPostId(id);
    toggleModifyPostComponent();
  };

  // function 7 (to update the posts)
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content
        };
      }

      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };

  // function 8 (to delete posts)
  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };

  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
        {/* Cancel Button */}
        <button
          className="btn btn-danger cancel-button"
          onClick={toggleCreateNewPost}
        >
          Cancel
        </button>
      </>
    );
  } else if (isModifyPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });

    return (
      <>
        <ModifyPost
          title={post.title}
          content={post.content}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          toggleCreateNewPost={toggleCreateNewPost}
        />
        <button
          className="btn btn-danger cancel-update-button"
          onClick={toggleModifyPostComponent}
        >
          Cancel
        </button>
      </>
    );
  }

  return (
    <>
      <h2>All Posts</h2>
      {!allPosts.length ? (
        <div>
          <li>There are no posts yet.</li>
        </div>
      ) : (
        allPosts.map((eachPost) => (
          <Post
            id={eachPost.id}
            key={eachPost.id}
            title={eachPost.title}
            content={eachPost.content}
            editPost={editPost}
            deletePost={deletePost}
          />
        ))
      )}
      <button
        className="btn btn-outline-info button-edits create-post"
        onClick={toggleCreateNewPost}
      >
        Create New
      </button>
    </>
  );
};
export default DisplayAllPosts;
