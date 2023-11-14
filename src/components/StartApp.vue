<template>
    <v-container class="pa-0" fluid>
        <div style="padding: 120px 20px;">
            <v-row class="ma-0 pa-0" no-gutters>
                <v-spacer></v-spacer>
                <v-col cols="8">
                    <v-row class="ma-0 pa-0 mb-5" no-gutters>
                        <v-col class="d-flex align-center justify-center" cols="12">
                            <v-img src="../assets/freeoffer.png" alt="healthyfood" max-height="150" max-width="250"></v-img>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0 justify-center" no-gutters>
                        <v-col class="d-flex align-center justify-center" cols="4">
                        </v-col>
                        <v-col class="d-flex align-center justify-center" cols="4">
                            <v-text-field @keyup.enter="searchGroup" dense outlined label="검색키워드" 
                            full-width prepend-inner-icon="mdi-text-box-search-outline" style="border-radius: 30px;">
                        </v-text-field>
                        </v-col>
                        <v-col class="" cols="4" >
                            <v-icon @click="onFilter(key)" style="width: 110px; cursor: pointer;" large v-if="key == false">mdi-menu-up</v-icon>
                            <v-icon @click="onFilter(key)" style="width: 110px; cursor: pointer;" large v-else>mdi-menu-down</v-icon>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0 justify-center" no-gutters>
                        <v-col class="d-flex align-center justify-center" cols="4">
                        </v-col>
                        <v-col class="d-flex align-center justify-center" cols="4">
                        </v-col>
                        <v-col class="mb-5" cols="4" >
                            <v-list v-if="key == false">
                                <v-list-group
                                    v-for="item in drawerList"
                                    :key="item.title"
                                    v-model="item.active"
                                    :prepend-icon="item.action"
                                    no-action style=" width: 186px !important;">
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title class="font-weight-medium" v-text="item.title"></v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <v-list-item
                                        v-for="child in item.items"
                                        :key="child.title">
                                        <v-list-item-content>
                                            <v-list-item-title v-text="child.title"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <!-- <v-list-group no-action sub-group  v-for="little in item.items" :key="little.title" >
                                        <template v-slot:activator>
                                            <v-list-item-content>
                                                <v-list-item-title v-text="little.title"></v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                        
                                    </v-list-group> -->
                                </v-list-group>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'StartApp',

    components: {

    },

    props: {

    },

    created: function(){
    },

    mounted: function(){
        this.$nextTick(function () {
            this.imgTxtPosn = (this.$vuetify.breakpoint.width - 1100) / 100
            this.$parent.$parent.$parent.onFooter = false
        })
    },

    computed: {
        trnStyle () {
            return {
                '--rPosn': this.imgTxtPosn + '%',
            }
        },
        getDisplayWidth: function () {
           return this.$vuetify.breakpoint.width
        },
    },

    watch:{
        getDisplayWidth: function (value) {
            this.imgTxtPosn = (value - 1100) / 100
        },
    },
        
    methods: {
        onFilter: function (key) {
            if (key == true) {
                this.key = false
            }else {
                this.key = true
            }
            // this.$emit('topHeader', this.key)
        },
        searchGroup(event) {
            console.log(this.idol.length);

            const len = this.idol.length;

            for (let i = 0; i < len; i++) {
                if (
                    this.idol[i].name.includes(event.target.value) === false &&
                    this.idol[i].debut.includes(event.target.value) === false &&
                    this.idol[i].member.includes(event.target.value) === false
                ) {
                    document.querySelectorAll(".group-item")[i].style.display = "none";
                } else {
                    document.querySelectorAll(".group-item")[i].style.display = "flex";
                }
            }
        },
    },

    data: () => ({
        imgTxtPosn: 2,
        searchkeyword: '',  
        key: true,
        drawerList: [
            {
                action: '',
                active: false,
                items: [
                    { title: '로고 블랜딩', },
                ],
                title: '디자인',
            },
        ],
    }),
};
</script>

<style>
.imgOnTxtBox { position: absolute; top: 50%; right: var(--rPosn); transform: translateY(-50%); width: 660px; }
    * {
  padding: 0;
  margin: 0;
}
.search-input {
  display: block;
  padding: 4px 8px;
  margin: 10px auto;
  width: 320px;
  font-size: 16px;
  outline: none;
}

.group-list {
  margin: 0 auto;
  width: 360px;
}

.group-list li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  list-style-type: none;
}

.group-list span {
  display: block;
  width: 33%;
  text-align: center;
}

.group-list-header {
  font-weight: 700;
  border-bottom: 1px solid #bdbdbd;
}
</style>