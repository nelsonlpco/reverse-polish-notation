function memoiser(func: any ): (...params: any[]) => any {
  let cache = new Map<any, any>();

  return (...params: any[]): any => {
    const key = params.join('');
    
    console.log('============')
    console.log(cache)
    console.log('============')
    
    if(cache.has(key)) return cache.get(key);

    console.log('====AFETER========')
    console.log(cache)
    console.log('============')
    
    const result = func(...params);
    cache.set(key, result);

    console.log('============')
    console.log(key, result)
    console.log(cache)
    console.log('============')

    return result;
  }
}

export default memoiser;