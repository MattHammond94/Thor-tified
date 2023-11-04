import { useEffect, useState } from 'react';

export default function List({ getItemsWithParams }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItemsWithParams(5))
    console.log('Updating Items')
  }, [getItemsWithParams]);

  return items.map(item => <div key={item}>{item}</div>)
}