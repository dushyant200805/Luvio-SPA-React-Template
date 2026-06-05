function TreatmentDetail () {
      const Treatments = [
        {
            id: 1,
            "TreatmentTitle":"Rejuvenation pack.",
            "TreatmentPrice":"from $45.00.",
            "TreatmentDesc":"Lorem Ipsum estibulum blandit libero atma",
        },
        {
            id: 2,
            "TreatmentTitle":"Back massage.",
            "TreatmentPrice":"from $55.00.",
            "TreatmentDesc":"Lorem Ipsum estibulum blandit libero atma",
        },
        {
            id: 3,
            "TreatmentTitle":"Anti-stress.",
            "TreatmentPrice":"from $75.00.",
            "TreatmentDesc":"Lorem Ipsum estibulum blandit libero atma",
        },
        {
            id: 4,
            "TreatmentTitle":"sun package",
            "TreatmentPrice":"from $105.00.",
            "TreatmentDesc":"Lorem Ipsum estibulum blandit libero atma",
        },
        {
            id: 5,
            "TreatmentTitle":"Stone massage.",
            "TreatmentPrice":"from $35.00.",
            "TreatmentDesc":"Lorem Ipsum estibulum blandit libero atma",
        },
        {
            id: 6,
            "TreatmentTitle":"Relax massage.",
            "TreatmentPrice":"from $25.00.",
            "TreatmentDesc":"Lorem Ipsum estibulum blandit libero atma",
        },
        {
            id: 7,
            "TreatmentTitle":"Reflexology.",
            "TreatmentPrice":"from $75.00.",
            "TreatmentDesc":"Lorem Ipsum estibulum blandit libero atma",
        },
        {
            id: 8,
            "TreatmentTitle":"Acupuncture.",
            "TreatmentPrice":"from $85.00.",
            "TreatmentDesc":"Lorem Ipsum estibulum blandit libero atma",
        }
      ]
    return (
        <>
            {Treatments.map((item, index) => {
                return(
                    <div className="col-md-5 mx-auto px-2" key={index}>
                        <div className="price-list-item mb-2 border-bottom light-border">
                            <div className="price-top d-flex justify-content-between">
                                <h3 className="para-text text-capitalize fs-5">{item.TreatmentTitle}</h3>
                                <div className="price">
                                    <span className="para-text">{item.TreatmentPrice}</span>
                                </div>
                            </div>
                            <p className="para-text">{item.TreatmentDesc}</p>
                        </div>
                    </div>  
                );
            })}
        </>
        
    );
}
export default TreatmentDetail;
