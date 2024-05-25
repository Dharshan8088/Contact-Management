import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from '../components/Dashboard';

const queryClient = new QueryClient();

const Charts = () => {
  return (
    <>
        <div>
            <QueryClientProvider client={queryClient}>
                <Dashboard />
            </QueryClientProvider>
        </div>
    </>
  )
}

export default Charts;
