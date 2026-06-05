function ServiceCard () {
    const ServiceData =[
        {
            "Serviceicon":"/service-icon-1.webp",
            "ServiceTitle":"Dry sauna",
            "ServiceDesc":"Lorem ipsum dolor sit amet consectetur Recusandae minus rerum ipsa."
        },
         {
            "Serviceicon":"/service-icon-2.webp",
            "ServiceTitle":"Tropical sauna",
            "ServiceDesc":"Lorem ipsum dolor sit amet consectetur Recusandae minus rerum ipsa."
        },
        {
            "Serviceicon":"/service-icon-3.webp",
            "ServiceTitle":"Salt rooms",
            "ServiceDesc":"Lorem ipsum dolor sit amet consectetur Recusandae minus rerum ipsa."
        },
        {
            "Serviceicon":"/service-icon-4.webp",
            "ServiceTitle":"Pools",
            "ServiceDesc":"Lorem ipsum dolor sit amet consectetur Recusandae minus rerum ipsa."
        },
    ]
     return (
        <>
         {ServiceData.map((item,index)=>{
            return (
                <div className="col-lg-3 col-6 border-end white-border px-3 " key={index}>
                    <div className=" service-card">
                        <div className="service-content p-2">
                            <div className="service-icon">
                                <img src={item.Serviceicon} alt="service-img" className="object-fit-cover w-25"/>
                            </div>
                            <div className="content ">
                                <h4 className="white-text second-font fs-1">{item.ServiceTitle}</h4>
                                <p className="white-text">{item.ServiceDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
         })}
        </>
     );
}
export default ServiceCard ;