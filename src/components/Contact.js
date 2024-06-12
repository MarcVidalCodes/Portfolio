import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from './Section';
import Text from './Text';
import Link from './Link';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbdflos",
        "template_adfsmv4",
        form.current,
        "fHmr2B60Sq1RmbNtN"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSent(true);
          form.current.reset();
          setTimeout(() => {
            setIsSent(false);
          }, 5000); // Reset success message after 5 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-6 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/3 space-y-4">
        <h2 className="text-lg font-bold">Reach Out Via Socials</h2>
        <Section>
          <Text className="text-lg">
            [<span className="text-pink">Email</span>] (<Link targetBlank href="mailto:marcgavvid@gmail.com">marcgavvid@gmail.com</Link>)
          </Text>
          <br/>
          <Text className="text-lg">
            [<span className="text-pink">Github</span>] (<Link targetBlank href="https://github.com/MarcVidalCodes">https://github.com/MarcVidalCodes</Link>)
          </Text>
          <br/>
          <Text className="text-lg">
            [<span className="text-pink">LinkedIn</span>] (<Link targetBlank href="https://www.linkedin.com/in/marc-vidal-979148278/">https://www.linkedin.com/in/marc-vidal-979148278/</Link>)
          </Text>
        </Section>
      </div>
      <div className="hidden md:block" style={{ width: '1px', backgroundColor: '#FFD700' }}></div>
      <div className="block md:hidden" style={{ height: '1px', backgroundColor: '#FFD700' }}></div>
      <div className="w-full md:w-2/3 space-y-4 md:pl-8">
        <h2 className="text-lg font-bold">Or Fill Out This Form</h2>
        {isSent && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              style={{ 
                backgroundColor: 'orange', 
                borderRadius: '10%', 
                border: '1px solid var(--dark-700)', 
                padding: '20px 60px', 
                color: 'white', 
                fontWeight: 'bold', 
                outline: 'none',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s',
                display: 'inline-block',
                textAlign: 'center',
                fontSize: '1.25rem' // Increase the font size for a bigger button
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'darkorange'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'orange'}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
