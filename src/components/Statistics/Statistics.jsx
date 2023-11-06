import { Stat, Span } from './Stat.Styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Stat>
      <Span>Neutral: {neutral}</Span>
      <Span>Good: {good}</Span>
      <Span>Bad: {bad}</Span>
      <Span>Total: {total}</Span>
      <Span>Positive Feedback: {positivePercentage}%</Span>
    </Stat>
  );
};
