import SvgComp from "@/components/common/SvgComp";
import style from "./index.module.scss";

type ServiceTabProps = {
  title: string;
  index: number;
  isActive: boolean;
  tabId: string;
  panelId: string;
  onActivate: () => void;
};

const ServiceTab = ({
  title,
  index,
  isActive,
  tabId,
  panelId,
  onActivate,
}: ServiceTabProps) => {
  return (
    <button
      type="button"
      id={tabId}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      className={`${style.tab} ${isActive ? style.active : ""} reveal-item`}
      data-reveal="left"
      data-cursor="view"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
    >
      <span className={style.index}>{String(index + 1).padStart(2, "0")}</span>
      <span className={style.title}>{title}</span>
      <span className={`${style.arrow} svg-icon`} aria-hidden>
        <SvgComp src="/assets/svg/arrow-next.svg" />
      </span>
    </button>
  );
};

export default ServiceTab;
