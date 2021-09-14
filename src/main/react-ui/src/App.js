import './App.css';
import { Route} from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import AddBook from './components/AddBook';
import Books from './components/Books';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/addBook" component={AddBook} />
          <Route path="/" component={Books} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
