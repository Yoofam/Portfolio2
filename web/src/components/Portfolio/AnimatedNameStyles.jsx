import React from "react";

export default function AnimatedNameStyles() {
  return (
    <style jsx global>{`
        .animated-name {
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #f9ca24
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 8s ease-in-out infinite;
          font-weight: bold;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @supports not (-webkit-background-clip: text) {
          .animated-name {
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            color: transparent;
            background-clip: text;
          }
        }
      `}</style>
  );
}
