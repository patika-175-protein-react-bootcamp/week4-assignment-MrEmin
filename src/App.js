import './App.css';
import Layout from './components/Layout';
import { OperatorProvider } from './contexts/operator';
import Router from './rooter/rooter';

function App() {
  return (
    <OperatorProvider>
      <Layout>
        <Router />
      </Layout>
    </OperatorProvider>
  );
}

export default App;