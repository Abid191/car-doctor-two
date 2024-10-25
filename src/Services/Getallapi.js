export const getServices = async () => {
    const res = await fetch('http://localhost:3000/servicesdata/api/get-all')
    const services = res.json()
    return services
}

export const getServicesDetail = async (id) => {
    const res = await fetch(`http://localhost:3000/servicesdata/api/${id}`)
    const service = res.json()
    return service
}