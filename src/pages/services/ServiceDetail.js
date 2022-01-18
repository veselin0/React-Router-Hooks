import {useParams, useHistory} from "react-router-dom"

import servicesData from "./servicesData"

function ServiceDetail() {
    const {serviceId} = useParams()
    const thisService = servicesData.find(service => service._id === serviceId)
    
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
        </div>
    )
}

export default ServiceDetail