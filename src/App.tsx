import React, {FC, useState} from 'react';

import Button from './components/Button'

const App:FC = () => {

  const [currentMessage, setCurrentMessage] = useState<string>('')

  const showMessage = (message: string | undefined) => {
    if(!message) {
      console.log('No message or color')
      return;
    }
    setCurrentMessage(message)
  }

  // useEffect(() => {

  // },[currentColor])

  return (
    <>
      <div className="h-64 flex justify-center items-center gap-4">
        <Button title='Default Button' onMessageHandler={showMessage}/>
        <Button title='Link Button' onMessageHandler={showMessage} href="https://www.google.com/"/>
        <Button title='Alert Button' onMessageHandler={showMessage} alert={true}/>
      </div>
      <div className='mx-auto text-center'>
        <div>Message: {currentMessage}</div>
      </div>
    </>
  );
}

export default App;
