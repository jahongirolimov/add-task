import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [post, setPost] = useState([]);

  const addPost = () => {
    const newPost = {
      id: Math.round(Math.random() * 1000),
      title: title,
      input: input,
      description: description,
      time: time,
    };
    if (
      newPost.title.trim().length === 0 ||
      newPost.description.trim().length === 0 ||
      newPost.input.trim().length === 0 ||
      newPost.time.trim().length === 0
    ) {
      alert("task malumotlarini to'liq kiriting");
    } else {
      setPost([...post, newPost]);
      setInput("");
      setTitle("");
      setDescription("");
      setTime("");
    }
  };

  return (
    <>
      <header className="w-[100%] bg-black text-yellow-400 p-4">
        <div className="container mx-auto">
          <h1 className="text-center">ADD LESSON TASK</h1>
        </div>
      </header>
      <main className="bg-black">
        <section className="w-[100%] flex p-7 gap-[30px] ">
          <div className="container border-slate-500 border-[4px] mx-auto w-[50%] bg-black flex flex-col  p-4 gap-5">
            <input
              type="text"
              placeholder="lesson theme"
              className="p-4 rounded w-[500px]"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              className="rounded w-[500px]"
              name="textarea"
              id=""
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <input
              type="date"
              className="rounded p-4 inline relative w-[200px]"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <input
              type="time"
              className="rounded p-4 inline relative w-[200px] left-[250px] top-[-77px]"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
            <button
              onClick={addPost}
              className=" rounded text-yellow-400 p-4 bg-black-400 border-yellow-800 border-[4px] inline-block w-[270px]"
            >
              SAQLASH
            </button>
          </div>

          <div className="wrapperTwo w-[50%] bg-white p-4 rounded">
            {post.length ? (
              post?.map((item) => {
                return <div>
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  <span>{item?.input}</span>
                  <small className="block">{item?.time}</small>
                </div>;
              })
            ) : (
              <h1>not found</h1>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
