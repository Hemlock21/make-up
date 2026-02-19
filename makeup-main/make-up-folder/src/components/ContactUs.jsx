

function ContactUs() {
    return (
        <div className="ContactUs">
            <main>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10vh', alignItems: 'stretch' }}>

{/* Location */}
<div className="flex flex-col">
    <strong style={{ fontSize: '48px', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, marginBottom: '10px' }}>LOCATION</strong>
    <div style={{ minHeight: '80px' }}>
        <div style={{ marginBottom: '8px', fontWeight: 350 }}>ProMakeup  @ Kim & Rose</div>
        <div style={{ marginBottom: '8px', fontWeight: 350 }}>Triq Tal - Katidral 62</div>
        <div style={{ marginBottom: '8px', fontWeight: 350 }}>+356 7952 1909</div>
    </div>
    <div style={{ width: '450px', height: '450px', overflow: 'hidden' }}>
                                    <iframe
                                title="location-map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d201.96652854766762!2d14.5047997!3d35.9111299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45d56d84c63f%3A0xf2e610059d5bfdf1!2sKim%20%26%20Rose!5e0!3m2!1sen!2smt!4v1754862798350!5m2!1sen!2smt"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
    </div>
</div>

{/* Get In Touch */}
<div className="flex flex-col">
    <strong style={{ fontSize: '48px', fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, marginBottom: '10px', display: 'block', textDecorationLine: 'underline', textUnderlineOffset: '2px', textDecorationThickness: '2px' }}>GET IN TOUCH</strong>
    <div style={{ minHeight: '92px' }}>
        <div style={{ fontSize: '18px', fontWeight: 350 }}>Professional make up artist</div>
    </div>
    <div className="flex flex-col" style={{ gap: '8px' }}>
        <div className="flex flex-row" style={{ gap: '8px' }}>
            <input type="text" placeholder="Name" required style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #7A6A62', background: 'transparent' }} />
            <input type="email" placeholder="Email" required style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #7A6A62', background: 'transparent' }} />
        </div>
        <input type="text" placeholder="Subject" required style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #7A6A62', background: 'transparent' }} />
        <textarea placeholder="Text" required style={{ width: '100%', height: '150px', padding: '10px', boxSizing: 'border-box', border: '1px solid #7A6A62', background: 'transparent', resize: 'vertical' }} />
        <button className="self-start cursor-pointer" style={{ padding: '10px 20px', border: '1px solid #7A6A62', background: 'transparent', fontSize: '16px', fontWeight: 300, margin: 0 }}>Submit</button>
    </div>
</div>

                </div>
            </main>
        </div>
    );
}

export default ContactUs;