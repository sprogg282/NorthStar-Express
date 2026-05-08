const WEBHOOK_URL = "https://discord.com/api/webhooks/1457053081102712863/FGDmkvmUbzufGHd_ofgu_Es35WyPMsEhmRkyIar1O7e-bm2o4nc5m8V8fV1LAX70Wevo";
        const VTC_LINK = "https://truckersmp.com/vtc/86341";
        const DISCORD_LINK = "https://discord.gg/2GNHKbJeDM";

        function showPage(pageId, updateHash = true) {
            const target = document.getElementById(pageId);

            if (!target || !target.classList.contains('page-section')) {
                return;
            }

            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => section.classList.remove('active'));
            
            setTimeout(() => {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });

                if (updateHash) {
                    history.replaceState(null, '', `#${pageId}`);
                }

                closeMobileMenu();
            }, 50);
        }

        function closeMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const toggle = document.getElementById('mobile-menu-toggle');
            const icon = document.getElementById('mobile-menu-icon');

            if (!menu || !toggle || !icon) {
                return;
            }

            menu.classList.add('hidden');
            toggle.setAttribute('aria-expanded', 'false');
            icon.innerHTML = `
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            `;
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const toggle = document.getElementById('mobile-menu-toggle');
            const icon = document.getElementById('mobile-menu-icon');

            if (!menu || !toggle || !icon) {
                return;
            }

            const isOpen = !menu.classList.contains('hidden');
            menu.classList.toggle('hidden', isOpen);
            toggle.setAttribute('aria-expanded', String(!isOpen));
            icon.innerHTML = isOpen
                ? `
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                `
                : `
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                `;
        }

        function handleRoleChange(value) {
            const dynamicSection = document.getElementById('dynamicSection');
            const dynamicLabel = document.getElementById('dynamicLabel');
            const driverSpecifics = document.getElementById('driverSpecifics');
            const driverAgreement = document.getElementById('driverAgreement');
            const driverActivity = document.getElementById('driverActivity');
            const formExperience = document.getElementById('formExperience');
            
            if (value) {
                dynamicLabel.innerText = `Why would you like to become a ${value}?`;
                dynamicSection.classList.remove('hidden');
                setTimeout(() => {
                    dynamicSection.classList.remove('scale-95', 'opacity-0');
                    dynamicSection.classList.add('scale-100', 'opacity-100');
                }, 10);

                if (value === 'Driver') {
                    driverSpecifics.classList.remove('hidden');
                    driverAgreement.required = true;
                    driverActivity.required = true;
                    setTimeout(() => {
                        driverSpecifics.classList.remove('scale-95', 'opacity-0');
                        driverSpecifics.classList.add('scale-100', 'opacity-100');
                    }, 10);
                } else {
                    driverSpecifics.classList.add('scale-95', 'opacity-0');
                    driverSpecifics.classList.remove('scale-100', 'opacity-100');
                    driverAgreement.required = false;
                    driverActivity.required = false;
                    setTimeout(() => {
                        driverSpecifics.classList.add('hidden');
                    }, 500);
                }
            }
        }

        let isDark = true;
        function toggleTheme() {
            const body = document.body;
            const icon = document.getElementById('theme-icon');
            isDark = !isDark;
            
            if (isDark) {
                body.classList.replace('light-theme', 'dark-theme');
                icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
            } else {
                body.classList.replace('dark-theme', 'light-theme');
                icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
            }
        }

        function confirmDiscordApplication() {
            const modal = document.getElementById('discordApplicationModal');
            const continueBtn = document.getElementById('discordModalContinue');
            const cancelBtn = document.getElementById('discordModalCancel');

            if (!modal || !continueBtn || !cancelBtn) {
                return Promise.resolve(true);
            }

            modal.classList.remove('hidden');
            modal.classList.add('flex');

            return new Promise((resolve) => {
                const closeModal = (result) => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    continueBtn.removeEventListener('click', handleContinue);
                    cancelBtn.removeEventListener('click', handleCancel);
                    resolve(result);
                };

                const handleContinue = () => {
                    window.open(DISCORD_LINK, '_blank');
                    closeModal(true);
                };

                const handleCancel = () => closeModal(false);

                continueBtn.addEventListener('click', handleContinue);
                cancelBtn.addEventListener('click', handleCancel);
            });
        }

        let discordConfirmedForCurrentApplication = false;

        document.getElementById('applyForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const errorMsg = document.getElementById('formErrorMessage');

            if (!discordConfirmedForCurrentApplication) {
                const discordConfirmed = await confirmDiscordApplication();

                if (!discordConfirmed) {
                    errorMsg.innerText = "Application not submitted. Please join our Discord before applying.";
                    errorMsg.classList.remove('hidden');
                    return;
                }

                discordConfirmedForCurrentApplication = true;
            }
            
            // Gather data
            const name = document.getElementById('formName').value;
            const discord = document.getElementById('formDiscord').value;
            const inGame = document.getElementById('formInGame').value;
            const tmpLink = document.getElementById('formTMP').value;
            const role = document.getElementById('roleSelect').value;
            const experience = document.getElementById('formExperience').value;
            
            // Driver-only data
            const activity = document.getElementById('driverActivity').value;
            const agreement = document.getElementById('driverAgreement').checked;

            if (role === 'Driver' && !agreement) {
                errorMsg.innerText = "Error: You must accept the Driver Requirements.";
                errorMsg.classList.remove('hidden');
                return;
            }

            btn.innerText = "TRANSMITTING DATA...";
            btn.disabled = true;
            errorMsg.classList.add('hidden');

            // --- CUSTOMIZABLE EMBED CONFIG ---
            const embedConfigs = {
                "Driver": {
                    title: "🚛 New Driver Application",
                    color: 7648507, // #74B6FB
                    description: "A new candidate is seeking to join the fleet."
                },
                "Community Manager": {
                    title: "🤝 Community Manager Inquiry",
                    color: 16753920, // Orange
                    description: "Interest in management and community engagement."
                },
                "Discord Moderation": {
                    title: "🛡️ Staff Application: Moderation",
                    color: 3066993, // Green
                    description: "Candidate applying for the Discord safety team."
                },
                "Event Team": {
                    title: "📅 Event Staff Application",
                    color: 10181046, // Purple
                    description: "Candidate looking to organize convoys and activities."
                }
            };

            const config = embedConfigs[role] || { title: "New Application", color: 7648507, description: "New system application." };

            // Build Fields Array
            const fields = [
                { name: "Name", value: name, inline: true },
                { name: "Discord", value: discord, inline: true },
                { name: "In-Game Name", value: inGame, inline: true },
                { name: "TruckersMP Profile", value: tmpLink },
                { name: "Role Applied For", value: `**${role}**` },
                { name: "Experience/Motivation", value: experience }
            ];

            // Add Driver Specifics to Embed if needed
            if (role === 'Driver') {
                fields.push({ name: "Activity Level", value: `${activity}/10`, inline: true });
                fields.push({ name: "Accepted Requirements", value: "✅ Yes", inline: true });
            }

            const payload = {
                username: "NorthStar HR Bot",
                avatar_url: "https://truckersmp.com/vtc/86341/logo",
                embeds: [{
                    title: config.title,
                    description: config.description,
                    color: config.color,
                    fields: fields,
                    timestamp: new Date().toISOString(),
                    footer: { text: "NorthStar Express Recruitment Division" }
                }]
            };

            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    btn.innerText = "APPLICATION FILED SUCCESSFULLY";
                    btn.style.backgroundColor = "#10b981";
                    btn.style.color = "#fff";
                    
                    const form = document.getElementById('applyForm');
                    
                    // Specific message for Drivers to redirect to TruckersMP
                    let successContent = `
                        <div class="text-center py-20 space-y-6">
                            <div class="inline-block p-6 bg-emerald-500/10 rounded-full">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </div>
                            <h2 class="text-3xl font-bold">Step 1 Complete!</h2>
                            <p class="secondary-text">Your background information has been sent to our Discord HR team.</p>
                    `;

                    if (role === 'Driver') {
                        successContent += `
                            <div class="p-6 bg-[#74B6fB]/5 border border-[#74B6fB]/20 rounded-xl mt-8">
                                <h3 class="text-xl font-bold mb-3 text-[#74B6fB]">Final Step: Apply on TruckersMP</h3>
                                <p class="text-sm secondary-text mb-6 leading-relaxed">To officially join our fleet on the road, you <strong>must</strong> also submit an application via our official TruckersMP VTC page.</p>
                                <a href="${VTC_LINK}" target="_blank" class="inline-block btn-corporate px-8 py-3 rounded-lg uppercase text-xs font-bold tracking-widest shadow-lg">Complete TMP Application</a>
                            </div>
                        `;
                    } else {
                        successContent += `
                            <p class="secondary-text">Our HR team will reach out to you via Discord within 48 hours for your next steps.</p>
                        `;
                    }

                    successContent += `
                            <button onclick="showPage('home')" class="text-[#74B6fB] font-bold uppercase text-xs tracking-widest pt-8 block mx-auto">Return Home</button>
                        </div>
                    `;

                    form.innerHTML = successContent;
                    
                    // Auto-open TruckersMP in a new tab for Drivers after 2 seconds
                    if (role === 'Driver') {
                        setTimeout(() => {
                           window.open(VTC_LINK, '_blank');
                        }, 2000);
                    }

                } else {
                    throw new Error("Failed to send webhook");
                }
            } catch (err) {
                console.error(err);
                btn.disabled = false;
                btn.innerText = "RETRY SUBMISSION";
                errorMsg.innerText = "Communication error. Please try again or contact a manager on Discord.";
                errorMsg.classList.remove('hidden');
            }
        });

        window.showPage = showPage;
        window.handleRoleChange = handleRoleChange;
        window.toggleTheme = toggleTheme;
        window.toggleMobileMenu = toggleMobileMenu;

        window.addEventListener('hashchange', () => {
            const pageId = window.location.hash.replace('#', '') || 'home';
            showPage(pageId, false);
        });

        const initialPage = window.location.hash.replace('#', '');
        if (initialPage) {
            showPage(initialPage, false);
        }
