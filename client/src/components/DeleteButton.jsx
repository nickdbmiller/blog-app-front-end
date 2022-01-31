import { deletePost } from "../services/post";



export default function DeleteButton(props) {
  const handleDelete = async () => {
    await deletePost(props._id);
    props.handleToggle()
  };

  return <button onClick={handleDelete}>Delete Post</button>;
};
