import { Mass } from './Notification.styled';
import { FaAngellist } from 'react-icons/fa';

export const Notification = ({ message }) => {
  return (
    <Mass>
      {message}
      <FaAngellist />
    </Mass>
  );
};
