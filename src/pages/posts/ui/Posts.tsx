import { FC } from "react";
import styles from "./styles.module.scss";

type PostsProps = Record<string, never>


export const Posts: FC<PostsProps> = () => {
  return (
    <div className={styles.posts}>
    123
    </div>
  );
};
