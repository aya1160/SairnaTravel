import { ArrowLeft } from "lucide-react";

function AuthButton({ children, type = "button", loading = false }) {
  return (
    <button
      type={type}
      disabled={loading}
      className="mt-[3px] flex min-h-[53px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 text-[13px] font-extrabold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        "جاري التحميل..."
      ) : (
        <>
          {children}
          <ArrowLeft size={18} aria-hidden="true" />
        </>
      )}
    </button>
  );
}

export default AuthButton;
