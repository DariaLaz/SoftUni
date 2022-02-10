function extensibleObject(){
    this.extend = function(template){
        for (const property in template) {
            if(typeof template[property] === 'function'){
                Object.getPrototypeOf(this)[property] = template[property]
            } else {
                this[property] = template[property]
            }
        }
    }
    return this;
}
