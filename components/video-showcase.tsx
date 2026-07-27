import { Film, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface VideoExample {
  src: string;
  caption: string;
  poster?: string;
  externalUrl?: string;
}

const videos: VideoExample[] = [
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
  {
    poster: "/8534.jpg",
    externalUrl: "https://disk.yandex.ru/i/8dMIbPsS9O-rgw",
    src: "",
    caption: "Для школы вокала",
  },
  {
    poster: "/8536.jpg",
    externalUrl: "https://disk.yandex.ru/i/T1V2tmQQ6miamw",
    src: "",
    caption: "Для футбольной школы",
  },
  {
    poster: "/8535.jpg",
    externalUrl: "https://disk.yandex.ru/i/QGFkvbSI-0H51g",
    src: "",
    caption: "Для бьюти-мастеров",
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
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Примеры работ
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Посмотрите, как выглядят готовые видеовизитки для разных сфер
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map(({ src, caption, poster, externalUrl }) =>
            poster && externalUrl ? (
              <Link
                key={caption}
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group relative overflow-hidden rounded-xl border bg-card block"
              >
                <div className="aspect-video bg-muted relative">
                  <Image
                    src={poster}
                    alt={caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 fill-primary text-primary ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caption}
                  </p>
                </div>
              </Link>
            ) : (
              <div
                key={caption}
                className="card-hover group overflow-hidden rounded-xl border bg-card"
              >
                <div className="aspect-video bg-muted">
                  <video
                    src={src}
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    Ваш браузер не поддерживает воспроизведение видео.
                  </video>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caption}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
