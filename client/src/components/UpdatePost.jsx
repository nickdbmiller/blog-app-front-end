import Layout from "./Layout";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, updatePost } from "../services/post";

const default_input =
    {
        title: "",
        content: "",
    }

export default function UpdatePost() {

    const navigate = useNavigate();
    
    const [post, setPost] = useState(default_input);

    let { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await getPost(id)
            setPost(res.data.post)
            console.log(res)
        }
        fetchPost()
        }, [id])

    const handleTextInput = (e) => {
        const { id, value } = e.target;
        setPost(prevInput => ({
            ...prevInput,
            [id]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePost(id, post)
        navigate("/posts")
    }

    return (
        <Layout>
            <h2 className="create-title">Update Post</h2>
            <form className="create-form" onSubmit={handleSubmit}>
            <label className="name" htmlFor="title">Title</label>
            <input
                id="title" input={post} value={post.title} type="text" onChange={handleTextInput}
            />
            <label className="name" htmlFor="content">Content</label>
            <input
                id="content" input={post} value={post.content} type="text" onChange={handleTextInput}
            />
            <button className="create-button">Update Post</button>
            </form>
        </Layout>
    );
}
