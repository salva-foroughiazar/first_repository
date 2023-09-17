function area(radius:number):number{
    const p = 3.14;
    const result = (2 * p * radius)/2 + (2 * radius);
    return result;
}
const a = area(10);
console.log(a);