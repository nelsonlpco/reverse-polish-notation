import { isNumber } from "../utils/NumberHelper";

export default class ExpressionHashMap {
  private _hashMap: Map<string, number> = new Map();
  private _key: string = 'A';

  constructor(expression: string){
    this._buildHashMap(expression);
  }

  get HashMap(): Map<string, number>{
    return new Map(this._hashMap);
  }

  get Keys(): string[] {
    return Array.from(this._hashMap.keys());
  }

  getValue = (key: string): Number => this._hashMap.get(key) || 0;

  private _buildHashMap(expression: string){
    const arrayExpression = expression.split('');
    let numberAux = '';

    for(var value of arrayExpression) {
      if(isNumber(value) || value === '.') {
        numberAux += value;

        continue;
      }

      if(!numberAux) continue;

      this._hashMap.set(this._key, Number(numberAux));
      this._nextKey();
      numberAux = '';
    }

    if(numberAux){
      this._hashMap.set(this._key, Number(numberAux));
    }
  }

  private _nextKey(){
    this._key = String.fromCharCode(this._key.charCodeAt(0) + 1);
  }
}