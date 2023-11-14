<template>
    <v-app-bar height="100" elevation="2" color="white"
        @mouseover="exHeader=true" @mouseleave="exHeader=false"
        app>
        <v-row class="ma-0 pa-0" no-gutters>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="11">
                <span class="d-inline-block" @click="$parent.$parent.routerAction('App')" style="width: 200px; cursor: pointer;">
                    <v-img src="../../assets/freeoffer.png" alt="harryfoodlogo"></v-img>
                </span>
                <v-spacer></v-spacer>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
    name: 'TopHeader',

    components: {

    },

    props: {

    },

    created: function(){
    },

    mounted: function(){
        this.$nextTick(function () {

        })
    },

    computed: {
  
    },

    watch:{

    },
        
    methods: {
        onOverEvent: function (index) {
            for (let index = 0; index < this.menuHover.length; index++) {
                this.menuHover.splice(index, 1, false)
            }
            this.menuHover.splice(index, 1, true)
        },
        outOverEvent: function (index) {
            this.menuHover.splice(index, 1, false)
        },
    },

    data: () => ({
        exHeader: false,
        menuHover: [false, false, false, false, false,],
        headerMenu: [
            { menu: '푸드서비스', route: '' },
            { menu: '식자재유통', route: '' },
            { menu: '운영관리', route: '' },
            { menu: '소통공간', route: '' },
            { menu: '회사소개', route: 'HarrygndIntro' },
        ],
    }),
};
</script>

<style>
    .hMenuUnder { border: 0px solid #5b493f; -webkit-transition: all .2s ease-out; transition: all .2s ease-out; }
    .hMenuUnder:hover { border-width: 0 0px 4px 0px; }

    .hMenuTxt { width: 100%; cursor: pointer; }
    .hMenuTxt:hover { color: #f7ae22; }
</style>