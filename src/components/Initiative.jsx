"use client"

// Icons as simple SVG components
const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const Lightbulb = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

const Building = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
)

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function InitiativesPage() {
  const initiatives = [
    {
      title: "Alumnus Entrepreneurship",
      description:
        "An initiative by E-CELL in association with Alumni Association that organizes StartUp Master sessions that are highly enriching and enlightening for entrepreneurs which are graced by many famous personalities.",
      icon: Users,
      color: "from-emerald-400 to-emerald-600",
      shadowColor: "shadow-emerald-500/30",
    },
    {
      title: "e - Mentoring Program",
      description:
        "E-Mentoring Program is an initiative of E-CELL RGPV helping which helps budding ventures turn their dream into reality, under this program we provide assistance and guidance to water blooming startup ideas.",
      icon: Lightbulb,
      color: "from-lime-400 to-lime-600",
      shadowColor: "shadow-lime-500/30",
    },
    {
      title: "Startup Internship Program",
      description:
        "Startup internship program (SIP) strives for developing an entrepreneurial streak among campus students by helping them acquire an internship in the most spirited and exciting startups running around.",
      icon: Building,
      color: "from-teal-400 to-teal-600",
      shadowColor: "shadow-teal-500/30",
    },
    {
      title: "Campus Outreach Program",
      description:
        "The campus ambassador program is an initiative by E-Cell RGPV to reach out to all the colleges across India intended to incorporate entrepreneurial spirit in students and foster an entrepreneurial mindset.",
      icon: MapPin,
      color: "from-green-400 to-green-600",
      shadowColor: "shadow-green-500/30",
    },
  ]

  return (
    <>
      {/* Tailwind CSS CDN */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

      {/* Custom CSS for Green Theme */}
      <style jsx>{`
        :root {
          --emerald-primary: #2E7D32;
          --medium-sea-green: #66BB6A;
          --honeydew: #F1F8F4;
          --charcoal: #212121;
          --lime-highlight: #AED581;
          --teal-blue: #00897B;
          --soft-orange: #FFA726;
          --spring-green: #43A047;
        }
        
        .bg-honeydew {
          background-color: var(--honeydew);
        }
        
        .text-charcoal {
          color: var(--charcoal);
        }
        
        .bg-emerald-primary {
          background-color: var(--emerald-primary);
        }
        
        .bg-medium-sea-green {
          background-color: var(--medium-sea-green);
        }
        
        .bg-lime-highlight {
          background-color: var(--lime-highlight);
        }
        
        .text-emerald-primary {
          color: var(--emerald-primary);
        }
        
        .from-lime-highlight\\/20 {
          --tw-gradient-from: rgba(174, 213, 129, 0.2);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(174, 213, 129, 0));
        }
        
        .to-emerald-primary\\/20 {
          --tw-gradient-to: rgba(46, 125, 50, 0.2);
        }
        
        .from-lime-highlight\\/30 {
          background-color: rgba(174, 213, 129, 0.3);
        }
        
        .from-emerald-primary\\/30 {
          background-color: rgba(46, 125, 50, 0.3);
        }
        
        .text-charcoal\\/80 {
          color: rgba(33, 33, 33, 0.8);
        }
        
        .hover\\:text-emerald-primary:hover {
          color: var(--emerald-primary);
        }
        
        .group:hover .group-hover\\:text-emerald-primary {
          color: var(--emerald-primary);
        }
        
        .group:hover .group-hover\\:rotate-6 {
          transform: rotate(6deg);
        }
      `}</style>

      <div className="min-h-screen bg-honeydew">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-8 tracking-wide">INITIATIVES</h1>
            <div className="w-24 h-1 bg-emerald-primary mx-auto mb-12"></div>
            <p className="text-lg md:text-xl text-charcoal max-w-4xl mx-auto leading-relaxed">
              To fulfill our vision to build an ecosystem where networking and entrepreneurial mindset are encouraged,
              we have conceptualized and are successfully running the following initiatives to help future entrepreneurs
              in their entrepreneurial journey.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon
              return (
                <div
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 bg-white border-0 shadow-lg hover:shadow-xl overflow-hidden rounded-lg"
                >
                  <div className="p-0">
                    {/* 3D Icon Section */}
                    <div className="relative h-48 bg-gradient-to-br from-lime-highlight/20 to-emerald-primary/20 flex items-center justify-center overflow-hidden">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${initiative.color} rounded-2xl ${initiative.shadowColor} shadow-2xl transform rotate-12 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-lime-highlight/30 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-4 h-4 bg-emerald-primary/30 rounded-full"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-emerald-primary transition-colors">
                        {initiative.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-medium-sea-green mb-4"></div>
                      <p className="text-charcoal/80 text-sm leading-relaxed">{initiative.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </div>
    </>
  )
}
