export default {
    computed: {
        getCurrency() {
            return (value) => {
                return value.toLocaleString("ru-RU",{style: 'currency', currency: "RUB",minimumFractionDigits: 0})
            }
        }
    }
}