'use client'
import React, { useState, useRef, useCallback } from 'react'
import { Plus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title: string
  items: FAQItem[]
}

export default function FAQBasic({ title, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const setAnswerRef = useCallback((el: HTMLDivElement | null, index: number) => {
    answerRefs.current[index] = el
  }, [])

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-lg font-medium">{item.question}</h3>
              <Plus
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? 'transform rotate-45' : ''
                }`}
              />
            </button>
            <div
              ref={(el) => setAnswerRef(el, index)}
              id={`faq-answer-${index}`}
              className="mt-2 overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: openIndex === index ? answerRefs.current[index]?.scrollHeight + 'px' : '0px',
                opacity: openIndex === index ? 1 : 0
              }}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}