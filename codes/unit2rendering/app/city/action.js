export default function cityData(previousState, formData) {
    const name=formData.get("name");
    const gender=formData.get("city");
    return {name, gender};
}