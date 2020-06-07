var app=new Vue({   //instância que está sendo renderizada ao executar o html
    el:'#app', //el indica que local sera acessado, no caso esta sndo usado um seletor de css, mas pode ser uma tag html
    data:{
        company:'VRO',
        firstName:'Vanderluiz',
        lastName:'Rosa Oliveira',
        fullName:'Vanderluiz Rosa Oliveira'
    },
    watch:{
        firstName:function(val){
            this.fullName=val+' '+this.lastName;
        },
        firstName:function(val){
            this.fullName=val+' '+this.firstName;
        }
        }
    //Dados computados vs observadores
});
    