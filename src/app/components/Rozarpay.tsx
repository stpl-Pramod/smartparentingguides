import React, { useEffect, useRef } from 'react';

const RazorpayPaymentButton: React.FC = () => {
  // Specify the type of the ref to be an HTMLFormElement
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    
    // Set the specific Button ID from your Razorpay Dashboard
    script.setAttribute("data-payment_button_id", "pl_S4sQIdLlf1GsEE");

    // Append the script to the form ref
    if (formRef.current) {
      formRef.current.appendChild(script);
    }

    // Cleanup function to prevent duplicate buttons during re-renders (important for React 18+)
    return () => {
      if (formRef.current) {
        formRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="razorpay-container" style={{ minHeight: '50px' }}>
      <form ref={formRef}>
        {/* The Razorpay script will automatically inject the button inside this form */}
      </form>
    </div>
  );
};

export default RazorpayPaymentButton;