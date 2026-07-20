import { Film } from "lucide-react";

const videos = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Пример видеовизитки для детской стоматологии",
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    caption: "Пример видеовизитки для детского лагеря",
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    caption: "Пример видеовизитки для спортивной секции",
  },
];

interface VideoShowcaseProps {
  id?: string;
}

export function VideoShowcase({ id }: VideoShowcaseProps) {
  return (
    <section id={id} className="scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Film className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Примеры работ</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Посмотрите, как выглядят готовые видеовизитки для разных сфер</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map(({ src, caption }) => (
            <div key={caption} className="card-hover group overflow-hidden rounded-xl border bg-card">
              <div className="aspect-video bg-muted">
                <video src={src} controls preload="metadata" playsInline className="h-full w-full object-cover">
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
