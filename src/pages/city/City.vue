<template>
    <div class="header">
        <city-header></city-header> 
        <city-search></city-search>
    </div>
</template>

<script>
// import axios from 'axios';
import CityHeader from './components/Header'; 
import CitySearch from './components/Search';
// import CityList from './components/List';
// import CityAlpabate from './components/Alpabate';
export default {
    name:'City',
    data(){
        return {
            city:{},
            // hotCities:{},
            // letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        // CityList,
        // CityAlpabate
    },
}
</script>

<style lang='stylus' scoped>

</style>