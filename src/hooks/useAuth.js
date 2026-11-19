import { useMutation } from "@tanstack/react-query";

import {
  loginRequest,
  registerRequest,
} from "../api/auth-api";

import { setToken } from "../utils/token-storage";

function getErrorMessage(error) {
  if (error.response?.status === 401) {
    return "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
  }

  if (error.response?.status === 409) {
    return "هذا البريد الإلكتروني مسجل مسبقاً.";
  }

  const message = error.response?.data?.message;

  if (Array.isArray(message)) {
    return message.join("، ");
  }

  return message ?? "تعذّر الاتصال بالخادم، حاول مرة ثانية.";
}

// استخراج وحفظ التوكن إذا كان موجوداً
function saveToken(data) {
  console.log("Auth response:", data);

  if (data?.accessToken) {
    setToken(data.accessToken);
  }
}

// تسجيل الدخول
export function useLogin() {
  const mutation = useMutation({
    mutationFn: loginRequest,

    onSuccess: (data) => {
      saveToken(data);
    },
  });

  return {
    login: mutation.mutate,
    isPending: mutation.isPending,
    errorMessage: mutation.isError
      ? getErrorMessage(mutation.error)
      : "",
  };
}

// إنشاء حساب
export function useRegister() {
  const mutation = useMutation({
    mutationFn: registerRequest,

    onSuccess: (data) => {
      saveToken(data);
    },
  });

  return {
    register: mutation.mutate,
    isPending: mutation.isPending,
    errorMessage: mutation.isError
      ? getErrorMessage(mutation.error)
      : "",
  };
}