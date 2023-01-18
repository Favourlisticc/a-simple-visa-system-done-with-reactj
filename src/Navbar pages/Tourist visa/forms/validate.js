export default function validateInfo(values) {
    let errors ={}
    if(!values.name.trim()) {
        errors.name = "Name Required"
    }
    if(!values.email) {
        errors.email = "Email Required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }
    if(!values.country) {
        errors.country = "country is required"
    }

    return errors;
}