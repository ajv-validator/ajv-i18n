import { ValidateFunction } from 'ajv/dist/core';

export interface Localize {
  (errors?: ValidateFunction['errors']): void
}
