

function car_info(manufacturer:string,model:string,...arg: any[]): any{
    let car_information = {
        manufacturer: manufacturer,
        model: model,
        ...arg,
    }
    return car_information;
}
let a = car_info("Tesla","2020", {color: "Red", feature: "Electric car" });

console.log(a);
