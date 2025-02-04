export class APIREsponse {
  constructor(message = "Success !!", data = null, statucode = 201) {
    this.message = message;
    this.data = data;
    this.statucode = statucode;
  }
}
