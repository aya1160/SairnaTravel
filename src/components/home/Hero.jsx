import { MapPin, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import umayyadMosqueImg from '../../assets/Images/image.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-page text-ink pt-8 pb-16 lg:pt-12 lg:py-24">
      
      {/* تأثير التوهج الخلفي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* القسم الأيمن: النصوص والترحيب */}
          <div className="lg:col-span-6 order-1 lg:order-1 flex flex-col items-start text-right">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-teal text-primary text-xs font-bold mb-6">
              <span>✦</span> أهلاً فيك بسيرنا
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.3] mb-6">
              المحطة الجاية؟ <br />
              <span className="text-primary">على كيفك.</span>
            </h1>

            <p className="text-muted text-base sm:text-lg mb-8 max-w-xl">
              من حلب لدمشق، ومن الساحل للجزيرة. لاقي الرحلة اللي بتناسبك، اختار مقعدك، وخلي الطريق علينا.
            </p>

            {/* قائمة الميزات الصغيرة */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 text-sm font-semibold text-ink">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>حجز سهل</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>خيارات متنوعة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span>متابعة رحلتك</span>
              </div>
            </div>

            {/* قسم التقييمات */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-line w-full">
              <div className="flex items-center gap-1 text-amber-400">
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <span className="text-ink font-bold text-sm mr-1.5">4.9/5</span>
              </div>
              
              <div className="flex items-center -space-x-2 space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-2 border-surface">م</div>
                <div className="w-8 h-8 rounded-full bg-primary-deep text-white flex items-center justify-center text-xs font-bold border-2 border-surface">س</div>
                <div className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center text-xs font-bold border-2 border-surface">ع</div>
                <div className="w-8 h-8 rounded-full bg-muted text-white flex items-center justify-center text-xs font-bold border-2 border-surface">ل</div>
              </div>

              <p className="text-xs text-muted">تجربة سفر بتستاهل تجربها</p>
            </div>

          </div>

          {/* القسم الأيسر: الصورة والعناصر العائمة */}
          <div className="lg:col-span-6 order-2 lg:order-2 relative flex justify-center py-6">
            <div className="relative w-full max-w-[540px]">
              
              {/* الصورة الرئيسية */}
              <div className="rounded-[28px] overflow-hidden shadow-card-lg border border-line bg-white transform -rotate-2 relative">
                <img 
                  src={umayyadMosqueImg} 
                  alt="الجامع الأموي في دمشق" 
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
                
                {/* شريط التسمية السفلي على الصورة */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg">
                  صورة حقيقية من دمشق
                </div>
              </div>

              {/* المربع العائم العلوي (14 محافظة) -> في الأعلى من جهة اليسار */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-white text-gray-900 border border-gray-100 shadow-xl p-3.5 rounded-[20px] flex items-center gap-3 animate-float z-25 dir-rtl">
                <div className="w-10 h-10 rounded-xl bg-soft-teal flex items-center justify-center text-primary shrink-0">
                  <MapPin size={22} /> 
                </div>
                <div className="text-right">
                  <h4 className="text-sm font-extrabold text-gray-900 m-0">14 محافظة</h4>
                  <p className="text-xs text-gray-500 m-0">وحدات نخدمها</p>
                </div>
              </div>

              {/* المربع العائم السفلي (سافر براحة) -> في الأسفل من جهة اليمين */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white text-gray-900 border border-gray-100 shadow-xl p-3.5 rounded-[20px] flex items-center gap-3 animate-float z-25 dir-rtl" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 rounded-xl bg-soft-teal flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div className="text-right">
                  <h4 className="text-sm font-extrabold text-gray-900 m-0">سافر براحة</h4>
                  <p className="text-xs text-gray-500 m-0">من أول حجز لآخر محطة</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}