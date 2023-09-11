import React from 'react';

interface Props {
  title: string;
}

function GetLogo({ title }: Props) {
  const imagePath = `./src/comps/img/${title}.png`;

  return (
    <>
      <img
        key={title}
        src={imagePath}
        alt={'logo'}
        width="100%"
        height="20%"
      />
    </>
  );
}


export default GetLogo;
