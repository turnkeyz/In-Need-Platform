<template>
  <div class="col-xs-1 mb-5 pb-5" align="center">
    <!-- creating headers for page -->
        <h3 class="text-center">Intake form Graph Summary</h3>
        <h5 class="text-muted text-center mb-5 pb-5">Below are graphical representations of the data we collected.</h5>
        <!-- creating headers for graph -->
        <div class="row">
            <div class="col">
            <!-- creating header for graph 1-->
            <h5 class="text-center mb-3">Proportions of Ethnicity</h5>
            <graph1/>
            </div>
        </div>
  </div>
</template>
<script>
import graph1 from '../components/Graph.vue' //importing the graph component into this vue

export default {
  name: 'graph', //exporting this graph vue into index
  components: { //exporting the graph components
    graph1,
  }
}
</script>