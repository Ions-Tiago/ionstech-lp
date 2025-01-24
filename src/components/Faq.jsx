import React, { useState } from "react";

// faq questions and answers
const faqData = [
  {
    question: "How the website works?",
    answer: "The website is a simple e-commerce website where you can buy products."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, PayPal, and bank transfers."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive an email with the tracking information."
  },
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase for a full refund."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support via email at support@example.com or call us at (123) 456-7890."
  }
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState()

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <div className="w-4/5 m-auto my-20 p-4">
      <h1 className="text-2xl font-semibold text-gray-600 mb-6">Frequently asked questions</h1>
      {
        faqData.map((faq, index)=>(
          <div key={index} className="mb-4">
            <div onClick={() => toggleFaq(index)} className="flex justify-between items-center bg-white/50 px-5 py-3 rounded-lg cursor-pointer">
              <h2 className="text-lg font-medium text-gray-700">{faq.question}</h2>
              <span className="text-xl text-gray-500">{openFaq === index ? "-": "+"}</span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40": "max-h-0"}`}>
              <p className="p-4 text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
export default Faq;