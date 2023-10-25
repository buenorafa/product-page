import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);

export default function NotificationProvider({ children }) {
  const [showNotInHeader, setShowNotInHeader] = useState(false);

  return (
    <NotificationContext.Provider
      value={{ showNotInHeader, setShowNotInHeader }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
