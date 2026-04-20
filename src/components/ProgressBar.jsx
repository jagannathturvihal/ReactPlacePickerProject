import React from 'react';

export default function ProgressBar({ timer }) {
 const [progress, setProgress] = React.useState(timer);

  React.useEffect(() => {
   const interval = setInterval(() => {
    setProgress(preTimer => preTimer - 10);
  }, 10);

  return () => {
      clearInterval(interval);
    };
  } , []);
    return (
       <progress value={progress} max={timer}></progress>
    );
}