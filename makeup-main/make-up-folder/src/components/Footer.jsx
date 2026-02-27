import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className="shrink-0 w-full bg-[#7A6A62] text-[#CFC4BD]">
            <div className="max-w-[80vw] mx-auto px-10 py-4 flex justify-between items-start">
                <div className="flex gap-[80px]">
 <div>
    <h1 style={{ margin: '0', paddingTop: '10px' }} className="text-2xl font-['Cormorant_Garamond',serif]">Contact Us</h1>
<div style={{ paddingTop: '8px' }} className="flex items-center gap-2">
    <FaPhone style={{ marginRight: '6px', marginBottom: '2px' }} /> <span style={{ borderBottom: '1px solid #CFC4BD', marginBottom: '2px' }}>+356 7952 1909</span>
</div>
<div className="flex items-center gap-2">
    <MdEmail style={{ marginRight: '6px' }} /> <span style={{ borderBottom: '1px solid #CFC4BD' }}>info@promakeup.studio</span>
</div>
</div>
<div>
    <h1 style={{ margin: '0', paddingTop: '10px' }} className="text-2xl font-['Cormorant_Garamond',serif]">Address</h1>
    <div style={{ paddingTop: '8px' }}>ProMakeup @ Kim & Rose</div>
    <div>Professional Makeup in Malta</div>
    <div>Triq Tal - Katidral 62</div>
    <div>Sliema, VAT: 2877-7802</div>
</div>
                </div>
                <div className="text-right flex flex-col gap-2">
                    <div>
                        <h1 style={{ fontSize: '32px', margin: '0', paddingTop: '10px' }} className="font-['Cormorant_Garamond',serif]"><strong>PRO</strong> <span style={{ fontWeight: 300 }}>makeup studio</span></h1>
                        <h1 style={{ fontSize: '24px', margin: '0' }} className="font-['Cormorant_Garamond',serif]"><span style={{ fontWeight: 300 }}>ELENA STAGGE</span></h1>
                    </div>
                    <p style={{ margin: '0', paddingBottom: '25px', paddingTop: '40px' }} className="text-sm">Copyright ©2022-2026 ProMakeup, WebDesign ProMakeup</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer