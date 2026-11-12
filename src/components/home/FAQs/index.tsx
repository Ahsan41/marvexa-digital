"use client";

import { useId, useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import FaqAccordionItem from "@/components/home/FAQs/FaqAccordionItem";
import type { FaqItem } from "@/types/content";
import style from "./index.module.scss";

type FAQsProps = {
  title: string;
  items: FaqItem[];
  eyebrow?: string;
  titleId?: string;
};

const FAQs = ({
  eyebrow,
  title,
  items,
  titleId = "faq-section-title",
}: FAQsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby={titleId}
      data-section="faqs"
    >
      <div className="container">
        <div className={style.layout}>
          <div className={style.headingCol}>
            <SectionHeading
              tag={eyebrow}
              title={title}
              titleId={titleId}
              className={style.faqHeading}
            />
          </div>

          <div className={style.list}>
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <FaqAccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={isOpen}
                  index={index}
                  buttonId={`${baseId}-button-${index}`}
                  panelId={`${baseId}-panel-${index}`}
                  onToggle={() => setOpenIndex(isOpen ? null : index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
