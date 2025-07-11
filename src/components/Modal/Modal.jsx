import S from "./Modal.module.css";

export function Modal({ show, title, children }) {
  if (!show) {
    return;
  }
  return (
    <div className={S.container}>
      <div className={S.body}>
        <div className={S.close}>&times;</div>
        <h2 className={S.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
}
