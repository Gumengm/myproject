
var vm = new Vue({
    el:"#wrap",
    data:{
        navLists:[
            {
                "text":"日文"
            },
            {
                "text":"中文"
            }
        ],
        changeAct:0
    },
    methods:{
        acts:function(index){
            this.changeAct = index;
        }
    }
});

var vm = new Vue({
    el:"#wrap1",
    data:{
        navLists:[
            {
                "text":"日文"
            },
            {
                "text":"中文"
            }
        ],
        changeAct1:0
    },
    methods:{
        acts:function(index){
            this.changeAct1 = index;
        }
    }
});







