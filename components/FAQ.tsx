'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What Services Does 10TEN Consulting Specialise In?",
    answer: "We specialise in Sage Intacct licensing and implementation, comprehensive Payroll & HR solutions, and outsourced accounting services tailored to streamline your financial operations."
  },
  {
    question: "Who Are Your Typical Clients?",
    answer: "We work with growing businesses, SMEs, nonprofits, healthcare organizations, professional services firms, and essentially any organization looking to improve financial visibility and efficiency."
  },
  {
    question: "How Is 10TEN Different From Other Consulting Firms?",
    answer: "We bridge the gap between technology and practical accounting. We understand your business first before recommending a solution, ensuring that technology serves your specific operational needs."
  },
  {
    question: "How Can I Get Started With 10TEN?",
    answer: "You can get started by booking a consultation through our website. We will schedule an initial meeting to discuss your current challenges and determine the best approach for your organization."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-gray-800 rounded bg-[#2a2a2a] overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center justify-between p-4 text-left font-semibold transition-colors ${
                isOpen ? 'bg-[#13363B] text-white' : 'bg-[#1a1a1a] text-gray-200 hover:bg-[#252525]'
              }`}
            >
              {faq.question}
              <span className="material-symbols-outlined">
                {isOpen ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-40 opacity-100 p-4 bg-[#1a1a1a] text-gray-300' : 'max-h-0 opacity-0 px-4 py-0'
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
