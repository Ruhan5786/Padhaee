// Subjects data for each semester with textbook links
        const subjectsData = {
            "1st Semester": [
                { name: "English Communication", link: "https://drive.google.com/file/d/1E-uiYxUo_0zWDQTD1F40xkKaHp1G8BqM/view?usp=drive_link" },
                { name: "Mathematics For computers", link: "https://drive.google.com/file/d/1xR542c3EDjzEc_5zpBset5ErISU4qkep/view?usp=drive_link" },
                { name: "Problem solving using C", link: "https://drive.google.com/file/d/1IjUz_IKKAPO6u342YLyUGruzpnMeGnwh/view?usp=drive_link" },
                { name: "Programming using C++", link: "https://drive.google.com/file/d/1ea43AJrhwXBkPwBXE_pXIG0C9aotIY5Y/view?usp=drive_link" }
            ],

            "2nd Semester": [
                { name: "Statistics", link: "https://drive.google.com/file/d/1HPk5uLy_9LFgtW2x5L1g_t5m_nSJm3lL/view?usp=drive_link" },
                { name: "Data Structures using c++", link: "https://drive.google.com/file/d/1zPu-51ZxInB6BSHTWdbv0r0OWkpzQ7gV/view?usp=drive_link" },
                { name: "Computer Networks", link: "https://drive.google.com/file/d/1etF1aCsdaVM17AeDJtAR5JT9lh2TR59m/view?usp=drive_link" },
                { name: "Environmental Studies", link: "https://drive.google.com/file/d/1WbxXTFkkFg3LMQ8TIB-Nb2HZ_-vDIJ4X/view?usp=drive_link" }
            ],

            "3rd Semester": [
                { name: "Database management system", link: "https://drive.google.com/file/d/1D6TK2ewzTQnMYzQGTL29m92QBro3AVHZ/view?usp=drive_link" },
                { name: "Operating System", link: "https://drive.google.com/file/d/1ICdd7fONpIvabWmKMFVcpx3jHmFi_n9h/view?usp=drive_link" },
                { name: "Web Technologies", link: "https://drive.google.com/file/d/1yrxAqYkpDG4XinsB7oDZ61v-QktWTy1o/view?usp=drive_link" },
                { name: "Python Programming", link: "https://drive.google.com/file/d/1loCK9si08ojaqzNcrGwPK5fPFOEZm0Fh/view?usp=drive_link" }
            ],

            "4th Semester": [
                { name: "Software engineering", link: "https://drive.google.com/file/d/1UbLiBAyrJu9jQBuL35g4IroT7Pj7sqS0/view?usp=drive_link" },
                { name: "Computer System Architecure", link: "https://drive.google.com/file/d/1dqUoJk0jFnmgqQS0LLsMNW8zJnYi7HOc/view?usp=drive_link" },
                { name: "Java Programming", link: "https://drive.google.com/file/d/1K4v9DO6TnCFprCGa_X5dYn29DwWq1x9a/view?usp=drive_link" },
                { name: "Financial and Investment Skills", link: "https://drive.google.com/file/d/1ybHToL0BQ73Zaqsi_zEVvmRae7PdQIMD/view?usp=drive_link" }
            ],

            "5th Semester": [
                { name: "Quantative Aptitude", link: "https://drive.google.com/file/d/1knsDSQhnVVhHyR4mhhyyXBmnTXECFdC8/view?usp=drive_link" },
                { name: "E Commerce Technologies", link: "https://drive.google.com/file/d/1xcJglO0xs-uy8JmDGcv_ZhXjX_Dvq9xs/view?usp=drive_link" },
                { name: "Advance Java", link: "https://drive.google.com/file/d/1JS5SyMah7KbtgYNWm0Sd8aK_tp51_7SQ/view?usp=drive_link" },
                { name: "Linux Administration", link: "https://drive.google.com/file/d/1hBnIXC8bnjKM0TxkhNX6sDfU5Aao8CZ0/view?usp=drive_link" }
            ],

            "6th Semester": [
                { name: "Android Programming", link: "https://drive.google.com/file/d/1ZVSx-rUHuJ4tYvvRzb3Rt-VIAJOmMjDB/view?usp=drive_link" },
                { name: "PHP Programming", link: "https://drive.google.com/file/d/1RoM47iqAbq7DexamGbjudRXddVMYrQPK/view?usp=drive_link" },
                { name: "Personality  and career skills", link: "https://drive.google.com/file/d/14IR34t5L5Qz1dZIfQEPTwkTMY-IpJzlw/view?usp=drive_link" }
            ]
        };

        const modal = document.getElementById('textbookModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const closeModalBtn = document.querySelector('.close-modal');

        function openModal(semesterName) {
            const subjects = subjectsData[semesterName];
            if (subjects) {
                modalTitle.textContent = `${semesterName} - Textbooks`;
                modalBody.innerHTML = '';
                
                subjects.forEach(subject => {
                    const subjectItem = document.createElement('div');
                    subjectItem.className = 'subject-item';
                    subjectItem.innerHTML = `
                        <span class="subject-name">${subject.name}</span>
                        <a href="${subject.link}" target="_blank" class="download-subject">📥 Download</a>
                    `;
                    modalBody.appendChild(subjectItem);
                });
                
                modal.style.display = 'flex';
            }
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        // Add click event to all textbook cards
        const textbookLinks = document.querySelectorAll('.textbook-link');
        textbookLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const semesterName = this.getAttribute('data-sem-name');
                
                // Create ripple effect on the card
                const card = this.querySelector('.textbooks');
                const ripple = document.createElement('span');
                const rect = card.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add('ripple-effect');
                card.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 500);
                
                setTimeout(() => {
                    openModal(semesterName);
                }, 150);
            });
        });

        closeModalBtn.addEventListener('click', closeModal);
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Animation on page load
        window.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.textbooks');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });

        console.log("%c📚 Padhaee - Textbooks ready! Click on any semester to view subjects 🎓", "color: #FFC107; font-size: 14px; font-weight: bold;");