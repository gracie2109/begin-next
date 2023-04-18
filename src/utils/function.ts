import moment from "moment";

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
  const newPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(input);
  return newPrice
};



export const compareDate =  (input: number | Date | string) => {
  const covertDate = moment(input).format('L')
  const compare = moment(input).startOf('day').fromNow();
  return { covertDate: covertDate, compare: compare}
}

export type ConditionType = "release" | "timeEnd";

export type CompareType = {
  inputData: string | object[] | Date,
}
export const filterOldDataByDate = (inputData:CompareType, filterCondition?:ConditionType) => {
  const input = JSON.parse(JSON.stringify(inputData));
  const data = [];
  const conditions =  ["month", "year"] as any;
  
  if(filterCondition && inputData){
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