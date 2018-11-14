export function getUserDataBase (state) {
  console.log('getUsers!',state.users);
  return state.users;
}
export function getLoginInfo (state) {
  return state.loginInfo;
}
export function getCarList (state) {
  console.log(state.carList);
  if(state.carList.length == 0){
    return state.carList;
  }
  var carList = state.carList.map((currentCarData) =>{
    return {
      id : currentCarData.id,
      index :currentCarData.info.index,
      carName :currentCarData.info.carName
    }
  });
  var sortList = [];
  sortList = carList.sort(function(first, second) {
      var a = first.addTime;
      var b = second.addTime;

      if(a > b) {
          return 1;
      } else if(a < b) {
          return -1;
      } else {
          return 0;
      }
  });

  var index = 1;
  for (let i = 0; i < sortList.length; i++) {
    const element = sortList[i];
    element.index = index;
    index++;
  }
  return sortList;
}
