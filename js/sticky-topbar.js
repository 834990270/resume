!function () {
    var view = document.querySelector('#topNavBar')
    var controller={
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
        },
        bindEvents:function(){
            var view=this.view
            window.addEventListener('scroll', (x)=>{
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.decative()
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky')
        },
        decative:function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
}.call()