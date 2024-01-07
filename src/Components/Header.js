import React from "react";
import profileImage from './profile.jpg';

export default function Header() {
    return(
        <div className="header">
            <img className="profile-img" src={profileImage} alt="Profile" 
             style={{
                borderRadius: '50%',
                position: 'relative',
                height: '100px',
                width: '100px',
              }}
            />
            <h1>Mohamed Mohamud </h1>
            <h4>Software Developer</h4>
            <h4>Data Analyst</h4>
            <span><a href="#">mohamedmohammud@gmail.com</a></span>
            <div className="button-section" >
                <button className="btn-email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M0.102406 1.70721L6.50001 4.90561L12.8976 1.70721C12.8739 1.29957 12.6953 0.916403 12.3983 0.636194C12.1012 0.355985 11.7083 0.199937 11.3 0.200012H1.70001C1.29167 0.199937 0.898764 0.355985 0.601748 0.636194C0.304733 0.916403 0.126089 1.29957 0.102406 1.70721Z" fill="#1E1F26"/>
                    <path d="M12.9 3.49441L6.50001 6.69441L0.100006 3.49441V8.20001C0.100006 8.62436 0.268577 9.03133 0.568635 9.33138C0.868693 9.63144 1.27566 9.80001 1.70001 9.80001H11.3C11.7244 9.80001 12.1313 9.63144 12.4314 9.33138C12.7314 9.03133 12.9 8.62436 12.9 8.20001V3.49441Z" fill="#1E1F26"/>
                    </svg>
                    <span>Email</span>
                    <a href="mailto:mohamedmohammud@gmail.com" class="hidden-link"></a>
                    </button>
                <button className="btn-github">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16px" height="16px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
                    <span>Github</span>
                    <a href="https://github.com/mmohamud25" class="hidden-link"></a>

                    </button>
            </div>
        </div>
    )
}