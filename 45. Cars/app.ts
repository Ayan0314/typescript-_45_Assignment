function make_car(manufacturer:string, model: string, ...option:[string, any][]): Object{
    let cars = [manufacturer, model];
    option.forEach(([key, value])=>car[key]= value);
}

console.log(make_car("toyota", "corolla",["color", "red"],["year", 2020]));
console.log(make_car("Ford", "Fiesta",["color", "blue"],["sunroof", true]));
