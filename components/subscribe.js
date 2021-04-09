import React, { useRef, useState } from 'react';
import styles from '../styles/Subscribe.module.css';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    setLoading(false);

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <form onSubmit={subscribe} className={styles.formContainer}>
      <div className={styles.subscribeText}>Subscribe to my newsletter!</div>
      <div className={styles.flavorText}>
        Get emails from me about life updates, stray thoughts, and questions!
      </div>
      <input
        id='email-input'
        name='email'
        placeholder='example@gmail.com'
        className={styles.emailInput}
        ref={inputEl}
        type='email'
      />
      <button type='submit' className={styles.button}>
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
      <div className={styles.bottomText}>{message ? message : ''}</div>
    </form>
  );
}
