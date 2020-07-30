import React, {useState} from 'react';

function App() {
                                              // let counter;
                                              // let counter = 5;
  const [count, setCount] = useState(5);
  // const [anyConst, setAnyConst] = useState(50);

  const add = () => {
                                              // counter = counter + 1;
    setCount(count + 1);
                                        // console.log('ADD ONE', counter);
    // setAnyConst(Math.random());
  };

  const minus = () => {
                                          //counter = counter - 1;
    setCount(count - 1);
                                      // console.log('MINUS ONE', counter);
    // setAnyConst(Math.random());
  };

  return (
    <div>
      <button onClick={add}>Add One</button>
                                            {/*{} {counter} {}*/}
       {} {count} {}
       {/*{anyConst}*/}

      <button onClick={minus}>Minus One</button>
    </div>
  );
}

export default App;
