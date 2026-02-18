import React, { useState, useEffect } from 'react';
import './RegistrationFormModal.css';

const RegistrationFormModal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    const [authorCount, setAuthorCount] = useState("1"); // Dynamic author count

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyHZRbtKPaiO0E_SOKZ9eExXwy31iHRZXYDV43lOiNnrhtT2kv-wsH83brsw9IlpqIV/exec";

    useEffect(() => {
        if (!isOpen) {
            setStatusMsg("");
            setAuthorCount("1");
        }
    }, [isOpen]);

    //Base64 code
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
    });
};

const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        
        const paymentFile = form.paymentProof.files[0];
        const paperFile = form.paperUpload.files[0];

        // --- FILE SIZE LIMIT (15MB) ---
        const MAX_SIZE = 15 * 1024 * 1024; // 15MB in bytes
        if (paymentFile.size > MAX_SIZE || paperFile.size > MAX_SIZE) {
            setStatusMsg("❌ File too large! Maximum limit is 15MB per file.");
            return;
        }

        setLoading(true);
        setStatusMsg("Processing files and registering...");

        try {
            // Convert both files to Base64
            const paymentBase64 = await fileToBase64(paymentFile);
            const paperBase64 = await fileToBase64(paperFile);

            const formData = new URLSearchParams();
            
            // Basic & Payment Info
            formData.append("mode", form.mode.value);
            formData.append("category", form.category.value);
            formData.append("utrNo", form.utrNo.value);
            formData.append("fileData", paymentBase64); // Payment File
            formData.append("fileType", paymentFile.type);

            // Paper Info (Naya Section)
            formData.append("paperData", paperBase64); // Paper File
            formData.append("paperType", paperFile.type);

            // Authors Info (Mandatory & Dynamic)
            formData.append("nameAuthor", form.nameAuthor.value);
            formData.append("emailAuthor", form.emailAuthor.value);
            formData.append("instAuthor", form.instAuthor.value);
            formData.append("phoneAuthor", form.phoneAuthor.value);
            
            formData.append("nameCo1", authorCount >= 2 ? form.nameCo1.value : "N/A");
            formData.append("instCo1", authorCount >= 2 ? form.instCo1.value : "N/A");
            formData.append("emailCo1", authorCount >= 2 ? form.emailCo1.value : "N/A");
            formData.append("phoneCo1", authorCount >= 2 ? form.phoneCo1.value : "N/A");
            
            formData.append("nameCo2", authorCount == 3 ? form.nameCo2.value : "N/A");
            formData.append("instCo2", authorCount == 3 ? form.instCo2.value : "N/A");
            formData.append("emailCo2", authorCount == 3 ? form.emailCo2.value : "N/A");
            formData.append("phoneCo2", authorCount == 3 ? form.phoneCo2.value : "N/A");

            const response = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
            const result = await response.text();

            if (result.includes("ALREADY_EXISTS")) {
                setStatusMsg("❌ This email is already registered!");
            } else if (result.includes("SUCCESS")) {
                setStatusMsg("✅ Registration & Submission Successful!");
                setTimeout(() => { onClose(); form.reset(); }, 3000);
            } else {
                setStatusMsg("❌ Error: " + result);
            }
        } catch (error) {
            setStatusMsg("❌ Connection Error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

//originally 
    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const file = form.paymentProof.files[0];

    //     setLoading(true);
    //     setStatusMsg("Processing your registration...");

    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = async () => {
    //         const base64Data = reader.result.split(',')[1];
    //         const formData = new URLSearchParams();
            
    //         // Basic Info
    //         formData.append("mode", form.mode.value);
    //         formData.append("category", form.category.value);
    //         formData.append("utrNo", form.utrNo.value);
    //         formData.append("fileData", base64Data);
    //         formData.append("fileType", file.type);

    //         // Main Author (Mandatory)
    //         formData.append("nameAuthor", form.nameAuthor.value);
    //         formData.append("emailAuthor", form.emailAuthor.value);
    //         formData.append("instAuthor", form.instAuthor.value);
    //         formData.append("phoneAuthor", form.phoneAuthor.value);
            
    //         // Co-Author 1 (Only if count >= 2)
    //         formData.append("nameCo1", authorCount >= 2 ? form.nameCo1.value : "N/A");
    //         formData.append("instCo1", authorCount >= 2 ? form.instCo1.value : "N/A");
    //         formData.append("emailCo1", authorCount >= 2 ? form.emailCo1.value : "N/A");
    //         formData.append("phoneCo1", authorCount >= 2 ? form.phoneCo1.value : "N/A");
            
    //         // Co-Author 2 (Only if count == 3)
    //         formData.append("nameCo2", authorCount == 3 ? form.nameCo2.value : "N/A");
    //         formData.append("instCo2", authorCount == 3 ? form.instCo2.value : "N/A");
    //         formData.append("emailCo2", authorCount == 3 ? form.emailCo2.value : "N/A");
    //         formData.append("phoneCo2", authorCount == 3 ? form.phoneCo2.value : "N/A");

    //         try {
    //             const response = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
    //             const result = await response.text();

    //             if (result.includes("ALREADY_EXISTS")) {
    //                 setStatusMsg("❌ This email is already registered!");
    //             } else if (result.includes("SUCCESS")) {
    //                 setStatusMsg("✅ Registration Successful!");
    //                 setTimeout(() => { onClose(); form.reset(); }, 2500);
    //             } else {
    //                 setStatusMsg("❌ Error: " + result);
    //             }
    //         } catch (error) {
    //             setStatusMsg("✅ Submission recorded! Check your email for confirmation.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    // };

//     const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
    
//     // Dono files ko pakadna
//     const paymentFile = form.paymentProof.files[0];
//     const paperFile = form.paperUpload.files[0];

//     // --- 15MB LIMIT CHECK ---
//     const MAX_SIZE = 15 * 1024 * 1024; // 15MB
//     if (paymentFile.size > MAX_SIZE || paperFile.size > MAX_SIZE) {
//         setStatusMsg("❌ File size too large! Max limit is 15MB per file.");
//         return;
//     }

//     setLoading(true);
//     setStatusMsg("Processing documents... please wait.");

//     try {
//         // Dono files ko Base64 mein convert karna
//         const paymentBase64 = await fileToBase64(paymentFile);
//         const paperBase64 = await fileToBase64(paperFile);

//         const formData = new URLSearchParams();
        
//         // Basic & Payment Data
//         formData.append("mode", form.mode.value);
//         formData.append("category", form.category.value);
//         formData.append("utrNo", form.utrNo.value);
//         formData.append("fileData", paymentBase64); 
//         formData.append("fileType", paymentFile.type);

//         // Paper Data (Jo Apps Script expect kar raha hai)
//         formData.append("paperData", paperBase64);
//         formData.append("paperType", paperFile.type);

//         // Authors Data (Purana logic)
//         formData.append("nameAuthor", form.nameAuthor.value);
//         formData.append("emailAuthor", form.emailAuthor.value);
//         formData.append("instAuthor", form.instAuthor.value);
//         formData.append("phoneAuthor", form.phoneAuthor.value);
//         // ... baaki Co-authors ka logic same rahega ...

//         const response = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
//         const result = await response.text();

//         if (result.includes("ALREADY_EXISTS")) {
//             setStatusMsg("❌ This email is already registered!");
//         } else if (result.includes("SUCCESS")) {
//             setStatusMsg("✅ Registration & Submission Successful!");
//             setTimeout(() => { onClose(); form.reset(); }, 3000);
//         } else {
//             setStatusMsg("❌ Error: " + result);
//         }
//     } catch (error) {
//         setStatusMsg("❌ Network Error. Check your connection.");
//     } finally {
//         setLoading(false);
//     }
// };
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card wide-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <div className="modal-header-section">
                    <h3>Full Paper Submission</h3>
                    <p>International Conference on Cybersecurity Law and Governance 2026</p>
                </div>
<form className="modal-form-body registration-grid" onSubmit={handleFormSubmit}>
    
    {/* Selectors Section */}
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
            <option value="Academician">Academician/Professionals</option>
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

    {/* Main Author Section */}
    <h4 className="full-width separator">Main Author Details</h4>
    
    <div className="form-field">
        <label>Full Name *</label>
        <input type="text" name="nameAuthor" placeholder="Enter Name" required />
    </div>

    <div className="form-field">
        <label>Email Address *</label>
        <input type="email" name="emailAuthor" placeholder="example@gmail.com" required />
    </div>

 <div className="form-field">
        <label>Phone Number *</label>
        <input type="text" name="phoneAuthor" placeholder="10-digit no." required />
    </div>

    <div className="form-field">
        <label>Institution/University *</label>
        <input type="text" name="instAuthor" placeholder="University Name" required />
    </div>

   

    {/* Co-Author 1 */}
    {authorCount >= 2 && (
        <>
            <h4 className="full-width separator">Co-Author 1 Details</h4>
            <div className="form-field">
                <label>Full Name *</label>
                <input type="text" name="nameCo1"placeholder="Enter Name" required />
            </div>
               <div className="form-field">
                <label>Email *</label>
                <input type="email" name="emailCo1" placeholder="example@gmail.com" required />
            </div>
            <div className="form-field">
                <label>Phone *</label>
                <input type="text" name="phoneCo1" placeholder="10-digit no." required />
            </div>
            <div className="form-field">
                <label>Institution *</label>
                <input type="text" name="instCo1" placeholder="University Name" required />
            </div>
         
        </>
    )}

    {/* Co-Author 2 */}
    {authorCount == 3 && (
        <>
            <h4 className="full-width separator">Co-Author 2 Details</h4>
            <div className="form-field">
                <label>Full Name *</label>
                <input type="text" name="nameCo2" placeholder="Enter Name" required />
            </div>
             <div className="form-field">
                <label>Email *</label>
                <input type="email" name="emailCo2" placeholder="example@gmail.com" required />
            </div>
            <div className="form-field">
                <label>Phone *</label>
                <input type="text" name="phoneCo2" placeholder="10-digit no." required />
            </div>
            <div className="form-field">
                <label>Institution *</label>
                <input type="text" name="instCo2" placeholder="University Name" required />
            </div>
           
        </>
    )}

    {/* Upload Section */}
    <h4 className="full-width separator">Document Submission (Max 15MB)</h4>
    
    <div className="form-field">
        <label>Transaction/UTR Number *</label>
        <input type="text" name="utrNo" placeholder="Enter UTR Number" required />
    </div>

    <div className="form-field">
        <label>Payment Proof (Image/PDF) *</label>
        <input type="file" name="paymentProof" accept="image/*,.pdf" required />
    </div>

    <div className="form-field full-width">
        <label>Upload Full Paper (PDF/DOCX) *</label>
        <input type="file" name="paperUpload" accept=".pdf,.doc,.docx" required />
    </div>

    {/* Submit Button */}
    <div className="full-width">
        <button type="submit" disabled={loading} className="modal-submit-button">
            {loading ? "Uploading Documents..." : "Submit Full Paper & Register"}
        </button>
        {statusMsg && (
            <p className={`status-text ${statusMsg.includes('✅') ? 'success' : 'error'}`}>
                {statusMsg}
            </p>
        )}
    </div>
</form>


                {/* <form className="modal-form-body registration-grid" onSubmit={handleFormSubmit}> */}
                    
                    {/* Selectors */}
                    {/* <div className="form-field">
                        <label>Mode of Conference *</label>
                        <select name="mode" required>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </div> */}
                    {/* <div className="form-field">
                        <label>Category *</label>
                        <select name="category" required>
                            <option value="">--Select--</option>
                            <option value="Student">Student/Researcher</option>
                            <option value="Academician">Academician/Professionals</option>
                        </select>
                    </div> */}
                    {/* <div className="form-field">
                        <label>Number of Authors *</label>
                        <select value={authorCount} onChange={(e) => setAuthorCount(e.target.value)}>
                            <option value="1">1 Author</option>
                            <option value="2">2 Authors</option>
                            <option value="3">3 Authors</option>
                        </select>
                    </div> */}

                    {/* Main Author */}
                    {/* <h4 className="full-width separator"> Author Details </h4>
                    <div className="form-field"><input type="text" name="nameAuthor" placeholder="Full Name *" required /></div>
                    <div className="form-field"><input type="email" name="emailAuthor" placeholder="Email Address *" required /></div>
                    <div className="form-field"><input type="text" name="instAuthor" placeholder="Institution/University *" required /></div>
                    <div className="form-field"><input type="text" name="phoneAuthor" placeholder="Phone Number *" required /></div> */}

                    {/* Co-Author 1 */}
                    {/* {authorCount >= 2 && (
                        <>
                            <h4 className="full-width separator">Co-Author 1 Details</h4>
                            <div className="form-field"><input type="text" name="nameCo1" placeholder="Co-Author 1 Name *" required /></div>
                            <div className="form-field"><input type="text" name="instCo1" placeholder="Institution *" required /></div>
                            <div className="form-field"><input type="email" name="emailCo1" placeholder="Email *" required /></div>
                            <div className="form-field"><input type="text" name="phoneCo1" placeholder="Phone *" required /></div>
                        </>
                    )} */}

                    {/* Co-Author 2 */}
                    {/* {authorCount == 3 && (
                        <>
                            <h4 className="full-width separator">Co-Author 2 Details</h4>
                            <div className="form-field"><input type="text" name="nameCo2" placeholder="Co-Author 2 Name *" required /></div>
                            <div className="form-field"><input type="text" name="instCo2" placeholder="Institution *" required /></div>
                            <div className="form-field"><input type="email" name="emailCo2" placeholder="Email *" required /></div>
                            <div className="form-field"><input type="text" name="phoneCo2" placeholder="Phone *" required /></div>
                        </>
                    )} */}

                    {/* Payment Info */}
                    {/* <h4 className="full-width separator">Payment Information</h4>
                    <div className="form-field"><input type="text" name="utrNo" placeholder="UTR/Transaction Number *" required /></div>
                    <div className="form-field"><input type="file" name="paymentProof" accept="image/*,.pdf" required /></div> */}

{/* Final Submission Section */}
                    {/* <h4 className="full-width separator">Document Uploads (Max 15MB each)</h4>
                    
                    <div className="form-field">
                        <label>Payment Proof (Image/PDF) *</label>
                        <input type="file" name="paymentProof" accept="image/*,.pdf" required />
                    </div>

                    <div className="form-field">
                        <label>Full Paper (PDF/DOCX) *</label>
                        <input type="file" name="paperUpload" accept=".pdf,.doc,.docx" required />
                    </div>

                    <div className="form-field full-width">
                        <input type="text" name="utrNo" placeholder="UTR/Transaction Number *" required />
                    </div>

                    <div className="full-width">
                        <button type="submit" disabled={loading} className="modal-submit-button">
                            {loading ? "Submitting..." : "Submit Registration"}
                        </button>
                        {statusMsg && <p className={`status-text ${statusMsg.includes('✅') ? 'success' : 'error'}`}>{statusMsg}</p>}
                    </div>
                </form> */}
            </div>
        </div>
    );
};

export default RegistrationFormModal;