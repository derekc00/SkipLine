class Request {
    constructor(){
        this.name            = '';
        this.location        = '';
        this.address         = '';
        this.price           = 0;
        this.restaurant_name = '';
        this.party_size      = 0;
        this.complete        = false;
        this.status          = 'incomplete';
    }

    set name(s){
        this.name = name;
    }

    get name(){
        this.name;
    }

    set location(latitutde, longitude){
        this.location = [latitude, longitude];
    }

    get location(){
        return this.location;
    }

    set address(address){
        this.address = address;
    }
    
    get address(){
        return this.address;
    }

    set price(price){
        this.price = price;
    }

    get price(){
        return this.price;
    }

    set restaurant(name){
        this.restaurant_name = name;
    }

    get restaurant(){
        return this.restaurant_name;
    }

    set party_size(size){
        this.party_size = size;
    }

    get party_size(){
        return this.party_size;
    }

    isComplete(){
        if (this.complete == true){
            return true;
        }
        if (name != "" && location != "" && address != "" && restaurant_name != ""){
            this.complete = true;
            return true;
        }
        return false;
    }
}