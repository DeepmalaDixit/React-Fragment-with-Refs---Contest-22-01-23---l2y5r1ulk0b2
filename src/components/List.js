import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    <>
   {listx.map((i) => {
   return <ListItems valuex={i} />;
  })}
   </>
  )
}

export default List;
