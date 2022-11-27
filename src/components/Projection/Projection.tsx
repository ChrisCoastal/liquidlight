import React from 'react';

const Projection = () => {
  return (
    // <div className="absolute top-0 left-1/2 m-auto -translate-x-1/2 h-full aspect-square bg-red-400"></div>
    <div className="absolute top-0 left-0 h-screen aspect-square bg-red-400 bg-blend-multiply">
      <div className="absolute top-1/2 left-1/2 bg-violet-500 w-12 h-12 rounded-full shadow-[0_0_0.4rem_0.2rem#00000062]"></div>
    </div>
  );
};

export default Projection;
