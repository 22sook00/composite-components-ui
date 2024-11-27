import { z } from 'zod'

const useSchema = () => {
  const createValidation = (required, schema) => {
    return required ? schema.or(z.string().max(0)) : schema
  }

  return { createValidation }
}

export default useSchema
