// // TODO
const { useState } = React;

const GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    {/* <h3>This is the first grocery:</h3>
    <Cucumbers />
    <h3>This is the second grocery:</h3>
    <Kale /> */}
    {props.groceryItems.map((groceryItem) => (
      <GroceryListItem groceryItem = {groceryItem} />
    ))}
    {/* <GroceryListItem groceryItem = {props.groceryItems[0]}/>
    <GroceryListItem groceryItem = {props.groceryItems[1]}/>
    <GroceryListItem groceryItem = {props.groceryItems[2]}/>
    <GroceryListItem groceryItem = {props.groceryItems[3]}/> */}
  </div>
);


const GroceryListItem = (props) => {

  const [isDone, setIsDone] = useState(false);

  const style = {
    fontWeight : isDone? 'bold' : 'normal'
    // textDecoration: isDone ? 'line-through' : 'none'
  };

  return (
    <div className="groceryItem">
      {/* <div style = {style} onClick={()=> setIsDone(!isDone)}> */}
        {/* onMouseOver={makeBold} onMouseOut={makeNormal}> */}
        <li style = {style} onMouseOver={()=> setIsDone(!isDone)} onMouseOut ={()=> setIsDone(!isDone)}>
          {props.groceryItem}
        </li>
    {/* </div> */}
    </div>
  );

  // function makeBold(e) {
  //   e.target.style.fontWeight = 'bold';
  // }
  // function makeNormal(e) {
  //   e.target.style.fontWeight = 'normal';
  // }

  // return (
  //   <div className="groceryItem">
  //     <div onMouseOver={makeBold} onMouseOut={makeNormal}>
  //       <li>{props.groceryItem} </li>
  //     </div>
  //   </div>
  // );
}

ReactDOM.render(
  <GroceryList groceryItems= {['Cucumbers', 'Kale', 'Apple', 'Peach']}/>,
  document.getElementById('app')
);
