import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks/hooks";
import { selectCount2 } from "./redux/features/counter2/Counter2Slice";
import { createUser, getUser } from "./redux/features/user/UserSlice";
import { CreatePost } from "./redux/features/user/services/Async";

import {
  incrementByPayload,
  incrementCount,
  decrementCount,
} from "./../src/redux/features/counter2/Counter2Slice";

function App() {
  const counter2 = useAppSelector((state) => state.counterSlice2);
  const userInfo = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const [state, setState] = useState(0);

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

  const handlePostChange = (event: any) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handlePostSubmit = (event: any) => {
    event.preventDefault();
    dispatch(CreatePost(post));
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
            {" "}
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
              value={post.id}
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
        </div>
      </header>
    </div>
  );
}

export default App;
