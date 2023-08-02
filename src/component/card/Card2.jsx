import styles from "./Card.module.css";

const Card2 = ({ cardData, title }) => {
  if (!cardData) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {Object.keys(cardData).map((key) => {
      if (key === "timestamps") {
        return Object.keys(cardData[key]).map((propKey) => (
          <div className={styles.cell} key={propKey}>
            <div className={styles.value}>{propKey}</div>
            <div className={styles.value}>{cardData[key][propKey]}</div>
          </div>
        ));
      }
      return null;
    })}
    </div>
  );
};

export default Card2;