// Make sure to have the following extension:
// - ES7+ React/Redux/React-Native snippets

// Also make sure to get "React Developer Tools" from Chrome Extensions

import type { ReactNode } from "react";

// Type "rafce" hit enter
// Generates this code:

// import React from 'react'
//
// const Alert = () => {
//   return (
//     <div>Alert</div>
//   )
// }
//
// export default Alert

interface AlertProps {
  children: string;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

interface AlertProps2 {
  children: ReactNode; // Allows you to pass html
}

export const Alert2 = ({ children }: AlertProps2) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};
