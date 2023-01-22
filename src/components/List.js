import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    <div>
    {listx.map((i) => {
      return <ListItems valuex={i} />;
    })}
    </div>
  )
}

export default List;