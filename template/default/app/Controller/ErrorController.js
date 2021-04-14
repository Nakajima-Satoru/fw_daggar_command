const { Controller } = require("albion");

module.exports=class ErrorController extends Controller{

    handleBefore(){
        this.ro.autoRender.set(true);
        this.ro.template.set("default");
    }

    index(error){
        if(this.ro.status()==404){
            this.ro.setData("error","PAGE NOT FOUND");

        }
        else{
            this.ro.setData("error",error.stack);
        }

    }

};