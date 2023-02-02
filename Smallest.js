function maxInArray(numbers) {
    // console.log('Array inside the array ',numbers);
    let Smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // console.log(element);
        if (element < Smallest) {
            Smallest = element;
        }
    }
    return Smallest;
}
const height = [167, 190, 120, 165, 137,500,54];
const tallest = maxInArray(height);
console.log(tallest);