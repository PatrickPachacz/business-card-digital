import React from "react"
import Mailto from './MailTo'

export default function Info() {
    return (
        <div>
            <img src="./photo.jpg" alt="Patrick Pachacz" lazy="true"/>
            <section className="section-info">
                <h2 className="name">Patrick Pachacz</h2>
                <p className="stack">Full Stack Developer</p>
            </section>

            <div className="contact">
                <Mailto email="patrickpachacz0@gmail.com" subject="Hello" body="Hello Patrick">
                <i class="fa-solid fa-envelope"></i> Email
                </Mailto>
                <a href="https://linkedin.com/in/patrick-pachacz-1b547117a" target="_blank" rel="noopener noreferrer">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="none"></svg>
                <span><i class="fa-brands fa-linkedin"></i> Linkedin</span>
                </a>
            </div>

        </div>
    )
}
