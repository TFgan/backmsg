<template>
    <div>
        <h1>用户删除</h1>
        <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
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
        drawLine(){
            let myChart = this.$echarts.init(document.getElementById('myChart'))    
            myChart.setOption({
            title: { text: '' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        }
    },
    mounted(){
        this.drawLine();
    },
};
</script>

<style scoped lang="less">
    div{
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
         flex-direction: column;
    }
</style>
