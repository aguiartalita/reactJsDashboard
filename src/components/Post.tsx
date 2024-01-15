import { Article } from "phosphor-react";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState,  } from "react";

interface Auhtor{
  name: string; 
  role: string; 
  avatarUrl: string;
}


export interface PostType{
  id: number;
   author: Auhtor; 
  publishedAt: Date; 
  content: Content[]; 
  
}
interface PostProps {
  post: Post;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string; 
}

export function Post({ post } : PostProps) {
  const [comments, setComments] = useState(["Post muito bacana!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormated = format(
    post.publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event : FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Campo obrigatório!");
  }

  function deleteComment(commentToDeleted : string) {
    const commentWithoutDeletedOne = comments.filter((comment) => {
      return comment != commentToDeleted;
    });

    setComments(commentWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {post.author.name} </strong>
            <span>{post.author.role} </span>
          </div>
        </div>

        <time
          dateTime={post.publishedAt.toISOString()}
          title={publishedDateFormated}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="#"> {line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <p>Deixe seu feedback</p>
        <textarea
          onChange={handleNewCommentChange}
          name="comment"
          placeholder="Deixe seu comentário aqui"
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
