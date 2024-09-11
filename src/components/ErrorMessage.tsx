import React from "react";

export default function ErrorMessage({children}: {children: React.ReactNode}) {
  return (
    <div className="error-message">
        {children}
    </div>
  )
}
