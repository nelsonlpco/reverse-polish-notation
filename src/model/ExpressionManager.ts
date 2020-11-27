import ExpressionHashMap from "./ExpressionHashMap";

export default class ExpressionManager {
  private _expression: string = ''
  private _expressionHashMap: ExpressionHashMap;

  constructor(expression: string) {
    this._expression = expression;
    this._expressionHashMap = new ExpressionHashMap(expression);
  }

  private _simplify(){
    let aux = '';
    let flag = false;

  }
}