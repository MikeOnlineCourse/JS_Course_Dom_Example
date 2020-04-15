function creEle(tag){
    this.el = document.createElement(tag);
    this.setText = function(context){
        const textNode = document.createTextNode(context);
        this.el.append(textNode);
    }
    this.setAttribute = function(attribute){
        for (let attr in attribute) {
            if(attr === 'style'){
              this.el.style.cssText += attribute[attr];
            }else{
              this.el.setAttribute(attr, attribute[attr]);
            }
        }
    }
}