"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faqData = [
  {
    id: "q1",
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a digital currency that uses blockchain technology and cryptography to secure transactions.",
  },
  {
    id: "q2",
    question: "How do I start trading crypto?",
    answer:
      "You can start trading by creating an account on a crypto exchange, funding it, and choosing your first trade.",
  },
  {
    id: "q3",
    question: "Is it safe to invest in crypto?",
    answer:
      "Crypto investing is risky. Use secure wallets and only invest what you can afford to lose.",
  },
  {
    id: "q4",
    question: "Can I use crypto like money?",
    answer:
      "Yes, in many places. Businesses, platforms, and even charities now accept crypto.",
  },
  {
    id: "q5",
    question: "What’s a blockchain?",
    answer:
      "A blockchain is a distributed ledger that records transactions securely, transparently, and immutably.",
  },
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className=" text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

        <Accordion
          type="single"
          collapsible
          value={openItem || ""}
          onValueChange={(val) => setOpenItem(val || null)}
          className="space-y-4"
        >
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-white/10 pb-2"
            >
              <AccordionTrigger
                className={`
                  flex items-center justify-between w-full text-left
                  text-base font-medium py-4
                  hover:no-underline
                  [&>svg]:hidden
                `}
              >
                {item.question}
                <span className="text-white text-xl font-light">
                  {openItem === item.id ? "–" : "+"}
                </span>
              </AccordionTrigger>

              <AccordionContent className="text-sm text-white/70 mt-1 pr-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
