window.EV100_DASHBOARD_DATA = {
  meta: {
    title: "EV100 케이스 스터디 기획 대시보드",
    updatedAt: "2026-08-18",
    scope: "Archive 원문 PDF 3종 + 공식 웹 자료 보강",
    editorialDecision: "6개 보편 장벽마다 사례 A와 사례 B의 실행 차이를 비교하고, 기업이 한 일·외부 조건·EV100 역할을 분리한다."
  },
  funnel: [
    { label: "내 문제 발견", note: "장벽을 독자의 언어로 시작" },
    { label: "해결 가능성", note: "서로 다른 실제 해법 비교" },
    { label: "우리 회사 적용", note: "통제 가능·외부 의존 영역 구분" },
    { label: "EV100 역할", note: "기준·지식·정책·네트워크 근거" },
    { label: "상담·가입 검토", note: "자료 확인 후 낮은 부담의 CTA" }
  ],
  hypothesis: [
    {
      statement: "기업들이 유사한 EV 전환 장벽을 겪는다",
      verdict: "sufficient",
      verdictLabel: "충분",
      reason: "차량 공급, 충전, 직원 수용성, 데이터, 시장 성숙도 문제가 여러 사례에서 반복된다."
    },
    {
      statement: "같은 장벽을 서로 다른 방식으로 해결할 수 있다",
      verdict: "sufficient",
      verdictLabel: "대체로 충분",
      reason: "충전망 구축·스마트 운영·현지화·교육·정책 관여 등 대안이 확인된다."
    },
    {
      statement: "정부와 기업이 서로 다른 수단으로 같은 문제를 해결한다",
      verdict: "partial",
      verdictLabel: "구성 가능",
      reason: "정책 사례는 풍부하지만 특정 기업 성과와 직접 연결된 인과관계는 아니다."
    },
    {
      statement: "EV100 참여가 기업 실행에 실질적 도움을 준다",
      verdict: "partial",
      verdictLabel: "일부 입증",
      reason: "Siemens·An Post 등은 직접 언급이 강하고, 나머지는 목표·정책·교류 역할 중심이다."
    },
    {
      statement: "이 글이 EV100 가입으로 이어진다",
      verdict: "insufficient",
      verdictLabel: "미입증",
      reason: "사례자료는 콘텐츠 전환 효과를 증명하지 않는다. CTA 반응을 별도로 측정해야 한다."
    }
  ],
  evidenceLevels: {
    direct: {
      label: "직접 효용 언급",
      description: "기업 또는 임원이 EV100의 구체적 도움·역할을 직접 설명"
    },
    role: {
      label: "참여 역할 확인",
      description: "목표 설정·정책 관여·경험 교류와 참여가 연결되지만 성과 인과는 미확인"
    }
  },
  companies: [
    {
      id: "astrazeneca",
      name: "AstraZeneca",
      series: "1편",
      barrier: "직원 수용성·시장별 조건",
      level: "direct",
      evidenceKind: "direct_quote",
      evidenceKindLabel: "임원 직접 인용",
      role: "지원 생태계와 집단적 목소리",
      quote: "EV100 brings together corporate voices to accelerate the transition to net zero through a supportive EV ecosystem.",
      translation: "EV100은 지원적인 EV 생태계 안에서 기업의 목소리를 모아 넷제로 전환을 가속한다.",
      speaker: "Stuart Poore, Executive Director, Climate & Nature Strategy",
      sourceLabel: "첨부 Progress & Insights 2026, p.30–31",
      sourceUrl: "file:///H:/내%20드라이브/Notebook%20lm/EV100/Climate%20Group%20EV100%20-%20Progress%20and%20Insights%202026%20Report%20(1).pdf#page=16",
      corroborationLabel: "AstraZeneca 파트너십·얼라이언스",
      corroborationUrl: "https://www.astrazeneca.com/sustainability/partnerships-and-alliances.html",
      usage: "EV100이 모든 실행을 만들었다고 쓰지 말고, 공동행동·경험 공유·정책 참여의 플랫폼으로 설명한다.",
      sourceType: "임원 직접 발언 + 기업 공식 페이지"
    },
    {
      id: "siemens",
      name: "Siemens",
      series: "2편",
      barrier: "데이터·글로벌 거버넌스",
      level: "direct",
      evidenceKind: "direct_quote",
      evidenceKindLabel: "회사 발표자료 직접 인용",
      role: "기준 명확화·시장정보·실행 속도",
      quote: "Early and close collaboration with the Climate Group improves requirement clarity and speeds up implementation.",
      translation: "Climate Group과의 이른 시점부터 긴밀한 협업은 요구사항을 명확하게 하고 실행 속도를 높인다.",
      speaker: "Siemens EV100 Program 발표자료, p.12",
      sourceLabel: "첨부 Siemens Case Study, p.12",
      sourceUrl: "file:///H:/내%20드라이브/Notebook%20lm/EV100/Case%20study_Siemens_mar2026%20-%20복사본.pdf#page=12",
      corroborationLabel: "Siemens EV100 가입 후 차량정책 발표",
      corroborationUrl: "https://press.siemens.com/global/en/pressrelease/siemens-introduce-sustainable-and-flexible-company-car-policy",
      usage: "EV100 기준이 내부 목표·국가 분류·성과관리로 번역된 구체적 사례로 사용한다.",
      sourceType: "회사 발표자료 직접 문구 + 기업 공식 보도자료"
    },
    {
      id: "an-post",
      name: "An Post",
      series: "4편",
      barrier: "충전망·중대형 차량 전략",
      level: "direct",
      evidenceKind: "direct_quote",
      evidenceKindLabel: "임원 직접 인용",
      role: "전문가 조언·동료학습·글로벌 인사이트",
      quote: "The EV100 experts will help us to formulate strategy, particularly around heavy goods vehicles.",
      translation: "EV100 전문가들은 특히 대형 상용차 전략을 수립하는 데 도움을 줄 것이다.",
      speaker: "Nicola Woods, Chief Transformation Officer",
      sourceLabel: "An Post 가입 발표",
      sourceUrl: "https://www.anpost.com/Media-Centre/News/An-Post-joins-global-EV100-to-accelerate-next-generation-electric-vehicles",
      corroborationLabel: "An Post 대체연료 협력 사례",
      corroborationUrl: "https://www.anpost.com/Sustainability/Industry-Innovation-and-Infrastructure/alternative-fuels-feature-story",
      usage: "‘EV100 전문가와 동료학습이 HGV 전략 수립을 돕는다’는 회원 효용의 가장 직접적인 사례로 사용 가능하다.",
      sourceType: "임원 직접 발언"
    },
    {
      id: "geopost",
      name: "Geopost",
      series: "5편",
      barrier: "중대형 차량 공급·정책 조건",
      level: "direct",
      evidenceKind: "official_excerpt",
      evidenceKindLabel: "기업 공식 게시물 발췌",
      role: "정책 목소리 증폭·공동 수요 신호",
      quote: "… but coalitions like the Climate Group's EV100+ policy working group amplify our voice, driving systemic change for a low-carbon future.",
      translation: "Climate Group의 EV100+ 정책 워킹그룹 같은 연합은 기업의 목소리를 키워 저탄소 미래를 위한 구조적 변화를 추진한다.",
      speaker: "Geopost 공식 채널의 Caryn-Ann Allen 발표 요약",
      sourceLabel: "Geopost 정책 참여 발표",
      sourceUrl: "https://www.linkedin.com/posts/geopost_geopost-at-smart-freight-week-leading-the-activity-7308892871539974144-beDW",
      corroborationLabel: "Geopost EV100+ 가입 발표",
      corroborationUrl: "https://www.geopost.com/en/news/geopost-joins-climate-group-ev100-initiative/",
      usage: "개별 기업이 해결하기 어려운 차량 공급·정책 장벽에서 ‘공동 목소리’의 가치를 설명할 때 사용한다.",
      sourceType: "기업 공식 발표 + 임원 발언 요약"
    },
    {
      id: "ingka",
      name: "Ingka Group (IKEA)",
      series: "3편",
      barrier: "여러 시장의 정책·현지 조건",
      level: "role",
      evidenceKind: "official_excerpt",
      evidenceKindLabel: "기업 공식 페이지 발췌",
      role: "정책입안자 공동 관여",
      quote: "We are working with organisations such as EV100 to engage policy makers on ensuring the right regional, national and local regulation...",
      translation: "EV100 같은 조직과 함께 정책입안자에게 관여해 지역·국가·지방 차원의 적절한 규제가 마련되도록 하고 있다.",
      speaker: "IKEA 공식 사례 페이지의 기업 서술",
      sourceLabel: "IKEA 무배출 배송 사례",
      sourceUrl: "https://www.ikea.com/global/en/our-business/sustainability/zero-emissions-for-home-deliveries/",
      corroborationLabel: "Ingka 책임조달 사례",
      corroborationUrl: "https://www.ingka.com/newsroom/responsible-sourcing-why-switching-to-electric-deliveries-early-turned-out-to-be-good-business/",
      usage: "EV100이 Ingka의 운영 해법을 직접 만들었다기보다 정책 장벽을 함께 다루는 파트너라는 수준으로 쓴다.",
      sourceType: "기업 공식 서술 — 인명 인용 아님"
    },
    {
      id: "ccep",
      name: "Coca-Cola Europacific Partners",
      series: "3편",
      barrier: "분산 사업장·차량 전환",
      level: "role",
      evidenceKind: "official_excerpt",
      evidenceKindLabel: "기업 공식 공시 발췌",
      role: "정책 관여·공개 목표",
      quote: "In Europe, we used our voice alongside EV100 to call for enabling policy to support the transition to electric vehicles.",
      translation: "유럽에서 EV100과 함께 전기차 전환을 뒷받침하는 정책을 요구했다.",
      speaker: "CCEP 2024 CDP Disclosure",
      sourceLabel: "CCEP 2024 CDP Disclosure",
      sourceUrl: "https://www.cocacolaep.com/assets/Download-centre/CCEP-2024-CDP-Disclosure.pdf",
      corroborationLabel: "CCEP EV100 가입 발표",
      corroborationUrl: "https://www.cocacolaep.com/news-and-stories/coca-cola-european-partners-joins-the-climate-groups-ev100-initiative-committing-to-transition-its-company-cars-and-vans-to-electric-vehicles-by-2030/",
      usage: "‘한 곳부터 100%’가 아니라 독일이라는 국가 단위 전환 완성과 EV100 공동 정책 관여로 표현한다.",
      sourceType: "기업 공식 공시 — 인명 인용 아님"
    },
    {
      id: "delta",
      name: "Delta Electronics",
      series: "4편",
      barrier: "충전 피크·운영 효율",
      level: "role",
      evidenceKind: "official_excerpt",
      evidenceKindLabel: "기업 공식 보고서 발췌",
      role: "회원 간 경험 교류·사례 확산",
      quote: "In 2019, Delta was invited for the first time to participate in Climate Week NYC and exchange experiences with EV100 members.",
      translation: "2019년 Delta는 처음으로 Climate Week NYC에 초청되어 EV100 회원들과 경험을 교류했다.",
      speaker: "Delta 2020 Annual Report",
      sourceLabel: "Delta 2020 Annual Report",
      sourceUrl: "https://filecenter.deltaww.com/IR/download/annual_report/2020annual.pdf",
      corroborationLabel: "Climate Group가 소개한 Delta 사례",
      corroborationUrl: "https://www.deltaww.com/en-US/news/39790",
      usage: "운영 최적화는 Delta 자체 실행이다. EV100의 확인된 역할은 경험 교류와 리더십 사례 확산이다.",
      sourceType: "기업 공식 보고서 — 인명 인용 아님"
    },
    {
      id: "tepco",
      name: "TEPCO",
      series: "5편",
      barrier: "차종 부족·시장 수요 신호",
      level: "role",
      evidenceKind: "direct_quote",
      evidenceKindLabel: "담당자 직접 인용",
      role: "공개 목표·지식 공유·시장 신호",
      quote: "まず自らがEVを積極的に導入し、課題解決の知見を蓄える必要があります。",
      translation: "먼저 스스로 EV를 적극 도입해 문제 해결의 지식을 축적할 필요가 있었다.",
      speaker: "TEPCO EV推進室 齋藤氏",
      sourceLabel: "TEPCO EV100 참여 인터뷰",
      sourceUrl: "https://evdays.tepco.co.jp/entry/2023/02/13/tepco_17",
      corroborationLabel: "TEPCO EV100 가입 발표",
      corroborationUrl: "https://www.tepco.co.jp/en/hd/newsroom/press/archives/2019/tepco-becomes-02.html",
      usage: "EV100이 차량을 공급했다고 쓰지 않는다. 참여가 목표 설정과 지식 공유, 시장 수요 신호에 연결됐다고 한정한다.",
      sourceType: "담당자 직접 발언 + 기업 공식 발표"
    }
  ],
  seriesPlan: [
    {
      number: 1,
      title: "충전 인프라 부족 및 전력망 제약",
      cases: "Prologis vs METRO",
      compare: "독립형 에너지 인프라 ↔ 신규 거점 설치 표준",
      status: "source-needed",
      statusLabel: "원출처 보강 필요",
      correction: "Queensland는 광역 인프라가 필요한 외부 조건으로만 배치",
      answer: "전력망 연결을 기다릴 것인지, 거점 신설 때부터 충전 설비를 표준화할 것인지에 따라 인프라 해법과 투자 순서가 달라진다.",
      caseA: {
        name: "Prologis",
        descriptor: "물류 부동산 · 대형 전기트럭 충전",
        focus: "마이크로그리드 기반 모듈형 충전 허브",
        detail: "계통 연결 지연이 긴 물류 거점에 발전·저장·충전을 묶은 독립형 허브를 구축한다. 원문은 총 9.96MW 충전 용량, 3~5년이 걸리던 구축을 5개월로 단축한 사례로 설명한다.",
        basis: "첨부 케이스 요약자료 기반 · 기업 원출처 추가 확인 필요"
      },
      caseB: {
        name: "METRO",
        descriptor: "도매·식품 유통 · 다거점 충전",
        focus: "신규 부지 충전 의무화와 구조화된 확산",
        detail: "신규 거점에 충전 시설을 의무적으로 포함하고 현지 관리자 지침, 충전사업자(CPO), 전력망 운영자 협업을 결합했다. 원문 기준 2023년까지 1,000개 충전소를 예정보다 앞서 구축했고 30개국 이상에 확산됐다.",
        basis: "첨부 케이스 요약자료 기반 · 기업 원출처 추가 확인 필요"
      },
      supportingCases: [
        { name: "Queensland", role: "기업 외부 조건", detail: "주 전역 약 6,500km 급속충전망을 단계적으로 구축한 사례를 장거리 운행을 가능하게 하는 공공 인프라 조건으로 연결한다." }
      ],
      outline: [
        { label: "문제 정의", title: "충전기 수와 계통 연결 문제를 분리", body: "차량의 주차 시간, 동시 충전 수요, 부지 전력 용량, 계통 증설 대기기간을 각각 진단한다." },
        { label: "사례 A", title: "Prologis: 계통을 기다리지 않는 허브", body: "마이크로그리드, 에너지저장장치, 오프그리드 설비를 결합해 물류차량 충전의 구축 속도와 회복탄력성을 확보한 부분을 다룬다." },
        { label: "사례 B", title: "METRO: 새 거점마다 충전을 기본 조건으로", body: "신규 부지 의무화, 현지 관리자 지침, 외부 사업자 협업을 통해 다거점 확산을 운영 체계로 만든 부분을 다룬다." },
        { label: "비교", title: "긴급한 용량 확보와 반복 가능한 표준화", body: "Prologis는 전력망 병목을 우회하는 인프라 설계, METRO는 확장 때 누락을 막는 내부 정책과 파트너 관리에 초점을 둔다." },
        { label: "외부 조건", title: "Queensland 광역 충전망은 기업 밖의 조건", body: "사업장 충전만으로 해결되지 않는 장거리 운행에는 공공 급속충전망이 필요하다는 점을 별도 층으로 보여준다." },
        { label: "EV100 연결", title: "수요와 병목을 공동 의제로 전환", body: "EV100이 인프라를 직접 설치했다고 쓰지 않고, 회원 경험 공유와 반복되는 인프라 장벽의 정책 의제화 가능성을 설명한다." }
      ],
      applyQuestions: ["계통 연결 대기기간이 차량 도입 일정보다 긴가?", "신규·기존 거점 중 충전 표준을 어디부터 적용할 것인가?", "사업장 밖 광역 충전망에 얼마나 의존하는가?"],
      ev100Link: "회원사의 충전 수요와 계통 병목을 모아 정책·시장에 더 선명한 신호를 보내고, 구축·운영 사례를 공유하는 역할로 한정한다."
    },
    {
      number: 2,
      title: "임직원 저항 및 변화 관리 어려움",
      cases: "AstraZeneca vs Mitie",
      compare: "교육·체험으로 불안 해소 ↔ 비용·충전 장벽 제거",
      status: "mixed",
      statusLabel: "혼합 근거",
      correction: "AstraZeneca 상세 보고서와 Mitie 요약자료의 근거 수준을 구분",
      answer: "직원 저항을 태도 문제로 단정하지 않고, 정보 부족·운행 적합성·가정 충전·개인 비용을 나눠 각각 다른 지원책으로 해결한다.",
      caseA: {
        name: "AstraZeneca",
        descriptor: "제약 · 글로벌 영업 차량",
        focus: "교육·Q&A·시승과 시장별 현지화",
        detail: "직원의 주행거리·충전 불안을 교육과 질의응답, 실제 체험으로 낮추고 중앙 목표와 지역별 실행을 결합했다. 원문은 60개 이상 국가, 2만2천 대 이상 차량, 37개 시장의 완전 전동화를 제시한다.",
        basis: "Progress & Insights 2026 심층 사례 · EV100 역할 직접 발언 확인"
      },
      caseB: {
        name: "Mitie",
        descriptor: "시설관리 · 현장 서비스 차량",
        focus: "맞춤 차량·가정 충전·비용 중립 지원",
        detail: "업무에 맞는 차량 선택, 가정·공공 충전 지원, 비용 환급을 묶어 운전자 개인에게 비용과 불편이 전가되지 않게 했다. 원문 기준 6,000대 이상 EV를 빠르게 확대한 사람 중심 프로그램이다.",
        basis: "첨부 케이스 요약자료 기반 · 기업 원출처 추가 확인 필요"
      },
      supportingCases: [
        { name: "TEPCO", role: "보조 사례", detail: "차량 브랜딩과 충전카드로 EV의 가시성을 높이고 주행거리 불안을 낮춘 부분을 짧게 연결한다." },
        { name: "Delta · Siemens", role: "데이터 보조 사례", detail: "충전 이용 데이터와 진척도 투명성이 직원 지원과 의사결정을 어떻게 정교하게 하는지 보여준다." }
      ],
      outline: [
        { label: "문제 정의", title: "저항의 이유를 네 가지로 나누기", body: "정보 부족, 차량의 업무 적합성, 충전 접근성, 개인 비용을 분리해 동일한 설득 메시지로 뭉개지 않는다." },
        { label: "사례 A", title: "AstraZeneca: 직접 경험으로 막연한 불안 해소", body: "교육·Q&A·시승을 통해 우려를 구체적 질문으로 바꾸고, 시장별 여건에 맞춰 지원 강도와 전환 순서를 조정한 부분을 다룬다." },
        { label: "사례 B", title: "Mitie: 운전자에게 남는 비용과 불편 제거", body: "가정 충전 설치, 공공 충전, 환급, 차량 적합성까지 하나의 직원 지원 프로그램으로 묶은 부분을 다룬다." },
        { label: "비교", title: "인식 변화와 실질 장벽 제거를 함께 보기", body: "AstraZeneca의 체험·교육과 Mitie의 비용·충전 지원은 대체재가 아니라 저항의 서로 다른 원인을 해결한다." },
        { label: "보조 사례", title: "브랜딩과 데이터로 변화가 보이게 하기", body: "TEPCO의 차량 브랜딩, Delta의 충전 데이터, Siemens의 진척도 투명성을 보완 수단으로 배치한다." },
        { label: "EV100 연결", title: "회원 경험을 내부 설득 자료로", body: "AstraZeneca의 직접 발언을 중심으로 지원 생태계와 집단적 목소리를 설명하고, Mitie 실행 전체를 EV100의 성과로 귀속하지 않는다." }
      ],
      applyQuestions: ["직원의 반대는 정보 부족인가, 실제 비용·운행 문제인가?", "가정 충전이 어려운 직원에게 어떤 대안이 있는가?", "교육 뒤에도 남는 장벽을 데이터로 추적하는가?"],
      ev100Link: "다른 회원의 시행착오와 지원 방식을 내부 변화관리의 근거로 활용하고, 여러 기업의 반복되는 장벽을 공동 목소리로 전환한다."
    },
    {
      number: 3,
      title: "높은 전환 비용 및 금융 접근성",
      cases: "Zomato vs Mitie",
      compare: "렌탈·금융 파트너십 ↔ 직원 비용 중립 지원",
      status: "source-needed",
      statusLabel: "원출처 보강 필요",
      correction: "정부 인센티브는 기업 해법과 분리하고 특정 기업 성과의 원인으로 단정하지 않음",
      answer: "초기 구매비만 비교하지 말고 차량 이용 주체, 금융 접근성, 충전비 정산, 잔존가치와 정책 인센티브까지 비용 구조를 다시 설계한다.",
      caseA: {
        name: "Zomato",
        descriptor: "음식배달 플랫폼 · 독립 배송 파트너",
        focus: "렌탈 파트너십과 디지털 금융 지원",
        detail: "배송 파트너가 차량을 직접 구매하기 어려운 구조에서 렌탈·리스 파트너, 금융 지원, 인식 개선 캠페인, 디지털 도구를 연결했다. 원문은 FY24 EV 기반 배송 6,160만 건, EV 배송 4배 증가, 3,180tCO₂e 회피를 제시한다.",
        basis: "첨부 케이스 요약자료 기반 · 기업 원출처 추가 확인 필요"
      },
      caseB: {
        name: "Mitie",
        descriptor: "시설관리 · 회사 차량 운전자",
        focus: "가정 충전·환급을 통한 비용 중립",
        detail: "고용된 운전자에게 충전과 운영 비용이 전가되지 않도록 가정 충전, 공공 충전, 비용 환급과 차량 최적화를 묶은 내부 지원 모델을 비용 관점에서 다시 본다.",
        basis: "첨부 케이스 요약자료 기반 · 2편과 다른 비용 렌즈로 활용"
      },
      supportingCases: [
        { name: "Norway · Delhi", role: "재정·규제 조건", detail: "세제·통행료·구매 지원과 내연기관 규제를 결합해 초기 가격 격차를 줄이는 정책 조합을 비교한다." },
        { name: "Netherlands · Costa Rica", role: "시장 기반 조건", detail: "보조금·세제 감면과 충전망, 재생에너지 전력 조건이 기업의 총비용 계산을 어떻게 바꾸는지 설명한다." }
      ],
      outline: [
        { label: "문제 정의", title: "누가 차량과 충전 비용을 부담하는가", body: "기업 소유 차량, 직원 운전 차량, 플랫폼 파트너 차량을 구분하고 구매·렌탈·충전·정산 비용의 주체를 그린다." },
        { label: "사례 A", title: "Zomato: 소유 대신 접근 가능성을 설계", body: "렌탈·리스·금융 파트너십과 디지털 도구를 통해 독립 배송 파트너의 높은 초기 비용 장벽을 낮춘 부분을 다룬다." },
        { label: "사례 B", title: "Mitie: 직원 개인 비용을 남기지 않기", body: "가정 충전과 공공 충전 비용을 지원하고 업무에 맞는 차량을 배치해 운전자의 비용 중립성을 만든 부분을 다룬다." },
        { label: "비교", title: "외부 파트너 금융과 내부 비용 정책", body: "Zomato는 생태계 파트너를 통해 접근성을 넓히고, Mitie는 고용 관계 안에서 비용과 운영 부담을 재배분한다." },
        { label: "외부 조건", title: "인센티브는 총비용을 바꾸지만 기업 실행을 대신하지 않는다", body: "Norway·Delhi·Netherlands·Costa Rica의 정책 수단을 별도 표로 묶어 적용 가능 조건과 한계를 보여준다." },
        { label: "EV100 연결", title: "비용 장벽을 공동 정책 요구로", body: "개별 금융상품을 EV100의 혜택처럼 쓰지 않고, 회원 수요와 비용 데이터를 바탕으로 정책 옹호가 가능한 지점을 제시한다." }
      ],
      applyQuestions: ["차량 이용자가 초기 비용을 직접 부담하는 구조인가?", "구매·렌탈·충전비를 한 장의 총비용으로 비교했는가?", "현재 지역의 세제·보조금이 사라져도 유지 가능한가?"],
      ev100Link: "회원사가 공통으로 겪는 가격·금융 장벽을 집계해 정책입안자에게 전달하고, 비용 구조를 바꾼 사례를 공유하는 역할로 설명한다."
    },
    {
      number: 4,
      title: "대형 차량(HDV)의 기술·운영적 한계",
      cases: "Maersk vs LMEL",
      compare: "대규모 실증 운행 ↔ 기존 장비 전동화 개조",
      status: "mixed",
      statusLabel: "혼합 근거",
      correction: "Maersk·LMEL 실행과 Geopost의 정책 옹호를 서로 다른 층으로 분리",
      answer: "대형차 전환은 완성차 도입만의 문제가 아니다. 실제 노선 실증, 충전·적재 조건 검증, 기존 장비 개조, 재생에너지 통합을 운영 환경에 맞춰 선택해야 한다.",
      caseA: {
        name: "A.P. Moller–Maersk",
        descriptor: "컨테이너 물류 · 도로 화물",
        focus: "실제 노선의 대규모 전기트럭 파일럿",
        detail: "시장보다 앞서 전기 대형트럭을 실제 물류 노선에 투입해 주행·충전·운전자 경험을 검증했다. 원문은 미국 캘리포니아 중심으로 2022년부터 70대 이상 전기트럭을 확대하고 독일·중국에서도 파일럿을 진행한 것으로 설명한다.",
        basis: "첨부 케이스 요약자료 + EV100 MHDV 회원 현황 · 원출처 보강 필요"
      },
      caseB: {
        name: "Lloyds Metals & Energy (LMEL)",
        descriptor: "광산·금속 · 비도로 중장비",
        focus: "디젤 광산 장비의 전기 개조와 재생에너지 통합",
        detail: "구매 가능한 완성 장비가 제한된 광산에서 기존 디젤 장비를 전동화 개조하고 재생에너지 기반 인프라를 결합했다. 원문은 디젤 사용 29,500kL 감소와 79,500tCO₂ 회피를 제시한다.",
        basis: "첨부 케이스 요약자료 + EV100 MHDV 회원 현황 · 원출처 보강 필요"
      },
      supportingCases: [
        { name: "Geopost", role: "정책 보조 사례", detail: "초기 전기트럭 도입만으로 해결되지 않는 가격·차량 공급·규제 장벽을 EV100+ 정책 워킹그룹의 공동 목소리로 전환했다. 원문 목표는 2030년 저배출 linehaul 50%, 2040년 100%다." }
      ],
      outline: [
        { label: "문제 정의", title: "차량·노선·장비를 한꺼번에 일반화하지 않기", body: "도로 화물차와 광산 중장비의 주행, 적재, 충전, 정비 조건을 분리해 비교 가능한 범위를 먼저 밝힌다." },
        { label: "사례 A", title: "Maersk: 실제 운행으로 기술과 운영을 동시에 검증", body: "대규모 파일럿에서 노선 적합성, 충전 계획, 운전자 경험을 확인하고 다음 배치의 기준으로 만든 부분을 다룬다." },
        { label: "사례 B", title: "LMEL: 새 장비를 기다리지 않고 기존 자산 개조", body: "광산 장비를 전동화하고 재생에너지를 결합해 비도로 환경의 비용·안전·전력 문제를 함께 해결한 부분을 다룬다." },
        { label: "비교", title: "완성차 도입과 기존 자산 전환의 판단 기준", body: "차량 공급, 자산 잔여수명, 운행 반복성, 충전 전력원을 기준으로 신규 구매와 개조의 선택지를 비교한다." },
        { label: "정책 조건", title: "Geopost: 실증 뒤의 확산 장벽을 공동 의제로", body: "중대형차 비용과 시장 장벽은 기업 파일럿만으로 해소되지 않으므로 정책 옹호를 별도 확산 조건으로 제시한다." },
        { label: "EV100 연결", title: "중량차 경험과 정책 목소리를 연결", body: "EV100+의 역할은 특정 기술을 공급하는 것이 아니라 회원 경험, 공동 수요 신호, 정책 워킹그룹을 연결하는 데 있다고 한정한다." }
      ],
      applyQuestions: ["신규 구매와 기존 장비 개조 중 자산수명에 맞는 선택은 무엇인가?", "실제 적재·노선·충전 조건을 검증할 파일럿이 있는가?", "기업 혼자 해결할 수 없는 차량·정책 장벽은 무엇인가?"],
      ev100Link: "중량차 회원사의 실증 데이터를 공유하고, 개별 기업이 해결하기 어려운 공급·비용·정책 장벽을 공동 수요와 정책 의제로 전환한다."
    },
    {
      number: 5,
      title: "사회적 형평성 및 접근성 격차",
      cases: "Zomato vs LMEL",
      compare: "개인 운전자의 EV 접근성 ↔ 지역 일자리·역량 연계",
      status: "source-needed",
      statusLabel: "원출처 보강 필요",
      correction: "기업 사례를 중심에 두고 Seattle·Maharashtra는 정책 외부 조건으로 분리",
      answer: "전환의 형평성을 개인이 EV를 이용할 수 있는 조건과 지역사회가 일자리·기술·에너지 혜택에 참여하는 조건으로 나눠 설계한다.",
      caseA: {
        name: "Zomato",
        descriptor: "음식배달 플랫폼 · 독립 배송 파트너",
        focus: "렌탈·금융으로 운전자의 EV 접근성 확대",
        detail: "차량을 직접 구매하기 어려운 배송 파트너에게 렌탈·리스, 금융 지원, 충전·디지털 도구를 연결해 소유 여부와 무관하게 EV 전환에 참여할 수 있게 한 부분을 형평성 관점에서 다룬다.",
        basis: "첨부 케이스 요약자료 기반 · 3편과 다른 접근성 렌즈로 활용"
      },
      caseB: {
        name: "Lloyds Metals & Energy (LMEL)",
        descriptor: "광산·금속 · 지역 기반 중장비 운영",
        focus: "전동화 개조를 지역 일자리·에너지 혜택과 연결",
        detail: "광산 장비 전동화와 재생에너지 인프라를 추진하면서 지역 일자리, 인근 마을 전기화, 직원의 참여와 자긍심까지 함께 다룬다. 원문은 디젤 사용 29,500kL 감소와 79,500tCO₂ 회피를 제시한다.",
        basis: "첨부 케이스 요약자료 기반 · 4편과 다른 지역 형평성 렌즈로 활용"
      },
      supportingCases: [
        { name: "Seattle", role: "접근성 외부 조건", detail: "EV-ready 건축 규정과 공동체 참여를 결합해 임차인·다세대 주택 거주자·운송 노동자의 충전 접근성을 높이는 정책 사례로 연결한다." },
        { name: "Maharashtra", role: "지역 역량 외부 조건", detail: "EV 제조·충전·기술교육을 묶어 약 10만 개 일자리 목표를 제시한 주정부 사례를 기업의 지역 인력 전략과 구분해 배치한다." }
      ],
      outline: [
        { label: "문제 정의", title: "개인의 참여 기회와 지역의 전환 역량을 분리", body: "차량 소유·금융·충전 접근성과 지역 일자리·교육·에너지 혜택을 별도 지표로 보고 누가 전환에서 빠지는지 확인한다." },
        { label: "사례 A", title: "Zomato: 배송 파트너가 EV에 접근할 경로 만들기", body: "렌탈·금융·디지털 파트너십으로 독립 운전자의 높은 초기 비용과 정보 장벽을 낮춘 부분을 다룬다." },
        { label: "사례 B", title: "LMEL: 현장 전동화를 지역의 혜택으로 확장", body: "장비 개조와 재생에너지 인프라가 지역 일자리, 마을 전기화, 직원 참여와 연결된 부분을 다룬다." },
        { label: "비교", title: "이용 기회를 넓히는 해법과 지역 역량을 남기는 해법", body: "Zomato는 개인 운전자의 참여 문턱, LMEL은 사업장 주변의 고용·에너지·기술 혜택에 초점을 둔다." },
        { label: "외부 조건", title: "Seattle·Maharashtra는 기업 밖의 형평성 조건", body: "주거 형태별 충전 접근성과 산업·인력 정책을 기업 사례의 직접 성과가 아닌 공공정책 보완 조건으로 보여준다." },
        { label: "EV100 연결", title: "형평성 장벽을 회원 공동 의제로", body: "기업 사례와 공공정책을 EV100의 직접 성과로 귀속하지 않고, 접근성과 인력 장벽을 사례 공유·정책 대화의 의제로 제시한다." }
      ],
      applyQuestions: ["차량을 소유하지 않은 운전자도 전환에 참여할 수 있는가?", "지역 일자리·교육·에너지 혜택을 별도로 측정하는가?", "주거와 지역에 따른 충전 접근성 격차를 파악했는가?"],
      ev100Link: "회원사가 반복해서 확인한 금융 접근성·지역 인력·충전 격차를 정책 대화와 사례 공유의 공동 의제로 만든다."
    },
    {
      number: 6,
      title: "시장 미성숙 및 차량 가용성 부족",
      cases: "TEPCO vs Ingka Group (IKEA)",
      compare: "OEM 협업·특화 차종 ↔ 시장별 단계적 로드맵",
      status: "usable",
      statusLabel: "역할 근거 확인",
      correction: "일본 업무용 차량과 글로벌 배송 생태계의 차이를 본문에서 명시",
      answer: "모든 시장에 같은 차량과 기한을 적용하지 않고, 현지 차종 개발·OEM 협업과 시장 성숙도별 단계적 전환을 병행한다.",
      caseA: {
        name: "TEPCO",
        descriptor: "전력 유틸리티 · 일본 업무용 차량",
        focus: "OEM 협업과 일본형 경차(Kei EV) 도입",
        detail: "현지에서 필요한 차종이 부족한 상황에서 먼저 차량을 도입해 운행 지식을 쌓고 OEM 협업·충전 인프라·직원 참여를 묶었다. 원문은 3,400대 이상 EV 도입, 2025년 50%, 2030년 100% 전동화 목표를 제시한다.",
        basis: "기업 공식 인터뷰·가입 발표 + 첨부 케이스 요약자료"
      },
      caseB: {
        name: "Ingka Group (IKEA)",
        descriptor: "리테일 · 다국가 라스트마일 배송",
        focus: "지역별 배송 생태계에 맞춘 단계적 전환",
        detail: "차량 공급, 배송 파트너, 충전과 규제가 다른 여러 시장에서 현지 맞춤 배송 모델을 운영하고 EV100과 정책입안자 관여를 병행한 부분을 다룬다.",
        basis: "기업 공식 사례 페이지 · EV100 참여 역할 확인"
      },
      supportingCases: [
        { name: "AstraZeneca", role: "현지화 보조 사례", detail: "국가별 인프라와 시장 조건에 따라 전환 속도와 지원 방식을 조정한 글로벌 차량 운영 사례를 연결한다." },
        { name: "Siemens", role: "시장 분류 보조 사례", detail: "차량 공급·충전·비용을 반영한 시장 성숙도 분류를 내부 목표와 국가별 실행계획으로 번역한 방식을 판단 도구로 제시한다." }
      ],
      outline: [
        { label: "문제 정의", title: "차가 없는 것과 시장이 준비되지 않은 것을 구분", body: "차종, 가격, 납기, 충전망, 서비스, 규제와 파트너 역량을 시장 성숙도의 별도 항목으로 평가한다." },
        { label: "사례 A", title: "TEPCO: 현지 특화 차종을 OEM과 함께 넓히기", body: "일본의 경차 중심 업무 수요에 맞춰 실제 도입 데이터를 쌓고 OEM 협업과 공개 수요 신호로 선택지를 확대한 부분을 다룬다." },
        { label: "사례 B", title: "Ingka: 시장마다 다른 배송 생태계에 맞추기", body: "자체 차량만이 아니라 배송 파트너, 도시 규제, 충전 여건을 함께 보며 지역별 전환 경로를 설계한 부분을 다룬다." },
        { label: "비교", title: "제품 선택지 만들기와 실행 순서 정하기", body: "TEPCO는 현지 차종 가용성을 높이는 데, Ingka는 여러 시장에서 실행 가능한 모델을 현지화하는 데 초점을 둔다." },
        { label: "보조 사례", title: "AstraZeneca·Siemens의 시장 성숙도 판단", body: "현지화와 단계적 전환이 단순한 목표 후퇴가 되지 않도록 객관적 시장 분류와 정기 재평가 방식을 보완한다." },
        { label: "EV100 연결", title: "시장 정보와 수요 신호를 회원 공동 자산으로", body: "TEPCO의 공개 목표·지식 공유, Ingka의 정책 관여, Siemens의 기준 명확화처럼 확인된 역할만 구분해 제시한다." }
      ],
      applyQuestions: ["부족한 것은 차종·납기·가격 중 무엇인가?", "시장 성숙도를 정기적으로 다시 평가하는 기준이 있는가?", "OEM과 정책입안자에게 중장기 수요를 함께 전달할 수 있는가?"],
      ev100Link: "회원사의 시장 정보와 공개 수요를 모아 OEM·정책 결정자에게 전달하고, 단계적 전환 기준을 서로 학습하는 역할로 설명한다."
    }
  ],
  governmentCases: [
    {
      problem: "높은 초기 비용과 수요 부족",
      compare: "장기 인센티브·인프라 ↔ 구매지원·규제 전환",
      answer: "가격 격차를 줄이는 정책은 보조금 하나가 아니라 예측 가능한 인센티브, 충전망, 내연기관 전환 신호를 함께 설계할 때 작동한다.",
      caseA: {
        name: "Norway",
        descriptor: "국가 정책 · 승용·상용 EV 시장",
        focus: "장기 인센티브와 오염자 부담형 과세",
        measures: "VAT 면제·통행료 감면, 충전 인프라 투자, 국가 목표, Enova 공공자금, 내연기관 차량 세금으로 EV 인센티브 재원 마련",
        results: "2025년 신차 판매 100% 무배출 목표와 세계 최고 수준의 EV 보급·충전망을 함께 추진",
        implication: "기업은 차량 구매가뿐 아니라 세제·통행료·충전 운영비를 포함한 총비용을 장기 정책 시나리오로 계산한다.",
        basis: "첨부 2026 EV100 Case Study 요약자료 기반"
      },
      caseB: {
        name: "Delhi",
        descriptor: "도시 정책 · 상용차·도심 운송",
        focus: "구매·폐차 지원과 단계적 ICE 등록 제한",
        measures: "전기 상용차 구매지원 최대 ₹100,000, 대상자 100,000명 폐차 인센티브, 차종별 내연기관 등록 제한, 대규모 충전망 투자",
        results: "2026~2030년 ₹15,000 crore 투자, 충전소 32,000개 계획, 2027년 EV 등록 95% 목표",
        implication: "기업은 보조금만 기다리지 않고 차량 교체 주기·폐차·충전 거점 계획을 규제 일정과 함께 관리한다.",
        basis: "첨부 2026 EV100 Case Study 요약자료 기반"
      },
      applyQuestions: ["보조금이 사라져도 유지되는 총비용 구조인가?", "차량 교체·폐차 일정이 지역 규제와 맞물려 있는가?"]
    },
    {
      problem: "충전망·시장 생태계가 따로 움직임",
      compare: "국가·도시·산업 공동 설계 ↔ 재생에너지·교통 통합",
      answer: "충전기 숫자만 늘리는 것보다 국가 전략, 도시 규제, 산업 협력, 전력원의 성격을 하나의 시장 설계로 묶어야 확산이 빨라진다.",
      caseA: {
        name: "Netherlands",
        descriptor: "국가·도시 정책 · 교통·기후 전환",
        focus: "ZEV 전략과 도시·산업 협업",
        measures: "국가 ZEV 전략, 규제 목표, 재정 인센티브, 충전 인프라, 30개 이상 도시의 무배출 화물 구역, 공공·민간 협력",
        results: "신차 등록 EV 20.5%, 충전기 66,000개, 유럽 최고 수준 충전기-차량 비율, EV 분야 일자리 6,800개",
        implication: "기업은 사업장 충전뿐 아니라 납품 도시의 무배출 구역, 공공 충전망, 파트너 차량의 운영 조건을 함께 본다.",
        basis: "첨부 2026 EV100 Case Study 요약자료 기반"
      },
      caseB: {
        name: "Costa Rica",
        descriptor: "국가·에너지 정책 · 대중교통·관광",
        focus: "재생에너지 전력과 전국 충전축 결합",
        measures: "전국 주요 도로 급속충전망, 세금 전액 면제, 대중교통 전동화, 공공조달 정책, Costa Rica–Panama 지역 EV 회랑",
        results: "2021년 EV 보급 40% 증가, 승용·이륜차·특수차를 포함한 4,658대 보급, 지속가능 관광 이동 경로 확대",
        implication: "기업은 차량 전환의 배출 효과를 전력 믹스·물류 회랑·관광·대중교통과 연결해 계산한다.",
        basis: "첨부 2026 EV100 Case Study 요약자료 기반"
      },
      applyQuestions: ["우리 차량이 운행하는 도시의 무배출 구역 일정은 무엇인가?", "충전에 쓰는 전력의 배출계수와 공급 안정성을 확인했는가?"]
    },
    {
      problem: "전환 혜택과 부담의 지역·계층 격차",
      compare: "주거·이동권 형평성 ↔ 산업·인력 전환",
      answer: "형평성은 충전기 평균 개수만의 문제가 아니다. 누가 충전할 수 있고, 누가 교육·일자리·지역 에너지 혜택을 얻는지까지 정책 설계에 포함해야 한다.",
      caseA: {
        name: "Seattle",
        descriptor: "도시 정책 · 임차인·다세대 주거",
        focus: "EV-ready 건축과 기후정의 결합",
        measures: "EV-ready 건축 규정, 인종 형평성 정책 통합, 이해관계자 공동 설계, 취약 지역·다세대 주택·운송 노동자 접근성 반영",
        results: "2030년 무배출 공유 모빌리티 100%, 시정부 차량 100% 무화석연료, 개인 이동의 90% 무배출 목표",
        implication: "기업은 직원·협력사의 주거 유형과 충전 접근성, 이동비 부담을 차량 조달 KPI와 분리해 확인한다.",
        basis: "첨부 2026 EV100 Case Study 요약자료 기반"
      },
      caseB: {
        name: "Maharashtra",
        descriptor: "주정부 정책 · 제조·대중교통·인력",
        focus: "수요 인센티브와 산업·기술교육 패키지",
        measures: "2021년 종합 EV 정책, 재정 인센티브, 배터리·부품 제조 지원, 충전망, 공공 차량 목표, 기술교육, 11,900개 지방정부 참여",
        results: "38,000대 EV 운행, 2021년 전기버스 476대 배치, 제조·기술교육을 통한 100,000개 일자리 목표",
        implication: "기업은 차량 전환을 구매 프로젝트로 끝내지 않고 지역 채용·재교육·공급망 역량과 함께 설계한다.",
        basis: "첨부 2026 EV100 Case Study 요약자료 기반"
      },
      applyQuestions: ["우리 전환의 비용·교육·충전 혜택에서 빠지는 집단은 누구인가?", "지역 인력과 협력사의 기술 전환을 계획에 포함했는가?"]
    }
  ],
  governmentSpotlights: [
    {
      name: "Queensland",
      label: "광역 충전 인프라",
      detail: "주 전역 6,500km 네트워크에 54개 예정 부지 중 47개 충전소를 운영하고, 153,670회 충전과 1,620만km EV 주행을 가능하게 했다. 기업의 장거리 운행을 가능하게 하는 외부 조건으로 읽는다."
    }
  ],
  governmentFramework: [
    {
      owner: "기업이 지금 할 수 있는 것",
      examples: "차량 선별, 운행 데이터, 단계적 전환, 사업장 충전, 직원 지원",
      purpose: "독자가 바로 적용할 수 있는 실행 영역"
    },
    {
      owner: "정부·시장이 만들어야 하는 조건",
      examples: "광역 충전망, 인센티브, 규제 안정성, 차량 공급, 전력망",
      purpose: "기업 혼자 해결하기 어려운 외부조건"
    },
    {
      owner: "EV100을 통한 공동행동",
      examples: "정책 워킹그룹, 공동 수요 신호, 사례·지식 공유, 진행 보고",
      purpose: "기업의 반복되는 장벽을 공동 의제로 전환"
    }
  ],
  guardrails: [
    "기업의 모든 성과를 EV100에 귀속하지 않는다.",
    "회원 가입 사실과 성과 사이의 인과관계를 자동으로 가정하지 않는다.",
    "기업 행동·정부 조건·EV100 역할을 문단과 표에서 분리한다.",
    "해외 사례를 한국 기업에 적용할 때는 판단 질문으로 전환한다.",
    "직접 인용, 기업 공식 서술, 편집 해석을 시각적으로 구분한다."
  ],
  membershipLinks: [
    {
      title: "가입 혜택",
      description: "네트워크·지식, 정책 옹호, 리더십 프로필, 진척도 보고",
      url: "https://www.theclimategroup.org/join-ev100",
      cta: "혜택 보기"
    },
    {
      title: "상세 가입 기준",
      description: "차량 구간·시장별 기한, 자격, 예외, 연회비, 가입 절차",
      url: "https://www.theclimategroup.org/hubfs/EV100/EV100%20Commitment%20-%20Detailed%20Criteria.pdf?hsLang=en",
      cta: "Criteria 열기"
    },
    {
      title: "FAQ",
      description: "가입 전 실무 질문과 조건 확인",
      url: "https://www.theclimategroup.org/transportmembershipFAQs?hsLang=en",
      cta: "FAQ 열기"
    },
    {
      title: "관심 등록",
      description: "Climate Group 담당팀과 가입 가능성 논의",
      url: "https://2f8bnb.share-eu1.hsforms.com/2RkYxmFQOQAm1DDjouwLC8g",
      cta: "상담 시작"
    }
  ],
  sourceDocs: [
    {
      title: "Climate Group EV100 - Progress and Insights 2026 Report (1).pdf",
      strength: "공식 연례보고서",
      coverage: "EV100 역할·회원 성과·AstraZeneca 및 기준·진척도 교차 확인",
      url: "file:///H:/내%20드라이브/AI-Workspace/2026%20EV100%20%EC%BC%80%EC%9D%B4%EC%8A%A4%20%EC%8A%A4%ED%84%B0%EB%94%94/Archive/Climate%20Group%20EV100%20-%20Progress%20and%20Insights%202026%20Report%20(1).pdf#page=15"
    },
    {
      title: "Case study_Siemens_mar2026 - 복사본.pdf",
      strength: "기업 발표자료",
      coverage: "EV100 기준·시장 성숙도 분류·Siemens 내부 거버넌스(p.8–12)",
      url: "file:///H:/내%20드라이브/AI-Workspace/2026%20EV100%20%EC%BC%80%EC%9D%B4%EC%8A%A4%20%EC%8A%A4%ED%84%B0%EB%94%94/Archive/Case%20study_Siemens_mar2026%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8.pdf#page=8"
    },
    {
      title: "2026 EV100 Case Study - 복사본.pdf",
      strength: "요약 사례집",
      coverage: "기업·정부 사례별 정책 수단·결과 수치·기업 적용 조건",
      url: "file:///H:/내%20드라이브/AI-Workspace/2026%20EV100%20%EC%BC%80%EC%9D%B4%EC%8A%A4%20%EC%8A%A4%ED%84%B0%EB%94%94/Archive/2026%20EV100%20Case%20Study%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8.pdf"
    }
  ]
};
