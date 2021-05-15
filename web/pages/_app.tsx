import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../src/client';
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from 'react-dnd';

function MyApp({ Component, pageProps }) {
  return (
	  <ApolloProvider client={client}>
		  	<DndProvider backend={HTML5Backend}>
				<Component {...pageProps} />
			</DndProvider>
	  </ApolloProvider>
  ) 
}

export default MyApp
