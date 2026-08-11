/* ==========================================
   TD BANK MONGOLIA - DIGITAL ONBOARDING ENGINE
   Bilingual translation (EN/MN) & Light Theme Steps
   ========================================== */

// Onboarding Application State
let appState = {
  currentStep: 0, // 0: Landing page, 1-6 Onboarding steps, 7: Success
  maxStepCompleted: 0,
  currentLang: 'EN',
  data: {
    mobileNumber: '',
    otpVerified: false,
    nrnNumber: '',
    docType: 'national_id',
    docsUploaded: [],
    selfieCaptured: false,
    selfieData: null,
    
    // Step 1 Loan Settings
    loanAmount: 5000000, // 5M MNT default
    loanTenure: 12,      // 12 months default
    calculatedEmi: 0,
    
    // Step 3 Employment Profile
    fullName: '',
    dob: '',
    gender: '',
    nationality: 'Mongolian',
    address: '',
    email: '',
    employmentStatus: 'Employed',
    employerName: '',
    occupation: '',
    workTenure: '2', // default 2 years
    monthlyIncome: 2500000, // net income in MNT
    salaryAccount: '', // existing account
    prefLanguage: 'MN',
    prefBranch: 'HQ',
    
    // Step 4 Approved Offer Details
    approvedLimit: 8000000,
    selectedAmount: 5000000,
    selectedTenure: 12,
    foirRatio: 0,
    
    // Step 6 Terms & Sign
    signatureDrawn: false,
    termsAccepted: false,
    leadId: ''
  }
};

// Bilingual dictionary
const translations = {
  EN: {
    support_num: "Support: +976 7011 1234",
    retail_suite: "RETAIL BANKING SUITE",
    landing_title: "Digital Personal Loan Application",
    landing_subtitle: "Apply for a personal loan completely online with TDB. Fast online verification, automated credit scoring, and instant disbursement to your salary account.",
    req_title: "What you will need to get started",
    req_step1_title: "Loan Calculation & OTP",
    req_step1_desc: "Configure your desired loan amount, tenure, and verify your mobile number with OTP.",
    req_step2_title: "Identity & Income Documents",
    req_step2_desc: "Your National ID Card and PDF/image copy of your salary slip or bank statement.",
    req_step3_title: "Employment & Profile Details",
    req_step3_desc: "Details of your employer, work tenure, net monthly salary, and repayment account.",
    req_step4_title: "Credit Decision & Offer",
    req_step4_desc: "Review automated credit checks, risk status, and adjust your final pre-approved loan offer.",
    time_info: "Disbursement time: ~5 minutes",
    start_app: "Apply for Personal Loan",
    
    // Steppers Nav
    step1_nav_title: "Loan Calculator & OTP",
    step1_nav_desc: "Configure loan & verify mobile",
    step2_nav_title: "Document Scan",
    step2_nav_desc: "Upload ID & income proof",
    step3_nav_title: "Employment Profile",
    step3_nav_desc: "Verify profile & income details",
    step4_nav_title: "Credit Check & Offer",
    step4_nav_desc: "Risk evaluation & credit limit",
    step5_nav_title: "Biometric Liveness",
    step5_nav_desc: "Secure face matching check",
    step6_nav_title: "Review & e-Sign",
    step6_nav_desc: "Sign Key Facts & submit",
    
    // Sidebar scorecard
    risk_unit_title: "AI Risk Scoring Unit",
    metric_risk_lbl: "Fraud Risk Level",
    unassessed: "Unassessed",
    metric_stp_lbl: "STP Check",
    metric_strength_lbl: "Biometric Cleared Strength",
    
    // Form headers & controls
    retail_onboarding_lbl: "Digital Retail Loan Engine",
    ai_standby: "AI Verification: Standby",
    btn_back: "Back",
    btn_save: "Save & Continue Later",
    btn_continue: "Continue",
    
    // Step 1 Form
    ill_step1_title: "Loan Calculator",
    ill_step1_desc: "Adjust the loan slider controls to calculate your estimated monthly payments, interest rate, and fees dynamically.",
    form_step1_title: "Configure Loan Request",
    form_step1_desc: "Set your desired loan amount and tenure, and verify your mobile number.",
    loan_amt_slider_lbl: "Desired Loan Amount",
    loan_tenure_slider_lbl: "Repayment Tenure Choice",
    emi_calc_header: "Estimated Repayment Details",
    interest_rate_lbl: "Interest Rate (Standard)",
    est_emi_lbl: "Monthly Payment (EMI)",
    flat_fee_lbl: "One-time Processing Fee",
    mobile_lbl: "Salary Mobile Number",
    send_otp: "Send OTP",
    otp_lbl: "OTP Verification Code",
    otp_timer_lbl: "Resend code in 60s",
    resend_otp: "Resend Code",
    nrn_lbl: "National Registration Number (Civil ID)",
    nrn_hint: "Format: 2 Cyrillic characters followed by 8 digits (e.g., АА12345678)",
    
    // Step 2 Form
    ill_step2_title: "Upload Documents",
    ill_step2_desc: "Our OCR engine will parse your ID card automatically. Upload income statements to compute your automated credit limits.",
    form_step2_title: "Identity & Income Verification",
    form_step2_desc: "Please upload your identity card and proof of income for extraction check.",
    doc_type_lbl: "Select ID Document",
    national_id_lbl: "National ID Card",
    passport_lbl: "Passport",
    permit_lbl: "Residence Permit",
    upload_drag_lbl: "Upload ID (Front & Back)",
    upload_hint_lbl: "Drag and drop PNG/JPG up to 10MB",
    upload_income_lbl: "Upload Income / Bank Statement",
    upload_income_hint: "Upload your latest salary slip or bank statement PDF/JPG",
    ai_chk_ocr: "OCR Extraction Check",
    ocr_text: "OCR Identity Data Extraction",
    pending: "Pending",
    
    // Step 3 Form
    ill_step3_title: "Employment Details",
    ill_step3_desc: "Verify your personal details auto-populated by the OCR system, and fill out your current job profile.",
    form_step3_title: "Employment & Profile Registry",
    form_step3_desc: "Provide your demographic details and salary payment settings.",
    banner_autofill_title: "OCR Data Extracted",
    banner_autofill_desc: "Please review the auto-populated details below. Highlighted fields are verified.",
    fullname_lbl: "Full Name (Latin)",
    dob_lbl: "Date of Birth",
    gender_lbl: "Gender",
    gender_male: "Male",
    gender_female: "Female",
    gender_other: "Other",
    nationality_lbl: "Nationality",
    address_lbl: "Registered Residential Address",
    locate: "Locate",
    email_lbl: "Email Address",
    phone_lbl: "Verified Mobile Number",
    employment_lbl: "Employment Type",
    emp_employed: "Employed (Full-time)",
    emp_self: "Self-Employed / Freelancer",
    emp_unemp: "Unemployed",
    emp_student: "Student",
    emp_retired: "Retired",
    employer_lbl: "Employer Name",
    occupation_lbl: "Job Role / Occupation",
    income_lbl: "Net Monthly Salary (MNT)",
    salary_acct_lbl: "Salary Repayment Account",
    pref_lang_lbl: "Preferred Hub Language",
    lang_mn: "Mongolian",
    lang_en: "English",
    pref_branch_lbl: "Repayment Branch Hub",
    branch_hq: "Sukhbaatar Square HQ",
    branch_west: "West Crossroad Branch",
    branch_erd: "Orkhon Erdenet Branch",
    
    // Step 4 Form
    form_step4_title: "Credit Scoring & Eligibility",
    form_step4_desc: "Our risk checks evaluate your profile against TDB lending regulations.",
    credit_score_title: "TDB Credit Rating Check",
    excellent_rating: "Excellent Credit Bureau Score",
    foir_check_title: "Debt-to-Income Assessment",
    foir_desc: "Fixed Obligation to Income Ratio (Max 50%)",
    net_salary_lbl: "Net Salary:",
    existing_debts_lbl: "Existing Debts / EMIs:",
    new_emi_lbl: "New Loan EMI:",
    foir_cap_lbl: "Calculated FOIR Ratio:",
    pass_cap_msg: "Within TDB policy limits (< 50%)",
    active_obligations_title: "Active Credit Obligations (Bureau)",
    lender_col: "Lender Name",
    type_col: "Type",
    balance_col: "Current Balance",
    emi_col: "Monthly EMI",
    preapproved_offer_title: "Pre-Approved Loan Offer",
    approved_limit_msg: "Based on your credit assessment, you are pre-approved for up to:",
    adjust_loan_amt: "Adjust your chosen loan limit:",
    confirm_offer_btn: "Confirm Approved Offer",
    
    // Step 5 Form
    form_step5_title: "Biometric Liveness Verification",
    form_step5_desc: "Perform instant liveness screening to verify user identity matching.",
    activate_cam: "Activate Camera Feed",
    align_face: "Align face in frame",
    liveness_ok: "Liveness Verified",
    capture: "Capture",
    retake: "Retake",
    ai_chk_bio: "Biometric Checklists",
    face_match_text: "Biometric Face Matching (ID vs Selfie)",
    dup_text: "Database Duplicate Clearance",
    aml_text: "AML Database Watchlist Check",
    
    // Step 6 Form
    ill_step6_title: "Agreement Execution",
    ill_step6_desc: "Review your structured loan terms and Key Facts Statement (KFS) before e-signing and submission.",
    form_step6_title: "Key Facts Statement & e-Sign",
    form_step6_desc: "Ensure terms are accurate. Draw your signature to execute the loan contract.",
    sum_sec1: "1. DEMOGRAPHICS & INCOME",
    sum_sec2: "2. LOAN TERMS SUMMARY",
    sum_sec3: "3. DISBURSEMENT TARGET",
    edit: "Edit",
    sum_name: "Applicant Name:",
    sum_nrn: "NRN / DOB:",
    sum_address: "Address:",
    sum_contact: "Contact Details:",
    sum_prod: "Principal Amount:",
    sum_card: "Loan Tenure:",
    sum_extra: "Monthly EMI:",
    sum_tax: "Employer Details:",
    sum_pref: "Repayment Account:",
    sum_delivery: "Selected Hub Branch:",
    kfs_headline: "Key Facts Statement (KFS) - Retail Personal Loan",
    kfs_th_amt: "Sanctioned Principal Amount",
    kfs_th_apr: "Annual Percentage Rate (APR) %",
    kfs_th_rate: "Floating Interest Rate",
    kfs_th_tenure: "Total Repayment Tenure",
    kfs_th_charges: "Upfront Processing Fee (+VAT)",
    kfs_th_penal: "Penal Overdue Policy",
    kfs_th_cooling: "Loan Cooling-off Period",
    kfs_th_grievance: "Grievance Redressal Contact",
    kfs_flat_fee: "15,000 ₮ flat processing fee",
    kfs_penal_desc: "0.1% daily penal fee on overdue principal",
    kfs_cooling_desc: "24 Hours (No foreclosure charges if principal is returned)",
    kfs_grievance_desc: "TDB Customer Care (grievance@tdbm.mn)",
    disclosures_title: "Retail Loan Disclosures & Mandates",
    disclosures_desc: "By e-signing, you declare all inputs are correct. You authorize TDB to pull credit files, register repayment mandates, and debit your salary account.",
    signature_lbl: "e-Signature Pad",
    terms_accept_lbl: "I agree to the Key Facts Statement and sign the loan agreement.",
    sec_status_title: "AML & PEP Security Clearance Status",
    cleared: "CLEARED",
    fatca_status: "AML Verification",
    pep_status: "PEP Check",
    passed: "Passed",
    
    // Step 7 Success
    success_title: "Loan Approved & Disbursed",
    success_desc: "Your digital loan application has been successfully processed. Funds are being disbursed to your salary account.",
    active_badge: "Disbursal Pending",
    p_account: "Disbursal Account Number",
    p_cif: "Customer CIF ID",
    p_lead: "Lead ID",
    p_card: "Loan Contract Status",
    p_card_ready: "Approved & Disbursing",
    p_notice: "Repayment Details",
    next_title: "Disbursal Process",
    next_app_title: "Install TDB Mobile App",
    next_app_desc: "Log in with your CIF ID to monitor your repayment schedule, outstanding balance, and amortization details.",
    btn_kit: "Download KFS PDF",
    btn_fund: "View Loan Details"
  },
  MN: {
    support_num: "Харилцах утас: +976 7011 1234",
    retail_suite: "ХУВИЙН ХАРИЛЦАГЧИЙН ЦОГЦОЛБОР",
    landing_title: "Дижитал Зээлийн Бүртгэл",
    landing_subtitle: "Хувийн зээлийг ХХБ-аас бүрэн цахимаар аваарай. Шуурхай зээлийн үнэлгээ, автомат баримт бичгийн хяналт, цалингийн дансандаа шууд шилжүүлэн авах боломж.",
    req_title: "Зээл хүсэхэд шаардагдах зүйлс",
    req_step1_title: "Зээлийн Тооцоолуур & OTP",
    req_step1_desc: "Хүссэн зээлийн хэмжээ, хугацаагаа тохируулж, утасны дугаараа OTP кодоор баталгаажуулна уу.",
    req_step2_title: "Баримт Бичиг Илгээх",
    req_step2_desc: "Иргэний үнэмлэхийн зураг болон сүүлийн саруудын цалингийн эсвэл дансны хуулга файл.",
    req_step3_title: "Ажлын Газар & Хувийн Мэдээлэл",
    req_step3_desc: "Ажилладаг байгууллага, ажилласан жил, цэвэр сарын орлого болон зээл төлөх дансны мэдээлэл.",
    req_step4_title: "Зээлийн Шийдвэр & Зөвшөөрөл",
    req_step4_desc: "Автомат зээлийн үнэлгээ, өр орлогын харьцааг хянаж, урьдчилан батлагдсан зээлийн лимитээ сонгоно уу.",
    time_info: "Шилжүүлэх хугацаа: ~5 минут",
    start_app: "Зээлийн Хүсэлт Эхлүүлэх",
    
    // Steppers Nav
    step1_nav_title: "Зээл Тооцох & OTP",
    step1_nav_desc: "Зээл тохируулах & утас баталгаажуулах",
    step2_nav_title: "Бичиг баримт",
    step2_nav_desc: "Иргэний үнэмлэх & орлого хуулах",
    step3_nav_title: "Ажлын Мэдээлэл",
    step3_nav_desc: "Ажлын газар & сарын цалин хянах",
    step4_nav_title: "Шийдвэр & Лимит",
    step4_nav_desc: "Зээлийн үнэлгээ & хязгаар тогтоох",
    step5_nav_title: "Царай танилт",
    step5_nav_desc: "Царайны биометр баталгаажуулах",
    step6_nav_title: "Хянах & Зурах",
    step6_nav_desc: "Нөхцөл хянаж, гэрээ зурах",
    
    // Sidebar scorecard
    risk_unit_title: "Аюулгүйн Эрсдэлийн Хяналт",
    metric_risk_lbl: "Эрсдэлийн түвшин",
    unassessed: "Үнэлээгүй",
    metric_stp_lbl: "STP Зөвшөөрөлт",
    metric_strength_lbl: "Биометрик танилтын баталгаа",
    
    // Form headers & controls
    retail_onboarding_lbl: "Дижитал Зээлийн Бүртгэл",
    ai_standby: "Хяналтын AI: Бэлэн",
    btn_back: "Буцах",
    btn_save: "Хадгалаад гарах",
    btn_continue: "Үргэлжлүүлэх",
    
    // Step 1 Form
    ill_step1_title: "Зээл Тооцоолуур",
    ill_step1_desc: "Зээлийн хэмжээ болон хугацааны гулсуурыг өөрчилж, сард төлөх хэмжээ, зээлийн хүү болон шимтгэлийг шууд хараарай.",
    form_step1_title: "Зээлийн Хэмжээ Тохируулах",
    form_step1_desc: "Хүсэж буй зээлийн дүнг сонгож, бүртгэлтэй утасны дугаараа оруулна уу.",
    loan_amt_slider_lbl: "Зээлийн хэмжээ",
    loan_tenure_slider_lbl: "Зээлийн хугацаа",
    emi_calc_header: "Эргэн Төлөлтийн Тооцоо",
    interest_rate_lbl: "Зээлийн хүү (Жилийн)",
    est_emi_lbl: "Сар бүр төлөх төлбөр",
    flat_fee_lbl: "Нэг удаагийн зээлийн шимтгэл",
    mobile_lbl: "Цалин авдаг утасны дугаар",
    send_otp: "OTP код илгээх",
    otp_lbl: "Баталгаажуулах OTP код",
    otp_timer_lbl: "Код дахин илгээх: 60с",
    resend_otp: "Дахин код авах",
    nrn_lbl: "Регистрийн дугаар",
    nrn_hint: "Формат: Кирилл 2 үсэг, араас нь 8 оронтой тоо (Жишээ нь: АА12345678)",
    
    // Step 2 Form
    ill_step2_title: "Баримт байршуулах",
    ill_step2_desc: "OCR систем иргэний үнэмлэхийг автоматаар уншина. Орлогын баримтыг хуулснаар зээлийн дээд хэмжээг тооцно.",
    form_step2_title: "Бичиг Баримт & Орлого Баталгаажуулалт",
    form_step2_desc: "Иргэний үнэмлэх болон сарын орлого батлах дансны хуулгаа оруулна уу.",
    doc_type_lbl: "Баримтын төрөл сонгох",
    national_id_lbl: "Иргэний үнэмлэх",
    passport_lbl: "Гадаад паспорт",
    permit_lbl: "Оршин суух зөвшөөрөл",
    upload_drag_lbl: "Баримт хуулах (Урд & Ард)",
    upload_hint_lbl: "PNG, JPG эсвэл PDF файл (Дээд тал нь 10MB)",
    upload_income_lbl: "Орлого батлах баримт / Дансны хуулга",
    upload_income_hint: "Цалингийн тодорхойлолт эсвэл дансны хуулга PDF/JPG оруулах",
    ai_chk_ocr: "OCR Уншилтын хяналт",
    ocr_text: "Баримтаас мэдээлэл унших систем",
    pending: "Хүлээгдэж буй",
    
    // Step 3 Form
    ill_step3_title: "Ажлын газар бүртгэх",
    ill_step3_desc: "OCR системээр уншигдсан мэдээллийг хянаад, одоогийн ажлын газар, албан тушаал, сарын цэвэр цалингаа оруулна уу.",
    form_step3_title: "Ажил эрхлэлт & Хувийн Мэдээлэл",
    form_step3_desc: "Ажлын газрын мэдээлэл болон зээл төлөх дансны тохиргоогоо оруулна уу.",
    banner_autofill_title: "Баримтаас уншигдсан мэдээлэл",
    banner_autofill_desc: "Мэдээллийг хянаж, үнэн зөв байдлыг баталгаажуулна уу.",
    fullname_lbl: "Овог нэр (Латин галигаар)",
    dob_lbl: "Төрсөн огноо",
    gender_lbl: "Хүйс",
    gender_male: "Эрэгтэй",
    gender_female: "Эмэгтэй",
    gender_other: "Бусад",
    nationality_lbl: "Иргэншил",
    address_lbl: "Оршин суугаа хаяг",
    locate: "Хаяг олох",
    email_lbl: "Имэйл хаяг",
    phone_lbl: "Баталгаажсан утасны дугаар",
    employment_lbl: "Ажил эрхлэлтийн байдал",
    emp_employed: "Ажилтан (Үндсэн)",
    emp_self: "Хувиараа бизнес эрхлэгч",
    emp_unemp: "Ажилгүй",
    emp_student: "Оюутан",
    emp_retired: "Тэтгэвэрт гарсан",
    employer_lbl: "Ажил олгогч байгууллага",
    occupation_lbl: "Албан тушаал / Мэргэжил",
    income_lbl: "Сарын цэвэр цалин (MNT)",
    salary_acct_lbl: "Зээл төлөх цалингийн данс",
    pref_lang_lbl: "Харилцах үндсэн хэл",
    lang_mn: "Монгол хэл",
    lang_en: "Англи хэл",
    pref_branch_lbl: "Зээлийн данс нээх салбар",
    branch_hq: "Төв салбар (Сүхбаатарын талбай)",
    branch_west: "Баруун дөрвөн замын салбар",
    branch_erd: "Орхон Эрдэнэт салбар",
    
    // Step 4 Form
    form_step4_title: "Зээл олгох үнэлгээ",
    form_step4_desc: "Таны хувийн мэдээлэл болон зээлийн түүхийг ХХБ-ны эрсдэлийн журмын дагуу шалгаж байна.",
    credit_score_title: "ХХБ Зээлийн үнэлгээний шалгалт",
    excellent_rating: "Маш сайн зээлийн түүхтэй",
    foir_check_title: "Өр, орлогын харьцааны үнэлгээ",
    foir_desc: "Сарын нийт зээлийн төлбөрийн харьцаа (Макс 50%)",
    net_salary_lbl: "Цэвэр сарын орлого:",
    existing_debts_lbl: "Өмнөх зээлийн төлбөр:",
    new_emi_lbl: "Шинэ зээлийн сарын EMI:",
    foir_cap_lbl: "Тооцсон Өр Орлогын харьцаа:",
    pass_cap_msg: "ХХБ эрсдэлийн шаардлага хангасан (< 50%)",
    active_obligations_title: "Бүртгэлтэй идэвхтэй зээлийн түүх",
    lender_col: "Зээлдэгч байгууллага",
    type_col: "Зээлийн төрөл",
    balance_col: "Үлдэгдэл дүн",
    emi_col: "Сарын төлбөр",
    preapproved_offer_title: "Урьдчилан батлагдсан зээл",
    approved_limit_msg: "Таны мэдээлэлд үндэслэн батлах боломжтой зээлийн дээд хэмжээ:",
    adjust_loan_amt: "Авах зээлийн дүнгээ тохируулна уу:",
    confirm_offer_btn: "Батлагдсан зээлийн дүн сонгох",
    
    // Step 5 Form
    form_step5_title: "Биометрик царай танилт",
    form_step5_desc: "Камераар авсан зургийг иргэний үнэмлэхийн зурагтай харьцуулж, зөрүүг шалгана.",
    activate_cam: "Камер идэвхжүүлэх",
    align_face: "Царайгаа хүрээн дотор оруулна уу",
    liveness_ok: "Царай амжилттай танигдлаа",
    capture: "Зураг авах",
    retake: "Дахин авах",
    ai_chk_bio: "Биометрик Шалгалтууд",
    face_match_text: "Иргэний үнэмлэхийн зурагтай харьцуулалт",
    dup_text: "Хэрэглэгчийн давхардал шалгах",
    aml_text: "Олон улсын хориг, AML шалгалт",
    
    // Step 6 Form
    ill_step6_title: "Гэрээ хийх шат",
    ill_step6_desc: "Гарын үсэг зурж зээлийн хүсэлт илгээхээс өмнө зээлийн нөхцөлийн мэдэгдлийг хянана уу.",
    form_step6_title: "Зээлийн үндсэн нөхцөл & Гарын үсэг",
    form_step6_desc: "Мэдээллээ хянаад, цахим гарын үсэг зурж зээлийн гэрээгээ баталгаажуулна уу.",
    sum_sec1: "1. ИРГЭНИЙ МЭДЭЭЛЭЛ & ОРЛОГО",
    sum_sec2: "2. ЗЭЭЛИЙН ҮНДСЭН НӨХЦӨЛ",
    sum_sec3: "3. ШИЛЖҮҮЛЭХ ДАНСНЫ МЭДЭЭЛЭЛ",
    edit: "Засах",
    sum_name: "Овог нэр:",
    sum_nrn: "Регистр / Төрсөн:",
    sum_address: "Хаяг:",
    sum_contact: "Холбоо барих:",
    sum_prod: "Зээлийн үндсэн дүн:",
    sum_card: "Зээлийн хугацаа:",
    sum_extra: "Сарын төлбөр (EMI):",
    sum_tax: "Ажлын газар:",
    sum_pref: "Зээл авах данс:",
    sum_delivery: "Холбогдох салбар:",
    kfs_headline: "Зээлийн бүтээгдэхүүний үндсэн нөхцөлийн хуудас (KFS)",
    kfs_th_amt: "Олгох зээлийн үндсэн дүн",
    kfs_th_apr: "Зээлийн жилийн бодит хүү (APR) %",
    kfs_th_rate: "Зээлийн хүү (Жилийн)",
    kfs_th_tenure: "Зээл төлөх нийт хугацаа",
    ill_step6_title: "Гэрээ хийх шат",
    ill_step6_desc: "Гарын үсэг зурж зээлийн хүсэлт илгээхээс өмнө зээлийн нөхцөлийн мэдэгдлийг хянана уу.",
    form_step6_title: "Зээлийн үндсэн нөхцөл & Гарын үсэг",
    form_step6_desc: "Мэдээллээ хянаад, цахим гарын үсэг зурж зээлийн гэрээгээ баталгаажуулна уу.",
    sum_sec1: "1. ИРГЭНИЙ МЭДЭЭЛЭЛ & ОРЛОГО",
    sum_sec2: "2. ЗЭЭЛИЙН ҮНДСЭН НӨХЦӨЛ",
    sum_sec3: "3. ШИЛЖҮҮЛЭХ ДАНСНЫ МЭДЭЭЛЭЛ",
    edit: "Засах",
    sum_name: "Овог нэр:",
    sum_nrn: "Регистр / Төрсөн:",
    sum_address: "Хаяг:",
    sum_contact: "Холбоо барих:",
    sum_prod: "Зээлийн үндсэн дүн:",
    sum_card: "Зээлийн хугацаа:",
    sum_extra: "Сарын төлбөр (EMI):",
    sum_tax: "Ажлын газар:",
    sum_pref: "Зээл авах данс:",
    sum_delivery: "Холбогдох салбар:",
    kfs_headline: "Зээлийн бүтээгдэхүүний үндсэн нөхцөлийн хуудас (KFS)",
    kfs_th_amt: "Олгох зээлийн үндсэн дүн",
    kfs_th_apr: "Зээлийн жилийн бодит хүү (APR) %",
    kfs_th_rate: "Зээлийн хүү (Жилийн)",
    kfs_th_tenure: "Зээл төлөх нийт хугацаа",
    kfs_th_charges: "Шимтгэл / Бусад зардал (+НӨАТ)",
    kfs_th_penal: "Зээл хэтэрсний алданги тооцох журам",
    kfs_th_cooling: "Гэрээнээс татгалзах хугацаа",
    kfs_th_grievance: "Гомдол, санал хүлээн авах суваг",
    kfs_flat_fee: "15,000 MNT зээл олголтын flat шимтгэл",
    kfs_penal_desc: "Хэтэрсэн хоног тутамд зээлийн дүнгийн 0.1% алданги",
    kfs_cooling_desc: "24 цаг (Энэ хугацаанд зээлээ буцаавал алданги, шимтгэлгүй)",
    kfs_grievance_desc: "ХХБ-ны Хэрэглэгчийн Төв (grievance@tdbm.mn)",
    disclosures_title: "Зээлийн журмын зөвшөөрөл ба тунхаглал",
    disclosures_desc: "Цахим гарын үсэг зурснаар зээлийн мэдээллийн сангаас мэдээлэл авах, цалингийн орлогоос зээлээ шууд суутгуулах нөхцөлийг зөвшөөрч байгаа болно.",
    signature_lbl: "Цахим гарын үсэг",
    terms_accept_lbl: "Би зээлийн гэрээ болон бүтээгдэхүүний нөхцөлийг зөвшөөрч байна.",
    sec_status_title: "Дотоод хяналт ба аюулгүйн байдлын төлөв",
    cleared: "ЗӨВШӨӨРӨГДӨН",
    fatca_status: "AML Шалгалт",
    pep_status: "PEP Шалгалт",
    passed: "Тэнцсэн",
    
    // Step 7 Success
    success_title: "Зээл Батлагдаж Олгогдлоо",
    success_desc: "Таны цахим зээлийн хүсэлт амжилттай шийдэгдлээ. Зээлийн мөнгийг таны цалингийн данс руу шилжүүлж байна.",
    active_badge: "Шилжүүлэг хийгдэж байна",
    p_account: "Зээл олгох дансны дугаар",
    p_cif: "Харилцагчийн CIF код",
    p_lead: "Лид дугаар",
    p_card: "Зээлийн гэрээний төлөв",
    p_card_ready: "Батлагдсан / Дансанд орсон",
    p_notice: "Эргэн төлөх нөхцөл",
    next_title: "Зээлийн эргэн төлөлт хянах",
    next_app_title: "TDB Mongolia аппликейшн татах",
    next_app_desc: "Бүртгэлтэй CIF кодоор нэвтэрч зээлийн эргэн төлөлтийн хуваарь, үлдэгдэл тооцоо болон дахин зээл авах мэдээллээ хянаарай.",
    btn_kit: "Зээлийн KFS файл татах",
    btn_fund: "Зээлийн дэлгэрэнгүй харах"
  }
};

// Step Header Metadata
const stepMeta = {
  1: {
    EN: { title: "Loan Calculator & OTP", desc: "Select your desired loan parameters and verify your salary mobile number." },
    MN: { title: "Зээл тооцох & OTP баталгаажуулалт", desc: "Авах зээлийн дүн болон хугацаагаа сонгон, утасны дугаараа баталгаажуулна уу." }
  },
  2: {
    EN: { title: "Document Upload", desc: "Upload your National ID card and salary income statements for OCR verification check." },
    MN: { title: "Бичиг баримт байршуулах", desc: "Иргэний үнэмлэх болон орлогын тодорхойлолт дансны хуулга файлаа оруулаарай." }
  },
  3: {
    EN: { title: "Employment Profile", desc: "Verify profile info extracted by OCR and provide employer registry details." },
    MN: { title: "Ажлын газар & Хувийн мэдээлэл хянах", desc: "Баримтаас уншигдсан мэдээллээ хянаж, ажлын газрын мэдээллээ бөглөнө үү." }
  },
  4: {
    EN: { title: "Decisioning & Limit", desc: "Review credit scoring checks, debt metrics, and select your approved limit." },
    MN: { title: "Зээлийн шийдвэр & Зээлийн лимит", desc: "Зээлийн үнэлгээ, сарын өр орлогын харьцааг хянаж, батлагдсан зээлийн дүнгээ тохируулна." }
  },
  5: {
    EN: { title: "Identity Liveness", desc: "Perform biometric face checks to confirm your identity matches the civil registry." },
    MN: { title: "Биометрик царай баталгаажуулалт", desc: "Биометрик царайны танилтаар өөрийн зургаа үнэмлэхийн зурагтай тулгаж баталгаажуулна." }
  },
  6: {
    EN: { title: "Review & e-Sign", desc: "Review the Key Facts Statement (KFS) loan schedule and e-sign the contract." },
    MN: { title: "Гэрээ хянах & Цахим гарын үсэг", desc: "Зээлийн бүтээгдэхүүний үндсэн нөхцөл KFS-ийг хянаж, гарын үсэг зурж баталгаажуулна." }
  },
  7: {
    EN: { title: "Loan Disbursed Successfully!", desc: "Retail banking setup is online. Funds are being disbursed to your account." },
    MN: { title: "Зээл амжилттай олгогдлоо!", desc: "Танд баяр хүргэе. Батлагдсан зээлийн мөнгө таны данс руу шилжиж байна." }
  }
};

// Initializer
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  loadSavedState();
  bindGlobalEvents();
  setupOtpFields();
  setupDocumentUpload();
  setupWebcamSimulation();
  setupProductSelections();
  setupSignaturePad();
  setupVirtualKeypad();
  updateSidebarMetrics();
  
  // Initialize default language translation rendering
  translateUI(appState.currentLang);
  
  // Decide whether to show landing page (Step 0) or layout
  if (appState.currentStep === 0) {
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('onboarding-layout').classList.add('hidden');
  } else {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('onboarding-layout').classList.remove('hidden');
    setupStepUI(appState.currentStep);
  }
}

// Custom Toast Notification System
function showNotification(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✓';
  if (type === 'warning') icon = '⚠️';
  if (type === 'error') icon = '🚨';
  
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-body">${message}</div>
    <button type="button" class="toast-close">&times;</button>
  `;
  
  container.appendChild(toast);
  
  // Slide in after minor delay
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Close handler
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.onclick = () => {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 350);
  };
  
  // Auto close after 4s
  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.remove('show');
      toast.classList.add('hide');
      setTimeout(() => {
        toast.remove();
      }, 350);
    }
  }, 4000);
}

// LocalStorage caching
function saveStateToLocalStorage() {
  localStorage.setItem('td_mongolia_onboarding_state_v3', JSON.stringify(appState));
  showSaveIndicator();
}

function loadSavedState() {
  const cached = localStorage.getItem('td_mongolia_onboarding_state_v3');
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      
      // If the saved state is on the success page (Step 7), clear it so the user can start a fresh onboarding.
      if (parsed.currentStep === 7) {
        localStorage.removeItem('td_mongolia_onboarding_state_v3');
        appState.currentLang = parsed.currentLang || 'EN';
        return;
      }
      
      appState = parsed;
      appState.currentStep = 0; // Force current step to 0 on refresh to go to the home page
      
      document.getElementById('mobile-number').value = appState.data.mobileNumber;
      document.getElementById('nrn-number').value = maskNrn(appState.data.nrnNumber);
      
      if (appState.data.mobileNumber && appState.data.otpVerified) {
        setMobileVerified();
      }
      
      populatePersonalFormFields();
      
      // Radio selections restoration
      const docRadios = document.getElementsByName('doc-type');
      docRadios.forEach(radio => {
        if (radio.value === appState.data.docType) {
          radio.checked = true;
          document.querySelectorAll('.doc-type-card').forEach(c => c.classList.remove('active'));
          radio.closest('.doc-type-card').classList.add('active');
        }
      });
      
      const currRadios = document.getElementsByName('currency');
      currRadios.forEach(radio => {
        if (radio.value === appState.data.accountCurrency) {
          radio.checked = true;
          document.querySelectorAll('.currency-chip').forEach(c => c.classList.remove('active'));
          radio.closest('.currency-chip').classList.add('active');
        }
      });
      
    } catch(e) {
      console.warn("Could not parse saved state, starting fresh.", e);
    }
  }
}

function showSaveIndicator() {
  const saveStatus = document.getElementById('save-status');
  if (saveStatus) {
    saveStatus.innerHTML = 'Saving progress...';
    setTimeout(() => {
      saveStatus.innerHTML = 'Auto-saved to Cloud &bull; Live';
    }, 1000);
  }
}

// Translation rendering engine
function translateUI(lang) {
  appState.currentLang = lang;
  
  // Set lang switch active buttons
  document.querySelectorAll('#lang-switcher span, #lang-switcher-dash span').forEach(span => {
    span.classList.remove('active');
    if (span.getAttribute('data-lang') === lang) {
      span.classList.add('active');
    }
  });
  
  // Translate nodes with data-translate
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  
  // Update inputs placeholder tags dynamically
  const mobileInput = document.getElementById('mobile-number');
  const nrnInput = document.getElementById('nrn-number');
  const emailInput = document.getElementById('p-email');
  const employerInput = document.getElementById('p-employer');
  const occInput = document.getElementById('p-occupation');
  const nickInput = document.getElementById('pref-nickname');
  
  if (lang === 'MN') {
    if (mobileInput) mobileInput.placeholder = "Утасны дугаар (жишээ: 99******)";
    if (nrnInput) nrnInput.placeholder = "жишээ нь: УУ95120612";
    if (emailInput) emailInput.placeholder = "имэйл@хаяг.мн";
    if (employerInput) employerInput.placeholder = "Компанийн нэр";
    if (occInput) occInput.placeholder = "Мэргэжил / Албан тушаал";
    if (nickInput) nickInput.placeholder = "жишээ нь: Цалингийн хэтэвч";
  } else {
    if (mobileInput) mobileInput.placeholder = "Mobile Number (e.g. 99123456)";
    if (nrnInput) nrnInput.placeholder = "e.g. УУ95120612";
    if (emailInput) emailInput.placeholder = "email@address.mn";
    if (employerInput) employerInput.placeholder = "Company Name";
    if (occInput) occInput.placeholder = "Job Title";
    if (nickInput) nickInput.placeholder = "e.g. Salary Wallet";
  }
  
  // Refresh active step title/descriptions if inside dashboard
  if (appState.currentStep >= 1) {
    const step = appState.currentStep;
    const meta = stepMeta[step];
    if (meta && meta[lang]) {
      document.getElementById('step-main-title').innerText = meta[lang].title;
      document.getElementById('step-main-desc').innerText = meta[lang].desc;
    }
    
    // Refresh Sidebar Stepper list titles and descriptions
    document.querySelectorAll('.sidebar .step-item').forEach(item => {
      const stepIdx = parseInt(item.getAttribute('data-step'));
      const stepM = stepMeta[stepIdx];
      if (stepM && stepM[lang]) {
        item.querySelector('.step-title').innerText = stepM[lang].title;
        item.querySelector('.step-desc').innerText = stepM[lang].desc;
      }
    });
  }
}

function calculateEMI(amount, tenure, ratePercent = 18.5) {
  const P = amount;
  const r = (ratePercent / 12) / 100;
  const n = tenure;
  
  if (r === 0) return Math.round(P / n);
  
  const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return Math.round(emi);
}

function updateLoanCalculator() {
  const amountSlider = document.getElementById('loan-amount-slider');
  const tenureSlider = document.getElementById('loan-tenure-slider');
  
  if (!amountSlider || !tenureSlider) return;
  
  const amount = parseInt(amountSlider.value);
  const tenure = parseInt(tenureSlider.value);
  
  appState.data.loanAmount = amount;
  appState.data.loanTenure = tenure;
  
  const emi = calculateEMI(amount, tenure);
  appState.data.calculatedEmi = emi;
  
  const amountDisplay = document.getElementById('loan-amount-display');
  const tenureDisplay = document.getElementById('loan-tenure-display');
  const emiDisplay = document.getElementById('emi-amount-val');
  
  if (amountDisplay) amountDisplay.innerText = amount.toLocaleString() + " MNT";
  if (tenureDisplay) tenureDisplay.innerText = tenure + " " + (appState.currentLang === 'MN' ? "Сар" : "Months");
  if (emiDisplay) emiDisplay.innerText = emi.toLocaleString() + " MNT";
  
  // Update Step 4 sliders max limits and current value based on salary
  const finalAmountSlider = document.getElementById('final-loan-amount-slider');
  if (finalAmountSlider) {
    const income = appState.data.monthlyIncome || 2500000;
    const maxOffer = Math.min(15000000, Math.max(5000000, Math.round(income * 4.8 / 500000) * 500000));
    finalAmountSlider.max = maxOffer;
    const maxLabel = document.getElementById('final-slider-max-lbl');
    if (maxLabel) maxLabel.innerText = maxOffer.toLocaleString() + " MNT";
    const maxDisplay = document.getElementById('approved-max-display');
    if (maxDisplay) maxDisplay.innerText = maxOffer.toLocaleString() + " MNT";
    
    if (parseInt(finalAmountSlider.value) > maxOffer) {
      finalAmountSlider.value = maxOffer;
    }
  }
}

function updateFinalLoanCalculator() {
  const amountSlider = document.getElementById('final-loan-amount-slider');
  const tenureSlider = document.getElementById('final-loan-tenure-slider');
  
  if (!amountSlider || !tenureSlider) return;
  
  const amount = parseInt(amountSlider.value);
  const tenure = parseInt(tenureSlider.value);
  
  appState.data.selectedAmount = amount;
  appState.data.selectedTenure = tenure;
  
  const emi = calculateEMI(amount, tenure);
  
  const amountDisplay = document.getElementById('final-loan-amount-display');
  const tenureDisplay = document.getElementById('final-loan-tenure-display');
  const emiDisplay = document.getElementById('final-emi-amount-val');
  
  if (amountDisplay) amountDisplay.innerText = amount.toLocaleString() + " MNT";
  if (tenureDisplay) tenureDisplay.innerText = tenure + " " + (appState.currentLang === 'MN' ? "Сар" : "Months");
  if (emiDisplay) emiDisplay.innerText = emi.toLocaleString() + " MNT";
}

// Global Event Handlers
function bindGlobalEvents() {
  // Lang switch hooks
  document.querySelectorAll('#lang-switcher span, #lang-switcher-dash span').forEach(span => {
    span.addEventListener('click', () => {
      const targetLang = span.getAttribute('data-lang');
      translateUI(targetLang);
      saveStateToLocalStorage();
    });
  });

  // Landing Start Button
  document.getElementById('btn-start-onboarding').addEventListener('click', () => {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('onboarding-layout').classList.remove('hidden');
    setupStepUI(1);
  });

  // Navigation footer controls
  document.getElementById('btn-next').addEventListener('click', handleNextStep);
  document.getElementById('btn-prev').addEventListener('click', handlePrevStep);
  document.getElementById('btn-save').addEventListener('click', () => {
    saveStateToLocalStorage();
    const alertMsg = appState.currentLang === 'MN' ? 
      "Бүртгэлийн явц амжилттай хадгалагдлаа. Та дараа дахин үргэлжлүүлж болно!" : 
      "Onboarding progress has been saved. You can safely close this window and return later!";
    showNotification(alertMsg, 'success');
  });
  
  // Stepper items clickable only if unlocked
  document.querySelectorAll('.sidebar .step-item').forEach(item => {
    item.addEventListener('click', () => {
      const step = parseInt(item.getAttribute('data-step'));
      if (step <= appState.maxStepCompleted) {
        setupStepUI(step);
      }
    });
  });
  
  // NRN input validation on keystroke with masking
  const nrnInput = document.getElementById('nrn-number');
  nrnInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase();
    appState.data.nrnNumber = e.target.value;
    validateNrn(appState.data.nrnNumber);
  });
  
  nrnInput.addEventListener('focus', () => {
    nrnInput.value = appState.data.nrnNumber || '';
  });
  
  nrnInput.addEventListener('blur', () => {
    if (validateNrn(appState.data.nrnNumber)) {
      nrnInput.value = maskNrn(appState.data.nrnNumber);
    }
  });
  
  // Document type radios
  document.getElementsByName('doc-type').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.data.docType = e.target.value;
      document.querySelectorAll('.doc-type-card').forEach(c => c.classList.remove('active'));
      e.target.closest('.doc-type-card').classList.add('active');
      saveStateToLocalStorage();
    });
  });
  
  // Currency selector chips
  document.getElementsByName('currency').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.data.accountCurrency = e.target.value;
      document.querySelectorAll('.currency-chip').forEach(c => c.classList.remove('active'));
      e.target.closest('.currency-chip').classList.add('active');
      saveStateToLocalStorage();
    });
  });
  
  // Step 4 dynamic employer hide/show
  const empSelect = document.getElementById('p-employment');
  empSelect.addEventListener('change', (e) => {
    appState.data.employmentStatus = e.target.value;
    const employerGrp = document.getElementById('group-employer');
    if (e.target.value === 'Unemployed' || e.target.value === 'Retired' || e.target.value === 'Student') {
      employerGrp.classList.add('hidden');
    } else {
      employerGrp.classList.remove('hidden');
    }
    saveStateToLocalStorage();
  });

  // Step 4 Address Autofill trigger
  document.getElementById('btn-suggest-address').addEventListener('click', triggerAddressAutofill);

  // Step 4 live cardholder name binding
  document.getElementById('p-fullname').addEventListener('input', (e) => {
    appState.data.fullName = e.target.value;
    const nameLbl = document.getElementById('card-holder-name');
    if (nameLbl) nameLbl.innerText = e.target.value ? e.target.value.toUpperCase() : "YOUR NAME";
  });
  
  // Step 5 delivery toggling
  const deliveryHome = document.getElementById('delivery-home-option');
  const deliveryBranch = document.getElementById('delivery-branch-option');
  
  deliveryHome.addEventListener('click', () => {
    selectDeliveryMethod('home');
  });
  deliveryBranch.addEventListener('click', () => {
    selectDeliveryMethod('branch');
  });
  
  // Step 1 & Step 4 Loan slider listeners
  const amtSlider = document.getElementById('loan-amount-slider');
  const tenSlider = document.getElementById('loan-tenure-slider');
  if (amtSlider) amtSlider.addEventListener('input', updateLoanCalculator);
  if (tenSlider) tenSlider.addEventListener('input', updateLoanCalculator);
  
  const finalAmtSlider = document.getElementById('final-loan-amount-slider');
  const finalTenSlider = document.getElementById('final-loan-tenure-slider');
  if (finalAmtSlider) finalAmtSlider.addEventListener('input', updateFinalLoanCalculator);
  if (finalTenSlider) finalTenSlider.addEventListener('input', updateFinalLoanCalculator);
}

// Navigation Controls
function setupStepUI(step) {
  if (step < 1 || step > 7) return;
  
  appState.currentStep = step;
  if (step > appState.maxStepCompleted && step < 7) {
    appState.maxStepCompleted = step;
  }
  
  // Toggle Active Panels
  document.querySelectorAll('.step-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const currentPanel = document.getElementById(`step-panel-${step}`);
  if (currentPanel) currentPanel.classList.add('active');
  
  // Toggle Stepper Navigation styles (only 1 to 6 exist in stepper list)
  document.querySelectorAll('.sidebar .step-item').forEach(item => {
    const itemStep = parseInt(item.getAttribute('data-step'));
    item.classList.remove('active', 'completed', 'locked');
    
    if (itemStep === step) {
      item.classList.add('active');
    } else if (itemStep < step) {
      item.classList.add('completed');
    } else if (itemStep <= appState.maxStepCompleted) {
      // Unlocked
    } else {
      item.classList.add('locked');
    }
  });
  
  // Set Main Title and Header Details from Step Metadata
  const lang = appState.currentLang;
  const meta = stepMeta[step];
  if (meta && meta[lang]) {
    document.getElementById('step-main-title').innerText = meta[lang].title;
    document.getElementById('step-main-desc').innerText = meta[lang].desc;
  }
  
  // Progress calculations
  let percent = 0;
  if (step < 7) {
    percent = Math.round((step / 6) * 100);
    document.getElementById('main-progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-percent').innerText = lang === 'MN' ? `Алхам ${step} / 6 (${percent}%)` : `Step ${step} of 6 (${percent}%)`;
    document.getElementById('step-percentage-numeric').innerText = `${percent}%`;
  }
  
  updateAiVerificationBadge(step);
  
  // Toggle footer visibility
  const footer = document.getElementById('footer-actions');
  const sidebar = document.querySelector('.sidebar');
  if (step === 7) {
    footer.classList.add('hidden');
    if (sidebar) sidebar.classList.add('hidden');
    
    const leadIdEl = document.getElementById('success-lead-id');
    if (leadIdEl) {
      leadIdEl.innerText = appState.data.leadId || '--';
    }
    
    triggerSuccessAnimations();
  } else {
    footer.classList.remove('hidden');
    if (sidebar) sidebar.classList.remove('hidden');
  }
  
  // Toggle Back button active state
  const prevBtn = document.getElementById('btn-prev');
  if (step === 1) {
    prevBtn.setAttribute('disabled', 'true');
  } else {
    prevBtn.removeAttribute('disabled');
  }
  
  // Setup logic specific to Review Step (Step 6)
  if (step === 6) {
    prepareReviewSummary();
  }
  
  updateSidebarMetrics();
  saveStateToLocalStorage();
}

function updateAiVerificationBadge(step) {
  const badge = document.getElementById('ai-status-badge');
  const txt = document.getElementById('ai-badge-text');
  if (!badge || !txt) return;
  
  const isMN = appState.currentLang === 'MN';
  
  if (step === 1) {
    if (appState.data.mobileNumber && appState.data.otpVerified) {
      txt.innerText = isMN ? "Хяналтын AI: ✓ Гар утас баталгаажсан" : "AI Verification: ✓ Phone Verified";
      badge.style.background = "rgba(16, 185, 129, 0.1)";
      badge.style.borderColor = "var(--td-mint)";
    } else {
      txt.innerText = isMN ? "Хяналтын AI: Дугаар шалгаж байна" : "AI Verification: Verifying number";
      badge.style.background = "rgba(255, 199, 44, 0.1)";
      badge.style.borderColor = "var(--td-accent-gold)";
    }
  } else if (step === 2) {
    if (appState.data.docsUploaded.length > 0) {
      txt.innerText = isMN ? "Хяналтын AI: ✓ Баримт уншиж байна" : "AI Verification: ✓ Document OCR Reading";
      badge.style.background = "rgba(16, 185, 129, 0.1)";
      badge.style.borderColor = "var(--td-mint)";
    } else {
      txt.innerText = isMN ? "Хяналтын AI: Баримт илгээхийг хүлээж байна" : "AI Verification: Awaiting documents";
      badge.style.background = "#f1f5f9";
      badge.style.borderColor = "#cbd5e1";
    }
  } else if (step === 3) {
    txt.innerText = isMN ? "Хяналтын AI: Автомат уншилт идэвхтэй" : "AI Auto-population: Online";
    badge.style.background = "rgba(16, 185, 129, 0.1)";
    badge.style.borderColor = "var(--td-mint)";
  } else if (step === 4) {
    txt.innerText = isMN ? "Хяналтын AI: Санал болгох багц идэвхжсэн" : "AI Recommendations: Custom Match";
    badge.style.background = "rgba(16, 185, 129, 0.1)";
    badge.style.borderColor = "var(--td-mint)";
  } else if (step === 5) {
    if (appState.data.selfieCaptured) {
      txt.innerText = isMN ? "Хяналтын AI: ✓ Биометр амжилттай таарлаа" : "AI Verification: ✓ Biometric Face Match Clear";
      badge.style.background = "rgba(16, 185, 129, 0.1)";
      badge.style.borderColor = "var(--td-mint)";
    } else {
      txt.innerText = isMN ? "Хяналтын AI: Камер холбохыг хүлээж байна" : "AI Verification: Awaiting video KYCs";
      badge.style.background = "rgba(255, 199, 44, 0.1)";
      badge.style.borderColor = "var(--td-accent-gold)";
    }
  } else {
    txt.innerText = isMN ? "ХХБ Аюулгүйн хамгаалалттай холболт" : "TDB Secure Connected";
    badge.style.background = "#f1f5f9";
    badge.style.borderColor = "#cbd5e1";
  }
}

function handleNextStep() {
  if (validateCurrentStep()) {
    if (appState.currentStep === 6) {
      appState.data.leadId = "20669";
      setupStepUI(7);
      triggerBackgroundCrmLead();
    } else {
      setupStepUI(appState.currentStep + 1);
    }
  }
}

async function triggerBackgroundCrmLead() {
  let apiBase = "https://presales.businessbywire.com/restapigb8";
  
  // Use local dev proxy if running on localhost / 127.0.0.1 or file context on desktop
  const isLocal = window.location.hostname === "localhost" || 
                  window.location.hostname === "127.0.0.1" || 
                  (window.location.protocol === "file:" && 
                   !navigator.userAgent.includes("Android") && 
                   !navigator.userAgent.includes("iPhone") && 
                   !navigator.userAgent.includes("iPad"));
  
  if (isLocal) {
    apiBase = "http://localhost:3000";
  }
  
  try {
    // 1. Authenticate to get token
    const authRes = await fetch(`${apiBase}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: "james@crmnext.com",
        password: "Chief@admin2025"
      })
    });
    
    if (!authRes.ok) throw new Error("Auth request failed");
    const authJson = await authRes.json();
    const token = authJson.access_token;
    
    // Prepare lead creation body from journey data
    const d = appState.data;
    const fullName = d.fullName || "Jain";
    const nameParts = fullName.trim().split(/\s+/);
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : fullName;
    
    // Age calculations from dob
    let age = 25;
    if (d.dob) {
      const birthDate = new Date(d.dob);
      const today = new Date();
      age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    }
    
    // Birthdate format DD/MM/YYYY
    let formattedDob = "11/09/2002";
    if (d.dob) {
      const parts = d.dob.split('-');
      if (parts.length === 3) {
        formattedDob = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    }
    
    // Selected product mapping
    let productSelected = "Retail Personal Loan";
    
    const leadBody = [
      {
        "ItemId": "0",
        "ItemType": "Lead",
        "ProcessMode": "Create",
        "OutputFieldList": [
          "CustomObjectId",
          "ItemId"
        ],
        "ObjectData": {
          "LayoutID": 102525,
          "ProcessID": 102088,
          "LastName" : lastName,
          "Rating" : "Hot",
          "Product": productSelected,
          "LeadOwnerName": "Mr. James May",
          "MobilePhone" : Number(d.mobileNumber) || 9893993537,
          "StatusCode" :  "New",
          "Lea_ex1_22" : Number(age) || 25,
          "Lea_ex1_11" : formattedDob,
          "Email" : d.email || "adityajai@businessnext.com",
          "Lea_ex8_6" : d.gender || "Male",
          "LeadSource" : "Digital"
        }
      }
    ];
    
    // 2. Create lead using the token
    await fetch(`${apiBase}/crmWebApi/saveObject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(leadBody)
    });
  } catch (err) {
    console.warn("Background CRM Lead creation warning:", err);
  }
}


function handlePrevStep() {
  setupStepUI(appState.currentStep - 1);
}

// Step-specific Validation Rules
function validateCurrentStep() {
  const step = appState.currentStep;
  const isMN = appState.currentLang === 'MN';
  
  if (step === 1) {
    // Check mobile
    if (!appState.data.mobileNumber || !appState.data.otpVerified) {
      showNotification(isMN ? "Та утасны дугаараа оруулж, нэг удаагийн OTP кодоор баталгаажуулна уу." : "Please enter your mobile number and verify it with the OTP code sent.", 'warning');
      return false;
    }
    // Check NRN format
    if (!validateNrn(appState.data.nrnNumber)) {
      showNotification(isMN ? "Регистрийн дугаараа зөв форматтай оруулна уу (жишээ: АА12345678)." : "Please enter a valid Mongolian National Registration Number (e.g. АА12345678).", 'warning');
      return false;
    }
  }
  
  if (step === 2) {
    // Check document uploaded
    if (appState.data.docsUploaded.length === 0) {
      showNotification(isMN ? "Та үргэлжлүүлэхийн тулд дор хаяж нэг иргэний баримт (урд, ард тал) хуулна уу." : "Please upload at least one identification document (Front & Back).", 'warning');
      return false;
    }
  }
  
  if (step === 3) {
    // Validate inputs populated from OCR
    const name = document.getElementById('p-fullname').value.trim();
    const dob = document.getElementById('p-dob').value;
    const gender = document.getElementById('p-gender').value;
    const addr = document.getElementById('p-address').value.trim();
    const email = document.getElementById('p-email').value.trim();
    const employer = document.getElementById('p-employer').value.trim();
    const occupation = document.getElementById('p-occupation').value.trim();
    const salary = document.getElementById('p-income').value;
    const tenure = document.getElementById('p-work-tenure').value;
    const salaryAcct = document.getElementById('p-salary-acct').value.trim();
    
    if (!name || !dob || !gender || !addr || !email || !employer || !occupation || !salary || !tenure || !salaryAcct) {
      showNotification(isMN ? "Ажлын газар, хаяг, имэйл болон бусад мэдээллээ бүрэн бөглөнө үү." : "Please fill out all employment and demographic fields. Repayment account and net income cannot be empty.", 'warning');
      return false;
    }
    
    if (!email.includes('@') || email.length < 5) {
      showNotification(isMN ? "Зөв имэйл хаяг оруулна уу." : "Please enter a valid email address.", 'warning');
      return false;
    }
    
    appState.data.fullName = name;
    appState.data.dob = dob;
    appState.data.gender = gender;
    appState.data.address = addr;
    appState.data.email = email;
    appState.data.employerName = employer;
    appState.data.occupation = occupation;
    appState.data.monthlyIncome = parseFloat(salary) || 2500000;
    appState.data.workTenure = tenure;
    appState.data.salaryAccount = salaryAcct;
    appState.data.prefLanguage = document.getElementById('p-lang').value;
    appState.data.prefBranch = document.getElementById('p-branch').value;
  }
  
  if (step === 4) {
    const finalAmountSlider = document.getElementById('final-loan-amount-slider');
    const finalTenureSlider = document.getElementById('final-loan-tenure-slider');
    if (finalAmountSlider && finalTenureSlider) {
      appState.data.selectedAmount = parseInt(finalAmountSlider.value);
      appState.data.selectedTenure = parseInt(finalTenureSlider.value);
      
      const emi = calculateEMI(appState.data.selectedAmount, appState.data.selectedTenure);
      const salary = parseFloat(appState.data.monthlyIncome) || 2500000;
      appState.data.foirRatio = Math.round((emi / salary) * 100);
    }
  }
  
  if (step === 5) {
    // Check selfie capture
    if (!appState.data.selfieCaptured) {
      showNotification(isMN ? "Царайны биометрик баталгаажуулалтаа хийж дуусгана уу." : "Please complete the Biometric Selfie Liveness check.", 'warning');
      return false;
    }
  }
  
  if (step === 6) {
    // Terms validation
    const terms = document.getElementById('terms-accept').checked;
    
    if (!terms) {
      showNotification(isMN ? "Зээлийн бүтээгдэхүүний үндсэн нөхцөл болон гэрээг зөвшөөрч, чагтална уу." : "Please accept the Key Facts Statement and loan agreement terms to submit.", 'warning');
      return false;
    }
    
    appState.data.termsAccepted = terms;
  }
  
  return true;
}

// STEP 1: Mobile & OTP logic
function setupOtpFields() {
  const btnSend = document.getElementById('btn-send-otp');
  const otpGroup = document.getElementById('otp-group');
  
  btnSend.addEventListener('click', () => {
    const num = document.getElementById('mobile-number').value.trim();
    const isMN = appState.currentLang === 'MN';
    
    if (num.length !== 8 || isNaN(num)) {
      showNotification(isMN ? "8 оронтой Монгол утасны дугаар оруулна уу." : "Please enter a valid 8-digit Mongolian mobile number (e.g. 99123456).", 'warning');
      return;
    }
    
    appState.data.mobileNumber = num;
    document.getElementById('p-phone').value = `+976 ${num}`;
    
    otpGroup.classList.remove('hidden');
    btnSend.setAttribute('disabled', 'true');
    btnSend.innerText = isMN ? 'Илгээсэн ✓' : 'Sent ✓';
    
    startOtpCountdown();
    
    setTimeout(() => {
      document.querySelector('.otp-cell[data-index="0"]').focus();
    }, 100);
  });
}

function startOtpCountdown() {
  let sec = 60;
  const timerLbl = document.getElementById('otp-timer');
  const resendBtn = document.getElementById('btn-resend-otp');
  const isMN = appState.currentLang === 'MN';
  
  resendBtn.classList.add('hidden');
  timerLbl.classList.remove('hidden');
  timerLbl.innerText = isMN ? `Дахин код илгээх: ${sec}с` : `Resend code in ${sec}s`;
  
  const timer = setInterval(() => {
    sec--;
    if (sec <= 0) {
      clearInterval(timer);
      timerLbl.classList.add('hidden');
      resendBtn.classList.remove('hidden');
    } else {
      timerLbl.innerText = isMN ? `Дахин код илгээх: ${sec}с` : `Resend code in ${sec}s`;
    }
  }, 1000);
  
  resendBtn.addEventListener('click', () => {
    resendBtn.classList.add('hidden');
    timerLbl.classList.remove('hidden');
    sec = 60;
    startOtpCountdown();
  });
  
  const cells = document.querySelectorAll('.otp-cell');
  cells.forEach(cell => {
    cell.addEventListener('input', (e) => {
      const val = cell.value;
      const idx = parseInt(cell.getAttribute('data-index'));
      
      // Clean input: only allow digits
      const digit = val.replace(/\D/g, '');
      cell.value = digit ? digit.slice(-1) : '';
      
      if (cell.value) {
        if (idx < 5) {
          cells[idx + 1].focus();
        } else {
          cell.blur();
          verifyOtpCode();
        }
      }
    });
    
    cell.addEventListener('keydown', (e) => {
      const idx = parseInt(cell.getAttribute('data-index'));
      if (e.key === 'Backspace') {
        if (cell.value === '') {
          if (idx > 0) {
            cells[idx - 1].focus();
            cells[idx - 1].value = '';
          }
        } else {
          cell.value = '';
        }
        e.preventDefault();
      }
    });
  });
}

function verifyOtpCode() {
  const cells = document.querySelectorAll('.otp-cell');
  let code = '';
  cells.forEach(c => code += c.value);
  
  if (code.length === 6) {
    cells.forEach(c => c.style.borderColor = 'var(--td-mint)');
    appState.data.otpVerified = true;
    setMobileVerified();
    updateSidebarMetrics();
    updateAiVerificationBadge(appState.currentStep);
  }
}

function setMobileVerified() {
  const otpGroup = document.getElementById('otp-group');
  const isMN = appState.currentLang === 'MN';
  otpGroup.innerHTML = `
    <div class="alert-success" style="background: rgba(16, 185, 129, 0.08); border: 1px solid var(--td-mint); padding: 10px; border-radius: 8px; font-size: 11px; font-weight: 600; color: var(--td-green); display: flex; align-items: center; gap: 8px;">
      <span>✓</span> ${isMN ? "Гар утасны дугаар амжилттай баталгаажлаа." : "Mobile Number Verification Successful"}
    </div>
  `;
}

function maskNrn(val) {
  if (!val) return '';
  if (val.length <= 4) return val;
  const maskedPart = '*'.repeat(val.length - 4);
  const visiblePart = val.substring(val.length - 4);
  return maskedPart + visiblePart;
}

function validateNrn(val) {
  const icon = document.getElementById('nrn-validation-icon');
  const cyrillicRegex = /^[А-ЯЁӨҮ]{2}\d{8}$/;
  const latinRegex = /^[A-Z]{2}\d{8}$/;
  
  const isValid = cyrillicRegex.test(val) || latinRegex.test(val);
  
  if (val.length === 0) {
    icon.className = 'validation-status-icon';
    return false;
  }
  
  if (isValid) {
    icon.className = 'validation-status-icon valid';
    appState.data.nrnNumber = val;
    return true;
  } else {
    icon.className = 'validation-status-icon invalid';
    return false;
  }
}

// STEP 2: Upload Documents Simulation & OCR Populate
function setupDocumentUpload() {
  const uploadArea = document.getElementById('doc-upload-area');
  const uploader = document.getElementById('file-uploader');
  if (uploader && uploadArea) {
    uploader.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.style.borderColor = 'var(--td-green)';
    });
    
    uploader.addEventListener('dragleave', () => {
      uploadArea.style.borderColor = 'var(--border-color)';
    });
    
    uploader.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.style.borderColor = 'var(--border-color)';
      if (e.dataTransfer.files.length > 0) {
        handleUploadedFiles(e.dataTransfer.files);
      }
    });
    
    uploader.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleUploadedFiles(e.target.files);
      }
    });
  }

  // Income Statement uploader
  const incomeArea = document.getElementById('income-upload-area');
  const incomeUploader = document.getElementById('income-uploader');
  if (incomeUploader && incomeArea) {
    incomeUploader.addEventListener('dragover', (e) => {
      e.preventDefault();
      incomeArea.style.borderColor = 'var(--td-green)';
    });
    
    incomeUploader.addEventListener('dragleave', () => {
      incomeArea.style.borderColor = 'var(--border-color)';
    });
    
    incomeUploader.addEventListener('drop', (e) => {
      e.preventDefault();
      incomeArea.style.borderColor = 'var(--border-color)';
      if (e.dataTransfer.files.length > 0) {
        handleIncomeFiles(e.dataTransfer.files);
      }
    });
    
    incomeUploader.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleIncomeFiles(e.target.files);
      }
    });
  }
}

function handleIncomeFiles(files) {
  const list = document.getElementById('income-files-list');
  if (!list) return;
  list.classList.remove('hidden');
  
  for (let file of files) {
    const row = document.createElement('div');
    row.className = 'uploaded-file-row';
    row.innerHTML = `
      <div class="file-row-details">
        <span class="file-icon">📊</span>
        <div class="file-name-size">
          <span class="file-name">${file.name}</span>
          <span class="file-size">${(file.size / (1024 * 1024)).toFixed(2)} MB</span>
        </div>
      </div>
      <button class="file-remove-btn">&times;</button>
    `;
    list.appendChild(row);
    
    row.querySelector('.file-remove-btn').addEventListener('click', () => {
      row.remove();
      if (list.children.length === 0) {
        list.classList.add('hidden');
      }
    });
  }
  saveStateToLocalStorage();
}

function handleUploadedFiles(files) {
  const list = document.getElementById('files-list');
  list.classList.remove('hidden');
  
  for (let file of files) {
    appState.data.docsUploaded.push(file.name);
    
    const row = document.createElement('div');
    row.className = 'uploaded-file-row';
    row.innerHTML = `
      <div class="file-row-details">
        <span class="file-icon">📄</span>
        <div class="file-name-size">
          <span class="file-name">${file.name}</span>
          <span class="file-size">${(file.size / (1024 * 1024)).toFixed(2)} MB</span>
        </div>
      </div>
      <button class="file-remove-btn">&times;</button>
    `;
    list.appendChild(row);
    
    row.querySelector('.file-remove-btn').addEventListener('click', () => {
      row.remove();
      appState.data.docsUploaded = appState.data.docsUploaded.filter(n => n !== file.name);
      if (appState.data.docsUploaded.length === 0) {
        list.classList.add('hidden');
        resetOcrCheck();
      }
      saveStateToLocalStorage();
    });
  }
  
  simulateOcrExtraction();
  saveStateToLocalStorage();
}

function simulateOcrExtraction() {
  const ocrCheck = document.getElementById('ai-check-ocr');
  const isMN = appState.currentLang === 'MN';
  
  ocrCheck.className = 'checking';
  ocrCheck.querySelector('.check-status').innerText = isMN ? 'Уншиж байна...' : 'Extracting...';
  updateAiVerificationBadge(appState.currentStep);
  
  setTimeout(() => {
    ocrCheck.className = 'passed';
    ocrCheck.querySelector('.check-status').innerText = isMN ? '✓ Амжилттай' : '✓ Success';
    
    appState.data.fullName = ocrMockData.fullName;
    appState.data.dob = ocrMockData.dob;
    appState.data.gender = ocrMockData.gender;
    appState.data.nationality = ocrMockData.nationality;
    appState.data.address = ocrMockData.address;
    appState.data.employerName = ocrMockData.employerName;
    appState.data.occupation = ocrMockData.occupation;
    
    populatePersonalFormFields();
    updateAiVerificationBadge(appState.currentStep);
  }, 2200);
}

function resetOcrCheck() {
  const ocrCheck = document.getElementById('ai-check-ocr');
  const isMN = appState.currentLang === 'MN';
  ocrCheck.className = 'pending';
  ocrCheck.querySelector('.check-status').innerText = isMN ? 'Хүлээгдэж буй' : 'Pending';
}

function populatePersonalFormFields() {
  const nameInput = document.getElementById('p-fullname');
  if (nameInput) {
    nameInput.value = appState.data.fullName;
    document.getElementById('p-dob').value = appState.data.dob;
    document.getElementById('p-gender').value = appState.data.gender;
    document.getElementById('p-nationality').value = appState.data.nationality;
    document.getElementById('p-address').value = appState.data.address;
    document.getElementById('p-employer').value = appState.data.employerName;
    document.getElementById('p-occupation').value = appState.data.occupation;
    const nameLbl = document.getElementById('card-holder-name');
    if (nameLbl) nameLbl.innerText = appState.data.fullName ? appState.data.fullName.toUpperCase() : "YOUR NAME";
    
    document.querySelectorAll('.ai-extracted').forEach(input => {
      input.classList.add('ai-extracted');
    });
  }
}

// STEP 3: Webcam Selfie simulation
function setupWebcamSimulation() {
  const btnActivate = document.getElementById('btn-activate-camera');
  const btnCapture = document.getElementById('btn-capture-selfie');
  const btnRetake = document.getElementById('btn-retake-selfie');
  
  const video = document.getElementById('webcam');
  const canvas = document.getElementById('selfie-canvas');
  const placeholder = document.getElementById('camera-placeholder');
  const guide = document.getElementById('liveness-guide');
  const successOverlay = document.getElementById('capture-success');
  
  let animationFrameId = null;
  let simulatedFacePoints = [];
  
  btnActivate.addEventListener('click', () => {
    placeholder.classList.add('hidden');
    video.classList.remove('hidden');
    guide.classList.remove('hidden');
    btnCapture.classList.remove('hidden');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawLivenessGuide();
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } })
        .then(stream => {
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.log("Webcam denied/unavailable, playing high-fidelity simulation tracker.", err);
          simulateFaceTracking();
        });
    } else {
      simulateFaceTracking();
    }
  });
  
  function drawLivenessGuide() {
    const ctx = canvas.getContext('2d');
    
    function draw() {
      if (appState.data.selfieCaptured) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const rx = 65;
      const ry = 85;
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
      
      ctx.strokeStyle = 'var(--td-mint)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, 2 * Math.PI);
      ctx.stroke();
      
      if (simulatedFacePoints.length > 0) {
        ctx.fillStyle = '#00b074';
        simulatedFacePoints.forEach(pt => {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2, 0, 2 * Math.PI);
          ctx.fill();
        });
      }
      
      animationFrameId = requestAnimationFrame(draw);
    }
    
    draw();
  }
  
  function simulateFaceTracking() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const rx = 65;
    const ry = 85;
    const guideTxt = document.getElementById('liveness-prompt-text');
    const isMN = appState.currentLang === 'MN';
    
    setTimeout(() => {
      guideTxt.innerText = isMN ? "Толгойгоо зүүн тийш эргүүлнэ үү" : "Please turn head left";
      generateSimulatedPoints(cx - 15, cy);
    }, 1500);
    
    setTimeout(() => {
      guideTxt.innerText = isMN ? "Нүдээ 2 удаа цавчина уу" : "Please blink twice";
      generateSimulatedPoints(cx, cy);
    }, 3200);
    
    setTimeout(() => {
      guideTxt.innerText = isMN ? "Зураг авахад инээмсэглээрэй" : "Smile for capture";
      generateSimulatedPoints(cx, cy + 5);
    }, 4800);
    
    setTimeout(() => {
      guideTxt.innerText = isMN ? "Зураг авч байна..." : "Capturing...";
      btnCapture.click();
    }, 6000);
    
    function generateSimulatedPoints(targetX, targetY) {
      simulatedFacePoints = [];
      const numPoints = 16;
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        simulatedFacePoints.push({
          x: targetX + Math.cos(angle) * (rx - 5 + Math.sin(angle * 4) * 3),
          y: targetY + Math.sin(angle) * (ry - 5)
        });
      }
    }
    
    generateSimulatedPoints(cx, cy);
  }
  
  btnCapture.addEventListener('click', () => {
    cancelAnimationFrame(animationFrameId);
    appState.data.selfieCaptured = true;
    
    if (video.srcObject) {
      video.srcObject.getTracks().forEach(track => track.stop());
    }
    
    video.classList.add('hidden');
    canvas.classList.add('hidden');
    guide.classList.add('hidden');
    btnCapture.classList.add('hidden');
    
    successOverlay.classList.remove('hidden');
    btnRetake.classList.remove('hidden');
    
    const faceCheck = document.getElementById('ai-check-face');
    const isMN = appState.currentLang === 'MN';
    faceCheck.className = 'checking';
    faceCheck.querySelector('.check-status').innerText = isMN ? 'Шалгаж байна...' : 'Matching...';
    
    setTimeout(() => {
      faceCheck.className = 'passed';
      faceCheck.querySelector('.check-status').innerText = isMN ? '✓ 98.4% Таарлаа' : '✓ 98.4% Match';
      triggerAmlCheck();
    }, 1500);
    
    saveStateToLocalStorage();
  });
  
  btnRetake.addEventListener('click', () => {
    appState.data.selfieCaptured = false;
    successOverlay.classList.add('hidden');
    btnRetake.classList.add('hidden');
    placeholder.classList.remove('hidden');
    canvas.classList.remove('hidden');
    
    const faceCheck = document.getElementById('ai-check-face');
    const isMN = appState.currentLang === 'MN';
    faceCheck.className = 'pending';
    faceCheck.querySelector('.check-status').innerText = isMN ? 'Хүлээгдэж буй' : 'Pending';
  });
}

function triggerAmlCheck() {
  if (!appState.data.selfieCaptured || appState.data.docsUploaded.length === 0) return;
  
  const dupCheck = document.getElementById('ai-check-dup');
  const amlCheck = document.getElementById('ai-check-aml');
  const isMN = appState.currentLang === 'MN';
  
  dupCheck.className = 'checking';
  dupCheck.querySelector('.check-status').innerText = isMN ? 'Давхардал шалгаж байна...' : 'Searching...';
  
  setTimeout(() => {
    dupCheck.className = 'passed';
    dupCheck.querySelector('.check-status').innerText = isMN ? '✓ Давхардалгүй' : '✓ Clear';
    
    amlCheck.className = 'checking';
    amlCheck.querySelector('.check-status').innerText = isMN ? 'Ариун цэвэр шалгаж байна...' : 'Screening...';
    
    setTimeout(() => {
      amlCheck.className = 'passed';
      amlCheck.querySelector('.check-status').innerText = isMN ? '✓ Зөвшөөрөгдсөн' : '✓ Cleared';
      
      updateSidebarMetrics();
      updateAiVerificationBadge(appState.currentStep);
    }, 1200);
  }, 1000);
}

// Side panel metric scorecard updates
function updateSidebarMetrics() {
  const riskLbl = document.getElementById('metric-risk');
  const stpLbl = document.getElementById('metric-stp');
  const pBar = document.getElementById('metric-progress-bar');
  const isMN = appState.currentLang === 'MN';
  
  let strength = 0;
  
  if (appState.data.mobileNumber && appState.data.otpVerified) {
    strength += 25;
  }
  if (appState.data.docsUploaded.length > 0 && appState.data.fullName) {
    strength += 25;
  }
  if (appState.data.selfieCaptured) {
    strength += 25;
    riskLbl.innerText = isMN ? 'Бага эрсдэлтэй (Оноо: 12)' : 'Low Risk (Score: 12)';
    riskLbl.className = 'metric-val status-green';
  }
  if (appState.data.otpVerified && appState.data.selfieCaptured && appState.data.docsUploaded.length > 0) {
    strength += 25;
    stpLbl.innerText = isMN ? 'Батлагдсан (94.2% STP)' : 'Approved (94.2% STP)';
  }
  
  if (pBar) pBar.style.width = `${strength}%`;
}

// Address auto suggestion
function triggerAddressAutofill() {
  const addrInput = document.getElementById('p-address');
  addrInput.classList.add('ai-extracted');
  addrInput.value = "Khoroo 8, Olympic Street 19, Sukhbaatar District, Ulaanbaatar, Mongolia";
  saveStateToLocalStorage();
}

// STEP 5: Product selections & recommendation triggers
function setupProductSelections() {
  const cards = document.querySelectorAll('.product-card');
  const cardVis = document.getElementById('visualizer-card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => {
        c.classList.remove('selected');
        c.querySelector('.card-checkbox').innerText = '';
      });
      
      card.classList.add('selected');
      card.querySelector('.card-checkbox').innerText = '✓';
      
      const type = card.getAttribute('data-product');
      appState.data.selectedAccount = type;
      
      if (cardVis) {
        if (type === 'savings_acct') {
          cardVis.className = 'debit-card-visualizer platinum-theme';
        } else if (type === 'salary_acct') {
          cardVis.className = 'debit-card-visualizer gold-theme';
        } else {
          cardVis.className = 'debit-card-visualizer classic-theme';
        }
      }
      
      saveStateToLocalStorage();
    });
  });
  
  const toggles = document.querySelectorAll('.btn-toggle');
  toggles.forEach(t => {
    t.addEventListener('click', () => {
      const parent = t.parentElement;
      parent.querySelectorAll('.btn-toggle').forEach(btn => btn.classList.remove('active'));
      t.classList.add('active');
      
      const key = t.getAttribute('data-target');
      const val = t.getAttribute('data-val');
      if (key === 'card_type') {
        appState.data.cardFormFactor = val;
        if (cardVis) {
          if (val === 'none') {
            cardVis.style.opacity = '0.25';
          } else {
            cardVis.style.opacity = '1';
          }
        }
      }
      saveStateToLocalStorage();
    });
  });
  
  document.getElementById('btn-apply-rec').addEventListener('click', () => {
    const premiumCard = document.querySelector('.product-card[data-product="savings_acct"]');
    if (premiumCard) premiumCard.click();
    
    const physicalToggle = document.querySelector('.btn-toggle[data-val="both"]');
    if (physicalToggle) physicalToggle.click();
    
    const offerCC = document.getElementById('offer-credit-card');
    if (offerCC) offerCC.checked = true;
    
    const alertMsg = appState.currentLang === 'MN' ? 
      "Урамшуулалт багц амжилттай идэвхжлээ!" : 
      "Premium Savings Account and Visa Platinum debit card selections pre-applied!";
    showNotification(alertMsg, 'success');
  });
}

// Card Delivery pickups
function selectDeliveryMethod(method) {
  appState.data.deliveryMethod = method;
  const isMN = appState.currentLang === 'MN';
  
  const deliveryHome = document.getElementById('delivery-home-option');
  const deliveryBranch = document.getElementById('delivery-branch-option');
  
  const bDetails = document.getElementById('delivery-branch-details');
  const hDetails = document.getElementById('delivery-home-details');
  
  if (method === 'branch') {
    deliveryBranch.classList.add('active');
    deliveryHome.classList.remove('active');
    bDetails.classList.remove('hidden');
    hDetails.classList.add('hidden');
    
    const branchSelect = document.getElementById('p-branch');
    const branchName = branchSelect.options[branchSelect.selectedIndex].text;
    document.getElementById('selected-branch-display').innerText = branchName;
  } else {
    deliveryHome.classList.add('active');
    deliveryBranch.classList.remove('active');
    hDetails.classList.remove('hidden');
    bDetails.classList.add('hidden');
    
    const addr = document.getElementById('p-address').value;
    document.getElementById('selected-address-display').innerText = addr ? addr : (isMN ? "Алхам 4 дээр хаягаа бүртгүүлнэ үү." : "Please configure address fields in Step 4.");
  }
  
  saveStateToLocalStorage();
}

// Card security virtual keypad PINs
function setupVirtualKeypad() {
  const btnShow = document.getElementById('btn-show-keyboard');
  if (!btnShow) return;
  const keypad = document.getElementById('virtual-keypad');
  const dots = document.querySelectorAll('.pin-dot');
  
  btnShow.addEventListener('click', () => {
    keypad.classList.toggle('hidden');
  });
  
  let pin = '';
  
  const keys = document.querySelectorAll('.keypad-btn');
  keys.forEach(k => {
    k.addEventListener('click', () => {
      const text = k.innerText;
      
      // Allow for MN/EN confirm text
      if (text === 'Clear' || text === 'Арилгах') {
        pin = '';
        updatePinDots();
      } else if (text === 'Confirm' || text === 'Хадгалах') {
        keypad.classList.add('hidden');
        appState.data.securityPin = pin;
        saveStateToLocalStorage();
      } else {
        if (pin.length < 4) {
          pin += text;
          updatePinDots();
        }
      }
    });
  });
  
  function updatePinDots() {
    dots.forEach((dot, idx) => {
      if (idx < pin.length) {
        dot.value = '•';
        dot.classList.add('filled');
      } else {
        dot.value = '';
        dot.classList.remove('filled');
      }
    });
  }
}

// STEP 6: Review Summary Population
function prepareReviewSummary() {
  const d = appState.data;
  const isMN = appState.currentLang === 'MN';
  
  const branchSelect = document.getElementById('p-branch');
  const branchName = branchSelect ? branchSelect.options[branchSelect.selectedIndex].text : "Sukhbaatar Square HQ";
  
  // Demographics
  document.getElementById('sum-name').innerText = d.fullName || (isMN ? "Хоосон" : "Not Entered");
  document.getElementById('sum-nrn').innerText = `${maskNrn(d.nrnNumber) || "N/A"} / ${d.dob || "N/A"}`;
  document.getElementById('sum-contact').innerText = `+976 ${d.mobileNumber} | ${d.email}`;
  document.getElementById('sum-address').innerText = d.address || (isMN ? "Хаяг бүртгүүлээгүй" : "Not Configured");
  document.getElementById('sum-tax').innerText = d.employerName || (isMN ? "Хоосон" : "Not Entered");
  document.getElementById('sum-salary').innerText = d.monthlyIncome ? d.monthlyIncome.toLocaleString() + " MNT" : "--";
  
  // Loan terms
  const emi = calculateEMI(d.selectedAmount, d.selectedTenure);
  document.getElementById('sum-product').innerText = d.selectedAmount ? d.selectedAmount.toLocaleString() + " MNT" : "--";
  document.getElementById('sum-card').innerText = d.selectedTenure ? d.selectedTenure + (isMN ? " Сар" : " Months") : "--";
  document.getElementById('sum-extra').innerText = emi ? emi.toLocaleString() + " MNT" : "--";
  
  // Servicing
  document.getElementById('sum-pref').innerText = d.salaryAccount || "--";
  document.getElementById('sum-delivery').innerText = branchName;
  
  // Fill Key Facts Statement (KFS) values
  const kfsPrincipal = document.getElementById('kfs-val-principal');
  const kfsTenure = document.getElementById('kfs-val-tenure');
  if (kfsPrincipal) kfsPrincipal.innerText = d.selectedAmount ? d.selectedAmount.toLocaleString() + " MNT" : "--";
  if (kfsTenure) kfsTenure.innerText = d.selectedTenure ? d.selectedTenure + (isMN ? " Сар" : " Months") : "--";

  // Pre-fill Step 7 labels
  document.getElementById('success-name').innerText = d.fullName;
  document.getElementById('success-account-num').innerText = d.salaryAccount || "--";
  document.getElementById('success-cif').innerText = `CIF-${Math.floor(1000000 + Math.random() * 9000000)}`;
  document.getElementById('success-delivery-notice').innerText = isMN ? 
    "Сар бүрийн эргэн төлөлт цалингийн данснаас автоматаар суутгагдана." : 
    "Monthly installments are configured to auto-debit from your salary repayment account.";
}

function generateMockAccountNum(currency) {
  const prefix = currency === 'MNT' ? '5108' : currency === 'USD' ? '5109' : '5110';
  return `${prefix} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`;
}

// STEP 6: Drawing signature canvas
function setupSignaturePad() {
  const canvas = document.getElementById('signature-pad');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const btnClear = document.getElementById('btn-clear-sig');
  if (!btnClear) return;
  
  let drawing = false;
  
  function getMousePos(canvasDom, touchOrMouseEvent) {
    const rect = canvasDom.getBoundingClientRect();
    const scaleX = canvasDom.width / rect.width;
    const scaleY = canvasDom.height / rect.height;
    
    let clientX = touchOrMouseEvent.clientX;
    let clientY = touchOrMouseEvent.clientY;
    
    if (touchOrMouseEvent.touches && touchOrMouseEvent.touches.length > 0) {
      clientX = touchOrMouseEvent.touches[0].clientX;
      clientY = touchOrMouseEvent.touches[0].clientY;
    }
    
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }
  
  ctx.strokeStyle = "#005a00";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  
  canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    const pos = getMousePos(canvas, e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  });
  
  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    e.preventDefault();
    const pos = getMousePos(canvas, e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    appState.data.signatureDrawn = true;
  });
  
  window.addEventListener('mouseup', () => {
    drawing = false;
  });
  
  canvas.addEventListener('touchstart', (e) => {
    drawing = true;
    const pos = getMousePos(canvas, e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  }, { passive: true });
  
  canvas.addEventListener('touchmove', (e) => {
    if (!drawing) return;
    const pos = getMousePos(canvas, e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    appState.data.signatureDrawn = true;
  }, { passive: true });
  
  canvas.addEventListener('touchend', () => {
    drawing = false;
  });
  
  btnClear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    appState.data.signatureDrawn = false;
  });
}

// STEP 7: Success screen Confetti Canvas loop
function triggerSuccessAnimations() {
  // Confetti animation disabled to keep the success page simple
  const canvas = document.getElementById('confetti-canvas');
  if (canvas) {
    canvas.style.display = 'none';
  }
  
  document.getElementById('btn-download-kit').onclick = () => {
    const isMN = appState.currentLang === 'MN';
    showNotification(isMN ? "Харилцагчийн бүртгэлийн хуудас татаж байна..." : "Downloading retail welcome kit configurations...", 'info');
  };
  document.getElementById('btn-fund-account').onclick = () => {
    const isMN = appState.currentLang === 'MN';
    showNotification(isMN ? "Карт холбох/цэнэглэх систем рүү шилжиж байна..." : "Redirecting to retail card load systems...", 'info');
  };
}
