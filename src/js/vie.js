/**
 * Description placeholder
 *
 * @export
 * @class Vie
 * @typedef {Vie}
 */

export default class Vie{
    constructor(){
        this.vie = 3;
    }

    loose(){
        this.vie--;
        if (this.vie === 0){
            alert("GAME OVER")
        }
    }
}