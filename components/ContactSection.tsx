"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "@/content/content.config";
import * as LucideIcons from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    inquiryType: CONTACT_CONTENT.form.inquiryTypeOptions[0],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.company.trim()) newErrors.company = "Company/Organisation is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData); // TODO: connect to API endpoint
      // Reset form or show success message if needed
    }
  };

  return (
    <section id="contact" className="bg-primary py-section">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="text-white"
          >
            <h2 className="text-[40px] font-bold leading-tight">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="text-white opacity-70 text-[16px] mt-[20px] max-w-md">
              {CONTACT_CONTENT.subtext}
            </p>

            <div className="mt-[32px] space-y-[16px]">
              {CONTACT_CONTENT.details.map((detail, index) => {
                const IconComponent = (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[detail.icon];
                return (
                  <div key={index} className="flex items-center gap-[12px] first:mt-[32px] mt-[16px]">
                    <div className="w-[24px] h-[24px] flex items-center justify-center">
                      {IconComponent && <IconComponent className="text-accent" size={24} />}
                    </div>
                    <div>
                      <p className="text-white text-[14px] font-normal">
                        <span className="text-white opacity-70 block text-[12px] uppercase font-semibold tracking-wider">{detail.label}</span>
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.15 }}
            className="bg-white rounded-card p-[32px] shadow-contact"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-text-primary text-[14px] font-semibold mb-2">
                  {CONTACT_CONTENT.form.fullNameLabel}
                </label>
                <input
                  type="text"
                  placeholder={CONTACT_CONTENT.form.fullNamePlaceholder}
                  className={`w-full border ${errors.fullName ? "border-red-500" : "border-border"} rounded-btn p-[12px_16px] text-text-primary placeholder-text-secondary text-[14px] focus:outline-none focus:border-accent`}
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({...formData, fullName: e.target.value});
                    if (errors.fullName) setErrors({...errors, fullName: ""});
                  }}
                />
                {errors.fullName && <p className="text-red-500 text-[12px] mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-text-primary text-[14px] font-semibold mb-2">
                  {CONTACT_CONTENT.form.companyLabel}
                </label>
                <input
                  type="text"
                  placeholder={CONTACT_CONTENT.form.companyPlaceholder}
                  className={`w-full border ${errors.company ? "border-red-500" : "border-border"} rounded-btn p-[12px_16px] text-text-primary placeholder-text-secondary text-[14px] focus:outline-none focus:border-accent`}
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({...formData, company: e.target.value});
                    if (errors.company) setErrors({...errors, company: ""});
                  }}
                />
                {errors.company && <p className="text-red-500 text-[12px] mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="block text-text-primary text-[14px] font-semibold mb-2">
                  {CONTACT_CONTENT.form.inquiryTypeLabel}
                </label>
                <select
                  className="w-full border border-border rounded-btn p-[12px_16px] text-text-primary text-[14px] focus:outline-none focus:border-accent bg-white"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                >
                  {CONTACT_CONTENT.form.inquiryTypeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-text-primary text-[14px] font-semibold mb-2">
                  {CONTACT_CONTENT.form.messageLabel}
                </label>
                <textarea
                  rows={4}
                  placeholder={CONTACT_CONTENT.form.messagePlaceholder}
                  className={`w-full border ${errors.message ? "border-red-500" : "border-border"} rounded-btn p-[12px_16px] text-text-primary placeholder-text-secondary text-[14px] focus:outline-none focus:border-accent`}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({...formData, message: e.target.value});
                    if (errors.message) setErrors({...errors, message: ""});
                  }}
                />
                {errors.message && <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                type="submit"
                className="w-full bg-accent text-white text-[16px] font-semibold py-[16px] rounded-btn"
              >
                {CONTACT_CONTENT.form.submitButton}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
