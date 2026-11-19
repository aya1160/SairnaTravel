import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthCheckbox from "../../components/auth/AuthCheckbox";
import AuthButton from "../../components/auth/AuthButton";
import { useLogin } from "../../hooks/useAuth";
console.log("Login rendered");
function Login() {
  const navigate = useNavigate();
  const { login, isPending, errorMessage } = useLogin();

  const [form, setForm] = useState({
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

    login(form, {
      onSuccess: () => navigate("/"),
    });
  };

  return (
    <AuthLayout
      badge="أهلاً برجعتك"
      title="منوّر،"
      highlight="اشتقنالك!"
      subtitle="ادخل على حسابك، وكمّل حجز رحلتك براحة."
      onSubmit={handleSubmit}
      error={errorMessage}
      switchText="لسا ما عندك حساب؟"
      switchLabel="أنشئ حساب جديد"
      switchTo="/register"
    >
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
        placeholder="اكتب كلمة المرور"
        icon={Lock}
        autoComplete="current-password"
        dir="ltr"
        required
      />

      <AuthCheckbox
        label="تذكرني"
        name="remember"
        linkLabel="نسيت كلمة المرور؟"
        linkHref="#support"
      />

      <AuthButton type="submit" loading={isPending}>
        تسجيل الدخول
      </AuthButton>
    </AuthLayout>
  );
}

export default Login;
