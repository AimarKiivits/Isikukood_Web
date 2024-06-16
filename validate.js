const case1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
const case2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
const month31 = ["January", "March", "May", "July", "August", "October", "December"];
const month30 = ["February", "April", "June", "September", "November"]; 

function idInfo(isikukood) {  
    let sex = "None";
    let century = "None";
    let month_born = "None";
    let year_born = "None";
    let isleapyear = false;
    let leapyearmessage = "They were born on a leap year"
    let notleapyearmessage = "They were not born on a leap year"
    let day_born = "None";
    let birth_place = "None";
    let race_place = "None";
    let kontrollnum = "None";
    let needcase2 = false;
    let error = "none";

    if (isikukood.length == 11) {
    }
    else {
        error = "Social security number is not 11 digits long."
    }


    sex = isikukood.charAt(0);

    if ((sex == "1" || sex == "2")) {
        century = "18"
    }
    else if ((sex == "3" || sex == "4")) {
        century = "19"
    }
    else if ((sex == "5" || sex == "6")) {
        century = "20"
    }
    else if ((sex == "7" || sex == "8")) {
        century = "21"
    }
    else {
        error = "First digit of social security number is invalid."
    }

    if (sex % 2 == 0) {
        sex = "Naine"
    }
    else {
        sex = "Mees"    
    }

    let month = isikukood.slice(3,5);
    if (month == "01") {
        month_born = "January";
    }
    else if (month == "02") {
        month_born = "February";
    }
    else if (month == "03") {
        month_born = "March";
    }
    else if (month == "04") {
        month_born = "April";
    }
    else if (month == "05") {
        month_born = "May";
    }
    else if (month == "06") {
        month_born = "June";
    }
    else if (month == "07") {
        month_born = "July";
    }
    else if (month == "08") {
        month_born = "August";
    }
    else if (month == "09") {
        month_born = "September";
    }
    else if (month == "10") {
        month_born = "October";
    }
    else if (month == "11") {
        month_born = "November";
    }
    else if (month == "12") {
        month_born = "December";
    }
    else {
        error = "Month of birth is invalid."
    }


    let year = isikukood.slice(1,3);
    if (year >= 0) {
        year_born = century + year;
    }
    else {
        error = "Year of birth is invalid."
    } 

    if (year_born % 100 == 0) {
        if (year_born % 400 == 0) {
            isleapyear = true
        }
        else {
            isleapyear = false
        }
    }
    else if (year_born % 4 == 0) {
        isleapyear = true
    }
    else {
        isleapyear = false
    }


    let day = isikukood.slice(5,7);
    if ((month_born == "February")){
        if ((day == 29 && isleapyear == true)) {
            day_born = 29;
        }
        else if ((day > 0 && day <= 28)) {
            day_born = day;
        }
        else {
            error = "Not a leap year so your day of birth cant be the 29th of feb."
        }
    }

    if ((day > 0 && day <= 30 && month30.includes(month_born) == true)) {
        day_born = day    
    }
    else if ((day > 0 && day <= 31 && month31.includes(month_born) == true )) {
        day_born = day  
    }
    else {
        error = "Day of birth outside the range of days in month of birth."
    } 



    let location = isikukood.slice(7, 10);
    if ((location >= 1 && location <=10)) {
        birth_place = "Kuressaare haigla"
        race_place = location
    }
    else if ((location >= 11 && location <=20)) {
        birth_place = "Tartu Ülikooli Naistekliinik"
        race_place = location - 10
    }
    else if ((location >= 21 && location <=150)) {
        birth_place = "Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)"
        race_place = location - 20
    }
    else if ((location >= 151 && location <=160)) {
        birth_place = "Keila haigla"
        race_place = location - 150
    }
    else if ((location >= 161 && location <=220)) {
        birth_place = "Rapla haigla, Loksa haigla, Hiiumaa haigla (Kärdla)"
        race_place = location - 160
    }
    else if ((location >= 221 && location <=270)) {
        birth_place = "Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi)"
        race_place = location - 220
    }
    else if ((location >= 271 && location <=370)) {
        birth_place = "Maarjamõisa kliinikum (Tartu), Jõgeva haigla"
        race_place = location - 270
    }
    else if ((location >= 371 && location <=420)) {
        birth_place = "Narva haigla"
        race_place = location - 370
    }
    else if ((location >= 421 && location <=470)) {
        birth_place = "Pärnu haigla"
        race_place = location - 420
    }
    else if ((location >= 471 && location <=490)) {
        birth_place = "Haapsalu haigla"
        race_place = location - 470
    }
    else if ((location >= 491 && location <=520)) {
        birth_place = "Järvamaa haigla (Paide)"
        race_place = location - 490
    }
    else if ((location >= 521 && location <=570)) {
        birth_place = "Rakvere haigla, Tapa haigla"
        race_place = location - 520
    }
    else if ((location >= 571 && location <=600)) {
        birth_place = "Valga haigla"
        race_place = location - 570
    }
    else if ((location >= 601 && location <=650)) {
        birth_place = "Viljandi haigla"
        race_place = location - 600
    }
    else if ((location >= 651 && location <=700)) {
        birth_place = "Lõuna-Eesti haigla (Võru), Põlva haigla"
        race_place = location - 650
    }
    else {
        error = "Location of birth is invalid."
    }

    let sum = 0;
    let order = 0;
    let kontroll = 0;

    for (let num of case1) {
        sum += num * isikukood.charAt(order);
        order += 1;
        if (order == 10) {
            kontroll = sum / 11
            if (kontroll % 1 == 0) {
                kontrollnum = sum - kontroll * 11;
                if (kontrollnum >= 10) {
                    needcase2 = true
                }
            }
            else {
                kontroll = Math.floor(kontroll);
                kontrollnum = sum - kontroll * 11;
                if (kontrollnum >= 10) {
                    needcase2 = true
                }
            } 
        }
    }

    sum = 0;
    order = 0;
    kontroll = 0;

    if (needcase2 == true) {
        for (let num of case2) {
            sum += num * isikukood.charAt(order);
            order += 1;
            if (order == 10) {
                kontroll = sum / 11
                if (kontroll % 1 == 0) {
                    kontrollnum = sum - kontroll * 11;
                    if (kontrollnum >= 10) {
                        kontrollnum = "0"
                    }
                }
                else {
                    kontroll = Math.floor(kontroll);
                    kontrollnum = sum - kontroll * 11;
                    if (kontrollnum >= 10) {
                        kontrollnum = "0"
                    } 
                } 
            }
        }
    } 

    if (kontrollnum != isikukood.charAt(10)) {
        error = "Control number is invalid."
    }

    const resultinfo = {
		isikukood: isikukood,
		sex: sex,
		century: century,
		month_born: month_born,
		year_born: year_born,
		day_born: day_born,
		birth_place: birth_place,
		race_place: race_place,
		kontrollnum: kontrollnum,
		leapyearmessage: isleapyear ? leapyearmessage : notleapyearmessage,
        error: error
	}

	return resultinfo;

}

module.exports = {
	idInfo
}