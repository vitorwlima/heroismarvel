import React from 'react';

interface ITitle {
  title: string;
}

const Head:React.FC<ITitle> = (props) => {
  React.useEffect(() => {
    const { title } = props
    document.title = title;
  }, [props]);
  return <></>;
};

export default Head;
