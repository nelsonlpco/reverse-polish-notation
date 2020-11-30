import ExpressionHashMap from "./ExpressionHashMap";
import { isNumber } from "../utils/NumberHelper";

export default class ExpressionManager {
  private _expression: string = ''
  private _expressionHashMap: ExpressionHashMap;

  constructor(expression: string) {
    this._expression = expression;
    this._expressionHashMap = new ExpressionHashMap(expression);
    this._simplify();
  }

  private _simplify(): String{
    let result = '';
    const arrayExpresion = this._expression.split('');
    const labels = this._expressionHashMap.Keys;
    let labelIndex = 0;
    let isChangedNumber = false;

    for(const value of arrayExpresion) {
      if(!isNumber(value) && value !== '.'){
        isChangedNumber = false;
        result += value;
        continue;
      }

      if(isChangedNumber) continue;

      if(!isNaN(Number(value)) || value === '.') {
        result += labels[labelIndex];
        labelIndex++;
        isChangedNumber = true;
      }
    }

    return result;
  }

  get SimplifiedExpression(){
    return this._simplify();
  }
}