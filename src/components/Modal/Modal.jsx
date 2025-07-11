import S from "./Modal.module.css";

export function Modal({ show, title, children, onClose }) {
  const onContainerClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    onClose();
  };
  if (!show) {
    return;
  }
  return (
    <div className={S.container} onClick={onContainerClick}>
      <div className={S.body}>
        <div className={S.close} onClick={onClose}>
          &times;
        </div>
        <h2 className={S.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
}
