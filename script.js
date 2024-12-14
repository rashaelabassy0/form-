document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();
    const gender = document.getElementById("gender").value;
  
    const message = document.getElementById("message")
  
    if (!name || !email || !password || !phone || !dob || !address || !gender) {
      message.textContent = "جميع الحقول مطلوبة. الرجاء ملء جميع الحقول!";
      return;
    }
  
    if (password.length < 6) {
      message.textContent = "كلمة المرور يجب أن تكون 6 أحرف على الأقل.";
      return;
    }
  
    if (!/^\d{10,15}$/.test(phone)) {
      message.textContent = "رقم الهاتف غير صالح. يجب أن يحتوي على 10-15 رقمًا.";
      return;
    }
  
    message.textContent = "تم التسجيل بنجاح!";
    message.style.color = "green";
  
    document.getElementById("registrationForm").reset();
  });
  