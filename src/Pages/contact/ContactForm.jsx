import { useForm } from "react-hook-form";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ContactForm() {
    // aos Animation
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,    // run only once
        });
    }, []);
    // form Validation 
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append("contactfmain", true);
        formData.append("fname", data.firstname);
        formData.append("lname", data.lastname);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("message", data.message);

        try {
            const response = await fetch("http://localhost:8080/send_email.php", {
                method: "POST",
                body: formData,
            });

            const result = await response.text();
            console.log(result);

            reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            {/* <!-- map-section --> */}
            <div className="py-5 alt-bg border-top border-bottom prime-border" data-aos="fade-up">
                <div className="container">
                    <div className="add-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10046.447239849982!2d-110.80078406713305!3d39.59685795943197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sQueens%20stae%20park%20city%2C%20Momin%20Tower%2078%2C%20New%20York%2CWT47.!5e0!3m2!1sen!2sin!4v1609595158834!5m2!1sen!2sin"
                            style={{ border: 0, width: "100%", height: "550px" }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                    </div>
                </div>
            </div>

            {/* <!-- contact --> */}
            <section className="py-5 ">
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-7" data-aos="zoom-in">
                            <div className="contact-image h-100 p-3">
                                <img src="/public/contact-img.webp" alt="contact-img" className="object-fit-cover rounded-0 faq-img w-100" height="600" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className=" h-100 p-4">
                                <small className="head-text fw-medium text-capitalize d-inline-block mb-3"># contact</small>
                                <h2 className="head-text text-capitalize mb-4 display-5 fw-medium">Start Your Spa Wellness Journey</h2>
                                <form id="contactform" onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <div className="mb-2">
                                        <input type="text" aria-label="First-name" className="form-control rounded-0 border light-border py-2 input-bg input-text shadow-none"
                                            name="fname" id="fname" placeholder=" First name" {...register("firstname", { required: "Enter Your First Name" })} />
                                        <div className="error">{errors.firstname?.message}</div>
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" aria-label="Last-name" className="form-control rounded-0 border light-border py-2 input-bg input-text shadow-none"
                                            name="lname" id="lname" placeholder=" Last name" {...register("lastname", { required: "Enter Your Last Name" })} />
                                        <div className="error">{errors.lastname?.message}</div>
                                    </div>
                                    <div className="mb-2">
                                        <input type="email" aria-label="E-mail" className="form-control rounded-0 border light-border py-2 input-bg input-text shadow-none"
                                            name="email" id="email" placeholder=" Email" {...register('email', { required: "Enter Your Email Address", pattern: { value: /^\S+@\S+$/i, message: "Please Enter A Vaild Email Address" } })} />
                                        <div className="error">{errors.email?.message}</div>
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" aria-label="Phone" className="form-control rounded-0 border light-border py-2 input-bg input-text shadow-none"
                                            name="phone" id="phone" placeholder=" Mobile number" onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ""); }} {...register("phone", { required: "Enter Your Phone", pattern: { value: /^[6-9]\d{9}$/, message: "Please Enter A Vaild Phone Number" } })} />
                                        <div className="error">{errors.phone?.message}</div>
                                    </div>
                                    <div className="mb-4">
                                        <textarea name="message" aria-label="Message" id="message" className="form-control rounded-0 border light-border py-2 input-bg input-text shadow-none"
                                            rows="5" placeholder="Message" {...register("message", { required: "Enter Your Message" })}></textarea>
                                        <div className="error">{errors.message?.message}</div>
                                    </div>
                                    <div className="mb-2">
                                        <button type="submit" name="contactfmain" className="btn prime-btn rounded-0 text-capitalize">submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactForm;