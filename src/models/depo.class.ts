import { Broker } from 'src/models/broker.class';


export class Depo{
  firstName: string;
  lastName: string;
  depoNumber: string;
  broker: Broker;



  constructor(obj?: any){
    this.firstName = obj? obj.firstName : '';
    this.lastName = obj? obj.lastName : '';
    this.depoNumber = obj? obj.depoNumber : '';
    this.broker = obj? obj.broker : '';
  }

  public toJSON(){
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      depoNumber: this.depoNumber,
      broker: this.broker,
    };

  }
}
