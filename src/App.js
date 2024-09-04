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

const App = () => {
  const appRouter = createBrowserRouter(
    [
      {path: '/',
        element: <><Header /><Home /> <TodoPlaceholder /> <RadioButton /></>
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