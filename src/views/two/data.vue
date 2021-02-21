<template>
    <div>
        <ul>
            <li>
                <router-link to="/data/world">全球数据</router-link>
            </li>
            <li>
                <router-link to="/data/inland">国内数据</router-link>
            </li>
            <li>
                <router-link to="/data/asia">亚洲数据</router-link>
            </li>
            <li>
                <router-link to="/data/america">北美数据</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
// div{
//     width: 100%;
//     height: 100%;
// }
ul{
    display: flex;
    height: 50px;
    border-bottom: 1px solid #ccc;
    li{ 
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
             color: #000
        }
    }
}
</style>
