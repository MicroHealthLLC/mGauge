/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGauge = /* GraphQL */ `
  subscription OnCreateGauge($owner: String) {
    onCreateGauge(owner: $owner) {
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
export const onUpdateGauge = /* GraphQL */ `
  subscription OnUpdateGauge($owner: String) {
    onUpdateGauge(owner: $owner) {
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
export const onDeleteGauge = /* GraphQL */ `
  subscription OnDeleteGauge($owner: String) {
    onDeleteGauge(owner: $owner) {
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
