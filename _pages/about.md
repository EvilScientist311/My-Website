---
permalink: /
title: "Welcome!"
description: "I love learning new things. This site collects derivations, lab reports, data science projects, and electrical engineering work."
author_profile: true
excerpt: "I love learning new things. This site collects derivations, lab reports, data science projects, and electrical engineering work."
header:
  overlay_image: img/labpic.jpg
  overlay_filter: 0.35
---

{% assign lab_report_count = site.publications | where: "category", "lab-reports" | size %}
{% assign physics_notes_count = site.publications | size | minus: lab_report_count %}
{% assign project_count = site.portfolio | size %}
{% assign pdf_count = 0 %}
{% for asset in site.static_files %}
  {% if asset.path contains '/files/' and asset.extname == '.pdf' %}
    {% assign pdf_count = pdf_count | plus: 1 %}
  {% endif %}
{% endfor %}

<section class="home-metrics" aria-label="Site metrics">
  <h2 class="home-metrics__heading">Metrics</h2>
  <ul class="home-metrics__list">
    <li class="home-metrics__item">
      <span class="home-metrics__value" data-count-up="{{ physics_notes_count }}" aria-live="polite">{{ physics_notes_count }}</span>
      <span class="home-metrics__label">Physics Notes</span>
    </li>
    <li class="home-metrics__item">
      <span class="home-metrics__value" data-count-up="{{ lab_report_count }}" aria-live="polite">{{ lab_report_count }}</span>
      <span class="home-metrics__label">Lab Reports</span>
    </li>
    <li class="home-metrics__item">
      <span class="home-metrics__value" data-count-up="{{ project_count }}" aria-live="polite">{{ project_count }}</span>
      <span class="home-metrics__label">Projects</span>
    </li>
    <li class="home-metrics__item">
      <span class="home-metrics__value" data-count-up="{{ pdf_count }}" data-count-suffix="+" aria-live="polite">{{ pdf_count }}+</span>
      <span class="home-metrics__label">PDFs</span>
    </li>
  </ul>
</section>

<section class="home-timeline" aria-label="Experience timeline">
  <h2 class="home-timeline__heading">Experience</h2>
  <div class="home-timeline__track">
    <div class="home-timeline__rail" aria-hidden="true">
      <span class="home-timeline__rail-track"></span>
      <span class="home-timeline__rail-fill"></span>
    </div>
    <ol class="home-timeline__list">
      <li class="home-timeline__item">
        <p class="home-timeline__year">2026</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Research</span>
          <h3 class="home-timeline__title">Quantum Backscatter Communications — Honours Thesis</h3>
          <p class="home-timeline__desc">Thesis: <em>Modulation Design for Quantum Backscatter Communications: Performance Analysis and Optimisation</em>. Research findings submitted to IEEE GLOBECOM 2026 (Quantum Communications and IT Symposium).</p>
        </article>
      </li>
      <li class="home-timeline__item">
        <p class="home-timeline__year">2026</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Education</span>
          <h3 class="home-timeline__title">Electrical Engineering (Honours) and Physics, UNSW</h3>
          <p class="home-timeline__desc">Honours in Electrical Engineering and a Bachelor of Science in Physics at UNSW.</p>
        </article>
      </li>
      <li class="home-timeline__item">
        <p class="home-timeline__year">2024</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Teaching</span>
          <h3 class="home-timeline__title">Head Tutor: Quantum Physics</h3>
          <p class="home-timeline__desc">Ran tutorials for PHYS2111 Quantum Physics, designed tutorial questions and learning resources.</p>
        </article>
      </li>
      <li class="home-timeline__item">
        <p class="home-timeline__year">2024</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Teaching</span>
          <h3 class="home-timeline__title">Lab Demonstrator: Quantum Mechanics and Classical Mechanics/Special Relativity</h3>
          <p class="home-timeline__desc">Taught PHYS3111 and PHYS2113 laboratory classes and marked student reports.</p>
        </article>
      </li>
      <li class="home-timeline__item">
        <p class="home-timeline__year">2023</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Research</span>
          <h3 class="home-timeline__title">Silicon Quantum Dot Qubit Research Project</h3>
          <p class="home-timeline__desc">Simulated silicon quantum dot qubits using NEMO3D, Gadi, Python, and MATLAB.</p>
        </article>
      </li>
      <li class="home-timeline__item">
        <p class="home-timeline__year">2023</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Teaching</span>
          <h3 class="home-timeline__title">Physics Teaching Assistant and Lab Demonstrator</h3>
          <p class="home-timeline__desc">Taught and marked first-year physics tutorials and laboratories.</p>
        </article>
      </li>
      <li class="home-timeline__item">
        <p class="home-timeline__year">2023–2024</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Leadership</span>
          <h3 class="home-timeline__title">Student Fellow at UNSW Hall</h3>
          <p class="home-timeline__desc">Mentored residents, supported college events, and helped coordinate residential community life.</p>
        </article>
      </li>
      <li class="home-timeline__item">
        <p class="home-timeline__year">2021–2022</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Leadership</span>
          <h3 class="home-timeline__title">Operations and Communications Director, UNSW Hall</h3>
          <p class="home-timeline__desc">Organised events, created multimedia advertisements, and managed social platforms.</p>
        </article>
      </li>
      <li class="home-timeline__item">
        <p class="home-timeline__year">2017–2022</p>
        <div class="home-timeline__node" aria-hidden="true"><span class="home-timeline__node-dot"></span></div>
        <article class="home-timeline__card">
          <span class="home-timeline__pill">Teaching</span>
          <h3 class="home-timeline__title">Piano Teacher</h3>
          <p class="home-timeline__desc">Gave weekly piano lessons to students aged 7 to 27.</p>
        </article>
      </li>
    </ol>
  </div>
</section>
