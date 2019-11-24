const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

const carsByMake2 = [[1], ['2'], [true]];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

// help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-11-11');
importantDates.push(new Date());
// importantDates.push(100);
