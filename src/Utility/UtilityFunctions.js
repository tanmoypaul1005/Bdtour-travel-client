// ! React Toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure()


export const Toaster = (msg, type = 'error') => {
    // toast.error(msg, { autoClose: 2000, position: "top-center"});
    toast.error(msg, {
        position: "bottom-right",
        autoClose: 2000,
        type: type,
        theme: "dark",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


export const ToasterLoading = (msg = "Please wait...", action = 'start', type = 'success', the_toastr) => {
    const options = {
        position: "bottom-right",
        autoClose: 2000,
        type: type,
        theme: "dark",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // progress: undefined,
    }

    if (action === 'start') {
        return toast.loading(msg, options)
    } else if (action === 'stop') {
        toast.update(the_toastr, { render: msg, type: type, isLoading: false, ...options });
    }
}


export const formatDate = (date) => {
    if (!date) return null
    const months = [];
    months['en'] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    months['da'] = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${(new Date(date)).getDate()} ${months['en'][(new Date(date)).getMonth()]}. ${(new Date(date)).getFullYear()}`
}


export const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}


export const calculateDate = (end_date, start_date) => {
    const date1 = new Date(start_date);
    const date2 = new Date(end_date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

export const PageTitle = (newTitle) => {
    return (document.title = newTitle);
};

export const CalculateMonthsYears = (days) => {
    let month = 0;
    let year = 0;
    if (days < 365) {
        month = Math.round(days / 30);
        return {
            month: month,
            year: year,
        };
    } else {
        year = days / 365;
        year = parseInt(year);
        days = (days - (year * 365));
        month = parseInt(days / 30)
        return {
            month: month,
            year: year,
        };
    }
};


export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


export const DistanceIntoKM = (meterValue) => {
    return (meterValue / 1000).toFixed(1);
};

export const TimeIntoHours = (secondValue) => {
    return (secondValue / 3600).toFixed(1);
};

export const formatDateOrTime = (dateTime, type) => {
    const date = new Date(dateTime);
    if (type === "date") {
        return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}. ${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
            }. ${date.getFullYear()}`;
    } else {
        //return time
        return `${date.getHours()}:${date.getMinutes()}`;
    }
};

export const timeDiffHours = (dt2, dt1, startDate) => {
    //create date format
    var timeStart = new Date(startDate + "T" + dt1);
    var timeEnd = new Date(startDate + "T" + dt2);

    var diff = (timeEnd - timeStart) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
};


export const extractDate = (date) => {
    const t_date = new Date(date);
    let month = (t_date.getMonth() + 1)
    if (month < 10) month = "0" + month.toString();
    // return t_date;
    return t_date.getFullYear() + "-" + month + "-" + ((t_date.getDate() < 9) ? "0" + t_date.getDate() : t_date.getDate())
}


export const incrementDate = (date, numberOfDays) => {
    date = extractDate(date);
    const new_date = new Date(date)
    new_date.setDate(new_date.getDate() + numberOfDays);
    return extractDate(new_date);
}


export const differenceInDaysDate = (endDate) => {
    const startDate = new Date();
    // endDate = extractDate(endDate)

    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.round(differenceInDays) ?? 0;
    return differenceInDays ?? false;
}

export const htmlToPlainText = (html) => {

    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element 
    return tempDivElement.textContent || tempDivElement.innerText || "";
}

export const getFormatStringFromDays = (numberOfDays) => {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years === 1 ? " year " : " years") : "";
    var monthsDisplay = months > 0 ? months + (months === 1 ? " month" : " months ") : "";
    var daysDisplay = days > 0 ? days + (days === 1 ? " day" : " days") : "";
    return yearsDisplay + monthsDisplay + daysDisplay;
}

export const checkValidEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
