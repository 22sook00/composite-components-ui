import { z } from 'zod'
import { UserSchema } from './_schema/_schema'

type User = z.infer<typeof UserSchema>

export { User }
