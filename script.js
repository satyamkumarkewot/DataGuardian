// DataGuardian Privacy Score Checker
class DataGuardian {
    constructor() {
        this.appDatabase = this.initializeAppDatabase();
        this.initEventListeners();
    }

    initEventListeners() {
        const searchBtn = document.getElementById('searchBtn');
        const appSearch = document.getElementById('appSearch');

        searchBtn.addEventListener('click', () => this.searchApp());
        appSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchApp();
            }
        });
    }

    initializeAppDatabase() {
        return {
            'facebook': {
                name: 'Facebook',
                category: 'Social Media',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'collected',
                    'Device Information': 'collected',
                    'Browsing History': 'collected',
                    'Photos and Videos': 'collected',
                    'Messages': 'collected',
                    'Biometric Data': 'collected',
                    'Financial Information': 'not-collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'used',
                    'Microphone': 'used',
                    'Location': 'used',
                    'Contacts': 'used',
                    'Storage': 'used',
                    'Phone': 'used',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'collected',
                    'Analytics companies': 'collected',
                    'Government agencies': 'linked',
                    'Social media partners': 'collected',
                    'Data brokers': 'collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'not-collected',
                    'Data anonymization': 'linked',
                    'User control over data': 'linked',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            },
            'instagram': {
                name: 'Instagram',
                category: 'Social Media',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'collected',
                    'Device Information': 'collected',
                    'Browsing History': 'collected',
                    'Photos and Videos': 'collected',
                    'Messages': 'collected',
                    'Biometric Data': 'collected',
                    'Financial Information': 'not-collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'used',
                    'Microphone': 'used',
                    'Location': 'used',
                    'Contacts': 'used',
                    'Storage': 'used',
                    'Phone': 'not-collected',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'collected',
                    'Analytics companies': 'collected',
                    'Government agencies': 'linked',
                    'Social media partners': 'collected',
                    'Data brokers': 'collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'not-collected',
                    'Data anonymization': 'linked',
                    'User control over data': 'linked',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            },
            'tiktok': {
                name: 'TikTok',
                category: 'Social Media',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/TikTok_logo.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'collected',
                    'Device Information': 'collected',
                    'Browsing History': 'collected',
                    'Photos and Videos': 'collected',
                    'Messages': 'collected',
                    'Biometric Data': 'collected',
                    'Financial Information': 'not-collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'used',
                    'Microphone': 'used',
                    'Location': 'used',
                    'Contacts': 'used',
                    'Storage': 'used',
                    'Phone': 'used',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'collected',
                    'Analytics companies': 'collected',
                    'Government agencies': 'collected',
                    'Social media partners': 'collected',
                    'Data brokers': 'collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'not-collected',
                    'Data anonymization': 'linked',
                    'User control over data': 'linked',
                    'Regular security audits': 'linked',
                    'GDPR compliance': 'linked'
                }
            },
            'whatsapp': {
                name: 'WhatsApp',
                category: 'Messaging',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'linked',
                    'Device Information': 'collected',
                    'Browsing History': 'not-collected',
                    'Photos and Videos': 'collected',
                    'Messages': 'collected',
                    'Biometric Data': 'not-collected',
                    'Financial Information': 'not-collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'used',
                    'Microphone': 'used',
                    'Location': 'linked',
                    'Contacts': 'used',
                    'Storage': 'used',
                    'Phone': 'used',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'not-collected',
                    'Analytics companies': 'linked',
                    'Government agencies': 'linked',
                    'Social media partners': 'collected',
                    'Data brokers': 'not-collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'collected',
                    'Data anonymization': 'collected',
                    'User control over data': 'collected',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            },
            'telegram': {
                name: 'Telegram',
                category: 'Messaging',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'linked',
                    'Device Information': 'collected',
                    'Browsing History': 'not-collected',
                    'Photos and Videos': 'collected',
                    'Messages': 'collected',
                    'Biometric Data': 'not-collected',
                    'Financial Information': 'not-collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'used',
                    'Microphone': 'used',
                    'Location': 'linked',
                    'Contacts': 'used',
                    'Storage': 'used',
                    'Phone': 'not-collected',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'not-collected',
                    'Analytics companies': 'not-collected',
                    'Government agencies': 'linked',
                    'Social media partners': 'not-collected',
                    'Data brokers': 'not-collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'collected',
                    'Data anonymization': 'collected',
                    'User control over data': 'collected',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            },
            'google': {
                name: 'Google',
                category: 'Search & Productivity',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'collected',
                    'Device Information': 'collected',
                    'Browsing History': 'collected',
                    'Photos and Videos': 'collected',
                    'Messages': 'collected',
                    'Biometric Data': 'collected',
                    'Financial Information': 'collected',
                    'Health Information': 'collected'
                },
                permissions: {
                    'Camera': 'used',
                    'Microphone': 'used',
                    'Location': 'used',
                    'Contacts': 'used',
                    'Storage': 'used',
                    'Phone': 'used',
                    'SMS': 'used',
                    'Calendar': 'used'
                },
                dataSharing: {
                    'Third-party advertisers': 'collected',
                    'Analytics companies': 'collected',
                    'Government agencies': 'collected',
                    'Social media partners': 'collected',
                    'Data brokers': 'collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'linked',
                    'Data anonymization': 'collected',
                    'User control over data': 'collected',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            },
            'youtube': {
                name: 'YouTube',
                category: 'Entertainment',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'collected',
                    'Device Information': 'collected',
                    'Browsing History': 'collected',
                    'Photos and Videos': 'collected',
                    'Messages': 'not-collected',
                    'Biometric Data': 'collected',
                    'Financial Information': 'collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'used',
                    'Microphone': 'used',
                    'Location': 'used',
                    'Contacts': 'not-collected',
                    'Storage': 'used',
                    'Phone': 'not-collected',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'collected',
                    'Analytics companies': 'collected',
                    'Government agencies': 'collected',
                    'Social media partners': 'collected',
                    'Data brokers': 'collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'not-collected',
                    'Data anonymization': 'collected',
                    'User control over data': 'collected',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            },
            'spotify': {
                name: 'Spotify',
                category: 'Music & Audio',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'collected',
                    'Device Information': 'collected',
                    'Browsing History': 'collected',
                    'Photos and Videos': 'not-collected',
                    'Messages': 'not-collected',
                    'Biometric Data': 'not-collected',
                    'Financial Information': 'collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'not-collected',
                    'Microphone': 'not-collected',
                    'Location': 'linked',
                    'Contacts': 'not-collected',
                    'Storage': 'used',
                    'Phone': 'not-collected',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'collected',
                    'Analytics companies': 'collected',
                    'Government agencies': 'linked',
                    'Social media partners': 'collected',
                    'Data brokers': 'collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'not-collected',
                    'Data anonymization': 'collected',
                    'User control over data': 'collected',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            },
            'netflix': {
                name: 'Netflix',
                category: 'Entertainment',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'collected',
                    'Device Information': 'collected',
                    'Browsing History': 'collected',
                    'Photos and Videos': 'not-collected',
                    'Messages': 'not-collected',
                    'Biometric Data': 'not-collected',
                    'Financial Information': 'collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'not-collected',
                    'Microphone': 'not-collected',
                    'Location': 'linked',
                    'Contacts': 'not-collected',
                    'Storage': 'used',
                    'Phone': 'not-collected',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'linked',
                    'Analytics companies': 'collected',
                    'Government agencies': 'linked',
                    'Social media partners': 'linked',
                    'Data brokers': 'not-collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'not-collected',
                    'Data anonymization': 'collected',
                    'User control over data': 'collected',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            },
            'uber': {
                name: 'Uber',
                category: 'Transportation',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png',
                dataCollection: {
                    'Personal Information': 'collected',
                    'Contact Information': 'collected',
                    'Location Data': 'collected',
                    'Device Information': 'collected',
                    'Browsing History': 'not-collected',
                    'Photos and Videos': 'not-collected',
                    'Messages': 'not-collected',
                    'Biometric Data': 'not-collected',
                    'Financial Information': 'collected',
                    'Health Information': 'not-collected'
                },
                permissions: {
                    'Camera': 'not-collected',
                    'Microphone': 'not-collected',
                    'Location': 'used',
                    'Contacts': 'not-collected',
                    'Storage': 'not-collected',
                    'Phone': 'used',
                    'SMS': 'not-collected',
                    'Calendar': 'not-collected'
                },
                dataSharing: {
                    'Third-party advertisers': 'collected',
                    'Analytics companies': 'collected',
                    'Government agencies': 'collected',
                    'Social media partners': 'not-collected',
                    'Data brokers': 'collected'
                },
                securityPrivacy: {
                    'End-to-end encryption': 'not-collected',
                    'Data anonymization': 'collected',
                    'User control over data': 'collected',
                    'Regular security audits': 'collected',
                    'GDPR compliance': 'collected'
                }
            }
        };
    }

    searchApp() {
        const searchTerm = document.getElementById('appSearch').value.toLowerCase().trim();
        
        if (!searchTerm) {
            this.showError('Please enter an app name');
            return;
        }

        this.showLoading();

        // Simulate API delay
        setTimeout(() => {
            const appData = this.findApp(searchTerm);
            if (appData) {
                this.displayResults(appData);
            } else {
                this.showNoResults();
            }
        }, 1000);
    }

    findApp(searchTerm) {
        // Direct match
        if (this.appDatabase[searchTerm]) {
            return this.appDatabase[searchTerm];
        }

        // Partial match
        for (const [key, app] of Object.entries(this.appDatabase)) {
            if (key.includes(searchTerm) || app.name.toLowerCase().includes(searchTerm)) {
                return app;
            }
        }

        return null;
    }

    showLoading() {
        document.getElementById('results').style.display = 'none';
        document.getElementById('noResults').style.display = 'none';
        
        const searchBtn = document.getElementById('searchBtn');
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Checking...';
        searchBtn.disabled = true;
    }

    hideLoading() {
        const searchBtn = document.getElementById('searchBtn');
        searchBtn.innerHTML = '<i class="fas fa-search"></i> Check Privacy';
        searchBtn.disabled = false;
    }

    displayResults(appData) {
        this.hideLoading();
        
        // Update app info
        document.getElementById('appName').textContent = appData.name;
        document.getElementById('appCategory').textContent = appData.category;
        document.getElementById('appIcon').src = appData.icon;
        document.getElementById('appIcon').alt = `${appData.name} Icon`;

        // Calculate privacy score
        const privacyScore = this.calculatePrivacyScore(appData);
        document.getElementById('privacyScore').textContent = privacyScore;
        document.getElementById('scoreLabel').textContent = this.getScoreLabel(privacyScore);

        // Update score circle color
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.style.background = this.getScoreColor(privacyScore);

        // Populate data collection
        this.populateDataSection('dataCollection', appData.dataCollection);
        this.populateDataSection('permissions', appData.permissions);
        this.populateDataSection('dataSharing', appData.dataSharing);
        this.populateDataSection('securityPrivacy', appData.securityPrivacy);

        // Generate recommendations
        this.generateRecommendations(appData, privacyScore);

        // Show results
        document.getElementById('results').style.display = 'block';
        document.getElementById('noResults').style.display = 'none';
    }

    populateDataSection(sectionId, data) {
        const section = document.getElementById(sectionId);
        section.innerHTML = '';

        for (const [item, status] of Object.entries(data)) {
            const dataItem = document.createElement('div');
            dataItem.className = 'data-item';
            
            dataItem.innerHTML = `
                <span class="item-name">${item}</span>
                <span class="item-status status-${status}">${this.getStatusText(status)}</span>
            `;
            
            section.appendChild(dataItem);
        }
    }

    getStatusText(status) {
        const statusMap = {
            'collected': 'Collected',
            'not-collected': 'Not Collected',
            'linked': 'Linked',
            'used': 'Used'
        };
        return statusMap[status] || status;
    }

    calculatePrivacyScore(appData) {
        let score = 100;
        
        // Deduct points for data collection
        for (const status of Object.values(appData.dataCollection)) {
            if (status === 'collected') score -= 8;
            else if (status === 'linked') score -= 4;
        }

        // Deduct points for permissions
        for (const status of Object.values(appData.permissions)) {
            if (status === 'used') score -= 5;
            else if (status === 'linked') score -= 2;
        }

        // Deduct points for data sharing
        for (const status of Object.values(appData.dataSharing)) {
            if (status === 'collected') score -= 10;
            else if (status === 'linked') score -= 5;
        }

        // Add points for security features
        for (const status of Object.values(appData.securityPrivacy)) {
            if (status === 'collected') score += 5;
            else if (status === 'linked') score += 2;
        }

        return Math.max(0, Math.min(100, score));
    }

    getScoreLabel(score) {
        if (score >= 80) return 'Excellent';
        if (score >= 60) return 'Good';
        if (score >= 40) return 'Fair';
        if (score >= 20) return 'Poor';
        return 'Very Poor';
    }

    getScoreColor(score) {
        if (score >= 80) return 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)';
        if (score >= 60) return 'linear-gradient(135deg, #74c0fc 0%, #339af0 100%)';
        if (score >= 40) return 'linear-gradient(135deg, #ffd43b 0%, #fab005 100%)';
        if (score >= 20) return 'linear-gradient(135deg, #ff8cc8 0%, #f06292 100%)';
        return 'linear-gradient(135deg, #ff6b6b 0%, #e55353 100%)';
    }

    generateRecommendations(appData, score) {
        const recommendations = [];
        
        if (score < 60) {
            recommendations.push('Consider using alternative apps with better privacy practices');
        }
        
        if (Object.values(appData.dataCollection).includes('collected')) {
            recommendations.push('Review and limit data sharing in app settings');
        }
        
        if (Object.values(appData.permissions).includes('used')) {
            recommendations.push('Regularly review and revoke unnecessary permissions');
        }
        
        if (Object.values(appData.dataSharing).includes('collected')) {
            recommendations.push('Be cautious about third-party data sharing');
        }
        
        if (!Object.values(appData.securityPrivacy).includes('collected')) {
            recommendations.push('Enable additional security features if available');
        }

        recommendations.push('Use strong, unique passwords and enable two-factor authentication');
        recommendations.push('Regularly update the app to get latest security patches');

        const recommendationsSection = document.getElementById('recommendations');
        recommendationsSection.innerHTML = '';

        recommendations.forEach(rec => {
            const recItem = document.createElement('div');
            recItem.className = 'recommendation-item';
            recItem.innerHTML = `
                <i class="fas fa-lightbulb"></i>
                <p>${rec}</p>
            `;
            recommendationsSection.appendChild(recItem);
        });
    }

    showNoResults() {
        this.hideLoading();
        document.getElementById('results').style.display = 'none';
        document.getElementById('noResults').style.display = 'block';
    }

    showError(message) {
        alert(message);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DataGuardian();
});
