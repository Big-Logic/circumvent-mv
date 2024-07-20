interface BtnParams {
  textContent: string;
  btnType: "submit" | "reset" | "button";
  styles?: string;
  handleClick: () => void;
  disabled?: boolean;
}

function Button({
  textContent,
  btnType,
  styles,
  handleClick,
  disabled = false,
}: BtnParams) {
  return (
    <button
      type={btnType}
      className={`${styles}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span>{textContent}</span>
    </button>
  );
}

export default Button;
