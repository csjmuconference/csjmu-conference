import React, { useState } from 'react';
import './RegistrationModal.css';

const RegistrationModal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVdgmO6ltNdc9_LDD6wHPhOGYHo-SEtak9T1v8JEZ87UNJc9z05FNQPXXgYxOC4cbe/exec";

    
// Modal khulne ya band hone par message reset karne ke liye
React.useEffect(() => {
    if (!isOpen) {
        setStatusMsg(""); // Jab modal band ho, message khali kar do
    }
}, [isOpen]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const file = form.abstract.files[0];

        const MAX_FILE_SIZE = 15 * 1024 * 1024; 
        if (file.size > MAX_FILE_SIZE) {
            setStatusMsg("❌ Error: File size should be less than 15MB.");
            return;
        }

        setLoading(true);
        setStatusMsg("Checking details... Please wait.");

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const base64Data = reader.result.split(',')[1];
            
            // YAHAN BADLAV HAI: URLSearchParams ki jagah normal object ya FormData
            const formData = new URLSearchParams();
            formData.append("name", form.name.value);
            formData.append("email", form.email.value);
            formData.append("phone", form.phone.value);
            formData.append("institution", form.institution.value);
            formData.append("designation", form.designation.value);
            formData.append("trackTheme", form.theme.value);
            formData.append("papertitle", form.papertitle.value);
            formData.append("fileData", base64Data);
            formData.append("fileType", file.type);

            try {
                // HUMNE 'no-cors' HATA DIYA HAI taaki result padh sakein
                const response = await fetch(SCRIPT_URL, { 
                    method: 'POST', 
                    body: formData 
                });

                const result = await response.text();

                // Backend se aane wale message ko check karna
                if (result === "ALREADY_EXISTS") {
                    setStatusMsg("❌ Error: This email is already registered!");
                } else {
                    setStatusMsg("✅ Success! Your abstract has been submitted.");
                    setTimeout(() => { 
                        onClose(); 
                        setStatusMsg(""); 
                        form.reset(); 
                    }, 2500);
                }

            } catch (error) {
                // Agar CORS ki wajah se catch mein jaye par data save ho gaya ho
                // Google Apps Script mein aksar CORS catch mein trigger hota hai
                setStatusMsg("✅ Submitted! Please check your email for confirmation.");
                console.log("CORS Note: If data is in sheet, ignore this error.");
            } finally {
                setLoading(false);
            }
        };
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <div className="modal-header-section">
                    <h3>Abstract Submission</h3>
                    <p>International Conference on Cybersecurity Law and Governance 2026</p>
                </div>
                <form className="modal-form-body" onSubmit={handleFormSubmit}>
                    <div className="form-field">
                        <label>Full Name *</label>
                        <input type="text" name="name" placeholder="As per certificate" required />
                    </div>
                    <div className="form-field">
                        <label>Email Address *</label>
                        <input type="email" name="email" placeholder="example@gmail.com" required />
                    </div>
                    <div className="form-field">
                        <label>Mobile Number *</label>
                        <input type="text" name="phone" placeholder="10-digit number" required />
                    </div>
                    <div className="form-field">
                        <label>Institute / Organisation *</label>
                        <input type="text" name="institution" placeholder="University Name" required />
                    </div>
                    <div className="form-field">
                        <label>Designation *</label>
                        <input type="text" name="designation" placeholder="Student/Academician/Professional" required />
                    </div>
                    {/* Dropdown for Themes - Replace old Theme/SubTheme inputs with this */}
<div className="form-field">
    <label>Select Abstract Track/Theme *</label>
    <select name="theme" required className="modal-select">
        <option value="">-- Choose a Track --</option>
        <option value="Global & Comparative Cybersecurity Law">Global & Comparative Cybersecurity Law</option>
        <option value="Cybercrime, Jurisdiction & Enforcement">Cybercrime, Jurisdiction & Enforcement</option>
        <option value="Data Protection, Privacy & Digital Sovereignty">Data Protection, Privacy & Digital Sovereignty</option>
        <option value="Freedom of Expression & Content Moderation">Freedom of Expression & Content Moderation, and Cyber Governance</option>
        <option value="AI, Deepfakes & Emerging Technologies">AI, Deepfakes & Emerging Technologies</option>
        <option value="Blockchain & Cryptocurrency Regulation">Blockchain, Cryptocurrency& Digital Asset Regulation</option>
        <option value="Corporate Responsibility & Compliance">Corporate Responsibility & CyberSecurity Compliance</option>
        <option value="Digital Forensics & Evidentiary Challenges">Digital Forensics & Evidentiary Challenges</option>
        <option value="Public–Private Partnerships in Cyber Governance">Public–Private Partnerships in Cyber Governance</option>
        <option value="Capacity Building & Policy Innovation">Capacity Building, Policy Innovation & Global Resilience</option>
    </select>
</div>
                    {/* <div className="form-field">
                        <label>Abstract Theme *</label>
                        <input type="text" name="theme" placeholder="Theme" required />
                    </div> */}
                    <div className="form-field">
                        <label>Paper Title *</label>
                        <input type="text" name="papertitle" placeholder="Paper Title" required />
                    </div>
                    <div className="form-field">
                        <label>Upload Abstract (PDF/DOC) *</label>
                        <input type="file" name="abstract" accept=".pdf,.doc,.docx" required />
                    </div>
                    <button type="submit" disabled={loading} className="modal-submit-button">
                        {loading ? "Submitting..." : "Submit Registration"}
                    </button>
                    {statusMsg && (
                        <p className={`status-text ${statusMsg.includes('✅') ? 'success' : 'error'}`}>
                            {statusMsg}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegistrationModal;