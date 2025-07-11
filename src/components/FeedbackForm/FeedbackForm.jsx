import S from "./FeedbackForm.module.css";

export function FeedbackForm({ onChange, onSubmit }) {
  const onFieldChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    onChange?.(name, value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);

    target.reset();

    onSubmit?.(data);
  };

  return (
    <form className={S.container} onSubmit={onFormSubmit}>
      <div className={S.group}>
        <input
          type="text"
          placeholder="Ваше имя"
          className={S.input}
          name="username"
          onChange={onFieldChange}
          required
        />
      </div>
      <div className={S.group}>
        <input
          type="email"
          placeholder="Email"
          className={S.input}
          name="email"
          onChange={onFieldChange}
          required
        />
      </div>
      <div className={S.group}>
        <textarea
          placeholder="Ваше сообщение"
          className={S.input}
          name="message"
          onChange={onFieldChange}
          required
        />
      </div>
      <div className={S.group}>
        <label className={S.checkbox}>
          <input type="checkbox" required />
          Принимаю политику обработки данных
        </label>
      </div>
      <div className={S.group}>
        <button>Отправить</button>
      </div>
    </form>
  );
}
