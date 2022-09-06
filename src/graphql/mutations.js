/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGauge = /* GraphQL */ `
  mutation CreateGauge(
    $input: CreateGaugeInput!
    $condition: ModelGaugeConditionInput
  ) {
    createGauge(input: $input, condition: $condition) {
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
export const updateGauge = /* GraphQL */ `
  mutation UpdateGauge(
    $input: UpdateGaugeInput!
    $condition: ModelGaugeConditionInput
  ) {
    updateGauge(input: $input, condition: $condition) {
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
export const deleteGauge = /* GraphQL */ `
  mutation DeleteGauge(
    $input: DeleteGaugeInput!
    $condition: ModelGaugeConditionInput
  ) {
    deleteGauge(input: $input, condition: $condition) {
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
