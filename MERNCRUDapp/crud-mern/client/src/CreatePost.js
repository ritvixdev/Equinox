import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault(); // So, it dosen't reload the page

    // api call
    //axios.post("http://localhost:3001/create") we will create proxy in package.json to avoid this
    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      navigate("posts")
  };

  //   useEffect (() => {
  //     console.log(post);
  //   }, [post])

  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Create Post</h1>
      <Form>
        <FormGroup>
          <FormControl
            name="title"
            value={post.title}
            placeholder="Title"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <FormControl
            name="description"
            value={post.description}
            placeholder="Descriptionm"
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
        </FormGroup>
        <Button
          variant="outline-success"
          style={{ width: "100%", marginBottom: "1rem" }}
          onClick={handleClick}
        >
          Create Post
        </Button>
      </Form>
      <Button
        variant="outline-dark"
        style={{ width: "100%" }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
};

export default CreatePost;
