export const required = (value:string)=> {
    if(value) {
        return undefined
    }
    else
return 'Field is required'
}

export const maxLength = (maxLength:number) => (value:string)=> {
    if(value && value.length<maxLength) {
        return undefined
    }
    else
        return `max length: ${maxLength} symbols`
}