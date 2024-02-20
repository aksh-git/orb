"use client";
import React, { useState, useEffect } from "react";
import { XIcon } from "lucide-react";

export enum errTypes {
  ERROR = "ERROR",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARN = "WARN",
  NEUTRAL = "NEUTRAL",
}

interface ToastProps {
  type: errTypes;
  message: string;
  autoDismiss?: boolean;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  autoDismiss = true,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, onClose]);

  let toastClass = "";
  let icon = "";

  switch (type) {
    case errTypes.ERROR:
      toastClass = "border-r-8 border-red-500";
      icon = "!";
      break;
    case errTypes.INFO:
      toastClass = "border-r-8 border-blue-500";
      icon = "i";
      break;
    case errTypes.SUCCESS:
      toastClass = "border-r-8 border-green-500";
      icon = "✔";
      break;
    case errTypes.WARN:
      toastClass = "border-r-8 border-yellow-500";
      icon = "⚠";
      break;
    case errTypes.NEUTRAL:
      toastClass = "border-r-8 border-gray-500";
      icon = "-";
      break;
    default:
      toastClass = "border-r-8 border-gray-500";
      icon = "?";
  }

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  return visible ? (
    <div
      className={`fixed right-10 bottom-10 px-5 py-4 bg-white drop-shadow-lg ${toastClass}`}
    >
      <p className="text-sm">
        <span className="mr-2 inline-block px-3 py-1 rounded-full bg-slate-500 text-white font-extrabold">
          {icon}
        </span>
        {message}
        {onClose && (
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 hover:bg-gray-100 p-1.5"
          >
            <XIcon className="h-5 w-5" />
          </button>
        )}
      </p>
    </div>
  ) : null;
};

export default Toast;
