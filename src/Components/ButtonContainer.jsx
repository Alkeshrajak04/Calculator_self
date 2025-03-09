import styles from "./ButtonContainer.module.css";
import PropTypes from "prop-types"; // Import PropTypes for validation

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "-",
    ".",
    "=",
    "0",
  ];

  return (
    <div className={styles.ButtonContainer}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

// Adding PropTypes validation
ButtonContainer.propTypes = {
  onButtonClick: PropTypes.func.isRequired, // Ensuring 'onButtonClick' is a function and required
};

export default ButtonContainer;
