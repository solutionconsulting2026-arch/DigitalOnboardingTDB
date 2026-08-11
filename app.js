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
    
    // Step 4
    fullName: '',
    dob: '',
    gender: '',
    nationality: 'Mongolian',
    address: '',
    email: '',
    employmentStatus: 'Employed',
    employerName: '',
    occupation: '',
    monthlyIncome: '1m_3m',
    prefLanguage: 'MN',
    prefBranch: 'HQ',
    
    // Step 5
    selectedAccount: 'savings_acct',
    cardFormFactor: 'virtual', // virtual, both, none
    digitalServices: {
      mobile: true,
      internet: true,
      sms: true
    },
    offerCreditCard: false,
    offerDeposit: false,
    accountCurrency: 'MNT',
    accountNickname: '',
    commPreferences: {
      sms: true,
      email: true,
      push: false
    },
    deliveryMethod: 'branch', // branch, home
    securityPin: '',
    
    // Step 6
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
    landing_title: "Digital Retail Account Opening",
    landing_subtitle: "Open a premium, fully digital retail checking or savings account for your day-to-day banking. Fast online verification, automated document review, and secure biometrics.",
    req_title: "What you will need to get started",
    req_step1_title: "Mobile & Registry Info",
    req_step1_desc: "Active mobile phone for OTP authentication and National Registration Number (Civil ID).",
    req_step2_title: "Identity Document",
    req_step2_desc: "Mongolian National ID Card (Primary), Passport, or Residence Permit for foreign nationals.",
    req_step3_title: "Demographics & Income",
    req_step3_desc: "Employment details, employer name, occupation status, and monthly income levels.",
    req_step4_title: "Security PIN & Signature",
    req_step4_desc: "Establish security codes, card delivery instructions, and draw signature for e-signing.",
    time_info: "Time to complete: ~5 minutes",
    start_app: "Start Account Application",
    
    // Steppers Nav
    step1_nav_title: "Registration & OTP",
    step1_nav_desc: "Verify credentials & NRN",
    step2_nav_title: "Document Upload",
    step2_nav_desc: "Choose document & scan",
    step3_nav_title: "Personal Information",
    step3_nav_desc: "OCR review & profile",
    step4_nav_title: "Product Selection",
    step4_nav_desc: "Choose accounts & preferences",
    step5_nav_title: "Biometric Liveness",
    step5_nav_desc: "Face match & checks",
    step6_nav_title: "Review & e-Sign",
    step6_nav_desc: "Sign agreements & submit",
    
    // Sidebar scorecard
    risk_unit_title: "AI Risk Scoring Unit",
    metric_risk_lbl: "Fraud Risk Level",
    unassessed: "Unassessed",
    metric_stp_lbl: "STP Check",
    metric_strength_lbl: "Biometric Cleared Strength",
    
    // Form headers & controls
    retail_onboarding_lbl: "Retail Digital Onboarding",
    ai_standby: "AI Verification: Standby",
    btn_back: "Back",
    btn_save: "Save & Continue Later",
    btn_continue: "Continue",
    
    // Step 1 Form
    ill_step1_title: "Mobile Verification",
    ill_step1_desc: "Confirm identity credentials and link your personal mobile number to activate digital banking nodes securely.",
    form_step1_title: "Mobile Registration",
    form_step1_desc: "Provide your mobile number and National Registry Number to establish eligibility.",
    mobile_lbl: "Mobile Number",
    send_otp: "Send OTP",
    otp_lbl: "OTP Verification Code",
    otp_timer_lbl: "Resend code in 60s",
    resend_otp: "Resend Code",
    nrn_lbl: "National Registry Number (Civil ID)",
    nrn_hint: "Format: 2 Cyrillic characters followed by 8 digits (e.g., АА12345678)",
    
    // Step 2 Form
    ill_step2_title: "OCR Scanning",
    ill_step2_desc: "Our OCR algorithm automatically reads and parses Mongolian Cyrillic characters to pre-fill identity entries.",
    form_step2_title: "Document Verification",
    form_step2_desc: "Upload valid document credentials for automated OCR metadata extraction.",
    doc_type_lbl: "Document Type",
    national_id_lbl: "National ID",
    passport_lbl: "Passport",
    permit_lbl: "Permit",
    upload_drag_lbl: "Upload front & back files",
    upload_hint_lbl: "Drag & drop PNG/PDF up to 10MB",
    ai_chk_ocr: "OCR Extraction Check",
    ocr_text: "OCR Identity Data Extraction",
    pending: "Pending",
    
    // Step 3 Form
    ill_step3_title: "Biometrics & AML",
    ill_step3_desc: "Live facial detection compares selfie biometrics with document photo, running cross-checks against duplicate databases.",
    form_step3_title: "Selfie Liveness Capture",
    form_step3_desc: "Provide biometric facial confirmation to run fraud and AML screenings.",
    activate_cam: "Activate Camera Feed",
    align_face: "Align face in frame",
    liveness_ok: "Liveness Verified",
    capture: "Capture",
    retake: "Retake",
    ai_chk_bio: "Biometric Checklists",
    face_match_text: "Biometric Face Matching (ID vs Selfie)",
    dup_text: "Database Duplicate Clearance",
    aml_text: "AML Database Watchlist Check",
    
    // Step 4 Form
    ill_step4_title: "Demographics Registry",
    ill_step4_desc: "Review the database metadata parsed by OCR. Fill out contact fields to finalize demographics profile.",
    form_step4_title: "Personal Information",
    form_step4_desc: "Verify extracted details and supply demographic and occupation settings.",
    banner_autofill_title: "Auto-extracted from Documents",
    banner_autofill_desc: "Double check OCR data. Fields highlighted in gold are extracted.",
    fullname_lbl: "Full Name (Latin)",
    dob_lbl: "Date of Birth",
    gender_lbl: "Gender",
    gender_male: "Male",
    gender_female: "Female",
    gender_other: "Other",
    nationality_lbl: "Nationality",
    address_lbl: "Residential Address",
    locate: "Locate",
    email_lbl: "Email Address",
    phone_lbl: "Verified Phone Number",
    employment_lbl: "Employment Status",
    emp_employed: "Employed (Full-time)",
    emp_self: "Self-Employed / Owner",
    emp_unemp: "Unemployed",
    emp_student: "Student",
    emp_retired: "Retired",
    employer_lbl: "Employer Name",
    occupation_lbl: "Occupation",
    income_lbl: "Monthly Income (MNT)",
    inc_low: "Under 1,500,000 ₮",
    inc_mid: "1,500,000 ₮ - 3,500,000 ₮",
    inc_high: "3,500,000 ₮ - 7,000,000 ₮",
    inc_highest: "Over 7,000,000 ₮",
    pref_lang_lbl: "Language Preference",
    lang_mn: "Mongolian",
    lang_en: "English",
    pref_branch_lbl: "Home Branch",
    branch_hq: "Sukhbaatar Square HQ",
    branch_west: "West Crossroad Branch",
    branch_erd: "Orkhon Erdenet Branch",
    
    // Step 5 Form
    form_step5_title: "Product Selection",
    form_step5_desc: "Choose checking/savings packets and link virtual/physical debit cards.",
    rec_tag: "✦ PREFERRED VALUE COMBO",
    rec_bundle_title: "Premium Savings Bundle matched",
    rec_bundle_desc: "12.5% annual rate + physical card + mobile banking.",
    apply_pack: "Apply Pack",
    sect_accounts: "1. Everyday Account Products",
    premium_savings_title: "Premium Savings Account",
    premium_savings_desc: "Earn yield paid monthly. Zero setup fees.",
    premium_savings_rate: "12.5% interest rate",
    salary_acct_title: "Salary Account",
    salary_acct_desc: "Receive payroll directly, zero commission internal routing.",
    sect_card_ops: "2. Debit Card & Digital Services",
    card_format_title: "Card Form Factor",
    card_format_desc: "Pick physical, virtual, or both formats",
    toggle_virt: "Virtual",
    toggle_both: "Both",
    toggle_none: "None",
    digital_add_title: "Digital Banking Add-ons",
    digital_add_desc: "Select free e-services to activate",
    srv_app: "App",
    srv_net: "Net",
    sect_currencies: "3. Currencies & Security preferences",
    account_curr_lbl: "Primary Account Currency",
    account_nick_lbl: "Account Description / Name (Optional)",
    card_deliv_lbl: "Card Delivery Choice",
    deliv_branch_title: "Collect at Preferred Branch",
    deliv_branch_desc: "Card is waiting for checkout at HQ square",
    deliv_home_title: "Courier Home Dispatch",
    deliv_home_desc: "Ships to residential address details (1-3 days)",
    pickup_loc_title: "Pickup location:",
    courier_addr_title: "Courier Address:",
    card_pin_lbl: "Debit Card Security PIN",
    set_pin: "Set Virtual PIN",
    clear: "Clear",
    confirm: "Confirm",
    offers_title: "Pre-Qualified Offers",
    cc_offer_title: "TD Credit Card Eligibility",
    cc_limit: "Approved limit:",
    promo_offer_title: "Exclusive Offer",
    promo_offer_desc: "Based on your credit bureau profiles, you are pre-approved for an optional gold credit card line. Interest rate: 1.4% monthly. Zero setup fees.",
    
    // Step 6 Form
    ill_step6_title: "Application Check",
    ill_step6_desc: "Take a moment to review all summarized parameters before e-signing and executing.",
    form_step6_title: "Review & Digital Sign",
    form_step6_desc: "Ensure details are accurate and draw signature to submit registration.",
    sum_sec1: "1. DEMOGRAPHICS & PROFILE",
    sum_sec2: "2. SELECTED PRODUCTS",
    sum_sec3: "3. SETTINGS & DISPATCH",
    edit: "Edit",
    sum_name: "Name:",
    sum_nrn: "NRN / DOB:",
    sum_address: "Address:",
    sum_contact: "Contact:",
    sum_prod: "Deposit:",
    sum_card: "Debit Card:",
    sum_extra: "Add-ons:",
    sum_tax: "Tax Country:",
    sum_pref: "Currency / Hub:",
    sum_delivery: "Card Handover:",
    disclosures_title: "Retail Banking Disclosures",
    disclosures_desc: "By signing, you warrant that all information submitted is correct. You authorize TDB to open accounts and agree to Electronic Signature Acts.",
    signature_lbl: "Draw Signature",
    terms_accept_lbl: "I execute this onboarding packet.",
    sec_status_title: "Compliance Declarations Risk Status",
    cleared: "CLEARED",
    fatca_status: "FATCA Status",
    pep_status: "PEP Screening",
    passed: "Passed",
    
    // Step 7 Success
    success_title: "Account Activated Successfully",
    success_desc: "Onboarding complete. Your retail account details are ready below.",
    active_badge: "Account Active",
    p_account: "IBAN / Account Number",
    p_cif: "Customer CIF ID",
    p_lead: "Lead ID",
    p_card: "Virtual Card Node",
    p_card_ready: "Ready",
    p_notice: "Delivery Notice",
    next_title: "Next Steps",
    next_app_title: "Install TDB Mobile",
    next_app_desc: "Log in with your phone and secure CIF ID code.",
    btn_kit: "Welcome Kit",
    btn_fund: "Fund Account"
  },
  MN: {
    support_num: "Харилцах утас: +976 7011 1234",
    retail_suite: "ХУВИЙН ХАРИЛЦАГЧИЙН ЦОГЦОЛБОР",
    landing_title: "Дижитал Данс Нээх Бүртгэл",
    landing_subtitle: "Харилцах болон хадгаламжийн дансыг бүрэн дижиталаар нээнэ үү. Шуурхай цахим баталгаажуулалт, автомат баримт бичгийн хяналт, аюулгүй биометрик танилт.",
    req_title: "Данс нээхэд шаардагдах зүйлс",
    req_step1_title: "Гар утас & Регистр",
    req_step1_desc: "Нэг удаагийн OTP код хүлээн авах утасны дугаар болон Иргэний бүртгэлийн дугаар (Регистр).",
    req_step2_title: "Иргэний Баримт Бичиг",
    req_step2_desc: "Монгол Улсын Иргэний үнэмлэх (Үндсэн), Гадаад паспорт, эсвэл Монгол улсад оршин суух зөвшөөрлийн хуудас.",
    req_step3_title: "Нийгмийн байдал & Орлого",
    req_step3_desc: "Хөдөлмөр эрхлэлтийн байдал, ажил олгогч байгууллагын нэр, албан тушаал, сарын орлогын хэмжээ.",
    req_step4_title: "ПИН код & Гарын үсэг",
    req_step4_desc: "Картын нууц код тохируулах, хүргэлтийн хаяг оруулах, гэрээнд цахим гарын үсэг зурах.",
    time_info: "Дуусах хугацаа: ~5 минут",
    start_app: "Бүртгэл Эхлүүлэх",
    
    // Steppers Nav
    step1_nav_title: "Дугаар & OTP код",
    step1_nav_desc: "Нэвтрэх эрх & Регистр",
    step2_nav_title: "Бичиг Баримт Илгээх",
    step2_nav_desc: "Баримтаа сонгож, хуулах",
    step3_nav_title: "Хувийн Мэдээлэл",
    step3_nav_desc: "OCR уншуулах & Баталгаажуулах",
    step4_nav_title: "Бүтээгдэхүүн Сонгох",
    step4_nav_desc: "Картын төрөл & Нууц код тохируулах",
    step5_nav_title: "Биометрик царай танилт",
    step5_nav_desc: "Царайны биометр & AML шалгалт",
    step6_nav_title: "Хянах & Гарын үсэг",
    step6_nav_desc: "Гэрээ батлах & Илгээх",
    
    // Sidebar scorecard
    risk_unit_title: "Аюулгүйн Эрсдэлийн Хяналт",
    metric_risk_lbl: "Эрсдэлийн түвшин",
    unassessed: "Үнэлээгүй",
    metric_stp_lbl: "STP Зөвшөөрөлт",
    metric_strength_lbl: "Биометрик танилтын баталгаа",
    
    // Form headers & controls
    retail_onboarding_lbl: "Дижитал Данс Нээх Үйлчилгээ",
    ai_standby: "Хяналтын AI: Бэлэн",
    btn_back: "Буцах",
    btn_save: "Хадгалаад гарах",
    btn_continue: "Үргэлжлүүлэх",
    
    // Step 1 Form
    ill_step1_title: "Утас Баталгаажуулах",
    ill_step1_desc: "Нэг удаагийн нууц кодоор өөрийн дугаарыг бүртгэж, дижитал банкны үйлчилгээгээ идэвхжүүлнэ үү.",
    form_step1_title: "Дугаар бүртгүүлэх",
    form_step1_desc: "Гар утасны дугаар болон регистрийн дугаараа оруулна уу.",
    mobile_lbl: "Гар утасны дугаар",
    send_otp: "OTP код илгээх",
    otp_lbl: "Баталгаажуулах OTP код",
    otp_timer_lbl: "Код дахин илгээх: 60с",
    resend_otp: "Дахин код авах",
    nrn_lbl: "Регистрийн дугаар",
    nrn_hint: "Формат: Кирилл 2 үсэг, араас нь 8 оронтой тоо (Жишээ нь: АА12345678)",
    
    // Step 2 Form
    ill_step2_title: "Бичиг баримт уншуулах",
    ill_step2_desc: "Баримт бичгийг байршуулснаар OCR систем таны хувийн мэдээллийг автоматаар таньж бөглөнө.",
    form_step2_title: "Бичиг Баримтын Баталгаажуулалт",
    form_step2_desc: "Мэдээллийг автоматаар уншуулахын тулд иргэний баримтыг тод зургаар илгээнэ үү.",
    doc_type_lbl: "Бичиг Баримтын Төрөл",
    national_id_lbl: "Иргэний үнэмлэх",
    passport_lbl: "Гадаад паспорт",
    permit_lbl: "Оршин суух зөвшөөрөл",
    upload_drag_lbl: "Урд болон ард талын зураг хуулах",
    upload_hint_lbl: "PNG, JPG эсвэл PDF (дээд тал нь 10MB)",
    ai_chk_ocr: "OCR Уншилтын хяналт",
    ocr_text: "Баримтаас мэдээлэл унших систем",
    pending: "Хүлээгдэж буй",
    
    // Step 3 Form
    ill_step3_title: "Биометрик & Эрсдэлийн хяналт",
    ill_step3_desc: "Камераар авсан зургийг иргэний үнэмлэхийн зурагтай харьцуулж, зөрүүг шалгана.",
    form_step3_title: "Царайны Баталгаажуулалт",
    form_step3_desc: "Биометрик танилт хийх замаар залилан мэхлэлт болон AML шалгалтыг гүйцэтгэнэ.",
    activate_cam: "Камер идэвхжүүлэх",
    align_face: "Царайгаа хүрээн дотор оруулна уу",
    liveness_ok: "Царай амжилттай танигдлаа",
    capture: "Зураг авах",
    retake: "Дахин авах",
    ai_chk_bio: "Биометрик Шалгалтууд",
    face_match_text: "Иргэний үнэмлэхийн зурагтай харьцуулалт",
    dup_text: "Хэрэглэгчийн давхардал шалгах",
    aml_text: "Олон улсын хориг, AML шалгалт",
    
    // Step 4 Form
    ill_step4_title: "Иргэний мэдээлэл баталгаажуулах",
    ill_step4_desc: "Иргэний бүртгэлээс авсан мэдээллийг хянана уу. Алдаатай мэдээллийг өөрчлөх боломжтой.",
    form_step4_title: "Хувийн Мэдээлэл Хянах",
    form_step4_desc: "Автоматаар бөглөгдсөн мэдээллүүдийг хянаж, нэмэлт мэдээллийг оруулаарай.",
    banner_autofill_title: "Баримтаас автоматаар таньж бөглөсөн",
    banner_autofill_desc: "Мэдээллийг шалгана уу. Шар өнгөөр тодорсон талбаруудыг өөрчлөх боломжтой.",
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
    employment_lbl: "Хөдөлмөр эрхлэлт",
    emp_employed: "Ажилтан (Үндсэн)",
    emp_self: "Хувиараа бизнес эрхлэгч",
    emp_unemp: "Ажилгүй",
    emp_student: "Оюутан",
    emp_retired: "Тэтгэвэрт гарсан",
    employer_lbl: "Ажил олгогч байгууллага",
    occupation_lbl: "Албан тушаал / Мэргэжил",
    income_lbl: "Сарын дундаж орлого (MNT)",
    inc_low: "1,500,000 ₮-өөс доош",
    inc_mid: "1,500,000 ₮ - 3,500,000 ₮",
    inc_high: "3,500,000 ₮ - 7,000,000 ₮",
    inc_highest: "7,000,000 ₮-өөс дээш",
    pref_lang_lbl: "Харилцах хэл",
    lang_mn: "Монгол хэл",
    lang_en: "Англи хэл",
    pref_branch_lbl: "Сонгох салбар",
    branch_hq: "Төв салбар (Сүхбаатарын талбай)",
    branch_west: "Баруун дөрвөн замын салбар",
    branch_erd: "Орхон Эрдэнэт салбар",
    
    // Step 5 Form
    form_step5_title: "Бүтээгдэхүүн Сонголт",
    form_step5_desc: "Дансны төрөл болон холбох дебит картын тохиргоонуудаа хийнэ үү.",
    rec_tag: "✦ САНАЛ БОЛГОХ ШИЛДЭГ БАГЦ",
    rec_bundle_title: "Хадгаламжийн Урамшуулалт Багц",
    rec_bundle_desc: "Жилийн 12.5%-ийн хүүтэй хадгаламж + Үнэ төлбөргүй Виза Платинум карт.",
    apply_pack: "Сонгох",
    sect_accounts: "1. Төлбөрийн данс сонгох",
    premium_savings_title: "Хугацаагүй Хадгаламжийн Данс",
    premium_savings_desc: "Хүүгээ сар бүр тооцуулах хадгаламж. Дансны доод үлдэгдэл нэхэхгүй.",
    premium_savings_rate: "Жилийн хүү: 12.5%",
    salary_acct_title: "Цалингийн Данс",
    salary_acct_desc: "Байгууллагын цалингаа авах данс, дотоодын шилжүүлэг үнэгүй.",
    sect_card_ops: "2. Дебит карт & Үйлчилгээний тохиргоо",
    card_format_title: "Дебит картын хэлбэр",
    card_format_desc: "Виртуал болон биет картын төрлөө сонгоно уу",
    toggle_virt: "Зөвхөн виртуал",
    toggle_both: "Биет + Виртуал",
    toggle_none: "Карт авахгүй",
    digital_add_title: "Дижитал банкны үйлчилгээнүүд",
    digital_add_desc: "Идэвхжүүлэх цахим үйлчилгээгээ сонгоно уу",
    srv_app: "Аппликейшн",
    srv_net: "Интернет банк",
    sect_currencies: "3. Дансны Валют & Нууцлал тохируулах",
    account_curr_lbl: "Дансны үндсэн валют",
    account_nick_lbl: "Дансны нэр (Нэмэлт тайлбар)",
    card_deliv_lbl: "Картыг хүлээн авах нөхцөл",
    deliv_branch_title: "Салбараас очиж авах",
    deliv_branch_desc: "Таны карт Төв салбар дээр бэлэн байна",
    deliv_home_title: "Хүргэлтээр авах",
    deliv_home_desc: "Оршин суугаа хаягаар хүргүүлэх (1-3 өдөр)",
    pickup_loc_title: "Хүлээн авах салбар:",
    courier_addr_title: "Хүргэлтийн хаяг:",
    card_pin_lbl: "Дебит картын хамгаалалтын PIN код",
    set_pin: "Нууц код тохируулах",
    clear: "Арилгах",
    confirm: "Хадгалах",
    offers_title: "Урьдчилан батлагдсан зээлийн санал",
    cc_offer_title: "Кредит карт авах боломж",
    cc_limit: "Батлагдсан лимит:",
    promo_offer_title: "Урьдчилан батлагдсан зээл",
    promo_offer_desc: "Таны зээлийн түүхэнд үндэслэн сарын 1.4%-ийн хүүтэй Алтан зээлийн карт авах урьдчилсан зөвшөөрөл олгогдлоо. Үйлчилгээний шимтгэлгүй.",
    
    // Step 6 Form
    ill_step6_title: "Бүртгэл хянах",
    ill_step6_desc: "Цахим гарын үсэг зурж, данс нээх бүртгэлийг илгээхээс өмнө бүх мэдээллээ хянана уу.",
    form_step6_title: "Бүртгэл Хянах & Илгээх",
    form_step6_desc: "Мэдээллийн үнэн зөв байдлыг баталж, цахим гарын үсгээ зурна уу.",
    sum_sec1: "1. ИРГЭНИЙ МЭДЭЭЛЭЛ",
    sum_sec2: "2. СОНГОСОН БҮТЭЭГДЭХҮҮН",
    sum_sec3: "3. ТӨЛӨВЛӨГӨӨ & ХҮРГЭЛТ",
    edit: "Засах",
    sum_name: "Овог нэр:",
    sum_nrn: "Регистр / Төрсөн:",
    sum_address: "Хаяг:",
    sum_contact: "Холбоо барих:",
    sum_prod: "Хадгаламж:",
    sum_card: "Карт:",
    sum_extra: "Цахим үйлчилгээ:",
    sum_tax: "Татвар төлөгч:",
    sum_pref: "Дансны валют:",
    sum_delivery: "Картын нөхцөл:",
    disclosures_title: "Харилцагчийн нөхцөл, мэдэгдэл",
    disclosures_desc: "Гарын үсэг зурснаар та оруулсан бүх мэдээллээ үнэн зөв болохыг баталж, данс нээх цахим журмыг бүрэн зөвшөөрч байгаа болно.",
    signature_lbl: "Цахим Гарын үсэг зурах",
    terms_accept_lbl: "Би данс нээх нөхцөлийг зөвшөөрч байна.",
    sec_status_title: "Комплаенс эрсдэлийн хяналтын төлөв",
    cleared: "ЗӨВШӨӨРӨГДСӨН",
    fatca_status: "FATCA Татвар",
    pep_status: "PEP Улс төрч эсэх",
    passed: "Тэнцсэн",
    
    // Step 7 Success
    success_title: "Данс Амжилттай Идэвхжлээ",
    success_desc: "Баяр хүргэе! Таны дансыг автоматаар (STP) нээлээ.",
    active_badge: "Данс идэвхтэй",
    p_account: "Дансны дугаар (Дансны IBAN дугаар)",
    p_cif: "Харилцагчийн CIF код",
    p_lead: "Лид дугаар",
    p_card: "Картын төлөв",
    p_card_ready: "Бэлэн",
    p_notice: "Мэдэгдэл",
    next_title: "Дараагийн алхам",
    next_app_title: "TDB Mongolia аппликейшн татах",
    next_app_desc: "Бүртгэлтэй утасны дугаар болон CIF кодоор нэвтэрнэ үү.",
    btn_kit: "Бүртгэлийн хуудас татах",
    btn_fund: "Данс цэнэглэх"
  }
};

// Step Header Metadata
const stepMeta = {
  1: {
    EN: { title: "Registration & OTP", desc: "Verify credentials and enter registry details to start onboarding." },
    MN: { title: "Бүртгүүлэх & OTP баталгаажуулалт", desc: "Утасны дугаараа бүртгэж, регистрийн мэдээллээ оруулна уу." }
  },
  2: {
    EN: { title: "Document Upload", desc: "Upload identification documents for automated OCR extraction checks." },
    MN: { title: "Бичиг баримт байршуулах", desc: "OCR системээр уншуулах бичиг баримтын зургаа оруулаарай." }
  },
  3: {
    EN: { title: "Personal Information", desc: "Confirm demographic profiles auto-populated from documents OCR." },
    MN: { title: "Хувийн мэдээлэл хянах", desc: "Баримт бичгээс автоматаар уншигдсан иргэний мэдээллээ хянана уу." }
  },
  4: {
    EN: { title: "Product Selection", desc: "Choose day-to-day accounts, card options, currencies, and card delivery pick-ups." },
    MN: { title: "Данс & Картын Сонголт", desc: "Хэрэглээний дансны валют, картын төрөл, хамгаалалтын ПИН код болон салбараа сонгоно." }
  },
  5: {
    EN: { title: "Biometric Liveness", desc: "Perform instant liveness screening to verify user matching." },
    MN: { title: "Биометрик царай баталгаажуулалт", desc: "Царайны хөдөлгөөнөөр өөрийгөө баталгаажуулж, биометр танилт хийнэ." }
  },
  6: {
    EN: { title: "Review & e-Sign", desc: "Confirm summary packet details and draw digital signature to execute." },
    MN: { title: "Бүртгэл хянах & Цахим гарын үсэг", desc: "Бүх оруулсан мэдээллээ хянаж, гарын үсэг зурж дуусгана уу." }
  },
  7: {
    EN: { title: "Account Created Successfully!", desc: "Retail banking setup is online. Funds can be loaded digitally." },
    MN: { title: "Данс Амжилттай Нээгдлээ!", desc: "Танд баяр хүргэе. Цахим данс бэлэн болсон тул шууд ашиглах боломжтой." }
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
  
  // Direct summary review edits links
  document.querySelectorAll('.btn-link-edit').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.getAttribute('data-target-step'));
      setupStepUI(step);
    });
  });
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
    let productSelected = "Classic Credit Card";
    if (d.selectedAccount === "savings_acct") {
      productSelected = "Premium Savings Account";
    } else if (d.selectedAccount === "salary_acct") {
      productSelected = "Salary Account";
    }
    const ccChecked = document.getElementById('offer-credit-card')?.checked;
    if (ccChecked) {
      productSelected = "TD Gold Credit";
    }
    
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
    
    if (!name || !dob || !gender || !addr || !email) {
      showNotification(isMN ? "Хувийн мэдээллээ бүрэн хянаж дуусгана уу. Хаяг, имэйл талбар хоосон байж болохгүй." : "Please verify all demographic information. Address and email cannot be empty.", 'warning');
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
    appState.data.employerName = document.getElementById('p-employer').value.trim();
    appState.data.occupation = document.getElementById('p-occupation').value.trim();
    appState.data.monthlyIncome = document.getElementById('p-income').value;
  }
  
  if (step === 4) {
    const currRadio = document.querySelector('input[name="currency"]:checked');
    if (currRadio) appState.data.accountCurrency = currRadio.value;
    
    const nick = document.getElementById('pref-nickname').value.trim();
    appState.data.accountNickname = nick;
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
      showNotification(isMN ? "Данс нээх нөхцөлийг зөвшөөрч, чагтална уу." : "Please accept all terms and conditions to submit your digital application.", 'warning');
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
  if (!uploader || !uploadArea) return;
  
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
  
  document.getElementById('sum-name').innerText = d.fullName || (isMN ? "Хоосон" : "Not Entered");
  document.getElementById('sum-nrn').innerText = `${maskNrn(d.nrnNumber) || "N/A"} / ${d.dob || "N/A"}`;
  document.getElementById('sum-contact').innerText = `+976 ${d.mobileNumber} | ${d.email}`;
  document.getElementById('sum-address').innerText = d.address || (isMN ? "Хаяг бүртгүүлээгүй" : "Not Configured");
  
  let prodLabel = isMN ? "Хянах данс" : "Checking Account";
  if (d.selectedAccount === 'savings_acct') prodLabel = isMN ? "Хадгаламжийн данс (Жилийн 12.5% хүү)" : "Premium Savings (12.5% p.a.)";
  if (d.selectedAccount === 'salary_acct') prodLabel = isMN ? "Цалингийн данс" : "Salary Direct Account";
  document.getElementById('sum-product').innerText = prodLabel;
  
  let cardLabel = isMN ? "Карт авахгүй" : "None";
  if (d.cardFormFactor === 'virtual') cardLabel = isMN ? "Зөвхөн виртуал карт" : "Virtual Card Only";
  if (d.cardFormFactor === 'both') cardLabel = isMN ? "Биет + Виртуал карт" : "Physical + Virtual Card";
  document.getElementById('sum-card').innerText = cardLabel;
  
  const extras = [];
  if (d.digitalServices.mobile) extras.push(isMN ? "Аппликейшн" : "Mobile App");
  if (d.digitalServices.internet) extras.push(isMN ? "Интернет банк" : "Web Banking");
  if (document.getElementById('offer-credit-card').checked) extras.push(isMN ? "Алтан зээлийн шугам" : "Gold Credit Line");
  document.getElementById('sum-extra').innerText = extras.join(', ') || "None";
  
  document.getElementById('sum-tax').innerText = d.taxResidency;
  
  const branchSelect = document.getElementById('p-branch');
  const branchName = branchSelect.options[branchSelect.selectedIndex].text;
  document.getElementById('sum-pref').innerText = `${d.accountCurrency} | ${branchName}`;
  document.getElementById('sum-delivery').innerText = d.deliveryMethod === 'branch' ? 
    (isMN ? `Салбараас авах (${branchName})` : `Pickup (${branchName})`) : 
    (isMN ? "Хүргэлтээр авах" : "Courier Dispatch");

  // Pre-fill Step 7 labels
  document.getElementById('success-name').innerText = d.fullName;
  document.getElementById('success-account-num').innerText = generateMockAccountNum(d.accountCurrency);
  document.getElementById('success-cif').innerText = `CIF-${Math.floor(1000000 + Math.random() * 9000000)}`;
  
  if (d.deliveryMethod === 'branch') {
    document.getElementById('success-delivery-notice').innerText = isMN ? 
      `Таны карт ${branchName} салбар дээр бэлэн байна.` : 
      `Your debit card is ready for collection at ${branchName}.`;
  } else {
    document.getElementById('success-delivery-notice').innerText = isMN ? 
      `Таны картыг харилцах хаяг болох ${d.address} рүү хүргэнэ.` : 
      `Debit card will be couriered to ${d.address}.`;
  }
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
