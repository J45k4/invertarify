import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AddPictureForItem = {
  itemId: Scalars['ID'];
  picture: Scalars['Upload'];
};

export type AddPictureForItemResponse = {
  __typename?: 'AddPictureForItemResponse';
  error?: Maybe<Error>;
};

export type ArchiveContainer = {
  containerId?: Maybe<Scalars['ID']>;
  archiveContent?: Maybe<Scalars['Boolean']>;
};

export type ArchiveContainerResponse = {
  __typename?: 'ArchiveContainerResponse';
  error?: Maybe<Error>;
};

export type ArchiveItem = {
  itemId: Scalars['ID'];
};

export type ArchiveItemResponse = {
  __typename?: 'ArchiveItemResponse';
  error?: Maybe<Error>;
};

export type Container = {
  __typename?: 'Container';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  items: ContainerItemsConnection;
  containers: ContainerContainersConnection;
  pictures: ContainerPicturesConnection;
  possibleItemsToAdd: Array<Item>;
};

export type ContainerContainersConnection = {
  __typename?: 'ContainerContainersConnection';
  edges?: Maybe<Array<Maybe<ContainerEdge>>>;
};

export type ContainerEdge = {
  __typename?: 'ContainerEdge';
  cursor: Scalars['String'];
  node?: Maybe<Container>;
};

export type ContainerItemsConnection = {
  __typename?: 'ContainerItemsConnection';
  items: Array<Item>;
};

export type ContainerPicturesConnection = {
  __typename?: 'ContainerPicturesConnection';
  edges?: Maybe<Array<Maybe<PictureEdge>>>;
};

export type ContainerType =
  | 'Root'
  | 'Child'
  | 'All';

export type ContainersConnection = {
  __typename?: 'ContainersConnection';
  containers: Array<Container>;
};

export type ContaninersSearchOptions = {
  containerType?: Maybe<ContainerType>;
  parentContainerId?: Maybe<Scalars['ID']>;
  searchWord?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};

export type CreateContainer = {
  parentContainerId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateContainerResponse = {
  __typename?: 'CreateContainerResponse';
  error?: Maybe<Error>;
  container?: Maybe<Container>;
};

export type CreateItem = {
  name?: Maybe<Scalars['String']>;
  barcode?: Maybe<Scalars['String']>;
  containerId?: Maybe<Scalars['String']>;
};

export type CreateItemResponse = {
  __typename?: 'CreateItemResponse';
  error?: Maybe<Error>;
  item?: Maybe<Item>;
};

export type Error = {
  __typename?: 'Error';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  barcode?: Maybe<Scalars['String']>;
  pictures: ItemPicturesConnection;
};

export type ItemPicturesConnection = {
  __typename?: 'ItemPicturesConnection';
  edges?: Maybe<Array<Maybe<PictureEdge>>>;
};

export type ItemStatus =
  | 'All'
  | 'InUse'
  | 'NotInUse';

export type Items = {
  barcode?: Maybe<Scalars['String']>;
  searchWord?: Maybe<Scalars['String']>;
  containerId?: Maybe<Scalars['ID']>;
  status?: Maybe<ItemStatus>;
};

export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  items: Array<Item>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: CreateItemResponse;
  updateItem: UpdateItemResponse;
  addPictureForItem: AddPictureForItemResponse;
  createContainer: CreateContainerResponse;
  placeItemToContainer: PlaceItemToContainerResponse;
  placeContainerToContainer: PlaceContainerToContainerResponse;
  archiveItem: ArchiveItemResponse;
  archiveContainer: ArchiveContainerResponse;
};


export type MutationCreateItemArgs = {
  input: CreateItem;
};


export type MutationUpdateItemArgs = {
  input: UpdateItem;
};


export type MutationAddPictureForItemArgs = {
  input: AddPictureForItem;
};


export type MutationCreateContainerArgs = {
  input: CreateContainer;
};


export type MutationPlaceItemToContainerArgs = {
  input: PlaceItemToContainer;
};


export type MutationPlaceContainerToContainerArgs = {
  input: PlaceContainerToContainer;
};


export type MutationArchiveItemArgs = {
  input: ArchiveItem;
};


export type MutationArchiveContainerArgs = {
  input: ArchiveContainer;
};

export type Picture = {
  __typename?: 'Picture';
  id: Scalars['ID'];
};

export type PictureEdge = {
  __typename?: 'PictureEdge';
  cursor: Scalars['String'];
  node?: Maybe<Picture>;
};

export type PlaceContainerToContainer = {
  srcContainerId: Scalars['ID'];
  dstContainerId: Scalars['ID'];
};

export type PlaceContainerToContainerResponse = {
  __typename?: 'PlaceContainerToContainerResponse';
  error?: Maybe<Error>;
};

export type PlaceItemToContainer = {
  containerId: Scalars['ID'];
  itemId: Scalars['ID'];
};

export type PlaceItemToContainerResponse = {
  __typename?: 'PlaceItemToContainerResponse';
  error?: Maybe<Error>;
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<Item>;
  items: ItemsConnection;
  container?: Maybe<Container>;
  containers: ContainersConnection;
  picture?: Maybe<Picture>;
  rootContainers: Array<Container>;
  itemsWithoutContainer: Array<Item>;
};


export type QueryItemArgs = {
  itemId: Scalars['ID'];
};


export type QueryItemsArgs = {
  input: Items;
};


export type QueryContainerArgs = {
  containerId: Scalars['ID'];
};


export type QueryContainersArgs = {
  input?: Maybe<ContaninersSearchOptions>;
};


export type QueryPictureArgs = {
  pictureId: Scalars['ID'];
};

export type UpdateItem = {
  itemId: Scalars['ID'];
  containerId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
};

export type UpdateItemResponse = {
  __typename?: 'UpdateItemResponse';
  item: Item;
};


export type Container_Tree_ContainerQueryVariables = Exact<{
  containerId: Scalars['ID'];
}>;


export type Container_Tree_ContainerQuery = (
  { __typename?: 'Query' }
  & { container?: Maybe<(
    { __typename?: 'Container' }
    & Pick<Container, 'id'>
    & { items: (
      { __typename?: 'ContainerItemsConnection' }
      & { items: Array<(
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'name'>
      )> }
    ) }
  )> }
);

export type Container_TreeQueryVariables = Exact<{ [key: string]: never; }>;


export type Container_TreeQuery = (
  { __typename?: 'Query' }
  & { rootContainers: Array<(
    { __typename?: 'Container' }
    & Pick<Container, 'id' | 'name'>
    & { items: (
      { __typename?: 'ContainerItemsConnection' }
      & { items: Array<(
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'name'>
      )> }
    ) }
  )>, itemsWithoutContainer: Array<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'name'>
  )> }
);

export type CreateItemMutationVariables = Exact<{
  input: CreateItem;
}>;


export type CreateItemMutation = (
  { __typename?: 'Mutation' }
  & { createItem: (
    { __typename?: 'CreateItemResponse' }
    & { item?: Maybe<(
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'name'>
    )> }
  ) }
);

export type Modify_Item_FormQueryVariables = Exact<{
  itemId: Scalars['ID'];
}>;


export type Modify_Item_FormQuery = (
  { __typename?: 'Query' }
  & { item?: Maybe<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'name' | 'metadata'>
  )> }
);

export type Items_ResultsQueryVariables = Exact<{
  input: Items;
}>;


export type Items_ResultsQuery = (
  { __typename?: 'Query' }
  & { items: (
    { __typename?: 'ItemsConnection' }
    & { items: Array<(
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'name'>
    )> }
  ) }
);

export type UpdateItemMutationVariables = Exact<{
  input: UpdateItem;
}>;


export type UpdateItemMutation = (
  { __typename?: 'Mutation' }
  & { updateItem: (
    { __typename?: 'UpdateItemResponse' }
    & { item: (
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'name' | 'metadata'>
    ) }
  ) }
);

export type CreateContainerMutationVariables = Exact<{
  input: CreateContainer;
}>;


export type CreateContainerMutation = (
  { __typename?: 'Mutation' }
  & { createContainer: (
    { __typename?: 'CreateContainerResponse' }
    & { container?: Maybe<(
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'name'>
    )> }
  ) }
);

export type PlaceItemToContainerMutationVariables = Exact<{
  input: PlaceItemToContainer;
}>;


export type PlaceItemToContainerMutation = (
  { __typename?: 'Mutation' }
  & { placeItemToContainer: { __typename: 'PlaceItemToContainerResponse' } }
);


export const Container_Tree_ContainerDocument = gql`
    query container_tree_container($containerId: ID!) {
  container(containerId: $containerId) {
    id
    items {
      items {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useContainer_Tree_ContainerQuery__
 *
 * To run a query within a React component, call `useContainer_Tree_ContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainer_Tree_ContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainer_Tree_ContainerQuery({
 *   variables: {
 *      containerId: // value for 'containerId'
 *   },
 * });
 */
export function useContainer_Tree_ContainerQuery(baseOptions: Apollo.QueryHookOptions<Container_Tree_ContainerQuery, Container_Tree_ContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Container_Tree_ContainerQuery, Container_Tree_ContainerQueryVariables>(Container_Tree_ContainerDocument, options);
      }
export function useContainer_Tree_ContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Container_Tree_ContainerQuery, Container_Tree_ContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Container_Tree_ContainerQuery, Container_Tree_ContainerQueryVariables>(Container_Tree_ContainerDocument, options);
        }
export type Container_Tree_ContainerQueryHookResult = ReturnType<typeof useContainer_Tree_ContainerQuery>;
export type Container_Tree_ContainerLazyQueryHookResult = ReturnType<typeof useContainer_Tree_ContainerLazyQuery>;
export type Container_Tree_ContainerQueryResult = Apollo.QueryResult<Container_Tree_ContainerQuery, Container_Tree_ContainerQueryVariables>;
export const Container_TreeDocument = gql`
    query container_tree {
  rootContainers {
    id
    name
    items {
      items {
        id
        name
      }
    }
  }
  itemsWithoutContainer {
    id
    name
  }
}
    `;

/**
 * __useContainer_TreeQuery__
 *
 * To run a query within a React component, call `useContainer_TreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainer_TreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainer_TreeQuery({
 *   variables: {
 *   },
 * });
 */
export function useContainer_TreeQuery(baseOptions?: Apollo.QueryHookOptions<Container_TreeQuery, Container_TreeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Container_TreeQuery, Container_TreeQueryVariables>(Container_TreeDocument, options);
      }
export function useContainer_TreeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Container_TreeQuery, Container_TreeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Container_TreeQuery, Container_TreeQueryVariables>(Container_TreeDocument, options);
        }
export type Container_TreeQueryHookResult = ReturnType<typeof useContainer_TreeQuery>;
export type Container_TreeLazyQueryHookResult = ReturnType<typeof useContainer_TreeLazyQuery>;
export type Container_TreeQueryResult = Apollo.QueryResult<Container_TreeQuery, Container_TreeQueryVariables>;
export const CreateItemDocument = gql`
    mutation createItem($input: CreateItem!) {
  createItem(input: $input) {
    item {
      id
      name
    }
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const Modify_Item_FormDocument = gql`
    query modify_item_form($itemId: ID!) {
  item(itemId: $itemId) {
    id
    name
    metadata
  }
}
    `;

/**
 * __useModify_Item_FormQuery__
 *
 * To run a query within a React component, call `useModify_Item_FormQuery` and pass it any options that fit your needs.
 * When your component renders, `useModify_Item_FormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModify_Item_FormQuery({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useModify_Item_FormQuery(baseOptions: Apollo.QueryHookOptions<Modify_Item_FormQuery, Modify_Item_FormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Modify_Item_FormQuery, Modify_Item_FormQueryVariables>(Modify_Item_FormDocument, options);
      }
export function useModify_Item_FormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Modify_Item_FormQuery, Modify_Item_FormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Modify_Item_FormQuery, Modify_Item_FormQueryVariables>(Modify_Item_FormDocument, options);
        }
export type Modify_Item_FormQueryHookResult = ReturnType<typeof useModify_Item_FormQuery>;
export type Modify_Item_FormLazyQueryHookResult = ReturnType<typeof useModify_Item_FormLazyQuery>;
export type Modify_Item_FormQueryResult = Apollo.QueryResult<Modify_Item_FormQuery, Modify_Item_FormQueryVariables>;
export const Items_ResultsDocument = gql`
    query items_results($input: Items!) {
  items(input: $input) {
    items {
      id
      name
    }
  }
}
    `;

/**
 * __useItems_ResultsQuery__
 *
 * To run a query within a React component, call `useItems_ResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItems_ResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItems_ResultsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useItems_ResultsQuery(baseOptions: Apollo.QueryHookOptions<Items_ResultsQuery, Items_ResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Items_ResultsQuery, Items_ResultsQueryVariables>(Items_ResultsDocument, options);
      }
export function useItems_ResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Items_ResultsQuery, Items_ResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Items_ResultsQuery, Items_ResultsQueryVariables>(Items_ResultsDocument, options);
        }
export type Items_ResultsQueryHookResult = ReturnType<typeof useItems_ResultsQuery>;
export type Items_ResultsLazyQueryHookResult = ReturnType<typeof useItems_ResultsLazyQuery>;
export type Items_ResultsQueryResult = Apollo.QueryResult<Items_ResultsQuery, Items_ResultsQueryVariables>;
export const UpdateItemDocument = gql`
    mutation updateItem($input: UpdateItem!) {
  updateItem(input: $input) {
    item {
      id
      name
      metadata
    }
  }
}
    `;
export type UpdateItemMutationFn = Apollo.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, options);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = Apollo.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const CreateContainerDocument = gql`
    mutation createContainer($input: CreateContainer!) {
  createContainer(input: $input) {
    container {
      id
      name
    }
  }
}
    `;
export type CreateContainerMutationFn = Apollo.MutationFunction<CreateContainerMutation, CreateContainerMutationVariables>;

/**
 * __useCreateContainerMutation__
 *
 * To run a mutation, you first call `useCreateContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContainerMutation, { data, loading, error }] = useCreateContainerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateContainerMutation(baseOptions?: Apollo.MutationHookOptions<CreateContainerMutation, CreateContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContainerMutation, CreateContainerMutationVariables>(CreateContainerDocument, options);
      }
export type CreateContainerMutationHookResult = ReturnType<typeof useCreateContainerMutation>;
export type CreateContainerMutationResult = Apollo.MutationResult<CreateContainerMutation>;
export type CreateContainerMutationOptions = Apollo.BaseMutationOptions<CreateContainerMutation, CreateContainerMutationVariables>;
export const PlaceItemToContainerDocument = gql`
    mutation placeItemToContainer($input: PlaceItemToContainer!) {
  placeItemToContainer(input: $input) {
    __typename
  }
}
    `;
export type PlaceItemToContainerMutationFn = Apollo.MutationFunction<PlaceItemToContainerMutation, PlaceItemToContainerMutationVariables>;

/**
 * __usePlaceItemToContainerMutation__
 *
 * To run a mutation, you first call `usePlaceItemToContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceItemToContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeItemToContainerMutation, { data, loading, error }] = usePlaceItemToContainerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlaceItemToContainerMutation(baseOptions?: Apollo.MutationHookOptions<PlaceItemToContainerMutation, PlaceItemToContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceItemToContainerMutation, PlaceItemToContainerMutationVariables>(PlaceItemToContainerDocument, options);
      }
export type PlaceItemToContainerMutationHookResult = ReturnType<typeof usePlaceItemToContainerMutation>;
export type PlaceItemToContainerMutationResult = Apollo.MutationResult<PlaceItemToContainerMutation>;
export type PlaceItemToContainerMutationOptions = Apollo.BaseMutationOptions<PlaceItemToContainerMutation, PlaceItemToContainerMutationVariables>;