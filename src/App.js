import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// import SimpleReactHook from './components/SimpleReactHook';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Todo from './components/Todo';
import FetchDisplay from './components/FetchDisplay';
import SimpleReactHook from './components/SimpleReactHook';
import TodoPlaceholder from './components/TodoPlaceholder';
import RadioButton from './components/RadioButton';
import InputFields from './components/InputFields';
import ImageCarousel from './components/ImageCarousel';

const images=[
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEpPi8Xx7-5XkP2Ch9TX_pqkUe4BmARMLaA&s',id:1},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh9-ftTq0TLQuESpKn73UqBjKAlz77xIFFA&s',id:2},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vifsC2EXySxPUAwc5VAzZYR3GHRcpmHLOQ&s',id:3},
  {image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2020/03/final_credit-alamy-1.jpg',id:4},
  {image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2020/05/final_animals-homeschooling_credit-alamy.jpg',id:5},
  {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzpeocx-X-AF0_Hs20J8PlE-_2vZIqM7sUw&s',id:6},
];

const App = () => {
  const appRouter = createBrowserRouter(
    [
      {path: '/',
        // element: <><Header /><Home /> <TodoPlaceholder /> <RadioButton /></>
        element: <><Header /><Home /> <InputFields /></>
      },
      {path: '/about',
        element: <><Header /><About /></>
      },
      {path: '/contact',
        element: <><Header /><Contact /></>
      },
      {path: '/todo',
        element: <Todo />
      },
      {
        path: '/fetch',
        element: <FetchDisplay />
      },
      {
        path: '/table',
        element: <SimpleReactHook />
      },
      {
        path:'/images',
        element: <ImageCarousel images={images}/>
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;