import React from 'react';
import Blob from '../Blob/Blob';
import Projection from '../Projection/Projection';

const Lens = () => {
  return (
    <div>
      <div
        // className="bg-black h-screen aspect-square absolute top-0 left-0 [clip-path:circle()]
        className="bg-black h-screen aspect-square relative [clip-path:circle()]
        ">
        {/* <Blob /> */}
        <Projection />
        <div className="absolute aspect-square [height:102%] [top:-1%] [left:-1%] rounded-full shadow-[inset_0_0_0.4rem_0.8rem#000] bg-clip-content mix-blend-multiply"></div>
      </div>
    </div>
  );
};

export default Lens;
