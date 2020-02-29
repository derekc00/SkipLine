class Request {
    constructor(){
        this.location;
        this.address;
        this.price;
        this.restaurant_name;
        this.party_size;
        this.pending;
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
}