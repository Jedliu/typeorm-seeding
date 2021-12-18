import { FactoryFunction } from '../../src/types'
import { User } from '../entities/User.entity'

export const userFactoryFn: FactoryFunction<User> = () => {
  const user = new User()

  user.name = 'John Doe'

  return user
}
