var app=new Vue({   //instância que está sendo renderizada ao executar o html
    el:'#app', //el indica que local sera acessado, no caso esta sndo usado um seletor de css, mas pode ser uma tag html
    data:{
        message:'Olá, mundo!',
        title:'',
        msg:"Luiz"
    },
    computed:{ //dado computado, usado para criar funções. O dado computado fica na memoria cash e so sofre alteração se uma de suas dependencias for alterada
        reverter: function(){
            //this esta sendo usado para chamar a instancia do Vue
            return this.message.split().reverse().join()+' '+Date.now()
        }
    }
});
app.title='VueJS'