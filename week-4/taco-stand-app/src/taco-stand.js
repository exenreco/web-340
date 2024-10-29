/**
 * Author:      Exenreco Bell
 * Date:        October 29, 2024
 * File Name:   taco-stand.js
 * Description: used to define the TacoStandEmitter class, which serves as the core component of the Taco Stand application.
 */

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
    serveCustomer(customer) {
        this.emit('serve', customer);
    }

    prepareTaco(taco) {
        this.emit('prepare', taco);
    }

    handleRush(rush) {
        this.emit('rush', rush);
    }
}

module.exports = TacoStandEmitter;