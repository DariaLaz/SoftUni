class Textbox {
    #value = ''
    constructor(selector, regex){
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    }
    get value(){
        return this.#value
    }
    set value(v){
        this.#value = v;
        for (const e of this._elements) {
            e.value = this.#value;
        }
    }
    get elements(){
        return this._elements;
    }
    isValid(){
        return !this._invalidSymbols.test(this.#value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
