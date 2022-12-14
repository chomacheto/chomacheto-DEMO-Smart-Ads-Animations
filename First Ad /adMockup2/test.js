function holiday(input) {

    let country = input[0];
    let period = input[1];
    let nights = Number(input[2]);
    let sum = 0;

    if (country === "Germany"){
        switch (period){
            case "21-23":
                sum = nights * 32;
                break;
            case "24-27":
                sum = nights * 37;
                break;
            case "28-31":
                sum = nights * 43;
                break;

            default:
                break;
        }
    }

    else if (country === "Italy"){
        switch (period){
            case "21-23":
                sum = nights * 28;
                break;
            case "24-27":
                sum = nights * 32;
                break;
            case "28-31":
                sum = nights * 39;
                break;

            default:
                break;
        }

    }

    else if (country === "France"){
        switch (period){
            case "21-23":
                sum = nights * 30;
                break;
            case "24-27":
                sum = nights * 35;
                break;
            case "28-31":
                sum = nights * 40;
                break;

            default:
                break;
        }
    }



    console.log(`Easter trip to ${country} : ${sum.toFixed(2)} leva.`);

}


holiday(["Germany",

    "24-27",

    "5"])