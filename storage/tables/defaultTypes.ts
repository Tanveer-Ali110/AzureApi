import { ModelAttributeColumnOptions, INTEGER, STRING, BOOLEAN, TEXT,ENUM } from 'sequelize'

export const string = (allowNull = false, attributes?: Partial<ModelAttributeColumnOptions<any>>) => {
  return {
    allowNull,
    type: STRING,
    ...attributes,
  }
}

export const text = (allowNull = false, attributes?: Partial<ModelAttributeColumnOptions<any>>) => {
  return {
    allowNull,
    type: TEXT,
    length: 'long',
    ...attributes,
  }
}

export const int = (allowNull = false, attributes?: Partial<ModelAttributeColumnOptions<any>>) => {
  return {
    allowNull,
    type: INTEGER,
    ...attributes,
  }
}

export const uint = (allowNull = false, attributes?: Partial<ModelAttributeColumnOptions<any>>) => {
  return {
    allowNull,
    type: INTEGER.UNSIGNED,
    ...attributes,
  }
}

export const bool = (allowNull = false, attributes?: Partial<ModelAttributeColumnOptions<any>>) => {
  return {
    allowNull,
    type: BOOLEAN,
    ...attributes,
  }
}
export const enums = (allowNull = false, values:string[],attributes?: Partial<ModelAttributeColumnOptions<any>>) => {
  return {
    allowNull,
    type: ENUM,
    values:values,
    ...attributes,
  }
}
