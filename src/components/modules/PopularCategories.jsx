// src/features/home/components/PopularCategories.jsx
import { 
    CircleDollarSign, 
    Megaphone, 
    PenTool, 
    Code, 
    Users, 
    Car, 
    Headset, 
    BriefcaseMedical, 
    ClipboardList 
  } from "lucide-react";
  
  // Dummy data for categories
  const categories = [
    { id: 1, title: "Accounting / Finance", positions: 2, icon: CircleDollarSign },
    { id: 2, title: "Marketing", positions: 86, icon: Megaphone },
    { id: 3, title: "Design", positions: 43, icon: PenTool },
    { id: 4, title: "Development", positions: 12, icon: Code },
    { id: 5, title: "Human Resource", positions: 55, icon: Users },
    { id: 6, title: "Automotive Jobs", positions: 2, icon: Car },
    { id: 7, title: "Customer Service", positions: 2, icon: Headset },
    { id: 8, title: "Health and Care", positions: 25, icon: BriefcaseMedical },
    { id: 9, title: "Project Management", positions: 92, icon: ClipboardList },
  ];
  
  export default function PopularCategories() {
    return (
      <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-white">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Popular Job Categories
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            2020 jobs live - 293 added today.
          </p>
        </div>
  
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            
            return (
              <div 
                key={category.id} 
                // 🔥 Yahan 'group' class ka jaadu hai. Ye parent container hai.
                className="group flex items-center gap-5 p-6 bg-white border border-gray-200 rounded-xl cursor-pointer transition-all duration-300 hover:border-transparent hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)]"
              >
                
                {/* Icon Container with Hover state bindings */}
                <div className="w-16 h-16 shrink-0 rounded-xl bg-[#f4f7fc] text-[#1a65d6] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#1a65d6] group-hover:text-white">
                  <Icon strokeWidth={1.5} className="w-8 h-8" />
                </div>
  
                {/* Text Container */}
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-1 group-hover:text-[#1a65d6] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    ({category.positions} open positions)
                  </p>
                </div>
  
              </div>
            );
          })}
        </div>
  
      </section>
    );
  }