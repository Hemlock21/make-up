import bridalImage from '../images/bridal.PNG'
import eventImage from '../images/event.PNG'

function FullService() {
    return (
        <div className="FullService">
            <main style={{ paddingTop: '20px' }}>
                <div className="flex flex-col items-center w-full">
                    <strong style={{ fontSize: '48px', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, marginBottom: '24px', textAlign: 'center', display: 'block', width: '100%' }}>Bridal Make Up</strong>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10vh', alignItems: 'stretch', width: '100%', maxWidth: '75vw', boxSizing: 'border-box' }}>

                        {/* INFO */}
                        <div className="flex flex-col">
                            <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0', marginBottom: '16px' }}>
                                We would like to make your special day the best it can be. Making you look your absolute best on your wedding day is my number one priority and I am here to guide you every step of the way.
                            </p>

                            <strong style={{ fontSize: '24px', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, marginBottom: '12px', marginTop: '36px', display: 'block', width: '100%' }}>The Bride’s Makeup Trial</strong>

                                <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0'}}>
                                We offer a rehearsal of your wedding image to decide what you need on your day.
                            </p>
                                <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0'}}>
                                In the studio, we will discuss all necessary details of your image, do a trial makeup and hairstyle. We are also happy to inform you that we are ready to create a four-handed wedding look on your request!
                            </p>
                                <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0', marginBottom: '16px' }}>
                                This will reduce your preparation time in half. Another plus of such a tandem is the high qualifications of the masters in their field – the makeup artist does the makeup, while the hairdresser does the hairstyle.
                            </p>

                            <strong style={{ fontSize: '24px', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, marginBottom: '12px', marginTop: '36px', display: 'block', width: '100%' }}>Reservation</strong>


                                <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0'}}>
                                We recommend booking dates as soon as you have set your wedding date so that you can reserve a convenient time.
                            </p>
                            <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0', marginBottom: '16px' }}>
                                Our extensive experience with brides allows us to confidently say that the most relaxing and comfortable place for makeup and hairstyling is our studio. It has great lighting and all the necessary tools to make your day special.
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div>
                            <img src={bridalImage} alt="Bridal Make Up" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
                            <button style={{ width: '100%', padding: '10px', marginTop: '8px', border: '1px solid #7A6A62', background: 'transparent', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 300 }}>Book Now</button>
                        </div>
                    </div>


                    {/*EVENT*/}
                    <strong style={{ fontSize: '48px', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, marginBottom: '24px', marginTop: '2vw', textAlign: 'center', display: 'block', width: '100%' }}>Event Make Up</strong>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10vh', alignItems: 'stretch', width: '100%', maxWidth: '75vw', boxSizing: 'border-box' }}>

                        {/* IMAGE */}
                        <div>
                            <img src={eventImage} alt="Event Make Up" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
                            <button style={{ width: '100%', padding: '10px', marginTop: '8px', border: '1px solid #7A6A62', background: 'transparent', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 300 }}>Book Now</button>
                        </div>


                        {/* INFO */}
                        <div className="flex flex-col">
                            <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0' }}>
                                Do you want to look 100% perfect on your holiday or at a corporate party? Or maybe you have a photo shoot or a bachelorette party?
                            </p>

                                <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0'}}>
                                Our masters will help you become even more beautiful for any occasion!
                            </p>
                                <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0', marginBottom: '100px' }}>
                                 Whether it’s for a wedding, an evening event, makeup for a photo shoot, or a lifting makeup.
                            </p>

                            <p style={{ fontSize: '18px', fontFamily: 'Poppins, serif', fontWeight: 300, marginTop: '0', marginBottom: '16px' }}>
                                 We offer any services that matches your imagination, whether its abstract, unique or something extraordinary. 
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default FullService