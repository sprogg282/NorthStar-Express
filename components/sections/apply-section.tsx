"use client";

import { useState } from "react";

const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1457053081102712863/FGDmkvmUbzufGHd_ofgu_Es35WyPMsEhmRkyIar1O7e-bm2o4nc5m8V8fV1LAX70Wevo";
const VTC_LINK = "https://truckersmp.com/vtc/86341";

export function ApplySection() {
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submittedRole, setSubmittedRole] = useState("");

  const handleRoleChange = (value: string) => {
    setRole(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const discord = formData.get("discord") as string;
    const inGame = formData.get("inGame") as string;
    const tmpLink = formData.get("tmpLink") as string;
    const experience = formData.get("experience") as string;
    const activity = formData.get("activity") as string;
    const agreement = formData.get("agreement") === "on";

    if (role === "Driver" && !agreement) {
      setError("You must accept the Driver Requirements.");
      return;
    }

    setIsSubmitting(true);

    const embedConfigs: Record<
      string,
      { title: string; color: number; description: string }
    > = {
      Driver: {
        title: "New Driver Application",
        color: 7648507,
        description: "A new candidate is seeking to join the fleet.",
      },
      "Community Manager": {
        title: "Community Manager Inquiry",
        color: 16753920,
        description: "Interest in management and community engagement.",
      },
      "Discord Moderation": {
        title: "Staff Application: Moderation",
        color: 3066993,
        description: "Candidate applying for the Discord safety team.",
      },
      "Event Team": {
        title: "Event Staff Application",
        color: 10181046,
        description: "Candidate looking to organize convoys and activities.",
      },
    };

    const config = embedConfigs[role] || {
      title: "New Application",
      color: 7648507,
      description: "New system application.",
    };

    const fields = [
      { name: "Name", value: name, inline: true },
      { name: "Discord", value: discord, inline: true },
      { name: "In-Game Name", value: inGame, inline: true },
      { name: "TruckersMP Profile", value: tmpLink },
      { name: "Role Applied For", value: `**${role}**` },
      { name: "Experience/Motivation", value: experience },
    ];

    if (role === "Driver") {
      fields.push({ name: "Activity Level", value: `${activity}/10`, inline: true });
      fields.push({ name: "Accepted Requirements", value: "Yes", inline: true });
    }

    const payload = {
      username: "NorthStar HR Bot",
      avatar_url: "https://truckersmp.com/vtc/86341/logo",
      embeds: [
        {
          title: config.title,
          description: config.description,
          color: config.color,
          fields: fields,
          timestamp: new Date().toISOString(),
          footer: { text: "NorthStar Express Recruitment Division" },
        },
      ],
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmittedRole(role);
        setIsSuccess(true);
        if (role === "Driver") {
          setTimeout(() => {
            window.open(VTC_LINK, "_blank");
          }, 2000);
        }
      } else {
        throw new Error("Failed to send webhook");
      }
    } catch {
      setError(
        "Communication error. Please try again or contact a manager on Discord."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="apply" className="container mx-auto px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-20 space-y-6">
            <div className="inline-block p-6 bg-emerald-500/10 rounded-full">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Step 1 Complete!</h2>
            <p className="text-muted-foreground">
              Your background information has been sent to our Discord HR team.
            </p>

            {submittedRole === "Driver" ? (
              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl mt-8">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  Final Step: Apply on TruckersMP
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  To officially join our fleet on the road, you{" "}
                  <strong>must</strong> also submit an application via our
                  official TruckersMP VTC page.
                </p>
                <a
                  href={VTC_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-corporate px-8 py-3 rounded-lg uppercase text-xs font-bold tracking-widest shadow-lg"
                >
                  Complete TMP Application
                </a>
              </div>
            ) : (
              <p className="text-muted-foreground">
                Our HR team will reach out to you via Discord within 48 hours
                for your next steps.
              </p>
            )}

            <button
              onClick={() => window.location.reload()}
              className="text-primary font-bold uppercase text-xs tracking-widest pt-8 block mx-auto"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="container mx-auto px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Official Application</h2>
          <p className="text-muted-foreground">
            Join NorthStar Express. Please provide accurate information to
            expedite your background check.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="card p-8 rounded-xl space-y-6">
            <h3 className="text-lg font-bold border-b border-border pb-4 mb-2 flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3" /> Personal
              Identifiers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Name you want to be called
                </label>
                <input
                  type="text"
                  name="name"
                  className="input-field"
                  placeholder="First Last"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Discord Username
                </label>
                <input
                  type="text"
                  name="discord"
                  className="input-field"
                  placeholder="username#0000"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  In-Game Username
                </label>
                <input
                  type="text"
                  name="inGame"
                  className="input-field"
                  placeholder="Steam/In-game Display"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  TruckersMP Profile Link
                </label>
                <input
                  type="url"
                  name="tmpLink"
                  className="input-field"
                  placeholder="https://truckersmp.com/user/..."
                  required
                />
              </div>
            </div>
          </div>

          <div className="card p-8 rounded-xl space-y-6">
            <h3 className="text-lg font-bold border-b border-border pb-4 mb-2 flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3" /> Role
              Specialization
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                Select Department
              </label>
              <select
                className="input-field"
                required
                value={role}
                onChange={(e) => handleRoleChange(e.target.value)}
              >
                <option value="" disabled>
                  Choose a career path...
                </option>
                <option value="Driver">Driver</option>
                <option value="Community Manager">Community Manager</option>
                <option value="Discord Moderation">Discord Moderation</option>
                <option value="Event Team">Event Team</option>
              </select>
            </div>

            {role && (
              <div className="transition-all duration-500">
                <div className="flex flex-col gap-2 pt-4">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-primary">
                    Why would you like to become a {role}?
                  </label>
                  <textarea
                    name="experience"
                    className="input-field h-40 resize-none"
                    placeholder="Describe your motivations and relevant experience for this specific role..."
                    required
                  />
                </div>
              </div>
            )}

            {role === "Driver" && (
              <div className="space-y-6 pt-6 mt-4 border-t border-border">
                <div className="p-5 bg-white/5 border border-primary/20 rounded-lg space-y-4">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest">
                    Driver Requirements
                  </h4>
                  <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside">
                    <li>
                      Must own a legitimate copy of Euro Truck Simulator 2 or
                      American Truck Simulator.
                    </li>
                    <li>Must have fewer than 3 active bans on TruckersMP.</li>
                    <li>Must be able to speak English (Fluent or not)</li>
                    <li>Must have a working microphone</li>
                    <li>Must have Discord</li>
                    <li>Have good communication skills</li>
                    <li>Must follow all TMP Rules</li>
                    <li>Be active in and around TMP</li>
                  </ul>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <input
                      type="checkbox"
                      name="agreement"
                      id="driverAgreement"
                      className="w-4 h-4 cursor-pointer accent-primary"
                    />
                    <label
                      htmlFor="driverAgreement"
                      className="text-xs font-bold cursor-pointer select-none"
                    >
                      I have read and accept the Driver Requirements
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    Activity Level (1-10)
                  </label>
                  <select name="activity" className="input-field" required>
                    <option value="" disabled selected>
                      How active are you? (10 = Daily)
                    </option>
                    <option value="1">1 - Very Low</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 - Moderate</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10 - Highly Active (Daily)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {error && (
              <p className="text-red-400 text-[11px] text-center font-bold">
                {error}
              </p>
            )}
            <p className="text-[10px] text-muted-foreground text-center italic">
              By clicking submit, you confirm that you have read our Terms of
              Service and are over the age of 13.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-corporate py-5 rounded uppercase text-sm tracking-widest font-extrabold disabled:opacity-50"
            >
              {isSubmitting
                ? "TRANSMITTING DATA..."
                : "Submit Official Application"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
