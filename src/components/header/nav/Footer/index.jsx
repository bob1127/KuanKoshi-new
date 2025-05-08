import styles from "./style.module.scss";
import { translate } from "../../anim";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>打造屬於您的美好家園</span>
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        ></motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          實在的構築：新案件賞
        </motion.li>
      </ul>
      <ul></ul>
      <ul></ul>
    </div>
  );
}
