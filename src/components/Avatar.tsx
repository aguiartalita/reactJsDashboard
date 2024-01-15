import styles from "./Avatar.module.css";
import {ImgHTMLAttributes } from 'react'; 

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean; 
//src, title, alt pré importadas de imgHtmlAtributes
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
     {...props}
    />
  );
}
