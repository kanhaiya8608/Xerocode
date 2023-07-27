import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  email: string;
}

const SubscribeBox = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false); // New state variable for subscription status

  useEffect(() => {
    // Check if the email is already subscribed when the component mounts
    checkSubscription();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const checkSubscription = async () => {
    try {
      // Make an API call to check if the email is subscribed
      const response = await axios.get(`/api/checkSubscription?email=${email}`);
      setIsSubscribed(response.data.isSubscribed);
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Check if the email is already subscribed before making the API call
      if (isSubscribed) {
        toast.info('You are already subscribed!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        setEmail('');
        return;
      }

      // If not subscribed, proceed with the subscription
      await axios.post('/api/subscribe', { email });
      toast.success('Subscription successful!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      setEmail('');
      setIsSubscribed(true); // Update the subscription status
    } catch (error) {
      console.error('Error submitting email:', error);
      toast.error('Failed to subscribe. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className=' flex flex-col justify-center items-center  text-center p-4'>
       <div className=" rounded-full bg-gradient-to-r p-[2px] bg-gradient-to-r from-fuchsia-500 via-red-200 to-fuchsia-500 overflow-hidden">
       <div className=" bg-gradient-to-r flex flex-col justify-between h-full bg-black rounded-lg ">
      <form className='shadow-m bg-black rounded-full  p-2' onSubmit={handleSubmit}>
        <input className='text-lg bg-transparent py-2 px-4 focus:outline-none focus:border-blue-500 pr-20'
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleChange}
        />
        <button className='text-sm border-2 border-gray-50 rounded-full p-4 hover:bg-gray-50 hover:text-black' type="submit">JOIN WAITLIST</button>
      </form>
      </div>
      </div>
      <ToastContainer />
    </div>
    
  );
};

export default SubscribeBox;
