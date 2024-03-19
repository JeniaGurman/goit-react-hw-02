import styles from "./Feedback.module.css";

const Feedback = ({
  values,
  totalFeedback,
  positiveFeedback = { positiveFeedback },
}) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Good: {values.good}</li>
      <li className={styles.item}>Neutral: {values.neutral}</li>
      <li className={styles.item}>Bad: {values.bad}</li>
      <li className={styles.item}>Total: {totalFeedback}</li>
      <li className={styles.item}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
