function sumaNumeros(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumaNumeros(arr.slice(1));
        }
    }

    console.log(sumaNumeros([8, 3, 6, 9])); 