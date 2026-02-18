import { featuredPost } from "@/lib/mockPosts";
import { AdZone } from "./AdZone";
import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Post */}
          <div className="flex-1">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
              <img
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Избранная статья
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{featuredPost.date}</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {featuredPost.description}
              </p>
            </div>
          </div>

          {/* Ad Zone */}
          <div className="lg:w-[320px] flex flex-col gap-4">
            <AdZone width={300} height={250} className="mx-auto" zoneClass="next-ads-zone-1" id="ad-zone-hero-1" />
            <AdZone width={300} height={250} className="mx-auto" zoneClass="next-ads-zone-2" id="ad-zone-hero-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
