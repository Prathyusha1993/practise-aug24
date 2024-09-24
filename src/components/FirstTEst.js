const FirstTest = () => {
    return (
      <div>
          <h2> First test </h2>
      </div>
    )
  }


  import { render, screen } from '@testing-library/react'
// import FirstTest from '../components/FirstTest';

test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})


// const someCOntetnt = lazy(() => import(',/example.js'));


// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();