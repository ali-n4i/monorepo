import styles from "./page.module.css";
import { convertToPersian } from "utils";

export default function Home() {
  return (
    <div className={styles.page}>
      123
      {convertToPersian()}
    </div>
  );
}
