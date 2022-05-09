<template>
  <div class="mb-5">
    <!-- Using pie-chart tag to display pie chart on /graph -->
    <!-- 'graph' represents json data from backend from route /graph-->
    <pie-chart :data="graph1">graph goes here</pie-chart>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import axios from "axios"; //importing and using axios to actually display backend data onto frontend
export default {
    extends: Doughnut,
    name: 'graph', //name of component
    data() {
        return {
            graph1:''//graph returns json data from backend route graphs
        }
    },
    created() {
        let apiURL = `http://localhost:8080/graphs`; //same route as backend so vue knows where to display data

        axios.get(apiURL).then((res) => {
            this.graph1 = res.data; //sending 'graph' data from server to client side
            console.log(this.graph1)
        }).catch(error => {
            console.log(error)
        });
    }
}
</script>