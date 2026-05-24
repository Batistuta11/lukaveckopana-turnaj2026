"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Chyba při odesílání");
        return;
      }

      setMessage("Přihláška byla úspěšně odeslána. Děkujeme.");
      setFormData({
        teamName: "",
        captainName: "",
        email: "",
        phone: "",
        website: "",
      });
    } catch {
      setError("Chyba při odesílání. Zkus to později.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-slate-50 p-6">
      <h3 className="text-xl font-black text-slate-950">Přihláška mužstva</h3>
      <p className="mt-2 text-slate-700">
        Vyplň formulář a pošli nám přihlášku na turnaj.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="teamName" className="block text-sm font-black text-slate-700">
            Název mužstva *
          </label>
          <input
            id="teamName"
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            required
            maxLength={80}
            autoComplete="organization"
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            placeholder="Zadej název mužstva"
          />
        </div>

        <div>
          <label htmlFor="captainName" className="block text-sm font-black text-slate-700">
            Kapitán (jméno a příjmení) *
          </label>
          <input
            id="captainName"
            type="text"
            name="captainName"
            value={formData.captainName}
            onChange={handleChange}
            required
            maxLength={80}
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            placeholder="Zadej jméno a příjmení"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-black text-slate-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={120}
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            placeholder="Zadej email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-black text-slate-700">
            Mobilní telefon *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={20}
            autoComplete="tel"
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            placeholder="Zadej telefon"
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Web</label>
          <input
            id="website"
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-blue-700 px-6 py-3 text-sm font-black text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {loading ? "Odesílání..." : "Odeslat přihlášku"}
        </button>
      </form>

      {message && (
        <div role="status" className="mt-4 rounded-lg bg-green-50 p-4 text-green-700">
          {message}
        </div>
      )}

      {error && (
        <div role="alert" className="mt-4 rounded-lg bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}
    </div>
  );
}
