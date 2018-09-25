
import ajaxActions from './ajaxActions'

export function getUserDataBase (state) {
  console.log('getUsers!',state.users);
  return state.users;
}
