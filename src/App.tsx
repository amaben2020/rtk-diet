import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks/hooks";
import { selectCount2 } from "./redux/features/counter2/Counter2Slice";
import { createUser, getUser } from "./redux/features/user/UserSlice";
import { CreatePost, IPost } from "./redux/features/user/services/Async";
import { fetchProducts } from "./redux/features/user/services/products/async";
import {
  incrementByPayload,
  incrementCount,
  decrementCount,
} from "./../src/redux/features/counter2/Counter2Slice";

function App() {
  const counter2 = useAppSelector((state) => state.counterSlice2);
  const posts = useAppSelector((state) => state.posts);
  const userInfo = useAppSelector((state) => state.user);

  const products = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();
  const [state, setState] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [post, setPost] = useState({
    id: 2,
    body: "",
    excerpt: "",
  });

  const renderFlag = (flag: string) => {
    return <span className={`fi fi-${flag} fis`}></span>;
  };

  const handleChange = (event: any) => {
    setState(event.target.value);
  };

  useEffect(() => {
    dispatch(getUser(userInfo.users));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handlePostChange = (event: any) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handlePostSubmit = (event: any) => {
    try {
      event.preventDefault();
      dispatch(CreatePost(post));
    } catch (error) {
      console.log(error);
    }
  };

  const getProductToUpdate = (id: any) => {
    console.log("selected", id);
    return id;
  };

  return (
    <div className='App'>
      <input type='number' onChange={handleChange} />

      {counter2.value}
      <header className='App-header'>
        <button onClick={() => dispatch(incrementCount())}>+</button>
        <button onClick={() => dispatch(decrementCount())}>-</button>
        <span className='fi fi-gr'></span> {renderFlag("fr")}
        <div>
          Create User:
          <button
            onClick={() =>
              dispatch(
                createUser({
                  name: "Ben",
                  email: "amaben2020",
                })
              )
            }
          >
            Create User Action
          </button>
          {userInfo?.loading && <p>Loading.....</p>}
          {userInfo?.users?.map((user: any) => (
            <ul>
              <li>{user.email}</li>
            </ul>
          ))}
          <form onSubmit={handlePostSubmit}>
            <input
              type='number'
              name='id'
              onChange={handlePostChange}
              value={state}
            />
            <input
              type='text'
              name='body'
              onChange={handlePostChange}
              value={post.body}
            />
            <input
              type='text'
              name='excerpt'
              onChange={handlePostChange}
              value={post.excerpt}
            />
            <button type='submit'>Submit</button>
          </form>
          <div>
            POSTS:
            {posts?.posts.map((post: IPost) => (
              <ul>
                <li>{post.id}</li>
                <li>{post.body}</li>
              </ul>
            ))}
          </div>
          <div>
            Products:
            {products.status === "loading" && <p>Loading ...... </p>}
            {products.products.slice(0, 4).map((product: any) => (
              <ul>
                <li onClick={() => getProductToUpdate(product?.id)}>
                  {product.name}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
