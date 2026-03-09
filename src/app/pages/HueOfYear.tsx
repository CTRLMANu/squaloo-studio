import { ArrowRight, Download, Calendar, BarChart3, Target, Sparkles, Smartphone, Bell } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function HueOfYear() {
  const features = [
    {
      icon: Calendar,
      title: 'Daily Reflection',
      description: 'Log your mood, energy level, and daily win each evening. Set one meaningful task for tomorrow.',
    },
    {
      icon: Sparkles,
      title: 'Color-Coded Calendar',
      description: 'Watch your year unfold as a beautiful grid of 365 colored days—each mood creates a unique hue.',
    },
    {
      icon: BarChart3,
      title: 'Emotional Insights',
      description: 'Discover patterns in your mood, energy, and task completion through visual analytics and trends.',
    },
    {
      icon: Target,
      title: 'Task Accountability',
      description: 'Track completion rates and see how finishing tasks correlates with better mood outcomes.',
    },
    {
      icon: Smartphone,
      title: 'Home & Lock Screen Widgets',
      description: 'Keep your year visible with beautiful widgets showing your color grid, today\'s mood, and your daily task.',
    },
    {
      icon: Bell,
      title: 'Evening Reminders',
      description: 'Optional daily notification at 9PM (or your chosen time) to complete your reflection and close your day.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />
        
        {/* Color Blobs */}
        <motion.div
          className="absolute top-40 left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-60 right-40 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-5 py-3 border border-white/10">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Available on iOS</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Hue of Year
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto"
          >
            Transform your daily reflections into a stunning visual journey. 
            Each evening log becomes a color. 365 days create your emotional landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full transition-all">
              <Download className="w-5 h-5" />
              <span>Download on App Store</span>
            </button>
            <Link
              to="/hue-of-year/support"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/20 transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
            <div className="relative max-w-xs mx-auto">
              <div className="w-full h-[600px] rounded-3xl shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-white/50">App Screenshot</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              How It Works
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A simple evening routine that creates powerful insights over time
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Evening Check-In',
                description: 'Each evening, complete a short reflection: log your mood (Struggling, Okay, or Thriving), energy level (Low, Medium, or High), and one thing that went right today.',
              },
              {
                step: '2',
                title: 'Set Tomorrow\'s Focus',
                description: 'Choose one meaningful task for tomorrow. The app gently holds accountability—if you set a task today, tomorrow\'s log will ask if you completed it.',
              },
              {
                step: '3',
                title: 'Watch Your Year Unfold',
                description: 'Every mood creates a color: green for thriving, amber for okay, red for struggling. Over time, these colors fill a 365-day calendar grid revealing patterns you never noticed.',
              },
              {
                step: '4',
                title: 'Discover Insights',
                description: 'Explore analytics showing mood distribution, energy trends, task completion rates, and how completing tasks correlates with better mood outcomes.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-white/10">
                  <span className="text-xl text-purple-400">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Features
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Everything needed to track your journey and understand your patterns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-3xl md:text-4xl mb-4">
                Start Your Color Journey
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Download Hue of Year and begin transforming daily reflections into meaningful patterns
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button className="flex items-center gap-2 bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full transition-all">
                  <Download className="w-5 h-5" />
                  <span>Download Now</span>
                </button>
                <Link
                  to="/hue-of-year/support"
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                >
                  <span>Support</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}