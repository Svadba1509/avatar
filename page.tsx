import {
  Sparkles,
  Stethoscope,
  GraduationCap,
  Tent,
  Dumbbell,
  Video,
  Globe,
  Infinity,
} from "lucide-react";
import { VideoShowcase } from "@/components/video-showcase";

const categories = [
  {
    icon: Stethoscope,
    title: "Детские стоматологии",
    description: "Снизьте страх перед лечением — мультяшный персонаж познакомит ребёнка с клиникой до визита",
  },
  {
    icon: GraduationCap,
    title: "Детские школы",
    description: "Яркая визитка центра, кружка или репетитора, которая запоминается и родителям, и детям",
  },
  {
    icon: Tent,
    title: "Детские лагеря",
    description: "Покажите атмосферу смены, вожатых и активностей в формате, который дети захотят переслать друзьям",
  },
  {
    icon: Dumbbell,
    title: "Спортивные секции",
    description: "Мотивирующий ролик с маскотом секции, чтобы ребенок сам попросил записать его на тренировку",
  },
];

const plans = [
  {
    icon: Video,
    title: "Создать короткую общую AI-аватар/видеовизитку",
    price: "3 000",
    period: "разово",
    description: "Один готовый ролик с уникальным мультяшным персонажем для вашей организации",
    features: ["Разработка персонажа", "Анимация 8–10 секунд", "Файл в HD-качестве"],
  },
  {
    icon: Globe,
    title: "Создать сайт с маскотом и персонализированную видеовизитку",
    price: "12 000",
    period: "разово",
    description: "Одностраничный сайт с маскотом + видеовизитка для тёплого знакомства",
    featured: true,
    features: ["Всё из предыдущего тарифа", "Лендинг с маскотом"],
  },
  {
    icon: Infinity,
    title: "Создавать ежедневные персонализированные визитки",
    price: "20 000",
    period: "мес",
    description: "Ежедневные персонализированные визитки для каждого нового клиента",
    features: ["Индивидуальный персонаж для клиента", "Ежедневно", "Приоритетная поддержка"],
  },
  {
    icon: Sparkles,
    title: "Разработка маскота + лендинг",
    price: "По запросу",
    period: "",
    description: "Отдельный пакет для создания уникального маскота и лендинга под ключ",
    features: ["Уникальный персонаж-маскот", "Полноценный лендинг с маскотом"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-9rem)]">
      <section id="about" className="gradient-hero-vibrant scroll-mt-14 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/70 shadow-sm">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              AI-аватар для вашего бизнеса
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Создаю анимированные маскоты, которые сделают ваш клиентский сервис уникальным
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI-аватар станет вашим цифровым помощником: напомнит клиентам о предстоящем визите, поздравит с днём рождения и праздниками, а главное — повысит лояльность и сделает бренд узнаваемым
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Кому это подходит</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Видеовизитка работает везде, где важен тёплый первый контакт с ребёнком и родителем</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {categories.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-hover group flex gap-4 rounded-xl border bg-card p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoShowcase id="examples" />

      <section id="pricing" className="scroll-mt-14 px-4 py-20">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Тарифы</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Выберите формат, который подходит вашим задачам</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map(({ icon: Icon, title, price, period, description, features, featured }) => (
              <div key={title} className={`card-hover group relative flex flex-col rounded-xl border bg-card p-6 ${featured ? "border-primary/30 shadow-lg shadow-primary/5" : ""}`}>
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Рекомендую</div>
                )}
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-medium leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{price}</span>
                  {period && (
                    <><span className="text-sm text-muted-foreground">руб</span><span className="text-sm text-muted-foreground">/{period}</span></>
                  )}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
