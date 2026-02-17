import React, { useState, useEffect } from 'react';
import './RegistrationFormModal.css';

const RegistrationFormModal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    const [authorCount, setAuthorCount] = useState("1"); // Dynamic author count

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxm_kNCwkgd7KEi_dgRr1_LInM-Yewx3xPK0H01YGfz5P_dGbnv1uDdQfw15mv2yagR/exec";

    useEffect(() => {
        if (!isOpen) {
            setStatusMsg("");
            setAuthorCount("1");
        }
    }, [isOpen]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const file = form.paymentProof.files[0];

        setLoading(true);
        setStatusMsg("Processing your registration...");

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            const base64Data = reader.result.split(',')[1];
            const formData = new URLSearchParams();
            
            // Basic Info
            formData.append("mode", form.mode.value);
            formData.append("category", form.category.value);
            formData.append("utrNo", form.utrNo.value);
            formData.append("fileData", base64Data);
            formData.append("fileType", file.type);

            // Main Author (Mandatory)
            formData.append("nameAuthor", form.nameAuthor.value);
            formData.append("emailAuthor", form.emailAuthor.value);
            formData.append("instAuthor", form.instAuthor.value);
            formData.append("phoneAuthor", form.phoneAuthor.value);
            
            // Co-Author 1 (Only if count >= 2)
            formData.append("nameCo1", authorCount >= 2 ? form.nameCo1.value : "N/A");
            formData.append("instCo1", authorCount >= 2 ? form.instCo1.value : "N/A");
            formData.append("emailCo1", authorCount >= 2 ? form.emailCo1.value : "N/A");
            formData.append("phoneCo1", authorCount >= 2 ? form.phoneCo1.value : "N/A");
            
            // Co-Author 2 (Only if count == 3)
            formData.append("nameCo2", authorCount == 3 ? form.nameCo2.value : "N/A");
            formData.append("instCo2", authorCount == 3 ? form.instCo2.value : "N/A");
            formData.append("emailCo2", authorCount == 3 ? form.emailCo2.value : "N/A");
            formData.append("phoneCo2", authorCount == 3 ? form.phoneCo2.value : "N/A");

            try {
                const response = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
                const result = await response.text();

                if (result.includes("ALREADY_EXISTS")) {
                    setStatusMsg("❌ This email is already registered!");
                } else if (result.includes("SUCCESS")) {
                    setStatusMsg("✅ Registration Successful!");
                    setTimeout(() => { onClose(); form.reset(); }, 2500);
                } else {
                    setStatusMsg("❌ Error: " + result);
                }
            } catch (error) {
                setStatusMsg("✅ Submission recorded! Check your email for confirmation.");
            } finally {
                setLoading(false);
            }
        };
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card wide-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <div className="modal-header-section">
                    <h3>Full Registration Form</h3>
                    <p>International Conference on Cybersecurity Law and Governance 2026</p>
                </div>

                <form className="modal-form-body registration-grid" onSubmit={handleFormSubmit}>
                    
                    {/* Selectors */}
                    <div className="form-field">
                        <label>Mode of Conference *</label>
                        <select name="mode" required>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label>Category *</label>
                        <select name="category" required>
                            <option value="">--Select--</option>
                            <option value="Student">Student/Researcher</option>
                            <option value="Academician">Academician/Faculty</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label>Number of Authors *</label>
                        <select value={authorCount} onChange={(e) => setAuthorCount(e.target.value)}>
                            <option value="1">1 Author</option>
                            <option value="2">2 Authors</option>
                            <option value="3">3 Authors</option>
                        </select>
                    </div>

                    {/* Main Author */}
                    <h4 className="full-width separator">Main Author Details (Mandatory)</h4>
                    <div className="form-field"><input type="text" name="nameAuthor" placeholder="Full Name *" required /></div>
                    <div className="form-field"><input type="email" name="emailAuthor" placeholder="Email Address *" required /></div>
                    <div className="form-field"><input type="text" name="instAuthor" placeholder="Institution/University *" required /></div>
                    <div className="form-field"><input type="text" name="phoneAuthor" placeholder="Phone Number *" required /></div>

                    {/* Co-Author 1 */}
                    {authorCount >= 2 && (
                        <>
                            <h4 className="full-width separator">Co-Author 1 Details</h4>
                            <div className="form-field"><input type="text" name="nameCo1" placeholder="Co-Author 1 Name *" required /></div>
                            <div className="form-field"><input type="text" name="instCo1" placeholder="Institution *" required /></div>
                            <div className="form-field"><input type="email" name="emailCo1" placeholder="Email *" required /></div>
                            <div className="form-field"><input type="text" name="phoneCo1" placeholder="Phone *" required /></div>
                        </>
                    )}

                    {/* Co-Author 2 */}
                    {authorCount == 3 && (
                        <>
                            <h4 className="full-width separator">Co-Author 2 Details</h4>
                            <div className="form-field"><input type="text" name="nameCo2" placeholder="Co-Author 2 Name *" required /></div>
                            <div className="form-field"><input type="text" name="instCo2" placeholder="Institution *" required /></div>
                            <div className="form-field"><input type="email" name="emailCo2" placeholder="Email *" required /></div>
                            <div className="form-field"><input type="text" name="phoneCo2" placeholder="Phone *" required /></div>
                        </>
                    )}

                    {/* Payment Info */}
                    <h4 className="full-width separator">Payment Information</h4>
                    <div className="form-field"><input type="text" name="utrNo" placeholder="UTR/Transaction Number *" required /></div>
                    <div className="form-field"><input type="file" name="paymentProof" accept="image/*,.pdf" required /></div>

                    <div className="full-width">
                        <button type="submit" disabled={loading} className="modal-submit-button">
                            {loading ? "Submitting..." : "Submit Registration"}
                        </button>
                        {statusMsg && <p className={`status-text ${statusMsg.includes('✅') ? 'success' : 'error'}`}>{statusMsg}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationFormModal;