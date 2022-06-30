import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Importing Styles
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const errorCodeRef = useRef(null);

  useEffect(() => {
    const visual = errorCodeRef.current;
    const events = ["resize", "load"];

    events.forEach(function (e) {
      window.addEventListener(e, function () {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = 45 / (width / height);
        visual.style.transform =
          "translate(-50%, -50%) rotate(-" + ratio + "deg)";
      });
    });
  }, []);

  return (
    <main className={styles.main}>
      <button
        onClick={() => navigate(-1)}
        type='button'
        className={styles.back_button}
      >
        <svg
          height='0.8em'
          width='0.8em'
          viewBox='0 0 2 1'
          preserveAspectRatio='none'
        >
          <polyline
            fill='none'
            stroke='#777777'
            strokeWidth='0.1'
            points='0.9,0.1 0.1,0.5 0.9,0.9'
          />
        </svg>
        Go Back
      </button>
      <div className={styles.background_wrapper}>
        <h1 ref={errorCodeRef} className={styles.error_code}>
          404
        </h1>
      </div>
      <p className={styles.message}>
        The page you’re looking for does not exist.
      </p>
    </main>
  );
};

export default NotFound;
