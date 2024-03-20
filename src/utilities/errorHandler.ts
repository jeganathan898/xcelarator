export const onlyNumber = /^[0-9\b]+$/ 
export const emailRegex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i
export const noAlph = /^([0-9]+\.?[0-9]*|\.[0-9]+)$/;

export const specialCharacter = (data:string) => {
    const format = RegExp(/[-+_!@#$%^&*.,?]/g);
    return format.test(data)
}

export const validator = (type:string , data:any) => {
    let errors:any = {}

    switch (type) {
        case "login_form":
            errors.email = data.email ? emailRegex.test(data.email) ? "" : "Enter valid email address" : "Email address required"
            errors.password = data.password.length > 0 ? "" : "Enter valid email address"
            return errors    
        default:
            break;
    }
}