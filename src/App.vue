<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.members {
  max-width: 600px;
}


.topbg {
  display: grid !important;
}
.topbg .anja{
  width: 100% !important;
}


div[class*="teammember"] {
  max-width: 400px;
}

div[class*="teammemberr"] {
  align-self: flex-end;
}

/* The animation code */
@keyframes a_blue {
  0%   {margin-right:-150px;}
  50%   {margin-right:20%;margin-top: -20%;}
  100%   {margin-right:-150px;}
}
@keyframes a_rose {
  0%   {margin-left:-150px;}
  50%   {margin-left:20%;margin-top: 20%;}
  100%   {margin-left:-150px;}
}
@keyframes a_bg {
  0%   {justify-content: center}
  100%   {justify-content: space-between;}
}

// height: auto !important;position: absolute;
// ;height: auto !important;position: absolute;
.rocobg .blue {
  margin-right: -70px;
  animation: a_blue 20s infinite;
}

.rocobg .rose{
  margin-left: -70px;
  animation: a_rose 20s infinite;

}




#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.legal div[class*="content"] {
  max-width: 600px;
}
.partners div[class*="content"] {
  max-width: 600px;
}

  
.partners div[class*="desc"] {
  max-width: 200px;
}


$small: 300px;
$medium: 900px;

//some CSS
@media screen and (max-width: $small) {
  
    .main div[class*="anja"] {
        margin-left: -20% !important;
    }
  
    .main div[class*="rocobg"] {
        display: none !important;
    }
  //do Smth
}
@media screen and (min-width: $medium) {

}

</style>


