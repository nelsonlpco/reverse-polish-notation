const _isNumber = (): (value: string) => boolean  => {
  let cache: Map<string, boolean> = new Map(); 


  return (value: string ): boolean => {
    value = value.trim();

    if(!value) return false;

    if(cache.has(value)) return !!cache.get(value);

    const result = !Number.isNaN(Number(value));
    cache.set(value, result);

    return result;
  }
}

export const isNumber = _isNumber();