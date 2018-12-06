export function getUserDataBase(state) {
  console.log('getUsers!', state.users);
  var users = state.users.map((currentUserInfo) => {
    console.log(currentUserInfo);
    return {
      id: currentUserInfo.id,
      password: currentUserInfo.password,
      car_km: currentUserInfo.car_km > 1 ? currentUserInfo.car_km +'km' : currentUserInfo.car_km,
      car_number: currentUserInfo.car_number,
      car_type: currentUserInfo.car_type,
      login_type: currentUserInfo.login_type,
      phone_number: currentUserInfo.phone_number,
      profile_image: currentUserInfo.profile_image,
      thumbnail_image: currentUserInfo.thumbnail_image,
      user_level: currentUserInfo.user_level,
      user_name: currentUserInfo.user_name,
      login_type: currentUserInfo.login_type
    }
  });
  var index = 1;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    user.index = index;
    index++;
  }
  return users;
}
export function getLoginInfo(state) {
  return state.loginInfo;
}
export function getCarList(state) {
  console.log(state.carList);
  if (state.carList.length == 0) {
    return state.carList;
  }
  var carList = state.carList.map((currentCarData) => {
    return {
      id: currentCarData.id,
      index: currentCarData.info.index,
      carName: currentCarData.info.carName
    }
  });
  var sortList = [];
  sortList = carList.sort(function (first, second) {
    var a = first.addTime;
    var b = second.addTime;

    if (a > b) {
      return 1;
    } else if (a < b) {
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

export function getAdminPageInfo(state) {
  return state.adminPageInfo;
}
