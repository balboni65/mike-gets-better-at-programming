// Make sure to have the following extension:
// - ES7+ React/Redux/React-Native snippets

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
}

export const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
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
