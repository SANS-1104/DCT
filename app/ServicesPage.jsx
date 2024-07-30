import AppleCardsCarouselDemo from "./AppleCardsDemo";

export default function ServicesPage(){
    return(
        <div className="services-section flex flex-col items-center justify-center mt-20">
            <div className="section-heading text-7xl font-bold">DCT SERVICES</div>
            <AppleCardsCarouselDemo />
        </div>
    )
}