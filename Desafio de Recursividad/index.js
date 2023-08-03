function sumaNumeros(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumaNumeros(arr.slice(1));
        }
    }

    console.log(sumaNumeros([2, 5, 6, 7])); 