/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGauge = /* GraphQL */ `
  query GetGauge($id: ID!) {
    getGauge(id: $id) {
      id
      title
      comments
      values {
        val_a
        val_b
        val_c
        overall_val
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listGauges = /* GraphQL */ `
  query ListGauges(
    $filter: ModelGaugeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGauges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        comments
        values {
          val_a
          val_b
          val_c
          overall_val
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
