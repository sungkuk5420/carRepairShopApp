export function getUserDataBase (state) {
  console.log('getUsers!',state.users);
  return state.users;
}
export function getLoginInfo (state) {
  return state.loginInfo;
}
