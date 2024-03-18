import { useState, useEffect } from "react";
import Feedback from "./componets/Feedback/Feedback";
import Options from "./componets/Options/Options";
import Description from "./componets/Description/Description";
import Notification from "./componets/Notification/Notification";

const feedbackValues = { good: 0, neutral: 0, bad: 0 };
const STORAGE_KEY = "feedback";

const App = () => {
  const [values, setValues] = useState(() => {
    const stringifiValues = localStorage.getItem(STORAGE_KEY);
    const parseValues = JSON.parse(stringifiValues) || feedbackValues;
    return parseValues;
  });

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };
  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  const handleResetClick = () => {
    setValues(feedbackValues);
  };
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleResetClick={handleResetClick}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
