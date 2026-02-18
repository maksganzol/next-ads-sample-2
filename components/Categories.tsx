import { categories } from "@/lib/mockPosts";
import { Plane, Cpu, Heart, ChefHat, Activity, Paintbrush } from "lucide-react";

const iconMap: Record<string, any> = {
  Plane,
  Cpu,
  Heart,
  ChefHat,
  Activity,
  Paintbrush,
};

export function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Категории</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={category.id}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <Icon size={32} className="mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-center">{category.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
