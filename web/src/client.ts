import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from "apollo-upload-client"

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ? process.env.NEXT_PUBLIC_SERVER_URL : ""

const httpLink = createUploadLink({
	uri: `${serverUrl}/graphql`
})

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		}
	}
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		for (const err of graphQLErrors) {
			console.log(err)

			if (err.extensions && err.extensions.code === "UNAUTHENTICATED") {
				window.location.href = "/login"
			}
		}
	}
})


export const client = new ApolloClient({
	link: authLink.concat(errorLink).concat(httpLink),
	cache: new InMemoryCache()
});