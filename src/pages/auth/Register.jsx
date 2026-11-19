import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import AuthCheckbox from "../../components/auth/AuthCheckbox";
import { useRegister } from "../../hooks/useAuth";

function Register() {
  const navigate = useNavigate();
  const { register, isPending, errorMessage } = useRegister();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    register(form, {
      onSuccess: () => navigate("/"),
    });
  };

  return (
    <AuthLayout
      badge="انضم لعيلة سيرنا"
      title="خلّينا نبدأ"
      highlight="المشوار سوا."
      subtitle="حساب بسيط، ورحلاتك كلها بين إيديك."
      onSubmit={handleSubmit}
      error={errorMessage}
      switchText="عندك حساب من قبل؟"
      switchLabel="سجّل دخولك"
      switchTo="/login"
    >
      <AuthInput
        label="الاسم الكامل"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="اسمك الكامل"
        icon={User}
        autoComplete="name"
        minLength={3}
        required
      />

      <AuthInput
        label="البريد الإلكتروني"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="name@example.com"
        icon={Mail}
        autoComplete="email"
        dir="ltr"
        required
      />

      <AuthInput
        label="كلمة المرور"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="8 أحرف على الأقل"
        icon={Lock}
        autoComplete="new-password"
        dir="ltr"
        minLength={8}
        required
      />

      <AuthCheckbox
        label="أوافق على استخدام بيانات تجريبية في هذا النموذج التعليمي."
        name="terms"
        required
      />

      <AuthButton type="submit" loading={isPending}>
        إنشاء حساب
      </AuthButton>
    </AuthLayout>
  );
}

export default Register;