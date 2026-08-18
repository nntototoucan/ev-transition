(() => {
  "use strict";

  const data = window.EV100_DASHBOARD_DATA;
  if (!data) throw new Error("EV100 dashboard data is missing.");

  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  // 제목에만 본사·정책 관할 국가를 작게 표시한다. 본문 수치나 설명에는 반복하지 않는다.
  const hqByName = {
    "AstraZeneca": ["gb", "영국"], "Siemens": ["de", "독일"], "An Post": ["ie", "아일랜드"],
    "Geopost": ["fr", "프랑스"], "Ingka Group (IKEA)": ["nl", "네덜란드"],
    "Coca-Cola Europacific Partners": ["gb", "영국"], "Delta Electronics": ["tw", "대만"], "Delta": ["tw", "대만"], "TEPCO": ["jp", "일본"],
    "Prologis": ["us", "미국"], "METRO": ["de", "독일"], "Queensland": ["au", "호주"], "Mitie": ["gb", "영국"],
    "Zomato": ["in", "인도"], "A.P. Moller–Maersk": ["dk", "덴마크"], "Lloyds Metals & Energy (LMEL)": ["in", "인도"],
    "Norway": ["no", "노르웨이"], "Delhi": ["in", "인도"], "Netherlands": ["nl", "네덜란드"],
    "Costa Rica": ["cr", "코스타리카"], "Seattle": ["us", "미국"], "Maharashtra": ["in", "인도"]
  };
  const flagSvg = {
    gb: '<rect fill="#012169" width="24" height="16"/><path stroke="#fff" stroke-width="5" d="M0 0l24 16M24 0L0 16"/><path stroke="#c8102e" stroke-width="2" d="M0 0l24 16M24 0L0 16"/><path stroke="#fff" stroke-width="6" d="M12 0v16M0 8h24"/><path stroke="#c8102e" stroke-width="3" d="M12 0v16M0 8h24"/>',
    de: '<path fill="#000" d="M0 0h24v5.33H0z"/><path fill="#d00" d="M0 5.33h24v5.34H0z"/><path fill="#ffce00" d="M0 10.67h24V16H0z"/>',
    ie: '<path fill="#169b62" d="M0 0h8v16H0z"/><path fill="#fff" d="M8 0h8v16H8z"/><path fill="#ff883e" d="M16 0h8v16h-8z"/>',
    fr: '<path fill="#0055a4" d="M0 0h8v16H0z"/><path fill="#fff" d="M8 0h8v16H8z"/><path fill="#ef4135" d="M16 0h8v16h-8z"/>',
    nl: '<path fill="#ae1c28" d="M0 0h24v5.33H0z"/><path fill="#fff" d="M0 5.33h24v5.34H0z"/><path fill="#21468b" d="M0 10.67h24V16H0z"/>',
    tw: '<rect fill="#fe0000" width="24" height="16"/><rect fill="#000095" width="11" height="8"/><circle fill="#fff" cx="5.5" cy="4" r="2.2"/>',
    jp: '<rect fill="#fff" width="24" height="16"/><circle fill="#bc002d" cx="12" cy="8" r="4"/>',
    us: '<path fill="#b22234" d="M0 0h24v16H0z"/><path stroke="#fff" stroke-width="2" d="M0 2h24M0 6h24M0 10h24M0 14h24"/><rect fill="#3c3b6e" width="10" height="8"/>',
    au: '<rect fill="#012169" width="24" height="16"/><path stroke="#fff" stroke-width="2" d="M0 0l10 7M10 0L0 7"/><path stroke="#c8102e" d="M0 0l10 7M10 0L0 7"/><circle fill="#fff" cx="18" cy="11" r="1.5"/><circle fill="#fff" cx="20" cy="5" r="1"/>',
    in: '<path fill="#ff9933" d="M0 0h24v5.33H0z"/><path fill="#fff" d="M0 5.33h24v5.34H0z"/><path fill="#138808" d="M0 10.67h24V16H0z"/><circle fill="none" stroke="#000080" stroke-width=".8" cx="12" cy="8" r="2"/>',
    dk: '<rect fill="#c8102e" width="24" height="16"/><path stroke="#fff" stroke-width="3" d="M8 0v16M0 8h24"/>',
    no: '<rect fill="#ba0c2f" width="24" height="16"/><path stroke="#fff" stroke-width="5" d="M8 0v16M0 8h24"/><path stroke="#00205b" stroke-width="2" d="M8 0v16M0 8h24"/>',
    cr: '<path fill="#002b7f" d="M0 0h24v3.2H0zM0 12.8h24V16H0z"/><path fill="#fff" d="M0 3.2h24v3.2H0zM0 9.6h24v3.2H0z"/><path fill="#ce1126" d="M0 6.4h24v3.2H0z"/>'
  };
  const flagDataUrl = (code) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">${flagSvg[code] || flagSvg.us}</svg>`)}`;
  const nameWithHq = (name) => {
    const hq = hqByName[name];
    return hq
      ? `<span class="hq-name" title="HQ ${escapeHtml(hq[1])}">${escapeHtml(name)}<img class="hq-flag" src="${flagDataUrl(hq[0])}" alt="${escapeHtml(hq[1])} 국기" decoding="async"></span>`
      : escapeHtml(name);
  };
  const namesWithHq = (names) => names.split(" · ").map((name) => nameWithHq(name)).join(" · ");

  byId("editorial-decision").textContent = data.meta.editorialDecision;
  byId("updated-at").textContent = `${data.meta.scope} · 업데이트 ${data.meta.updatedAt}`;

  byId("funnel-list").innerHTML = data.funnel.map((item) => `
    <li><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.note)}</span></li>
  `).join("");

  byId("hypothesis-grid").innerHTML = data.hypothesis.map((item) => `
    <article class="hypothesis-card">
      <div class="hypothesis-card__top">
        <h4>${escapeHtml(item.statement)}</h4>
        <span class="verdict verdict--${escapeHtml(item.verdict)}">${escapeHtml(item.verdictLabel)}</span>
      </div>
      <p>${escapeHtml(item.reason)}</p>
    </article>
  `).join("");

  const directCount = data.companies.filter((company) => company.level === "direct").length;
  const roleCount = data.companies.length - directCount;
  byId("evidence-summary").innerHTML = `
    <div class="summary-stat"><strong>${data.companies.length}</strong><span>공식 기업 근거</span></div>
    <div class="summary-stat"><strong>${directCount}</strong><span>EV100 효용 직접 언급</span></div>
    <div class="summary-stat"><strong>${roleCount}</strong><span>참여 역할·연결 확인</span></div>
  `;
  byId("count-all").textContent = data.companies.length;
  byId("count-direct").textContent = directCount;
  byId("count-role").textContent = roleCount;

  const sourceAnchor = (label, url) => url ? `
    <a class="source-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a>
  ` : "";

  const evidencePassage = (company) => company.evidenceKind === "direct_quote"
    ? `<blockquote class="quote">“${escapeHtml(company.quote)}”</blockquote>`
    : `<div class="quote quote--excerpt">${escapeHtml(company.quote)}</div>`;

  byId("company-grid").innerHTML = data.companies.map((company, index) => `
    <details class="company-card" data-level="${escapeHtml(company.level)}" ${index < 2 ? "open" : ""}>
      <summary>
        <div class="company-card__header">
          <div>
            <p class="company-card__series">${escapeHtml(company.series)}</p>
            <h3>${nameWithHq(company.name)}</h3>
          </div>
          <span class="badge badge--${escapeHtml(company.level)}">${escapeHtml(data.evidenceLevels[company.level].label)}</span>
        </div>
        <p class="company-card__barrier"><strong>장벽</strong> · ${escapeHtml(company.barrier)}</p>
        <span class="expand-label"><span class="expand-label__open">근거 펼쳐보기</span><span class="expand-label__close">근거 접기</span></span>
      </summary>
      <div class="company-card__body">
        <p class="role-line"><strong>EV100 역할</strong>${escapeHtml(company.role)}</p>
        ${evidencePassage(company)}
        ${company.translation ? `<p class="translation">${escapeHtml(company.translation)}</p>` : ""}
        <p class="speaker">${escapeHtml(company.speaker)}</p>
        <p class="source-type">${escapeHtml(company.evidenceKindLabel)} · ${escapeHtml(company.sourceType)}</p>
        <div class="evidence-note">
          <strong>이 근거로 말할 수 있는 범위</strong>
          <p>${escapeHtml(company.usage)}</p>
        </div>
        <div class="source-links">
          ${sourceAnchor(company.sourceLabel, company.sourceUrl)}
          ${sourceAnchor(company.corroborationLabel, company.corroborationUrl)}
        </div>
      </div>
    </details>
  `).join("");

  byId("series-list").innerHTML = data.seriesPlan.map((item, index) => `
    <details class="series-item" ${index === 0 ? "open" : ""}>
      <summary class="series-row">
        <div class="series-row__no">EP ${String(index + 1).padStart(2, "0")}</div>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="series-row__pair"><strong>${escapeHtml(item.cases)}</strong><span>${escapeHtml(item.compare)}</span></p>
        </div>
        <div class="series-row__role"><strong>${escapeHtml(item.statusLabel)}</strong>${escapeHtml(item.correction)}</div>
        <span class="series-toggle" aria-hidden="true"><span class="series-toggle__open">원고 구성 보기</span><span class="series-toggle__close">원고 구성 접기</span></span>
      </summary>
      <div class="series-detail">
        <div class="series-answer">
          <p class="series-detail__label">핵심 판단</p>
          <p>${escapeHtml(item.answer)}</p>
        </div>
        <div class="case-comparison" aria-label="${escapeHtml(item.cases)} 사례 비교">
          <article class="case-panel case-panel--a">
            <div class="case-panel__header">
              <span>CASE A</span>
              <h4>${nameWithHq(item.caseA.name)}</h4>
              <p>${escapeHtml(item.caseA.descriptor)}</p>
            </div>
            <strong>${escapeHtml(item.caseA.focus)}</strong>
            <p>${escapeHtml(item.caseA.detail)}</p>
            <small>${escapeHtml(item.caseA.basis)}</small>
          </article>
          <div class="case-comparison__vs" aria-hidden="true">VS</div>
          <article class="case-panel case-panel--b">
            <div class="case-panel__header">
              <span>CASE B</span>
              <h4>${nameWithHq(item.caseB.name)}</h4>
              <p>${escapeHtml(item.caseB.descriptor)}</p>
            </div>
            <strong>${escapeHtml(item.caseB.focus)}</strong>
            <p>${escapeHtml(item.caseB.detail)}</p>
            <small>${escapeHtml(item.caseB.basis)}</small>
          </article>
        </div>
        ${item.supportingCases.length ? `
          <div class="supporting-cases">
            <p class="series-detail__label">함께 다룰 보조 사례·외부 조건</p>
            <ul>
              ${item.supportingCases.map((support) => `
                <li><strong>${namesWithHq(support.name)}</strong><span>${escapeHtml(support.role)}</span><p>${escapeHtml(support.detail)}</p></li>
              `).join("")}
            </ul>
          </div>
        ` : ""}
        <ol class="story-flow">
          ${item.outline.map((section, sectionIndex) => `
            <li>
              <span>${String(sectionIndex + 1).padStart(2, "0")}</span>
              <div>
                <small>${escapeHtml(section.label)}</small>
                <strong>${escapeHtml(section.title)}</strong>
                <p>${escapeHtml(section.body)}</p>
              </div>
            </li>
          `).join("")}
        </ol>
        <div class="series-application">
          <div>
            <p class="series-detail__label">독자 적용 질문</p>
            <ul>${item.applyQuestions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul>
          </div>
          <div>
            <p class="series-detail__label">EV100 연결 문구</p>
            <p>${escapeHtml(item.ev100Link)}</p>
          </div>
        </div>
      </div>
    </details>
  `).join("");

  byId("government-layers").innerHTML = data.governmentFramework.map((layer, index) => `
    <article class="layer-card">
      <div class="layer-card__no">LAYER ${index + 1}</div>
      <h3>${escapeHtml(layer.owner)}</h3>
      <p>${escapeHtml(layer.purpose)}</p>
      <small>${escapeHtml(layer.examples)}</small>
    </article>
  `).join("");

  const governmentCasePanel = (governmentCase, side, label) => {
    const item = governmentCase[side];
    return `
      <article class="government-case government-case--${side}">
        <div class="government-case__eyebrow">${label}</div>
        <h4>${nameWithHq(item.name)}</h4>
        <p class="government-case__descriptor">${escapeHtml(item.descriptor)}</p>
        <strong>${escapeHtml(item.focus)}</strong>
        <dl>
          <div><dt>정부가 한 일</dt><dd>${escapeHtml(item.measures)}</dd></div>
          <div><dt>확인된 결과</dt><dd>${escapeHtml(item.results)}</dd></div>
          <div><dt>기업에 남긴 조건</dt><dd>${escapeHtml(item.implication)}</dd></div>
        </dl>
        <small>${escapeHtml(item.basis)}</small>
      </article>
    `;
  };

  byId("government-cases").innerHTML = data.governmentCases.map((item, index) => `
    <article class="government-comparison">
      <header class="government-comparison__header">
        <span>POLICY ${String(index + 1).padStart(2, "0")}</span>
        <div><h3>${escapeHtml(item.problem)}</h3><p>${escapeHtml(item.compare)}</p></div>
        <p>${escapeHtml(item.answer)}</p>
      </header>
      <div class="government-case-grid">
        ${governmentCasePanel(item, "caseA", "CASE A")}
        <div class="government-case__vs" aria-hidden="true">VS</div>
        ${governmentCasePanel(item, "caseB", "CASE B")}
      </div>
      <div class="government-questions"><strong>기업 적용 질문</strong><ul>${item.applyQuestions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}</ul></div>
    </article>
  `).join("");

  const spotlightMarkup = data.governmentSpotlights.map((spotlight) => `
    <li><strong>${nameWithHq(spotlight.name)}</strong><span>${escapeHtml(spotlight.label)}</span><p>${escapeHtml(spotlight.detail)}</p></li>
  `).join("");
  byId("government-cases").insertAdjacentHTML("beforeend", `
    <aside class="government-spotlight"><p class="series-detail__label">추가 광역 인프라 사례</p><ul>${spotlightMarkup}</ul></aside>
  `);

  byId("guardrail-list").innerHTML = data.guardrails.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("");

  byId("join-links").innerHTML = data.membershipLinks.map((item) => `
    <a class="join-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.description)}</span>
      <em>${escapeHtml(item.cta)} ↗</em>
    </a>
  `).join("");

  byId("source-docs").innerHTML = data.sourceDocs.map((item) => `
    <a class="source-doc" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
      <div class="source-doc__strength">${escapeHtml(item.strength)}</div>
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.coverage)}</p>
    </a>
  `).join("");

  const filterButtons = [...document.querySelectorAll(".filter")];
  const cards = [...document.querySelectorAll(".company-card")];
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      cards.forEach((card) => {
        card.hidden = selected !== "all" && card.dataset.level !== selected;
      });
    });
  });
})();
