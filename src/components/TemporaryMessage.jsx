import { TemporaryMessage_container, TemporaryMessage_message, TemporaryMessage_p } from '../styles/TemporaryMessage';
import {Icon} from '../components';
import theme from '../theme';
import { useState, useEffect } from 'react';

export default function TemporaryMessage({top, left, message, type, isVisible, timeout}){
  const [visible, setVisible] = useState(isVisible);

  const TYPE = {
    success: {
      icon: 'check-circle-fill',
      color: theme.successColor
    },
    error: {
      icon: 'x-circle-fill',
      color: theme.errorColor
    }
  }

  function handleVisibility(){
    useEffect(() => {
      if (timeout && isVisible) {
        const timer = setTimeout(() => {
          setVisible(false);
        }, timeout);
  
        return () => {
          clearTimeout(timer);
          setVisible(true);
        }
      }
    }, [isVisible, timeout]);
  }

  handleVisibility()

  return(
    <TemporaryMessage_container top={top} left={left}  >
      <TemporaryMessage_message isVisible={visible} >
        <TemporaryMessage_p>
          {message}
        </TemporaryMessage_p>
        <Icon  name={type === 1 ? TYPE.success.icon : TYPE.error.icon} size={'1.4rem'} color={type === 1 ? TYPE.success.color : TYPE.error.color} />
      </TemporaryMessage_message>
    </TemporaryMessage_container>
  )
}