import style from "./index.module.scss";

type FaqAccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  buttonId: string;
  panelId: string;
  index: number;
  onToggle: () => void;
};

const FaqAccordionItem = ({
  question,
  answer,
  isOpen,
  buttonId,
  panelId,
  index,
  onToggle,
}: FaqAccordionItemProps) => {
  return (
    <div
      className={`${style.item} reveal-item`}
      data-reveal={index % 2 === 0 ? "up" : "rise"}
    >
      <h3 className={style.question}>
        <button
          id={buttonId}
          type="button"
          className={style.trigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          data-cursor="link"
          onClick={onToggle}
        >
          <span>{question}</span>
          <span
            className={`${style.icon} ${isOpen ? style.iconOpen : ""}`}
            aria-hidden
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`${style.panel} ${isOpen ? style.open : ""}`}
      >
        <div className={style.panelInner}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordionItem;
