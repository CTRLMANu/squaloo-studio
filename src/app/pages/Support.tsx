import { Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    console.log('Form submitted:', formData);
    alert('Thank you for your message! A response will be sent soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const faqs = [
    {
      question: 'How does Hue of Year work?',
      answer: 'Hue of Year is a daily reflection app. Each evening, log your mood (Struggling, Okay, or Thriving), energy level, and one daily win. Optionally set a task for tomorrow. Each mood is assigned a color: green for thriving, amber for okay, red for struggling. Over time, these colors fill a 365-day calendar grid, creating a visual representation of your emotional year.',
    },
    {
      question: 'When should I log my daily reflection?',
      answer: 'The app is designed for evening reflection. A daily reminder notification can be set (default is 9PM) to prompt logging at the end of each day. The notification is automatically skipped if already logged that day.',
    },
    {
      question: 'What happens if I miss a day?',
      answer: 'Missed days appear as neutral/empty squares in the calendar grid. There are no penalties—the app focuses on reflection over perfection. Simply continue logging when ready.',
    },
    {
      question: 'How does task accountability work?',
      answer: 'When setting a task for tomorrow in the Prism view, the next day\'s evening log will begin with an accountability check asking if the task was completed. If not completed, the app asks for a brief reason and offers to carry it forward to the next day. Task completion data is tracked in the Echo analytics view.',
    },
    {
      question: 'What data does the app collect?',
      answer: 'All data is stored locally on the device. This includes daily logs (mood, energy, wins, tasks), saved tasks, and app preferences. No personal information, location data, or usage analytics are collected or transmitted. There are no external servers or cloud sync.',
    },
    {
      question: 'Can I export my data?',
      answer: 'Currently the app stores all data locally. Data remains accessible through the calendar and analytics views. Future updates may include export functionality.',
    },
    {
      question: 'How do I delete my data?',
      answer: 'Since all data is stored locally on the device with no account system, simply deleting the app removes all associated data permanently. There is no data stored on external servers to delete.',
    },
    {
      question: 'What are the three main views?',
      answer: 'Calendar shows the full year grid of color-coded days. Prism is the forward-looking view for setting tomorrow\'s task. Echo is the backward-looking analytics view showing mood distribution, energy patterns, task completion rates, and correlations between task completion and mood.',
    },
    {
      question: 'Do widgets update automatically?',
      answer: 'Yes. Home screen and lock screen widgets display the year grid, today\'s mood (if logged), and today\'s task. They update after each log entry, though iOS may take a few minutes to refresh.',
    },
    {
      question: 'Is Hue of Year available on Android?',
      answer: 'Currently the app is iOS only. There are no plans for Android at this time.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hue of Year Support
            </span>
          </h1>
          <p className="text-xl text-white/70">
            Get in touch or find answers to common questions
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl">Contact</h2>
                <p className="text-white/70">Send a message for support or feedback</p>
              </div>
            </div>

            <div className="mb-8">
              <a
                href="mailto:ossannam@icloud.com"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                <span>ossannam@icloud.com</span>
              </a>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                    placeholder="Describe your question or feedback..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70 text-lg">
              Find quick answers to common questions about Hue of Year
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors">
                    <span className="text-left text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}