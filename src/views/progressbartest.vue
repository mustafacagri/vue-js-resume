<template>
  <div id="About">
    <div class="mainbox">
        <div class="title">Vue Js Progress Bars (vue-js-progress)</div>
        <div class="row mt-5">
            <div class="col-md-3">
                    <ProgressBar />
                    <ProgressBar title="bg='pink'" :percentage="100" bg="pink" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='info'" :percentage="92" bg="info" :delay="200" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='primary'" :percentage="100" bg="primary" :delay="400" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='success'" :percentage="82" bg="success" :delay="600" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='danger'" :percentage="77" bg="danger" :delay="800" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='warning'" :percentage="85" bg="warning" :delay="1000" :striped="true" :animation="true"></ProgressBar>

            </div>
            <div class="col-md-3">                 
                    <ProgressBar title="bg='turquoise'" :percentage="100" bg="turquoise" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='amethyst'" :percentage="92" bg="amethyst" :delay="200" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='midnightblue'" :percentage="100" bg="midnightblue" :delay="400" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='electronblue'" :percentage="82" bg="electronblue" :delay="600" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='shymoment'" :percentage="77" bg="shymoment" :delay="800" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='pinkglamour'" :percentage="85" bg="pinkglamour" :delay="1000" :striped="true" :animation="true"></ProgressBar>

            </div>
            <div class="col-md-3">       
                    <ProgressBar title="bg='brightyarrow'" :percentage="100" bg="brightyarrow" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='americanriver'" :percentage="92" bg="americanriver" :delay="200" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='picopink'" :percentage="100" bg="picopink" :delay="400" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='pink'" :percentage="82" bg="pink" :delay="600" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='exodusfruit'" :percentage="77" bg="exodusfruit" :delay="800" :striped="true" :animation="true"></ProgressBar>
                    <ProgressBar title="bg='pureapple'" :percentage="85" bg="pureapple" :delay="1000" :striped="true" :animation="true"></ProgressBar>
            </div>
        
            <div class="col-md-3">                           
                    <ProgressBar title="customBgColor='#000000'" :percentage="100" :striped="true" :animation="true" customBgColor="#000000"></ProgressBar>
                    <ProgressBar title="customBgColor='#FF0000'" :percentage="90" :striped="true" :animation="true" customBgColor="#FF0000"></ProgressBar>
                    <ProgressBar title="customBgColor='#e12236'" :percentage="80" :striped="true" :animation="true" customBgColor="#e12236"></ProgressBar>
                    <ProgressBar title="customBgColor='yellow'" :percentage="70" :striped="true" :animation="true" customBgColor="yellow"></ProgressBar>
                    <ProgressBar title="customBgColor='orange'" :percentage="60" :striped="true" :animation="true" customBgColor="orange"></ProgressBar>
                    <ProgressBar title="customBgColor='darkblue'" :percentage="50" :striped="true" :animation="true" customBgColor="darkblue"></ProgressBar>

            </div>
        </div>
    </div><!-- mainbox -->
    <div class="infobox">
        <div class="row">
            <div class="col-md-3"><i class="fas fa-thumbs-up"></i><label><Counter end="217" /></label><span>Projects Completed</span></div>
            <div class="col-md-3"><i class="fas fa-coffee"></i><label><Counter end="12345" /></label><span>Cup of Coffee</span></div>
            <div class="col-md-3"><i class="fas fa-users"></i><label><Counter end="59" /></label><span>Satisfied Customer</span></div>
            <div class="col-md-3"><i class="fas fa-stopwatch"></i><label><Counter end="10" /></label><span>Business Year</span></div>
        </div>
    </div><!-- infobox -->
    <div class="mainbox mt-5">
        <div class="title text-danger">I <span class="text-danger"><i class="fas fa-heart"></i></span> Coding</div>
        <div class="row mt-4">
            <div class="col-md-4">
                <ProgressBar title="jQuery" :percentage="100" bg="brightyarrow" :striped="true" :animation="true" customBgColor="darkblue"></ProgressBar>
            </div>
            <div class="col-md-4">
                <ProgressBar title="jQuery" :percentage="100" bg="brightyarrow" :striped="true" :animation="true" customBgColor="darkblue"></ProgressBar>
            </div>
            <div class="col-md-4">
                <ProgressBar title="jQuery" :percentage="100" bg="brightyarrow" :striped="true" :animation="true" customBgColor="darkblue"></ProgressBar>
            </div>
        </div>
    </div><!-- mainbox -->
  </div>
</template>

<script>
import Counter from 'vue-js-counter'
    export default {
        name: "About",
        components: {
            Counter
        }
    }
</script>