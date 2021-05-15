import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/client';

function MyApp({ Component, pageProps }) {
  return (
	  <ApolloProvider client={client}>
		<Component {...pageProps} />
	  </ApolloProvider>
  ) 
}

export default MyApp
