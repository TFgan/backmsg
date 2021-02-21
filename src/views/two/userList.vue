<template>
    <div>
        <h1>用户查询</h1>
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
                tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
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
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
         flex-direction: column;
    }
</style>
