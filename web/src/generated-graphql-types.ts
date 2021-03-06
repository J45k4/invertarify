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
  DateTime: any;
  Upload: any;
};

export type AddPictureForItem = {
  itemId: Scalars['ID'];
  picture: Scalars['Upload'];
};

export type AddPictureForItemResponse = {
  __typename?: 'AddPictureForItemResponse';
  item: Item;
};

export type ArchiveContainer = {
  containerId?: Maybe<Scalars['ID']>;
  archiveContent?: Maybe<Scalars['Boolean']>;
};

export type ArchiveContainerResponse = {
  __typename?: 'ArchiveContainerResponse';
  container: Container;
};

export type ArchiveItem = {
  itemId: Scalars['ID'];
};

export type ArchiveItemResponse = {
  __typename?: 'ArchiveItemResponse';
  item: Item;
};

export type Container = {
  __typename?: 'Container';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  pathParts: Array<PathPart>;
  items: ContainerItemsConnection;
  containers: ContainerContainersConnection;
  pictures: ContainerPicturesConnection;
  possibleItemsToAdd: Array<Item>;
};

export type ContainerContainersConnection = {
  __typename?: 'ContainerContainersConnection';
  containers: Array<Container>;
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
  pathParts: Array<PathPart>;
  pictures: ItemPicturesConnection;
  deletedAt?: Maybe<Scalars['DateTime']>;
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
  updateContainer: UpdateContainerRespose;
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


export type MutationUpdateContainerArgs = {
  input: UpdateContainer;
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

export type PathPart = {
  __typename?: 'PathPart';
  id: Scalars['ID'];
  name: Scalars['String'];
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
  srcContainer: Container;
  dstContainer: Container;
  previousContainer?: Maybe<Container>;
};

export type PlaceItemToContainer = {
  containerId: Scalars['ID'];
  itemId: Scalars['ID'];
};

export type PlaceItemToContainerResponse = {
  __typename?: 'PlaceItemToContainerResponse';
  container?: Maybe<Container>;
  item?: Maybe<Item>;
  previousContainer?: Maybe<Container>;
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

export type UpdateContainer = {
  containerId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateContainerRespose = {
  __typename?: 'UpdateContainerRespose';
  container?: Maybe<Container>;
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


export type Modify_ContainerQueryVariables = Exact<{
  containerId: Scalars['ID'];
}>;


export type Modify_ContainerQuery = (
  { __typename?: 'Query' }
  & { container?: Maybe<(
    { __typename?: 'Container' }
    & Pick<Container, 'id' | 'name'>
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

export type Item_PathQueryVariables = Exact<{
  itemId: Scalars['ID'];
}>;


export type Item_PathQuery = (
  { __typename?: 'Query' }
  & { item?: Maybe<(
    { __typename?: 'Item' }
    & Pick<Item, 'id'>
    & { pathParts: Array<(
      { __typename?: 'PathPart' }
      & Pick<PathPart, 'id' | 'name'>
    )> }
  )> }
);

export type Container_PathQueryVariables = Exact<{
  containerId: Scalars['ID'];
}>;


export type Container_PathQuery = (
  { __typename?: 'Query' }
  & { container?: Maybe<(
    { __typename?: 'Container' }
    & Pick<Container, 'id'>
    & { pathParts: Array<(
      { __typename?: 'PathPart' }
      & Pick<PathPart, 'id' | 'name'>
    )> }
  )> }
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

export type Serarch_ResultsQueryVariables = Exact<{
  input: Items;
}>;


export type Serarch_ResultsQuery = (
  { __typename?: 'Query' }
  & { items: (
    { __typename?: 'ItemsConnection' }
    & { items: Array<(
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'name'>
      & { pathParts: Array<(
        { __typename?: 'PathPart' }
        & Pick<PathPart, 'id' | 'name'>
      )> }
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

export type UpdateContainerMutationVariables = Exact<{
  input: UpdateContainer;
}>;


export type UpdateContainerMutation = (
  { __typename?: 'Mutation' }
  & { updateContainer: (
    { __typename?: 'UpdateContainerRespose' }
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
  & { placeItemToContainer: (
    { __typename?: 'PlaceItemToContainerResponse' }
    & { container?: Maybe<(
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'name'>
    )>, item?: Maybe<(
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'name'>
    )>, previousContainer?: Maybe<(
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'name'>
    )> }
  ) }
);

export type PlaceContainerToContainerMutationVariables = Exact<{
  input: PlaceContainerToContainer;
}>;


export type PlaceContainerToContainerMutation = (
  { __typename?: 'Mutation' }
  & { placeContainerToContainer: (
    { __typename?: 'PlaceContainerToContainerResponse' }
    & { srcContainer: (
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'name'>
    ), dstContainer: (
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'name'>
    ), previousContainer?: Maybe<(
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'name'>
    )> }
  ) }
);

export type ArchiveItemMutationVariables = Exact<{
  input: ArchiveItem;
}>;


export type ArchiveItemMutation = (
  { __typename?: 'Mutation' }
  & { archiveItem: (
    { __typename?: 'ArchiveItemResponse' }
    & { item: (
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'name' | 'deletedAt'>
    ) }
  ) }
);

export type ArchiveContainerMutationVariables = Exact<{
  input: ArchiveContainer;
}>;


export type ArchiveContainerMutation = (
  { __typename?: 'Mutation' }
  & { archiveContainer: (
    { __typename?: 'ArchiveContainerResponse' }
    & { container: (
      { __typename?: 'Container' }
      & Pick<Container, 'id' | 'name' | 'deletedAt'>
    ) }
  ) }
);

export type AddPictureForItemMutationVariables = Exact<{
  input: AddPictureForItem;
}>;


export type AddPictureForItemMutation = (
  { __typename?: 'Mutation' }
  & { addPictureForItem: (
    { __typename?: 'AddPictureForItemResponse' }
    & { item: (
      { __typename?: 'Item' }
      & Pick<Item, 'id' | 'name'>
    ) }
  ) }
);

export type Container_NodeQueryVariables = Exact<{
  containerId: Scalars['ID'];
}>;


export type Container_NodeQuery = (
  { __typename?: 'Query' }
  & { container?: Maybe<(
    { __typename?: 'Container' }
    & Pick<Container, 'id' | 'name'>
    & { containers: (
      { __typename?: 'ContainerContainersConnection' }
      & { containers: Array<(
        { __typename?: 'Container' }
        & Pick<Container, 'id' | 'deletedAt'>
      )> }
    ), items: (
      { __typename?: 'ContainerItemsConnection' }
      & { items: Array<(
        { __typename?: 'Item' }
        & Pick<Item, 'id' | 'name' | 'deletedAt'>
      )> }
    ) }
  )> }
);

export type Container_TreeQueryVariables = Exact<{ [key: string]: never; }>;


export type Container_TreeQuery = (
  { __typename?: 'Query' }
  & { rootContainers: Array<(
    { __typename?: 'Container' }
    & Pick<Container, 'id' | 'deletedAt'>
  )>, itemsWithoutContainer: Array<(
    { __typename?: 'Item' }
    & Pick<Item, 'id' | 'name' | 'deletedAt'>
  )> }
);


export const Modify_ContainerDocument = gql`
    query modify_container($containerId: ID!) {
  container(containerId: $containerId) {
    id
    name
  }
}
    `;

/**
 * __useModify_ContainerQuery__
 *
 * To run a query within a React component, call `useModify_ContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useModify_ContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModify_ContainerQuery({
 *   variables: {
 *      containerId: // value for 'containerId'
 *   },
 * });
 */
export function useModify_ContainerQuery(baseOptions: Apollo.QueryHookOptions<Modify_ContainerQuery, Modify_ContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Modify_ContainerQuery, Modify_ContainerQueryVariables>(Modify_ContainerDocument, options);
      }
export function useModify_ContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Modify_ContainerQuery, Modify_ContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Modify_ContainerQuery, Modify_ContainerQueryVariables>(Modify_ContainerDocument, options);
        }
export type Modify_ContainerQueryHookResult = ReturnType<typeof useModify_ContainerQuery>;
export type Modify_ContainerLazyQueryHookResult = ReturnType<typeof useModify_ContainerLazyQuery>;
export type Modify_ContainerQueryResult = Apollo.QueryResult<Modify_ContainerQuery, Modify_ContainerQueryVariables>;
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
export const Item_PathDocument = gql`
    query item_path($itemId: ID!) {
  item(itemId: $itemId) {
    id
    pathParts {
      id
      name
    }
  }
}
    `;

/**
 * __useItem_PathQuery__
 *
 * To run a query within a React component, call `useItem_PathQuery` and pass it any options that fit your needs.
 * When your component renders, `useItem_PathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItem_PathQuery({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useItem_PathQuery(baseOptions: Apollo.QueryHookOptions<Item_PathQuery, Item_PathQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Item_PathQuery, Item_PathQueryVariables>(Item_PathDocument, options);
      }
export function useItem_PathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Item_PathQuery, Item_PathQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Item_PathQuery, Item_PathQueryVariables>(Item_PathDocument, options);
        }
export type Item_PathQueryHookResult = ReturnType<typeof useItem_PathQuery>;
export type Item_PathLazyQueryHookResult = ReturnType<typeof useItem_PathLazyQuery>;
export type Item_PathQueryResult = Apollo.QueryResult<Item_PathQuery, Item_PathQueryVariables>;
export const Container_PathDocument = gql`
    query container_path($containerId: ID!) {
  container(containerId: $containerId) {
    id
    pathParts {
      id
      name
    }
  }
}
    `;

/**
 * __useContainer_PathQuery__
 *
 * To run a query within a React component, call `useContainer_PathQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainer_PathQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainer_PathQuery({
 *   variables: {
 *      containerId: // value for 'containerId'
 *   },
 * });
 */
export function useContainer_PathQuery(baseOptions: Apollo.QueryHookOptions<Container_PathQuery, Container_PathQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Container_PathQuery, Container_PathQueryVariables>(Container_PathDocument, options);
      }
export function useContainer_PathLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Container_PathQuery, Container_PathQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Container_PathQuery, Container_PathQueryVariables>(Container_PathDocument, options);
        }
export type Container_PathQueryHookResult = ReturnType<typeof useContainer_PathQuery>;
export type Container_PathLazyQueryHookResult = ReturnType<typeof useContainer_PathLazyQuery>;
export type Container_PathQueryResult = Apollo.QueryResult<Container_PathQuery, Container_PathQueryVariables>;
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
export const Serarch_ResultsDocument = gql`
    query serarch_results($input: Items!) {
  items(input: $input) {
    items {
      id
      name
      pathParts {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useSerarch_ResultsQuery__
 *
 * To run a query within a React component, call `useSerarch_ResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSerarch_ResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSerarch_ResultsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSerarch_ResultsQuery(baseOptions: Apollo.QueryHookOptions<Serarch_ResultsQuery, Serarch_ResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Serarch_ResultsQuery, Serarch_ResultsQueryVariables>(Serarch_ResultsDocument, options);
      }
export function useSerarch_ResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Serarch_ResultsQuery, Serarch_ResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Serarch_ResultsQuery, Serarch_ResultsQueryVariables>(Serarch_ResultsDocument, options);
        }
export type Serarch_ResultsQueryHookResult = ReturnType<typeof useSerarch_ResultsQuery>;
export type Serarch_ResultsLazyQueryHookResult = ReturnType<typeof useSerarch_ResultsLazyQuery>;
export type Serarch_ResultsQueryResult = Apollo.QueryResult<Serarch_ResultsQuery, Serarch_ResultsQueryVariables>;
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
export const UpdateContainerDocument = gql`
    mutation updateContainer($input: UpdateContainer!) {
  updateContainer(input: $input) {
    container {
      id
      name
    }
  }
}
    `;
export type UpdateContainerMutationFn = Apollo.MutationFunction<UpdateContainerMutation, UpdateContainerMutationVariables>;

/**
 * __useUpdateContainerMutation__
 *
 * To run a mutation, you first call `useUpdateContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContainerMutation, { data, loading, error }] = useUpdateContainerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateContainerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContainerMutation, UpdateContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContainerMutation, UpdateContainerMutationVariables>(UpdateContainerDocument, options);
      }
export type UpdateContainerMutationHookResult = ReturnType<typeof useUpdateContainerMutation>;
export type UpdateContainerMutationResult = Apollo.MutationResult<UpdateContainerMutation>;
export type UpdateContainerMutationOptions = Apollo.BaseMutationOptions<UpdateContainerMutation, UpdateContainerMutationVariables>;
export const PlaceItemToContainerDocument = gql`
    mutation placeItemToContainer($input: PlaceItemToContainer!) {
  placeItemToContainer(input: $input) {
    container {
      id
      name
    }
    item {
      id
      name
    }
    previousContainer {
      id
      name
    }
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
export const PlaceContainerToContainerDocument = gql`
    mutation placeContainerToContainer($input: PlaceContainerToContainer!) {
  placeContainerToContainer(input: $input) {
    srcContainer {
      id
      name
    }
    dstContainer {
      id
      name
    }
    previousContainer {
      id
      name
    }
  }
}
    `;
export type PlaceContainerToContainerMutationFn = Apollo.MutationFunction<PlaceContainerToContainerMutation, PlaceContainerToContainerMutationVariables>;

/**
 * __usePlaceContainerToContainerMutation__
 *
 * To run a mutation, you first call `usePlaceContainerToContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceContainerToContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeContainerToContainerMutation, { data, loading, error }] = usePlaceContainerToContainerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlaceContainerToContainerMutation(baseOptions?: Apollo.MutationHookOptions<PlaceContainerToContainerMutation, PlaceContainerToContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceContainerToContainerMutation, PlaceContainerToContainerMutationVariables>(PlaceContainerToContainerDocument, options);
      }
export type PlaceContainerToContainerMutationHookResult = ReturnType<typeof usePlaceContainerToContainerMutation>;
export type PlaceContainerToContainerMutationResult = Apollo.MutationResult<PlaceContainerToContainerMutation>;
export type PlaceContainerToContainerMutationOptions = Apollo.BaseMutationOptions<PlaceContainerToContainerMutation, PlaceContainerToContainerMutationVariables>;
export const ArchiveItemDocument = gql`
    mutation archiveItem($input: ArchiveItem!) {
  archiveItem(input: $input) {
    item {
      id
      name
      deletedAt
    }
  }
}
    `;
export type ArchiveItemMutationFn = Apollo.MutationFunction<ArchiveItemMutation, ArchiveItemMutationVariables>;

/**
 * __useArchiveItemMutation__
 *
 * To run a mutation, you first call `useArchiveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveItemMutation, { data, loading, error }] = useArchiveItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useArchiveItemMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveItemMutation, ArchiveItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveItemMutation, ArchiveItemMutationVariables>(ArchiveItemDocument, options);
      }
export type ArchiveItemMutationHookResult = ReturnType<typeof useArchiveItemMutation>;
export type ArchiveItemMutationResult = Apollo.MutationResult<ArchiveItemMutation>;
export type ArchiveItemMutationOptions = Apollo.BaseMutationOptions<ArchiveItemMutation, ArchiveItemMutationVariables>;
export const ArchiveContainerDocument = gql`
    mutation archiveContainer($input: ArchiveContainer!) {
  archiveContainer(input: $input) {
    container {
      id
      name
      deletedAt
    }
  }
}
    `;
export type ArchiveContainerMutationFn = Apollo.MutationFunction<ArchiveContainerMutation, ArchiveContainerMutationVariables>;

/**
 * __useArchiveContainerMutation__
 *
 * To run a mutation, you first call `useArchiveContainerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchiveContainerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archiveContainerMutation, { data, loading, error }] = useArchiveContainerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useArchiveContainerMutation(baseOptions?: Apollo.MutationHookOptions<ArchiveContainerMutation, ArchiveContainerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArchiveContainerMutation, ArchiveContainerMutationVariables>(ArchiveContainerDocument, options);
      }
export type ArchiveContainerMutationHookResult = ReturnType<typeof useArchiveContainerMutation>;
export type ArchiveContainerMutationResult = Apollo.MutationResult<ArchiveContainerMutation>;
export type ArchiveContainerMutationOptions = Apollo.BaseMutationOptions<ArchiveContainerMutation, ArchiveContainerMutationVariables>;
export const AddPictureForItemDocument = gql`
    mutation addPictureForItem($input: AddPictureForItem!) {
  addPictureForItem(input: $input) {
    item {
      id
      name
    }
  }
}
    `;
export type AddPictureForItemMutationFn = Apollo.MutationFunction<AddPictureForItemMutation, AddPictureForItemMutationVariables>;

/**
 * __useAddPictureForItemMutation__
 *
 * To run a mutation, you first call `useAddPictureForItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPictureForItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPictureForItemMutation, { data, loading, error }] = useAddPictureForItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPictureForItemMutation(baseOptions?: Apollo.MutationHookOptions<AddPictureForItemMutation, AddPictureForItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPictureForItemMutation, AddPictureForItemMutationVariables>(AddPictureForItemDocument, options);
      }
export type AddPictureForItemMutationHookResult = ReturnType<typeof useAddPictureForItemMutation>;
export type AddPictureForItemMutationResult = Apollo.MutationResult<AddPictureForItemMutation>;
export type AddPictureForItemMutationOptions = Apollo.BaseMutationOptions<AddPictureForItemMutation, AddPictureForItemMutationVariables>;
export const Container_NodeDocument = gql`
    query container_node($containerId: ID!) {
  container(containerId: $containerId) {
    id
    name
    containers {
      containers {
        id
        deletedAt
      }
    }
    items {
      items {
        id
        name
        deletedAt
      }
    }
  }
}
    `;

/**
 * __useContainer_NodeQuery__
 *
 * To run a query within a React component, call `useContainer_NodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useContainer_NodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContainer_NodeQuery({
 *   variables: {
 *      containerId: // value for 'containerId'
 *   },
 * });
 */
export function useContainer_NodeQuery(baseOptions: Apollo.QueryHookOptions<Container_NodeQuery, Container_NodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Container_NodeQuery, Container_NodeQueryVariables>(Container_NodeDocument, options);
      }
export function useContainer_NodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Container_NodeQuery, Container_NodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Container_NodeQuery, Container_NodeQueryVariables>(Container_NodeDocument, options);
        }
export type Container_NodeQueryHookResult = ReturnType<typeof useContainer_NodeQuery>;
export type Container_NodeLazyQueryHookResult = ReturnType<typeof useContainer_NodeLazyQuery>;
export type Container_NodeQueryResult = Apollo.QueryResult<Container_NodeQuery, Container_NodeQueryVariables>;
export const Container_TreeDocument = gql`
    query container_tree {
  rootContainers {
    id
    deletedAt
  }
  itemsWithoutContainer {
    id
    name
    deletedAt
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