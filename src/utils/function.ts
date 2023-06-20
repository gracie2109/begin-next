import moment from "moment";
import {FREE_SHIP_MONEY} from ".";


const toTitleCase = (str: string) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const formatWord = (input: string, options: "uppercase" | "lowercase" | "title") => {
    const trimText = input.trim().toString();
    if (input.length === 0) return input;
    if (options === "uppercase") return trimText.toUpperCase();
    else if (options === "lowercase") return trimText.toLowerCase();
    else return toTitleCase(trimText)
}


export const getColumnTable = (input: string | any) => {
    return {
        title: formatWord(input, "title"),
        dataIndex: input,
        key: input
    }
}

export const formatMovieRunTime = (input: number) => {
    let hours = Math.floor(input / 60);
    let minutes: any = input % 60;
    if (minutes + ''.length < 2) {
        minutes = '0' + minutes;
    }
    return `${hours}h ${minutes}m`;
}

export const formatCurrency = (input: number) => {
    const newPrice = new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(input);
    return newPrice
};


export const compareDate = (input: number | Date | string) => {
    const covertDate = moment(input).format('L')
    const compare = moment(input).startOf('day').fromNow();
    return {covertDate: covertDate, compare: compare}
}

export type ConditionType = "release" | "timeEnd" | "updatedAt" | "createdAt";
export const filterOldDataByDate = (inputData: string | object[] | Date, filterCondition?: ConditionType) => {
    const input = JSON.parse(JSON.stringify(inputData));
    const data = [];
    const conditions = ["month", "year"] as any;

    if (filterCondition && inputData) {
        for (const a of input) {
            for (const b of conditions) {
                const c = compareDate(a[filterCondition]).compare;
                if (c.includes(b)) {
                    data.push(a);
                }
            }
        }
    }

    return data
}

export const getPriceAfterSale = (price: number, salePercent: number) => {
    return formatCurrency(Number(price) - Number(salePercent))
}

export const calcShippingFee = (userPrice: number) => {
    const a = 100 - ((FREE_SHIP_MONEY - userPrice) / FREE_SHIP_MONEY) * 100;
    const b = FREE_SHIP_MONEY - userPrice;

    return {
        needMore: b <= 0 ? 0 : formatCurrency(b),
        percent: `${a}%`
    };
}

export const calcProductRateStartPercent = (input: number) => {
    const a = (input * 100) / 100
    return a
}

// type = 0 => giảm theo tiền
// type = 1 => giảm theo phần trăm

export const calcDiscountPrice = (cost: number, discount: number, type: number) => {
    if (!discount || cost === 0) {
        return 0
    } else if (type === 0) {
        return Number(cost) - Number(discount)
    } else {
        return Number(cost) - ((Number(cost) * Number(discount)) / 100)
    }
}
