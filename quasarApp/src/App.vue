<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
html{
  font-size:5vw;
}
#q-app{
  max-width: 1024px;
  margin: auto;
  right: 0;
  left: 0;
}

/* Tablet & Desktop Device */
 /* 사용자 해상도가 768px 이상일 때 이 코드가 실행됨. 테블릿과 데스크톱의 공통 코드를 작성한다. */
@media all and (min-width:768px) {
  html{
    font-size:3vw;
  }
}

/* Tablet Device */
@media all and (min-width:768px) and (max-width:1024px) {
 /* 사용자 해상도가 768px 이상이고 1024px 이하일 때 이 코드가 실행됨. 아이패드 또는 비교적 작은 해상도의 랩탑이나 데스크톱에 대응하는 코드를 작성한다. */
}

/* Desktop Device */
 /* 사용자 해상도가 1025px 이상일 때 이 코드가 실행됨. 1025px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다. */
@media all and (min-width:1025px) {
  html{
    font-size:2vw;
  }
}
</style>
