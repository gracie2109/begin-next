const toTitleCase = (str:string)  =>{
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

export const formatWord = (input: string, options: "uppercase" | "lowercase" | "title") => {
    console.log("1. ",input, input.length)
    const trimText = input.trim().toString();
    if(input.length === 0) return input;
    if(options === "uppercase") return trimText.toUpperCase();
    else if(options === "lowercase") return trimText.toLowerCase();
    else return toTitleCase(trimText)
}

