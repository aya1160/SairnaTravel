import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Hand, LogOut, Sparkles, Ticket } from "lucide-react";

import { removeToken } from "../../utils/token-storage";

const container =
  "mx-auto w-[min(1216px,calc(100%_-_68px))] max-[1150px]:w-[min(1216px,calc(100%_-_48px))] max-[650px]:w-[calc(100%_-_34px)]";

const card =
  "rounded-[19px] border border-[color:var(--border)] bg-[var(--surface)] p-[27px]";

function Profile({ user, bookingsCount = 0 }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  const name = user?.name || "مستخدم سيرنا";
  const email = user?.email || "غير متوفر";

  return (
    <main className="min-h-[70vh]">
      {/* Banner */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[linear-gradient(140deg,var(--surface-alt),var(--bg))] pb-[45px] pt-[26px] max-[650px]:pb-10 max-[650px]:pt-[22px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-[120px] -top-[180px] h-[350px] w-[350px] rounded-full border border-dashed border-[rgba(25,167,154,.1)]"
        />

        <div className={container}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--soft-teal)] px-[14px] py-[5px] text-[11px] font-black tracking-[.12px] text-[color:var(--primary-deep)]">
            <Sparkles
              size={13}
              className="text-[color:var(--primary)]"
              aria-hidden="true"
            />
            ملفك الشخصي
          </span>

          <h1 className="mb-[6px] mt-[11px] text-[length:clamp(29px,3.2vw,42px)] max-[650px]:text-[28px]">
            أهلاً {name}{" "}
            <span className="text-[color:var(--primary)]">
              <Hand
                size={28}
                className="inline-block align-baseline"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="m-0 text-[13px] text-[color:var(--muted)]">
            هون كل التفاصيل المتعلقة بحسابك التجريبي.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={`${container} py-[86px] max-[650px]:py-[58px]`}>
        <div className="grid grid-cols-[300px_1fr] gap-5 max-[650px]:grid-cols-1">
          {/* User card */}
          <div className={`${card} text-center`}>
            <div className="mx-auto mb-[13px] mt-[3px] grid h-[90px] w-[90px] place-items-center rounded-[30px] bg-[var(--soft-teal)] text-[43px] font-black text-[color:var(--primary)]">
              {name.charAt(0)}
            </div>

            <h2 className="m-0 text-[20px]">{name}</h2>

            <span className="break-all text-[12px] text-[color:var(--muted)]">
              {email}
            </span>

            <div className="my-[22px] flex items-center justify-center gap-[7px] rounded-[11px] bg-[var(--surface-alt)] p-[13px] text-[12px]">
              <Ticket
                size={19}
                className="text-[color:var(--primary)]"
                aria-hidden="true"
              />
              <b>{bookingsCount}</b> حجوزات محفوظة
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex min-h-[49px] w-full items-center justify-center gap-[10px] whitespace-nowrap rounded-[12px] border border-[color:var(--border)] bg-[var(--surface)] px-[22px] py-[11px] text-[13px] font-extrabold text-[color:var(--text)] transition-all duration-[250ms] hover:-translate-y-[3px] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] active:translate-y-0 active:scale-[.98]"
            >
              <LogOut size={17} aria-hidden="true" />
              تسجيل الخروج
            </button>
          </div>

          {/* Account details */}
          <div className={card}>
            <h2 className="mb-[0.83em] border-b border-[color:var(--border)] pb-[17px] text-[20px]">
              معلومات الحساب
            </h2>

            <div className="flex items-center justify-between gap-[13px] border-b border-[color:var(--border)] py-[18px] text-[12px]">
              <span className="text-[color:var(--muted)]">الاسم الكامل</span>
              <b>{name}</b>
            </div>

            <div className="flex items-center justify-between gap-[13px] border-b border-[color:var(--border)] py-[18px] text-[12px]">
              <span className="text-[color:var(--muted)]">البريد الإلكتروني</span>
              <b dir="ltr">{email}</b>
            </div>

            <div className="flex items-center justify-between gap-[13px] border-b border-[color:var(--border)] py-[18px] text-[12px]">
              <span className="text-[color:var(--muted)]">نوع الحساب</span>
              <b>حساب تجريبي</b>
            </div>

            <Link
              to="/my-trips"
              className="mt-[25px] inline-flex min-h-[49px] items-center justify-center gap-[10px] whitespace-nowrap rounded-[12px] border border-transparent bg-[var(--primary)] px-[22px] py-[11px] text-[13px] font-extrabold text-white shadow-[0_9px_20px_rgba(8,165,151,.19)] transition-all duration-[250ms] hover:-translate-y-[3px] hover:bg-[var(--primary-deep)] hover:shadow-[0_12px_25px_rgba(8,165,151,.28)] active:translate-y-0 active:scale-[.98]"
            >
              انتقل لحجوزاتي
              <ArrowLeft size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;