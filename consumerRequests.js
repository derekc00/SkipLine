export class Request {
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

    isComplete(){
        if (this.complete == true){
            return true;
        }
        if (this.name != "" && this.location != "" && this.address != "" && this.restaurant_name != ""){
            this.complete = true;
            return true;
        }
        return false;
    }
}