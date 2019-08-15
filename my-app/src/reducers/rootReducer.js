const initState = {
  posts: [
    { id: "1", title: "A bad day", body: "Today was a bad day" },
    { id: "2", title: "A good day", body: "Today was a good day" },
    { id: "3", title: "An alright day", body: "Today was an alright day" }
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      let newPosts = state.posts.filter(post => {
        return post.id !== action.id;
      });
      return {
        ...state,
        posts: newPosts
      };
  }
  return state;
};

export default rootReducer;
