(function stringExtension() {                          

    String.prototype.ensureStart = function (str) {     
        if (this.startsWith(str)) {                            
            return this.toString();                     
        }
        return str + this;                              
    };

    String.prototype.ensureEnd = function (str) {       
        if (this.endsWith(str)) {                       
            return this.toString();                     
        }
        return this + str;                              
    };

    String.prototype.isEmpty = function () {           
        return this.length === 0;                       
    };

    String.prototype.truncate = function (n) {          
        if (this.length <= n) {                          
            return this.toString();                     
        }

        if (n < 4) {                                    
            return ".".repeat(n);                       
        } else {                                        
            let lastIndex = this.substring(0, n - 2).lastIndexOf(" ");   
            if (lastIndex !== -1) {                         
                return this.substring(0, lastIndex) + "..."; 
            } else {                                        
                return this.substring(0, n - 3) + "...";    
            }
        }
    };

    String.format = function (string, ...params) {      
        params.forEach((param, index) => {             
            string = string.replace(`{${index}}`, param);     
        });
        return string;                                 
    };
    
})()                                                    
