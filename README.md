# Lee Doyeop — Developer Portfolio

GitHub Pages에서 호스팅하는 정적 개발 포트폴리오입니다. HTML, CSS, JavaScript만 사용하므로 패키지 설치나 빌드가 필요하지 않습니다.

## 구성

- `index.html`: 소개, DYClaw 프로젝트, 공개 포크, 기술 스택, GitHub 연결
- `styles.css`: 반응형 화면과 접근성 스타일
- `script.js`: 에이전트 역할 설명 전환
- `.nojekyll`: Jekyll 처리를 생략하는 GitHub Pages 설정
- `CNAME`: GitHub Pages의 사용자 지정 도메인 `doyeop.dev`

## 내용 수정

프로젝트 설명은 `index.html`, 협업 역할 설명은 `script.js`에서 수정합니다. `main` 브랜치 루트를 GitHub Pages 게시 소스로 사용합니다.

## 출처 및 표현 원칙

- DYClaw는 비공개 EJClaw 기반 커스텀 프로젝트입니다. 사용자에게 공개를 허용받은 개요와 기술 스택만 소개하며 코드, 환경 값, 운영 정보는 포함하지 않습니다.
- 공개 `ocean-guardian`과 `nest`는 포크입니다. 원본에서 추가된 커밋이 확인되지 않아 독자 구현이나 기여 실적으로 소개하지 않습니다.
- Ocean Guardian의 데이터는 샘플이며 실시간 API나 PWA 구현을 주장하지 않습니다.
- 취업 상태, 경력, 학력, 성과 수치, 이메일은 제공받지 않아 작성하지 않았습니다.

## 도메인 연결

사용 도메인: `doyeop.dev`.

GitHub Pages의 Custom domain을 먼저 설정한 다음 Cloudflare DNS를 연결합니다. 루트 도메인의 A 레코드 값은 `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`입니다. `www` CNAME은 `leedoyeop-github.github.io`입니다. 최초 연결 시 DNS only로 인증서를 발급하고 GitHub Pages의 Enforce HTTPS를 활성화합니다.

2026-10-02에 Custom domain, A 레코드 4개, www CNAME을 설정했습니다. GitHub 계정에서 도메인 소유권 확인을 완료했으며 `_github-pages-challenge-leedoyeop-github` TXT 레코드는 Cloudflare에 유지합니다. 이메일용 MX, SPF, DKIM 레코드는 그대로 유지합니다.

공식 문서: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
