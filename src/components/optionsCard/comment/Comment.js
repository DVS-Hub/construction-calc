import "./comment.sass";

const Comment = ({ arrComments }) => {
  const commentItems = () => {
    const items = arrComments.map((item, i) => {
      return (
        <li key={i} className="comment__list-item">
          {item}
        </li>
      );
    });
    return <ul className="comment__list">{items}</ul>;
  };
  return (
    <div className="comment">
      <h3 className="comment__title">Примечания:</h3>
      {commentItems()}
    </div>
  );
};

export default Comment;
