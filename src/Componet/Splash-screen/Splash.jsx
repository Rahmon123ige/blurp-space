// src/components/SplashScreen.jsx
import React from "react";
import Logo from '../../Data/logo.webp'

const Splash = () => {
  return (
    <div style={styles.container}>
      <img
        src={Logo}
        alt="Blurp Space Logo"
        style={styles.logo}
      />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#FCFCFC",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "500px",
    height: "auto",
  },
};

export default Splash;
