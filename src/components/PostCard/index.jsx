import "./styles.css"

export const PostCard = ({ post }) => (
    <div className="post">
      <img src={post.cover} alt={post.title}></img>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
// export const PostCard = ({ post }) => {
//   // const { post } = props;
//   return (
//     <div key={post.id} className="post">
//       <img src={post.cover} alt={post.title}></img>
//       <div className="post-content">
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </div>
//     </div>
//   );
// };
